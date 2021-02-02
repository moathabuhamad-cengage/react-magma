import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M2.71 3.56c-.39.39-.39 1.02 0 1.41l2.47 2.47C5.07 7.95 5 8.47 5 9c0 4.17 4.42 9.92 6.23 12.11.4.48 1.13.48 1.53 0 .65-.78 1.62-2.01 2.61-3.46l2.65 2.65c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.12 3.56a.9959.9959 0 00-1.41 0zM12 2c-1.84 0-3.5.71-4.75 1.86l3.19 3.19c.43-.34.97-.55 1.56-.55 1.38 0 2.5 1.12 2.5 2.5 0 .59-.21 1.13-.56 1.56l3.55 3.55C18.37 12.36 19 10.57 19 9c0-3.87-3.13-7-7-7z',
      fillRule: 'evenodd',
    },
  ],
  circles: [],
};

export const LocationOffIcon = (props: IconProps) =>
  renderIcon(props, iconType);
