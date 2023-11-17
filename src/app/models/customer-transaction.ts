export interface CustomerTransaction{
  customerId?: number,
  items: Array<{
    itemId: number,
    description: string,
    amount: number,
    quantity: number,
  }>
}
