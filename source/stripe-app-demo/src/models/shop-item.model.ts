export class ShopItemModel {
    name: string;
    description: string;
    price: number;
    quantity: number;

    public constructor(init?: Partial<ShopItemModel>) {
        Object.assign(this, init);
    }
}