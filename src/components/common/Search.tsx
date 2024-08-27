

const Search = ():JSX.Element =>{
    

    return(
        <div className="flex border-b p-2 w-2/3">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-white dark:stroke-white"
                fill="none"
                viewBox="0 0 24 24">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        <input
        type="text"
        placeholder="검색어를 입력하세요."
        className="w-full bg-transparent focus:outline-none pl-4 text-sm"
        
      />
        </div>
    )
}

export default Search;