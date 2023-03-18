import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { CNTT, KNM, TEST } from "../../images/index.js";
function Banner({ Images }) {
  return (
    <>
      <div className="w-full h-full">
        <AwesomeSlider className="h-full">
          <div className="w-full h-full scale-50" data-src={Images[0].url} />
          <div className="w-full h-full" data-src={Images[1].url} />
          <div className="w-full h-full" data-src={Images[2].url} />
          <div className="w-full h-full" data-src={Images[3].url} />
          <div className="w-full h-full" data-src={Images[4].url} />
          <div className="w-full h-full" data-src={Images[5].url} />
          <div className="w-full h-full" data-src={Images[6].url} />
          <div className="w-full h-full" data-src={Images[7].url} />
        </AwesomeSlider>
      </div>
    </>
  );
}

export default Banner;
