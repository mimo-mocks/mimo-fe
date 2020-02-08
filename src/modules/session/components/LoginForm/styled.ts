import styled from 'styled-components';

// ui
import { BaseInput } from 'ui/styled/common/BaseInput';

// lib
import { PADDINGS, COLORS, MARGINS } from 'lib/variables';
import { BaseButton } from 'ui/styled/common/BaseButton';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  z-index: 2;

  width: 15rem;
  height: 20rem;

  border: 2px solid ${COLORS.black.one};
  border-radius: 4px;

  background-color: ${COLORS.white.one};

  padding: ${PADDINGS.two};

  .bottom-content,
  .top-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .top-content {
    margin-top: 5rem;
  }

  .ball {
    top: -3.5rem;
    right: 3.75rem;
  }
`;

export const Input = styled(BaseInput)`
  margin-bottom: ${MARGINS.two};
`;

export const Button = styled(BaseButton)``;
