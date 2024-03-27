import { useNavigate } from "react-router-dom";

import prev from "../../../assets/image/icon/prev.svg";
import close from "../../../assets/image/icon/close.svg";

/* 
  기본적으로 prev 버튼을 생성하고
  children 값을 넣어 원하는 디자인으로 수정할수 있게 했습니다.

  canClose: TopBar에 X 버튼 유무
  onBack: 뒤로가기 버튼 함수
*/

export default function TopBar({
  className,
  children,
  canClose,
  onBack,
}: {
  className?: React.ReactNode;
  children?: React.ReactNode;
  canClose?: boolean;
  onBack?: () => void;
}) {
  const navigate = useNavigate();

  return (
    <div
      className={`relative z-10 h-14 bg-white ${className ? className : ""}`}
    >
      <button
        type="button"
        className="absolute left-4 top-1/2 -translate-y-1/2"
        onClick={onBack}
      >
        <img src={prev} alt="뒤로 가기" />
      </button>
      {children}
      {canClose && (
        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2"
          onClick={() => navigate(-1)}
        >
          <img src={close} alt="이전 페이지" />
        </button>
      )}
    </div>
  );
}
