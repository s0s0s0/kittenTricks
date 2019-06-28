import React from 'react';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import { ShowcaseItem } from '../common/showcaseItem.component';
import { BottomEndTooltip, BottomTooltip, BottomStartTooltip, LeftEndTooltip, LeftTooltip, LeftStartTooltip, RightEndTooltip, RightTooltip, RightStartTooltip, TopEndTooltip, TopTooltip, TopStartTooltip, IconTooltip, } from './showcase';
class TooltipContainerComponent extends React.Component {
    render() {
        const { themedStyle } = this.props;
        return (<Showcase style={themedStyle.container}>
        <ShowcaseSection title='Accessories'>
          <ShowcaseItem title='Icon'>
            <IconTooltip />
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Placement'>
          <ShowcaseItem style={themedStyle.bottomItem} title='Bottom'>
            <BottomTooltip />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.bottomItem} title='Bottom Start'>
            <BottomStartTooltip />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.bottomItem} title='Bottom End'>
            <BottomEndTooltip />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.rightItem} title='Right'>
            <RightTooltip />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.rightItem} title='Right Start'>
            <RightStartTooltip />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.rightItem} title='Right End'>
            <RightEndTooltip />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.leftItem} title='Left'>
            <LeftTooltip />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.leftItem} title='Left Start'>
            <LeftStartTooltip />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.leftItem} title='Left End'>
            <LeftEndTooltip />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.topItem} title='Top'>
            <TopTooltip />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.topItem} title='Top Start'>
            <TopStartTooltip />
          </ShowcaseItem>
          <ShowcaseItem style={themedStyle.topItem} title='Top End'>
            <TopEndTooltip />
          </ShowcaseItem>
        </ShowcaseSection>
      </Showcase>);
    }
}
export const TooltipContainer = withStyles(TooltipContainerComponent, (theme) => ({
    container: {},
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
//# sourceMappingURL=tooltip.container.js.map