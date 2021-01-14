import React, { useContext } from 'react'
import Store from 'core'

const StoreContext: React.Context<Store> = React.createContext(new Store())

type StoreInstance = Store
export const useStore = (): StoreInstance => useContext(StoreContext)

export const ProvideStore: React.FC<React.ReactFragment> = ({ children }) => {
  const store = new Store()

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
