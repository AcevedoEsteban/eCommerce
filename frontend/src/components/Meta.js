import React from "react";
import { Helmet } from "react-helmet";

// eslint-disable-next-line react/prop-types
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to the Yacht Bay",
  description: "the eletric market",
  keywords: "electronics, buy electronics, own electronics",
};

export default Meta;
