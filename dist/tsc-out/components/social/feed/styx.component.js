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
import { Chips, textStyle, } from '../../common';
import { ClockIconOutline } from '../../../assets/icons';
class StyxComponent extends React.Component {
    render() {
        const _a = this.props, { style, themedStyle, hint, value, icon, onPress } = _a, restProps = __rest(_a, ["style", "themedStyle", "hint", "value", "icon", "onPress"]);
        return (<View {...restProps} style={[themedStyle.container, style]}>
        <Text style={themedStyle.hintLabel} category='h6'>
          {hint}
        </Text>
        <Chips style={themedStyle.chips} icon={ClockIconOutline}>
          <Text style={themedStyle.chipsText} category='c2'>
            {value}
          </Text>
        </Chips>
      </View>);
    }
}
StyxComponent.defaultProps = {
    hint: 'STYX',
    icon: ClockIconOutline,
};
export const Styx = withStyles(StyxComponent, (theme) => ({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: theme['background-basic-color-2'],
    },
    hintLabel: Object.assign({ marginHorizontal: 16, marginVertical: 14 }, textStyle.headline),
    chips: {
        width: 80,
    },
    chipsText: Object.assign({ color: 'white' }, textStyle.caption2),
}));
//# sourceMappingURL=styx.component.js.map