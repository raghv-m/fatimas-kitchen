'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/lib/store/cart-store';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { formatPrice } from '@/lib/utils';
import { Location } from '@/lib/types';
import { supabase } from '@/lib/supabase/client';
import toast from 'react-hot-toast';
import { MapPin, CreditCard, Wallet } from 'lucide-react';

const checkoutSchema = z.object({
  customer_name: z.string().min(2, 'Name must be at least 2 characters'),
  customer_email: z.string().email('Invalid email address'),
  customer_phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  delivery_address: z.string().min(5, 'Address is required'),
  delivery_city: z.string().min(2, 'City is required'),
  delivery_postal_code: z.string().min(5, 'Postal code is required'),
  delivery_instructions: z.string().optional(),
  location_id: z.string().min(1, 'Please select a location'),
  payment_method: z.enum(['card', 'cash']),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getSubtotal, getTax, getDeliveryFee, getTotal, clearCart } = useCartStore();
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  useEffect(() => {
    if (items.length === 0) {
      router.push('/cart');
    }

    async function fetchLocations() {
      const { data } = await supabase
        .from('locations')
        .select('*')
        .eq('is_active', true);
      if (data) setLocations(data);
    }

    fetchLocations();
  }, [items, router]);

  const onSubmit = async (data: CheckoutFormData) => {
    setLoading(true);

    try {
      const orderItems = items.map((item) => ({
        menu_item_id: item.menuItem.id,
        item_name: item.menuItem.name,
        quantity: item.quantity,
        unit_price: item.menuItem.price,
        total_price: item.menuItem.price * item.quantity,
        special_instructions: item.specialInstructions || null,
      }));

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          items: orderItems,
          subtotal: getSubtotal(),
          tax: getTax(),
          delivery_fee: getDeliveryFee(),
          total: getTotal(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to place order');
      }

      toast.success('Order placed successfully!');
      clearCart();
      router.push(`/order-confirmation?order=${result.order.order_number}`);
    } catch (error: any) {
      console.error('Checkout error:', error);
      toast.error(error.message || 'Failed to place order');
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold mb-8">Checkout</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
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

              {/* Delivery Address */}
              <div className="card">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  Delivery Address
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      {...register('delivery_address')}
                      className="input-field"
                      placeholder="123 Main Street"
                    />
                    {errors.delivery_address && (
                      <p className="text-red-500 text-sm mt-1">{errors.delivery_address.message}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        {...register('delivery_city')}
                        className="input-field"
                        placeholder="Calgary"
                      />
                      {errors.delivery_city && (
                        <p className="text-red-500 text-sm mt-1">{errors.delivery_city.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Postal Code *
                      </label>
                      <input
                        {...register('delivery_postal_code')}
                        className="input-field"
                        placeholder="T2P 1J9"
                      />
                      {errors.delivery_postal_code && (
                        <p className="text-red-500 text-sm mt-1">{errors.delivery_postal_code.message}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Instructions (Optional)
                    </label>
                    <textarea
                      {...register('delivery_instructions')}
                      className="input-field"
                      rows={3}
                      placeholder="e.g., Ring doorbell, leave at door, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nearest Location *
                    </label>
                    <select {...register('location_id')} className="input-field">
                      <option value="">Select a location</option>
                      {locations.map((location) => (
                        <option key={location.id} value={location.id}>
                          {location.name} - {location.city}
                        </option>
                      ))}
                    </select>
                    {errors.location_id && (
                      <p className="text-red-500 text-sm mt-1">{errors.location_id.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="card">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <CreditCard className="w-6 h-6 mr-2" />
                  Payment Method
                </h2>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
                    <input
                      {...register('payment_method')}
                      type="radio"
                      value="cash"
                      className="w-4 h-4 text-primary-600"
                    />
                    <Wallet className="w-5 h-5 ml-3 mr-2 text-gray-600" />
                    <span className="font-medium">Cash on Delivery</span>
                  </label>
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-500 transition-colors opacity-50">
                    <input
                      type="radio"
                      value="card"
                      disabled
                      className="w-4 h-4 text-primary-600"
                    />
                    <CreditCard className="w-5 h-5 ml-3 mr-2 text-gray-600" />
                    <span className="font-medium">Credit/Debit Card (Coming Soon)</span>
                  </label>
                </div>
                {errors.payment_method && (
                  <p className="text-red-500 text-sm mt-2">{errors.payment_method.message}</p>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="card sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={item.menuItem.id} className="flex justify-between text-sm">
                      <span className="text-gray-700">
                        {item.quantity}x {item.menuItem.name}
                      </span>
                      <span className="font-medium">
                        {formatPrice(item.menuItem.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-3 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span>{formatPrice(getSubtotal())}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax (5%)</span>
                    <span>{formatPrice(getTax())}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Delivery Fee</span>
                    <span>{formatPrice(getDeliveryFee())}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-primary-600">{formatPrice(getTotal())}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Placing Order...' : 'Place Order'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

