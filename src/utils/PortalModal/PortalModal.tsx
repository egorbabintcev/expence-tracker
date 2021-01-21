import React from 'react'
import ReactDOM from 'react-dom'

const PortalModal: React.FC = ({ children }) => {
  const root: HTMLDivElement | null = document.querySelector('#modal')

  return root ? ReactDOM.createPortal(children, root) : null
}

export default PortalModal
