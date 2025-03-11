import React, {useEffect} from "react";
import {FC, useReducer, createContext, useContext} from "react";

type EsLibProviderProps = {
    children: React.ReactNode;
}

type StateType = {
    xs: boolean,
    sm: boolean,
    md: boolean,
    lg: boolean,
    xl: boolean,
}

const initialState = {
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
}

type ActionType = {
    type: string;
    size: string;
}

type StateContextType = {
    xs: boolean,
    sm: boolean,
    md: boolean,
    lg: boolean,
    xl: boolean,
    dispatch: React.Dispatch<ActionType>,
}

const esLibReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type){
        case "update_breakpoint":
            return {
                ...state,
                [action.size]: true
            }
        default: return {
            ...state
        }
    }
}

const EsLibStateContext = createContext<StateContextType | undefined>(undefined)

const useEsLibStateContext = () => {
    const context = useContext(EsLibStateContext)

    if (!context) {
        throw new Error("EsLibStateContext not available")
    }

    return context
}

const EsLibProvider = ({ children }: EsLibProviderProps) => {
    const [state, dispatch] = useReducer(esLibReducer, initialState);

    return (
        <EsLibStateContext.Provider value={{
            xs: state.xs,
            sm: state.sm,
            md: state.md,
            lg: state.lg,
            xl: state.xl,
            dispatch
            }}>
            {children}
        </EsLibStateContext.Provider>
    )
}

const LibContext = {
    EsLibProvider,
    useEsLibStateContext
}

export default LibContext;