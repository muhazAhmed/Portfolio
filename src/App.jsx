import React, { Suspense } from "react";
const Layout = React.lazy(() => import("./layout/Layout"));
import "./index.css";
import Loading from "./layout/Loading";

const App = () => {
  return (
    <div className="app">
      <Suspense fallback={<Loading />}></Suspense>
      <Layout />
    </div>
  );
};

export default App;
