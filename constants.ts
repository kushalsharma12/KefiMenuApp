import type { MenuCategory, AboutContent, FeaturedDish } from './types';

export const MENU_DATA: MenuCategory[] = [
  {
    category: 'Thai',
    items: [
      { name: 'Thai Red Curry', price: '₹289', description: 'A rich and spicy coconut milk-based curry with authentic Thai herbs and vegetables.' },
      { name: 'Thai Green Curry', price: '₹289', description: 'A classic green curry with a fragrant blend of lemongrass, galangal, and kaffir lime.' },
      { name: 'Thai Yellow Curry', price: '₹289', description: 'A milder, aromatic yellow curry with turmeric, spices, and creamy coconut milk.' },
    ],
  },
  {
    category: 'Chinese',
    items: [
      { name: 'Chilly Paneer Rice Bowl', price: '₹329', description: 'Crispy paneer cubes tossed in a tangy chili sauce, served over fluffy fried rice.' },
      { name: 'Szechwan Noodles', price: '₹250', description: 'Spicy stir-fried noodles with vegetables in a bold and flavorful Szechwan sauce.' },
      { name: 'Soft Noodles [Veg]', price: '₹250', description: 'Classic Hakka style soft noodles tossed with fresh, crisp vegetables.' },
      { name: 'Chilly Garlic Fried Rice', price: '₹250', description: 'Aromatic fried rice with a punch of chili and garlic for a flavorful kick.' },
      { name: 'Szechwan Fried Rice', price: '₹250', description: 'Fiery and flavorful fried rice cooked in a spicy Szechwan sauce with mixed veggies.' },
      { name: 'American Chop Suey', price: '₹249', description: 'Crispy fried noodles topped with a sweet and tangy vegetable sauce.' },
    ],
  },
  {
    category: 'Pizza',
    items: [
      { name: 'Mexican Pizza', price: '₹299', description: 'A zesty pizza topped with spicy beans, jalapeños, corn, and mozzarella cheese.' },
      { name: 'Margherita Pizza', price: '₹279', description: 'A timeless classic with fresh tomato sauce, mozzarella cheese, and basil.' },
      { name: 'Peri Peri Panner Pizza', price: '₹319', description: 'Spicy peri-peri marinated paneer, onions, and peppers on a cheesy crust.' },
      { name: 'Exotic Pizza', price: '₹299', description: 'A delightful mix of exotic vegetables like bell peppers, olives, and zucchini.' },
    ],
  },
  {
    category: 'Pasta',
    items: [
      { name: 'Alfredo', price: '₹349', description: 'Creamy and rich white sauce pasta made with parmesan cheese and fresh cream.' },
      { name: 'Arrabbiata', price: '₹349', description: 'A spicy and tangy red sauce pasta with garlic, tomatoes, and red chili peppers.' },
      { name: 'Pink Sauce (Veg)', price: '₹349', description: 'A perfect blend of creamy Alfredo and tangy Arrabbiata sauces.' },
      { name: 'Pesto (Veg)', price: '₹349', description: 'Fresh basil pesto sauce tossed with pasta, nuts, and parmesan cheese.' },
      { name: 'Mushroom Aglio-e-Olio', price: '₹349', description: 'A simple yet elegant pasta with sautéed mushrooms, garlic, olive oil, and chili flakes.' },
    ],
  },
  {
    category: 'Burgers',
    items: [
      { name: 'Aloo Tikka Burger', price: '₹199', description: 'A crispy potato patty with Indian spices, served in a soft burger bun.' },
      { name: 'Grill Chicken Burger', price: '₹249', description: 'A juicy grilled chicken patty with fresh lettuce, tomatoes, and our special sauce.' },
      { name: 'Paneer Burger', price: '₹249', description: 'A flavorful grilled paneer patty with a crispy coating and tangy sauces.' },
    ],
  },
  {
    category: 'Sandwiches',
    items: [
      { name: 'Club Sandwich [Veg]', price: '₹249', description: 'A double-decker sandwich with layers of fresh vegetables, cheese, and coleslaw.' },
      { name: 'Club Sandwich [Chicken]', price: '₹299', description: 'A classic club sandwich with layers of grilled chicken, lettuce, tomato, and mayo.' },
      { name: 'Veg Grill Sandwich', price: '₹249', description: 'A simple and delicious grilled sandwich with a mix of fresh vegetables.' },
      { name: 'Paneer Cheese Sandwich', price: '₹279', description: 'A hearty sandwich filled with spiced paneer and melting cheese, grilled to perfection.' },
    ],
  },
  {
    category: 'Appetizers',
    items: [
      { name: 'French Fries', price: '₹180', description: 'Classic golden-brown, crispy French fries, lightly salted.' },
      { name: 'Masala French Fries', price: '₹180', description: 'Crispy fries tossed in a zesty and spicy masala mix.' },
      { name: 'Potato Wedges', price: '₹180', description: 'Thick-cut potato wedges, crispy on the outside and fluffy on the inside.' },
      { name: 'Garlic Bread', price: '₹180', description: 'Toasted bread with a generous spread of garlic butter and herbs.' },
      { name: 'Cheese Garlic Bread', price: '₹199', description: 'Classic garlic bread topped with a layer of melting mozzarella cheese.' },
      { name: 'Nachos', price: '₹219', description: 'Crispy tortilla chips served with a side of salsa and cheese dip.' },
      { name: 'Mac & Cheese Bites', price: '₹220', description: 'Creamy macaroni and cheese, breaded and fried to golden perfection.' },
      { name: 'Cheese Onion Rings', price: '₹249', description: 'Crispy fried onion rings with a cheesy, gooey center.' },
      { name: 'Zucchini Fries', price: '₹240', description: 'A healthier alternative, crispy baked zucchini fries with a zesty dip.' },
      { name: 'Crispy Cajun Paneer', price: '₹200', description: 'Cubes of paneer coated in a spicy Cajun seasoning and fried until crisp.' },
      { name: 'Broccoli Cheese Nuggets', price: '₹279', description: 'A tasty combination of broccoli and cheese in a crispy nugget.' },
      { name: 'Crispy Cajun Chicken', price: '₹279', description: 'Tender chicken pieces with a crispy Cajun-spiced coating.' },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Sizzling Brownie', price: '₹249', description: 'A decadent chocolate brownie served on a hot sizzler plate with ice cream.' },
      { name: 'Brownie Bark', price: '₹160', description: 'Thin and crispy brownie brittle, perfect for a light, chocolatey snack.' },
      { name: 'Ice Cream Add-on', price: '₹29', description: 'A scoop of vanilla ice cream to complement your dessert.' },
    ],
  },
  {
    category: 'Pancakes',
    items: [
      { name: 'Honey & Butter', price: '₹179', description: 'Fluffy pancakes served with a classic topping of honey and melted butter.' },
      { name: 'Nutella with Banana', price: '₹249', description: 'Warm pancakes generously topped with Nutella and fresh banana slices.' },
      { name: 'Chocolate Overload', price: '₹199', description: 'A chocolate lover\'s dream, pancakes drenched in rich chocolate sauce.' },
    ],
  },
];

