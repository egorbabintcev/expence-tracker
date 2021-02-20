import React from 'react'
import { observer } from 'mobx-react'
import { v4 } from 'uuid'
import cx from 'classnames'
import expencesStore, { Category, IExpense } from 'core/stores/expences.store'
import { useDeleteMode } from 'utils/deleteModeContext'
import useLongPress from 'utils/longpress'
import './ExpenceItem.scss'
import icons from './icons.svg'

const ExpenceItem: React.FC<{ expence: IExpense }> = (props) => {
  const {
    expence,
    expence: { name, category, amount },
  } = props
  const { deletionList, selectExpence } = expencesStore
  const { isDeleteModeActive, setDeleteMode = () => {} } = useDeleteMode()
  const longpressListeners = useLongPress(() => {
    if (!isDeleteModeActive) {
      setDeleteMode(true)
      window.navigator.vibrate(50)
    }
  }, 400)
  const checkboxId = v4()

  return (
    <label
      htmlFor={checkboxId}
      className={cx('expence-item', { 'delete-mode': isDeleteModeActive })}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...longpressListeners}
    >
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
      {isDeleteModeActive && (
        <div className="expence-item__checkbox">
          <input
            type="checkbox"
            id={checkboxId}
            checked={deletionList.includes(expence)}
            onChange={selectExpence.bind(null, expence)}
          />
          <span className="expence-item__checkbox-wrapper">
            <svg>
              <use xlinkHref={`${icons}#check`} />
            </svg>
          </span>
        </div>
      )}
    </label>
  )
}

export default observer(ExpenceItem)
