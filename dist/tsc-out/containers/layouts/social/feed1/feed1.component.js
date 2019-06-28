import React from 'react';
import { withStyles, } from '../../../../../node_modules/react-native-ui-kitten/theme';
import { List } from '../../../../../node_modules/react-native-ui-kitten/ui';
import { Feed1ListItem, } from './feed1ListItem.component';
class Feed1Component extends React.Component {
    constructor() {
        super(...arguments);
        this.onItemPress = (index) => {
            this.props.onTrainingPress(index);
        };
        this.onItemAddPress = (index) => {
            this.props.onAddTrainingPress(index);
        };
        this.onItemSharePress = (index) => {
            this.props.onShareTrainingPress(index);
        };
        this.onItemLikePress = (index) => {
            this.props.onLikeTrainingPress(index);
        };
        this.onItemStyxPress = (index) => {
            this.props.onStyxTrainingPress(index);
        };
        this.renderTrainingItemElement = (training) => {
            const { themedStyle } = this.props;
            return (<Feed1ListItem style={themedStyle.item} activeOpacity={0.95} photo={training.photo.imageSource} icon={training.icon.imageSource} category={training.category} time={`${training.time}h`} description={training.description} styx={`${training.styx} min`} onPress={this.onItemPress} onAddPress={this.onItemAddPress} onSharePress={this.onItemSharePress} onLikePress={this.onItemLikePress} onStyxPress={this.onItemStyxPress}/>);
        };
        this.renderTrainingItem = (info) => {
            const { item, index } = info;
            const trainingElement = this.renderTrainingItemElement(item);
            return React.cloneElement(trainingElement, { index });
        };
    }
    render() {
        const { themedStyle, trainings } = this.props;
        return (<List contentContainerStyle={themedStyle.container} data={trainings} renderItem={this.renderTrainingItem}/>);
    }
}
export const Feed1 = withStyles(Feed1Component, (theme) => ({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: theme['background-basic-color-2'],
    },
    item: {
        marginVertical: 8,
        backgroundColor: theme['background-basic-color-1'],
    },
}));
//# sourceMappingURL=feed1.component.js.map