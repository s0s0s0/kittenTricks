import React from 'react';
import { List, } from 'react-native-ui-kitten/ui';
import { ThemeProvider, withStyles, } from 'react-native-ui-kitten/theme';
import { ThemeCard } from './themeCard.component';
import { fireAnalyticsEvent } from '@src/core/utils/analytics';
class ThemesComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onThemeChangeAnalyticsEventError = (error) => {
            console.warn('Analytics error: ', error.message);
        };
        this.fireAnalyticsEvent = (theme) => {
            fireAnalyticsEvent({
                category: 'Theming',
                action: 'Theme change',
                label: theme,
            })
                .catch(this.onThemeChangeAnalyticsEventError);
        };
        this.onItemPress = (index) => {
            const { [index]: theme } = this.props.data;
            this.fireAnalyticsEvent(theme.name);
            this.props.onToggleTheme(theme.name);
        };
        this.renderItem = (info) => {
            const isDisabled = this.props.currentTheme === info.item.name;
            return (<ThemeProvider theme={info.item.theme}>
        <ThemeCard style={this.props.themedStyle.item} title={info.item.name} disabled={isDisabled} onPress={() => {
                this.onItemPress(info.index);
            }}/>
      </ThemeProvider>);
        };
    }
    render() {
        const { themedStyle, data } = this.props;
        return (<List style={themedStyle.container} contentContainerStyle={themedStyle.contentContainer} data={data} renderItem={this.renderItem}/>);
    }
}
export const Themes = withStyles(ThemesComponent, (theme) => ({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: theme['background-basic-color-2'],
    },
    item: {
        marginVertical: 8,
    },
}));
//# sourceMappingURL=themes.component.js.map