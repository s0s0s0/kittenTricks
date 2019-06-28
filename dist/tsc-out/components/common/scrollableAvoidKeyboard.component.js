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
import { withStyles, } from '../../../node_modules/react-native-ui-kitten/theme';
import { KeyboardAwareScrollView, } from 'react-native-keyboard-aware-scroll-view';
class ScrollableAvoidKeyboardComponent extends React.Component {
    render() {
        const _a = this.props, { style, contentContainerStyle, themedStyle } = _a, restProps = __rest(_a, ["style", "contentContainerStyle", "themedStyle"]);
        return (<KeyboardAwareScrollView bounces={false} bouncesZoom={false} alwaysBounceVertical={false} alwaysBounceHorizontal={false} style={[themedStyle.container, style]} contentContainerStyle={[themedStyle.contentContainer, contentContainerStyle]} enableOnAndroid={true} {...restProps}/>);
    }
}
export const ScrollableAvoidKeyboard = withStyles(ScrollableAvoidKeyboardComponent, (theme) => ({
    container: {
        flex: 1,
    },
    contentContainer: {
        flexGrow: 1,
    },
}));
//# sourceMappingURL=scrollableAvoidKeyboard.component.js.map