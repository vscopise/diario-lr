import { getPostBySlug } from "@/actions";
import { PostImage, ScrollTop } from "@/components";
import { post } from "@/interfaces";

interface Props {
  params: {
    slug: string;
  };
}

export default async function SiglePostPage({ params }: Props) {
  const { slug } = params;

  const post: post = await getPostBySlug(slug);

  return (
    <>
      <PostImage idImage={post.featured_media} width={800} height={800} />
      <h1 className="font-bold text-3xl mb-4">{post.title.rendered}</h1>
      <div className="mb-6 pb-2 border-b-2 border-gray-400">
        <div
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          className="text-2xl text-gray-800 max-w-fit "
        />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        className="[&_p]:mb-4 [&_.wp-caption-text]:font-sans [&_.wp-caption-text]:mb-4 [&_.wp-caption-text]:text-sm text-xl text-gray-800 [&_figure]:!w-auto"
      />
      <ScrollTop />
    </>
  );
}
