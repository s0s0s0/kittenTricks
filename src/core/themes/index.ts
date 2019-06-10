import {
  dark,
  light,
} from '@eva-design/eva';
import { default as appTheme } from './appTheme.json';
import { ThemeType } from '@kitten/theme';

interface ThemeRegistry {
  ['Eva Light']: ThemeType;
  ['Eva Dark']: ThemeType;
  ['App Theme']: ThemeType;
}

export const themes: ThemeRegistry = {
  'Eva Light': light,
  'Eva Dark': dark,
  'App Theme': appTheme,
};

export { ThemeService } from './theme.service';
