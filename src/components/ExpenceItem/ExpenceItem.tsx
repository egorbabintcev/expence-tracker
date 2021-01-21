import React from 'react'
import { Category } from 'core/stores/expences.store'
import './ExpenceItem.scss'
import icons from './icons.svg'

interface ExpenceItemProps {
  name: string
  amount: number
  category: keyof typeof Category
}

const ExpenceItem: React.FC<ExpenceItemProps> = ({
  name,
  category,
  amount,
}) => (
  <div className="expence-item">
    <div className="expence-item__icon">
      <svg>
        <use xlinkHref={`${icons}#${category}`} />
      </svg>
    </div>
    <div className="expence-item__content">
      <p className="expence-item__category">{Category[category]}</p>
      <h3 className="expence-item__name">{name}</h3>
      <span className="expence-item__amount">{amount} ₽</span>
    </div>
  </div>
)

export default ExpenceItem
