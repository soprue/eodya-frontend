import Modals from "../components/common/Modal/Modals";

export function ModalsProvider({children} : {children : React.ReactNode}){
    return (
        <>
            <Modals/>
            {children}
        </>
    )
}