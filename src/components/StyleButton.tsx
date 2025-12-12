import { ReactNode, useState } from 'react';

interface StyleButtonProps {
  icon: ReactNode;
  tooltip: string;
  onClick: () => void;
  variant?: 'default' | 'danger';
}

export default function StyleButton({
  icon,
  tooltip,
  onClick,
  variant = 'default'
}: StyleButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`p-2.5 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95 ${
          variant === 'danger'
            ? 'bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white'
        }`}
        aria-label={tooltip}
      >
        <div className="w-5 h-5 flex items-center justify-center">
          {icon}
        </div>
      </button>

      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-md whitespace-nowrap pointer-events-none animate-fade-in z-50">
          {tooltip}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </div>
      )}
    </div>
  );
}
