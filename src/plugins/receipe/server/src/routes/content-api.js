export default [
  {
    method: 'GET',
    path: '/',
    // name of the controller file & the method.
    handler: 'controller.index',
    auth: false,
    config: {
      policies: [],
    },
  },

  {
    method: 'GET',
    path: '/test',
    // name of the controller file & the method.
    handler: 'test.test',
    auth: false,
    config: {
      policies: [],
    },
  },

];
