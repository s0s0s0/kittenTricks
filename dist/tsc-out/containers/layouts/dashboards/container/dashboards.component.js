import React from 'react';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { LayoutMenu } from '@src/components/common';
class DashboardsComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onCategorySelect = (index) => {
            this.props.onLayoutSelect(index);
        };
        this.onItemPress = (index) => {
            this.props.onItemSelect(index);
        };
    }
    render() {
        const { themedStyle, data, selectedLayoutIndex } = this.props;
        return (<LayoutMenu style={themedStyle.container} data={data} selectedIndex={selectedLayoutIndex} onSelect={this.onCategorySelect} onItemPress={this.onItemPress}/>);
    }
}
export const Dashboards = withStyles(DashboardsComponent, (theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-2'],
    },
}));
//# sourceMappingURL=dashboards.component.js.map