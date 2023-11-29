//DIO BANK
import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'

const peopelAccount: PeopleAccount = new PeopleAccount(1342916, 'Hélder Daniel', 7700)
const companyAccount: CompanyAccount = new CompanyAccount('4Mais, Lda', 7600);

peopelAccount.deposit(25000)
peopelAccount.withdraw(200000)
console.log(peopelAccount.getBalance())

//===========================================
companyAccount.deposit(10)
companyAccount.withdraw(5)
companyAccount.getLoan(3)
console.log(companyAccount.getBalance())
