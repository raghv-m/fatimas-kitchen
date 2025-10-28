-- Insert Locations
INSERT INTO locations (name, address, city, province, postal_code, phone, email, hours) VALUES
('Calgary Location', '55 Castleridge Blvd NE #76', 'Calgary', 'AB', 'T3J 3J8', '+1 403-280-0009', 'fatimakarahi@gmail.com', 
  '{"Monday": "4:00 PM - 11:00 PM", "Tuesday": "4:00 PM - 11:00 PM", "Wednesday": "4:00 PM - 11:00 PM", "Thursday": "4:00 PM - 11:00 PM", "Friday": "3:00 PM - 11:00 PM", "Saturday": "3:00 PM - 11:00 PM", "Sunday": "3:00 PM - 11:00 PM"}'::jsonb),
('Edmonton Location', '10680 Ellerslie Rd SW', 'Edmonton', 'AB', 'T6W 0C3', '+1 780-705-5000', 'fatimakarahi@gmail.com',
  '{"Monday": "Closed", "Tuesday": "5:00 PM - 10:00 PM", "Wednesday": "5:00 PM - 10:00 PM", "Thursday": "5:00 PM - 10:00 PM", "Friday": "5:00 PM - 10:00 PM", "Saturday": "5:00 PM - 10:00 PM", "Sunday": "5:00 PM - 10:00 PM"}'::jsonb);

-- Insert Menu Categories
INSERT INTO menu_categories (name, slug, description, display_order) VALUES
('Karahi Specialties', 'karahi', 'Our signature karahi dishes cooked to perfection', 1),
('BBQ & Grills', 'bbq', 'Tandoori and grilled specialties', 2),
('Curries', 'curries', 'Traditional curry dishes with rich flavors', 3),
('Rice Dishes', 'rice', 'Biryani and rice specialties', 4),
('Vegetarian', 'vegetarian', 'Delicious vegetarian options', 5),
('Breads', 'breads', 'Fresh baked naan and roti', 6),
('Desserts', 'desserts', 'Sweet treats to complete your meal', 7),
('Beverages', 'beverages', 'Refreshing drinks', 8);

-- Insert Sample Menu Items (Karahi)
INSERT INTO menu_items (category_id, name, slug, description, price, is_featured, is_spicy, ingredients, display_order) 
SELECT id, 'Fatima Special Karahi', 'fatima-special-karahi', 
  'Our signature dish! Tender chicken or mutton cooked in a traditional karahi with special blend of spices', 
  24.99, true, true, 
  ARRAY['Chicken/Mutton', 'Tomatoes', 'Ginger', 'Garlic', 'Green Chilies', 'Special Spices'],
  1
FROM menu_categories WHERE slug = 'karahi';

INSERT INTO menu_items (category_id, name, slug, description, price, is_spicy, ingredients, display_order)
SELECT id, 'Chicken Karahi', 'chicken-karahi',
  'Classic chicken karahi with fresh tomatoes and aromatic spices',
  19.99, true,
  ARRAY['Chicken', 'Tomatoes', 'Ginger', 'Garlic', 'Green Chilies', 'Spices'],
  2
FROM menu_categories WHERE slug = 'karahi';

INSERT INTO menu_items (category_id, name, slug, description, price, is_spicy, ingredients, display_order)
SELECT id, 'Mutton Karahi', 'mutton-karahi',
  'Tender mutton pieces in traditional karahi style',
  26.99, true,
  ARRAY['Mutton', 'Tomatoes', 'Ginger', 'Garlic', 'Green Chilies', 'Spices'],
  3
FROM menu_categories WHERE slug = 'karahi';

-- Insert Sample Menu Items (BBQ)
INSERT INTO menu_items (category_id, name, slug, description, price, is_featured, ingredients, display_order)
SELECT id, 'Chicken Tikka', 'chicken-tikka',
  'Marinated chicken pieces grilled to perfection in tandoor',
  16.99, true,
  ARRAY['Chicken', 'Yogurt', 'Spices', 'Lemon'],
  1
FROM menu_categories WHERE slug = 'bbq';

INSERT INTO menu_items (category_id, name, slug, description, price, ingredients, display_order)
SELECT id, 'Seekh Kabab', 'seekh-kabab',
  'Minced meat kababs with herbs and spices',
  18.99,
  ARRAY['Ground Meat', 'Onions', 'Herbs', 'Spices'],
  2
FROM menu_categories WHERE slug = 'bbq';

INSERT INTO menu_items (category_id, name, slug, description, price, ingredients, display_order)
SELECT id, 'Tandoori Chicken', 'tandoori-chicken',
  'Half chicken marinated in yogurt and spices, tandoor grilled',
  15.99,
  ARRAY['Chicken', 'Yogurt', 'Tandoori Spices'],
  3
FROM menu_categories WHERE slug = 'bbq';

-- Insert Sample Menu Items (Curries)
INSERT INTO menu_items (category_id, name, slug, description, price, is_spicy, ingredients, display_order)
SELECT id, 'Butter Chicken', 'butter-chicken',
  'Creamy tomato-based curry with tender chicken pieces',
  17.99, false,
  ARRAY['Chicken', 'Tomatoes', 'Cream', 'Butter', 'Spices'],
  1
FROM menu_categories WHERE slug = 'curries';

INSERT INTO menu_items (category_id, name, slug, description, price, is_spicy, ingredients, display_order)
SELECT id, 'Nihari', 'nihari',
  'Slow-cooked beef stew with aromatic spices',
  19.99, true,
  ARRAY['Beef', 'Wheat Flour', 'Spices', 'Ginger'],
  2
