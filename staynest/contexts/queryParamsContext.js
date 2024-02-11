
'use client';

import React, { createContext, useState } from 'react';

const QueryParamsContext = createContext();

export const QueryParamsProvider = ({ children }) => {
  const [queryParams, setQueryParams] = useState(null);

  return (
    <QueryParamsContext.Provider value={{ queryParams, setQueryParams }}>
      {children}
    </QueryParamsContext.Provider>
  );
};

export default QueryParamsContext;