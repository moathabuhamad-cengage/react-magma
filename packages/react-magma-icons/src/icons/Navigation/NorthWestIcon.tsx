import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M6 15c.56 0 1-.45 1-1V8.41L17.89 19.3c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L8.41 7H14c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1z',
      fillRule: 'evenodd',
    },
  ],
  circles: [],
};

export const NorthWestIcon = (props: IconProps) => renderIcon(props, iconType);
