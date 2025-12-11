import { useRef, useImperativeHandle, forwardRef } from 'react';
import { FileText } from 'lucide-react';

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export interface TextEditorRef {
  getSelection: () => { start: number; end: number };
  focus: () => void;
}

const TextEditor = forwardRef<TextEditorRef, TextEditorProps>(({ value, onChange }, ref) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref, () => ({
    getSelection: () => {
      const textarea = textareaRef.current;
      if (!textarea) return { start: 0, end: 0 };
      return {
        start: textarea.selectionStart,
        end: textarea.selectionEnd
      };
    },
    focus: () => {
      textareaRef.current?.focus();
    }
  }));

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-3">
        <FileText size={18} className="text-blue-500" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Texto original</h3>
          <p className="text-xs text-gray-500">Selecciona y aplica estilos con la barra de herramientas</p>
        </div>
      </div>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Escribe o pega aquí tu texto normal…"
        className="flex-1 w-full p-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none font-sans text-base resize-none transition-all hover:border-gray-400"
      />
    </div>
  );
});

TextEditor.displayName = 'TextEditor';

export default TextEditor;
