const circleDAO = require('../circle');
const mailboxDAO = require('../mailbox');
const followDAO = require('.');

require('chai').should();

describe('Follow DAO', () => {
  describe('checkIfFollowExists', () => {
    let circleID;
    let mailboxID;
    before(() => {
      // TODO: Create Circle, and save circleID
      circleID = circleDAO.createCircle().id;
      // TODO: Create Mailbox, and save mailboxID
      mailboxID = mailboxDAO.createMailbox().id;
    });

    it('should return false when follower doesnt exist', () => {
      followDAO.checkIfFollowExists(circleID, mailboxID).should.be.equal(false);
    });

    it('should return true when follower exists ', () => {
      followDAO.addFollow(circleID, mailboxID);
      followDAO.checkIfFollowExists(circleID, mailboxID).should.be.equal(true);
    });
  });
});
