import { createContext } from 'react';

const NavigatorContext = createContext({});

export const NavigatorProvider = NavigatorContext.Provider;
export const NavigatorConsumer = NavigatorContext.Consumer;
