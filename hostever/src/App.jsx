import Header from "./component/Header";
import Dashboard from "./component/Dashboard";
import Footer from "./component/Footer";
import Mid from "./component/Mid";
import Linux from "./component/Linux";
import Windows from "./component/Windows";
import Notify from "./component/Notify";


const App = () => {
    return (
    <div>
    <Header/>
    <Dashboard />
      <Mid />
      <Linux/>
      <Windows/>
      <Notify/>
      <Footer />
    </div>
  );
};

export default App;

