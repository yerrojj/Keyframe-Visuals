const express = require('express');
const router  = express();

const homeController = require('../controller/home-controller');

router.route('/').get(homeController.getHome);

router.route('/our-blog').get(homeController.getBlogs);
router.route('/faqs-credits').get(homeController.getCredits);

module.exports = router;
