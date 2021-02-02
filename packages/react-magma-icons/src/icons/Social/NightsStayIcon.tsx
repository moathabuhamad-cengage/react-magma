import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M10.64 2.09c.41-.05.72.36.53.72-.99 1.91-2.07 5.39-.07 9.27 2 3.89 5.79 5.29 8.28 5.42.41.03.63.5.37.82-1.84 2.25-4.63 3.69-7.76 3.69-1.08 0-2.13-.18-3.11-.5C10.13 20.83 11 19.52 11 18c0-1.83-1.23-3.37-2.9-3.85C7.18 12.83 5.66 12 4 12c-.71 0-1.38.15-2 .42 0-.01 0-.01-.01-.01-.21-5.25 3.63-9.64 8.65-10.32zM4 14c1.3 0 2.4.84 2.82 2H7c1.1 0 2 .9 2 2s-.9 2-2 2H4c-1.66 0-3-1.34-3-3s1.34-3 3-3z',
      fillRule: 'evenodd',
    },
  ],
  circles: [],
};

export const NightsStayIcon = (props: IconProps) => renderIcon(props, iconType);
