import React from 'react';
import { View } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { ComponentsList, } from '../../../components/menu';
class ComponentsComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onItemPress = (index) => {
            this.props.onItemSelect(index);
        };
    }
    render() {
        const { themedStyle, data } = this.props;
        return (<View style={themedStyle.container}>
        <ComponentsList contentContainerStyle={themedStyle.contentContainer} data={data} onItemPress={this.onItemPress}/>
      </View>);
    }
}
export const Components = withStyles(ComponentsComponent, (theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-2'],
    },
    contentContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
}));
//# sourceMappingURL=components.component.js.map