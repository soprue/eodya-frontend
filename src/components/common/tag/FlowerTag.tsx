// 개화 상태값에 따라 배경색이 들어가집니다.

export default function FlowerTag({placeState} : {placeState : string}) {

    let bgName = "";

    switch(placeState){
        case "개화" :
            bgName = "bg-success-200"
            break;
        case "만개" :
            bgName = "bg-primary"
            break;
        case "내년에 만나요" :
            bgName = "bg-gray-200"
            break;
    }


  return (
    <div className={`text-white inline-block rounded font-semibold text-[10px] leading-none tracking-custom py-1 px-[6px] ${bgName}`}>{placeState}</div>
  )
}
