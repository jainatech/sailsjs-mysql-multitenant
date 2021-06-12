/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Admin routes                                                              *
  *                                                                          *
  ***************************************************************************/

  'POST /admin/tenant'         : 'TenantController.add',
  'GET  /admin/tenant/:id'     : 'TenantController.findById',
  'GET  /admin/tenant'         : 'TenantController.find',
  'DELETE /admin/tenant/:id'   : 'TenantController.delete',

  /***************************************************************************
  *                                                                          *
  * Tenant routes                                                              *
  *                                                                          *
  ***************************************************************************/

  'POST /tenant/customer'         : 'CustomerController.add',
  'GET  /tenant/customer/:id'     : 'CustomerController.findById',
  'GET  /tenant/customer'         : 'CustomerController.find',
  'DELETE /tenant/customer/:id'   : 'CustomerController.delete',

};
