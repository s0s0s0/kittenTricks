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
import { Platform, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { ScrollableAvoidKeyboard, } from '../../../components/common';
class ShowcaseComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.keyboardOffset = Platform.select({
            ios: 0,
            android: 228,
        });
        this.isLastItem = (index) => {
            const { children } = this.props;
            return React.Children.count(children) - 1 === index;
        };
        this.renderSection = (section, index) => {
            const { themedStyle } = this.props;
            const additionalStyle = this.isLastItem(index) ? null : themedStyle.itemBorder;
            return React.cloneElement(section, {
                style: [themedStyle.item, section.props.style, additionalStyle],
            });
        };
        this.renderSections = (source) => {
            return React.Children.map(source, this.renderSection);
        };
    }
    render() {
        const _a = this.props, { style, themedStyle, children } = _a, restProps = __rest(_a, ["style", "themedStyle", "children"]);
        return (<ScrollableAvoidKeyboard style={[themedStyle.container, style]} extraScrollHeight={this.keyboardOffset} {...restProps}>
        {this.renderSections(children)}
      </ScrollableAvoidKeyboard>);
    }
}
export const Showcase = withStyles(ShowcaseComponent, (theme) => ({
    container: {
        backgroundColor: theme['background-basic-color-1'],
    },
    item: {
        paddingHorizontal: 24,
        paddingVertical: 24,
    },
    itemBorder: {
        borderBottomWidth: 1,
        borderBottomColor: theme['border-basic-color-2'],
    },
}));
//# sourceMappingURL=showcase.component.js.map