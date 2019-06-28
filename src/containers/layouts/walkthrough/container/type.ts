import { LayoutMenuItemData } from '../../../../components/common';

export type WalkthroughData = LayoutMenuItemData;

export interface WalkthroughContainerData extends WalkthroughData {
  route: string;
}
