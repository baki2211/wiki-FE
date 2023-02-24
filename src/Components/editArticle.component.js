// EditArticle Component for update article data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleForm from "./ArticleForm";

// EditStudent Component
const EditArticle = (props) => {
const [formValues, setFormValues] = useState({
	title: "",
	category: "",
	article: "",
});
	
//onSubmit handler
const onSubmit = (articleObject) => {
	axios
	.put(
		"http://localhost:4000/articles/update-article/" +
		props.match.params.id,
		articleObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Article successfully updated");
		props.history.push("/article-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize article form
useEffect(() => {
	axios
	.get(
		"http://localhost:4000/articles/update-article/"
		+ props.match.params.id
	)
	.then((res) => {
		const { title, category, article } = res.data;
		setFormValues({ title, category, article });
	})
	.catch((err) => console.log(err));
}, [props.match.params.id]);

// Return article form
return (
	<ArticleForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Article
	</ArticleForm>
);
};

// Export EditStudent Component
export default EditArticle;
