import React, { createContext, useState, useContext } from 'react'

type StateType = {
    isOverlayOpen: boolean
    isModalMenuOpen: boolean
}

type ContextType = {
    state: StateType;
    dispatch: React.Dispatch<any>;
};


const initialState: StateType = {
    isOverlayOpen: false,
    isModalMenuOpen: false,
}

type propStoreProvider = {
    children: React.ReactNode // Todo 
}
const StoreContext = createContext<ContextType | any>(null)

const StoreProvider = ({ children }: propStoreProvider) => {
    const [stateStore, setStateStore] = useState<StateType>(initialState)
    return (
        <StoreContext.Provider
            value={{
                state: stateStore,
                dispatch: setStateStore,
            }}
        >
            {children}
        </StoreContext.Provider>
    )
}
const useContextStore = () => {
    const context = useContext(StoreContext)
    if (context === undefined) {
        throw new Error('useContextStore must be used within a StoreProvider')
    }
    return context
}

export {
    StoreProvider,
    useContextStore,
}