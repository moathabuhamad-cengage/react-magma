import * as React from 'react';
import { IconProps } from '../iconProps';
import { renderIcon } from '../SvgIcon';

const iconType = {
  viewBox: '0 0 24 28',
  paths: [
    {
      d:
        'M22.94,5.94a3.63,3.63,0,0,1,.75,1.18A3.77,3.77,0,0,1,24,8.5v18A1.5,1.5,0,0,1,22.5,28H1.5a1.44,1.44,0,0,1-1.06-.44A1.44,1.44,0,0,1,0,26.5V1.5A1.44,1.44,0,0,1,.44.44,1.44,1.44,0,0,1,1.5,0h14a3.58,3.58,0,0,1,1.38.31,3.63,3.63,0,0,1,1.18.75ZM16,2.12V8h5.88a1.69,1.69,0,0,0-.35-.64L16.64,2.47A1.69,1.69,0,0,0,16,2.12ZM22,26V10H15.5A1.5,1.5,0,0,1,14,8.5V2H2V26ZM6.7,22.34V24h4.39V22.34H9.92l1.61-2.51.16-.26.11-.21s0-.06.06-.06h0a.56.56,0,0,0,.08.15.75.75,0,0,0,.07.12l.09.12.1.14,1.68,2.51H12.72V24h4.54V22.34H16.2l-3-4.26,3.05-4.41H17.3V12H12.94v1.67h1.15l-1.6,2.48-.16.26a2.45,2.45,0,0,1-.14.21l0,.05h0a.78.78,0,0,0-.08-.16,1.57,1.57,0,0,0-.27-.35l-1.65-2.49h1.18V12H6.78v1.67H7.85l3,4.25-3,4.42Z',
      transform: 'translate(0 0)',
    },
  ],
};

export const FileExcelOIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
