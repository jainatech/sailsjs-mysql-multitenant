/***************************************************************************

  Model          : Tenant
  Database Table : Tenant

  *************************
  Column      :   type
  *************************

  name        :   string
  phone       :   string
  address     :   string
  state       :   string
  *************************

***************************************************************************/

module.exports = {
  attributes: {
    name     : { type: 'string', required: true },
    phone    : { type: 'string', required: true},
    address : { type: 'string', required: true },
    state   : { type: 'string', required: true }
  }
};

