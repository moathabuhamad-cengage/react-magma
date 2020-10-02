import * as React from 'react';
import { IconProps } from '../iconProps';
import { renderIcon } from '../SvgIcon';

const iconType = {
  viewBox: '0 0 28 22',
  paths: [
    {
      d:
        'M8,19.67,9.3,15H6.81L8,19.69s0,0,0,0a.05.05,0,0,0,0,0v-.05a.18.18,0,0,0,0-.06ZM9.84,13l.55-2H5.83l.5,2Zm3,0H15l-.55-2h-1.1Zm7,6.69L21.08,15H18.55l1.26,4.67a.35.35,0,0,1,0,.06s0,0,0,.05,0,0,0,0a.13.13,0,0,0,0,0ZM21.59,13l.52-2H17.47L18,13Zm6.41.5v1a.49.49,0,0,1-.14.36.51.51,0,0,1-.36.14H24.17l-2.56,9.62a.45.45,0,0,1-.48.38H18.64a.45.45,0,0,1-.48-.38L15.56,15H12.3L9.69,24.62a.45.45,0,0,1-.48.38H6.72a.46.46,0,0,1-.3-.11.44.44,0,0,1-.17-.27L3.75,15H.5a.52.52,0,0,1-.36-.14A.49.49,0,0,1,0,14.5v-1a.49.49,0,0,1,.14-.36A.52.52,0,0,1,.5,13H3.24l-.52-2H.5a.52.52,0,0,1-.36-.14A.49.49,0,0,1,0,10.5v-1a.49.49,0,0,1,.14-.36A.52.52,0,0,1,.5,9H2.2L.81,3.62a.45.45,0,0,1,.08-.43A.5.5,0,0,1,1.3,3H3.44a.43.43,0,0,1,.48.38L5.33,9h5.61l1.51-5.62A.47.47,0,0,1,12.94,3h2a.45.45,0,0,1,.48.38L16.92,9h5.7l1.46-5.62A.43.43,0,0,1,24.56,3H26.7a.5.5,0,0,1,.41.19.45.45,0,0,1,.08.43L25.76,9H27.5a.52.52,0,0,1,.36.14A.49.49,0,0,1,28,9.5v1a.49.49,0,0,1-.14.36.52.52,0,0,1-.36.14H25.23l-.53,2h2.8a.52.52,0,0,1,.36.14.49.49,0,0,1,.14.36Z',
      transform: 'translate(0 -3)',
    },
  ],
};

export const KrwIcon: React.FunctionComponent<IconProps> = (props: IconProps) =>
  renderIcon(props, iconType);
