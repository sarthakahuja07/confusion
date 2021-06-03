import React, { Component } from "react";
import {
	Card, CardText, CardBody, CardLink,
	CardTitle, CardSubtitle, CardImg
} from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';


class DishDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	renderDish() {
		if (this.props.dish != null) {
			return (
				<div className="col-12 col-md-5 ">
					<Card body inverse color="danger">
						<CardImg top width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
						<CardBody>
							<CardTitle tag="h5">
								{this.props.dish.name}
							</CardTitle>
							<CardText>
								{this.props.dish.description}
							</CardText>
						</CardBody>
					</Card>
				</div>
			);
		} else {
			return null;
		}

	}

	renderComments() {
		if (this.props.dish != null) {
			const comments = this.props.dish.comments.map((comment) => {
				var d = new Date(comment.date);
				console.log(d);
				return (
					<ListGroupItem key={comment.id}>
						<ListGroupItemHeading>{comment.comment}</ListGroupItemHeading>
						<ListGroupItemText>
							--{comment.author} , {d.toUTCString()}
						</ListGroupItemText>
					</ListGroupItem>
				)
			});
		}else{
			return null;
		}
	}



		render() {
			return (
				<div className="row mt-5">
					{this.renderDish()}
					<div className="m-1 col-12 col-md-5">
						<h4>Comments</h4>
						{this.renderComments()}
					</div>
				</div>

			);
		}	
}

export default DishDetail;