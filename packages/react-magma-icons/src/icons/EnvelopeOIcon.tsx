import * as React from 'react';
import { IconProps } from '../iconProps';
import { renderIcon } from '../SvgIcon';

const iconType = {
  viewBox: '0 0 28 22',
  paths: [
    {
      d:
        'M26,22.5v-12a8.77,8.77,0,0,1-1.08,1q-4.19,3.22-6.65,5.28c-.54.45-1,.8-1.3,1.05a7.63,7.63,0,0,1-1.35.76A4,4,0,0,1,14,19h0a4,4,0,0,1-1.6-.38A7.28,7.28,0,0,1,11,17.86c-.33-.25-.77-.6-1.3-1.05q-2.46-2.05-6.65-5.28A8.77,8.77,0,0,1,2,10.5v12a.47.47,0,0,0,.15.35A.47.47,0,0,0,2.5,23h23a.49.49,0,0,0,.35-.15A.47.47,0,0,0,26,22.5ZM26,6.08V5.49c0-.13,0-.2,0-.19s-.05,0-.08-.14S25.78,5,25.72,5a.26.26,0,0,1-.22,0H2.5a.47.47,0,0,0-.35.15A.47.47,0,0,0,2,5.5,5.46,5.46,0,0,0,4.3,9.94q3,2.37,6.26,5l.55.46c.3.26.54.45.72.59l.69.49a4.21,4.21,0,0,0,.79.43A2,2,0,0,0,14,17h0a2,2,0,0,0,.68-.14,4.21,4.21,0,0,0,.79-.43l.69-.49c.18-.14.42-.33.72-.59l.55-.46q3.24-2.58,6.26-5a7.09,7.09,0,0,0,1.57-1.81A3.85,3.85,0,0,0,26,6.08Zm2-.58v17A2.49,2.49,0,0,1,25.5,25H2.5a2.41,2.41,0,0,1-1.77-.73A2.41,2.41,0,0,1,0,22.5V5.5A2.41,2.41,0,0,1,.73,3.73,2.41,2.41,0,0,1,2.5,3h23A2.49,2.49,0,0,1,28,5.5Z',
      transform: 'translate(0 -3)'
    }
  ]
};

export const EnvelopeOIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);