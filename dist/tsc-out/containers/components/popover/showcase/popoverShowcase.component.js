import React from 'react';
import { Button, Popover, } from 'react-native-ui-kitten/ui';
import { PopoverContent, } from './popoverContent.component';
import { StyleSheet } from 'react-native';
import { profile1 } from '@src/core/data/profile';
export class PopoverShowcase extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            visible: this.props.visible,
        };
        this.onRequestClose = () => {
            this.setState({ visible: false });
        };
        this.onPopoverContentButtonPress = () => {
            this.setState({ visible: false });
        };
        this.onButtonPress = () => {
            this.setState({ visible: true });
        };
        this.getButtonTitle = (placement) => {
            const placementArray = placement.split(' ');
            if (placementArray.length > 1) {
                return placementArray[1].toUpperCase();
            }
            else {
                return 'CENTER';
            }
        };
        this.renderContentElement = () => {
            return (<PopoverContent style={styles.content} profile={profile1} onFollowPress={this.onPopoverContentButtonPress}/>);
        };
    }
    render() {
        const { placement } = this.props;
        const title = this.getButtonTitle(placement);
        return (<Popover {...this.props} visible={this.state.visible} content={this.renderContentElement()} onRequestClose={this.onRequestClose}>
        <Button style={styles.button} onPress={this.onButtonPress}>
          {title}
        </Button>
      </Popover>);
    }
}
PopoverShowcase.defaultProps = {
    visible: false,
};
const styles = StyleSheet.create({
    content: {
        width: 228,
    },
    button: {
        width: 106,
    },
});
//# sourceMappingURL=popoverShowcase.component.js.map