import React, { FC } from 'react';
import './search-box.css';

type SearchBoxProps = {
  setSearchText: (val: string) => void;
};

const SearchBox: FC<SearchBoxProps> = ({ setSearchText }) => {
  return (
    <div className='search-box'>
      <input
        type='text'
        placeholder='Search..'
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
