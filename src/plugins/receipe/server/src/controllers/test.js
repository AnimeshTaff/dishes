module.exports = {
    test(ctx) {
      ctx.body = strapi
        .plugin('receipe')
        .service('service')
        .getWelcomeMessage();
    },
  };