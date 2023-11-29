import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }
  getLoan = (emp: number): void => {
    if (this.validateStatus() && emp > 0) {
      this.setBalance(emp)
    }
  }

}