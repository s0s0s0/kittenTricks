import React from 'react';
import { Radio, } from '../../../../../node_modules/react-native-ui-kitten/ui';
class RadioShowcaseComponent extends React.Component {
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
        return (<Radio {...this.props} checked={this.state.checked} onChange={this.onChange}/>);
    }
}
RadioShowcaseComponent.defaultProps = {
    checked: true,
};
export const CheckedDisabledRadio = (props) => {
    return (<RadioShowcaseComponent checked={true} disabled={true} {...props}/>);
};
//# sourceMappingURL=checkedDisabledRadio.component.js.map