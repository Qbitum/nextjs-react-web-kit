import { ReactNode, useContext, useRef } from "react";
import { AuthContext } from "react-oauth2-code-pkce";

export type AppProps = {
    children: ReactNode;
    id: string;
    className?: string
    logOutEvent?: (e: any) => void;
};

export function QApp({ children, id, className, logOutEvent }: AppProps) {
    const ref = useRef(null);
    const auth = useContext(AuthContext);
    // logger.log(auth.token);
    // logger.log(auth.tokenData);
    return (
        <div
            ref={ref}
            id={id}
            className='app flex width-100 h-screen overscroll-none'
            style={{}}>
            {children}
        </div>
    );
}

QApp.defaultProps = {
    children: ''
};