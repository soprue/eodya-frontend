export interface ModalComponentType {
    Component : any; // 따로 Modal 컴포넌트를 생성한것을 넣어줍니다.
}
export interface ModalPropsType {
    props : any; // 안에 들어갈 데이터를 따로 보내주는 Props
}

export interface ModalsType extends ModalComponentType, ModalPropsType {
    isOpen : boolean; // ReactModal lib에서는 isOpen으로 Modal을 출력합니다.
}