const utiltiy = require('./utility')
const uuid = require('uuid');
const createJobEntity = (payload, priority) => {
    return {
        id: uuid.v4(),
        payload,
        priority,
        status: utiltiy.JOB_STATUS.CREATED,
        createdAt: new Date()
    };
};

module.exports = {
    createJobEntity
}