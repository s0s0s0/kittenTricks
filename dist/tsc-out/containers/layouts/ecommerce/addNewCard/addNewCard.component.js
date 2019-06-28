import React from 'react';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Button } from 'react-native-ui-kitten/ui';
import { AddPaymentCardForm, } from '../../../../components/ecommerce';
import { ContainerView, textStyle, } from '../../../../components/common';
class AddNewCardComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            formValue: undefined,
        };
        this.onFormValueChange = (formValue) => {
            this.setState({ formValue });
        };
        this.onAddButtonPress = () => {
            this.props.onAddPress(this.state.formValue);
        };
    }
    render() {
        const { themedStyle } = this.props;
        return (<ContainerView style={themedStyle.container} contentContainerStyle={themedStyle.contentContainer}>
        <AddPaymentCardForm style={themedStyle.formContainer} onFormValueChange={this.onFormValueChange}/>
        <Button style={themedStyle.addButton} textStyle={textStyle.button} size='giant' disabled={!this.state.formValue} onPress={this.onAddButtonPress}>
          ADD NEW CARD
        </Button>
      </ContainerView>);
    }
}
export const AddNewCard = withStyles(AddNewCardComponent, (theme) => ({
    container: {
        backgroundColor: theme['background-basic-color-2'],
        paddingHorizontal: 16,
    },
    contentContainer: {
        flex: 1,
    },
    formContainer: {
        flex: 1,
        marginTop: 40,
    },
    addButton: {
        marginVertical: 24,
    },
}));
//# sourceMappingURL=addNewCard.component.js.map