import { action, makeObservable, observable } from 'mobx'

interface IModalState {
  [property: string]: boolean
}

class ModalState {
  @observable modalState: IModalState = {
    editor: false,
  }

  @action
  openModal = (name: string): void => {
    if (Object.keys(this.modalState).includes(name)) {
      this.modalState[name] = true
    } else {
      throw new Error(`State name '${name}' doesn't exist`)
    }
  }

  constructor() {
    makeObservable(this)
    this.closeModal = this.closeModal.bind(this)
  }

  @action
  closeModal(name: string): void {
    if (this.modalState[name]) {
      this.modalState[name] = false
    } else {
      throw new Error(`State name '${name}' doesn't exist`)
    }
  }
}

const modalStore = new ModalState()

export default modalStore
