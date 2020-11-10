import { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  renderDish(dish) {
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
  }

  dateConverter(dateISO) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    var date = new Date(dateISO);
    var year = date.getFullYear();
    var month = date.getMonth();
    var dt = date.getDate();

    return monthNames[month] + " " + dt + ", " + year;
  }
  renderComments(comments) {
    if (comments != null) {
      const finalComment = comments.map((comment) => {
        return (
          <div>
            <ul class="list-unstyled">
              <li>{comment.comment}</li>
              <li>
                -- {comment.author}, {this.dateConverter(comment.date)}
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
  }

  render() {
    const dish = this.props.dish;
    if (dish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">{this.renderDish(dish)}</div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(dish.comments)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
