import "../css/styles.css";
import React from "react";
import Select from "react-select";
import image1 from "../assets/img/ethereum.svg";
import { useEffect, Component } from "react";
import Payment from "../components/Payment";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Web3 from "web3";

const count = [];
var cost = null;
var optionValue = 1;
var collectibleValue = null;
for (var i = 1; i <= 50; i++) {
  count.push({ label: i, value: i });
}

class Mint extends Component {
  async componentWillUnmount() {
    clearInterval(this.state.accountInterval);
  }

  async componentWillMount() {
    window.scrollTo(0, 0);
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    }

    const web3 = window.web3;
    if (web3) {
      const accounts = await web3.eth.getAccounts();
      this.setState({ account: accounts[0] });
      const networkId = await web3.eth.net.getId();
      // const networkData = Color.networks[networkId];
      // if (networkData) {
      // const abi = Color.abi;
      // const address = networkData.address;
      // const contract = new web3.eth.Contract(abi, address);
      // this.setState({ contract });
      // } else {
      //   window.alert("Smart contract not deployed to detected network.");
      // }
    }

    cost = null;
    optionValue = 1;
    collectibleValue = 2;
    this.check();
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      contract: null,
      totalSupply: 0,
      colors: [],
      noOfAvatars: 1,
      accountInterval: 0,
      network: 1
    };
  }

  async check() {
    this.state.accountInterval = setInterval(async () => {
      const accounts = await window.web3.eth.getAccounts();
      if (accounts.length === 0) {
        window.location.reload();
      }
      if (accounts[0] !== this.state.account) {
        this.setState({ account: accounts[0] });
      }
      if (window.ethereum.networkVersion !== "1") {
        this.setState({ network: 0 });
      } else {
        this.setState({ network: 1 });
      }
    }, 1500);
  }

  mint = (number) => {
    this.state.contract.methods
      .mint(number)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        console.log("NFT Minted");
        this.props.history.push("/WalletHistory");
      });
    this.props.history.push("/Payment");
  };

  state = {
    selectedOption: 1
  };

  state = {
    value: { label: this.props.val, value: this.props.val }
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption.value);
    optionValue = selectedOption.value;
  };

  render() {
    const blockchain = () => {
      console.log("inside blockchain");
      this.props.history.push("/Payment");
    };
    const showCost = () => {
      cost = optionValue * collectibleValue;
      if (cost > 0) {
        return (
          <span className="text-black">
            <b>Total Cost to mint: {cost} ETH</b>
          </span>
        );
      }
    };
    const { selectedOption } = this.state;
    return (
      <div>
        <header className="masthead bg-white text-white text-center">
          <div className="container d-flex align-items-center flex-column">
            <h1 className="masthead-heading text-uppercase mb-0 text-black">
              Its time to mint some Avatars{" "}
            </h1>
            <br />
            <img className="masthead-avatar mb-5" src={image1} alt="..." />
            {this.state.network === 1 ? (
              <div>
                <p className="masthead-subheading font-weight-light mb-0 text-black">
                  Choose required quantity to mint and click on mint button to
                  generate NFTs.
                </p>
                <br />
                <Select
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={count}
                  defaultValue={{ label: 1, value: 1 }}
                  className="select text-black"
                />
                <br />
                <div className="text-center mt-4">
                  <Link
                    to="#"
                    className="btn btn-xl btn-outline-primary"
                    onClick={(event) => {
                      event.preventDefault();
                      this.mint(optionValue);
                    }}
                  >
                    MINT
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-center mt-4">
                <p className="masthead-subheading font-weight-light mb-0 text-red">
                  Please connect to Ethereum Mainnet for minting NFTs
                </p>
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}
export default withRouter(Mint);
