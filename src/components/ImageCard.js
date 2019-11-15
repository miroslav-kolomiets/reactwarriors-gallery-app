import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  NavLink
} from "reactstrap";

const ImageCard = props => {
  const card = props.card;
  return (
    <div className="card-wrapper">
      <Card>
        <CardImg top width="100%" src={card.data.thumbnail} alt="Card image" />
        <CardBody>
          <CardTitle>{card.data.title}</CardTitle>
          <CardSubtitle>
            Number of comments: {card.data.num_comments}
          </CardSubtitle>
          <NavLink href={`https://www.reddit.com/${card.data.permalink}`}>
            Link
          </NavLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default ImageCard;
