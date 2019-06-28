import React from 'react';
import { withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
import { List, } from '../../../../node_modules/react-native-ui-kitten/ui';
import { ProfileActivityList1Item, } from './profileActivityList1Item.component';
class ProfileActivityList1Component extends React.Component {
    constructor() {
        super(...arguments);
        this.onItemPress = (index) => {
            this.props.onItemPress(index);
        };
        this.onItemLikePressPress = (index) => {
            this.props.onItemPress(index);
        };
        this.renderListItemElement = (item) => {
            const { themedStyle } = this.props;
            const { photo, author, date, likes } = item;
            return (<ProfileActivityList1Item style={themedStyle.item} photo={photo.imageSource} profilePhoto={author.photo.imageSource} authorName={`${author.firstName} ${author.lastName}`} date={date} likes={likes} onPress={this.onItemPress} onLikePress={this.onItemLikePressPress}/>);
        };
        this.renderItem = (info) => {
            const { item, index } = info;
            const listItemElement = this.renderListItemElement(item);
            return React.cloneElement(listItemElement, { index });
        };
    }
    render() {
        return (<List {...this.props} renderItem={this.renderItem}/>);
    }
}
export const ProfileActivityList1 = withStyles(ProfileActivityList1Component, (theme) => ({
    item: {
        marginVertical: 8,
        backgroundColor: theme['background-basic-color-1'],
    },
}));
//# sourceMappingURL=profileActivityList1.component.js.map