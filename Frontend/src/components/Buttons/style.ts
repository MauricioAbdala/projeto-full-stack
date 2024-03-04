import styled, { css } from 'styled-components';

export interface iStyledButtonProps {
  buttonVariation?: string;
}

export const StyledButton = styled.button<iStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  border-radius: var(--radius-size-3);
  transition: 0.8s;

  ${({ buttonVariation }) => {
    switch (buttonVariation) {
      case 'Sign-in':
        return css`
          width: min(100%, 850px);
          height: 45px;
          background-color: #15400e;
          border: 0.8px solid #15400e;
          border-radius: var(--radius-size-2);
          font-size: clamp(var(--font-size-7), 3vw, var(--font-size-5));
          color: var(--color-background);
          margin-top: 9%;

          &:hover {
            background-color: #008000;
            border-color: grey;
          }
        `;
      case 'Join':
        return css`
          width: fit-content;
          height: fit-content;
          background-color: transparent;
          border: none;
          text-decoration: underline;
          font-size: clamp(var(--font-size-7), 4vw, var(--font-size-5));
          font-weight: bold;
          color: black;
        `;
      case 'delete':
        return css`
          width: fit-content;
          height: fit-content;
          background-color: transparent;
          border: none;
          text-decoration: underline;

          font-size: clamp(var(--font-size-7), 4vw, var(--font-size-5));
          color: var(--color-shading300);
        `;
      case 'closeModal':
        return css`
          width: 20px;
          height: 20px;
          background-color: transparent;
          border: none;
          font-size: clamp(var(--font-size-7), 3vw, var(--font-size-5));
          color: var(--color-shading300);

          &:hover {
            color: var(--color-primary);
          }
        `;
      case 'editProfile':
        return css`
          gap: 7px;
          width: fit-content;
          height: fit-content;
          background-color: transparent;
          border: none;
          text-decoration: underline;
          font-size: clamp(var(--font-size-7), 4vw, var(--font-size-5));
          color: var(--color-background);
        `;
      case 'addContact':
        return css`
          width: fit-content;
          height: fit-content;
          background-color: transparent;
          border: none;
          text-decoration: underline;
          font-size: clamp(var(--font-size-5), 6vw, var(--font-size-2));
          color: var(--color-shading300);
        `;
      case 'editContact':
        return css`
          border-radius: var(--radius-size-2);
          background-color: var(--color-background);
          border: 2.5px solid #6eaa5e;
          color: #6eaa5e;
          font-size: clamp(var(--font-size-7), 3vw, var(--font-size-5));

          &:hover {
            background-color: #008000;
            color: var(--color-background);
          }
        `;
      case 'logout':
        return css`
          width: fit-content;
          height: fit-content;
          background-color: transparent;
          border: none;
          text-decoration: underline;
          font-size: clamp(var(--font-size-7), 4vw, var(--font-size-5));
          color: var(--color-background);
        `;
    }
  }}
`;
