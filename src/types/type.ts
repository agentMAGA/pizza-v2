export type TypeItem = {
  count: number;
};

export type TypeSort = {
  name: string;
  sort: string;
};

export type TypePizzaBlock = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
  sizes: number[];
};

export type TypeCartItem = {
  id: string;
  type: string;
  size: number;
};

export type CartItemType = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
};
