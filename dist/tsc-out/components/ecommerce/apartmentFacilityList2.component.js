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
import { withStyles, } from '../../../node_modules/react-native-ui-kitten/theme';
import { ApartmentFacilityList2Item, } from './apartmentFacilityList2Item.component';
class ApartmentFacilityList2Component extends React.Component {
    constructor() {
        super(...arguments);
        this.renderListItemElement = (item) => {
            return (<ApartmentFacilityList2Item style={this.props.themedStyle.item} icon={item.icon.imageSource}>
        {item.title}
      </ApartmentFacilityList2Item>);
        };
        this.renderItem = (item, index) => {
            const listItemElement = this.renderListItemElement(item);
            return React.cloneElement(listItemElement, { key: index });
        };
        this.renderComponentChildren = () => {
            return this.props.data.map(this.renderItem);
        };
    }
    render() {
        const _a = this.props, { style, themedStyle } = _a, restProps = __rest(_a, ["style", "themedStyle"]);
        const componentChildren = this.renderComponentChildren();
        return (<View {...restProps} style={[themedStyle.container, style]}>
        {componentChildren}
      </View>);
    }
}
export const ApartmentFacilityList2 = withStyles(ApartmentFacilityList2Component, (theme) => ({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        marginVertical: 2,
        marginRight: 8,
    },
}));
//# sourceMappingURL=apartmentFacilityList2.component.js.map