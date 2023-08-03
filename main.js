const prompt = require("prompt-sync")({ sigint: true });
const Rules = require('./rules');
const Hash = require('./hash');
const Winner = require('./winner');
const Table = require('./table');

class Main {
    getRandom(max) {
        return Math.floor(Math.random() * max)
    }
    menu(hash, members) {
        let avmovies = '';
        members.forEach((element, index) => {
            avmovies += `${index + 1} - ${element}` + '\n'
        });
        const res = `HMAC: ${hash}\nAvailable moves:\n${avmovies}0 - exit\n? - help`
        return res;
    }

    print(HMAC, randomKey, computerCoice, arg) {
        console.log(this.menu(HMAC, arg));
        let move = prompt("Enter your move: ");
        const yourMove = arg[move - 1];
        const rules = new Rules(arg);
        if(move === '0') {
            setTimeout(()=> {
                console.log('Exit');
            }, 0)
        } else if(move === '?') {
            const table = new Table(arg);
            table.helpTable();
            this.print(HMAC, randomKey, computerCoice, arg)
        }
        else if(!rules.getMove(yourMove)){
            setTimeout(()=> {
                console.log('You enter uncorrect parameter');
                this.print(HMAC, randomKey, computerCoice, arg)
            }, 1000)

        } else {
            console.log("Computer move:", computerCoice);
            const winner = new Winner(arg);
            console.log(winner.compare(computerCoice, yourMove))
            console.log("HMAC key:", randomKey)
        }
    }
    computerMove(arg) {
        const random = this.getRandom(arg.length);
        const computerCoice = arg[random];
        const hash = new Hash(computerCoice);
        const randomKey = hash.getRandom();
        const HMAC = hash.gethmac(randomKey);
        this.print(HMAC, randomKey, computerCoice, arg);
    }

    main(arg) {
        this.computerMove(arg);
    }
}



const m = new Main();
const arg = process.argv.slice(2);
const rules = new Rules(arg);
const rule = rules.validParameters();
if(!rule.flag) {
    console.log(rule.msg)
} else {
    m.main(arg);
}
