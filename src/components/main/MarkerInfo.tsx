import { open } from "../../store/features/main/spotView/slice";
import { useAppDispatch } from "../../store/hooks";
import { ListLayout } from "./ListLayout";

// 클릭 info
export function MarkerInfo(){

    const dispatch = useAppDispatch();
  
    const onClick=()=>{
      dispatch(open());
    }
  
    return(
      <div
        onClick={onClick}  
        className="pt-4 bg-white rounded-t-[10px] rounded-r-[10px]">
        {
          [
            {
              placeState : "만개",
              image : [0,1]
            }
          ].map((e,i)=><ListLayout item={e} key={i}/>)
        }
      </div>
    )
}