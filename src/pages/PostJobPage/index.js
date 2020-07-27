import React from "react";
import PostJobForm from "../../forms/PostJobForm";
import jobsServices from "../../services/jobsServices";
import { useHistory } from "react-router-dom";
import paths from "../../paths";

const PostJobPage = () => {
  const history = useHistory();

  const onSubmitForm = ({ title, description, isEnabled }) => {
    jobsServices
      .createJob(title, description, isEnabled)
      .then(() => {
        history.push(paths.jobsList);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <PostJobForm onSubmit={onSubmitForm} />
    </div>
  );
};

export default PostJobPage;
