exports.options = {
  routePrefix: '/doc',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'EBG Admin Panel API',
      description: 'This is the documentation of API Used in EBG Admin Panel ',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'documented with swagger'
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
};
