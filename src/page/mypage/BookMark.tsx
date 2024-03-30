import TopBar from '../../components/common/menu/TopBar'
import Navigation from '../../components/common/menu/Navigation'
import { ReactComponent as SettingSVG} from "../../assets/image/icon/setting.svg";
import { useEffect, useRef, useState } from 'react';
import { ReactComponent as Vintage} from "../../assets/image/icon/vintage.svg";
import { useAppSelector } from '../../store/hooks';
import FormNickname from '../../components/mypage/FormNickname';
import BookPage from '../../components/mypage/BookPage';
import axios from 'axios';
import ComingModal from '../../components/mypage/Modal/ComingModal';
import { Link } from 'react-router-dom';


export interface RootInterface {
    totalBookmarkCount: number;
    bookmarks: Bookmark[];
    hasNext: boolean;
  }
  
export interface Bookmark {
    placeId: number;
    image: string;
    name: string;
    addressDetail: string;
    bookmarkCount: number;
    bookmarkStatus: boolean;
    placeStatus: string;
}

export default function BookMark() {
    
  // modal
  const [isOpen,setIsOpen] = useState(false);
  const onClose = ()=>{
    setIsOpen(false);
  }

  // user
  const { userInfo } = useAppSelector(state=>state.auth);

  const [bookmarks, setBookmarks] = useState<RootInterface>({
    totalBookmarkCount: 0,
    bookmarks: [],
    hasNext: false
  });

  useEffect(()=>{

    axios.get('/api/v1/user/my/bookmarks?page=1&size=10',{
        headers : {
            Authorization : userInfo?.token
        }
    })
    .then(({data})=>{
        setBookmarks(data);
    })
    .catch(err=>{
        console.error(err);
    })

  },[userInfo])

  return (
    <>
      <main className='h-screen'>

        <div className='h-[calc(100vh-70px)] flex-col flex'>

          <div className='flex-none'>
            
            <TopBar
              hide={true}
            >
              <SettingSVG 
                onClick={()=>setIsOpen(true)}
                className="fill-gray-800 absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
              />
            </TopBar>

            <div className="flex items-center font-pretendard tracking-custom leading-none px-6">
              <div className="w-[68px] h-[68px] bg-[#EBEBEB] rounded-full relative"> 
                <Vintage  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
              </div> 
              <div className='ml-4'>
                <FormNickname/>
              </div>
            </div>

            <div className="flex font-semibold border-b text-gray-300 border-gray-300 text-[13px] mt-6 text-center">
                <Link to={'/mypage'} className={`flex-1 py-4 relative after:absolute after:translate-y-1/2 after:bottom-0 after:w-full after:h-1 after:bg-primary after:block text-primary "`}>북마크 10</Link>
                <Link to={'/mypage/review'} className={`flex-1 py-4 relative after:absolute after:translate-y-1/2 after:bottom-0 after:w-full after:h-1 after:bg-primar`}>후기 12</Link> 
            </div>
          </div>

          <div className="overflow-y-auto h-full">
            {
                bookmarks.bookmarks.map((bookmark,i) => <BookPage item={bookmark} key={i} index={i} />)
            }
          </div>

        </div>

        <Navigation />

      </main> 
      <ComingModal isOpen={isOpen} onClose={onClose}/>
    </>
  )
}