'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Calendar, Clock, Users, MapPin } from 'lucide-react';

function ReservationConfirmationContent() {
  const searchParams = useSearchParams();
  const reservationNumber = searchParams.get('reservation');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6">
            <CheckCircle className="w-12 h-12" />
          </div>

          <h1 className="text-4xl font-display font-bold mb-4">Reservation Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Your table has been reserved. We look forward to serving you!
          </p>

          {reservationNumber && (
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8">
              <p className="text-sm text-gray-600 mb-2">Reservation Number</p>
              <p className="text-2xl font-bold text-primary-600">{reservationNumber}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
            <div className="flex items-start space-x-3">
              <div className="bg-primary-100 p-2 rounded-lg">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Reservation Confirmed</h3>
                <p className="text-sm text-gray-600">Your table is reserved</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-primary-100 p-2 rounded-lg">
                <Clock className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Please Arrive On Time</h3>
                <p className="text-sm text-gray-600">We'll hold your table for 15 minutes</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-blue-900 mb-2">Important Information</h3>
            <ul className="text-sm text-blue-800 space-y-2 text-left">
              <li>✓ You'll receive a confirmation email shortly</li>
              <li>✓ Please arrive within 15 minutes of your reservation time</li>
              <li>✓ Call us if you need to modify or cancel your reservation</li>
              <li>✓ We're excited to serve you our delicious food!</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu" className="btn-primary">
              View Menu
            </Link>
            <Link href="/" className="btn-outline">
              Back to Home
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t text-sm text-gray-600">
            <p className="mb-2">Need to modify your reservation?</p>
            <p>
              Call us at{' '}
              <a href="tel:+14032800009" className="text-primary-600 font-semibold hover:underline">
                +1 403-280-0009
              </a>{' '}
              (Calgary) or{' '}
              <a href="tel:+17807055000" className="text-primary-600 font-semibold hover:underline">
                +1 780-705-5000
              </a>{' '}
              (Edmonton)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReservationConfirmationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <ReservationConfirmationContent />
    </Suspense>
  );
}

