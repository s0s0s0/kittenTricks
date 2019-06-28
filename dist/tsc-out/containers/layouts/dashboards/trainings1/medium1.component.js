import React from 'react';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { List } from 'react-native-ui-kitten/ui';
import { TrainingCard1, } from '../../../../components/trainings/trainingCard.component';
class Medium1Component extends React.Component {
    constructor() {
        super(...arguments);
        this.onTrainingDetails = (index) => {
            this.props.onTrainingDetails(index);
        };
        this.renderCard = (info) => {
            return (<TrainingCard1 style={this.props.themedStyle.card} training={info.item} index={info.index} onDetails={this.onTrainingDetails}/>);
        };
    }
    render() {
        const { themedStyle, exercises } = this.props;
        return (<List contentContainerStyle={themedStyle.container} data={exercises} renderItem={this.renderCard}/>);
    }
}
export const Medium1 = withStyles(Medium1Component, (theme) => ({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    card: {
        marginVertical: 8,
    },
}));
//# sourceMappingURL=medium1.component.js.map