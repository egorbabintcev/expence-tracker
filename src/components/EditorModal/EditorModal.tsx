import React, { useState } from 'react'
import { v4 } from 'uuid'
import { modalStore, expencesStore } from 'core/stores'
import { Category, IExpense } from 'core/stores/expences.store'
import './EditorModal.scss'

/*
interface EditorModalProps {

}
*/

const EditorModal: React.FC = () => {
  // state
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState<keyof typeof Category>('food')
  const [isSelectChanged, setIsSelectChanged] = useState(false)
  // stores
  const { closeModal } = modalStore
  const { addExpence } = expencesStore

  const handleSubmit: React.EventHandler<React.FormEvent> = (e): void => {
    e.preventDefault()
    const newExpence: IExpense = {
      id: v4(),
      createdAt: new Date(),
      amount: +amount,
      name,
      category,
    }

    addExpence(newExpence)
    closeModal('editor')
  }

  /* eslint-disable */
  return (
    <div className="modal">
      <div className="editor-modal__wrapper">
        <div className="editor-modal">
          <form onSubmit={handleSubmit}>
            <input
              className="editor-modal__input"
              type="text"
              placeholder="Что вы купили?"
              name="name"
              value={name}
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setName(e.target.value)
              }
            />
            <input
              className="editor-modal__input"
              type="number"
              placeholder="Сколько вы заплатили?"
              name="price"
              value={amount}
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setAmount(e.target.value)
              }
            />
            <select
              className="editor-modal__select"
              name="category"
              value={isSelectChanged ? category : '1'}
              required
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setIsSelectChanged(true)
                setCategory(e.currentTarget.value as keyof typeof Category)
              }}
            >
              <option disabled value="1">
                Выберите категорию
              </option>
              {(Object.keys(Category) as Array<keyof typeof Category>).map(
                (k) => (
                  <option key={k} id={k} value={k}>
                    {Category[k]}
                  </option>
                )
              )}
            </select>
            <div className="editor-modal__btn-group">
              <button
                className="editor-modal__btn"
                type="button"
                onClick={closeModal.bind(null, 'editor')}
              >
                Отмена
              </button>
              <button
                className="editor-modal__btn editor-modal__btn_confirm"
                type="submit"
              >
                Создать
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditorModal
