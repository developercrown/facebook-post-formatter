import { useState, useRef, useMemo } from 'react';
import TextEditor, { TextEditorRef } from './components/TextEditor';
import Toolbar from './components/Toolbar';
import Preview from './components/Preview';
import Footer from './components/Footer';
import { DocumentState, TextStyle } from './types';
import { renderForFacebook } from './utils/formatters';

function App() {
  const [document, setDocument] = useState<DocumentState>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const editorRef = useRef<TextEditorRef>(null);

  const rawText = useMemo(() => {
    return document.map(seg => seg.text).join('');
  }, [document]);

  const formattedText = useMemo(() => {
    return renderForFacebook(document);
  }, [document]);

  const handleApplyStyle = (styleType: TextStyle) => {
    if (!editorRef.current) return;

    const { start, end } = editorRef.current.getSelection();

    if (start === end) return;

    const newSegments: DocumentState = [];
    let currentPos = 0;

    document.forEach(seg => {
      const segStart = currentPos;
      const segEnd = currentPos + seg.text.length;

      if (segEnd <= start || segStart >= end) {
        newSegments.push(seg);
      } else {
        const overlapStart = Math.max(0, start - segStart);
        const overlapEnd = Math.min(seg.text.length, end - segStart);

        if (overlapStart > 0) {
          newSegments.push({
            text: seg.text.slice(0, overlapStart),
            style: seg.style
          });
        }

        const selectedText = seg.text.slice(overlapStart, overlapEnd);
        newSegments.push({
          text: selectedText,
          style: styleType
        });

        if (overlapEnd < seg.text.length) {
          newSegments.push({
            text: seg.text.slice(overlapEnd),
            style: seg.style
          });
        }
      }

      currentPos = segEnd;
    });

    setDocument(newSegments);
    editorRef.current.focus();
  };

  const handleTextChange = (newText: string) => {
    setIsProcessing(true);
    if (newText === '') {
      setDocument([]);
    } else {
      setDocument([
        {
          text: newText,
          style: 'normal'
        }
      ]);
    }
    setTimeout(() => setIsProcessing(false), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col">
      <div className="container mx-auto px-4 py-8 max-w-7xl flex-1">
        <header className="text-center mb-12">
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">
              Formateador Unicode Pro
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transforma tu texto con estilos Unicode elegantes y profesionales.
            Copia y pega directamente en Facebook y redes sociales.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col">
            <Toolbar onApplyStyle={handleApplyStyle} />
            <TextEditor
              ref={editorRef}
              value={rawText}
              onChange={handleTextChange}
            />
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col">
            <Preview formattedText={formattedText} isProcessing={isProcessing} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
