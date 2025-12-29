import { useSearchParams } from "react-router-dom";
import { SearchBar } from "../searchBar/SearchBar";
import { FC } from "react";
import { RecentOrdersSearchBarProps } from "../../../types";

export const RecentOrdersSearchBar: FC<RecentOrdersSearchBarProps> = ({ disabled }): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("recentOrdersCode") || "";
  
  const handleChange = (value: string): void => {
    setSearchParams({ recentOrdersCode: value });
  };

  const handleClear = (): void => {
    setSearchParams({ });
  };
  
  return (
    <SearchBar
      placeholder="Search by No. Order. E.g: AB-1234"
      disabled={disabled} /* TODO */
      value={query}
      onChange={handleChange}
      onClear={handleClear}
    />
  );
};
