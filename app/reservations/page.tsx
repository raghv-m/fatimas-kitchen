'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Location } from '@/lib/types';
import { supabase } from '@/lib/supabase/client';
import toast from 'react-hot-toast';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';

const reservationSchema = z.object({
  customer_name: z.string().min(2, 'Name must be at least 2 characters'),
  customer_email: z.string().email('Invalid email address'),
  customer_phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  location_id: z.string().min(1, 'Please select a location'),
  party_size: z.number().min(1, 'Party size must be at least 1').max(20, 'Maximum party size is 20'),
  reservation_date: z.string().min(1, 'Date is required'),
  reservation_time: z.string().min(1, 'Time is required'),
  special_requests: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

export default function ReservationsPage() {
  const router = useRouter();
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      party_size: 2,
    },
  });

  const selectedLocationId = watch('location_id');
  const selectedLocation = locations.find((loc) => loc.id === selectedLocationId);

  useEffect(() => {
    async function fetchLocations() {
      const { data } = await supabase
        .from('locations')
        .select('*')
        .eq('is_active', true);
      if (data) setLocations(data);
    }

    fetchLocations();
  }, []);

  const onSubmit = async (data: ReservationFormData) => {
    setLoading(true);

    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to create reservation');
      }

      toast.success('Reservation created successfully!');
      router.push(`/reservation-confirmation?reservation=${result.reservation.reservation_number}`);
    } catch (error: any) {
      console.error('Reservation error:', error);
      toast.error(error.message || 'Failed to create reservation');
    } finally {
      setLoading(false);
    }
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Make a Reservation</h1>
          <p className="text-xl text-gray-100">
            Reserve your table at Fatima Karahi Corner
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Contact Information */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Your Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  {...register('customer_name')}
                  className="input-field"
                  placeholder="John Doe"
                />
                {errors.customer_name && (
                  <p className="text-red-500 text-sm mt-1">{errors.customer_name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  {...register('customer_email')}
                  type="email"
                  className="input-field"
                  placeholder="john@example.com"
                />
                {errors.customer_email && (
                  <p className="text-red-500 text-sm mt-1">{errors.customer_email.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  {...register('customer_phone')}
                  type="tel"
                  className="input-field"
                  placeholder="+1 (403) 123-4567"
                />
                {errors.customer_phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.customer_phone.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Reservation Details */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Reservation Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Location *
                </label>
                <select {...register('location_id')} className="input-field">
                  <option value="">Select a location</option>
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name} - {location.address}, {location.city}
                    </option>
                  ))}
                </select>
                {errors.location_id && (
                  <p className="text-red-500 text-sm mt-1">{errors.location_id.message}</p>
                )}
              </div>

              {selectedLocation && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm font-semibold text-blue-900 mb-2">Location Hours:</p>
                  <div className="text-sm text-blue-800 space-y-1">
                    {Object.entries(selectedLocation.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span className="font-medium">{day}:</span>
                        <span>{hours as string}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Date *
                  </label>
                  <input
                    {...register('reservation_date')}
                    type="date"
                    min={today}
                    className="input-field"
                  />
                  {errors.reservation_date && (
                    <p className="text-red-500 text-sm mt-1">{errors.reservation_date.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Time *
                  </label>
                  <input
                    {...register('reservation_time')}
                    type="time"
                    className="input-field"
                  />
                  {errors.reservation_time && (
                    <p className="text-red-500 text-sm mt-1">{errors.reservation_time.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Party Size *
                  </label>
                  <input
                    {...register('party_size', { valueAsNumber: true })}
                    type="number"
                    min="1"
                    max="20"
                    className="input-field"
                  />
                  {errors.party_size && (
                    <p className="text-red-500 text-sm mt-1">{errors.party_size.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  {...register('special_requests')}
                  className="input-field"
                  rows={4}
                  placeholder="Any dietary restrictions, seating preferences, or special occasions?"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating Reservation...' : 'Confirm Reservation'}
          </button>
        </form>

        {/* Info Section */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-bold text-yellow-900 mb-2">Important Information:</h3>
          <ul className="text-sm text-yellow-800 space-y-1 list-disc list-inside">
            <li>Reservations are held for 15 minutes past the reservation time</li>
            <li>Please call us if you need to modify or cancel your reservation</li>
            <li>Large parties (10+) may require a deposit</li>
            <li>You will receive a confirmation email shortly</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

