class Winner {
    constructor(members) {
        this.members = members;
    }
    compare(choice1, choice2) {
        choice1 = this.members.indexOf(choice1);
        choice2 = this.members.indexOf(choice2);
        if (choice1 === choice2) {
        return "Draw";
        }
        if (choice1 == this.members.length - 1 && choice2 == 0) {
        return "You win!";
        }
        if (choice2 == this.members.length - 1 && choice1 == 0) {
        return "Computer wins!";
        }
        if (choice1 > choice2) {
        return "Computer wins!";
        } else {
        return "You win!";
        }
    }
}

module.exports = Winner;