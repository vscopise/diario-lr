import { getFeaturedMediaById } from "@/actions";
import Image from "next/image";

interface Props {
  idImage: number;
  large?: boolean;
}

export const PostImage = async ({ idImage, large }: Props) => {
  const image = await getFeaturedMediaById(idImage);

  const width = large ? 1000 : 500;
  const height = large ? 1000 : 500;

  return (
    <div className="mb-1">
      {image?.source_url ? (
        <Image
          src={image.source_url}
          width={width}
          height={height}
          alt={image.alt_text}
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-muted-foreground">
          No image available
        </div>
      )}
    </div>
  );
};
