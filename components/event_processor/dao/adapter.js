const start = require('../client/dse');
const circleDAO = require('./circleDao');
const mailboxDAO = require('./mailboxDao');


const client = start.client;

function createDomain(domain, callback) {
  circleDAO.createCircle((err, newCircle) => {
    console.log(err);
    console.log(newCircle);
    if (err) { return err; }
    const query = ('INSERT INTO domain (domain, circleid, mailboxid) values( ?, ?, ?)');
    client.execute(query, [domain, newCircle.circleId, newCircle.mailboxId], (err1, result) => {
      console.log(err1);
      console.log(result);

      if (err1) { return callback(err1, null); }
      return callback(null, domain);
    });
    return 0;
  });
}

function createDomainGetCircleId(domain, callback) {
  circleDAO.createCircle((err, newCircle) => {
    if (err) { return err; }
    const query = ('INSERT INTO domain (domain, circleid, mailboxid) values( ?, ?, ?)');
    client.execute(query, [domain, newCircle.circleId, newCircle.mailboxId], (err1) => {
      if (err1) { return callback(err1, null); }
      return callback(null, newCircle.circleId);
    });
    return 0;
  });
}

function checkIfDomainExists(domain, callback) {
  const query = (`SELECT * from domain where domain = '${domain}'`);
  client.execute(query, (err, result) => {
    if (err) { return callback(err, null); }
    if (result.rowLength === 0) { return callback(null, 0); }
    const obj = {
      circleid: result.rows[0].circleid,
      mailboxid: result.rows[0].mailboxid,
    };
    return callback(null, obj);
  });
}

function deleteDomain(domain, callback) {
  checkIfDomainExists(domain, (err, domainDetail) => {
    circleDAO.deleteCircle(domainDetail.circleid, (err1) => {
      if (err1) { return callback(err1); }
      const query = (`DELETE from domain where domain = '${domain}'`);
      client.execute(query, (error) => {
        if (error) { return callback(error); }
        return callback(null, { message: domainDetail });
      });
      return 0;
    });
    return 0;
  });
}


function createUser(user, callback) {
  mailboxDAO.createMailbox((err, newUser) => {
    if (err) { return callback(err); }
    const query = ('INSERT INTO user (user, mailboxid) values( ?, ?)');
    client.execute(query, [user, newUser.mailboxId], (err1) => {
      if (err1) { return callback(err1); }
      return callback(null, user);
    });
    return 0;
  });
}

function createUserGetMailbox(user, callback) {
  mailboxDAO.createMailbox((err, newUser) => {
    if (err) { return callback(err); }
    const query = ('INSERT INTO user (user, mailboxid) values( ?, ?)');
    client.execute(query, [user, newUser.mailboxId], (err1) => {
      if (err1) { return callback(err1); }
      return callback(null, newUser.mailboxId.toString());
    });
    return 0;
  });
}

function checkIfUserExists(user, callback) {
  const query = (`SELECT * from user where user = '${user}'`);
  client.execute(query, (err, result) => {
    if (err) { return callback(err, null); }
    if (result.rowLength === 0) { return callback(null, 0); }
    const obj ={
      mailboxid: result.rows[0].mailboxid,
    };

    return callback(null, obj);
  });
}


function deleteUser(user, callback) {
  checkIfUserExists(user, (err, userDetail) => {
    mailboxDAO.deleteMailbox(userDetail.mailboxid, (err1) => {
      if (err1) { return callback(err1); }
      const query = (`DELETE from user where user = '${user}'`);
      client.execute(query, (error) => {
        if (error) { return callback(error); }
        return callback(null, { message: userDetail });
      });
      return 0;
    });
    return 0;
  });
}


module.exports = {
  createDomain,
  deleteDomain,
  checkIfDomainExists,
  createUser,
  deleteUser,
  checkIfUserExists,
  createUserGetMailbox,
  createDomainGetCircleId,
};
