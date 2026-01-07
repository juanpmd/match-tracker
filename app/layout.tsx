import { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Match Tracker',
    default: 'Match Tracker',
  },
}

type Props = {
  children: Readonly<ReactNode>;
};

export default function ({ children }: Props) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
