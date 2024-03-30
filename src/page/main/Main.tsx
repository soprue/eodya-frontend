import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../store/hooks';
import Btn from '../../components/common/btn/Btn';
import Input from '../../components/common/input/Input';
import Navigation from '../../components/common/menu/Navigation';
import TopBar from '../../components/common/menu/TopBar';
import { logout } from '../../store/features/auth/authSlice';

export default function Main() {
  const dispatch = useDispatch();
  const userInfo = useAppSelector((state) => state.auth.userInfo);

  return (
    <main className="bg-black h-dvh">
      <Navigation />
      <Btn type="button">내용</Btn>
      <TopBar>
        <p className="text-center absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
          스팟 등록
        </p>
      </TopBar>

      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        {userInfo && userInfo.username} 화이팅!
      </p>
      <Input placeholder="입력" />

      {/* 임시 로그아웃 버튼 */}
      <button onClick={() => dispatch(logout())} className="bg-white p-2 m-2">
        로그아웃
      </button>
    </main>
  );
}
