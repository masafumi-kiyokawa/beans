import React from "react";
import { Bean } from "./types/Bean";

interface Props {
  bean: Bean;
}

const BeanInfo = ({ bean }: Props) => {
  return (
    <ul>
      <li>{bean.name}</li>
      <li>{bean.country}</li>
      <li>{bean.variety}</li>
      <li>{bean.process}</li>
      <li>{bean.roast_level}</li>
      <li>{bean.producer}</li>
      <li>{bean.roaster}</li>
      <li>{bean.note}</li>
    </ul>
  );
};

export default BeanInfo;
