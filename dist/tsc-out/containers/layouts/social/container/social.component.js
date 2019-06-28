import React from 'react';
import { withStyles, } from '../../../../../node_modules/react-native-ui-kitten/theme';
import { LayoutMenu } from '../../../../components/common';
class SocialComponent extends React.Component {
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
export const Social = withStyles(SocialComponent, (theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-2'],
    },
}));
//# sourceMappingURL=social.component.js.map