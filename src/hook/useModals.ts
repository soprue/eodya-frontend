import { open,close } from "../store/features/modal/slice";
import { useAppDispatch } from "../store/hooks";
import { ModalComponentType } from "../types/ModalsType";

export default function useModals() {

    const dispatch = useAppDispatch();

    // modal을 열어주는 함수
    const openModal = ( Component : any, props : any) => {
        dispatch(open({Component,props}));
    }

    // modal을 닫아주는 함수
    const closeModal = ( Component : ModalComponentType) => {
        dispatch(close(Component));
    }

    return {openModal,closeModal};
}
