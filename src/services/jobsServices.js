import db from "./db";

const collectionName = "jobs_radion";

export default {
  createJob: async (title, description, isEnabled) => {
    try {
      const newJob = await db.collection(collectionName).add({
        title,
        description,
        isEnabled,
      });
      return newJob;
    } catch (e) {
      console.log(e);
    }
  },

  getJobsList: async () => {
    try {
      const jobs = [];
      const querySnapshot = await db.collection(collectionName).get();
      querySnapshot.forEach((doc) => {
        jobs.push({ ...doc.data(), id: doc.id });
      });
      return jobs;
    } catch (e) {
      console.log(e);
    }
  },

  deleteJob: async (id) => {
    try {
      const result = await db.collection(collectionName).doc(id).delete();
      return result;
    } catch (e) {
      console.log(e);
    }
  },
};
