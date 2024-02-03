import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const BreadcrumbContainer = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);
  return (
    <Breadcrumb fontWeight="medium" fontSize="sm">
      {paths.map((path, index) => (
        <BreadcrumbItem key={index}>
          <BreadcrumbLink
            as={Link}
            to={`/${paths.slice(0, index + 1).join("/")}`}
          >
            {path}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default BreadcrumbContainer;
