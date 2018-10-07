import { WishListItem, WishList } from './WishList';

it('can create a instance of a model', () => {
  const item = WishListItem.create({
    name: 'Climibing Mount K2',
    price: 30000,
    image:
      'https://ichef.bbci.co.uk/news/660/cpsprodpb/128C9/production/_100177957_k2.jpg',
  });

  expect(item.price).toBe(30000);
  item.changeName('Visiting Machu Pichu');
  expect(item.name).toBe('Visiting Machu Pichu');
});

it('can create a wishlist', () => {
  const list = WishList.create({
    items: [
      {
        name: 'Climbing Mount K2',
        price: 30000,
      },
    ],
  });

  expect(list.items.length).toBe(1);
  expect(list.items[0].image).toBe('');
});

it('can add new items', () => {
  const list = WishList.create();
  list.add(
    WishListItem.create({
      name: 'Travelling to France',
      price: 20000,
    }),
  );

  expect(list.items.length).toBe(1);
  expect(list.items[0].name).toBe('Travelling to France');
  list.items[0].changeName('Meet Ronaldo');
  expect(list.items[0].name).toBe('Meet Ronaldo');
});
