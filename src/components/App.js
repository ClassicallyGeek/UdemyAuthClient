import React from 'react';

import Header from './Header';

export default ({children}) => {
  // The children prop -- as defined in index.js
    return (
      <div>
        <Header />
        { children }
      </div>
    )
}
