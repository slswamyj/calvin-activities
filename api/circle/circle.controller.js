<<<<<<< HEAD
const dao = require('../../dao/circle');

function createCircle(req, res) {
  res.status(201).json(dao.createCircle());
}

function deleteCircle(req, res) {
  const CircleExist = dao.checkIfCircleExists(req.params.circleId);
  if (CircleExist) {
    const result = dao.deleteCircle(req.params.circleId);
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: `Circle id ${req.params.circleId} does not exist` });
  }
}

module.exports = {
  createCircle, deleteCircle,
=======
const dao = require('../../dao/follow/index.js');

const circle = [];
let id = 0;

function follow(req, res) {
  const checkFollow = dao.checkIfFollowExists(req.params.circleId, req.params.mailboxId);
  if (checkFollow === true) {
    res.status(405).send('User already Exists');
  } else {
    const result = dao.addFollow(req.params.circleId, req.params.mailboxId);
    res.status(201).json(result);
  }
}
function unfollow(req, res) {
  const checkFollow = dao.checkIfFollowExists(req.params.circleId, req.params.mailboxId);
  if (checkFollow === false) {
    res.status(404).send('follower does not exist');
  } else {
    const result = dao.deleteFollow(req.params.circleId, req.params.mailboxId);
    res.status(200).json(result);
  }
}
function retrieveAllCircles(req, res) {
  res.status(200).json(circle);
}
function createNewCircle(req, res) {
  const newcircle = {
    id: id += 1,
  };
  circle.push(newcircle);
  res.status(201).json(newcircle);
}
function deleteCircle(req, res) {
  id = +req.params.id;
  const filteredCircle = circle.filter(circles => circles.id === id);
  if (filteredCircle.length === 0) { res.status(404).send(); return; }

  const index = circle.indexOf(filteredCircle[0]);
  circle.splice(index, 1);
  res.status(200).json(filteredCircle[0]);
}

module.exports = {
  retrieveAllCircles, createNewCircle, deleteCircle, follow, unfollow,
>>>>>>> 8443a00b2edb0927b974f44b346e1ecb6060119f
};
