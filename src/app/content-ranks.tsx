import React from "react";
import { motion } from "framer-motion";
type ContentRankerProps = {
  contents: {
    company_name: string;
    company_description: string;
    company_website_link?: string;
  }[];
};

const ContentRanker: React.FC<ContentRankerProps> = ({ contents }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger the animations of children by 0.1 seconds
      },
    },
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <section>
      <h3>List of similar products with their content rankings</h3>
      <motion.ol initial="hidden" animate="visible" variants={containerVariants}>
        {contents.map(
          ({ company_description, company_name, company_website_link }, index) => (
            <motion.li className="relative w-fit" key={index} variants={itemVariants}>
              <a href={company_website_link} className="link" target="_blank">
                <b>{company_name}:</b>
              </a>{" "}
              {index + 1 === contents.length ? (
                <div
                  className="tooltip absolute -right-28"
                  data-tip="This is where you ranked compared to similar brands based on your provided content">
                  <span className="indicator-item badge badge-accent  animate-bounce badge-md">
                    Your rank{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              ) : null}
              {company_description}
            </motion.li>
          ),
        )}
      </motion.ol>
    </section>
  );
};

export default ContentRanker;
