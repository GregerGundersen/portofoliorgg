import { Image } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

const SimpleSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (props.img1 && props.img2 && props.img3) {
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Image src={props.img1} />
          </div>
          <div>
            <Image src={props.img2} />
          </div>
          <div>
            <Image src={props.img3} />
          </div>
        </Slider>
      </div>
    );
  } else if (props.img1 && props.img2) {
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Image src={props.img1} />
          </div>
          <div>
            <Image src={props.img2} />
          </div>
        </Slider>
      </div>
    );
  } else if (props.img1) {
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Image src={props.img1} />
          </div>
        </Slider>
      </div>
    );
  }
};

export default SimpleSlider;

// export default class SimpleSlider extends Component {
//     render() {
//            const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };

//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
