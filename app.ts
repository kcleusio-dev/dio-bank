//DIO BANK
import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'

const peopelAccount: PeopleAccount = new PeopleAccount(1342916, 'Hélder Daniel', 7777)
const companyAccount: CompanyAccount = new CompanyAccount('4Mais', 76);

peopelAccount.deposit(15000)
companyAccount.deposit(323)
// console.log(peopelAccount.getBalance())
console.log(companyAccount.getBalance())
companyAccount.withdraw(300);
// console.log(peopelAccount.getBalance())
console.log(companyAccount.getBalance())