export const ABOUT_CONTENT: AboutContent = {
  location: 'Plot no 17, Rd Number 8, Alkapuri Colony, RK Puram, Snehapuri Colony, Kothapet, Hyderabad, Telangana 500102',
  hours: ['11 am – 11 pm (every day of the week)'],
  phone: '09704515596',
  orderUrl: 'https://www.swiggy.com/direct/brand/248625?source=swiggy-direct&subSource=generic',
  imageUrl: 'https://ik.imagekit.io/menuapp/Menu%20App/ambiance3.webp',
  story: 'At Kefi, we believe dining is an experience. We are dedicated to crafting delicious dishes with the freshest ingredients in a warm and inviting atmosphere. Join us for a memorable meal that delights the senses.'
};

export const FEATURED_DISHES: FeaturedDish[] = [
  {
    name: 'Crispy Cajun Paneer',
    imageUrl: 'https://ik.imagekit.io/menuapp/Menu%20App/Crispy.webp',
  },
  {
    name: 'Peri Peri Panner Pizza',
    imageUrl: 'https://ik.imagekit.io/menuapp/Menu%20App/Peri.webp',
  },
  {
    name: 'Potato Wedges',
    imageUrl: 'https://ik.imagekit.io/menuapp/Menu%20App/Potato.webp',
  },
];