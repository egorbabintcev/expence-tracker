import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import { modalStore } from 'core/stores'
import './ControlPanel.scss'
import icons from './icons.svg'

/*
interface ControlPanelProps {

}
*/

const ControlPanel: React.FC = () => {
  const [isActive, setIsActive] = useState(true)
  const { openModal } = modalStore

  let prevScroll = window.scrollY
  const handleScroll: EventListener = (e: Event) => {
    const target = e.currentTarget as Window | HTMLElement

    let property: string
    if (target instanceof Window) {
      property = 'scrollY'
    } else {
      property = 'scrollTop'
    }

    if (prevScroll > target[property]) {
      setIsActive(true)
    } else if (prevScroll < target[property]) {
      setIsActive(false)
    }
    prevScroll = target[property]
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={cx('control-panel', { 'is-active': isActive })}>
      <ul className="control-panel__list">
        <li className="control-panel__item">
          <button type="button" onClick={openModal.bind(null, 'editor')}>
            <svg className="control-panel__item-icon">
              <use xlinkHref={`${icons}#create`} />
            </svg>
            <span className="control-panel__item-text">Добавить</span>
          </button>
        </li>
        <li className="control-panel__item">
          <button type="button">
            <svg className="control-panel__item-icon">
              <use xlinkHref={`${icons}#delete`} />
            </svg>
            <span className="control-panel__item-text">Удалить</span>
          </button>
        </li>
        <li className="control-panel__item">
          <button type="button">
            <svg className="control-panel__item-icon">
              <use xlinkHref={`${icons}#settings`} />
            </svg>
            <span className="control-panel__item-text">Настройки</span>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default ControlPanel
