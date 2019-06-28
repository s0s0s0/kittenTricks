import React from 'react';
import { SignUp1 } from './signUp1.component';
export class SignUp1Container extends React.Component {
    constructor() {
        super(...arguments);
        this.navigationKey = 'SignUp1Container';
        this.onSignUpPress = (data) => {
            this.props.navigation.goBack();
        };
        this.onSignInPress = () => {
            this.props.navigation.navigate({
                key: this.navigationKey,
                routeName: 'Sign In 1',
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
        return (<SignUp1 onSignUpPress={this.onSignUpPress} onSignInPress={this.onSignInPress} onGooglePress={this.onGooglePress} onFacebookPress={this.onFacebookPress} onTwitterPress={this.onTwitterPress} onEwaPress={this.onEwaPress}/>);
    }
}
//# sourceMappingURL=signUp1.container.js.map