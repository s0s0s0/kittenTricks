import {
  AuthActionValueType,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  RESTORE_PASSWORD,
  RESTORE_PASSWORD_SUCCESS,
  RESTORE_PASSWORD_FAILURE,
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
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
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
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
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
    case RESET_PASSWORD_FAILURE:
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
    case RESTORE_PASSWORD_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
      };
    default:
      return state;
  }
};
