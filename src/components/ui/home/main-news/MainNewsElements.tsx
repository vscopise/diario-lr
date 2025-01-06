import { getZonePosts } from "@/actions";
import { ZonePostItem } from "../ZonePostItem";

export const MainNewsElements = async () => {
  const posts = await getZonePosts("zona-cabezal");

  return (
    <div className="lg:grid grid-cols-3 gap-3">
      <div className="col-span-1">
        <div>
          <ZonePostItem postId={posts[1].ID} />
        </div>
        <div>
          <ZonePostItem postId={posts[2].ID} />
        </div>
      </div>
      <div className="col-span-2">
        <ZonePostItem postId={posts[0].ID} />
      </div>
    </div>
  );
};
