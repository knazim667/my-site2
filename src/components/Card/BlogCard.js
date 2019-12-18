import React from "react";
import BlogCardBody from "./BlogCardbody";

const BlogCard = props => {
  const { image, title, date, author, blogDetail, icon } = props;
  return (
    <div className="col-lg-4 col-md-6">
      <BlogCardBody
        image={image}
        title={title}
        date={date}
        author={author}
        detail={blogDetail}
        icon={icon}
      />
    </div>
  );
};

export default BlogCard;
