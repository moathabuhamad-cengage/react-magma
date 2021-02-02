import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M9 3.6c0-.74.78-1.22 1.45-.89l4.76 2.33c.74.36.74 1.42.01 1.79L11 8.98v9.05c2.84.16 5 .98 5 1.97 0 1.1-2.69 2-6 2s-6-.9-6-2c0-.74 1.21-1.38 3-1.73V19c0 .55.45 1 1 1s1-.45 1-1zM19.5 18c.8284 0 1.5.6716 1.5 1.5s-.6716 1.5-1.5 1.5-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5z',
      fillRule: 'evenodd',
    },
  ],
  circles: [],
};

export const GolfCourseIcon = (props: IconProps) => renderIcon(props, iconType);
