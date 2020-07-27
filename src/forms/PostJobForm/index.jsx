import React, { useState } from "react";
import styles from "./index.module.scss";
import {
  validateRequiredInputs,
  validateTitle,
  validateDescription,
} from "./validations";

const PostJobForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    title: "",
    description: "",
    isEnabled: false,
  });

  const onCheckboxChange = () => {
    setState({
      ...state,
      isEnabled: !state.isEnabled,
    });
  };

  const onTitleChange = ({ target: { value } }) => {
    if (validateTitle(value)) {
      setState({
        ...state,
        title: value,
      });
    }
  };

  const onDescriptionChange = ({ target: { value } }) => {
    if (validateDescription(value)) {
      setState({
        ...state,
        description: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
  };

  return (
    <form className={styles.postForm}>
      <label>
        <p>Title</p>
        <input onChange={onTitleChange} value={state.title} name="title" />
      </label>
      <label>
        <p>Description</p>
        <textarea
          rows={7}
          onChange={onDescriptionChange}
          value={state.description}
          name="description"
        />
      </label>
      <label>
        <p>Enabled</p>
        <input
          type="checkbox"
          onChange={onCheckboxChange}
          checked={state.isEnabled}
          name="isEnabled"
        />
      </label>
      <button onClick={handleSubmit} disabled={validateRequiredInputs(state)}>
        Post
      </button>
    </form>
  );
};

export default PostJobForm;
