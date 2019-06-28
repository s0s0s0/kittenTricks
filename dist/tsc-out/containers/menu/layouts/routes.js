import { MenuIconAuth, MenuIconArticles, MenuIconDashboards, MenuIconEcommerce, MenuIconMessaging, MenuIconSocial, MenuIconAuthDark, MenuIconSocialDark, MenuIconArticlesDark, MenuIconMessagingDark, MenuIconDashboardsDark, MenuIconEcommerceDark, } from '../../../assets/icons';
import { ThemeService, } from '../../../core/themes';
export const routes = [
    {
        title: 'Auth',
        icon: (style, theme) => {
            return ThemeService.select({
                'Eva Light': MenuIconAuth(style),
                'Eva Dark': MenuIconAuthDark(style),
            }, theme);
        },
        route: 'Auth',
    },
    {
        title: 'Social',
        icon: (style, theme) => {
            return ThemeService.select({
                'Eva Light': MenuIconSocial(style),
                'Eva Dark': MenuIconSocialDark(style),
            }, theme);
        },
        route: 'Social',
    },
    {
        title: 'Articles',
        icon: (style, theme) => {
            return ThemeService.select({
                'Eva Light': MenuIconArticles(style),
                'Eva Dark': MenuIconArticlesDark(style),
            }, theme);
        },
        route: 'Articles',
    },
    {
        title: 'Messaging',
        icon: (style, theme) => {
            return ThemeService.select({
                'Eva Light': MenuIconMessaging(style),
                'Eva Dark': MenuIconMessagingDark(style),
            }, theme);
        },
        route: 'Messaging',
    },
    {
        title: 'Dashboards',
        icon: (style, theme) => {
            return ThemeService.select({
                'Eva Light': MenuIconDashboards(style),
                'Eva Dark': MenuIconDashboardsDark(style),
            }, theme);
        },
        route: 'Dashboards',
    },
    {
        title: 'Ecommerce',
        icon: (style, theme) => {
            return ThemeService.select({
                'Eva Light': MenuIconEcommerce(style),
                'Eva Dark': MenuIconEcommerceDark(style),
            }, theme);
        },
        route: 'Ecommerce',
    },
];
//# sourceMappingURL=routes.js.map