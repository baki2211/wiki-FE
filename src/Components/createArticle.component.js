// CreateArticle Component for add new article

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import ArticleForm from "./ArticleForm";

// CreateArticle Component
const CreateArticle = () => {
const [formValues, setFormValues] =
	useState({ title: '', category: '', article: '' })
// onSubmit handler
const onSubmit = articleObject => {
	axios.post(
'http://localhost:4000/articles/createArticle',
	articleObject)
	.then(res => {
		if (res.status === 200)
		alert('Article successfully created')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return article form
return(
	<ArticleForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Article
	</ArticleForm>
)
}

// Export CreateStudent Component
export default CreateArticle
