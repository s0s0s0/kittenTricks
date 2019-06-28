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
import { MovieDetailListItem, } from './movieDetailListItem.component';
class MovieDetailListComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.renderItem = (item, index) => {
            return (<MovieDetailListItem key={index} description={item.description} value={`${item.value}`}/>);
        };
    }
    render() {
        const _a = this.props, { style, themedStyle, data } = _a, restProps = __rest(_a, ["style", "themedStyle", "data"]);
        return (<View {...restProps} style={[themedStyle.container, style]}>
        {data.map(this.renderItem)}
      </View>);
    }
}
export const MovieDetailList = withStyles(MovieDetailListComponent, (theme) => ({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
}));
//# sourceMappingURL=movieDetailList.component.js.map