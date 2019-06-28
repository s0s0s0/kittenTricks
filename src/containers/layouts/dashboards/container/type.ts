import { LayoutMenuItemData } from '../../../../components/common';

export type DashboardsData = LayoutMenuItemData;

export interface DashboardsContainerData extends DashboardsData {
  route: string;
}
