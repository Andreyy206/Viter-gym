

import { Search } from "lucide-react";

const SearchBar = () => {
 

  return (
    <form
      className='max-w-[400px] w-full relative'
    >
      <div className='flex items-center'>
        <input
          type='search'
          placeholder='Search here...'
          className='px-2 py-1 rounded-1-md  border border-dark text-light'


        />
        <button
          type='submit'
          className='px-2 py-1 rounded-r-md bg-accent border border-accent  '
        >
          <Search />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
