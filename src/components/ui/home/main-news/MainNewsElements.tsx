import { getZonePosts } from "@/actions";
import { PostCard } from "@/components";
import { Suspense } from "react";
import { Loading } from "@/components";

export const MainNewsElements = async () => {
  const posts = await getZonePosts("zona-cabezal");

  return (
    <div className="flex flex-col-reverse lg:flex-row lg:space-x-3">
      <div className="lg:w-1/3">
        <div>
          <Suspense fallback={<Loading />}>
            <PostCard postId={posts[1].ID} />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<Loading />}>
            <PostCard postId={posts[2].ID} />
          </Suspense>
        </div>
      </div>
      <div className="lg:w-2/3">
        <Suspense fallback={<Loading />}>
          <PostCard postId={posts[0].ID} large />
        </Suspense>
      </div>
    </div>
  );
};
