import React from 'react';
import Layout from "./components/Layout"
import { Switch, Route } from "react-router-dom"
import Howitworks from "./Pages/Howitworks";
import SpecialOffers from "./Pages/SpecialOffers"

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Howitworks />
        </Route>
        <Route path="/specialoffers">
          <SpecialOffers />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
