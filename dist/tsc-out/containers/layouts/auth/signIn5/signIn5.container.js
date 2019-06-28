import React from 'react';
import { SignIn5 } from './signIn5.component';
export class SignIn5Container extends React.Component {
    constructor() {
        super(...arguments);
        this.navigationKey = 'SignIn5Container';
        this.onSignInEmailPress = (data) => {
            this.props.navigation.goBack();
        };
        this.onSignInSMSPress = (data) => {
            this.props.navigation.goBack();
        };
        this.onSignUpPress = () => {
            this.props.navigation.navigate({
                key: this.navigationKey,
                routeName: 'Sign Up 4',
            });
        };
    }
    render() {
        return (<SignIn5 onSignInEmailPress={this.onSignInEmailPress} onSignInSMSPress={this.onSignInSMSPress} onSignUpPress={this.onSignUpPress}/>);
    }
}
//# sourceMappingURL=signIn5.container.js.map