import styled, { css } from 'styled-components';

export interface iStyledInputProps {
  inputVariation?: string;
}

export const StyledInput = styled.div<iStyledInputProps>`
  gap: 3px;
  margin-top: 15px;
  position: relative;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: fit-content;
    background-color: transparent;
  }

  input {
    ${({ inputVariation }) => {
      switch (inputVariation) {
        case 'form':
          return css`
            text-indent: 20px;
            width: min(100%, 800px);
            height: 50px;
            background-color: #ffe8e9;
            border: 2px solid #008000 ;
            border-radius: var(--radius-size-2);
            font-weight: var(--weight-size-4);
            font-size: clamp(var(--font-size-7), 4vw, var(--font-size-6));

            &:focus {
              border-color: #6eaa5e;
            }

            &::placeholder {
              color: var(--color-shading300);
            }
          `;
      }
    }}
  }

  label {
    font-weight: 600;
    font-size: var(--font-size-7);
    color: var(--color-shading300);
  }
`;
