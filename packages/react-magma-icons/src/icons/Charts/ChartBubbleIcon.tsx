import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M14.8 16c1.1046 0 2 .8954 2 2s-.8954 2-2 2-2-.8954-2-2 .8954-2 2-2zm-7.6-4.8c1.7673 0 3.2 1.4327 3.2 3.2s-1.4327 3.2-3.2 3.2S4 16.1673 4 14.4s1.4327-3.2 3.2-3.2zm8-7.2C17.851 4 20 6.149 20 8.8s-2.149 4.8-4.8 4.8-4.8-2.149-4.8-4.8S12.549 4 15.2 4z',
      fillRule: 'evenodd',
    },
  ],
  circles: [],
};

export const ChartBubbleIcon = (props: IconProps) =>
  renderIcon(props, iconType);
