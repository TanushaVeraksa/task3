const crypto = require('node:crypto');
class Hash {
    constructor(member) {
        this.member = member;
    }
    gethmac(secret) {
        const hash = crypto.createHmac('sha3-256', secret)
               .update(this.member)
               .digest('hex');
        return hash;
    }
    getRandom() {
        return crypto.randomBytes(32).toString('hex')
    }
}

module.exports = Hash;