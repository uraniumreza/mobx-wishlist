import { types } from 'mobx-state-tree';

const data = {
  name: 'Climibing Mount K2',
  price: '30000',
  image:
    'https://ichef.bbci.co.uk/news/660/cpsprodpb/128C9/production/_100177957_k2.jpg',
};

export const WishListItem = types
  .model({
    name: types.string,
    price: types.number,
    image: '',
  })
  .actions((self) => ({
    changeName(newName) {
      self.name = newName;
    },
    changePrice(newPrice) {
      self.price = newPrice;
    },
    changeImage(newImage) {
      self.image = newImage;
    },
  }));

export const WishList = types
  .model({
    items: types.optional(types.array(WishListItem), []),
  })
  .actions((self) => ({
    add(item) {
      self.items.push(item);
    },
  }));
