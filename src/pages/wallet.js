import React, { Component, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Payment from "../components/Payment";
import Mint from "../components/Mint";
import NoMetamask from "../components/NoMetamask";
import image1 from "../assets/img/metamask.png";
import Web3 from "web3";
import Loader from "react-loader-spinner";

class WalletPage extends Component {
  async componentWillMount() {
    window.scrollTo(0, 0);
    await this.loadWeb3();
    this.setState({ isLoaded: 1 });
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      if (!(await this.isLocked())) {
        this.setState({ flag: 1 });
      } else {
        this.setState({ flag: 2 });
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      if (!(await this.isLocked())) {
        this.setState({ flag: 1 });
      } else {
        this.setState({ flag: 2 });
      }
    } else {
      this.setState({ flag: 0 });
    }
  }
  async isLocked() {
    const accounts = await window.web3.eth.getAccounts();
    if (accounts.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      flag: 0,
      isLoaded: 0
    };
  }

  render() {
    const renderBody = () => {
      if (this.state.flag === 0) {
        return (
          <NoMetamask
            image={image1}
            text=""
            para="Ethereum Wallet Not Detected"
            showDownload="true"
          />
        );
      } else if (this.state.flag === 1) {
        return <Mint web3Handle={window.web3} />;
      } else if (this.state.flag === 2) {
        return (
          <NoMetamask
            image={image1}
            text=""
            para="Metamask is locked."
            showDownload="false"
          />
        );
      }
    };
    return (
      <>
        <Navbar />

        {this.state.isLoaded === 1 ? (
          renderBody()
        ) : (
          <Loader
            type="Oval"
            color="#00BFFF"
            height={50}
            width={50}
            timeout={3000} //3 secs
          />
        )}
        <Footer />
      </>
    );
  }
}

export default WalletPage;
