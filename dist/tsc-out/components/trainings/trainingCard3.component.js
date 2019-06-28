import React from 'react';
import { View, TouchableOpacity, ImageBackground, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Button, Text, } from 'react-native-ui-kitten/ui';
import { ClockIconOutline, FlashIconOutline, } from '@src/assets/icons';
import { textStyle } from '@src/components/common';
class TrainingCard3Component extends React.Component {
    constructor() {
        super(...arguments);
        this.onDetails = () => {
            this.props.onDetails(this.props.index);
        };
        this.onTiming = () => {
            this.props.onTiming(this.props.index);
        };
        this.onEnergy = () => {
            this.props.onEnergy(this.props.index);
        };
        this.renderTimingIcon = () => {
            const { themedStyle } = this.props;
            return ClockIconOutline(themedStyle.timingIcon);
        };
        this.renderEnergyIcon = () => {
            const { themedStyle } = this.props;
            return FlashIconOutline(themedStyle.energyIcon);
        };
    }
    render() {
        const { themedStyle, training, style } = this.props;
        return (<TouchableOpacity activeOpacity={0.95} onPress={this.onDetails} style={style}>
        <ImageBackground style={themedStyle.image} source={training.image.imageSource}/>
        <View style={themedStyle.infoContainer}>
          <Text style={themedStyle.titleLabel} category='h5'>
            {training.name}
          </Text>
          <View style={themedStyle.controlsContainer}>
            <Button style={themedStyle.timingButton} textStyle={themedStyle.controlButtonText} appearance='ghost' icon={this.renderTimingIcon} onPress={this.onTiming}>
              {training.duration}
            </Button>
            <Button textStyle={themedStyle.controlButtonText} appearance='ghost' icon={this.renderEnergyIcon} onPress={this.onEnergy}>
              {training.energy}
            </Button>
          </View>
        </View>
      </TouchableOpacity>);
    }
}
export const TrainingCard3 = withStyles(TrainingCard3Component, (theme) => ({
    image: {
        minHeight: 160,
    },
    infoContainer: {
        paddingVertical: 16,
        justifyContent: 'space-between',
    },
    titleLabel: Object.assign({ marginHorizontal: 18 }, textStyle.headline),
    controlsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    controlButtonText: Object.assign({ fontSize: 13, fontWeight: 'normal', color: theme['text-hint-color'] }, textStyle.button),
    timingButton: {
        marginLeft: 8,
    },
    timingIcon: {
        width: 20,
        height: 20,
        tintColor: theme['color-primary-default'],
    },
    energyIcon: {
        width: 20,
        height: 20,
        tintColor: theme['color-danger-default'],
    },
}));
//# sourceMappingURL=trainingCard3.component.js.map