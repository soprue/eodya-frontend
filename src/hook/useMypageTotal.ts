import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";

export const useMypageTotal = ()=>{

    // user
    const { userInfo } = useAppSelector(state=>state.auth);

    const [totalBookmarkCount,setTotalBookmarkCount] = useState(0);
    const [reviewTotalCount,setReviewTotalCount] = useState(0);
  
    useEffect(()=>{
  
      axios(`/api/v1/user/my/bookmarks?page=1&size=1`,{
        headers : {
          Authorization : userInfo?.token
        }
      })
        .then(({data} : {data : any})=>{
  
          setTotalBookmarkCount(data.totalBookmarkCount);
  
        })
        .catch(error => {
          console.error('Error fetching data:', error);
      });

      axios(`/api/v1/user/my/reviews?page=1&size=1`,{
        headers : {
          Authorization : userInfo?.token
        }
      })
        .then(({data} : {data : any})=>{
  
            setReviewTotalCount(data.reviewTotalCount);
  
        })
        .catch(error => {
          console.error('Error fetching data:', error);
      });
  
    },[userInfo]);


    return {totalBookmarkCount,reviewTotalCount};

}