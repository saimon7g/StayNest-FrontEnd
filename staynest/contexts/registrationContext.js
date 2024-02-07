'use client';

import React, { createContext, useState } from 'react';

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [registrationId, setRegistrationId] = useState(null);

  return (
    <RegistrationContext.Provider value={{ registrationId, setRegistrationId }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export default RegistrationContext;