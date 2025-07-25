'use client';

import { ActionDispatch, createContext, ReactNode, useEffect, useReducer, useState } from "react"

type authReducerType = {
    type: "LOGIN" | "LOGOUT";
}
type AuthContextType = {
    isAuthenticated: boolean,
    dispatch: ActionDispatch<[action: Pick<authReducerType, 'type'>]>;
}

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    dispatch: () => { }
})

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, dispatch] = useReducer(
        (state, action: authReducerType) => {
            switch (action.type) {
                case "LOGIN":
                    return true;
                case "LOGOUT":
                    return false;
                default:
                    return state;
            }
        },
        false
    );

    useEffect(() => {
        const isAuth = localStorage.getItem('isAuth')
        const parsedIsAuth = JSON.parse(isAuth!)

        if (!parsedIsAuth) {
            localStorage.setItem('isAuth', JSON.stringify(isAuthenticated))
        } else {
            dispatch({ type: 'LOGIN' })
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('isAuth', JSON.stringify(isAuthenticated))
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}