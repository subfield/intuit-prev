import { SpinnerTailwind, SpinnerIntuitBrand, SpinnerCompact } from '../../components/atom/spinner-tailwind';
import { Spinner } from '../../components/atom/spinner';
import '../../components/atom/spinner-tailwind.css';

export default function SpinnerDemo() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Spinner Components Demo</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Original Spinner */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Original Spinner</h2>
            <div className="h-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded">
              <Spinner />
            </div>
            <p className="text-sm text-gray-600 mt-2">Uses custom CSS classes and SVG circles</p>
          </div>

          {/* Tailwind Spinner */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Tailwind Spinner</h2>
            <div className="h-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded">
              <div className="spinner-container">
                <div className="spinner-dot animate-spin-dot-1"></div>
                <div className="spinner-dot animate-spin-dot-2"></div>
                <div className="spinner-dot animate-spin-dot-3"></div>
                <div className="spinner-dot animate-spin-dot-4"></div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Recreated with Tailwind CSS and custom animations</p>
          </div>

          {/* Intuit Brand Spinner */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Intuit Brand Spinner</h2>
            <div className="h-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded">
              <div className="spinner-container">
                <div className="spinner-dot spinner-dot-intuit animate-pulse-dot-1"></div>
                <div className="spinner-dot spinner-dot-intuit animate-pulse-dot-2"></div>
                <div className="spinner-dot spinner-dot-intuit animate-pulse-dot-3"></div>
                <div className="spinner-dot spinner-dot-intuit animate-pulse-dot-4"></div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Uses Intuit brand colors with pulse animation</p>
          </div>

          {/* Compact Spinner */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Compact Spinner</h2>
            <div className="h-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded">
              <SpinnerCompact />
            </div>
            <p className="text-sm text-gray-600 mt-2">Smaller version for inline use</p>
          </div>
        </div>

        {/* Full Page Examples */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Full Page Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="/spinner-demo/full-tailwind" 
              className="block bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-6 text-center transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">View Tailwind Spinner Full Page</h3>
              <p className="text-blue-100">See the spinner in a full-page loading context</p>
            </a>
            <a 
              href="/spinner-demo/full-intuit" 
              className="block bg-green-500 hover:bg-green-600 text-white rounded-lg p-6 text-center transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">View Intuit Brand Spinner Full Page</h3>
              <p className="text-green-100">See the Intuit-styled spinner in action</p>
            </a>
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Usage Instructions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-700">Import the components:</h3>
              <code className="block bg-gray-100 p-2 rounded mt-1 text-sm">
                {`import { SpinnerTailwind, SpinnerIntuitBrand, SpinnerCompact } from './components/atom/spinner-tailwind';`}
              </code>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Use in your JSX:</h3>
              <code className="block bg-gray-100 p-2 rounded mt-1 text-sm">
                {`<SpinnerTailwind />  // Full page spinner
<SpinnerIntuitBrand />  // Intuit brand colors
<SpinnerCompact />  // Inline spinner`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}