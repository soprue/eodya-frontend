import { Link } from 'react-router-dom';

import logo from '../../assets/image/logo.svg';

function LoginPage() {
  const CLIENT_ID = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
  const REDIRECT_URI = `${process.env.REACT_APP_KAKAO_REDIRECT_URL}`;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <main className="w-full h-dvh flex flex-col justify-center items-center gap-[60px] font-pretendard">
      <div className="w-[276px] h-[276px] rounded-full bg-[#F0F0F0 flex justify-center items-center]">
        <img src={logo} alt="로고" />
      </div>

      <div className="max-w-[328px] w-full flex flex-col justify-center items-center gap-4">
        <button
          className="w-full h-[46px] bg-[#FAE100] rounded-[10px] font-semibold text-sm"
          onClick={() => (window.location.href = kakaoURL)}
        >
          카카오로 로그인
        </button>

        <Link to={'/'} className="font-semibold text-sm underline">
          로그인 없이 둘러보기
        </Link>
      </div>
    </main>
  );
}

export default LoginPage;
