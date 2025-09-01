export interface SearchBarProps {
  onResetButtonClick: () => void;
  onSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchInputValue: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onResetButtonClick: handleResetButtonClick,
  onSearchInputChange: handleSearchInputChange,
  searchInputValue,
}) => {
  return (
    <div className="flex justify-between pb-4 items-baseline gap-4">
      <h1 className="text-2xl lg:text-3xl font-semibold text-blue-900 whitespace-nowrap">
        Solace Advocates
      </h1>
      <div className="flex justify-between items-baseline">
        <label htmlFor="searchForm" className="font-medium">
          Search:{" "}
        </label>
        <input
          name="searchField"
          className="rounded-full border-2 border-gray-300 shadow-inner p-1 text-md"
          onChange={handleSearchInputChange}
          value={searchInputValue}
        />
        <button
          className="ml-4 px-2 py-1 rounded-xl border border-slate-600 bg-slate-400 text-slate-100 focus:bg-slate-500 hover:bg-slate-500 focus:border-slate-700 hover:border-slate-700 font-medium text-md"
          onClick={handleResetButtonClick}
        >
          Clear
        </button>
      </div>
    </div>
  );
};
