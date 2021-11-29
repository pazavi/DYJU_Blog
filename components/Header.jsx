import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-700 mb-8">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <span className="cursor-pointer font-bold text-2xl text-white mt-1">
                DYJU
              </span>
            </Link>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {!navbarOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                </svg>
              )}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? "flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {categories.map((category) => (
                <li
                  key={category.name}
                  className="nav-item"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className="md:float-left mt-2 align-middle text-white text-sm ml-4 cursor-pointer whitespace-nowrap uppercase opacity-75 hover:opacity-100 tranition duration-500">
                      {category.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { getCategories } from "../services";

// const Header = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     getCategories().then((newCategories) => setCategories(newCategories));
//   }, []);

//   return (
//     <div className="container mx-auto px-10 mb-8">
//       <div className="border-b w-full inline-block border-blue-400 py-8">
//         <div className="md:float-left block">
//           <Link href="/">
//             <span className="cursor-pointer font-bold text-4xl text-white">
//               DYJU
//             </span>
//           </Link>
//         </div>
//         <div className="hidden md:float-left md:contents">
//           {categories.map((category) => (
//             <Link key={category.slug} href={`/category/${category.slug}`}>
//               <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
//                 {category.name}
//               </span>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
