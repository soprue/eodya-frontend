import { Link, useLocation } from "react-router-dom";
import {ReactComponent as Home} from "../../../assets/image/icon/home.svg";
import {ReactComponent as Edit} from "../../../assets/image/icon/edit.svg";
import {ReactComponent as Person} from "../../../assets/image/icon/person.svg";

// 하단 네비게이션바
export default function Navigation() {

    const navItem = [
        {
            component : Home,
            path : '/',
            name : "Home"
        },
        {
            component : Edit,
            path : '/new',
            name : "등록하기"
        },
        {
            component : Person,
            path : '/mypage',
            name : "마이페이지"
        }
    ]

  return (
    <nav className="absolute bottom-0 h-[70px] w-full flex justify-between text-[11px] font-pretendard font-semibold text-center bg-white">
        {navItem.map((e,i)=><Dl key={i} Component={e.component} path={e.path} name={e.name}/>)}
    </nav>
  )
  
}


interface DlProps {
    Component : React.FunctionComponent<any>;
    path : string;
    name : string
}

function Dl({Component,path,name} : DlProps){

    const {pathname} = useLocation();

    return (
        <Link to={path} className={`flex-1 h-full flex items-center justify-center ${pathname === path || pathname.startsWith(`${path}/`) ? "text-primary" : "text-gray-300"}`}>
            <dl>
                <dt><Component className={`mx-auto ${pathname === path || pathname.startsWith(`${path}/`) ?  "fill-primary" : "fill-gray-300"}`}/></dt>
                <dd className="mt-[2px]">{name}</dd>
            </dl>
        </Link>
    )
    
}