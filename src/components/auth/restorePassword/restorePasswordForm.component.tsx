import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  textStyle,
  ValidationInput,
} from '@src/components/common';
import {
  EmailIconFill,
  EyeOffIconFill,
} from '@src/assets/icons';
import {
  EmailValidator,
  PasswordValidator,
} from '@src/core/validators';
import { RestorePasswordFormData } from './type';

interface ComponentProps {
  /**
   * Will emit changes depending on validation:
   * Will be called with form value if it is valid, otherwise will be called with undefined
   */
  onDataChange: (value: RestorePasswordFormData | undefined) => void;
}

export type RestorePasswordFormProps = ThemedComponentProps & ViewProps & ComponentProps;

interface State {
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
}

class RestorePasswordFormComponent extends React.Component<RestorePasswordFormProps, State> {

  public state: State = {
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
  };

  public componentDidUpdate(prevProps: RestorePasswordFormProps, prevState: State) {
    const oldFormValid: boolean = this.isValid(prevState);
    const newFormValid: boolean = this.isValid(this.state);

    const isStateChanged: boolean = this.state !== prevState;
    const becomeValid: boolean = !oldFormValid && newFormValid;
    const becomeInvalid: boolean = oldFormValid && !newFormValid;
    const remainValid: boolean = oldFormValid && newFormValid;

    if (becomeValid) {
      this.props.onDataChange(this.state);
    } else if (becomeInvalid) {
      this.props.onDataChange(undefined);
    } else if (isStateChanged && remainValid) {
      this.props.onDataChange(this.state);
    }
  }

  private onEmailInputTextChange = (email: string): void => {
    this.setState({ email });
  };

  private onPasswordInputTextChange = (password: string): void => {
    this.setState({ password });
  };

  private onConfirmPasswordInputTextChange = (confirmPassword: string): void => {
    this.setState({ confirmPassword });
  };

  private isValid = (value: RestorePasswordFormData): boolean => {
    const { email, password, confirmPassword } = value;

    return email !== undefined && password !== undefined && confirmPassword !== undefined;
  };

  public render(): React.ReactNode {
    const { style, themedStyle, ...restProps } = this.props;

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <ValidationInput
          textStyle={textStyle.paragraph}
          placeholder='Email'
          icon={EmailIconFill}
          validator={EmailValidator}
          onChangeText={this.onEmailInputTextChange}
        />
        <ValidationInput
          textStyle={textStyle.paragraph}
          placeholder='Password'
          icon={EyeOffIconFill}
          validator={PasswordValidator}
          secureTextEntry={true}
          onChangeText={this.onPasswordInputTextChange}
        />
        <ValidationInput
          textStyle={textStyle.paragraph}
          placeholder='Confirm Password'
          icon={EyeOffIconFill}
          validator={PasswordValidator}
          secureTextEntry={true}
          onChangeText={this.onConfirmPasswordInputTextChange}
        />
      </View>
    );
  }
}

export const RestorePasswordForm = withStyles(RestorePasswordFormComponent, (theme: ThemeType) => ({
  container: {},
}));

