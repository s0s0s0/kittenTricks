import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESTORE_PASSWORD,
  RESTORE_PASSWORD_SUCCESS,
  AuthActionValueType,
} from './type';
import { User } from '@src/core/model';

export const signIn = (): AuthActionValueType => ({
  type: SIGN_IN,
});

export const signInSuccess = (user: User): AuthActionValueType => ({
  type: SIGN_IN_SUCCESS,
  user: user,
});

export const singUp = (): AuthActionValueType => ({
  type: SIGN_UP,
});

export const singUpSuccess = (user: User): AuthActionValueType => ({
  type: SIGN_UP_SUCCESS,
  user: user,
});

export const resetPassword = (): AuthActionValueType => ({
  type: RESET_PASSWORD,
});

export const resetPasswordSuccess = (): AuthActionValueType => ({
  type: RESET_PASSWORD_SUCCESS,
});

export const restorePassword = (): AuthActionValueType => ({
  type: RESTORE_PASSWORD,
});

export const restorePasswordSuccess = (user: User): AuthActionValueType => ({
  type: RESTORE_PASSWORD_SUCCESS,
  user: user,
});
