import { ReactComponent as More} from "../../assets/image/icon/more.svg";
import { ListLayout } from "./ListLayout";

export function TourList({tourOpen,setTourOpen} : {tourOpen : boolean,setTourOpen:React.Dispatch<React.SetStateAction<boolean>>}){
    return (
      <div onClick={()=>setTourOpen(true)} className={`bg-white pt-7 font-pretendard h-[calc(100vh-70px)] ${tourOpen ? "overflow-y-auto" : ""}`}>
        {/* <TopBar/> */}
        <div className="flex justify-between items-center px-4">
          <h2 className="text-xl tracking-[-0.02em] font-semibold">근처의 명소</h2>
          <p className="flex items-center text-[13px] tracking-[-0.02em] font-medium">정렬 <More className="fill-gray-800"/></p>
        </div>
        {
          [0,1,2,3,4,5].map(e=>(
            <ListLayout key={e}/>
          ))
        }
      </div>
    )
}