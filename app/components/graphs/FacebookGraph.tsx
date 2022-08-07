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
  console.log(url);
  return (
    <main>
      <div className="mb-1 font-sans text-xs text-slate-900 dark:text-white uppercase">
        Facebook
      </div>
      <div className="graph fb-graph dark:bg-fb-dark dark:border-fb-dark">
        {image && (
          <img src={image} className="aspect-video" alt={title || ""} />
        )}

        <div className="content dark:bg-fb-dark">
          <div className="og-container">
            <div className="url dark:text-fb-dark-text">
              {new URL(url).host}
            </div>
            <div className="title dark:text-white">{title || ""}</div>
            <div className="description dark:text-fb-dark-text">
              {description || ""}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
