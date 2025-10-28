'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuItem } from '@/lib/types';
import { supabase } from '@/lib/supabase/client';
import { formatPrice } from '@/lib/utils';
import { Flame, Leaf } from 'lucide-react';

export default function FeaturedDishes() {
  const [dishes, setDishes] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeaturedDishes() {
      try {
        const { data, error } = await supabase
          .from('menu_items')
          .select('*')
          .eq('is_featured', true)
          .eq('is_available', true)
          .limit(6);

        if (error) throw error;
        setDishes(data || []);
      } catch (error) {
        console.error('Error fetching featured dishes:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchFeaturedDishes();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="card animate-pulse">
            <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
            <div className="h-6 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {dishes.map((dish) => (
        <Link key={dish.id} href={`/menu#${dish.slug}`} className="card group cursor-pointer">
          <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 h-48 rounded-lg mb-4 overflow-hidden">
            {dish.image_url ? (
              <Image
                src={dish.image_url}
                alt={dish.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl">
                🍛
              </div>
            )}
            <div className="absolute top-2 right-2 flex gap-2">
              {dish.is_spicy && (
                <span className="bg-red-500 text-white p-1.5 rounded-full">
                  <Flame className="w-4 h-4" />
                </span>
              )}
              {dish.is_vegetarian && (
                <span className="bg-green-500 text-white p-1.5 rounded-full">
                  <Leaf className="w-4 h-4" />
                </span>
              )}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
            {dish.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {dish.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-primary-600">
              {formatPrice(dish.price)}
            </span>
            <span className="text-primary-600 font-semibold group-hover:underline">
              View Details →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

