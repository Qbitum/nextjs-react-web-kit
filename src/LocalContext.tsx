import { createContext } from "react";


const defaultValue = {
    locale: 'hn',
    // setLocale: ()  => {

    // }
}

export default createContext(defaultValue)