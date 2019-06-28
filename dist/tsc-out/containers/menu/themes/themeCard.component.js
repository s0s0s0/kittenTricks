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
import { withStyles, } from 'react-native-ui-kitten/theme';
import { ListItem, Text, } from 'react-native-ui-kitten/ui';
export class ThemeCardComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.getCardStatus = () => {
            return this.props.disabled ? 'ACTIVE' : '';
        };
        this.renderColors = (style, index) => {
            const { themedStyle } = this.props;
            return (<View key={index} style={[themedStyle.colorItem, style]}/>);
        };
    }
    render() {
        const _a = this.props, { themedStyle, style, title } = _a, restProps = __rest(_a, ["themedStyle", "style", "title"]);
        const colors = [
            themedStyle.colorItem1,
            themedStyle.colorItem2,
            themedStyle.colorItem3,
            themedStyle.colorItem4,
            themedStyle.colorItem5,
            themedStyle.colorItem6,
        ];
        const cardStatus = this.getCardStatus();
        return (<ListItem {...restProps} style={[themedStyle.container, style]}>
        <View style={themedStyle.headerContainer}>
          <Text style={themedStyle.titleLabel} category='h6'>
            {title}
          </Text>
          <Text category='label'>
            {cardStatus}
          </Text>
        </View>
        <View style={themedStyle.colorContainer}>
          {colors.map(this.renderColors)}
        </View>
      </ListItem>);
    }
}
export const ThemeCard = withStyles(ThemeCardComponent, (theme) => ({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderRadius: 8,
        overflow: 'hidden',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    colorContainer: {
        marginTop: 24,
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleLabel: {
        flex: 1,
    },
    colorItem: {
        width: 40,
        height: 40,
        borderRadius: 6,
        marginHorizontal: 2,
    },
    colorItem1: {
        backgroundColor: theme['background-basic-color-2'],
    },
    colorItem2: {
        backgroundColor: theme['background-basic-color-3'],
    },
    colorItem3: {
        backgroundColor: theme['background-alternative-color-2'],
    },
    colorItem4: {
        backgroundColor: theme['background-alternative-color-1'],
    },
    colorItem5: {
        backgroundColor: theme['text-basic-color'],
    },
    colorItem6: {
        backgroundColor: theme['color-primary-default'],
    },
}));
//# sourceMappingURL=themeCard.component.js.map