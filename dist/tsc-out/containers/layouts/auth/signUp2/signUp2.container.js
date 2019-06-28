import React from 'react';
import { SignUp2 } from './signUp2.component';
export class SignUp2Container extends React.Component {
    constructor() {
        super(...arguments);
        this.navigationKey = 'SignUp2Container';
        this.onSignUpPress = (data) => {
            this.props.navigation.goBack();
        };
        this.onSignInPress = () => {
            this.props.navigation.navigate({
                key: this.navigationKey,
                routeName: 'Sign In 2',
            });
        };
        this.onPhotoPress = () => {
        };
    }
    render() {
        return (<SignUp2 onSignUpPress={this.onSignUpPress} onSignInPress={this.onSignInPress} onPhotoPress={this.onPhotoPress}/>);
    }
}
//# sourceMappingURL=signUp2.container.js.map