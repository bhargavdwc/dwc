import * as React from 'react';

interface DotBackgroundProps {
  variant?: 'float' | 'ripple' | 'orbit';
  opacity?: number;
}

declare const DotBackground: React.FC<DotBackgroundProps>;
export default DotBackground;
