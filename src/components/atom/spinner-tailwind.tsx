import './spinner-tailwind.css';

export const SpinnerTailwind = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="spinner-container">
        <div className="spinner-dot animate-spin-dot-1"></div>
        <div className="spinner-dot animate-spin-dot-2"></div>
        <div className="spinner-dot animate-spin-dot-3"></div>
        <div className="spinner-dot animate-spin-dot-4"></div>
      </div>
    </div>
  );
};

// Alternative version with Intuit brand colors
export const SpinnerIntuitBrand = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="spinner-container">
        <div className="spinner-dot spinner-dot-intuit animate-pulse-dot-1"></div>
        <div className="spinner-dot spinner-dot-intuit animate-pulse-dot-2"></div>
        <div className="spinner-dot spinner-dot-intuit animate-pulse-dot-3"></div>
        <div className="spinner-dot spinner-dot-intuit animate-pulse-dot-4"></div>
      </div>
    </div>
  );
};

// Compact version for inline use
export const SpinnerCompact = () => {
  return (
    <div className="inline-flex items-center justify-center p-2">
      <div className="flex items-center gap-1">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-spin-dot-1"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-spin-dot-2"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-spin-dot-3"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-spin-dot-4"></div>
      </div>
    </div>
  );
};