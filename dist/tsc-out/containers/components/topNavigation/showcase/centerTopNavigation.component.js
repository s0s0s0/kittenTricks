import React from 'react';
import { TopNavigation, TopNavigationAction, } from '../../../../../node_modules/react-native-ui-kitten/ui';
import { StarIconFill, ArrowIosBackFill, MoreVerticalIconFill, } from '../../../../assets/icons';
export const CenterTopNavigation = (props) => {
    return (<TopNavigation {...props} alignment='center' title='Title' subtitle='Subtitle' leftControl={renderLeftControl()} rightControls={renderRightControls()}/>);
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
//# sourceMappingURL=centerTopNavigation.component.js.map