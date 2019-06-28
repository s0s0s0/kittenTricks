import React from 'react';
import { View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten/ui';
class PriceTextComponent extends React.Component {
    render() {
        const { style, themedStyle, valueStyle, scaleStyle, children, scale } = this.props;
        return (<View style={[themedStyle.container, style]}>
        <Text style={[themedStyle.valueLabel, valueStyle]}>{children}</Text>
        <Text style={[themedStyle.scaleLabel, scaleStyle]}>{`/${scale}`}</Text>
      </View>);
    }
}
export const PriceText = withStyles(PriceTextComponent, (theme) => ({
    container: {
        flexDirection: 'row',
    },
    valueLabel: {},
    scaleLabel: {
        alignSelf: 'flex-end',
    },
}));
//# sourceMappingURL=priceText.component.js.map