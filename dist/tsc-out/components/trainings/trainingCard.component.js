import React from 'react';
import { View, TouchableOpacity, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten/ui';
import { Chips, ImageOverlay, textStyle, } from '@src/components/common';
import { ClockIconOutline } from '@src/assets/icons';
class TrainingCardComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onDetails = () => {
            this.props.onDetails(this.props.index);
        };
    }
    render() {
        const { themedStyle, training, style } = this.props;
        return (<TouchableOpacity activeOpacity={0.95} onPress={this.onDetails}>
        <ImageOverlay style={[themedStyle.container, style]} source={training.image.imageSource}>
          <View>
            <Text style={themedStyle.levelLabel} appearance='hint'>
              {`${training.level} Level`}
            </Text>
            <Text style={themedStyle.titleLabel} category='h5'>
              {training.name}
            </Text>
          </View>
          <Chips style={themedStyle.chips} icon={ClockIconOutline}>
            <Text style={themedStyle.chipsText} category='c2'>
              {training.duration}
            </Text>
          </Chips>
        </ImageOverlay>
      </TouchableOpacity>);
    }
}
export const TrainingCard1 = withStyles(TrainingCardComponent, (theme) => ({
    container: {
        height: 200,
        padding: 16,
        borderRadius: 12,
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    levelLabel: Object.assign({ color: 'white' }, textStyle.subtitle),
    titleLabel: Object.assign({ color: 'white' }, textStyle.headline),
    chips: {
        width: 80,
    },
    chipsText: Object.assign({ color: 'white' }, textStyle.caption2),
}));
//# sourceMappingURL=trainingCard.component.js.map