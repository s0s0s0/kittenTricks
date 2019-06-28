import { LayoutMenuItemData } from '../../../../components/common';

export type ArticlesData = LayoutMenuItemData;

export interface ArticlesContainerData extends ArticlesData {
  route: string;
}
