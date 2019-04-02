import * as React from 'react';
import { IconProps, renderIcon } from '../utils';

const iconType = {
  viewBox: '0 0 16.04 22',
  paths: [
    {
      d:
        'M9.42,25H6.74a.52.52,0,0,1-.36-.14.47.47,0,0,1-.14-.36V19.34H1.74a.48.48,0,0,1-.36-.14.45.45,0,0,1-.14-.36v-1.6a.52.52,0,0,1,.14-.36.45.45,0,0,1,.36-.14h4.5V15.41H1.74a.52.52,0,0,1-.36-.14.48.48,0,0,1-.14-.36V13.28a.52.52,0,0,1,.14-.35.49.49,0,0,1,.36-.15H5.08l-5-9a.55.55,0,0,1,0-.5A.49.49,0,0,1,.5,3h3A.5.5,0,0,1,4,3.28L7.35,9.92c.19.4.48,1.05.87,2,.1-.25.26-.61.48-1.07s.35-.77.43-1l3-6.56a.45.45,0,0,1,.45-.3h3a.46.46,0,0,1,.42.25.48.48,0,0,1,0,.48l-4.89,9h3.35a.49.49,0,0,1,.36.15.47.47,0,0,1,.14.35v1.63a.48.48,0,0,1-.5.5H9.92v1.32h4.53a.49.49,0,0,1,.36.15.47.47,0,0,1,.14.35v1.61a.49.49,0,0,1-.14.36.48.48,0,0,1-.36.14H9.92V24.5a.5.5,0,0,1-.14.35.49.49,0,0,1-.36.15Z',
      transform: 'translate(0 -3)'
    }
  ]
};

export const CnyIcon: React.FunctionComponent<IconProps> = (props: IconProps) =>
  renderIcon(props, iconType);
