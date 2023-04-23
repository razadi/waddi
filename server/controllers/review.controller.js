const { response, request } = require('express');
const db =  require('../models');
const Review = db.review;
const { QueryTypes } = require('sequelize');

const getReviews = async (req = request, res = response) => {
  const query = `select * 
                from reviews r inner join users u on (u.id=r.userId) inner join posts p on (p.id=r.postId)
                order by r.createdAt desc`;
  const items = await db.sequelize.query(query, { type: QueryTypes.SELECT });
  res.json({total: items.length, items});
};

const addReview = async (req = request, res = response) => {
  const { userId, postId, action } = req.body;
  const review = await Review.create({ userId, postId, action });
  res.json({review});
};

const patchReview = async (req = request, res = response) => {
  const {userId, postId} = req.params;
  const {...body} = req.body;
  const review = await Review.update(body, {where: {userId, postId}});
  res.json({review});
};

module.exports = {
  getReviews,
  addReview,
  patchReview
};