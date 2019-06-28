import React from 'react';
import { View, Dimensions, } from 'react-native';
import { withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
import { Button, Text, } from '../../../../node_modules/react-native-ui-kitten/ui';
import { textStyle } from '../../../components/common';
class ComingSoonModalComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onCancel = () => {
            this.props.onCancel();
        };
    }
    render() {
        const { themedStyle } = this.props;
        return (<View style={themedStyle.container}>
        <View style={themedStyle.headerContainer}>
          <Text style={themedStyle.titleLabel} category='h6'>
            Coming Soon
          </Text>
          <Text style={themedStyle.descriptionLabel} category='p2'>
            These layouts are not currently available. Stay tuned
          </Text>
        </View>
        <Button textStyle={textStyle.button} appearance='ghost' size='large' onPress={this.onCancel}>
          OKAY
        </Button>
      </View>);
    }
}
export const ComingSoonModal = withStyles(ComingSoonModalComponent, (theme) => {
    const dimensions = Dimensions.get('window');
    const contentWidth = dimensions.width - 24;
    const contentHeight = 192;
    return {
        container: {
            zIndex: 1,
            justifyContent: 'space-between',
            padding: 24,
            width: contentWidth,
            height: contentHeight,
            borderRadius: 12,
            top: (dimensions.height - contentHeight) / 2,
            left: (dimensions.width - contentWidth) / 2,
            backgroundColor: theme['background-basic-color-3'],
        },
        headerContainer: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        titleLabel: textStyle.headline,
        descriptionLabel: Object.assign({ marginTop: 24 }, textStyle.paragraph),
    };
});
//# sourceMappingURL=comingSoon.modal.js.map