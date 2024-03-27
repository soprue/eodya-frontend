import TopBar from '../../components/common/menu/TopBar'

export default function Mypage() {
  return (
    <main className='h-screen'>
        <TopBar/>

        <div className="flex font-semibold border-b text-gray-300 border-gray-300">
            <button className='flex-1 py-4'>북마크 10</button>
            <button className='flex-1 py-4 relative after:block after:absolute after:translate-y-1/2 after:bottom-0 after:w-full after:h-1 after:bg-primary'>작성 후기 12</button> 
        </div>

    </main>
  )
}
