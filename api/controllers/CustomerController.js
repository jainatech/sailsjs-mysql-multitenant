/***************************************************************************

  Controller     : CustomerController

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
    const { name,
      phone,
      address,
      state } = req.allParams();
    await Customer.create({
      name,
      phone,
      address,
      state
    }).fetch().usingConnection(sails.config.db);
    return res.ok('customer added');
  },
  delete: async function (req, res) {
    await Customer.destroy({ id: req.params.id });
    return res.ok('customer deleted');
  },
  find: async function (req, res) {
    const results = await Customer.find().usingConnection(sails.config.db);
    return res.ok({ message : 'customers list', data: results});
  },
  findById: async function (req, res) {
    const result = await Customer.find({ id: req.params.id });
    return res.ok({ message : 'customer detail', data: result});
  },
};
