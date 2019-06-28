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
import { View, } from 'react-native';
import { withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
import { Text } from '../../../../node_modules/react-native-ui-kitten/ui';
import { textStyle } from '../../../components/common';
class ShowcaseSectionComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.renderItem = (item) => {
            const { themedStyle } = this.props;
            const additionalStyle = themedStyle.item;
            return React.cloneElement(item, {
                style: [item.props.style, additionalStyle],
            });
        };
        this.renderItems = (source) => {
            return React.Children.map(source, this.renderItem);
        };
    }
    render() {
        const _a = this.props, { style, themedStyle, title, children } = _a, restProps = __rest(_a, ["style", "themedStyle", "title", "children"]);
        return (<View style={[themedStyle.container, style]} {...restProps}>
        <Text style={themedStyle.titleLabel} category='h6'>
          {title}
        </Text>
        {this.renderItems(children)}
      </View>);
    }
}
export const ShowcaseSection = withStyles(ShowcaseSectionComponent, (theme) => ({
    container: {},
    titleLabel: Object.assign({ marginVertical: 8 }, textStyle.headline),
    item: {
        marginVertical: 8,
    },
}));
//# sourceMappingURL=showcaseSection.component.js.map