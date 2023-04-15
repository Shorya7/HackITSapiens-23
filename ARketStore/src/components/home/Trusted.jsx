
import { TbWorldUpload } from "react-icons/tb";
import {BiDollarCircle,BiRupee,BiCloudDownload,BiLayer} from "react-icons/bi";
const Trusted = () => {
  return (
    <>    
    <h1 className="trust_head">Trusted</h1><div className="trust_main">
    
      <div className="trust_icon">
        <TbWorldUpload/>
      </div>
      <div className="trust_icon">
        <BiDollarCircle/>
      </div>
      <div className="trust_icon">
        <BiRupee/>
      </div>
      <div className="trust_icon">
        <BiCloudDownload/>
      </div>
      <div className="trust_icon">
        <BiLayer/>
      </div>
    </div>
    </>

  )
}

export default Trusted