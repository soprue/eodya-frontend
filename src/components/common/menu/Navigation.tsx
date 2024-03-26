import { Link } from "react-router-dom";
import home from "../../../assets/image/icon/home.svg";
import edit from "../../../assets/image/icon/edit.svg";
import person from "../../../assets/image/icon/person.svg";

// 하단 네비게이션바
export default function Navigation() {

  return (
    <nav className="absolute bottom-0 h-[70px] w-full flex justify-between text-[11px] font-pretendard font-semibold text-center text-primary bg-white">
        <Link to={'/'} className="flex-1 h-full flex items-center justify-center">
            <dl>
                <dt><img className="mx-auto" src={home} alt="home 버튼" /></dt>
                <dd className="mt-[2px]">Home</dd>
            </dl>
        </Link>
        <Link to={'/'} className="flex-1 h-full flex items-center justify-center">
            <dl>
                <dt><img className="mx-auto" src={edit} alt="등록하기 버튼" /></dt>
                <dd className="mt-[2px]">등록하기</dd>
            </dl>
        </Link>
        <Link to={'/'} className="flex-1 h-full flex items-center justify-center">
            <dl>
                <dt><img className="mx-auto" src={person} alt="마이페이지 버튼" /></dt>
                <dd className="mt-[2px]">마이페이지</dd>
            </dl>
        </Link>
    </nav>
  )
  
}
