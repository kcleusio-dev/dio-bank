export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }
  getNome = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value
    }
  }
  getBalance = (): number => {
    return this.balance
  }
  setBalance = (balance: number): void => {
    this.balance += balance
  }

  withdraw = (value: number): void => {
    if (!this.validateStatus()) {
      console.log('Conta Inválida')
    } else if (value > this.balance) {
      console.log('Saldo insuficiente...')
    } else {
      this.balance = this.balance - value
    }
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta Inválida')
  }
}