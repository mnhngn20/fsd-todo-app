/* eslint-disable @typescript-eslint/no-require-imports */
/// <reference types="vite/client" />

declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
