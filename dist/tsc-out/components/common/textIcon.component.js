import React from 'react';
import { View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten/ui';
import { textStyle } from './style';
class TextIconComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.renderIconElement = (icon, style) => {
            const iconElement = icon(style);
            return React.cloneElement(iconElement, {
                style: [style, iconElement.props.style],
            });
        };
    }
    render() {
        const { style, themedStyle, textStyle: derivedTextStyle, iconStyle, icon, children } = this.props;
        const iconElement = icon ? this.renderIconElement(icon, [themedStyle.icon, iconStyle]) : null;
        return (<View style={[themedStyle.container, style]}>
        {iconElement}
        <Text style={[themedStyle.text, derivedTextStyle]}>
          {children}
        </Text>
      </View>);
    }
}
export const TextIcon = withStyles(TextIconComponent, (theme) => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: Object.assign({ marginHorizontal: 8 }, textStyle.paragraph),
    icon: {
        width: 16,
        height: 16,
    },
}));
//# sourceMappingURL=textIcon.component.js.map