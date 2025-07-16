type ImageWrapperProps = {
  path: string;
  className?: string;
};

const ImageWrapper = ({ className, path }: ImageWrapperProps) => {
  const altName = path.split('.')[0];
  return (
    <figure className={`img-wrapper ${className}`}>
      <img src={`${path}`} alt={altName} />
    </figure>
  );
};

export default ImageWrapper;
