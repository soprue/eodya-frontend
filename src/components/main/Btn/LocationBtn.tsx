import {ReactComponent as LocationSVG} from "../../../assets/image/icon/location.svg";

// 내 위치로 다시 이동
export const LocationBtn = ({onClick} : {onClick?: React.MouseEventHandler<HTMLButtonElement>}) => {

  return (
    <button onClick={onClick} className="w-11 h-11 rounded-full flex items-center justify-center z-50 bg-white shadow-[0px_0px_3px_0px_#00000040]">
      <LocationSVG/>
    </button>
  )
  
}