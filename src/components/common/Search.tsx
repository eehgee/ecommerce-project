import { useRecoilValueLoadable } from "recoil";
import { productsItem } from "../../store/products";
import { useEffect, useRef, useState } from "react";
import { IProduct } from "../../store/cart";
import { Link } from "react-router-dom";


const Search = ():JSX.Element =>{
    
    const itemsLoadable = useRecoilValueLoadable(productsItem);
    const [searchQuery, setSearchQuery] = useState("");
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [filteredItems, setFilteredItems] = useState<IProduct[]>([]);
    const searchRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (itemsLoadable.state === "hasValue") {
            const items = itemsLoadable.contents;
            setFilteredItems(
                items.filter((item) =>
                    item.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        }
    }, [searchQuery, itemsLoadable]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsDropdownVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setIsDropdownVisible(e.target.value.length > 0);
    };

    const handleItemClick = () => {
        setIsDropdownVisible(false);
        setSearchQuery("");
    };

    return(
        <div className="flex border-b p-2 w-2/3 relative" ref={searchRef}>
           
            <input
                type="text"
                placeholder="검색어를 입력하세요."
                className="w-full bg-transparent focus:outline-none pl-4 text-sm"
                value={searchQuery}
                onChange={handleSearchInputChange}
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-white dark:stroke-white "
                fill="none"
                viewBox="0 0 24 24">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {isDropdownVisible && (
                <ul
                    tabIndex={0}
                    className="absolute left-0 top-full mt-1 bg-gray-700 z-[1] w-full max-h-40 overflow-y-auto shadow-lg"
                >
                    {filteredItems.length === 0 ? (
                        <li className="p-2">검색 결과가 없습니다.</li>
                    ) : (
                        filteredItems.map((item) => (
                            <li key={item.id} className="p-2">
                                <Link to={`/products/${item.id}`} onClick={handleItemClick}>{item.title}</Link>
                            </li>
                        ))
                    )}
                </ul>
            )}
        </div>
    )
}

export default Search;