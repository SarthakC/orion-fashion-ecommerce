import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/atom.svg';

const OptionsContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

const LogoStyles = css`
  height: 100%;
  width: 70px;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const StyledLogo = styled(Logo)`
  ${LogoStyles}
`;

export const LogoContainer = styled(Link)`
  ${LogoStyles}
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionsContainerStyles}
`;

export const OptionDiv = styled(Link)`
  ${OptionsContainerStyles}
`;
