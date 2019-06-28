var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Animated, Easing, Keyboard, Platform, StyleSheet, TouchableWithoutFeedback, } from 'react-native';
export class AvoidKeyboard extends React.Component {
    constructor() {
        super(...arguments);
        this.translateY = new Animated.Value(0);
        this.animationDuration = Platform.select({
            android: 160,
            default: 250,
        });
        // @ts-ignore
        this.showEvent = Platform.select({
            android: 'keyboardDidShow',
            default: 'keyboardWillShow',
        });
        // @ts-ignore
        this.hideEvent = Platform.select({
            android: 'keyboardDidHide',
            default: 'keyboardWillHide',
        });
        this.onKeyboardShow = (event) => {
            const offset = -this.props.offset(event.endCoordinates.height);
            this.createTranslateAnimation({ offset }).start();
        };
        this.onKeyboardHide = (event) => {
            const offset = 0;
            this.createTranslateAnimation({ offset }).start();
        };
        this.onContainerPress = () => {
            Keyboard.dismiss();
        };
        this.getComponentStyle = (source) => {
            return Object.assign({}, styles.container, styles.transform(this.translateY), StyleSheet.flatten(source));
        };
        this.createTranslateAnimation = (params) => {
            const { offset } = params;
            return Animated.timing(this.translateY, {
                toValue: offset,
                duration: this.animationDuration,
                easing: Easing.linear,
            });
        };
    }
    componentDidMount() {
        this.keyboardShowSubscription = Keyboard.addListener(this.showEvent, this.onKeyboardShow);
        this.keyboardHideSubscription = Keyboard.addListener(this.hideEvent, this.onKeyboardHide);
    }
    componentWillUnmount() {
        this.keyboardShowSubscription.remove();
        this.keyboardHideSubscription.remove();
    }
    render() {
        const _a = this.props, { style, autoDismiss } = _a, restProps = __rest(_a, ["style", "autoDismiss"]);
        const componentStyle = this.getComponentStyle(style);
        return (<TouchableWithoutFeedback onPress={this.onContainerPress} disabled={!autoDismiss}>
        <Animated.View style={componentStyle} {...restProps}/>
      </TouchableWithoutFeedback>);
    }
}
AvoidKeyboard.defaultProps = {
    offset: (height) => height,
    autoDismiss: true,
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // @ts-ignore
    transform: (y) => ({
        transform: [{ translateY: y }],
    }),
});
//# sourceMappingURL=avoidKeyboard.component.js.map