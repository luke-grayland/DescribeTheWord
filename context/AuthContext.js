import React, {createContext, useContext, useState} from 'react'

const AuthTokenContext = createContext()
const SetAuthTokenContext = createContext()

export function useAuthToken() {
    return useContext(AuthTokenContext)
}

export function useSetAuthToken() {
    return useContext(SetAuthTokenContext)
}

export function AuthTokenProvider({ children }) {
    const [authToken, setAuthToken] = useState()

    function updateAuthToken(authToken) {
        setAuthToken(authToken)
    }

    return (
        <AuthTokenContext.Provider value={authToken}>
            <SetAuthTokenContext.Provider value={updateAuthToken}>
                {children}
            </SetAuthTokenContext.Provider>
        </AuthTokenContext.Provider>
    )
}