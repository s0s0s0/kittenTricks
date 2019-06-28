import React from 'react';
import { withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import { ShowcaseItem } from '../common/showcaseItem.component';
import { BottomEndOverflowMenu, BottomOverflowMenu, BottomStartOverflowMenu, LeftEndOverflowMenu, LeftOverflowMenu, LeftStartOverflowMenu, RightEndOverflowMenu, RightOverflowMenu, RightStartOverflowMenu, TopEndOverflowMenu, TopOverflowMenu, TopStartOverflowMenu, } from './showcase';
class OverflowMenuContainerComponent extends React.Component {
    render() {
        const { themedStyle } = this.props;
        return (<Showcase style={themedStyle.container}>
        <ShowcaseSection title='Placement'>
          <ShowcaseItem style={themedStyle.bottomItem} title='Bottom'>
            <BottomOverflowMenu />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.bottomItem} title='Bottom Start'>
            <BottomStartOverflowMenu />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.bottomItem} title='Bottom End'>
            <BottomEndOverflowMenu />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.rightItem} title='Right'>
            <RightOverflowMenu />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.rightItem} title='Right Start'>
            <RightStartOverflowMenu />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.rightItem} title='Right End'>
            <RightEndOverflowMenu />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.leftItem} title='Left'>
            <LeftOverflowMenu />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.leftItem} title='Left Start'>
            <LeftStartOverflowMenu />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.leftItem} title='Left End'>
            <LeftEndOverflowMenu />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.topItem} title='Top'>
            <TopOverflowMenu />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.topItem} title='Top Start'>
            <TopStartOverflowMenu />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.topItem} title='Top End'>
            <TopEndOverflowMenu />
          </ShowcaseItem>
        </ShowcaseSection>
      </Showcase>);
    }
}
export const OverflowMenuContainer = withStyles(OverflowMenuContainerComponent, (theme) => ({
    container: {
        backgroundColor: theme['background-basic-color-2'],
    },
    bottomItem: {
        justifyContent: 'flex-start',
    },
    rightItem: {
        flexDirection: 'row-reverse',
    },
    leftItem: {},
    topItem: {
        justifyContent: 'flex-start',
    },
}));
//# sourceMappingURL=overflowMenu.container.js.map