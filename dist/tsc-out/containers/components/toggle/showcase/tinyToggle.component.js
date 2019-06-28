import React from 'react';
import { Toggle, } from '../../../../../node_modules/react-native-ui-kitten/ui';
class ToggleShowcaseComponent extends React.Component {
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
        return (<Toggle {...this.props} checked={this.state.checked} onChange={this.onChange}/>);
    }
}
ToggleShowcaseComponent.defaultProps = {
    checked: true,
};
export const TinyToggle = (props) => {
    return (<ToggleShowcaseComponent size='tiny' {...props}/>);
};
//# sourceMappingURL=tinyToggle.component.js.map