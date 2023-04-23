const { response, request } = require('express');
const db =  require('../models');
const Post = db.post;

// Lista de todos los posts
const getPosts = async (req = request, res = response) => {
  const query = {order: [['createdAt', 'DESC']]};

  const [ total, posts ] = await Promise.all([
    Post.count(query),
    Post.findAll(query)
  ]);

  res.json({total, posts});
}

// Regresa un post por id
const getPost = async (req = request, res = response) => {
  const {id} = req.params;
  const post = await Post.findOne({where: {id}});
  res.json(post);
}

// Agrega post
const addPost = async (req = request, res = response) => {    
  const { title, description, published } = req.body;
  const post = await Post.create({ title, description, published });
  res.json({post});
}

// Modifica post
const putPost = async(req = request, res = response) => {
  const {id} = req.params;
  const {...body} = req.body;
  const post = await Post.update(body, {where: {id}});
  res.json(post);
}

const delPost = async(req = request, res = response) => {
  const {id} = req.params;
  const post = await Post.destroy({where: {id}});
  res.json(post);
}

module.exports = {
  getPosts,
  getPost,
  addPost,
  putPost,
  delPost,
}