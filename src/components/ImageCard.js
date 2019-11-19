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
    <div className="card-wrapper" key={card.id}>
      <Card>
        <CardBody>
          {card.thumbnail.length > 10 && (
            <CardImg
              top
              width="100%"
              src={card.thumbnail}
              alt="Card image"
            />
          )}

          <CardTitle>{card.title}</CardTitle>
          <CardSubtitle>
            Number of comments: {card.num_comments}
          </CardSubtitle>
          <NavLink href={`https://www.reddit.com/${card.permalink}`}>
            Link
          </NavLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default ImageCard;
