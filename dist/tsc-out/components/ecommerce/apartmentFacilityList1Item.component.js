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
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Button, } from 'react-native-ui-kitten/ui';
import { textStyle } from '@src/components/common';
class ApartmentFacilityList1ItemComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onPress = () => {
            this.props.onPress(this.props.index);
        };
    }
    render() {
        const _a = this.props, { style, themedStyle } = _a, restProps = __rest(_a, ["style", "themedStyle"]);
        return (<Button textStyle={themedStyle.text} appearance='outline' size='tiny' {...restProps} style={[themedStyle.container, style]} onPress={this.onPress}/>);
    }
}
export const ApartmentFacilityList1Item = withStyles(ApartmentFacilityList1ItemComponent, (theme) => ({
    container: {
        borderWidth: 1,
        borderRadius: 15,
    },
    text: Object.assign({ fontSize: 11 }, textStyle.paragraph),
}));
//# sourceMappingURL=apartmentFacilityList1Item.component.js.map