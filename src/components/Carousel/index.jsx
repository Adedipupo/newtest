import React from "react";
import { Carousel } from "react-responsive-carousel";

const Slider = () => (
  <Carousel autoPlay>
    <div>
      <img alt="" src="https://nofilmschool.com/sites/default/files/styles/facebook/public/joker-venince-film-festival-awards-season-contender_0.jpg?itok=cT7MLHFP" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src="https://api.time.com/wp-content/uploads/2016/08/the-joker.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src="https://images.indianexpress.com/2018/03/the-joker-759.jpg" />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
);

export default Slider;