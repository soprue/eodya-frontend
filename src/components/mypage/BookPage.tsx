import { GridLayout } from './GridLayout'
import FlowerTag from '../common/tag/FlowerTag'
import { Image } from './Image'
import { BookMarkBtn } from '../common/btn/BookMarkBtn'
import { useAppSelector } from '../../store/hooks';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';

type BookType = {

  totalBookmarkCount: number;
  bookmarks: BookMarkType[];
  hasNext: boolean;

}

type BookMarkType = {
  placeId: number;
  image: string;
  name: string;
  addressDetail: string;
  bookmarkCount: number;
  bookmarkStatus: boolean;
  placeStatus: string;
}



export default function BookPage() {

  const { userInfo } = useAppSelector(state=>state.auth);

  return (
    <div>
      <GridLayout index={1}>
          <div className='flex relative pr-6'>
            <div className='w-[100px] relative flex-none'>
                <div className='absolute top-0 left-0 z-10 leading-none mt-[10px] ml-[10px]'>
                <FlowerTag placeState='개화'/>
                </div>
                <Image src={""}/>
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
    </div>
  )
}
