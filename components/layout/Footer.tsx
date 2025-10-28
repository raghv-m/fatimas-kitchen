import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-xl font-display font-bold mb-4">
              Fatima Karahi Corner
            </h3>
            <p className="text-sm mb-4">
              Best Karahi Restaurant in Calgary. Elegant & Famous. Delivering excellent food and hospitality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/menu" className="hover:text-secondary-500 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/order" className="hover:text-secondary-500 transition-colors">
                  Order Online
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="hover:text-secondary-500 transition-colors">
                  Make a Reservation
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-secondary-500 transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Calgary Location */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Calgary Location</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>55 Castleridge Blvd NE #76, Calgary, AB T3J 3J8</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+14032800009" className="hover:text-secondary-500">
                  +1 403-280-0009
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <div>Mon-Thu: 4:00 PM - 11:00 PM</div>
                  <div>Fri-Sun: 3:00 PM - 11:00 PM</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Edmonton Location */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Edmonton Location</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>10680 Ellerslie Rd SW, Edmonton, AB T6W 0C3</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+17807055000" className="hover:text-secondary-500">
                  +1 780-705-5000
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <div>Mon: Closed</div>
                  <div>Tue-Sun: 5:00 PM - 10:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Mail className="w-4 h-4" />
              <a href="mailto:fatimakarahi@gmail.com" className="hover:text-secondary-500">
                fatimakarahi@gmail.com
              </a>
            </div>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Fatima Karahi Corner. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

