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
  category: Category
}

type SortedExpenceType = {
  [property: string]: Array<IExpense>
}

class ExpencesStore {
  @observable expences: Array<IExpense> = []

  constructor() {
    makeObservable(this)
  }

  @computed
  get sortedExpences(): SortedExpenceType {
    return this.expences.reduce((acc, el) => {
      const key = el.createdAt.toDateString()
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
  }

  @action
  removeExpence = (id: v4): void => {
    this.expences = this.expences.filter((e) => e.id !== id)
  }
}

const expencesStore = new ExpencesStore()

export default expencesStore
