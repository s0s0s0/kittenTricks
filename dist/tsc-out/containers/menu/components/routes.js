import { ComponentsIconAvatar, ComponentsIconAvatarDark, ComponentsIconBottomNavigation, ComponentsIconBottomNavigationDark, ComponentsIconButton, ComponentsIconButtonDark, ComponentsIconButtonGroup, ComponentsIconButtonGroupDark, ComponentsIconCheckBox, ComponentsIconCheckBoxDark, ComponentsIconInput, ComponentsIconInputDark, ComponentsIconList, ComponentsIconListDark, ComponentsIconOverflowMenu, ComponentsIconOverflowMenuDark, ComponentsIconPopover, ComponentsIconPopoverDark, ComponentsIconRadio, ComponentsIconRadioDark, ComponentsIconTabView, ComponentsIconTabViewDark, ComponentsIconText, ComponentsIconTextDark, ComponentsIconToggle, ComponentsIconToggleDark, ComponentsIconTooltip, ComponentsIconTooltipDark, ComponentsIconTopNavigation, ComponentsIconTopNavigationDark, } from '../../../assets/icons';
import { ThemeService, } from '../../../core/themes';
export const routes = [
    {
        title: 'Button',
        icon: (style, theme) => {
            return ThemeService.select({
                'Eva Light': ComponentsIconButton(style),
                'Eva Dark': ComponentsIconButtonDark(style),
            }, theme);
        },
        route: 'Button',
    },
    {
        title: 'Button Group',
        icon: (style, theme) => {
            return ThemeService.select({
                'Eva Light': ComponentsIconButtonGroup(style),
                'Eva Dark': ComponentsIconButtonGroupDark(style),
            }, theme);
        },
        route: 'Button Group',
    },
    {
        title: 'Checkbox',
        icon: (style, theme) => {
            return ThemeService.select({
                'Eva Light': ComponentsIconCheckBox(style),
                'Eva Dark': ComponentsIconCheckBoxDark(style),
            }, theme);
        },
        route: 'CheckBox',
    },
    {
        title: 'Toggle',
        icon: (style, theme) => {
            return ThemeService.select({
                'Eva Light': ComponentsIconToggle(style),
                'Eva Dark': ComponentsIconToggleDark(style),
            }, theme);
        },
        route: 'Toggle',
    },
    {
        title: 'Radio',
        icon: (style, theme) => {
            return ThemeService.select({
                'Eva Light': ComponentsIconRadio(style),
                'Eva Dark': ComponentsIconRadioDark(style),
            }, theme);
        },
        route: 'Radio',
    },
    {
        title: 'Input',
        icon: (style, theme) => {
            return ThemeService.select({
                'Eva Light': ComponentsIconInput(style),
                'Eva Dark': ComponentsIconInputDark(style),
            }, theme);
        },
        route: 'Input',
    },
    {
        title: 'Text',
        icon: (style, theme) => {
            return ThemeService.select({
                'Eva Light': ComponentsIconText(style),
                'Eva Dark': ComponentsIconTextDark(style),
            }, theme);
        },
        route: 'Text',
    },
    {
        title: 'Avatar',
        icon: (style, theme) => {
            return ThemeService.select({
                'Eva Light': ComponentsIconAvatar(style),
                'Eva Dark': ComponentsIconAvatarDark(style),
            }, theme);
        },
        route: 'Avatar',
    },
    {
        title: 'Popover',
        icon: (style, theme) => {
            return ThemeService.select({
                'Eva Light': ComponentsIconPopover(style),
                'Eva Dark': ComponentsIconPopoverDark(style),
            }, theme);
        },
        route: 'Popover',
    },
    {
        title: 'Tooltip',
        icon: (style, theme) => {
            return ThemeService.select({
                'Eva Light': ComponentsIconTooltip(style),
                'Eva Dark': ComponentsIconTooltipDark(style),
            }, theme);
        },
        route: 'Tooltip',
    },
    {
        title: 'Overflow Menu',
        icon: (style, theme) => {
            return ThemeService.select({
                'Eva Light': ComponentsIconOverflowMenu(style),
                'Eva Dark': ComponentsIconOverflowMenuDark(style),
            }, theme);
        },
        route: 'Overflow Menu',
    },
    {
        title: 'Tab View',
        icon: (style, theme) => {
            return ThemeService.select({
                'Eva Light': ComponentsIconTabView(style),
                'Eva Dark': ComponentsIconTabViewDark(style),
            }, theme);
        },
        route: 'Tab View',
    },
    {
        title: 'List',
        icon: (style, theme) => {
            return ThemeService.select({
                'Eva Light': ComponentsIconList(style),
                'Eva Dark': ComponentsIconListDark(style),
            }, theme);
        },
        route: 'List',
    },
    {
        title: 'Top Navigation',
        icon: (style, theme) => {
            return ThemeService.select({
                'Eva Light': ComponentsIconTopNavigation(style),
                'Eva Dark': ComponentsIconTopNavigationDark(style),
            }, theme);
        },
        route: 'Top Navigation',
    },
    {
        title: 'Bottom Navigation',
        icon: (style, theme) => {
            return ThemeService.select({
                'Eva Light': ComponentsIconBottomNavigation(style),
                'Eva Dark': ComponentsIconBottomNavigationDark(style),
            }, theme);
        },
        route: 'Bottom Navigation',
    },
];
//# sourceMappingURL=routes.js.map