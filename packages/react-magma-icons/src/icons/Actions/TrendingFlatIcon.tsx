/******************************************************
 * This file was created by scripts/generate.js as part
 * of the build process. Do not edit this file directly.
 ******************************************************/

import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M21.65 11.65l-2.79-2.79c-.32-.32-.86-.1-.86.35V11H4c-.55 0-1 .45-1 1s.45 1 1 1h14v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7z',
      fillRule: 'evenodd',
    },
  ],
  circles: [],
};

export const TrendingFlatIcon = (props: IconProps) =>
  renderIcon(props, iconType);
