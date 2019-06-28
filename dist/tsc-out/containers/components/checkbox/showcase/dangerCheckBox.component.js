import React from 'react';
import { CheckBox, } from '../../../../../node_modules/react-native-ui-kitten/ui';
class CheckBoxShowcaseComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            checked: this.props.checked,
        };
        this.onChange = (checked) => {
            this.setState({ checked });
        };
    }
    render() {
        return (<CheckBox {...this.props} checked={this.state.checked} onChange={this.onChange}/>);
    }
}
CheckBoxShowcaseComponent.defaultProps = {
    checked: true,
};
export const DangerCheckBox = (props) => {
    return (<CheckBoxShowcaseComponent status='danger' {...props}/>);
};
//# sourceMappingURL=dangerCheckBox.component.js.map