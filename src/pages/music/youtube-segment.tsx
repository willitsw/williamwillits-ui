interface YouTubeSegmentProps {
  embedId: string;
  title: string;
}

const YouTubeSegment = ({ embedId, title }: YouTubeSegmentProps) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  );
};

export default YouTubeSegment;
