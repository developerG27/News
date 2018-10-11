import React from 'react';

const Header = (props) => {
  return (
    <div>
      <a href="index.html">{props.titolo}</a>
    </div>
  );
};

export default Header;