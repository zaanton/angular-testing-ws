export interface ShoppingListItem {
  id: string;
  description: string;
  purchased: boolean;
}

export interface ShoppingOverviewSummaryModel {
  totalItems: number;
  purchasedItems: number;
  unpurchasedItems: number;
}
