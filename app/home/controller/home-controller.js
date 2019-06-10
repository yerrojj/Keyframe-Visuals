const async = require("async");

module.exports.getHome = (req, res) => {
	res.render('home/home.ejs', { success: true });
};


module.exports.getBlogs = (req, res) => {
	res.render('blog/blog.ejs', { success: true });
};


module.exports.getCredits = (req, res) => {
	res.render('faqs-credits/credits.ejs', { success: true });
};