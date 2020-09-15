import * as React from 'react';
import { IconProps } from '../iconProps';
import { renderIcon } from '../SvgIcon';

const iconType = {
  viewBox: '0 0 25.64 25.67',
  paths: [
    {
      d:
        'M5.85,22.16a1,1,0,0,0-1-1,1,1,0,0,0-1,1,1,1,0,0,0,.3.71.94.94,0,0,0,.7.29,1,1,0,0,0,1-1ZM15.92,15.6,5.26,26.26a1.94,1.94,0,0,1-1.41.58,2,2,0,0,1-1.42-.58L.78,24.57a1.84,1.84,0,0,1-.6-1.41,1.94,1.94,0,0,1,.6-1.42L11.42,11.1a7.77,7.77,0,0,0,1.79,2.71,7.77,7.77,0,0,0,2.71,1.79Zm9.9-6.79a5.48,5.48,0,0,1-.36,1.65,6.82,6.82,0,0,1-2.57,3.4,6.81,6.81,0,0,1-4,1.3,6.74,6.74,0,0,1-4.94-2.05,6.75,6.75,0,0,1-2.06-4.95,6.75,6.75,0,0,1,2.06-4.94,6.75,6.75,0,0,1,4.94-2.06,7.61,7.61,0,0,1,1.9.26,5.4,5.4,0,0,1,1.68.73.5.5,0,0,1,0,.87L17.85,5.67v3.5l3,1.67,1.23-.76c.77-.47,1.48-.9,2.12-1.27a5,5,0,0,1,1.1-.55.47.47,0,0,1,.37.15.6.6,0,0,1,.13.4Z',
      transform: 'translate(-0.18 -1.16)'
    }
  ]
};

export const WrenchIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);