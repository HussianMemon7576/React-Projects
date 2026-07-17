import Searchbar from "../Components/Searchbar";
import Activetabs from "../Components/Activetabs";
import Result from "../Components/Result";


const Home = () => {

  return (
    <main className="min-h-screen bg-slate-100">

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Searchbar />
        <Activetabs />
        <Result />
      </div>

    </main>
  );
};

export default Home;