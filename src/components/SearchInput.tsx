// import { Input, InputGroup, InputLeftElement } from "@chakra-ui/re
// import { BsSearch } from "react-icons/bs";
// const Search Input = () {|
// return (
// <InputGroup> I
// <Input LeftElement children={<BsSearch />} />
// <Input borderRadius={20} placeholder="Search games..." varia
// </InputGroup>
// );
// };

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Games..."
          variant="outline"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
