'use client';

import { useEffect, useState } from 'react';
import { Review } from '@/lib/types';
import { supabase } from '@/lib/supabase/client';
import { Star } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';

const reviewSchema = z.object({
  customer_name: z.string().min(2, 'Name must be at least 2 characters'),
  customer_email: z.string().email('Invalid email address').optional().or(z.literal('')),
  rating: z.number().min(1).max(5),
  title: z.string().min(3, 'Title must be at least 3 characters').optional().or(z.literal('')),
  comment: z.string().min(10, 'Comment must be at least 10 characters'),
});

type ReviewFormData = z.infer<typeof reviewSchema>;

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [selectedRating, setSelectedRating] = useState(5);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      rating: 5,
    },
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  async function fetchReviews() {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  }

  const onSubmit = async (data: ReviewFormData) => {
    setSubmitting(true);

    try {
      const { error } = await supabase.from('reviews').insert({
        customer_name: data.customer_name,
        customer_email: data.customer_email || null,
        rating: data.rating,
        title: data.title || null,
        comment: data.comment,
        is_approved: false, // Requires admin approval
      });

      if (error) throw error;

      toast.success('Thank you for your review! It will be published after approval.');
      reset();
      setSelectedRating(5);
    } catch (error: any) {
      console.error('Error submitting review:', error);
      toast.error('Failed to submit review. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Customer Reviews</h1>
          <p className="text-xl text-gray-100">
            See what our customers are saying about us
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="card text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">
              {averageRating.toFixed(1)}
            </div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.round(averageRating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="card text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">{reviews.length}</div>
            <p className="text-gray-600">Total Reviews</p>
          </div>
          <div className="card text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">
              {reviews.filter((r) => r.rating === 5).length}
            </div>
            <p className="text-gray-600">5-Star Reviews</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold mb-6">All Reviews</h2>
            {loading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="card animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            ) : reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className="card">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  {review.title && (
                    <h3 className="font-bold text-lg mb-2">{review.title}</h3>
                  )}
                  <p className="text-gray-700 mb-4">{review.comment}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-3">
                    <span className="font-semibold">{review.customer_name}</span>
                    <span>{formatDate(review.created_at)}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="card text-center py-12">
                <p className="text-gray-500">No reviews yet. Be the first to leave a review!</p>
              </div>
            )}
          </div>

          {/* Review Form */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Write a Review</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
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
                    Email (Optional)
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
                    Rating *
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => {
                          setSelectedRating(rating);
                          register('rating').onChange({ target: { value: rating } });
                        }}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-8 h-8 cursor-pointer transition-colors ${
                            rating <= selectedRating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300 hover:text-yellow-200'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <input type="hidden" {...register('rating', { valueAsNumber: true })} value={selectedRating} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title (Optional)
                  </label>
                  <input
                    {...register('title')}
                    className="input-field"
                    placeholder="Great food!"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Review *
                  </label>
                  <textarea
                    {...register('comment')}
                    className="input-field"
                    rows={5}
                    placeholder="Tell us about your experience..."
                  />
                  {errors.comment && (
                    <p className="text-red-500 text-sm mt-1">{errors.comment.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Submitting...' : 'Submit Review'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Your review will be published after approval by our team.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

