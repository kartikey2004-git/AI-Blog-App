export const DB_NAME = "blogX";


// Roles
export const ROLES = {

  AUTHOR: "author", // can access dashboard and see all the blogs and posts , comments , create new blog 

  READER: "reader", // only see published blogs and can comment on blogs
};

export const CATEGORIES = {
  TECH: "tech",
  LIFESTYLE: "lifestyle",
  EDUCATION: "education",
  BUSINESS: "business",
  TRAVEL: "travel",
  FOOD: "food",
};

export const COMMENT_STATUS = {
  PENDING: "pending",
  APPROVED: "approved",
  REJECTED: "rejected",
};
