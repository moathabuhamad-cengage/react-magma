import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  viewBox: '0 0 24 24',
  paths: [
    {
      d:
        'M5.099 9.993c0-3.97 3.75-7.3 7.99-6.32 2.6.6 4.61 2.82 4.95 5.46.25 1.95-.36 3.75-1.51 5.09l.0872-.1061c.0327.0254.0642.0531.0942.0832l4.2426 4.2426c.3906.3905.3906 1.0237 0 1.4142-.3905.3905-1.0236.3905-1.4142 0l-4.2426-4.2426a1.0025 1.0025 0 01-.147-.1865c-1.0223.6744-2.2398 1.0652-3.5501 1.0652-.65 0-1.28-.1-1.87-.27-.71-.21-.92-1.13-.39-1.66.25-.26.62-.36.96-.26.41.12.85.19 1.3.19 2.48 0 4.5-2.03 4.5-4.51 0-2.44-2.1-4.51-4.54-4.49-2.46.02-4.46 2.01-4.46 4.5h2.25c.45 0 .67.55.35.86l-2.9 2.79c-.2.2-.52.19-.71-.01l-3.4-2.75c-.37-.3-.16-.89.31-.89z',
      fillRule: 'evenodd',
    },
  ],
  circles: [],
};

export const YoutubeSearchedForIcon = (props: IconProps) =>
  renderIcon(props, iconType);
