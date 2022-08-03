interface Props {
  title: string;
  image: string;
  url: string;
  description: string;
  card: string;
  domain: string;
}

export default function FacebookGraph({
  title,
  image,
  url,
  description,
  card,
  domain,
}: Props) {
  return card === "summary" ? (
    <main>
      <div className="mb-1 font-sans text-xs text-slate-900 uppercase">
        Twitter Summary Card
      </div>
      <div className="graph tt-summary bg-white dark:bg-tt-dark">
        <div style={{ flexShrink: 0 }} className="image">
          {image ? (
            <img className="aspect-square" src={image} alt={title || ""} />
          ) : (
            <div className="aspect-square flex items-center justify-center">
              <svg className="svg" viewBox="0 0 24 24">
                <path d="M14 11.25H6a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0-4H6a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm-3.25 8H6a.75.75 0 0 0 0 1.5h4.75a.75.75 0 0 0 0-1.5z" />
                <path d="M21.5 11.25h-3.25v-7C18.25 3.01 17.24 2 16 2H4C2.76 2 1.75 3.01 1.75 4.25v15.5C1.75 20.99 2.76 22 4 22h15.5a2.752 2.752 0 0 0 2.75-2.75V12a.75.75 0 0 0-.75-.75zm-18.25 8.5V4.25c0-.413.337-.75.75-.75h12c.413 0 .75.337.75.75v15c0 .452.12.873.315 1.25H4a.752.752 0 0 1-.75-.75zm16.25.75c-.69 0-1.25-.56-1.25-1.25v-6.5h2.5v6.5c0 .69-.56 1.25-1.25 1.25z" />
              </svg>
            </div>
          )}
        </div>

        <div
          style={{ width: "384px" }}
          className="flex flex-col gap-2 justify-center p-4 "
        >
          <div className="domain">{domain || ""}</div>
          <div className="title dark:text-white">
            <span style={{ overflowWrap: "break-word" }}>{title || ""}</span>
          </div>
          <div className="description line-clamp-3">{description || ""}</div>
        </div>
      </div>
    </main>
  ) : (
    <main>
      <div className="mb-1 font-sans text-xs text-slate-900 dark:text-white uppercase">
        Twitter
      </div>
      <div className="graph tt-graph bg-white dark:bg-tt-dark dark:border-tt-border">
        {image && (
          <img src={image} className="aspect-video" alt={title || ""} />
        )}

        <div className="caption flex flex-row">
          <div className="og-container">
            <div className="title dark:text-white">{title || ""}</div>
            <div className="description dark:text-tt-dark-text">
              {description || ""}
            </div>
            <div className="url dark:text-tt-dark-text">
              {new URL(url).host}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
