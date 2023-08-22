import Dashboard from "./Dashboard";

export default function Home() {
  return (
    <>
      <main className="h-full">
        <nav className="bg-indigo-200 z-50 w-full flex flex-row position: fixed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 m-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <h1
            href="#"
            class="text-blue-900 text-lg hover:bg-blue-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Sri Amar Bikes
          </h1>
        </nav>

        <div className="flex flex-row text-blue-900 ">
          <div class="w-1/6 bg-indigo-200 dark:bg-gray-800">
            <div class="flex flex-col sm:flex-row sm:justify-around">
              <div class="z-0 w-50">
                <nav class="mt-10  divide-y m-2 divide-slate-500 > * + * ">
                <div className=" flex flex-row items-center">  <a
                    className="hover:text-Blue-800 flex flex-row cex items-center  m-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-400  text-gray-600 dark:text-gray-400 rounded-lg "
                    href="#"
                  >
                     
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                    <h1 className="text-xl m-2">step 1</h1>  
                  </a>
                    
                
                 </div>
                 <div className=" flex flex-row items-center">  <a
                    className="hover:text-Blue-800 flex flex-row cex items-center  m-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-400  text-gray-600 dark:text-gray-400 rounded-lg "
                    href="#"
                  >
                     
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                    <h1 className="text-xl m-2">step 2</h1>  
                  </a>
                    
                
                 </div>
                 <div className=" flex flex-row items-center">  <a
                    className="hover:text-Blue-800 flex flex-row cex items-center  m-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-400  text-gray-600 dark:text-gray-400 rounded-lg "
                    href="#"
                  >
                     
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                    <h1 className="text-xl m-2">step 3</h1>  
                  </a>
                    
                
                 </div>
                </nav>
              </div>
            </div>
          </div>
          <Dashboard />
        </div>
      </main>
    </>
  );
}
