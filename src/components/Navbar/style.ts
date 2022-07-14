import Button from 'components/Button';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 1.8rem;
    display: flex;
    align-items: center;
    height: 6.4rem;
    background-color: ${theme.colors.bg.primary};

    @media (${theme.media.md}) {
      padding: 0 2.4rem;
      height: 8rem;
    }

    @media (${theme.media.lg}) {
      height: 9.4rem;
    }
  `};
`;

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    padding-right: 1.6rem;
    display: flex;
    align-items: center;
    height: 100%;

    & .desktopLogo {
      display: none;
    }

    @media (${theme.media.md}) {
      padding-right: 2.4rem;
      border-right: 1px solid ${theme.colors.navigation.border};

      & .desktopLogo {
        display: block;
      }

      & .mobileLogo {
        display: none;
      }
    }
  `};
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;

    @media (${theme.media.md}) {
      padding-left: 2.4rem;
    }
  `};
`;

export const Dropdown = styled.button`
  ${({ theme }) => css`
    margin-right: 1.6rem;
    display: flex;
    align-items: center;
    gap: 0.9rem;
    flex: 1;
    cursor: pointer;
  `};
`;

export const NewTaskButton = styled(Button).attrs({
  size: 'icon',
})`
  ${({ theme }) => css`
    & span {
      display: none;
    }

    @media (${theme.media.md}) {
      & span {
        display: block;
      }

      & img {
        display: none;
      }
    }
  `};
`;

export const ContextMenuButton = styled.button`
  ${({ theme }) => css`
    margin-left: 0.6rem;
    margin-right: -1rem;
    padding: 0 1rem;
    cursor: pointer;

    @media (${theme.media.md}) {
      margin-left: 1.4rem;
      margin-right: -1rem;
    }
  `};
`;
