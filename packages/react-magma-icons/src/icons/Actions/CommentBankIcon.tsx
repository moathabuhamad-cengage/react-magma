import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 11l-2.5-1.5L14 13V5h5v8z',
      fillRule: 'evenodd',
    },
  ],
  circles: [],
};

export const CommentBankIcon = (props: IconProps) =>
  renderIcon(props, iconType);
