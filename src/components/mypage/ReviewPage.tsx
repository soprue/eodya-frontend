import React from 'react'
import { GridLayout } from './GridLayout'
import FlowerTag from '../common/tag/FlowerTag'
import { Image } from './Image'
import { ReactComponent as HorizSVG} from "../../assets/image/icon/horiz.svg";

export default function ReviewPage({index,setIsOpen}: {index : number,setIsOpen : any}) {
  return (
    <GridLayout index={index}>
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
  )
}
