import { getPostById } from "@/actions";
import { post } from "@/interfaces";
import { PostImage } from "../post/PostImage";
import Link from "next/link";

interface Props {
  postId: string;
}
export const ZonePostItem = async ({ postId }: Props) => {
  const post: post = await getPostById(postId);

  return (
    <div className="mb-2">
      <Link href={`/${post.slug}`}>
        <PostImage idImage={post.featured_media} width={500} height={500} />
        <h2 className="font-bold">{post.title.rendered}</h2>
      </Link>
    </div>
  );
};
