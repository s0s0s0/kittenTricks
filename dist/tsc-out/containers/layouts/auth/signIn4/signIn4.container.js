import React from 'react';
import { SignIn4 } from './signIn4.component';
export class SignIn4Container extends React.Component {
    constructor() {
        super(...arguments);
        this.navigationKey = 'SignIn4Container';
        this.onSignInPress = (data) => {
            this.props.navigation.goBack();
        };
        this.onSignUpPress = () => {
            this.props.navigation.navigate({
                key: this.navigationKey,
                routeName: 'Sign Up 4',
            });
        };
        this.onForgotPasswordPress = () => {
            this.props.navigation.navigate({
                key: this.navigationKey,
                routeName: 'Forgot Password',
            });
        };
        this.onGooglePress = () => {
        };
        this.onFacebookPress = () => {
        };
        this.onTwitterPress = () => {
        };
    }
    render() {
        return (<SignIn4 onSignInPress={this.onSignInPress} onSignUpPress={this.onSignUpPress} onForgotPasswordPress={this.onForgotPasswordPress} onGooglePress={this.onGooglePress} onFacebookPress={this.onFacebookPress} onTwitterPress={this.onTwitterPress}/>);
    }
}
//# sourceMappingURL=signIn4.container.js.map