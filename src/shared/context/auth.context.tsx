'use client';

import { ActionDispatch, createContext, ReactNode, useEffect, useReducer, useState } from "react"

type authReducerType = {
    type: "LOGIN" | "LOGOUT";
}

type roleReducerType = {
    type: "USER" | "ADMIN";
}
type AuthContextType = {
    isAuthenticated: boolean,
    dispatch: ActionDispatch<[action: Pick<authReducerType, 'type'>]>;
    role: string,
    roleDispatch: ActionDispatch<[action: Pick<roleReducerType, 'type'>]>;
}

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    dispatch: () => { },
    role: 'user',
    roleDispatch: () => { }
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

    const [role, roleDispatch] = useReducer(
        (state, action: roleReducerType) => {
            switch (action.type) {
                case "USER":
                    return 'user';
                case "ADMIN":
                    return 'admin';
                default:
                    return state;
            }
        },
        'user'
    );

    useEffect(() => {
        const isAuth = localStorage.getItem('isAuth')
        const parsedIsAuth = JSON.parse(isAuth!)

        if (!parsedIsAuth) {
            localStorage.setItem('isAuth', JSON.stringify(isAuthenticated))
        } else {
            dispatch({ type: 'LOGIN' })
        }

        const role = localStorage.getItem('role')
        const parsedRole = JSON.parse(role!)

        if (!parsedRole) {
            localStorage.setItem('role', JSON.stringify(role))
        } else {
            roleDispatch({ type: 'USER' })
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('isAuth', JSON.stringify(isAuthenticated))
    }, [isAuthenticated]);

    useEffect(() => {
        localStorage.setItem('role', JSON.stringify(role))
    }, [role]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, dispatch, role, roleDispatch }}>
            {children}
        </AuthContext.Provider>
    )
}