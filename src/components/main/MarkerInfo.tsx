import { open } from "../../store/features/main/spotView/slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ListLayout } from "./ListLayout";

// 클릭 info
export function MarkerInfo(){

    const dispatch = useAppDispatch();
    const infoPlace = useAppSelector(state=>state.InfoPlace);
      
    const onClick=()=>{
      dispatch(open());
    }
  
    return(
      <div
        onClick={onClick}  
        className="pt-4 bg-white rounded-t-[10px] rounded-r-[10px]">
        {
          [infoPlace.info].map((e,i)=><ListLayout item={e} key={i}/>)
        }
      </div>
    )
}