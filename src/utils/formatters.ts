import {
  boldMap,
  italicMap,
  scriptMap,
  monospaceMap,
  doubleStruckMap,
  squareMap,
  wideMap,
  smallCapsMap
} from './unicodeMaps';
import { DocumentState } from '../types';

export function applyMap(text: string, map: Record<string, string>): string {
  return Array.from(text)
    .map(ch => map[ch] ?? ch)
    .join('');
}

export function toBold(text: string): string {
  return applyMap(text, boldMap);
}

export function toItalic(text: string): string {
  return applyMap(text, italicMap);
}

export function toScript(text: string): string {
  return applyMap(text, scriptMap);
}

export function toMonospace(text: string): string {
  return applyMap(text, monospaceMap);
}

export function toDoubleStruck(text: string): string {
  return applyMap(text, doubleStruckMap);
}

export function toSquare(text: string): string {
  return applyMap(text, squareMap);
}

export function toWide(text: string): string {
  return applyMap(text, wideMap);
}

export function toSmallCaps(text: string): string {
  return applyMap(text, smallCapsMap);
}

export function renderForFacebook(doc: DocumentState): string {
  return doc
    .map(seg => {
      switch (seg.style) {
        case 'bold':
          return toBold(seg.text);
        case 'italic':
          return toItalic(seg.text);
        case 'script':
          return toScript(seg.text);
        case 'monospace':
          return toMonospace(seg.text);
        case 'doubleStruck':
          return toDoubleStruck(seg.text);
        case 'square':
          return toSquare(seg.text);
        case 'wide':
          return toWide(seg.text);
        case 'smallCaps':
          return toSmallCaps(seg.text);
        case 'normal':
        default:
          return seg.text;
      }
    })
    .join('');
}
