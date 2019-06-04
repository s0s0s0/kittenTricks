import {
  AuthActionValueType,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESTORE_PASSWORD,
  RESTORE_PASSWORD_SUCCESS,
} from '../actions';
import { AuthState } from './type';

const initialState: AuthState = {
  isAuthenticating: false,
  user: null,
};

export const auth = (state: AuthState = initialState,
                     action: AuthActionValueType): AuthState => {

  if (!action) {
    return state;
  }

  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isAuthenticating: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        user: action.user,
      };
    case SIGN_UP:
      return {
        ...state,
        isAuthenticating: true,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        user: action.user,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        isAuthenticating: true,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
      };
    case RESTORE_PASSWORD:
      return {
        ...state,
        isAuthenticating: true,
      };
    case RESTORE_PASSWORD_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        user: action.user,
      };
    default:
      return state;
  }
};
