import React from 'react';
import { createIcon } from '../createIcon';
import { G, Path } from '../nbSvg';

export const ArrowBackIcon = createIcon({
  viewBox: '0 0 16 16',
  path: (
    <G>
      <Path
        d="M8.35664 3.05875L4.51895 6.89645L3.66539 7.75H4.8725H13.5V8.25H4.8725H3.66692L4.51863 9.10324L8.35071 12.9422L8 13.2929L2.70711 8L8.00125 2.70586L8.35664 3.05875Z"
        fill="#737373"
        stroke="currentColor"
      />
    </G>
  ),
});

export const ArrowForwardIcon = createIcon({
  viewBox: '0 0 16 16',
  path: (
    <G>
      <Path
        d="M7.64336 3.05875L11.4811 6.89645L12.3346 7.75H11.1275H2.5V8.25H11.1275H12.3331L11.4814 9.10324L7.64929 12.9422L8 13.2929L13.2929 8L7.99875 2.70586L7.64336 3.05875Z"
        fill="#737373"
        stroke="currentColor"
      />
    </G>
  ),
});

export const ArrowUpIcon = createIcon({
  viewBox: '0 0 16 16',
  path: (
    <G>
      <Path
        d="M12.9412 8.35664L9.10355 4.51895L8.25 3.66539V4.8725L8.25 13.5H7.75L7.75 4.8725V3.66692L6.89676 4.51863L3.05782 8.35071L2.70711 8L8 2.70711L13.2941 8.00125L12.9412 8.35664Z"
        fill="#737373"
        stroke="currentColor"
      />
    </G>
  ),
});

export const ArrowDownIcon = createIcon({
  viewBox: '0 0 16 16',
  path: (
    <G>
      <Path
        d="M3.05875 7.64336L6.89645 11.4811L7.75 12.3346V11.1275L7.75 2.5H8.25V11.1275V12.3331L9.10324 11.4814L12.9422 7.64929L13.2929 8L8 13.2929L2.70586 7.99875L3.05875 7.64336Z"
        fill="#737373"
        stroke="currentColor"
      />
    </G>
  ),
});
