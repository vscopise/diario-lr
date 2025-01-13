export const revalidate = 604800;

import { Metadata } from 'next';
import { getPostBySlug } from "@/actions";
import { Loading, PostImage, PostMeta, ScrollTop } from "@/components";
import { post } from "@/interfaces";
import { Suspense } from 'react';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({params}: Props):Promise<Metadata>{
  const slug = params.slug;
  const post = await getPostBySlug(slug);
  return{
    title:post?.title.rendered ?? 'Artículo no encontrado'
  }
}

export default async function SiglePostPage({ params }: Props) {
  const { slug } = params;

  const post: post = await getPostBySlug(slug);

  return (
    <Suspense fallback={<Loading />}>
      <h1
        className="text-4xl mb-4"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <div className="mb-6 pb-2">
        <div
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          className="text-xl text-gray-500 max-w-fit "
        />
      </div>
      <PostMeta post={post} />
      <div className='lg:px-16 mb-5'>
        <PostImage idImage={post.featured_media} large />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        className="lg:px-32 [&_p]:mb-8 [&_.wp-caption-text]:font-sans [&_.wp-caption-text]:mb-4 [&_.wp-caption-text]:text-sm text-xl text-gray-700 [&_figure]:!w-auto"
      />
      <ScrollTop />
    </Suspense>
  );
}
