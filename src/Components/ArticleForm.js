import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const ArticleForm = (props) => {
const validationSchema = Yup.object().shape({
	title: Yup.string().required("Required"),
	category: Yup.string()
	.category("You have enter an invalid category")
	.required("Required"),
	article: Yup.string()
	.required("Required"),
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
			<Field name="title" type="text"
				className="form-control" />
			<ErrorMessage
			name="title"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<Field name="category" type="text"
				className="form-control" />
			<ErrorMessage
			name="category"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<Field name="article" type="text"
				className="form-control" />
			<ErrorMessage
			name="article"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default ArticleForm;
