import { useForm } from "react-hook-form";
import { useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import axios from "axios";

const MAX_LENGTH = 8;

type MypageInfo = {
    userId: number;
    nickname: string;
}

export default function FormNickname() {

    const { userInfo } = useAppSelector(state=>state.auth);
    const [changeShow,setChangeShow] = useState(false);
    const { register, watch, handleSubmit, setValue } = useForm();
    const displayName = watch("displayName",userInfo?.username);

    const [myUser,setMyUser] = useState<MypageInfo>()

    useEffect(()=>{
  
      axios.get('/api/v1/user/my/info',{
          headers : {
            Authorization : `${userInfo?.token}`
          }
      })
      .then(({data})=>{
        setMyUser(data);
      })
      .catch(err=>{
          console.log(err);
      });
  
    },[userInfo])

    useEffect(()=>{

        if(displayName.length >= MAX_LENGTH){
          setValue("displayName",displayName.substring(0,8));
        }
    
    },[displayName])

    const onSubmit = (data : any)=>{

        const displayname = data.displayName;

        axios.patch('/api/v1/user/nickname',{nickname : data.displayName},{
            headers : {
                "Content-Type" : "application/json",
                Authorization : `${userInfo?.token}`
            }
        })
        .then(()=>{
            setMyUser(prev=>{
                if(!prev) return;
                return ({
                    ...prev,
                    nickname : displayname,
                })
            })
        })
        .catch(err=>{
            console.log(err);
        })
        .finally(()=>{
            setChangeShow(false);
        })

    }

  return (
    <>
        {
            changeShow ?
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input 
                        {...register("displayName",{required : true})}
                        className='w-[121px] h-[31px] rounded border border-gray-200 px-1 py-[6px] box-border outline-none font-pretendard font-semibold tracking-custom' 
                        type="text" 
                        defaultValue={myUser?.nickname}
                        maxLength={MAX_LENGTH}
                    />
                    <div className='mt-[6px]'>
                        <button className='text-gray-300 text-[13px] mt-[3px] border-b border-gray-300' type='submit'>확인</button>
                    </div>
                </form>
            :
            <>
                <p className='text-lg font-semibold'>{myUser?.nickname}</p>
                <p className='text-gray-300 text-[13px] mt-[3px] border-b border-gray-300'><button type='button' onClick={()=>setChangeShow(true)}>닉네임 변경</button></p>
            </>
        }
    </>
    
  )
}
