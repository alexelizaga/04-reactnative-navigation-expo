import { createContext, useReducer } from "react";
import { authReducer } from './AuthReducer';

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

export interface AuthContextProps {
    authState: AuthState;

    signIn: () => void;
    logout: () => void;
    changeUsername: (username: string) => void;
    changeFavoriteIcon: (iconName: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any ) => {

    const [ authState, dispatch ] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn' });
    }

    const logout = () => {
        dispatch({ type: 'logout' });
    }

    const changeFavoriteIcon = ( iconName: string ) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    const changeUsername = ( username: string ) => {
        dispatch({ type: 'changeUsername', payload: username })
    }

    return(
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeUsername,
            changeFavoriteIcon
        }}>
            { children }
        </AuthContext.Provider>
    )
}