import useAxios from "./customizedhooks/useAxios"

function App() {
  const [status, loader, data] = useAxios("/ping")

  return (
    <>
      <header className="px-8 py-4 text-xl font-semibold shadow-sm">
        <h1>Coindashboard</h1>
      </header>
      <div className="container mx-auto text-center md:w-2/3">
        <h1 className="text-6xl font-bold text-indigo-600 md:text-7xl mt-44 rotate-6 ">Hello ❤️ Capgemini!</h1>
      </div>
      {/* ADDED */}
      {!loader ? status !== 200 ?
        <h1>Server error message : {status.message}</h1>
        :
        <h1>Server response DATA: {data.gecko_says}</h1>
        :
        <h1>LOADING DATA.....</h1>
      }
      {/* ADDED */}
    </>
  );
}

export default App;
