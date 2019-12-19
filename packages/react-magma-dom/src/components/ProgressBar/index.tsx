import * as React from 'react';
import { css } from '@emotion/core';
import styled from '../../theme/styled';
import { ThemeContext } from '../../theme/ThemeContext';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
  color?: ProgressBarColor;
  height?: number;
  inverse?: boolean;
  labelVisible?: boolean;
  percentage?: number;
  testId?: string;
}

export enum ProgressBarColor {
  danger = 'danger',
  primary = 'primary', // default
  pop01 = 'pop01',
  pop02 = 'pop02',
  success = 'success'
}

function buildProgressBarBackground(props) {
  switch (props.color) {
    case 'danger':
      return props.theme.colors.danger;
    case 'pop01':
      return props.theme.colors.pop01;
    case 'pop02':
      return props.theme.colors.pop02;
    case 'success':
      return props.theme.colors.success01;

    default:
      return props.inverse
        ? props.theme.colors.foundation03
        : props.theme.colors.primary;
  }
}

const Container = styled.div`
  align-items: center;
  display: flex;
`;

const Track = styled.div<ProgressBarProps>`
  background: ${props =>
    props.inverse ? 'rgba(0,0,0,0.25)' : props.theme.colors.neutral08};
  border: 1px solid
    ${props =>
      props.inverse
        ? props.theme.colors.neutral08
        : props.theme.colors.neutral04};
  display: flex;
  height: ${props => props.height}px;
  padding: 1px;
  width: 100%;
`;

const Bar = styled.div<ProgressBarProps>`
  background: ${props => buildProgressBarBackground(props)};
  display: flex;
  transition: width 0.3s;
  width: ${props => props.percentage}%;

  ${props =>
    props.animated &&
    css`
      background-image: linear-gradient(
        to right,
        ${buildProgressBarBackground(props)} 0%,
        rgba(255, 255, 255, 0.5) 20%,
        ${buildProgressBarBackground(props)} 40%,
        ${buildProgressBarBackground(props)} 100%
      );
      background-repeat: no-repeat;
      background-size: 800px 104px;
      display: inline-block;
      position: relative;

      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-name: placeholderShimmer;
      animation-timing-function: linear;

      @keyframes placeholderShimmer {
        0% {
          background-position: -468px 0;
        }

        100% {
          background-position: 468px 0;
        }
      }
    `}
`;

const Percentage = styled.span`
  font-size: 14px;
  margin-left: 10px;
`;

export const ProgressBar: React.FunctionComponent<
  ProgressBarProps
> = React.forwardRef(
  (
    {
      animated,
      color,
      height,
      inverse,
      labelVisible,
      percentage,
      testId
    }: ProgressBarProps,
    ref: any
  ) => {
    const percentageValue = percentage ? percentage : 0;

    const theme = React.useContext(ThemeContext);

    return (
      <Container>
        <Track
          data-testid={testId}
          height={height ? height : 15}
          inverse={inverse}
          ref={ref}
          theme={theme}
        >
          <Bar
            animated={animated}
            aria-valuenow={percentageValue}
            aria-valuemin={0}
            aria-valuemax={100}
            color={color}
            inverse={inverse}
            percentage={percentageValue}
            role="progressbar"
            theme={theme}
          />
        </Track>
        {labelVisible && <Percentage>{percentageValue}%</Percentage>}
      </Container>
    );
  }
);
