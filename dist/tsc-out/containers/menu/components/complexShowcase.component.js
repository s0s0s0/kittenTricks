import React from 'react';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { StarIconFill } from '../../../assets/icons';
class ComplexComponentShowcaseComponent extends React.Component {
    render() {
        const { themedStyle } = this.props;
        return StarIconFill(themedStyle.icon);
    }
}
const ThemedComplexComponentShowcase = withStyles(ComplexComponentShowcaseComponent, (theme) => ({
    icon: {
        width: 32,
        height: 32,
        tintColor: theme['color-primary-default'],
    },
}));
export const ComplexComponentShowcase = () => {
    return (<ThemedComplexComponentShowcase />);
};
//# sourceMappingURL=complexShowcase.component.js.map