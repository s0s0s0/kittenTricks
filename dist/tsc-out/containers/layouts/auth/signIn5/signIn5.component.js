import React from 'react';
import { View } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Button, Tab, TabView, Text, } from 'react-native-ui-kitten/ui';
import { SignInForm3, SignInForm4, } from '../../../../components/auth';
import { ScrollableAvoidKeyboard, ImageOverlay, textStyle, } from '../../../../components/common';
import { imageSignIn5Bg, } from '../../../../assets/images';
const TAB_INDEX_EMAIL = 0;
const TAB_INDEX_SMS = 1;
class SignIn5Component extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            selectedTabIndex: 0,
            emailFormData: undefined,
            smsFormData: undefined,
        };
        this.backgroundImage = imageSignIn5Bg;
        this.onSignInButtonPress = () => {
            const { selectedTabIndex } = this.state;
            const formValue = this.getSelectedFormData();
            switch (selectedTabIndex) {
                case TAB_INDEX_EMAIL:
                    this.props.onSignInEmailPress(formValue);
                    break;
                case TAB_INDEX_SMS:
                    this.props.onSignInSMSPress(formValue);
                    break;
            }
        };
        this.onSignUpButtonPress = () => {
            this.props.onSignUpPress();
        };
        this.onTabSelect = (selectedTabIndex) => {
            this.setState({ selectedTabIndex });
        };
        this.onEmailFormDataChange = (emailFormData) => {
            this.setState({ emailFormData });
        };
        this.onSMSFormDataChange = (smsFormData) => {
            this.setState({ smsFormData });
        };
        this.getSelectedFormData = () => {
            const { selectedTabIndex, emailFormData, smsFormData } = this.state;
            switch (selectedTabIndex) {
                case TAB_INDEX_EMAIL:
                    return emailFormData;
                case TAB_INDEX_SMS:
                    return smsFormData;
            }
        };
    }
    render() {
        const { themedStyle } = this.props;
        const signInButtonEnabled = !!this.getSelectedFormData();
        return (<ScrollableAvoidKeyboard>
        <ImageOverlay style={themedStyle.container} source={this.backgroundImage.imageSource}>
          <View style={themedStyle.headerContainer}>
            <Text style={themedStyle.helloLabel}>
              Sign In
            </Text>
            <Text style={themedStyle.signInLabel} category='s1'>
              Sign in to your account with Email or SMS
            </Text>
          </View>
          <TabView style={themedStyle.tabView} tabBarStyle={themedStyle.tabBar} indicatorStyle={themedStyle.tabViewIndicator} selectedIndex={this.state.selectedTabIndex} onSelect={this.onTabSelect}>
            <Tab titleStyle={themedStyle.tabTitle} title='EMAIL'>
              <SignInForm3 style={themedStyle.tabContentContainer} onDataChange={this.onEmailFormDataChange}/>
            </Tab>
            <Tab titleStyle={themedStyle.tabTitle} title='SMS'>
              <View>
                <SignInForm4 style={themedStyle.tabContentContainer} onDataChange={this.onSMSFormDataChange}/>
                <Text style={themedStyle.smsCaptionLabel} appearance='hint'>
                  within a minute you should receive
                  an SMS with the code
                </Text>
              </View>
            </Tab>
          </TabView>
          <Button style={themedStyle.signInButton} textStyle={textStyle.button} size='giant' disabled={!signInButtonEnabled} onPress={this.onSignInButtonPress}>
            SIGN IN
          </Button>
          <Button style={themedStyle.signUpButton} textStyle={themedStyle.signUpText} appearance='ghost' activeOpacity={0.75} onPress={this.onSignUpButtonPress}>
            Don't have an account? Sign Up
          </Button>
        </ImageOverlay>
      </ScrollableAvoidKeyboard>);
    }
}
export const SignIn5 = withStyles(SignIn5Component, (theme) => ({
    container: {
        flex: 1,
    },
    headerContainer: {
        minHeight: 216,
        paddingHorizontal: 64,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabContentContainer: {
        marginVertical: 8,
    },
    tabView: {
        flex: 1,
        paddingHorizontal: 16,
    },
    tabBar: {
        backgroundColor: 'transparent',
    },
    tabViewIndicator: {
        backgroundColor: theme['background-basic-color-1'],
    },
    tabTitle: Object.assign({ color: 'white' }, textStyle.label),
    helloLabel: Object.assign({ fontSize: 26, lineHeight: 32, color: 'white' }, textStyle.headline),
    signInLabel: Object.assign({ marginTop: 8, textAlign: 'center', color: 'white' }, textStyle.subtitle),
    smsCaptionLabel: Object.assign({ textAlign: 'center', paddingHorizontal: 32 }, textStyle.paragraph),
    signInButton: {
        marginHorizontal: 16,
    },
    signUpButton: {
        marginVertical: 12,
    },
    signUpText: Object.assign({ color: 'white' }, textStyle.subtitle),
}));
//# sourceMappingURL=signIn5.component.js.map