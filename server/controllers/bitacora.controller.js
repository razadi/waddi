const { response, request } = require('express');
const db =  require('../models');
const Bitacora = db.bitacora;
const { QueryTypes } = require('sequelize');

const getBitacora = async (req = request, res = response) => {
  const query = `select concat(u.name, ' ', b.action, ' ', p.title) as item 
                from bitacoras b inner join users u on (u.id=b.userId) inner join posts p on (p.id=b.postId)
                order by b.createdAt desc`;
  const items = await db.sequelize.query(query, { type: QueryTypes.SELECT });
  res.json({total: items.length, items});
};

const addBitacora = async (req = request, res = response) => {
  const { userId, postId, action } = req.body;
  const bitacora = await Bitacora.create({ userId, postId, action });
  res.json({bitacora});
};

module.exports = {
  getBitacora,
  addBitacora
};