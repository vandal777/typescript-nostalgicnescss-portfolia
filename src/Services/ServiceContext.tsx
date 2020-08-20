import * as React from 'react';

const defaultServices = null;
export const ServiceContext = React.createContext(defaultServices);

export const ServiceProvider = ({ Services, children }) => <ServiceContext.Provider value={Services}>{children}</ServiceContext.Provider>;

export const useServices = () => React.useContext(ServiceContext);
