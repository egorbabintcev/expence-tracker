import React, { useState, useContext } from 'react'

type DeleteModeContextProps = {
  isDeleteModeActive: boolean
  setDeleteMode: React.Dispatch<React.SetStateAction<boolean>>
}

const DeleteModeContext = React.createContext<Partial<DeleteModeContextProps>>(
  {},
)

export const useDeleteMode = (): Partial<DeleteModeContextProps> => useContext(DeleteModeContext)

export const ProvideDeleteMode: React.FC = ({ children }) => {
  const [isDeleteModeActive, setDeleteMode] = useState(false)

  return (
    <DeleteModeContext.Provider
      value={{ isDeleteModeActive, setDeleteMode } as DeleteModeContextProps}
    >
      {children}
    </DeleteModeContext.Provider>
  )
}
