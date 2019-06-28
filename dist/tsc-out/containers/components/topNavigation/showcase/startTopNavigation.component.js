import React from 'react';
import { TopNavigation, TopNavigationAction, } from 'react-native-ui-kitten/ui';
import { StarIconFill, ArrowIosBackFill, MoreVerticalIconFill, } from '@src/assets/icons';
export const StartTopNavigation = (props) => {
    return (<TopNavigation {...props} alignment='start' title='Title' subtitle='Subtitle' leftControl={renderLeftControl()} rightControls={renderRightControls()}/>);
};
const renderLeftControl = () => {
    return (<TopNavigationAction icon={ArrowIosBackFill}/>);
};
const renderRightControls = () => {
    return ([
        <TopNavigationAction icon={StarIconFill}/>,
        <TopNavigationAction icon={MoreVerticalIconFill}/>,
    ]);
};
//# sourceMappingURL=startTopNavigation.component.js.map