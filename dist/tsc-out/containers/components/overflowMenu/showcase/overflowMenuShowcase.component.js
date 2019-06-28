import React from 'react';
import { Button, OverflowMenu, } from '../../../../../node_modules/react-native-ui-kitten/ui';
import { StarIconFill } from '../../../../assets/icons';
import { StyleSheet } from 'react-native';
export class OverflowMenuShowcase extends React.Component {
    constructor() {
        super(...arguments);
        this.items = [
            {
                text: 'Menu Item 1',
            },
            {
                text: 'Menu Item 2',
            },
            {
                text: 'Icon Menu Item',
                icon: StarIconFill,
            },
            {
                text: 'Disabled Menu Item',
                icon: StarIconFill,
                disabled: true,
            },
        ];
        this.state = {
            visible: this.props.visible,
        };
        this.onRequestClose = () => {
            this.setState({ visible: false });
        };
        this.onItemSelect = () => {
            this.setState({ visible: false });
        };
        this.onButtonPress = () => {
            this.setState({ visible: true });
        };
    }
    render() {
        return (<OverflowMenu style={styles.container} {...this.props} visible={this.state.visible} items={this.items} onSelect={this.onItemSelect} onRequestClose={this.onRequestClose}>
        <Button onPress={this.onButtonPress}>BUTTON</Button>
      </OverflowMenu>);
    }
}
OverflowMenuShowcase.defaultProps = {
    visible: false,
};
const styles = StyleSheet.create({
    container: {
        width: 228,
    },
});
//# sourceMappingURL=overflowMenuShowcase.component.js.map