FROM menu_categories WHERE slug = 'curries';

-- Insert Sample Menu Items (Rice)
INSERT INTO menu_items (category_id, name, slug, description, price, is_featured, ingredients, display_order)
SELECT id, 'Chicken Biryani', 'chicken-biryani',
  'Fragrant basmati rice layered with spiced chicken',
  16.99, true,
  ARRAY['Basmati Rice', 'Chicken', 'Yogurt', 'Saffron', 'Spices'],
  1
FROM menu_categories WHERE slug = 'rice';

INSERT INTO menu_items (category_id, name, slug, description, price, ingredients, display_order)
SELECT id, 'Mutton Biryani', 'mutton-biryani',
  'Aromatic rice with tender mutton pieces',
  21.99,
  ARRAY['Basmati Rice', 'Mutton', 'Yogurt', 'Saffron', 'Spices'],
  2
FROM menu_categories WHERE slug = 'rice';

-- Insert Sample Menu Items (Vegetarian)
INSERT INTO menu_items (category_id, name, slug, description, price, is_vegetarian, ingredients, display_order)
SELECT id, 'Daal Makhani', 'daal-makhani',
  'Creamy black lentils slow-cooked with butter and cream',
  12.99, true,
  ARRAY['Black Lentils', 'Butter', 'Cream', 'Spices'],
  1
FROM menu_categories WHERE slug = 'vegetarian';

INSERT INTO menu_items (category_id, name, slug, description, price, is_vegetarian, ingredients, display_order)
SELECT id, 'Palak Paneer', 'palak-paneer',
  'Cottage cheese cubes in creamy spinach gravy',
  13.99, true,
  ARRAY['Paneer', 'Spinach', 'Cream', 'Spices'],
  2
FROM menu_categories WHERE slug = 'vegetarian';

-- Insert Sample Menu Items (Breads)
INSERT INTO menu_items (category_id, name, slug, description, price, is_vegetarian, ingredients, display_order)
SELECT id, 'Butter Naan', 'butter-naan',
  'Soft tandoor-baked bread brushed with butter',
  2.99, true,
  ARRAY['Flour', 'Yogurt', 'Butter'],
  1
FROM menu_categories WHERE slug = 'breads';

INSERT INTO menu_items (category_id, name, slug, description, price, is_vegetarian, ingredients, display_order)
SELECT id, 'Garlic Naan', 'garlic-naan',
  'Naan topped with fresh garlic and cilantro',
  3.49, true,
  ARRAY['Flour', 'Garlic', 'Cilantro', 'Butter'],
  2
FROM menu_categories WHERE slug = 'breads';

-- Insert Sample Menu Items (Desserts)
INSERT INTO menu_items (category_id, name, slug, description, price, is_vegetarian, ingredients, display_order)
SELECT id, 'Gulab Jamun', 'gulab-jamun',
  'Sweet milk dumplings in rose-flavored syrup (2 pieces)',
  4.99, true,
  ARRAY['Milk Solids', 'Sugar', 'Rose Water', 'Cardamom'],
  1
FROM menu_categories WHERE slug = 'desserts';

INSERT INTO menu_items (category_id, name, slug, description, price, is_vegetarian, ingredients, display_order)
SELECT id, 'Kheer', 'kheer',
  'Traditional rice pudding with cardamom and nuts',
  5.99, true,
  ARRAY['Rice', 'Milk', 'Sugar', 'Cardamom', 'Nuts'],
  2
FROM menu_categories WHERE slug = 'desserts';

-- Insert Sample Menu Items (Beverages)
INSERT INTO menu_items (category_id, name, slug, description, price, is_vegetarian, ingredients, display_order)
SELECT id, 'Mango Lassi', 'mango-lassi',
  'Refreshing yogurt drink with mango',
  4.99, true,
  ARRAY['Yogurt', 'Mango', 'Sugar'],
  1
FROM menu_categories WHERE slug = 'beverages';

INSERT INTO menu_items (category_id, name, slug, description, price, is_vegetarian, ingredients, display_order)
SELECT id, 'Chai', 'chai',
  'Traditional spiced tea',
  2.99, true,
  ARRAY['Tea', 'Milk', 'Spices', 'Sugar'],
  2
FROM menu_categories WHERE slug = 'beverages';

-- Insert Sample Reviews
INSERT INTO reviews (customer_name, customer_email, rating, title, comment, is_approved, is_featured, location_id)
SELECT 'Sarah Johnson', 'sarah.j@email.com', 5, 'Best Karahi in Calgary!', 
  'The Fatima Special Karahi is absolutely amazing! The flavors are authentic and the service is excellent. Highly recommend!',
  true, true, id
FROM locations WHERE city = 'Calgary' LIMIT 1;

INSERT INTO reviews (customer_name, customer_email, rating, title, comment, is_approved, is_featured, location_id)
SELECT 'Ahmed Khan', 'ahmed.k@email.com', 5, 'Authentic Pakistani Cuisine',
  'Finally found a place that serves authentic Pakistani food. The biryani and seekh kabab are outstanding!',
  true, true, id
FROM locations WHERE city = 'Calgary' LIMIT 1;

INSERT INTO reviews (customer_name, customer_email, rating, title, comment, is_approved, location_id)
SELECT 'Emily Chen', 'emily.c@email.com', 5, 'Great Food, Fast Delivery',
  'Ordered online and the food arrived hot and fresh within 45 minutes. Everything was delicious!',
  true, id
FROM locations WHERE city = 'Calgary' LIMIT 1;

