import * as React from 'react';
import { IconProps } from '../iconProps';
import { renderIcon } from '../SvgIcon';

const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M16,14a4,4,0,0,1-4,4,4,4,0,0,1-4-4,4,4,0,0,1,4-4,4,4,0,0,1,4,4ZM12,5.5A8.35,8.35,0,0,0,7.73,6.64,8.48,8.48,0,0,0,4.64,9.73a8.57,8.57,0,0,0,0,8.54,8.48,8.48,0,0,0,3.09,3.09,8.57,8.57,0,0,0,8.54,0,8.48,8.48,0,0,0,3.09-3.09,8.57,8.57,0,0,0,0-8.54,8.48,8.48,0,0,0-3.09-3.09A8.35,8.35,0,0,0,12,5.5ZM24,14a11.75,11.75,0,0,1-1.61,6A11.9,11.9,0,0,1,18,24.39,11.73,11.73,0,0,1,12,26a11.75,11.75,0,0,1-6-1.61A11.9,11.9,0,0,1,1.61,20,11.75,11.75,0,0,1,0,14,11.75,11.75,0,0,1,1.61,8,11.9,11.9,0,0,1,6,3.61,11.75,11.75,0,0,1,12,2a11.73,11.73,0,0,1,6,1.61A11.9,11.9,0,0,1,22.39,8,11.73,11.73,0,0,1,24,14Z',
      transform: 'translate(0 -2)'
    }
  ]
};

export const DotCircleOIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);