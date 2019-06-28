import React from 'react';
import { SignIn1 } from './signIn1.component';
export class SignIn1Container extends React.Component {
    constructor() {
        super(...arguments);
        this.navigationKey = 'SignIn1Container';
        this.onSignInPress = (data) => {
            this.props.navigation.goBack();
        };
        this.onSignUpPress = () => {
            this.props.navigation.navigate({
                routeName: 'Sign Up 1',
                key: this.navigationKey,
            });
        };
        this.onGooglePress = () => {
        };
        this.onFacebookPress = () => {
        };
        this.onTwitterPress = () => {
        };
        this.onEwaPress = () => {
        };
    }
    render() {
        return (<SignIn1 onSignInPress={this.onSignInPress} onSignUpPress={this.onSignUpPress} onGooglePress={this.onGooglePress} onFacebookPress={this.onFacebookPress} onTwitterPress={this.onTwitterPress} onEwaPress={this.onEwaPress}/>);
    }
}
//# sourceMappingURL=signIn1.container.js.map