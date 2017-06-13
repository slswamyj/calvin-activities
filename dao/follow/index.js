const followapi = [];
const circles=[];
const mailbox=[];
const idCounter = -1;
const id=0;

function addFollow(circleId, mailboxId) {
  const newuser = {
    circleId,
    mailboxId,
  };
  followapi.push(newuser);
  return newuser;
}

function checkIfFollowExists(circleId, mailboxId) {
  const filteredFollowers = followapi.filter(follow => follow.circleId === circleId && follow.mailboxId === mailbox);
  return filteredFollowers.length !== 0;
}
function deleteFollow(circleId, mailboxId) {
  const filter = followapi.filter(y => y.circleId === circleId && y.mailboxId === mailboxId);
  followapi.splice(followapi.indexOf(filter[0]), 1);
  return filter[0];
}

module.exports = {
  deleteFollow,
  addFollow,
  checkIfFollowExists,

};
