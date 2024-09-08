import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';


interface PostCardProps {
  post: {
    id: number;
    title: string;
    image: string;
    excerpt: string;
  };
}

const PostCard: FC<PostCardProps> = ({ post }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          className="w-full"
          src={post.image}
          alt={post.title}
          width={500} // Proporciona un ancho adecuado
          height={300} // Proporciona una altura adecuada
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{post.title}</div>
          <p className="text-gray-700 text-base">
            {post.excerpt}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Link href={`/posts/${post.id}`}>
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Read more
            </a>
          </Link>
        </div>
      </div>
    );
  };

export default PostCard;
