import React from 'react';
import { withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
import { LayoutsList } from '../../../components/menu';
class LayoutsComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onItemPress = (index) => {
            this.props.onItemSelect(index);
        };
    }
    render() {
        const { themedStyle, data } = this.props;
        return (<LayoutsList contentContainerStyle={themedStyle.contentContainer} data={data} onItemPress={this.onItemPress}/>);
    }
}
export const Layouts = withStyles(LayoutsComponent, (theme) => ({
    container: {},
    contentContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    item: {
        flex: 1,
        height: 160,
        marginHorizontal: 8,
        marginVertical: 8,
    },
}));
//# sourceMappingURL=layouts.component.js.map