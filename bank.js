class bankAccount {
  constructor(name , amt , ph , age) {
    this.amt = amt;
    this.name = name;
    this.ph = ph;
    this.age = age;
  }
 
  currbal() {
    console.log(`Current balance: $ ${this.amt}`);
  }
  
  depAmt(amt) {
    this.amt += amt;
    console.log("---------Deposition-----------");
    console.log(`Amount deposited: $ ${amt}`);
    console.log(`Current balance: $ ${this.amt}`);
    console.log("---------//Deposition-----------");
    console.log("------------------------------");
  }
  
  withAmt(amt) {
    this.amt -= amt;
    console.log("---------Withdrawal-----------");
    console.log(`Amount withdrawn: $ ${amt}`);
    console.log(`Current balance: $ ${this.amt}`);
    console.log("---------//Withdrawal-----------");
    console.log("------------------------------");
    }
  
    
}

let yash = new bankAccount("Yash" , 12000 , "8971220965" , 19);
yash.currbal();
yash.depAmt(1240);
yash.withAmt(12000);
