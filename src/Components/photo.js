import "./photo.css";
import i1 from "../Images/11.jpeg";
import i2 from "../Images/10.jpeg";
import i3 from "../Images/7.jpeg";
import i4 from "../Images/8.jpeg";
import i5 from "../Images/4.jpeg";
import i6 from "../Images/9.jpeg";
import i7 from "../Images/1.jpeg";

const Photo = () => {
  return (
    <section class="photo">
      <div class="photo-gallary">
        <div class="eel eel1">
          <img src={i1} alt="" />
        </div>
        <div class="eel eel2">
          <img src={i2} alt="" />
        </div>
        <div class="eel eel3">
          <img src={i3} alt="" />
        </div>
        <div class="eel eel4">
          <img src={i4} alt="" />
        </div>
        <div class="eel eel5">
          <img src={i5} alt="" />
        </div>
        <div class="eel eel6">
          <img src={i6} alt="" />
        </div>
        <div class="eel eel7">
          <img src={i7} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Photo;
