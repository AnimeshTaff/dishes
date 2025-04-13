const recipe = require('./src/content-types/recipe');

module.exports = {
  contentTypes: {
    recipe,
  },
  controllers: require('./src/controllers/recipe'),
  services: require('./src/services/recipe'),
  routes: require('./src/routes/recipe'),
};
