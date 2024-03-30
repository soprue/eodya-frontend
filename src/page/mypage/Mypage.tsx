import TopBar from '../../components/common/menu/TopBar'
import Navigation from '../../components/common/menu/Navigation'
import { ReactComponent as SettingSVG} from "../../assets/image/icon/setting.svg";
import { useEffect, useState } from 'react';
import { GridLayout } from '../../components/mypage/GridLayout';
import { Image } from '../../components/mypage/Image';
import { ReactComponent as Vintage} from "../../assets/image/icon/vintage.svg";
import { BookMarkBtn } from '../../components/common/btn/BookMarkBtn';
import FlowerTag from '../../components/common/tag/FlowerTag';

import Modal from "react-modal";
import { useAppSelector } from '../../store/hooks';
import FormNickname from '../../components/mypage/FormNickname';
import BookPage from '../../components/mypage/BookPage';
import ReviewPage from '../../components/mypage/ReviewPage';
import axios from 'axios';

export default function Mypage() {
    
  // modal
  const [isOpen,setIsOpen] = useState(false);
  const onClose = ()=>{
    setIsOpen(false);
  }

  // step
  const [step,setStep] = useState(0);
  const tapHanlder = (step : number) => {
    setStep(step);
  }

  return (
    <>
      <main className='h-screen'>

        <div className='h-[calc(100vh-70px)] flex-col flex'>

          <div className='flex-none'>
            
            <TopBar
              hide={true}
            >
              <SettingSVG className="fill-gray-800 absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"/>
            </TopBar>

            <div className="flex items-center font-pretendard tracking-custom leading-none px-6">
              <div className="w-[68px] h-[68px] bg-[#EBEBEB] rounded-full relative"> 
                <Vintage  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
              </div> 
              <div className='ml-4'>
                <FormNickname/>
              </div>
            </div>

            <div className="flex font-semibold border-b text-gray-300 border-gray-300 text-[13px] mt-6">
                <button onClick={()=>tapHanlder(0)} className={`flex-1 py-4 relative after:absolute after:translate-y-1/2 after:bottom-0 after:w-full after:h-1 after:bg-primary ${step === 0 ? "after:block text-primary" : "after:hidden"}`}>북마크 10</button>
                {/* <button onClick={()=>tapHanlder(1)} className={`flex-1 py-4 relative after:absolute after:translate-y-1/2 after:bottom-0 after:w-full after:h-1 after:bg-primary ${step === 1 ? "after:block text-primary" : "after:hidden"}`}>제보 10</button> */}
                <button onClick={()=>tapHanlder(2)} className={`flex-1 py-4 relative after:absolute after:translate-y-1/2 after:bottom-0 after:w-full after:h-1 after:bg-primary ${step === 2 ? "after:block text-primary" : "after:hidden"}`}>후기 12</button> 
            </div>
          </div>

{/*  scrollbar-hide */}
          <div className="overflow-y-auto h-full">
            {
              step === 0 && <BookPage/>
            }
          </div>

          {/* <div className="overflow-y-auto h-full scrollbar-hide">
            
            

            {
              step === 1 &&
              Array.from({length : 100}).map((e,i)=>(
                
              ))
            }

            {
              step === 2 &&
              Array.from({length : 100}).map((e,i)=><ReviewPage key={i} index={i} setIsOpen={setIsOpen}/>)
            }

          </div> */}

        </div>

        <Navigation />

      </main> 
      <ComingModal isOpen={isOpen} onClose={onClose}/>
    </>
  )
}



function ComingModal({isOpen,onClose} : {isOpen : boolean, onClose : any}) {

  const handleClose = ()=>{
      onClose();
  }

  return (
      <Modal
          isOpen={isOpen}
          onRequestClose={handleClose}
          style={{
          content : {
              position : "absolute",
              overflow : "hidden",
              left : "50%",
              top : "50%",
              right: 'auto',
              bottom: 'auto',
              padding : 0,
              marginRight: '-50%',
              borderRadius : "10px",
              transform: 'translate(-50%, -50%)',
              width : `${280/360*100}%`,
              height : 'auto',
              maxWidth : 280,
          },
          overlay : {
              zIndex : 9999,
              background : "rgba(000,000,000,0.5)"
          }
          }}
      >
          <div className="font-pretendard tracking-custom leading-none h-full">
            <div className='h-[82px] flex items-center justify-center text-base font-normal leading-[20.8px]'>
              준비중 입니다.
            </div>
            <button className='h-11 flex items-center justify-center w-full border-t border-gray-100' onClick={handleClose}>확인</button>
          </div>
      </Modal>
  )

}