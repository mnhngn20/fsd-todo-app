import { LucideProps } from 'lucide-react';
import React from 'react';

interface FeatureIconProps {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
}

export function FeatureIcon({
  icon: Icon,
  title,
  description
}: FeatureIconProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Icon className="w-12 h-12 text-blue-500 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
