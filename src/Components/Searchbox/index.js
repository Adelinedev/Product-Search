import React, { Component } from "react";

export default class Searchbox extends Component {
  state = { inputValue: "" };
  render() {
      const { getDataFromSearch, products } = this.props;
      
    const getKeywords = (e) =>
      this.setState({ inputValue: e.target.value.toLowerCase() });

    const searchKeywords = () => {
      let arr = this.state.inputValue.split(" ");

      const qualifiedResults = products.filter(
        (item) =>
          arr.some((arritem) => item.name.toLowerCase().includes(arritem)) ||
          arr.some((arritem) =>
            item.description.toLowerCase().includes(arritem)
          )
      );

      getDataFromSearch(qualifiedResults);
    };
    return (
      <div>
        <div className="lg:w-auto flex justify-center mb-1.5 md:mb-3 md:justify-start lg:mb-0">
          <input
            type="text"
            placeholder="Search a product"
            className="px-5 py-1 border border-gray-300 rounded-md shadow-md focus:outline-none"
            onChange={(e) => getKeywords(e)}
          />
          <button
            type="submit"
            className="px-4 py-0 bg-gray-400 text-white font-medium rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500 transition-colors duration-300 ease-in-out"
            onClick={searchKeywords}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
