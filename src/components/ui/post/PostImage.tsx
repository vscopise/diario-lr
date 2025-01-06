import { getFeaturedMediaById } from "@/actions";
import Image from "next/image";

interface Props {
  idImage: number;
  width: number;
  height: number;
}

export const PostImage = async ({ idImage, width, height }: Props) => {
  const image = await getFeaturedMediaById(idImage);

  return (
    <div className="mb-4">
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
