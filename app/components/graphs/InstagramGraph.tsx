interface Props {
  title: string;
  image: string;
  url: string;
  description: string;
}

export default function FacebookGraph({
  title,
  image,
  url,
  description,
}: Props) {
  return (
    <main>
      <div className="mb-1 font-sans text-xs text-slate-900 dark:text-white uppercase">
        Instagram
      </div>
      <div className="graph tt-graph insta-graph dark:bg-ig-dark dark:border-ig-dark">
        {image && (
          <img src={image} className="aspect-video" alt={title || ""} />
        )}

        <div className="caption">
          <div className="og-container">
            <div className="title text-ellipsis overflow-hidden dark:text-white">
              {title || ""}
            </div>
            <div className="description text-ellipsis overflow-hidden">
              {description || ""}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
