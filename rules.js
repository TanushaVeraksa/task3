class Rules {
    constructor(members) {
        this.members = members;
    }
    validParameters() {
        if(this.members.length === 0) {
            return {msg: "Parameters missing. Please, enter 3 or more parameters!", flag: false};
        }
        if(this.members.length % 2 === 0) {
            return {msg: "The number of parameters is even. Please, enter an odd number of parameters!", flag: false};
        } 
        if(this.members.length <= 1) {
            return {msg: "Parameters must be greater than 1 or equal to 3. Please, enter 3 or more parameters!", flag: false};
        }
        return {flag: true};
    }
    getMove(move) {
        if(this.members.indexOf(move) < 0) {
            return false;
        }
        return true;
    }
}

module.exports = Rules;


