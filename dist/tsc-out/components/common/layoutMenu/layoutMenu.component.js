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
import { ThemeProvider, withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
import { Tab, TabView, } from '../../../../node_modules/react-native-ui-kitten/ui';
import { GridIconOutline, ListIconFill, } from '../../../assets/icons';
import { LayoutGridList } from '../layoutGridList';
import { LayoutList } from '../layoutList';
import { themes } from '../../../core/themes';
class LayoutMenuComponent extends React.Component {
    constructor(props) {
        super(props);
        this.shouldLoadTabContentElement = (index) => {
            return this.tabLoadingMap[`${index}`];
        };
        this.createTabLoadingMap = (selectedIndex) => {
            return { [`${selectedIndex}`]: true };
        };
        this.onItemPress = (index) => {
            this.props.onItemPress(index);
        };
        this.tabLoadingMap = this.createTabLoadingMap(props.selectedIndex);
    }
    componentWillUpdate(nextProps) {
        const nextLoadingMap = this.createTabLoadingMap(nextProps.selectedIndex);
        this.tabLoadingMap = Object.assign({}, this.tabLoadingMap, nextLoadingMap);
    }
    render() {
        const _a = this.props, { themedStyle, data } = _a, restProps = __rest(_a, ["themedStyle", "data"]);
        return (<ThemeProvider theme={Object.assign({}, this.props.theme, themes['App Theme'])}>
        <TabView shouldLoadComponent={this.shouldLoadTabContentElement} {...restProps}>
          <Tab icon={GridIconOutline}>
            <LayoutGridList style={themedStyle.listContainer} contentContainerStyle={themedStyle.listContentContainer} data={data} onItemPress={this.onItemPress}/>
          </Tab>
          <Tab icon={ListIconFill}>
            <LayoutList style={themedStyle.listContainer} contentContainerStyle={themedStyle.listContentContainer} data={data} onItemPress={this.onItemPress}/>
          </Tab>
        </TabView>
      </ThemeProvider>);
    }
}
export const LayoutMenu = withStyles(LayoutMenuComponent, (theme) => ({
    listContainer: {
        flex: 1,
    },
    listContentContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
}));
//# sourceMappingURL=layoutMenu.component.js.map