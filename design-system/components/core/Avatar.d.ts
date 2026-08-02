import * as React from 'react';

/** Persona identity mark. Colour is per-persona and must stay stable everywhere that persona appears. */
export interface AvatarProps {
  name: string;
  /** One of the --persona-1..8 tokens. Fixed per persona across cards, chat and diff views. */
  color?: string;
  size?: number;
  src?: string;
  style?: React.CSSProperties;
}
export declare function Avatar(props: AvatarProps): JSX.Element;
