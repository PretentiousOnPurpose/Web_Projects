class bankAccount {
  constructor(name , amt , ph , age) {
    this.amt = amt;
    this.name = name;
    this.ph = ph;
    this.age = age;
    this.fixedDeps = [];
    this.fds = 0;
    this.dateFD = null;
    this.FD = null;
  }

  createFD(amt , date) {
    this.amt -= amt;
    console.log(`${amt} fix deposited`);
    this.dateFD = new Date(date)
    this.FD = new fixedDeposit(amt , this.dateFD.getDate() , this.dateFD.getMonth() , this.dateFD.getFullYear() , this.fds , this);
    this.fds += 1;
    this.fixedDeps.push(this.FD);
  }

  retrAmt(id) {
    this.depAmt(this.fixedDeps[id].retrAmt());
  }

  currbal() {
    console.log(`Current balance: $${this.amt}`);
  }

  depAmt(amt) {
    this.amt += amt;
    console.log("---------Deposition-----------");
    console.log(`Amount deposited: $${amt}`);
    console.log(`Current balance: $${this.amt}`);
    console.log("---------//Deposition-----------");
    console.log("------------------------------");
    }

  withAmt(amt) {
    this.amt -= amt;
    console.log("---------Withdrawal-----------");
    console.log(`Amount withdrawn: $${amt}`);
    console.log(`Current balance: $${this.amt}`);
    console.log("---------//Withdrawal-----------");
    console.log("------------------------------");
    }
}

class fixedDeposit {
  constructor(amt , day, month , year , fds , person) {
      this.id = fds;
      this.amt = amt
      this.day = day;
      this.month = month;
      this.year = year;
      this.Person = person
      this.currDate = null;
  }


  //setInterval(function() {this.amt += 0.002* this.amt;} , 60000);

  retrAmt() {
    this.currDate = new Date();
    if ((this.currDate.getDate() === this.day) && (this.currDate.getMonth() === this.month) && this.currDate.getFullYear() === this.year) {
      return this.amt
    } else {
      return 0.8*this.amt;
    }
  }
}

let yash = new bankAccount("Yash" , 12000 , "8971220965" , 19);
yash.currbal();
yash.depAmt(1240);
yash.createFD(1240 , '25 Mar 2018');
yash.currbal();
console.log(yash.fixedDeps);
yash.currbal();
yash.retrAmt(0);
yash.currbal();//
