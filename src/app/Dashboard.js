function Dashboard() {
  return (
    <>
      <div className="gap-2 p-5 w-full place-content-stretch">
        <div className="gap-2">
          <div className="flex flex-row m-10">
            <h1 className="text-2xl font-bold flex-1">Personal Info</h1>
            <button
              type="submit"
              className="px-4 py-2  flex-none  ml-25 bg-blue-900 text-xs text-white rounded-md hover:bg-white hover:text-blue-900 hover:border-blue-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
            >
              Save & Next
            </button>
          </div>
          <div className="flex flex-row m-5 gap-5 ">
            <div className="flex flex-col font-bold text-blue-900">
              <label>Mobile</label>
              <input
            
                placeholder="Search..."
                className="px-1 py-1 border bord hover:border-blue-900 hover:border-solid flex items-center justify-center border-2 border-neutral-400 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 hover:border-blue-900er-black-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-col font-bold text-blue-900">
              <label>Name</label>
              <input
            
            placeholder="Search..."
            className="px-1 py-1 border bord hover:border-blue-900 hover:border-solid flex items-center justify-center border-2 border-neutral-400 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 hover:border-blue-900er-black-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
              <div className="flex flex-row">
                <input className="accent-blue-900 m-1" type="checkbox" />
                <h6 className=" text-blue-900 text-xs">Remember Me</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="m-5 place-items-stretch">
          <h1 className="text-2xl font-bold m-10 text-blue-900">Bike Info</h1>
          <div className="flex flex-row  border-blue-900 gap-2  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 m-2 h-11"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <div className=" rounded border w-1/6 p-2 place-content-center hover:border-blue-900 hover:border-solid flex items-center justify-center border-2 border-neutral-400 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 hover:border-blue-900 ">
              {" "}
              <img
                src="https://logos-marques.com/wp-content/uploads/2021/02/Jawa-Logo.png"
                className="h-12 w-16"
                alt=""
              />
            </div>
            <div className="  rounded border w-1/6 p-2 place-content-center hover:border-blue-900 hover:border-solid flex items-center justify-center border-2 border-neutral-400 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 hover:border-blue-900 ">
              <img
                src="http://pluspng.com/img-png/honda-logo-7-png-3072-2416-logos-pinterest-honda-and-motorcycle-companies-3072.png"
                className="h-12 w-16"
                alt=""
              />
            </div>
            <div className="  rounded border w-1/6  p-2 place-content-center hover:border-blue-900 hover:border-solid flex items-center justify-center border-2 border-neutral-400 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 hover:border-blue-900 ">
              <img
                src="https://listcarbrands.com/wp-content/uploads/2017/11/Bajaj-Logo.png"
                className="h-12 w-16"
                alt=""
              />
            </div>
            <div className="  rounded border w-1/6 p-2 place-content-center hover:border-blue-900 hover:border-solid flex items-center justify-center border-2 border-neutral-400 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 hover:border-blue-900 ">
              <img
                src="https://logonoid.com/images/royal-enfield-logo.png"
                className="h-12 w-16"
                alt=""
              />
            </div>
            <div className=" w-100px rounded border w-1/6  p-2 place-content-center hover:border-blue-900 hover:border-solid flex items-center justify-center border-2 border-neutral-400 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 hover:border-blue-900 ">
              <img
                src="https://purepng.com/public/uploads/large/yamaha-logo-yny.png"
                className="h-12 w-16"
                alt=""
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" w-9 m-2 h-11"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <div className=" flex flex-row  flex justify-end gap-3 ">
          <div className="flex flex-col w-1/6  gap-2 border flex items-center justify-center  divide-x   rounded-r-xl divide-y border-blue-900 border-solid border-2 place-content-center">
            <img
              src="https://bikeadvice.in/wp-content/uploads/2017/02/New-Pulsar-NS200-Pics-Wild-Red-colour.jpg"
              className="h-20 max-40 border-blue-900 "
              alt=""
            />
            <img
              src="https://cdn.bajajauto.com/-/media/assets/bajajauto/360degreeimages/bikes/pulsar/pulsar-rs-200/red/00.png"
              className="h-20 max-40 border-blue-900 "
              alt=""
            />
            <img
              src="https://pulsarperu.com/wp-content/uploads/2022/03/bajaj-dominar-400-20-2022-verde-68d7b6-1024x654.png"
              className="h-20 max-40 border-blue-900 "
              alt=""
            />
          </div>
          <div className=" flex w-5/6  flex-6 flex-row p-4 rounded-xl bg-indigo-200 divide-x divide-black > * + * border border-blue-900 border-solid border-2 gap-2 place-content-center">
            <div className="w-3/6">
              <div className="flex flex-row items-centre justify-center">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-9 m-2 h-21"
                >
                  <path
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>{" "}
                <img
                  className="h-45 w-60"
                  src="https://somosmoto.pe/images/models/colors/bajaj-pulsar-ns200-fi-2021-azul-186af3.png"
                  alt="logo"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" w-9 m-2 h-21"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div><div className="flex flex-row items-centre justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-black">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
</svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-900">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
</svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-600">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
</svg>
</div>
            <div className="flex flex-col ">    <h1 className="text-2xl flex justify-center font-bold ">Pulsar NS 200</h1>
           <h3 className="text-lg flex justify-center">1.41 Lakh (STD)</h3>
              <div className="flex flex-row justify-around ">
                <div className="flex flex-row ">
                  <input className="accent-blue-900 m-1" type="checkbox" />
                  <p className="text-xs  ">Having Ready Cash</p>
                </div>
                <div className="flex flex-row">
                  <input className="accent-blue-900 m-1" type="checkbox" />
                  <h6 className="text-xs">Planned to take loan</h6>
                </div>
              </div></div> 
            </div>
            <div className="divide-y m-2 divide-slate-500 > * + * p-5  gap-3 flex flex w-3/6 flex-col">
              <h2 className="text-xl font-bold m-1 ">Specification 
</h2> 
         <div className="flex flex-row">    <h3 className="text-sm m-1 flex-1"> Engine & Transmission</h3><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 m-1 flex-none">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
</svg>
</div> 
<div className="flex flex-row">  <h3 className="text-sm m-1 flex-1">Features</h3><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 m-1 flex-none  ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
</svg></div>
<div className="flex flex-row">  <h3 className="text-sm m-1 flex-1">Mileage & Performance</h3><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 m-1 flex-none">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
</svg></div>
<div className="flex flex-row">    <h3 className="text-sm m-1 flex-1">Chassis & Suspension</h3><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 m-1 flex-none">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
</svg></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
