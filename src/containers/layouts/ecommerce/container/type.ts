import { LayoutMenuItemData } from '../../../../components/common';

export type EcommerceData = LayoutMenuItemData;

export interface EcommerceContainerData extends EcommerceData {
  route: string;
}
