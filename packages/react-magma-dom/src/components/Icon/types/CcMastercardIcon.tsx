import * as React from 'react';
import { IconProps, renderIcon } from '../utils';

const iconType = {
  viewBox: '0 0 36 24',
  paths: [
    {
      d:
        'M10.48,14.58h-.2c-.49,0-.73.16-.73.5s.1.34.31.34a.54.54,0,0,0,.44-.23,1.13,1.13,0,0,0,.18-.61ZM16.66,14h1v0a.12.12,0,0,0,0-.1s0-.07,0-.11l0-.13a.61.61,0,0,0-.07-.1.5.5,0,0,0-.12-.08.48.48,0,0,0-.18,0c-.29,0-.48.2-.56.6Zm8.43.56h-.18c-.5,0-.75.16-.75.5s.1.34.31.34a.54.54,0,0,0,.44-.23,1.13,1.13,0,0,0,.18-.61Zm5-.41c0-.43-.16-.64-.47-.64a.58.58,0,0,0-.49.31,1.61,1.61,0,0,0-.18.8c0,.44.14.66.44.66a.59.59,0,0,0,.5-.32,1.49,1.49,0,0,0,.2-.81ZM7.5,12H8.86l-.69,4.09H7.3l.5-3.14L6.69,16.06H6.08L6,12.94l-.53,3.12H4.66L5.34,12H6.61l0,2.55Zm3.95,1.67q0,.09-.06.66c-.17,1-.26,1.64-.27,1.76h-.73l0-.34a1.08,1.08,0,0,1-.91.4.79.79,0,0,1-.59-.24,1,1,0,0,1-.22-.66,1.17,1.17,0,0,1,.4-1,1.76,1.76,0,0,1,1.14-.33h.36s0-.06,0-.08a.64.64,0,0,1,0-.07v-.05c0-.21-.18-.31-.56-.31a3,3,0,0,0-.92.15s0-.29.11-.75a4,4,0,0,1,1.05-.17C11.07,12.67,11.45,13,11.45,13.64Zm2.44-.91-.12.77a5.13,5.13,0,0,0-.65-.05q-.42,0-.42.27a.29.29,0,0,0,.07.19,2,2,0,0,0,.34.17,1,1,0,0,1,.62.94c0,.75-.45,1.12-1.35,1.1a3.94,3.94,0,0,1-.91-.09s0-.27.11-.76a3.17,3.17,0,0,0,.8.12c.33,0,.5-.1.5-.3a.29.29,0,0,0-.07-.18,1.66,1.66,0,0,0-.34-.19,1,1,0,0,1-.67-.92c0-.75.43-1.13,1.31-1.13A4.26,4.26,0,0,1,13.89,12.73Zm1.38,0h.43l-.11.82h-.45c0,.17-.05.38-.1.63s-.08.44-.11.6,0,.25,0,.28.1.25.3.25a1.07,1.07,0,0,0,.25,0l-.13.74a2,2,0,0,1-.62.1c-.45,0-.68-.24-.7-.73a6.91,6.91,0,0,1,.12-.87c0-.21.16-1,.39-2.29h.86Zm3.17,1.15a3.79,3.79,0,0,1-.11.81H16.6a.51.51,0,0,0,.15.51.88.88,0,0,0,.6.18,2.06,2.06,0,0,0,.9-.22l-.14.84a3.58,3.58,0,0,1-.89.12,1.31,1.31,0,0,1-1.49-1.48,2.28,2.28,0,0,1,.43-1.41,1.33,1.33,0,0,1,1.09-.56,1.16,1.16,0,0,1,.87.33A1.22,1.22,0,0,1,18.44,13.88Zm2.17-1.16a3.69,3.69,0,0,0-.35,1,.45.45,0,0,0-.48.37,17.45,17.45,0,0,0-.39,2h-.88l0-.22c.23-1.35.38-2.39.45-3.11h.8l0,.52a2,2,0,0,1,.4-.46.53.53,0,0,1,.45-.07Zm2.92-.64-.14.89a1.72,1.72,0,0,0-.78-.22,1,1,0,0,0-.8.43,1.81,1.81,0,0,0-.31,1.1,1.18,1.18,0,0,0,.21.74.74.74,0,0,0,.6.26,1.83,1.83,0,0,0,.75-.2l-.15.92a3.16,3.16,0,0,1-.79.13A1.39,1.39,0,0,1,21,15.65a1.89,1.89,0,0,1-.42-1.29,2.78,2.78,0,0,1,.56-1.79,1.76,1.76,0,0,1,1.43-.69,2.65,2.65,0,0,1,1,.2Zm2.53,1.56a4.24,4.24,0,0,1-.06.66c-.14.82-.22,1.41-.27,1.76H25l0-.34a1.1,1.1,0,0,1-.92.4.75.75,0,0,1-.58-.24,1,1,0,0,1-.22-.66,1.17,1.17,0,0,1,.4-1,1.73,1.73,0,0,1,1.13-.33h.36a.75.75,0,0,0,0-.2c0-.21-.18-.31-.56-.31a3,3,0,0,0-.92.15s0-.29.12-.75a4.06,4.06,0,0,1,1.05-.17c.76,0,1.14.32,1.14,1Zm2.21-.92a2.82,2.82,0,0,0-.33,1,.44.44,0,0,0-.49.36,15.63,15.63,0,0,0-.4,2h-.88l0-.22c.2-1.08.35-2.12.45-3.11h.82a3.58,3.58,0,0,1-.07.52,2.19,2.19,0,0,1,.42-.46.49.49,0,0,1,.43-.07Zm2.2-.75h.87l-.67,4.09h-.83l.05-.29a1.11,1.11,0,0,1-.81.35.92.92,0,0,1-.77-.37,1.55,1.55,0,0,1-.29-1,2.43,2.43,0,0,1,.43-1.44,1.23,1.23,0,0,1,1-.61,1,1,0,0,1,.83.46Zm1.73,2a8.34,8.34,0,0,0-1.13-4.27A8.48,8.48,0,0,0,28,6.64a8.54,8.54,0,0,0-9.4.58,9,9,0,0,1,2.67,4.44h-.78A8.43,8.43,0,0,0,18,7.7a8.43,8.43,0,0,0-2.47,4h-.78a9,9,0,0,1,2.67-4.44A8.54,8.54,0,0,0,8,6.64,8.48,8.48,0,0,0,4.93,9.73,8.34,8.34,0,0,0,3.8,14a8.34,8.34,0,0,0,1.13,4.27A8.48,8.48,0,0,0,8,21.36a8.54,8.54,0,0,0,9.4-.58,9,9,0,0,1-2.58-4.12h.79A8.33,8.33,0,0,0,18,20.3a8.38,8.38,0,0,0,2.38-3.64h.78a9,9,0,0,1-2.58,4.12,8.54,8.54,0,0,0,9.4.58,8.48,8.48,0,0,0,3.09-3.09A8.34,8.34,0,0,0,32.2,14ZM36,4V24a2,2,0,0,1-2,2H2a2,2,0,0,1-1.41-.59A2,2,0,0,1,0,24V4A2,2,0,0,1,.59,2.59,2,2,0,0,1,2,2H34a2,2,0,0,1,2,2Z',
      transform: 'translate(0 -2)'
    }
  ]
};

export const CcMastercardIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
