"use client";
import { useState } from "react";
import config from "../config";
import ContentRanker from "../content-ranks";

export default function DemoForm() {
  const [loadingSimilarCompanies, setLoadingSimilarCompanies] = useState(false);
  const [similarCompanies, setSimilarCompaneis] = useState<
    {
      company_description: string;
      company_name: string;
      company_website_link: string;
    }[]
  >([]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement; // Cast e.target to HTMLFormElement
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        setLoadingSimilarCompanies(true);
        fetch("http://localhost:8080/generate_similar_companies", {
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

      {similarCompanies ? <ContentRanker contents={similarCompanies} /> : null}
    </form>
  );
}
