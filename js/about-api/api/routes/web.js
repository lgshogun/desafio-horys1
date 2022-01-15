module.exports = app => {
    const controller = require('../controllers/web.js')();

    app.route('/api/v1/web')
        .get(controller.listWeb);
 };