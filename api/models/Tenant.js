/***************************************************************************

  Model          : Tenant
  Database Table : Tenant

  *************************
  Column      :   type
  *************************

  name        :   string
  email       :   string
  password    :   string
  dbname     :   string
  *************************

***************************************************************************/

module.exports = {
  attributes: {
    name     : { type: 'string', required: true },
    email    : { type: 'string', required: true, isEmail: true, unique: true },
    password : { type: 'string', required: true },
    dbname   : { type: 'string', required: true }
  }
};

