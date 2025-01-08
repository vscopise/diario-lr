import { getZonePosts } from "@/actions";
import { PostCard } from "@/components";

export const MainNewsElements = async () => {
  const posts = await getZonePosts("zona-cabezal");

  return (
    <div className="flex flex-col-reverse lg:flex-row lg:space-x-3">
      <div className="lg:w-1/3">
        <div>
          <PostCard postId={posts[1].ID} />
        </div>
        <div>
          <PostCard postId={posts[2].ID} />
        </div>
      </div>
      <div className="lg:w-2/3">
        <PostCard postId={posts[0].ID} large />
      </div>
    </div>
  );
};
