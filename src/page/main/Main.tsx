import Btn from "../../components/common/btn/Btn";
import Input from "../../components/common/input/Input";
import Navigation from "../../components/common/menu/Navigation";
import TopBar from "../../components/common/menu/TopBar";

export default function Main() {
  return (
    <main className="h-dvh bg-black">
      <Navigation />
      <Btn type="button">내용</Btn>
      <TopBar>
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          스팟 등록
        </p>
      </TopBar>
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        화이팅!
      </p>
      <Input placeholder="입력" />
    </main>
  );
}
