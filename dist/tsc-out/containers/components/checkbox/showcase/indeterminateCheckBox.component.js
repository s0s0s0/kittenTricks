import React from 'react';
import { CheckBox, } from '../../../../../node_modules/react-native-ui-kitten/ui';
class CheckBoxShowcaseComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            checked: this.props.checked,
            indeterminate: this.props.indeterminate,
        };
        this.onChange = (checked, indeterminate) => {
            this.setState({ checked, indeterminate });
        };
    }
    render() {
        return (<CheckBox {...this.props} checked={this.state.checked} indeterminate={this.state.indeterminate} onChange={this.onChange}/>);
    }
}
CheckBoxShowcaseComponent.defaultProps = {
    checked: true,
    indeterminate: false,
};
export const IndeterminateCheckBox = (props) => {
    return (<CheckBoxShowcaseComponent indeterminate={true} {...props}/>);
};
//# sourceMappingURL=indeterminateCheckBox.component.js.map