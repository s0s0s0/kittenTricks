import { ThemeType } from '@kitten/theme';
import { ThemeEnum } from '@src/core/model';

export interface Theme {
  name: ThemeEnum;
  theme: ThemeType;
}
