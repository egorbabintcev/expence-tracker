import React from 'react'
import ControlPanel from 'components/ControlPanel'
import Dashboard from 'components/Dashboard'
import { ProvideStore } from 'utils/Store'

const App: React.FC = () => (
  <ProvideStore>
    <Dashboard />
    <ControlPanel />
  </ProvideStore>
)

export default App
