import React from 'react';
import { Themes } from './themes.component';
import { ThemeContext, themes, } from '@src/core/themes';
export class ThemesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.EXCLUDE_THEMES = [
            'App Theme',
        ];
        this.data = [];
        this.shouldIncludeTheme = (themeKey) => {
            return !this.EXCLUDE_THEMES.includes(themeKey);
        };
        this.toThemeObject = (theme) => {
            return { name: theme, theme: themes[theme] };
        };
        this.renderContent = (context) => {
            return (<Themes data={this.data} currentTheme={context.currentTheme} onToggleTheme={context.toggleTheme}/>);
        };
        this.data = Object.keys(themes)
            .filter(this.shouldIncludeTheme)
            .map(this.toThemeObject);
    }
    render() {
        return (<ThemeContext.Consumer>
        {this.renderContent}
      </ThemeContext.Consumer>);
    }
}
//# sourceMappingURL=themes.container.js.map