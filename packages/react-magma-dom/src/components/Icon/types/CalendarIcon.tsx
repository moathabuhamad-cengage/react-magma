import * as React from 'react';
import { IconProps, renderIcon } from '../utils';

const iconType = {
  viewBox: '0 0 28 28',
  paths: [
    {
      d:
        'M25.85,3.21h-2V8.4h-5.6V3.21H9V8.4H3.35V3.21H-.38V28h28V3.22H25.85Zm-.1,22.92H1.48V10.27H25.75Z',
      transform: 'translate(0.38)'
    },
    { d: 'M4.28,0H8V7.47H4.28Z', transform: 'translate(0.38)' },
    { d: 'M3.35,12.13H7.08v2.8H3.35Z', transform: 'translate(0.38)' },
    { d: 'M9,12.13h3.73v2.8H9Z', transform: 'translate(0.38)' },
    { d: 'M14.55,12.13h3.73v2.8H14.55Z', transform: 'translate(0.38)' },
    { d: 'M20.15,12.13h3.73v2.8H20.15Z', transform: 'translate(0.38)' },
    { d: 'M3.35,16.8H7.08v2.8H3.35Z', transform: 'translate(0.38)' },
    { d: 'M9,16.8h3.73v2.8H9Z', transform: 'translate(0.38)' },
    { d: 'M14.55,16.8h3.73v2.8H14.55Z', transform: 'translate(0.38)' },
    { d: 'M20.15,16.8h3.73v2.8H20.15Z', transform: 'translate(0.38)' },
    { d: 'M3.35,21.47H7.08v2.8H3.35Z', transform: 'translate(0.38)' },
    { d: 'M9,21.47h3.73v2.8H9Z', transform: 'translate(0.38)' },
    { d: 'M14.55,21.47h3.73v2.8H14.55Z', transform: 'translate(0.38)' },
    { d: 'M20.15,21.47h3.73v2.8H20.15Z', transform: 'translate(0.38)' },
    { d: 'M19.22,0H23V7.47H19.22Z', transform: 'translate(0.38)' }
  ]
};

export const CalendarIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
