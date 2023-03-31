import { ReactNode } from "react";


interface Props {
    children: ReactNode;
}

function Alert({children}:Props){
    return <>
        <span>Hi</span>
        <div className="alert alert-primary">{children}</div>
        <span>Bye</span>
    </>
}


export default Alert