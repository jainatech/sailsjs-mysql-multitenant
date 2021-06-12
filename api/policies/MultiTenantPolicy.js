module.exports = async (req, res, next) => {
  let Driver = sails.getDatastore().driver;
  let manager = (
    await Driver.createManager({ connectionString: req.param('connection') })
  ).manager;
  let conn = await Driver.getConnection({manager: manager});
  sails.config.db = conn.connection;
  next();
};
