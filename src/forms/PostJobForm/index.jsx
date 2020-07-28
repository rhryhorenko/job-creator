import React, { useState } from "react";
import styles from "./index.module.scss";

const PostJobForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    title: "",
    description: "",
    isEnabled: false,
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "isEnabled") {
      setState({
        ...state,
        isEnabled: !state.isEnabled,
      });
    } else {
      setState({
        ...state,
        [name]: value,
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
        <input
          onChange={onInputChange}
          value={state.title}
          name="title"
          maxLength={150}
        />
      </label>
      <label>
        <p>Description</p>
        <textarea
          rows={7}
          onChange={onInputChange}
          value={state.description}
          name="description"
          maxLength={500}
        />
      </label>
      <label>
        <p>Enabled</p>
        <input
          type="checkbox"
          onChange={onInputChange}
          checked={state.isEnabled}
          name="isEnabled"
        />
      </label>
      <button
        onClick={handleSubmit}
        disabled={!state.title.trim() || !state.description.trim()}
      >
        Post
      </button>
    </form>
  );
};

export default PostJobForm;
