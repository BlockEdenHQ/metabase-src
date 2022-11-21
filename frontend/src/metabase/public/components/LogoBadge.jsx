/* eslint-disable react/prop-types */
import React from "react";
import LogoIcon from "metabase/components/LogoIcon";
import ExternalLink from "metabase/core/components/ExternalLink";

// import { t, jt } from "ttag";

const LogoBadge = ({ dark }) => (
  <ExternalLink
    href="https://blockeden.xyz/"
    target="_blank"
    className="h4 flex text-bold align-center no-decoration"
  >
    <LogoIcon height={28} dark={dark} />
    <span className="text-small">
      <span className="ml1 md-ml2 text-medium">BlockEden.xyz</span>
    </span>
  </ExternalLink>
);

export default LogoBadge;
