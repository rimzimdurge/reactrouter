import { useParams } from 'react-router-dom';

const Post = () => {
  const { category } = useParams();

  return (
    <>
      <h1>Post Page - {category}</h1>
    </>
  );
};

export default Post;
