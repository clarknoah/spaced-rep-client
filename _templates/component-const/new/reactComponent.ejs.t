---
to: src/components/<%= name %>/<%= name %>.js
---

import React from 'react';
import "./<%= name %>.css";

const <%= name %> = (props) => {
  let classList = ``;


  return(
    <div className={classList}>
      <%= name %>
    </div>
  );
}

export default <%= name %>;
