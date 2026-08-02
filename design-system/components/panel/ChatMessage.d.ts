import * as React from 'react';

/** One turn in the panel discussion thread. Persona replies carry the avatar + name so voice stays attributable. */
export interface ChatMessageProps {
  /** Persona name, or omitted for the user's own message. */
  from?: string;
  color?: string;
  text?: string;
  /** The user's own message — bone bubble, right aligned. */
  self?: boolean;
  /** Renders the "<name> is typing…" placeholder instead of a bubble. */
  typing?: boolean;
  style?: React.CSSProperties;
}
export declare function ChatMessage(props: ChatMessageProps): JSX.Element;
