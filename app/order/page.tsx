'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ShoppingBag, Clock, Truck, Phone } from 'lucide-react';

export default function OrderPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Order Online</h1>
          <p className="text-xl text-gray-100">
            Delicious Pakistani cuisine delivered to your door
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="card text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Within 1 hour to your location</p>
          </div>
          <div className="card text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
              <Truck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Free Delivery</h3>
            <p className="text-gray-600">On orders over $30</p>
          </div>
          <div className="card text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fresh & Hot</h3>
            <p className="text-gray-600">Prepared fresh for every order</p>
          </div>
        </div>

        {/* Main CTA */}
        <div className="card text-center max-w-3xl mx-auto">
          <div className="text-6xl mb-6">🍛</div>
          <h2 className="text-3xl font-display font-bold mb-4">Ready to Order?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Browse our delicious menu and add your favorite dishes to your cart. 
            We'll deliver fresh, hot food right to your door!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/menu" className="btn-primary text-lg px-8 py-4">
              Browse Menu & Order
            </Link>
            <Link href="/reservations" className="btn-outline text-lg px-8 py-4">
              Reserve a Table
            </Link>
          </div>

          <div className="border-t pt-6">
            <p className="text-gray-600 mb-3">Prefer to order by phone?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a href="tel:+14032800009" className="flex items-center justify-center text-primary-600 font-semibold hover:underline">
                <Phone className="w-4 h-4 mr-2" />
                Calgary: +1 403-280-0009
              </a>
              <a href="tel:+17807055000" className="flex items-center justify-center text-primary-600 font-semibold hover:underline">
                <Phone className="w-4 h-4 mr-2" />
                Edmonton: +1 780-705-5000
              </a>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-16">
          <h2 className="text-3xl font-display font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Browse Menu</h3>
              <p className="text-gray-600 text-sm">
                Explore our authentic Pakistani dishes
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Add to Cart</h3>
              <p className="text-gray-600 text-sm">
                Select your favorites and customize
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Checkout</h3>
              <p className="text-gray-600 text-sm">
                Enter delivery details and confirm
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-bold text-lg mb-2">Enjoy!</h3>
              <p className="text-gray-600 text-sm">
                Fresh food delivered within 1 hour
              </p>
            </div>
          </div>
        </div>

        {/* Popular Items Preview */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Our Signature Dishes</h2>
          <p className="text-xl mb-6">
            Try our famous Fatima Special Karahi, Chicken Tikka, and more!
          </p>
          <Link href="/menu" className="btn-secondary inline-block">
            View Full Menu
          </Link>
        </div>
      </div>
    </div>
  );
}

