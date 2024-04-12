"use client";
import { useEffect, useState } from "react";
import config from "../config";
import ContentRanker from "../content-ranks";
import ProgressiveLoading from "./progressive-loading";
import GeneratedContent from "./generated-content";
import { useAnimate } from "framer-motion";
export default function DemoForm() {
  const [scope, animate] = useAnimate();
  const [loadingSimilarCompanies, setLoadingSimilarCompanies] = useState(false);
  const [currentState, setCurrentState] = useState("start");
  const [company, setCompany] = useState<{
    company_description: string;
    company_name: string;
    company_website_link?: string;
  } | null>(null);
  const [similarCompanies, setSimilarCompaneis] = useState<
    {
      company_description: string;
      company_name: string;
      company_website_link?: string;
    }[]
  >([
    {
      company_description: "We are a company that sells shoes",
      company_name: "Shoes Inc",
      company_website_link: "https://shoesinc.com",
    },
    {
      company_description: "We are a company that sells clothes",
      company_name: "Clothes Inc",
      company_website_link: "https://clothesinc.com",
    },
    {
      company_description: "We are a company that sells bags",
      company_name: "Bags Inc",
      company_website_link: "https://bagsinc.com",
    },
  ]);

  useEffect(() => {
    fetch("/api").then((d) => {
      d.json().then((dd) => console.log(dd));
    });
  }, []);
  return (
    <form
      ref={scope}
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement; // Cast e.target to HTMLFormElement
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        setCompany({
          company_description: data.description as string,
          company_name: data.name as string,
          company_website_link: "",
        });
        setLoadingSimilarCompanies(true);
        fetch(`http://localhost:8080/generate_and_score?query=${data.queries}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            company_description: data.description,
            company_name: data.name,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            setSimilarCompaneis(data.companies);
          })
          .finally(() => {
            setLoadingSimilarCompanies(false);
          });
      }}
      className="grid gap-4">
      <div className="flex gap-2 flex-wrap">
        <input
          type="text"
          className="input input-bordered "
          placeholder="Website or product name"
          required
          name="name"
        />

        <select
          name="category"
          required
          className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Your website category
          </option>
          <option>Ecommerce</option>
          <option>Saas</option>
          <option>Blog</option>
          <option>Portfolio</option>
          <option>Other</option>
        </select>
      </div>
      <textarea
        name="description"
        required
        className="textarea textarea-bordered  full-w"
        placeholder="Place your website description"></textarea>
      <textarea
        name="queries"
        required
        className="textarea textarea-bordered  full-w"
        placeholder="Add search queries seperated by a dash, maximam of 3"></textarea>

      {loadingSimilarCompanies ? (
        <span className="loading loading-bars loading-md">
          Loading similar companies to your product...
        </span>
      ) : (
        <button className="btn btn-primary block btn-wide">Enhance Content</button>
      )}

      {similarCompanies ? <ContentRanker contents={[...similarCompanies]} /> : null}
      <ProgressiveLoading
        done={false}
        doneMessage="Done enhancing your content"
        currentState={currentState}
        isFullyLoaded
        messages={{
          start: "Start enhancing your content",
          loading: "Loading similar companies to your product...",
          loaded: "Loaded similar companies to your product",
          error: "An error occured while loading similar companies to your product",
        }}
      />
      <div className="grid gap-y-10 gap-x-2  lg:grid-cols-2 lg:grid-rows-2 grid-rows-4">
        <GeneratedContent content="Generated content" loading={true} />
        <GeneratedContent content="Generated content" loading={true} />
        <GeneratedContent content="Generated content" loading={true} />
        <GeneratedContent content="Generated content" loading={true} />
      </div>
      <button
        type="button"
        onClick={() => {
          const randomState = ["start", "loading", "loaded", "error"];
          const newState = randomState[Math.floor(Math.random() * randomState.length)];
          console.log(newState);
          setCurrentState(newState);
        }}>
        Randomize current state
      </button>
    </form>
  );
}
