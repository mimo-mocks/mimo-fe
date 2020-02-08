import styled from 'styled-components';

// lib
import { MARGINS } from 'lib/variables';

// ui components
import { RedBall } from 'ui/styled/session/RedBall';

export const Container = styled(RedBall)`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 7rem;
  height: 7rem;
  margin-bottom: ${MARGINS.two};

  position: absolute;

  svg {
    width: 80%;
    height: 80%;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 2;
`;