'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MenuItem } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { Flame, Leaf, Plus, Check } from 'lucide-react';
import { useCartStore } from '@/lib/store/cart-store';
import toast from 'react-hot-toast';

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const [isAdded, setIsAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(item, 1);
    setIsAdded(true);
    toast.success(`${item.name} added to cart!`);
    
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="card group" id={item.slug}>
      <div className="relative bg-gradient-to-br from-cream-200 to-cream-300 h-48 rounded-lg mb-4 overflow-hidden">
        {item.image_url ? (
          <Image
            src={item.image_url}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            🍛
          </div>
        )}
        <div className="absolute top-2 right-2 flex gap-2">
          {item.is_spicy && (
            <span className="bg-primary-500 text-white p-1.5 rounded-full shadow-lg spicy-glow" title="Spicy">
              <Flame className="w-4 h-4" />
            </span>
          )}
          {item.is_vegetarian && (
            <span className="bg-accent-500 text-white p-1.5 rounded-full shadow-lg" title="Vegetarian">
              <Leaf className="w-4 h-4" />
            </span>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
      
      {item.description && (
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
      )}

      {item.ingredients && item.ingredients.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-gray-500 font-semibold mb-1">Ingredients:</p>
          <p className="text-xs text-gray-600">{item.ingredients.join(', ')}</p>
        </div>
      )}

      <div className="flex justify-between items-center mt-auto pt-4 border-t">
        <span className="text-2xl font-bold price-tag">
          {formatPrice(item.price)}
        </span>
        <button
          onClick={handleAddToCart}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all ${
            isAdded
              ? 'bg-accent-500 text-white'
              : 'bg-primary-500 hover:bg-primary-600 text-white'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-5 h-5" />
              <span>Added</span>
            </>
          ) : (
            <>
              <Plus className="w-5 h-5" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

