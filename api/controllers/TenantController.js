/***************************************************************************

  Controller     : Tenant

  **************************************************
  Functions
  **************************************************

  add
  delete
  find
  findById
  **************************************************

***************************************************************************/

module.exports = {
  add: async (req, res) => {
    const { name, email, password } = req.allParams();
    let dbname = `sails_tenant_${name.replace(' ','_')}`.toLowerCase();
    await Tenant.create({
      name,
      email,
      password: password,
      dbname
    }).fetch();

    /**
     *
     * Dynamic Database creation
     *
     */

    let rdi = sails.getDatastore('default');

    // Grab the MySQL module from the datastore instance
    let mysql = rdi.driver.mysql;
    console.log('mysql',mysql);
    // Create a new connection
    let connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'root1234'
    });

    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbname}`,(err,res)=> {
      if(err){
        return console.log(err);
      }

      let connection1 = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root1234',
        database: dbname,
        debug: false,
        multipleStatements: true
      });
      connection1.connect();

      let sql = 'create table customer (id int NOT NULL AUTO_INCREMENT,name varchar(250),phone varchar(250),address varchar(250),state varchar(250),createdAt varchar(250),updatedAt varchar(250),PRIMARY KEY (id))';

      connection1.query(sql, (error, results, fields) => {
        if (error) {
          throw error;
        }
      });

      connection1.end();

    });


    return res.ok('tenant added');
  },
  delete: async function (req, res) {
    await Tenant.destroy({ id: req.params.id });
    return res.ok('tenant deleted');
  },
  find: async function (req, res) {
    const results = await Tenant.find();
    return res.ok({ message : 'tenant list', data: results});
  },
  findById: async function (req, res) {
    const result = await Tenant.find({ id: req.params.id });
    return res.ok({ message : 'tenant detail', data: result});
  },
};
