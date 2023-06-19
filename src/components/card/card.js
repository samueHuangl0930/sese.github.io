import { Card, Col, Row } from "antd";
import { comment } from "postcss";
import React from "react";
import "./card.less";

// const { Meta } = Card;

function CardComponent(props) {
  const { img, depiction, comment, favorite, like, share } = props;
  return (
    <Card
      hoverable
      className={name}
      onClick={handleSubmit}
    >
      <div className="imgwarp">{img}</div>
      <div className="nameWarp">
        {depiction}
      </div>
      <div className="list">
        <div className="item"><div>{comment}</div></div>
        <div className="item"><div>{favorite}</div></div>
        <div className="item"><div>{like}</div></div>
        <div className="item"><div>{share}</div></div>
      </div>
      {text}
    </Card>
  );
}
export default CardComponent;
