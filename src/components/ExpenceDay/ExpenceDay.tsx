import React from 'react'
import moment from 'moment'
import { v4 } from 'uuid'
import { IExpense } from 'core/stores/expences.store'
import ExpenceItem from 'components/ExpenceItem'
import 'moment/locale/ru'
import './ExpenceDay.scss'

interface ExpenceDayProps {
  date: Date
  expences: Array<IExpense>
}

const ExpenceDay: React.FC<ExpenceDayProps> = ({ date, expences }) => {
  const formatDate = moment(date).locale('ru').format('D MMMM, dd')

  return (
    <div className="expence-day">
      <p className="expence-day__date">{formatDate}</p>
      {expences.map((e) => (
        <ExpenceItem
          key={v4()}
          expence={e}
        />
      ))}
    </div>
  )
}

export default ExpenceDay
