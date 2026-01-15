import Image from "next/image";

// Define the prop types for better TypeScript support
interface NextFillImageProps {
  src: string;
  alt: string;
  className?: string; 
  imageClassName?: string; 
  priority?: boolean; 
  quality?: number; 
  children?: React.ReactNode;
}

export const NextFillImage = ({
  src,
  alt,
  className = "",
  imageClassName = "",
  priority = false,
  quality = 75,
  children,
}: NextFillImageProps) => {
  return (
    <div className={`next-fill-image-wrapper ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`next-fill-image ${imageClassName}`}
        quality={quality}
      />
      {children}
    </div>
  );
};
