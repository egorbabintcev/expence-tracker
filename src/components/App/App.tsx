import React from 'react'
import { observer } from 'mobx-react'
import ControlPanel from 'components/ControlPanel'
import Dashboard from 'components/Dashboard'
import { modalStore } from 'core/stores'
import EditorModal from 'components/EditorModal'
import PortalModal from 'utils/PortalModal'

const App: React.FC = () => {
  const { modalState } = modalStore

  return (
    <>
      <Dashboard />
      <ControlPanel />
      <PortalModal>{modalState.editor && <EditorModal />}</PortalModal>
    </>
  )
}

export default observer(App)
