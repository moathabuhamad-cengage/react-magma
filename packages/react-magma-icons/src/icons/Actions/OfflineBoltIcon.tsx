import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M12 2.02c-5.51 0-9.98 4.47-9.98 9.98 0 5.51 4.47 9.98 9.98 9.98 5.51 0 9.98-4.47 9.98-9.98 0-5.51-4.47-9.98-9.98-9.98zm-.52 15.86v-4.14H8.82c-.37 0-.62-.4-.44-.73l3.68-7.17c.23-.47.94-.3.94.23v4.19h2.54c.37 0 .61.39.45.72l-3.56 7.12c-.24.48-.95.31-.95-.22z',
      fillRule: 'evenodd',
    },
  ],
  circles: [],
};

export const OfflineBoltIcon = (props: IconProps) =>
  renderIcon(props, iconType);
