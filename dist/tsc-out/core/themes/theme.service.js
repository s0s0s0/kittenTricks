export class ThemeService {
}
ThemeService.select = (config, currentTheme) => {
    if (config[currentTheme]) {
        return config[currentTheme];
    }
    else if (config.default) {
        return config.default;
    }
    else {
        return null;
    }
};
//# sourceMappingURL=theme.service.js.map