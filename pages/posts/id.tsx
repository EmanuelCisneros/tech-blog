import { useRouter } from 'next/router';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const PostDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`/api/posts/${id}`, fetcher);

  if (error) return <div>Failed to load post</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl mb-4">{data.post.title}</h1>
      <img src={data.post.image} alt={data.post.title} className="mb-4" />
      <p>{data.post.content}</p>
    </div>
  );
};

export default PostDetails;
