import React from 'react'
import { IExpense, Category } from 'core'
import './ExpenceItem.scss'
import icons from './icons.svg'

interface ExpenceItemProps extends IExpense {}

const ExpenceItem: React.FC<ExpenceItemProps> = ({
  name,
  category,
  amount,
}) => (
  <div className="expence-item">
    <div className="expence-item__icon">
      <svg>
        <use xlinkHref={`${icons}#${Category[category]}`} />
      </svg>
    </div>
    <div className="expence-item__content">
      <p className="expence-item__category">{category}</p>
      <h3 className="expence-item__name">{name}</h3>
      <span className="expence-item__amount">{amount} ₽</span>
    </div>
  </div>
)

export default ExpenceItem
