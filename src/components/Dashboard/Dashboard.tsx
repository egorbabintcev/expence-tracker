import React from 'react'
import { v4 } from 'uuid'
import { useStore } from 'utils/Store'
import ExpenceDay from 'components/ExpenceDay'
import './Dashboard.scss'

/*
interface DashboardProps {

}
*/

const Dashboard: React.FC = () => {
  const { sortedExpences } = useStore()

  return (
    <div className="dashboard">
      {Object.entries(sortedExpences).map(([dateKey, expences]) => (
        <ExpenceDay
          key={v4()}
          date={new Date(dateKey)}
          expences={expences}
        />
      ))}
    </div>
  )
}

export default Dashboard
