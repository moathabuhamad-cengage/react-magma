import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M11.99 5V2.21c0-.45-.54-.67-.85-.35L7.35 5.65c-.2.2-.2.51 0 .71l3.79 3.79c.31.31.85.09.85-.35V7c3.73 0 6.68 3.42 5.86 7.29-.47 2.27-2.31 4.1-4.57 4.57-3.57.75-6.75-1.7-7.23-5.01-.06-.48-.48-.85-.98-.85-.6 0-1.08.53-1 1.13.62 4.39 4.8 7.64 9.53 6.72 3.12-.61 5.63-3.12 6.24-6.24.99-5.13-2.9-9.61-7.85-9.61zm-1.1 11h-.85v-3.26l-1.01.31v-.69l1.77-.63h.09V16zm4.28-1.76c0 .32-.03.6-.1.82-.07.22-.17.42-.29.57-.12.15-.28.26-.45.33-.17.07-.37.1-.59.1-.22 0-.41-.03-.59-.1s-.33-.18-.46-.33c-.13-.15-.23-.34-.3-.57-.07-.23-.11-.5-.11-.82v-.74c0-.32.03-.6.1-.82.07-.22.17-.42.29-.57.12-.15.28-.26.45-.33.17-.07.37-.1.59-.1.22 0 .41.03.59.1s.33.18.46.33c.13.15.23.34.3.57.07.23.11.5.11.82v.74zm-.85-.86c0-.19-.01-.35-.04-.48s-.07-.23-.12-.31c-.05-.08-.11-.14-.19-.17s-.16-.05-.25-.05-.18.02-.25.05c-.07.03-.14.09-.19.17-.05.08-.09.18-.12.31s-.04.29-.04.48v.97c0 .19.01.35.04.48s.07.24.12.32c.05.08.11.14.19.17s.16.05.25.05.18-.02.25-.05c.07-.03.14-.09.19-.17.05-.08.09-.19.11-.32.02-.13.04-.29.04-.48v-.97h.01z',
      fillRule: 'evenodd',
    },
  ],
  circles: [],
};

export const Replay10Icon = (props: IconProps) => renderIcon(props, iconType);
