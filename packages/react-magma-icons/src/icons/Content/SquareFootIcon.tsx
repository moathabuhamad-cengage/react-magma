import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M17.66 17.66l-.71.71c-.2.2-.51.2-.71 0-.2-.2-.2-.51 0-.71l.71-.71-1.94-1.94-.71.71c-.2.2-.51.2-.71 0-.2-.2-.2-.51 0-.71l.71-.71-1.94-1.94-.71.71c-.2.2-.51.2-.71 0-.2-.2-.2-.51 0-.71l.71-.71L9.7 9.7l-.71.71c-.2.2-.51.2-.71 0-.2-.2-.2-.51 0-.71l.71-.71-1.94-1.94-.71.71c-.2.2-.51.2-.71 0-.2-.2-.2-.51 0-.71l.71-.71-1.49-1.49c-.31-.31-.85-.09-.85.36V18c0 1.1.9 2 2 2h12.79c.45 0 .67-.54.35-.85l-1.48-1.49zM7 16v-4.76L12.76 17H8c-.55 0-1-.45-1-1z',
      fillRule: 'evenodd',
    },
  ],
  circles: [],
};

export const SquareFootIcon = (props: IconProps) => renderIcon(props, iconType);
