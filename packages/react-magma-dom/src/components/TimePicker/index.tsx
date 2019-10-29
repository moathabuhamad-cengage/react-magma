import * as React from 'react';
import { TimePickerCore } from 'react-magma-core';
import styled from '@emotion/styled';
import { ThemeContext } from '../../theme/ThemeContext';
import { AmPmToggle } from './AmPmToggle';

import { Input } from '../Input';
import { Clock2Icon } from '../Icon/types/Clock2Icon';

export interface TimePickerProps {
  errorMessage?: string;
  id?: string;
  inverse?: boolean;
  labelText: string;
  helperMessage?: string;
}

const TimePickerContainer = styled.div<{ inverse?: boolean }>`
  position: relative;

  &:focus-within {
    input[type='text'] {
      outline: 2px dotted
        ${props =>
          props.inverse
            ? props.theme.colors.neutral08
            : props.theme.colors.pop02};
      outline-offset: 2px;
    }
  }
`;

const InputsContainer = styled.div`
  bottom: 46px;
  left: 31px;
  position: absolute;
`;

const Divider = styled.span`
  display: inline-block;
  margin: 0 1px;
  position: relative;
  top: -1px;
`;

const StyledNumInput = styled.input`
  border: 0;
  border-radius: 3px;
  padding: 0 3px;
  text-align: right;
  width: 23px;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  -moz-appearance: textfield;

  &:focus {
    outline: 0;
    background: ${props => props.theme.colors.foundation01};
    color: ${props => props.theme.colors.neutral08};
  }
`;

function renderTimePicker(props) {
  const { errorMessage, helperMessage, inverse, labelText } = props;

  return (
    <ThemeContext.Consumer>
      {theme => (
        <TimePickerCore id={props.id}>
          {({ id }) => {
            const hourId = `${id}__hour`;
            const minuteId = `${id}__minute`;
            const descriptionId =
              errorMessage || helperMessage ? `${id}__desc` : null;

            return (
              <TimePickerContainer inverse={inverse} theme={theme}>
                <Input
                  disabled
                  errorMessage={errorMessage}
                  helperMessage={helperMessage}
                  icon={<Clock2Icon />}
                  id={id}
                  inverse={inverse}
                  labelText={labelText}
                  inputStyle={{
                    background: `${theme.colors.neutral08}`,
                    borderColor: `${
                      errorMessage
                        ? theme.colors.danger
                        : inverse
                        ? theme.colors.neutral08
                        : theme.colors.neutral04
                    }`,
                    cursor: 'default',
                    width: '125px'
                  }}
                />
                <InputsContainer>
                  <StyledNumInput
                    aria-label="Hours"
                    aria-describedby={descriptionId}
                    id={hourId}
                    maxLength={2}
                    max="12"
                    min="1"
                    placeholder="--"
                    theme={theme}
                    type="number"
                  />
                  <Divider> : </Divider>
                  <StyledNumInput
                    aria-label="Minutes"
                    id={minuteId}
                    maxLength={2}
                    max="59"
                    min="0"
                    placeholder="--"
                    theme={theme}
                    type="number"
                  />
                  <AmPmToggle />
                </InputsContainer>
              </TimePickerContainer>
            );
          }}
        </TimePickerCore>
      )}
    </ThemeContext.Consumer>
  );
}

export const TimePicker: React.FunctionComponent<TimePickerProps> = (
  props: TimePickerProps
) => renderTimePicker(props);
