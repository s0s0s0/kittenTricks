import React from 'react';
import { connect } from 'react-redux';
import { NavigationScreenProps } from 'react-navigation';
import { ForgotPasswordFormData } from '../type';
import { ForgotPassword } from './forgotPassword.component';
import { AuthService } from '../../../service';
import { GlobalState } from '../../../store';
import {
  resetPassword,
  resetPasswordSuccess,
} from '../../../actions';

interface StateProps {
  isAuthenticating: boolean;
  reset: () => void;
  resetSuccess: () => void;
}

type ComponentProps = StateProps & NavigationScreenProps;

const mapStateToProps = (state: GlobalState) => ({
  isAuthenticating: state.auth.isAuthenticating,
});

const mapDispatchToProps = (dispatch: Function) => ({
  reset: () => dispatch(resetPassword()),
  resetSuccess: () => dispatch(resetPasswordSuccess()),
});

@connect(mapStateToProps, mapDispatchToProps)
export class ForgotPasswordContainer extends React.Component<ComponentProps> {

  private service: AuthService = new AuthService();

  private onResetPress = (data: ForgotPasswordFormData): void => {
    this.props.reset();
    this.service.resetPassword(data)
      .then(this.navigateToRestorePassword)
      .catch(this.onResetFailure);
  };

  private navigateToRestorePassword = (resetToken: string): void => {
    this.props.resetSuccess();
    this.props.navigation.navigate('Restore Password', {
      resetToken: resetToken,
    });
  };

  private onResetFailure = (): void => {
    console.warn('Something went wrong while reset password');
  };

  public render(): React.ReactNode {
    return (
      <ForgotPassword
        isAuthenticating={this.props.isAuthenticating}
        onResetPress={this.onResetPress}
      />
    );
  }
}
