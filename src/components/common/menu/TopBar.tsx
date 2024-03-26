import { useNavigate } from "react-router-dom";
import prev from "../../../assets/image/icon/prev.svg";

/* 

  기본적으로 prev 버튼을 생성하고
  children 값을 넣어 원하는 디자인으로 수정할수 있게 했습니다.

*/

export default function TopBar({children} : {children? : React.ReactNode}) {

    const navigate = useNavigate();

  return (
    <div className="h-14 relative font-pretendard bg-white">
        <button type="button" className="absolute top-1/2 -translate-y-1/2 left-4" onClick={()=>navigate(-1)}>
            <img src={prev} alt="이전 페이지" />
        </button>
        {children}
    </div>
  )
}
