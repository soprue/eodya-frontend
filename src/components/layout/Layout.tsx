import { Outlet } from "react-router-dom";

// 모바일 기준으로 만들기 때문에 max-width을 720px 로 일단 잡아뒀습니다.
export default function Layout() {
  return (
    <div className="mx-auto max-w-3xl relative">
        <Outlet/>
    </div>
  )
}
