// input창에 입력부분과 아이콘 클릭시 submit이 들어가게 컴포넌트를 구성했습니다.
export default function Input({
    name,
    id,
    type,
    placeholder,
    maxLength,
    className,
    onChange,
    onInput
} : React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div
        className={`${className ? className : ""} w-full relative rounded-[10px] h-[46px] font-pretendard overflow-hidden`}
    >
        <input
            className="px-5 min-w-0 w-full h-full text-base tracking-[-0.02em] leading-4 outline-none"
            onInput={onInput}
            onChange={onChange}
            name={name}
            id={id}
            maxLength={maxLength}
            type={type}
            placeholder={placeholder}
        ></input>
        <button 
            className="absolute right-5 top-1/2 -translate-y-1/2"
            type="submit"
        >검색</button>
    </div>
  )
}