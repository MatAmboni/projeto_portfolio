export const orderStatuses = [
  'DRAFT',
  'CONFIRMED',
  'SEPARATING',
  'SHIPPED',
  'DELIVERED',
  'CANCELLED',
] as const;

export type OrderStatus = (typeof orderStatuses)[number];

export type ProductSummary = {
  id: string;
  name: string;
  sku: string;
  unitPriceInCents: number;
  stockQuantity: number;
};
