import Modal from "react-modal";
import Facebook from "../../../../../assets/image/social/Facebook.png";
import Band from "../../../../../assets/image/social/Band.png";
import Twitter from "../../../../../assets/image/social/Twitter.png";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import BandShare from "../Social/BandShare";
import KakakoShare from "../Social/KakakoShare";
import { SnsBox } from "../SnsBox";


export default function ShareModal({isOpen,onClose} : {isOpen : boolean,onClose : any}) {

    const currentUrl = window.location.href;

    const handleClose = ()=>{
        onClose();
    }

  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        style={{
            content : {
                position : "absolute",
                overflow : "hidden",
                left : "50%",
                top : "50%",
                right: 'auto',
                bottom: 'auto',
                padding : 0,
                marginRight: '-50%',
                borderRadius : "10px",
                transform: 'translate(-50%, -50%)',
                width : `${280/360*100}%`,
                height : 'auto',
                maxWidth : 280,
            },
            overlay : {
                zIndex : 9999,
                background : "rgba(000,000,000,0.5)"
            }
        }}
    >
        <div className="text-center pt-6 pb-5 px-5 font-pretendard tracking-custom">
            <div>
                <h2 className="text-lg leading-[23.4px] font-semibold text-gray-950">공유하기</h2>
                <p className="mt-2 text-base leading-[20.8px] font-normal text-gray-700">같이 가고싶은 친구에게<br/>공유해 보세요</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mt-6">
                <FacebookShareButton url={currentUrl}>
                    <SnsBox>
                        <img className="absolute top-0 left-0 w-full h-full object-cover object-center" src={Facebook} alt="" />
                    </SnsBox>
                </FacebookShareButton>
                <BandShare>
                    <SnsBox>
                        <img className="absolute top-0 left-0 w-full h-full object-cover object-center" src={Band} alt="" />
                    </SnsBox>
                </BandShare>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
                <TwitterShareButton url={currentUrl}>
                    <SnsBox>
                        <img className="absolute top-0 left-0 w-full h-full object-cover object-center" src={Twitter} alt="" />
                    </SnsBox>
                </TwitterShareButton>
                <KakakoShare>
                    <SnsBox>
                        Kakao
                    </SnsBox>
                </KakakoShare>
                <CopyToClipboard text={currentUrl}>
                    <button>
                        <SnsBox className="border rounded border-gray-200 ">
                            <p className="text-gray-200 font-bold tracking-custom underline decoration-2 leading-[20.8px] underline-offset-4">URL</p>
                        </SnsBox>
                    </button>
                </CopyToClipboard>
            </div>
            <div className="text-right mt-6 text-gray-600 leading-[20.8px] font-normal">
                <button onClick={handleClose}>취소</button>
            </div>
        </div>
    </Modal>
  )
}


