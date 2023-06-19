import React, { useEffect, useState } from "react";
import { Row, Col, Carousel, Checkbox } from "antd";
import Slider from "react-slick";
import "./index.less"
import images from "../../configs/images";
import CardComponent from "../../components/card/card";

import _ from "lodash";

const contentStyle = {
  margin: 0,
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
function Home(props) {


  return (

    <div id="Home">
      <Row justify="center" className="contain">
        <Col span={24} >
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </Col>
        <Col span={24} className="area">
          area
        </Col>
        <Col span={24} className="bannerBlock">
          <div className="imgBlock">
            <img src={images.model} />
          </div>
        </Col>
        <Row>
       
        </Row>
      </Row>
    </div>
  );
}

export default Home;