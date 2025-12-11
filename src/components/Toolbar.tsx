import {
  Bold,
  Italic,
  Wand2,
  Code,
  BookOpen,
  Square,
  Maximize2,
  Type,
  RotateCcw
} from 'lucide-react';
import { TextStyle } from '../types';
import StyleButton from './StyleButton';

interface StyleButtonConfig {
  style: TextStyle;
  icon: React.ReactNode;
  tooltip: string;
  variant?: 'default' | 'danger';
}

const styleButtons: StyleButtonConfig[] = [
  { style: 'bold', icon: <Bold size={20} />, tooltip: 'Negritas' },
  { style: 'italic', icon: <Italic size={20} />, tooltip: 'Cursiva' },
  { style: 'script', icon: <Wand2 size={20} />, tooltip: 'Script elegante' },
  { style: 'monospace', icon: <Code size={20} />, tooltip: 'Monoespaciado' },
  { style: 'doubleStruck', icon: <BookOpen size={20} />, tooltip: 'Línea doble' },
  { style: 'square', icon: <Square size={20} />, tooltip: 'Cuadrado' },
  { style: 'wide', icon: <Maximize2 size={20} />, tooltip: 'Carácteres anchos' },
  { style: 'smallCaps', icon: <Type size={20} />, tooltip: 'Mayúsculas pequeñas' },
  { style: 'normal', icon: <RotateCcw size={20} />, tooltip: 'Remover estilos', variant: 'danger' }
];

interface ToolbarProps {
  onApplyStyle: (styleType: TextStyle) => void;
}

export default function Toolbar({ onApplyStyle }: ToolbarProps) {
  return (
    <div className="flex items-center gap-1 mb-4 p-3 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg shadow-sm">
      <div className="flex gap-1">
        {styleButtons.map((btn) => (
          <StyleButton
            key={btn.style}
            icon={btn.icon}
            tooltip={btn.tooltip}
            variant={btn.variant}
            onClick={() => onApplyStyle(btn.style)}
          />
        ))}
      </div>
    </div>
  );
}
