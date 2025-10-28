import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-100">
            Get in touch with us - we&apos;d love to hear from you!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="card text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-600 mb-3">Speak with our team</p>
            <div className="space-y-2">
              <a href="tel:+14032800009" className="block text-primary-600 font-semibold hover:underline">
                Calgary: +1 403-280-0009
              </a>
              <a href="tel:+17807055000" className="block text-primary-600 font-semibold hover:underline">
                Edmonton: +1 780-705-5000
              </a>
            </div>
          </div>

          <div className="card text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-3">Send us a message</p>
            <a href="mailto:fatimakarahi@gmail.com" className="text-primary-600 font-semibold hover:underline">
              fatimakarahi@gmail.com
            </a>
          </div>

          <div className="card text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-3">Two convenient locations</p>
            <p className="text-primary-600 font-semibold">Calgary & Edmonton</p>
          </div>
        </div>

        {/* Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Calgary Location */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6 text-primary-600">Calgary Location</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-600">55 Castleridge Blvd NE #76</p>
                  <p className="text-gray-600">Calgary, AB T3J 3J8, Canada</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+14032800009" className="text-primary-600 hover:underline">
                    +1 403-280-0009
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-2">Hours</p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Monday - Thursday:</span>
                      <span className="font-medium">4:00 PM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday - Sunday:</span>
                      <span className="font-medium">3:00 PM - 11:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=55+Castleridge+Blvd+NE+76+Calgary+AB+T3J+3J8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block mt-6"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Edmonton Location */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6 text-primary-600">Edmonton Location</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-600">10680 Ellerslie Rd SW</p>
                  <p className="text-gray-600">Edmonton, AB T6W 0C3, Canada</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+17807055000" className="text-primary-600 hover:underline">
                    +1 780-705-5000
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-2">Hours</p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Monday:</span>
                      <span className="font-medium text-red-600">Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tuesday - Sunday:</span>
                      <span className="font-medium">5:00 PM - 10:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=10680+Ellerslie+Rd+SW+Edmonton+AB+T6W+0C3"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block mt-6"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="card max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Do you offer delivery?</h3>
              <p className="text-gray-600">
                Yes! We offer fast delivery within 1 hour to a wide coverage area. You can order 
                online through our website or mobile app.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Can I make a reservation?</h3>
              <p className="text-gray-600">
                Absolutely! You can make a reservation through our website or by calling us directly. 
                We recommend booking in advance, especially for weekends and large parties.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Do you cater events?</h3>
              <p className="text-gray-600">
                Yes, we offer catering services for events of all sizes. Please contact us directly 
                to discuss your catering needs and get a custom quote.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Do you have vegetarian options?</h3>
              <p className="text-gray-600">
                Yes! We have a wide variety of delicious vegetarian dishes including Daal Makhani, 
                Palak Paneer, and more. Check our menu for all vegetarian options.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept cash, credit cards, and debit cards. For online orders, we currently 
                accept cash on delivery with card payment options coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

