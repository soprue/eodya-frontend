import {ReactComponent as Prev} from "../../../assets/image/icon/prev.svg";

/* 
  기본적으로 prev 버튼을 생성하고
  children 값을 넣어 원하는 디자인으로 수정할 수 있게 했습니다.
  onClick 값을 넣어 <- 버튼의 hanlder를 넣을 수 있습니다.

*/

export default function TopBar({
  className,
  prevClassName,
  children,
  onClick,
  hide
}: {
  className?: React.ReactNode,
  prevClassName?: React.ReactNode,
  children?: React.ReactNode,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  hide? : boolean
}) {
  return (
    <div
      className={`relative z-10 h-14 ${className ? className : ""}`}
    >
      {
        !hide ?
        <button
          type="button"
          className="absolute left-4 top-1/2 -translate-y-1/2"
          onClick={onClick}
        >
          <Prev fill="#424242" className={`${prevClassName}`}/>
        </button>
        : null
      }
      {children}
    </div>
  );
}
