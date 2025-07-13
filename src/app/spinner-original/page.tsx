'use client';

import { Spinner } from '@/components/atom/spinner';

export default function SpinnerOriginalPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Original Spinner Test</h1>
      
      <div className="border p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Original Spinner</h2>
        <div className="flex justify-center items-center h-40">
          <Spinner />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">CSS Classes Used</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-auto">
          {`#web-shell-spinner
.idsTSIShortSpinner.IndeterminateShort-wrapper
.circularSpinnerOuter
.circularSpinnerInner
.circularSpinnerCircle`}
        </pre>
      </div>
    </div>
  );
}