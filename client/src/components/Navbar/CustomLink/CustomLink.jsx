import React from 'react';
import { useMatch, useResolvedPath } from "react-router-dom";
import { LinkProps } from "react-router-dom";


function CustomLink({el.path, el.label}: LinkProps) {
  let resolved = useResolvedPath (to);
  let match = useMatch ({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && " (active)"}
    </div>
  );
}
