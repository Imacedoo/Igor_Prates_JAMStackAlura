import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  border: 5px solid #FFFFFF;
  border-radius: 120px;
  display: block;
  height: 211px;
  margin: auto;
  width: 214px;
`;

export default function Avatar({ ...props }) {
  return (
    <Img
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...props}
    />
  );
}
