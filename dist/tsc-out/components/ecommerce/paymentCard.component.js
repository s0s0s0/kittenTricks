import React from 'react';
import { View, TouchableOpacity, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten/ui';
import { MoreVerticalIconFill } from '../../assets/icons';
import { textStyle } from '../common';
class PaymentCardComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onDetails = () => {
            this.props.onDetails(this.props.index);
        };
        this.renderDetailsIcon = () => {
            return MoreVerticalIconFill(this.props.themedStyle.moreIcon);
        };
    }
    render() {
        const { themedStyle, style, paymentCard } = this.props;
        const detailsHitSlop = {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
        };
        return (<View style={[themedStyle.container, style]}>
        <View style={[themedStyle.topBottomContainer, themedStyle.topContainer]}>
          <Text style={themedStyle.typeLabel} category='h4'>
            {paymentCard.type}
          </Text>
          <TouchableOpacity hitSlop={detailsHitSlop} activeOpacity={0.95} onPress={this.onDetails}>
            {this.renderDetailsIcon()}
          </TouchableOpacity>
        </View>
        <Text style={themedStyle.numberLabel} category='s1'>
          {paymentCard.number}
        </Text>
        <View style={themedStyle.topBottomContainer}>
          <View style={themedStyle.bottomLeftContainer}>
            <Text style={themedStyle.bottomLabel} category='c1'>
              Cardholder Name
            </Text>
            <Text style={themedStyle.bottomLabelMain} category='s1'>
              {paymentCard.cardHolder}
            </Text>
          </View>
          <View style={themedStyle.bottomRightContainer}>
            <Text style={[themedStyle.bottomLabel, themedStyle.rightLabel]} category='c1'>
              Expire Date
            </Text>
            <Text style={[themedStyle.bottomLabelMain, themedStyle.rightLabel]}>
              {paymentCard.expireDate}
            </Text>
          </View>
        </View>
      </View>);
    }
}
export const PaymentCard = withStyles(PaymentCardComponent, (theme) => ({
    container: {
        borderRadius: 12,
        padding: 24,
        backgroundColor: theme['color-primary-default'],
    },
    topContainer: {
        marginBottom: 32,
    },
    topBottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    typeLabel: Object.assign({ color: 'white' }, textStyle.headline),
    numberLabel: Object.assign({ color: 'white', marginBottom: 26, fontSize: 18 }, textStyle.headline),
    bottomLabel: Object.assign({ color: 'white' }, textStyle.caption1),
    bottomLabelMain: Object.assign({ color: 'white' }, textStyle.subtitle),
    bottomLeftContainer: {
        justifyContent: 'flex-start',
    },
    bottomRightContainer: {
        justifyContent: 'flex-end',
    },
    moreIcon: {
        width: 4,
        height: 18,
        tintColor: 'white',
    },
    rightLabel: {
        textAlign: 'right',
    },
}));
//# sourceMappingURL=paymentCard.component.js.map