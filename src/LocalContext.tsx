import { createContext } from "react";

interface ContextType {
    locale: string;
    setLocale: (locale: string) => void;
}

const defaultValue: ContextType = {
    locale: 'en',
    setLocale: () => {}
};

const LocalContext = createContext<ContextType>(defaultValue);

export default LocalContext;
