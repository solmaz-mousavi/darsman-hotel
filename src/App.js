import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Provider } from "react-redux";
import store from "./app/store";
import RouteComp from "./route";
import DataProvider from "./contexts/ContextData";

function App() {
  return (
    <>
      <Provider store={store}>
        <DataProvider>
          <Header />
          <main className="main-wrapper">
            <div className="container">
              <RouteComp />
            </div>
          </main>
          <Footer />
        </DataProvider>
      </Provider>
    </>
  );
}

export default App;
