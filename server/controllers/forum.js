const Category = require("../models/forum/category");
const Thread = require('../models/forum/thread');
const Post = require('../models/forum/post');
const User = require('../models/user');
const post = require("../models/forum/post");

exports.new_category = async (req, res) => {
    const { userId, title } = req.body;
    const newCategory = new Category({userId, title})
    try {
        const result = await newCategory.save();
        res.send(result)
    } catch(err) {
        console.log(err);
    }
};

exports.all_categories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({categories})
    } catch(err) {
        console.log(err)
    }
};

exports.single_category = (req, res) => {
    res.send('hello from single category')
};

exports.new_thread = async (req, res) => {
    const { title, userId, categoryId, content} = req.body;
    const newThread = new Thread({title, userId, categoryId});
    try {
        const thread = await newThread.save();
        const newPost = new Post({content, userId, threadId: thread._id});
        const result = await newPost.save();
        res.send(result)
    } catch(err) {
        console.log(err);
    }
};

exports.all_threads = async (req, res) => {
    let threads = await Thread.find()
                    .populate('userId', 'username')
                    .populate('categoryId', 'title');

    for (let i = 0; i < threads.length; i++) {
        let posts = await Post.find({threadId: threads[i]._id}).exec();
        threads[i].comments = posts.length;
    }

    res.send(threads)
};

exports.single_thread = async (req, res) => {
    try {
        let thread = await Thread.findOne({slug: req.params.slug});
        await Thread.updateOne({_id: thread._id}, {$set: {views: thread.views + 1}})
        let posts = await Post.find({threadId: thread._id}).populate('userId', 'username created posts');
        res.status(200).json({
            threadId: thread._id,
            posts: posts
        })
    } catch(err) {
        console.log(err)
    }
};

exports.new_post = async (req, res) => {
    const { content, threadId, userId } = req.body;
    const newPost = new Post({content, threadId, userId});
    try {
        const result = await newPost.save();
        const user = await User.findById({_id: userId});
        const totalPosts = user.posts += 1
        await User.updateOne({_id: userId}, {$set: {posts:  totalPosts}})
        res.send(result)
    } catch(err) {
        console.log(err)
    }
};

exports.last_five_posts = async (req, res) => {
    try {
        const posts = await Post.find().populate('userId', 'username').populate('threadId', 'title categoryId slug');
        const lastThreePosts = posts.reverse().splice(0, 5);
        res.send(lastThreePosts);
    } catch(err) {
        console.log(err);
    }
};

exports.single_post = (req, res) => {
    res.send('hello from single post')
};