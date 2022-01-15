module.exports = () => {
    const webDB = require('../data/web.json');
    const controller = {};

    controller.listWeb = (req, res) => res.status(200).json(webDB);

    return controller;
}