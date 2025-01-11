import { getPostById } from "@/actions";
import { post } from "@/interfaces";
import Link from "next/link";
import { PostImage } from "./PostImage";
import { clsx } from "clsx";

interface Props {
  postId: string;
  large?: boolean;
}

export const PostCard = async ({ postId, large }: Props) => {
  const post: post = await getPostById(postId);

  return (
      <div className="mb-2">
        <Link href={`/${post.slug}`}>
          <PostImage idImage={post.featured_media} large={large} />
          <h2
            className={clsx("font-bold", { "text-2xl": large, "pt-2": large })}
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </Link>
      </div>
  );
};
