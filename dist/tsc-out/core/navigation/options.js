import React from 'react';
import { Alert } from 'react-native';
import { EcommerceHeader } from '@src/components/ecommerce';
import { MenuContainer } from '@src/containers/menu';
import { ArrowIosBackFill } from '@src/assets/icons';
import { TopNavigationBar } from './components/topNavigationBar.component';
import { getCurrentRouteState, isRootRoute, getCurrentRouteIndex, } from './util';
import { KEY_NAVIGATION_BACK } from './constants';
const MenuTopNavigationParams = {
    header: (props) => {
        // @ts-ignore (private API)
        const { routeName } = getCurrentRouteState(props.navigation);
        const index = getCurrentRouteIndex(props.navigation);
        return (<TopNavigationBar {...props} title={routeName} backIcon={isRootRoute(index) && ArrowIosBackFill} onBackPress={() => {
            props.navigation.goBack(KEY_NAVIGATION_BACK);
        }}/>);
    },
};
const EcommerceMenuTopNavigationParams = {
    header: (props) => {
        const state = getCurrentRouteState(props.navigation);
        const onBackPress = () => {
            props.navigation.goBack(KEY_NAVIGATION_BACK);
        };
        const onSearchPress = () => {
            Alert.alert('Search...');
        };
        const onShoppingCartPress = () => {
            props.navigation.navigate({
                key: state.routeName,
                routeName: 'Shopping Cart',
            });
        };
        return (<EcommerceHeader title={state.routeName} onBack={onBackPress} onSearch={onSearchPress} onShoppingCart={onShoppingCartPress}/>);
    },
};
const MenuBottomNavigationParams = {
    bottomNavigation: (props) => {
        return (<MenuContainer {...props}/>);
    },
};
export const MenuNavigationOptions = Object.assign({}, MenuTopNavigationParams, MenuBottomNavigationParams);
export const SocialNavigationOptions = MenuTopNavigationParams;
export const ArticlesNavigationOptions = MenuTopNavigationParams;
export const DashboardNavigationOptions = MenuTopNavigationParams;
export const EcommerceNavigationOptions = EcommerceMenuTopNavigationParams;
//# sourceMappingURL=options.js.map