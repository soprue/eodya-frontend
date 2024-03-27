import ReactDOM from "react-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { close } from "../../../store/features/modal/slice";

export default function Modals() {
    
    const ModalValue = useAppSelector((state)=>state.modals);
    const dispatch = useAppDispatch()

    return ReactDOM.createPortal( // createPortal는 컴포넌트가 필요할때만 생성해줍니다.
        <>
            {ModalValue.map((modalInfo,index)=>{

                const {Component,props,isOpen} = modalInfo;

                const onClose = ()=>{ // onClose 함수를 생성해줍니다.
                    dispatch(close(Component));
                }

                return (
                    <Component key={index} onClose={onClose} isOpen={isOpen} {...props} /> // 컴포넌트를 보내줍니다.
                )

            })}
        </>, document.body // 생성되면 body 하단에 추가해줍니다.
    ) 

}