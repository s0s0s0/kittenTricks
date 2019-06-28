import React from 'react';
import { Tab, TabView, Text, } from 'react-native-ui-kitten/ui';
export class TitleTabViewShowcase extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            selectedIndex: this.props.selectedIndex,
        };
        this.onTabSelect = (selectedIndex) => {
            this.setState({ selectedIndex });
        };
    }
    render() {
        return (<TabView selectedIndex={this.state.selectedIndex} onSelect={this.onTabSelect}>
        <Tab title='TAB 1'>
          <Text>
            Swipe next
          </Text>
        </Tab>
        <Tab title='TAB 2'>
          <Text>
            Swipe next
          </Text>
        </Tab>
        <Tab title='TAB 3'>
          <Text>
            You're done
          </Text>
        </Tab>
      </TabView>);
    }
}
export const TitleTabView = (props) => {
    return (<TitleTabViewShowcase {...props}/>);
};
//# sourceMappingURL=titleTabView.component.js.map