export type TextStyle =
  | 'normal'
  | 'bold'
  | 'italic'
  | 'script'
  | 'monospace'
  | 'doubleStruck'
  | 'square'
  | 'wide'
  | 'smallCaps';

export interface Segment {
  text: string;
  style: TextStyle;
}

export type DocumentState = Segment[];
