import React from 'react';
import { View, TouchableOpacity, ImageBackground, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten/ui';
import { Chips, textStyle, } from '@src/components/common';
import { ClockIconOutline, ArrowForwardIconOutline, } from '@src/assets/icons';
class TrainingCardComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onDetails = () => {
            this.props.onDetails(this.props.index);
        };
        this.renderDetailsIcon = () => {
            return ArrowForwardIconOutline(this.props.themedStyle.detailsIcon);
        };
    }
    render() {
        const { themedStyle, training, style } = this.props;
        return (<TouchableOpacity activeOpacity={0.95} onPress={this.onDetails}>
        <View style={[themedStyle.container, style]}>
          <ImageBackground style={[themedStyle.subContainer, themedStyle.leftSection]} source={training.image.imageSource}/>
          <View style={[themedStyle.subContainer, themedStyle.rightSection]}>
            <Text style={themedStyle.titleLabel} category='h5'>
              {training.name}
            </Text>
            <View style={themedStyle.controlsContainer}>
              <Chips style={themedStyle.chips} icon={ClockIconOutline}>
                <Text style={themedStyle.chipsText} category='c1'>
                  {training.duration}
                </Text>
              </Chips>
              {this.renderDetailsIcon()}
            </View>
          </View>
        </View>
      </TouchableOpacity>);
    }
}
export const TrainingCard2 = withStyles(TrainingCardComponent, (theme) => ({
    container: {
        flexDirection: 'row',
        borderRadius: 12,
        minHeight: 144,
        overflow: 'hidden',
    },
    subContainer: {
        flex: 1,
    },
    rightSection: {
        padding: 16,
        justifyContent: 'space-between',
        backgroundColor: theme['background-basic-color-1'],
    },
    leftSection: {
        padding: 16,
    },
    titleLabel: textStyle.headline,
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    chips: {
        width: 80,
    },
    chipsText: Object.assign({ color: 'white' }, textStyle.paragraph),
    detailsIcon: {
        width: 22,
        height: 22,
        tintColor: theme['text-hint-color'],
    },
}));
//# sourceMappingURL=trainingCard2.component.js.map