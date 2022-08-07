import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import FacebookGraph from "~/components/graphs/FacebookGraph";
import TwitterGraph from "~/components/graphs/TwitterGraph";
import InstagramGraph from "~/components/graphs/InstagramGraph";
import WhatsappGraph from "~/components/graphs/WhatsappGraph";
import { JSDOM } from "~/components/jsdom.server";
import Nav from "~/components/graphs/Nav";

function parseTags(ogTags: NodeList, metaProp: string, tagName: string) {
  return Array.from(ogTags).reduce((obj, tag: any) => {
    const prop = tag.getAttribute(metaProp).split(tagName)[1];
    const content = tag.getAttribute("content");

    const response: any = {};
    response[`${prop}`] = content;

    return { ...obj, ...response };
  }, {});
}

function parseMetaData(document: any) {
  const fbGraph = document.querySelectorAll('meta[property*="og:"]');
  const twitterGraph = document.querySelectorAll('meta[name*="twitter:"]');
  const richTags = {
    og: parseTags(fbGraph, "property", "og:"),
    twitter: parseTags(twitterGraph, "name", "twitter:"),
  };
  return richTags;
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const checkUrl = String(url.searchParams.get("q"));

  const response = await fetch(checkUrl);
  const responseTxt = await response.text();

  const dom = new JSDOM(responseTxt);
  const document = dom.window.document;

  return json({
    ...parseMetaData(document),
    url: checkUrl,
    title: document.querySelector("title")?.textContent,
  });
};

export default function preview() {
  const OpenGraph = useLoaderData();
  console.log(OpenGraph);
  return (
    <section className="bg:white w-full min-h-screen dark:bg-slate-900">
      <Nav />
      <div className="container mx-auto">
        <section className="flex flex-col justify-around items-center gap-5 pt-10 pb-10">
          {OpenGraph.og?.title && (
            <FacebookGraph url={OpenGraph.url} {...OpenGraph.og} />
          )}
          {OpenGraph.twitter?.title && (
            <TwitterGraph url={OpenGraph.url} {...OpenGraph.twitter} />
          )}
          {OpenGraph.og?.title && (
            <InstagramGraph url={OpenGraph.url} {...OpenGraph.og} />
          )}
          {OpenGraph.og?.title && (
            <WhatsappGraph url={OpenGraph.url} {...OpenGraph.og} />
          )}
          {!OpenGraph.og?.title && (
            <div className="flex min-h-screen flex-col w-full justify-center items-center">
              <h3 className="m-4">no social links found for {OpenGraph.url}</h3>
              <h1 className="text-9xl text-gray-800 dark:text-slate-100 m-3">
                {OpenGraph.title}
              </h1>
            </div>
          )}
        </section>
      </div>
    </section>
  );
}
