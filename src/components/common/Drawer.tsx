import { Link } from "react-router-dom";
import "../../assets/css/tailwind.css"


const Drawer = ():JSX.Element =>{
    const closeSide = ()=>{
        const checkbox = document.getElementById('sidebar') as HTMLInputElement;
        if (checkbox) checkbox.checked = false;
    }

    return(
    <div className="drawer-side z-40">
        <label htmlFor="sidebar" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-white min-h-full w-80 p-4 overflow-y-auto dark:bg-black">
        <li><Link to="/" className="dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800" onClick={closeSide}>홈</Link></li>
        <li><Link to="/fashion" className="dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800" onClick={closeSide}>패션</Link></li>
        <li><Link to="/shoes" className="dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800" onClick={closeSide}>신발</Link></li>
        <li><Link to="/digital" className="dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800" onClick={closeSide}>디지털</Link></li>
        <li><Link to="/furniture" className="dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800" onClick={closeSide}>가구</Link></li>
        <li><Link to="/life" className="dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800" onClick={closeSide}>라이프</Link></li>
        </ul>
    </div>
    )
}

export default Drawer;