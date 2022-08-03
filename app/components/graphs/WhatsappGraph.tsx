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
        WhatsApp
      </div>
      <div className="graph tt-graph wa-graph dark:bg-wa-dark dark:text-white overflow-hidden">
        {image && (
          <img src={image} className="aspect-video" alt={title || ""} />
        )}

        <div className="caption dark:bg-wa-dark dark:text-white">
          <div className="og-container">
            <div className="title text-ellipsis overflow-hidden dark:text-white">
              {title || ""}
            </div>
            <div className="description text-ellipsis overflow-hidden dark:text-wa-dark-text">
              {description || ""}
            </div>
            <div className="url">{new URL(url).host}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
