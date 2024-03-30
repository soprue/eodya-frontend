import bg from '../../assets/image/bg.svg';
import logo from '../../assets/image/logo.svg';

function SplashScreen() {
  return (
    <div className="mx-auto max-w-lg h-dvh relative bg-white overflow-hidden">
      <img src={bg} alt="배경 이미지" className="w-full" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src={logo} alt="로고" />
      </div>
    </div>
  );
}

export default SplashScreen;
