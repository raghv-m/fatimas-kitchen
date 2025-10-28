import { Users, Star, ChefHat, Award } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: '250+',
      label: 'Happy Clients',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Star,
      value: '150+',
      label: 'Positive Reviews',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      icon: ChefHat,
      value: '25+',
      label: 'Expert Chefs',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Award,
      value: '100%',
      label: 'Quality Guaranteed',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} ${stat.color} rounded-full mb-4`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

