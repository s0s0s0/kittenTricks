import React from 'react';
import { View, TouchableOpacity, Dimensions, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { List, Button, Text, } from 'react-native-ui-kitten/ui';
import { textStyle } from '../../../../components/common';
const { width, height } = Dimensions.get('window');
class ByuModalComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onCancel = () => {
            this.props.onCancel();
        };
        this.renderAction = (info) => {
            const { themedStyle } = this.props;
            return (<TouchableOpacity style={themedStyle.actionContainer} activeOpacity={0.95} onPress={info.item.action}>
        <Text style={themedStyle.actionLabel} category='s2'>
          {info.item.title}
        </Text>
      </TouchableOpacity>);
        };
    }
    render() {
        const { themedStyle, shoppingItemsCount, product, actionItems, } = this.props;
        return ([
            <View style={themedStyle.container} key={0}>
          <View style={themedStyle.headerContainer}>
            <Text style={themedStyle.nameLabel} category='h6'>
              {product.name}
            </Text>
            <Text style={themedStyle.countLabel} category='p2'>
              {`You have ${shoppingItemsCount} in your Shopping Cart`}
            </Text>
          </View>
          <List style={themedStyle.actionsList} data={actionItems} renderItem={this.renderAction}/>
          <Button textStyle={textStyle.button} appearance='ghost' size='large' onPress={this.onCancel}>
            Cancel
          </Button>
        </View>,
            <View style={themedStyle.wrapper} pointerEvents='box-none' key={1}/>,
        ]);
    }
}
export const BuyProductModal = withStyles(ByuModalComponent, (theme) => ({
    wrapper: {
        width: width,
        height: height,
        backgroundColor: theme['background-basic-color-1'],
        opacity: 0.4,
        position: 'absolute',
    },
    container: {
        zIndex: 1,
        backgroundColor: theme['background-basic-color-3'],
        justifyContent: 'space-between',
        paddingTop: 24,
        paddingBottom: 16,
        width: 343,
        height: 276,
        borderRadius: 12,
        top: (height - 276) / 2,
        left: (width - 343) / 2,
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameLabel: textStyle.headline,
    countLabel: textStyle.paragraph,
    actionsList: {
        marginTop: 16,
        backgroundColor: 'transparent',
    },
    actionContainer: {
        width: '100%',
        padding: 16,
        justifyContent: 'center',
        borderBottomColor: theme['border-basic-color-4'],
        borderBottomWidth: 1.5,
    },
    actionLabel: textStyle.subtitle,
}));
//# sourceMappingURL=buyProduct.modal.js.map