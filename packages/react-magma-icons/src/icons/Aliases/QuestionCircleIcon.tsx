/******************************************************
 * This file was created by scripts/generate.js as part
 * of the build process. Do not edit this file directly.
 ******************************************************/

import * as React from 'react';
import { IconProps } from '../../IconProps';
import { ExpandMoreIcon } from '../Navigation/ExpandMoreIcon';
export const QuestionCircleIcon = (props: IconProps) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn('QuestionCircleIcon has been deprecated');
  }
  return <ExpandMoreIcon {...props} />;
};
