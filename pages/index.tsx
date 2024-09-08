import { useState } from 'react';
import useSWR from 'swr';
import PostCard from '../components/PostCard';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, error } = useSWR(`/api/posts?page=${page}`, fetcher);

  if (error) return <div>Failed to load posts</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.posts.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setPage(page + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Load more
        </button>
      </div>
    </div>
  );
}
