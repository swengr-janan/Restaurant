import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const RenderDish = ({ dish }) => {
  if (dish != null) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle heading>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
};

// dateConverter(dateISO) {
//   const monthNames = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   var date = new Date(dateISO);
//   var year = date.getFullYear();
//   var month = date.getMonth();
//   var dt = date.getDate();

//   return monthNames[month] + " " + dt + ", " + year;
// }

const RenderComments = ({ comments }) => {
  if (comments != null) {
    const finalComment = comments.map((comment) => {
      return (
        <div>
          <ul class="list-unstyled">
            <li>{comment.comment}</li>
            <li>
              -- {comment.author},{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </li>
          </ul>
        </div>
      );
    });

    return (
      <div>
        <h4>Comments</h4>
        {finalComment}
      </div>
    );
  } else {
    return <div></div>;
  }
};

const DishDetail = (props) => {
  const dish = props.dish;
  if (dish != null) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.dish.comments} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
