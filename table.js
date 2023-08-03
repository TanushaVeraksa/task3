class Table {
    constructor(members) {
        this.members = members;
    }
    setectWinner(choice1, choice2) {
        const x = this.members.indexOf(choice1);
        const y = this.members.indexOf(choice2);
        if (x == y) {
          return 'Draw';
        }
        if (this.mod(x - y, this.members.length) < this.members.length / 2) {
          return 'Lose';
        } else {
          return 'Win';
        }
    }
    mod(a, b) {
        const c = a % b;
        return c < 0 ? c + b : c;
    }

    table() {
       let N = this.members.length;
       const res = [];
       let t = 0;
       for(let i = 0; i<N+1; i++) {
         let res2 = [];
        for(let j = 0; j<N+1; j++) {
            if(i === 0 && j === 0) {
                res2.push('v PC\User >')
            } else if(j === 0) {
                res2.push(this.members[t])
                t++;
            } else if(i === 0) {
                res2.push(this.members[j-1])
            } else {
                res2.push(this.setectWinner(this.members[i-1], this.members[j-1]))
            }
        }
         res.push(res2);
       } 
       return res;
    }

    helpTable() {
        const table = this.table();
        let t = 0;
        for(let i = 0; i<table.length; i++) {
            let res = '';
            console.log("\t");
            for(let j = 0; j<table.length; j++) {
                if(j === 0) {
                    res = res + "\t" + table[i][j] + this.separators()[t];
                    t++;
                } else {
                    res = res + "\t" + table[i][j];
                }
            }
            console.log(res)
        }
    }

    getMaxOfArray() {
        const table = this.table()[0].map((elem) => elem.length);
        return {max: Math.max.apply(null, table), table: table};
    }

    separators() {
        const tableLength = this.getMaxOfArray().table;
        const max = this.getMaxOfArray().max;
        let c = 0;
        const res = [];
        for(let i = 0; i< tableLength.length; i++) {
            let s = '';
            c = max - tableLength[i];
            for(let j = 0; j<c; j++) {
                s += " ";
            }
            res.push(s);
        }
        return res;
    }

}

module.exports = Table;