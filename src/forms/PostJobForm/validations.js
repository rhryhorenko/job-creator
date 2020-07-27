export const validateTitle = (text) => text.length <= 150;
export const validateDescription = (text) => text.length <= 500;

export const validateRequiredInputs = ({ title, description }) => {
  return !title.trim() || !description.trim();
};