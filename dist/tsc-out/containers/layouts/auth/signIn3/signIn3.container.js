import React from 'react';
import { SignIn3 } from './signIn3.component';
export class SignIn3Container extends React.Component {
    constructor() {
        super(...arguments);
        this.navigationKey = 'SignIn3Container';
        this.onSignInPress = (data) => {
            this.props.navigation.goBack();
        };
        this.onSignUpPress = () => {
            this.props.navigation.navigate({
                key: this.navigationKey,
                routeName: 'Sign Up 3',
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
        return (<SignIn3 onSignInPress={this.onSignInPress} onSignUpPress={this.onSignUpPress} onForgotPasswordPress={this.onForgotPasswordPress}/>);
    }
}
//# sourceMappingURL=signIn3.container.js.map