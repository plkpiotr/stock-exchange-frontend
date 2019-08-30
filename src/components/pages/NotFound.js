import React from 'react';
import styled from 'styled-components';
import Offline from 'components/templates/Offline';
import Description from 'components/atoms/Description';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
`;

const NotFound = () => (
  <Offline>
    <Section>
      <Description>This is not the page you are looking for</Description>
    </Section>
  </Offline>
);

export default NotFound;
