import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages";
import Overview from "./pages/overview";
import Gallery from "./pages/gallery";
import Wallet from "./pages/wallet";
import WalletHistory from "./pages/walletHistory";
import Payment from "./pages/payment";
import IPFS from "./pages/IPFS";
import Api from "./pages/api";

export default function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/Overview" component={Overview} />
        <Route exact path="/Gallery" component={Gallery} />
        <Route exact path="/Wallet" component={Wallet} />
        <Route exact path="/WalletHistory" component={WalletHistory} />
        <Route exact path="/Payment" component={Payment} />
        <Route exact path="/IPFS" component={IPFS} />
      </Router>
    </>
  );
}
