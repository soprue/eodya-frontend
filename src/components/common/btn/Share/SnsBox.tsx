export function SnsBox({children,className} : {children : React.ReactNode,className? : React.ReactNode}){
    return (
        <div className={`w-11 h-11 flex-none flex items-center justify-center relative ${className ? className : ""}`}>
            {children}
        </div>
    )
}