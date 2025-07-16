type ImageWrapperProps = {
  path: string;
  contain?: boolean;
  className?: string;
};

const ImageWrapper = ({ className, path, contain }: ImageWrapperProps) => {
  const altName = path.split('.')[0];
  return (
    <figure className={`img-wrapper ${className}`}>
      <img
        className={`${contain ? 'contain' : ''}`}
        src={`${path}`}
        alt={altName}
      />
    </figure>
  );
};

export default ImageWrapper;
