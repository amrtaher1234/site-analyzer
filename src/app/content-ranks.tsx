import React from "react";

type ContentRankerProps = {
  contents: {
    company_name: string;
    company_description: string;
    company_website_link: string;
  }[];
};

const ContentRanker: React.FC<ContentRankerProps> = ({ contents }) => {
  return (
    <ol>
      {contents.map(
        ({ company_description, company_name, company_website_link }, index) => (
          <li key={index}>
            <a href={company_website_link} className="link" target="_blank">
              <b>{company_name}:</b>
            </a>{" "}
            {company_description}
          </li>
        ),
      )}
    </ol>
  );
};

export default ContentRanker;
