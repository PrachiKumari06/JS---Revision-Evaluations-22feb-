function creatAccount(){
    let balance=0;
    history=[];
    return {
        deposit(amount){
            if(amount<=0){
                return "not valid amount to deposit"
            }
            balance=amount+balance;
            history.push(`deposit amount ${amount}`);
            return balance;
        },
        withdraw(amount){
            if(amount<=0){
                return "not valid amount to withdraw"
            }
            if(amount>balance){
                return "not sufficient balance to withdraw"
            }
            balance=balance-amount;
            history.push(`withdraw amount ${amount}`);
            return balance;
        },
        getBalance(){
            return balance;
        },
        getTransactionHistory(){
            return history;
        }

    }
}
let a=creatAccount();
console.log(a.deposit(100));
console.log(a.withdraw(50));
console.log(a.getBalance());
console.log(a.getTransactionHistory());