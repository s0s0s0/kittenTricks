import React from 'react';
import { SignIn2 } from './signIn2.component';
export class SignIn2Container extends React.Component {
    constructor() {
        super(...arguments);
        this.navigationKey = 'SignIn2Container';
        this.onSignInPress = (data) => {
            this.props.navigation.goBack();
        };
        this.onSignUpPress = () => {
            this.props.navigation.navigate({
                key: this.navigationKey,
                routeName: 'Sign Up 2',
            });
        };
        this.onForgotPasswordPress = () => {
            this.props.navigation.navigate({
                key: this.navigationKey,
                routeName: 'Forgot Password',
            });
        };
    }
    render() {
        return (<SignIn2 onSignInPress={this.onSignInPress} onSignUpPress={this.onSignUpPress} onForgotPasswordPress={this.onForgotPasswordPress}/>);
    }
}
//# sourceMappingURL=signIn2.container.js.map