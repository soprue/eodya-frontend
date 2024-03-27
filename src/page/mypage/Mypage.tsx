import { Link } from 'react-router-dom'
import TopBar from '../../components/common/menu/TopBar'
import Navigation from '../../components/common/menu/Navigation'
import { ReactComponent as SettingSVG} from "../../assets/image/icon/setting.svg";
import { useState } from 'react';
import { GridLayout } from '../../components/mypage/GridLayout';
import { Image } from '../../components/mypage/Image';
import { Info } from '../../components/mypage/Info';

export default function Mypage() {

  const [step,setStep] = useState(0);

  const tapHanlder = (step : number) => {
    setStep(step);
  }

  return (
    <main className='h-screen'>

      <div className='h-[calc(100vh-70px)] flex-col flex'>

        <div className='flex-none'>
          <TopBar>
            <SettingSVG className="fill-gray-800 absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"/>
          </TopBar>

          <div className="flex items-center font-pretendard tracking-custom leading-none">
            <div className="w-[68px] h-[68px] bg-[#EBEBEB] rounded-full" ></div> 
            <div className='ml-4'>
              <p className='text-lg font-semibold'>어댜4885</p>
              <p className='text-gray-300 text-[13px] mt-[3px] border-b border-gray-300'><Link to={'/'}>계정 정보 수정</Link></p>
            </div>
          </div>

          <div className="flex font-semibold border-b text-gray-300 border-gray-300 text-[13px] mt-6">
              <button onClick={()=>tapHanlder(0)} className={`flex-1 py-4 relative after:absolute after:translate-y-1/2 after:bottom-0 after:w-full after:h-1 after:bg-primary ${step === 0 ? "after:block text-primary" : "after:hidden"}`}>북마크 10</button>
              <button onClick={()=>tapHanlder(1)} className={`flex-1 py-4 relative after:absolute after:translate-y-1/2 after:bottom-0 after:w-full after:h-1 after:bg-primary ${step === 1 ? "after:block text-primary" : "after:hidden"}`}>제보 10</button>
              <button onClick={()=>tapHanlder(2)} className={`flex-1 py-4 relative after:absolute after:translate-y-1/2 after:bottom-0 after:w-full after:h-1 after:bg-primary ${step === 2 ? "after:block text-primary" : "after:hidden"}`}>후기 12</button> 
          </div>
        </div>

        <div className="overflow-y-auto h-full">
          
          {
            step === 0 &&
            Array.from({length : 100}).map((e,i)=>(
              <GridLayout index={i} key={i}>
                <div className='flex'>
                  <Image/>
                  <Info/>
                </div>
                {/* 북마크 공통 컴포넌트로 수정 */}
              </GridLayout>
            ))
          }

          {
            step === 1 &&
            Array.from({length : 100}).map((e,i)=>(
              <GridLayout index={i} key={i}>
                <Info/>
              </GridLayout>
            ))
          }

        </div>
      </div>

      <Navigation />

    </main> 
  )
} 





