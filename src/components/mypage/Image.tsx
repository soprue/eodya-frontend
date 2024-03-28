export function Image(){
    return (
      <div className={`relative w-full bg-black after:block after:pb-[100%] flex-none rounded-lg overflow-hidden`}>
        <img className="absolute top-0 left-0 w-full h-full object-cover object-center" src="" alt="" />
      </div>
    )
}