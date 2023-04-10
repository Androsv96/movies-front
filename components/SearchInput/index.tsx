interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ onChange, value }: Props) => {
  return (
    <>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search by title or genre
      </label>
      <div className="relative lg:w-96 xl:w-96">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          id="default-search"
          className="block w-full py-4 p-10 text-sm text-white border border-gray-600 rounded-lg bg-gray-600 focus:border-gray-500 hover:border-gray-500 lg:w-96 xl:w-96"
          placeholder="Search by title or genre"
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};
