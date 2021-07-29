import React, { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';
import theme from '../../styles/theme';

interface TextAreaProps {
  id?;
  type?: 'text' | 'password' | 'checkbox';
  value?: string;

  placeholder?: string;
  fill?: boolean;
  [props: string]: any;
  onChange: any;
}

function TextArea({
  id,
  type,
  value,
  placeholder,
  fill,
  onChange,
  ...props
}: TextAreaProps) {
  const [focus, setFocus] = useState(false);

  return (
    <StyledTextAreaContainer fill={fill} {...props}>
      <StyledTextArea
        id={id}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
        onKeyUp={(e: any) => {
          if (e.keyCode === 27) e.target.blur();
        }}
      />
      <StyledTextAreaUnderBar focus={focus} />
    </StyledTextAreaContainer>
  );
}

export default TextArea;

const StyledTextAreaContainer = styled.div<{ fill }>`
  position: relative;
  display: ${({ fill }) => (fill ? 'flex' : 'inline-block')};
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
`;

const StyledTextArea = styled.textarea<TextAreaProps>`
  font-weight: 700;
  padding: 16px 24px;
  background: none;
  border: 0;
  outline: 0;
  font-size: 16px;
  min-width: 200px;
  transition: all 0.2s ease;

  background-color: rgba(0, 0, 0, 0.04);

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
  &:focus {
    background-color: rgba(0, 0, 0, 0.01);
  }
`;

const StyledTextAreaUnderBar = styled.div<{ focus: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background: ${theme.color.blue[700]};
  width: ${({ focus }) => (focus ? '100%' : '0%')};
  transition: 0.1s all linear;
  margin: auto;
  border-radius: 2px;
`;
