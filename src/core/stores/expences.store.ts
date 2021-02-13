import { action, computed, makeObservable, observable } from 'mobx'
import { v4 } from 'uuid'

export enum Category {
  food = 'Еда',
  clothes = 'Одежда',
  transport = 'Транспорт',
  other = 'Другое',
}

export interface IExpense {
  id: v4
  createdAt: Date
  amount: number
  name: string
  category: keyof typeof Category
}

type SortedExpenceType = {
  [property: string]: Array<IExpense>
}

class ExpencesStore {
  @observable expences: Array<IExpense> = JSON.parse(
    localStorage.getItem('expences') || '[]',
  ) as Array<IExpense>

  constructor() {
    makeObservable(this)
  }

  @computed
  get sortedExpences(): SortedExpenceType {
    return this.expences.reverse().reduceRight((acc, el) => {
      const key = new Date(el.createdAt).toDateString()
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(el)
      return acc
    }, {})
  }

  @action
  addExpence = (expence: IExpense): void => {
    this.expences.push(expence)
    localStorage.setItem('expences', JSON.stringify(this.expences))
  }

  @action
  removeExpence = (id: v4): void => {
    this.expences = this.expences.filter((e) => e.id !== id)
    localStorage.setItem('expences', JSON.stringify(this.expences))
  }
}

const expencesStore = new ExpencesStore()

export default expencesStore
