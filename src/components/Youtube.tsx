interface Props {
  id: string;
};

export default function Youtube({ id }: Props) {
  return (
    <div>
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        frame-border="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
