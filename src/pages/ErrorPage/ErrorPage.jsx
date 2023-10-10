import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>opps</h1>
      <p>{error.statusText || error.message}</p>
      {/* https://event-management-assignm-8cb5c.web.app */}
    </div>
  );
};

export default ErrorPage;
