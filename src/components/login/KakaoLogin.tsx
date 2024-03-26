function KakaoLogin() {
  const CLIENT_ID = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
  const REDIRECT_URI = `${process.env.REACT_APP_KAKAO_REDIRECT_URL}`;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

  return (
    <button onClick={() => (window.location.href = kakaoURL)}>
      카카오로 로그인
    </button>
  );
}

export default KakaoLogin;
