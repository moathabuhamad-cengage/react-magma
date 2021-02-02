import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M18.53 13c.1 0 .2.08.21.2l.17 1.18c.28.11.53.26.76.44l1.11-.45c.11-.03.23 0 .28.1l.9 1.55c.06.1.03.22-.05.29l-.95.74c.03.14.04.29.04.44 0 .15-.02.3-.04.44l.96.74c.08.07.11.19.05.28l-.9 1.55c-.06.1-.18.14-.28.1l-1.12-.45c-.22.18-.48.32-.75.44l-.17 1.18c-.01.11-.11.19-.22.19h-1.79c-.11 0-.2-.08-.22-.19l-.17-1.18c-.28-.11-.53-.26-.76-.44l-1.11.45c-.11.03-.23 0-.28-.1l-.9-1.55c-.06-.1-.03-.22.05-.29l.95-.74c-.02-.14-.03-.29-.03-.44 0-.15.01-.3.03-.44l-.95-.74c-.09-.07-.1-.19-.05-.29l.9-1.55c.06-.1.18-.14.28-.1l1.11.45c.23-.18.49-.32.76-.44l.17-1.18c.01-.11.11-.19.22-.19zm-.9 3.13c-.75 0-1.35.6-1.35 1.35 0 .75.61 1.35 1.35 1.35.74 0 1.35-.6 1.35-1.35 0-.75-.6-1.35-1.35-1.35zM10.21 2c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69 0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68L2.13 7.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3zm-1.4 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
      fillRule: 'evenodd',
    },
  ],
  circles: [],
};

export const MiscellaneousServicesIcon = (props: IconProps) =>
  renderIcon(props, iconType);
