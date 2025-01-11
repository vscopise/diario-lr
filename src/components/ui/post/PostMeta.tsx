//import { getAuthorById } from "@/actions";
import { post } from "@/interfaces";

interface Props {
  post: post;
}

const elapsed = (postDate: string) => {
  const endTime = new Date();
  const postTime = new Date(postDate);

  const timeDiff = endTime.getTime() - postTime.getTime();

  if (timeDiff < 60 * 1000) {
    return `hace ${timeDiff / 1000} segundos`;
  } else if (timeDiff < 60 * 60 * 1000) {
    return `hace ${(timeDiff / (60 * 1000)).toFixed()} minutos`;
  } else if (timeDiff < 24 * 60 * 60 * 1000) {
    return `hace ${(timeDiff / (60 * 60 * 1000)).toFixed()} hora(s)`;
  } else {
    return `el ${new Date(postDate).toLocaleDateString("es-ES", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })}`;
  }
};

export const PostMeta = async ({ post }: Props) => {
  //const author = await getAuthorById(post.author);
  return (
    <div className="text-gray-500 mb-2">
      <p>- Publicado {elapsed(post.date)}</p>
    </div>
  );
};
