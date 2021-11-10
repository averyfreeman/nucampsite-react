import React, { Fragment, useState } from 'react';
import { Button, CardText, CardTitle, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import CommentForm from './CommentFormComponent';
import './Comments.css';

const dateParse = (date) =>
	new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'short',
		day: '2-digit',
	}).format(new Date(Date.parse(date)));

const Comments = (props) => {
	const [modalOpen, setModalOpen] = useState(false);
	const toggleModal = () => setModalOpen(!modalOpen);

	const { addComment, allComments, campsiteId, comments, mode } = props;
	const modeTextMuted = mode ? `text-secondary` : `text-dark`;
	// const modeText = mode ? `text-light` : `text-dark`;
	// const btnText = mode ? `btn-dark` : `btn-light`;
	const btnText = mode ? `text-light` : `text-dark`;

	// console.log(addComment);
	return (
		<Fragment>
			<Col md={6} className={`pt-5`}>
				<CardTitle className={`h5 pt-3 ${modeTextMuted}`}>Comments:</CardTitle>
				{comments &&
					comments.map((com, i) => (
						<span key={`com-00${i}`}>
							<CardText className="h5">"{com.text}"</CardText>
							<CardText tag="p" className={`text-sm ${modeTextMuted}`}>
								<span>
									-- {com.author}, {dateParse(com.date)}
								</span>
							</CardText>
						</span>
					))}
			</Col>
			<Col>
				<CommentForm
					addComment={addComment}
					allComments={allComments}
					campsiteId={campsiteId}
					isOpen={modalOpen}
					toggleModal={toggleModal}
				/>
			</Col>
			<Row>
				<span className={`inline ${btnText} m-3`}>
					<Button outline onClick={toggleModal}>
						<FontAwesomeIcon icon={faEdit} size="lg" />
						Submit Comment
					</Button>
				</span>
			</Row>
		</Fragment>
	);
};

export default Comments;
