import React from 'react';
import { SignUp4 } from './signUp4.component';
export class SignUp4Container extends React.Component {
    constructor() {
        super(...arguments);
        this.navigationKey = 'SignUp4Container';
        this.onSignUpPress = (data) => {
            this.props.navigation.goBack();
        };
        this.onSignInPress = () => {
            this.props.navigation.navigate({
                key: this.navigationKey,
                routeName: 'Sign In 4',
            });
        };
        this.onGooglePress = () => {
        };
        this.onFacebookPress = () => {
        };
        this.onTwitterPress = () => {
        };
        this.onPhotoPress = () => {
        };
    }
    render() {
        return (<SignUp4 onSignUpPress={this.onSignUpPress} onSignInPress={this.onSignInPress} onGooglePress={this.onGooglePress} onFacebookPress={this.onFacebookPress} onTwitterPress={this.onTwitterPress} onPhotoPress={this.onPhotoPress}/>);
    }
}
//# sourceMappingURL=signUp4.container.js.map