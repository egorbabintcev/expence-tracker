import React from 'react'
import { observer } from 'mobx-react'
import ControlPanel from 'components/ControlPanel'
import Dashboard from 'components/Dashboard'
import { modalStore } from 'core/stores'
import EditorModal from 'components/EditorModal'
import PortalModal from 'utils/PortalModal'
import { ProvideDeleteMode } from 'utils/deleteModeContext'

const App: React.FC = () => {
  const { modalState } = modalStore

  return (
    <ProvideDeleteMode>
      <Dashboard />
      <ControlPanel />
      <PortalModal>{modalState.editor && <EditorModal />}</PortalModal>
    </ProvideDeleteMode>
  )
}

export default observer(App)
