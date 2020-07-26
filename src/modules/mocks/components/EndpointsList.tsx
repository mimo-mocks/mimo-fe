import React, { FC } from 'react';
import { Accordion } from '@chakra-ui/core';

// components
import Endpoint from 'modules/mocks/components/Endpoint';

const EndpointsList: FC = () => {
  return (
    <Accordion>
      <Endpoint />
    </Accordion>
  );
};

export default EndpointsList;
