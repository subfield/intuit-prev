'use client';

import { Spinner } from '@/components/atom/spinner';
import { SpinnerTailwind, SpinnerIntuitBrand, SpinnerCompact } from '@/components/atom/spinner-tailwind';

export default function SpinnerTestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Spinner Test Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Original Spinner</h2>
          <div className="flex justify-center items-center h-40">
            <Spinner />
          </div>
        </div>

        <div className="border p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Tailwind Spinner</h2>
          <div className="flex justify-center items-center h-40">
            <SpinnerTailwind />
          </div>
        </div>

        <div className="border p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Intuit Brand Spinner</h2>
          <div className="flex justify-center items-center h-40">
            <SpinnerIntuitBrand />
          </div>
        </div>

        <div className="border p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Compact Spinner</h2>
          <div className="flex justify-center items-center h-40">
            <SpinnerCompact />
          </div>
        </div>
      </div>
    </div>
  );
}