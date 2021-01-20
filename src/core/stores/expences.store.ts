import { action, computed, makeObservable, observable } from 'mobx'
import { v4 } from 'uuid'

const getEarlierDate = (dayBefore = 0): Date => {
  const date = new Date()
  date.setDate(date.getDate() - dayBefore)
  return date
}

/* eslint-disable @typescript-eslint/no-explicit-any */
// Add <any> generic to access key by value
export enum Category {
  food = <any>'Еда',
  clothes = <any>'Одежда',
  transport = <any>'Транспорт',
}
/* eslint-enable @typescript-eslint/no-explicit-any */

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
  @observable expences: Array<IExpense> = [
    {
      id: v4(),
      createdAt: new Date(),
      amount: 256,
      name: 'Завтрак в Глобусе',
      category: Category.food,
    },
    {
      id: v4(),
      createdAt: new Date(),
      amount: 115,
      name: 'Поездка на такси до церкви',
      category: Category.transport,
    },
    {
      id: v4(),
      createdAt: new Date(),
      amount: 256,
      name: 'Завтрак в Глобусе',
      category: Category.food,
    },
    {
      id: v4(),
      createdAt: new Date(),
      amount: 256,
      name: 'Завтрак в Глобусе',
      category: Category.food,
    },
    {
      id: v4(),
      createdAt: getEarlierDate(1),
      amount: 256,
      name: 'Завтрак в Глобусе',
      category: Category.clothes,
    },
    {
      id: v4(),
      createdAt: getEarlierDate(1),
      amount: 256,
      name: 'Завтрак в Глобусе',
      category: Category.clothes,
    },
    {
      id: v4(),
      createdAt: getEarlierDate(2),
      amount: 256,
      name: 'Завтрак в Глобусе',
      category: Category.clothes,
    },
    {
      id: v4(),
      createdAt: getEarlierDate(2),
      amount: 256,
      name: 'Завтрак в Глобусе',
      category: Category.clothes,
    },
    {
      id: v4(),
      createdAt: getEarlierDate(2),
      amount: 256,
      name: 'Завтрак в Глобусе',
      category: Category.clothes,
    },
  ]

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
