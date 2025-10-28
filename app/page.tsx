import Link from 'next/link';
import { Star, Clock, Users, Award, ChefHat, Truck } from 'lucide-react';
import FeaturedDishes from '@/components/home/FeaturedDishes';
import ReviewsSection from '@/components/home/ReviewsSection';
import StatsSection from '@/components/home/StatsSection';
import DecorativeBorder, { FloralDivider, GeometricPattern } from '@/components/DecorativeBorder';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-karahi text-white overflow-hidden">
        <GeometricPattern />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-balance">
              Best Karahi Restaurant in Calgary
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-100">
              Elegant & Famous
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Delivering excellent food and hospitality. Experience authentic Pakistani cuisine with our signature Karahi dishes, BBQ, and traditional specialties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/order" className="btn-secondary text-lg">
                Order Online Now
              </Link>
              <Link href="/menu" className="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-600 text-lg">
                View Menu
              </Link>
            </div>
          </div>
        </div>
        <DecorativeBorder />
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Within 1 hour delivery. Always fresh & hot, wide coverage area.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <ChefHat className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Chefs</h3>
              <p className="text-gray-600">
                25+ expert chefs delivering delicious, authentic Pakistani cuisine.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                Best ingredients, professionally cooked, clean and healthy food.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Dishes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Signature Dishes</h2>
            <FloralDivider />
            <p className="section-subtitle">
              Taste the authentic flavors of Pakistan
            </p>
          </div>
          <FeaturedDishes />
          <div className="text-center mt-12">
            <Link href="/menu" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* CTA Section */}
      <section className="py-16 gradient-karahi text-white relative overflow-hidden">
        <GeometricPattern className="opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Experience the Best Karahi?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Order online for fast delivery or make a reservation at one of our locations in Calgary or Edmonton.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order" className="bg-white text-primary-500 hover:bg-cream-200 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              Order Now
            </Link>
            <Link href="/reservations" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500">
              Make a Reservation
            </Link>
          </div>
        </div>
        <DecorativeBorder />
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Visit Us</h2>
            <p className="section-subtitle">
              Two convenient locations to serve you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">Calgary</h3>
              <div className="space-y-3 text-gray-700">
                <p className="font-semibold">55 Castleridge Blvd NE #76</p>
                <p>Calgary, AB T3J 3J8</p>
                <p className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Thu: 4:00 PM - 11:00 PM</span>
                </p>
                <p className="ml-6">Fri-Sun: 3:00 PM - 11:00 PM</p>
                <a href="tel:+14032800009" className="text-primary-600 font-semibold hover:underline">
                  +1 403-280-0009
                </a>
              </div>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">Edmonton</h3>
              <div className="space-y-3 text-gray-700">
                <p className="font-semibold">10680 Ellerslie Rd SW</p>
                <p>Edmonton, AB T6W 0C3</p>
                <p className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Mon: Closed</span>
                </p>
                <p className="ml-6">Tue-Sun: 5:00 PM - 10:00 PM</p>
                <a href="tel:+17807055000" className="text-primary-600 font-semibold hover:underline">
                  +1 780-705-5000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

