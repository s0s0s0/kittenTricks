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
import { Image, } from 'react-native';
import { withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
import { List, ListItem, } from '../../../../node_modules/react-native-ui-kitten/ui';
class MovieScreenshotListComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onItemPress = (index) => {
            if (this.props.onItemPress) {
                this.props.onItemPress(index);
            }
        };
        this.renderItem = (info) => {
            const { themedStyle } = this.props;
            return (<ListItem style={themedStyle.itemContainer} activeOpacity={0.75} onPress={this.onItemPress}>
        <Image style={themedStyle.item} source={info.item.imageSource}/>
      </ListItem>);
        };
    }
    render() {
        const _a = this.props, { contentContainerStyle, themedStyle, data } = _a, restProps = __rest(_a, ["contentContainerStyle", "themedStyle", "data"]);
        return (<List {...restProps} contentContainerStyle={[themedStyle.container, contentContainerStyle]} horizontal={true} showsHorizontalScrollIndicator={false} data={data} renderItem={this.renderItem}/>);
    }
}
export const MovieScreenshotList = withStyles(MovieScreenshotListComponent, (theme) => ({
    container: {
        overflow: 'hidden',
    },
    itemContainer: {
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderRadius: 12,
        marginHorizontal: 8,
        overflow: 'hidden',
    },
    item: {
        width: 180,
        height: 120,
    },
}));
//# sourceMappingURL=movieScreenshotList.component.js.map