import React from 'react';
import LinkNext from 'next/link';
import PropTypes from 'prop-types';

export default function Link({ href, children }) {
  return (
    <LinkNext href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        style={{ textDecoration: 'none', alignSelf: 'center' }}
      >
        {children}
      </a>
    </LinkNext>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
