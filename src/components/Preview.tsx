import { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';

interface PreviewProps {
  formattedText: string;
  isProcessing: boolean;
}

export default function Preview({ formattedText, isProcessing }: PreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Error al copiar:', error);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles size={18} className="text-blue-500" />
            <h2 className="text-lg font-semibold text-gray-900">
              Texto formateado
            </h2>
          </div>
          <p className="text-xs text-gray-500">
            Copia y pega directamente en Facebook
          </p>
        </div>
        <button
          onClick={handleCopy}
          disabled={isProcessing}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-medium text-sm ${
            copied
              ? 'bg-green-500 text-white'
              : isProcessing
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg active:scale-95'
          }`}
        >
          {copied ? (
            <>
              <Check size={18} />
              <span>Copiado</span>
            </>
          ) : (
            <>
              <Copy size={18} />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>

      <div className="relative flex-1 flex flex-col">
        <textarea
          readOnly
          value={formattedText}
          className={`flex-1 w-full p-4 rounded-lg border-2 font-sans text-base resize-none transition-all ${
            isProcessing
              ? 'border-blue-300 bg-gradient-to-b from-gray-50 to-blue-50 opacity-60'
              : 'border-gray-300 bg-white opacity-100 focus:border-blue-500'
          }`}
        />

        {isProcessing && (
          <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse opacity-30" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}
