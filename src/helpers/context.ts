import { createContext, Dispatch, SetStateAction } from 'react';

type OpenSettingsContextType = [boolean, Dispatch<SetStateAction<boolean>>];

export const OpenSettingsContext = createContext<OpenSettingsContextType>([false, () => {}]);
