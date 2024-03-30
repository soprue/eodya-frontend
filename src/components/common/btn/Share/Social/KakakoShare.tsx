import { initKakao } from "kakao-js-sdk";

export default function KakakoShare({children} : {children : React.ReactNode}){

    const currentUrl = window.location.href;

    const onClick = ()=>{

        initKakao(process.env.REACT_APP_KAKAO_JAVASCRIPT_API_KEY || "").then((isloaded)=>{
            if(isloaded){

                const Kakao = window.Kakao;

                Kakao.Share.sendDefault({
                    objectType : "feed",
                    content : {
                        title : "어댜",
                        description : "테스트 메세지입니다.",
                        imageUrl : "https://picsum.photos/1280/720",
                        link : {
                            mobileWebUrl : currentUrl,
                            webUrl : currentUrl
                        }
                    },
                    buttons : [
                        {
                            title : "어댜 보러가기",
                            link : {
                                mobileWebUrl : currentUrl,
                                webUrl : currentUrl
                            }
                        }
                    ]
                })

            }
        })
        .catch(onrejected=>{
            console.log(onrejected);
        })

    }

    return (
        <button onClick={onClick}>{children}</button>
    )

}