export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: 'individual' | 'combo';
  ingredients?: string[];
  benefits?: string[];
}

export const individualProducts: Product[] = [
  {
    id: 'block-the-sweat-blocker',
    name: 'Block The Sweat Blocker',
    price: 50,
    description: 'Advanced antiperspirant formula that blocks sweat at the source for all-day protection.',
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'individual',
    ingredients: ['Aluminum Chloride 20%', 'Glycerin', 'Natural Extracts'],
    benefits: ['24-hour protection', 'Clinical strength', 'Gentle on skin']
  },
  {
    id: 'superdry',
    name: 'SuperDry',
    price: 68,
    description: 'Maximum strength formula for severe hyperhidrosis. Provides extended protection.',
    image: 'https://images.pexels.com/photos/4465832/pexels-photo-4465832.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'individual',
    ingredients: ['Aluminum Chloride 25%', 'Aloe Vera', 'Vitamin E'],
    benefits: ['Extended protection', 'Maximum strength', 'Dermatologist tested']
  },
  {
    id: 'detox-sweat',
    name: 'Detox Sweat',
    price: 45,
    description: 'Natural detoxifying formula that helps regulate sweat production naturally.',
    image: 'https://images.pexels.com/photos/4465833/pexels-photo-4465833.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'individual',
    ingredients: ['Activated Charcoal', 'Tea Tree Oil', 'Coconut Oil'],
    benefits: ['Natural ingredients', 'Detoxifying', 'Antibacterial']
  },
  {
    id: 'baja-minerals',
    name: 'Baja Minerals',
    price: 30,
    description: 'Mineral-rich formula that naturally absorbs moisture and odor.',
    image: 'https://images.pexels.com/photos/4465834/pexels-photo-4465834.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'individual',
    ingredients: ['Dead Sea Minerals', 'Zinc Oxide', 'Magnesium'],
    benefits: ['Natural minerals', 'Odor control', 'Gentle formula']
  },
  {
    id: 'dailydry',
    name: 'DailyDry',
    price: 30,
    description: 'Everyday protection for light to moderate sweating. Perfect for daily use.',
    image: 'https://images.pexels.com/photos/4465835/pexels-photo-4465835.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'individual',
    ingredients: ['Aluminum Chloride 15%', 'Shea Butter', 'Chamomile'],
    benefits: ['Daily protection', 'Moisturizing', 'Soothing']
  }
];

export const comboPackages: Product[] = [
  {
    id: 'the-blocker',
    name: 'The Blocker',
    price: 135,
    originalPrice: 163,
    description: 'Complete sweat protection system: Block The Sweat Blocker + SuperDry + Detox Sweat',
    image: 'https://images.pexels.com/photos/4465836/pexels-photo-4465836.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'combo',
    benefits: ['Save $28', 'Complete protection', 'All-day confidence']
  },
  {
    id: 'keep-it-dry',
    name: 'The Keep It Dry',
    price: 95,
    originalPrice: 118,
    description: 'Essential duo: Block The Sweat Blocker + SuperDry for maximum protection',
    image: 'https://images.pexels.com/photos/4465837/pexels-photo-4465837.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'combo',
    benefits: ['Save $23', 'Maximum strength', 'Long-lasting']
  },
  {
    id: 'dry-and-healthy',
    name: 'Dry And Healthy',
    price: 160,
    originalPrice: 193,
    description: 'Complete wellness system: Block The Sweat Blocker + SuperDry + Detox Sweat + Baja Minerals',
    image: 'https://images.pexels.com/photos/4465838/pexels-photo-4465838.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'combo',
    benefits: ['Save $33', 'Complete wellness', 'Natural + clinical strength']
  }
];

export const allProducts = [...individualProducts, ...comboPackages];

export function getProductById(id: string): Product | undefined {
  return allProducts.find(product => product.id === id);
}

export function getProductsByCategory(category: 'individual' | 'combo'): Product[] {
  return allProducts.filter(product => product.category === category);
}