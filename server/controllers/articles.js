const Article = require('../models/article');

exports.get_articles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.send(articles);
    } catch(err) {
        console.log(err);
    }
};

exports.get_single_article = (req, res) => {
    res.send('single articles');
};

exports.new_article = async (req, res) => {
    const newArticle = new Article({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        tags: req.body.tags
    });

    try {
        const article = await newArticle.save();
        res.send(article)
    } catch(err) {
        console.log(err);
    }
};

exports.delete_article = (req, res) => {
    res.send('delete_articles');
};

exports.update_article = (req, res) => {
    res.send('update_articles');
};
