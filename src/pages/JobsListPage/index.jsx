import React, { useEffect, useState } from "react";
import jobsServices from "../../services/jobsServices";
import JobCard from "../../components/JobCard";

const JobsListPage = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    jobsServices
      .getJobsList()
      .then((result) => {
        setJobs(result);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      {jobs.length > 0 && jobs.map((job) => <JobCard key={job.id} {...job} />)}
    </div>
  );
};

export default JobsListPage;
