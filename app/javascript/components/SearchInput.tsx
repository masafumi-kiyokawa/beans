import React, { useRef } from "react";
import type { ReactNode } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props): ReactNode => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      className="search"
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={ref}
          placeholder="Search beans..."
          variant="filled"
          boxShadow="base"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
