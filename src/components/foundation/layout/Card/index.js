import React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Link from '../../../navigation/Link';
import WrapperCard from './styles/WrapperCard';
import Text from '../../Text';

const CardImage = styled.img`
  display: block;
  width: 100%;
`;

const CardBody = styled.div`
  display: block;
  padding-right: 15px;
  padding-left: 15px;
`;

export default function Card({ srcImage, title, description }) {
  return (
    <WrapperCard>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <CardImage src={srcImage} />
      <CardBody>
        <Text
          tag="h1"
          variant="titleXS"
          color="secondary"
        >
          { title }
        </Text>
        <Text
          tag="paragraph1"
          variant="TitleXS"
          color="secondary"
        >
          { description }
        </Text>
        <div style={{ margin: '45px 0 0 0', float: 'right' }}>
          <Link href="/saiba-mais">
            <Text
              color="primary"
            >
              Saiba mais
              {' '}
              <FaArrowRight />
            </Text>
          </Link>
        </div>
      </CardBody>
    </WrapperCard>
  );
}

Card.propTypes = {
  srcImage: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

Card.defaultProps = {
  title: '',
  description: '',
};
