import { Award, Heart, Users, ChefHat } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-100">
            Discover the story behind Calgary's best Karahi restaurant
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission */}
        <section className="mb-16">
          <div className="card max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Fatima Karahi Corner, we are dedicated to delivering excellent food and hospitality 
              as the centerpieces of our establishment. We focus on classic dishes, the best ingredients, 
              and expert chef oversight—ensuring passion and standards in every dish we serve.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">
                Only the finest ingredients and authentic recipes
              </p>
            </div>
            <div className="card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Passion</h3>
              <p className="text-gray-600">
                Every dish is prepared with love and care
              </p>
            </div>
            <div className="card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-600">
                Serving Calgary and Edmonton with pride
              </p>
            </div>
            <div className="card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                <ChefHat className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expertise</h3>
              <p className="text-gray-600">
                25+ expert chefs with years of experience
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Fatima Karahi Corner began with a simple vision: to bring authentic Pakistani cuisine 
                  to Calgary and Edmonton. Our journey started with a passion for traditional cooking 
                  methods and a commitment to preserving the rich flavors of our heritage.
                </p>
                <p>
                  Today, we are proud to be recognized as the best Karahi restaurant in Calgary, 
                  serving thousands of satisfied customers with our signature dishes. Our secret? 
                  A perfect blend of traditional recipes, fresh ingredients, and the expertise of 
                  our talented chefs.
                </p>
                <p>
                  From our famous Fatima Special Karahi to our perfectly grilled BBQ items, every 
                  dish tells a story of dedication, quality, and authentic taste. We believe that 
                  food is more than just sustenance—it's an experience that brings people together.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🍛</div>
                <p className="text-2xl font-display font-bold text-primary-800">
                  Elegant & Famous
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Special */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-center mb-12">What Makes Us Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Authentic Recipes</h3>
              <p className="text-gray-600">
                Our recipes have been passed down through generations, ensuring authentic flavors 
                that transport you to the streets of Pakistan.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Fresh Ingredients</h3>
              <p className="text-gray-600">
                We source the freshest ingredients daily and prepare everything from scratch, 
                ensuring the highest quality in every bite.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Expert Chefs</h3>
              <p className="text-gray-600">
                Our team of 25+ expert chefs brings decades of combined experience, mastering 
                the art of traditional Pakistani cooking.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                Enjoy our delicious food at home with delivery within 1 hour, always fresh and hot.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Clean & Healthy</h3>
              <p className="text-gray-600">
                We maintain the highest standards of cleanliness and food safety, ensuring 
                healthy and hygienic meals.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Customer First</h3>
              <p className="text-gray-600">
                With 250+ happy clients and 150+ positive reviews, customer satisfaction is 
                our top priority.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="card bg-gradient-to-r from-primary-600 to-primary-700 text-white">
            <h2 className="text-3xl font-display font-bold mb-4">Experience the Difference</h2>
            <p className="text-xl mb-8">
              Visit us today and taste why we're Calgary's favorite Karahi restaurant
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/menu" className="btn-secondary">
                View Our Menu
              </a>
              <a href="/reservations" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                Make a Reservation
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

