import { Link } from 'react-router-dom'
import TopBar from '../../components/common/menu/TopBar'
import Navigation from '../../components/common/menu/Navigation'
import { ReactComponent as SettingSVG} from "../../assets/image/icon/setting.svg";
import { useState } from 'react';
import { GridLayout } from '../../components/mypage/GridLayout';
import { Image } from '../../components/mypage/Image';
import { ReactComponent as Vintage} from "../../assets/image/icon/vintage.svg";
import { BookMarkBtn } from '../../components/common/btn/BookMarkBtn';
import FlowerTag from '../../components/common/tag/FlowerTag';
import { ReactComponent as HorizSVG} from "../../assets/image/icon/horiz.svg";
import Modal from "react-modal";

export default function Mypage() {

  const [isOpen,setIsOpen] = useState(false);

  const onClose = ()=>{
    setIsOpen(false);
  }

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
                <p className='text-lg font-semibold'>어댜4885</p>
                <p className='text-gray-300 text-[13px] mt-[3px] border-b border-gray-300'><Link to={'/'}>계정 정보 수정</Link></p>
              </div>
            </div>

            <div className="flex font-semibold border-b text-gray-300 border-gray-300 text-[13px] mt-6">
                <button onClick={()=>tapHanlder(0)} className={`flex-1 py-4 relative after:absolute after:translate-y-1/2 after:bottom-0 after:w-full after:h-1 after:bg-primary ${step === 0 ? "after:block text-primary" : "after:hidden"}`}>북마크 10</button>
                {/* <button onClick={()=>tapHanlder(1)} className={`flex-1 py-4 relative after:absolute after:translate-y-1/2 after:bottom-0 after:w-full after:h-1 after:bg-primary ${step === 1 ? "after:block text-primary" : "after:hidden"}`}>제보 10</button> */}
                <button onClick={()=>tapHanlder(2)} className={`flex-1 py-4 relative after:absolute after:translate-y-1/2 after:bottom-0 after:w-full after:h-1 after:bg-primary ${step === 2 ? "after:block text-primary" : "after:hidden"}`}>후기 12</button> 
            </div>
          </div>

          <div className="overflow-y-auto h-full scrollbar-hide">
            
            {
              step === 0 &&
              Array.from({length : 100}).map((e,i)=>(
                <GridLayout index={i} key={i}>
                  <div className='flex relative pr-6'>
                    <div className='w-[100px] relative flex-none'>
                      <div className='absolute top-0 left-0 z-10 leading-none mt-[10px] ml-[10px]'>
                        <FlowerTag placeState='개화'/>
                      </div>
                      <Image/>
                    </div>
                    <dl className='ml-3 tracking-custom'>
                      <dt className='text-base text-gray-950 font-bold leading-4'>애기능 동산</dt>
                      <dd className='text-sm font-normal mt-[6px] leading-[21px] text-gray-700'>서울 성북구 안암로 73-15</dd>
                    </dl>
                    <div className="absolute right-0 top-0">
                      <BookMarkBtn/>
                    </div>
                  </div>
                </GridLayout>
              ))
            }

            {/* {
              step === 1 &&
              Array.from({length : 100}).map((e,i)=>(
                <GridLayout index={i} key={i}>
                  <div className='tracking-custom'>
                    <dl>
                      <dt className="text-base font-bold leading-4 text-gray-950">애기능 동산</dt>
                      <dd className='text-sm leading-[21px] font-normal mt-[6px] text-gray-500'>서울 성북구 안암로 73-15</dd>
                    </dl>
                    <p className='text-sm leading-[21px] font-normal text-gray-900 mt-[6px]'>
                      대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다.
                      새로운 회계연도가 개시될 때까지 예산안이 의결
                    </p>
                  </div>
                </GridLayout>
              ))
            } */}

            {
              step === 2 &&
              Array.from({length : 100}).map((e,i)=>(
                <GridLayout index={i} key={i}>
                  <p className='text-gray-300 text-[13px] tracking-custom leading-none '>2024.04.18</p>
                  <div className='flex relative mt-2'>
                    <div className='w-[80px] relative flex-none'>
                      <div className='absolute top-0 left-0 z-10 leading-none mt-[10px] ml-[10px]'>
                        <FlowerTag placeState='개화'/>
                      </div>
                      <Image/>
                    </div>
                    <dl className='ml-3 tracking-custom pr-5'>
                      <dt className='text-base text-gray-950 font-bold leading-4'>애기능 동산</dt>
                      <dd className='text-sm leading-[21px] font-normal text-gray-900 mt-[6px]'>
                        대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다.
                        새로운 회계연도가 개시될 때까지 예산안이 의결
                      </dd>
                    </dl>
                  </div>
                  <div className='flex justify-end mt-2 text-[13px] tracking-custom leading-none text-gray-300'>
                    <button onClick={()=>setIsOpen(true)}><HorizSVG/></button>
                  </div>
                </GridLayout>
              ))
            }

          </div>
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