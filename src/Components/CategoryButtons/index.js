import React, { Component } from "react";

export default class CategoryButtons extends Component {
  render() {
    const { products, getDataFromSearch } = this.props;
    const searchHandlerJacketsShirts = (e) => {
      const searchJacketsShirts = products.filter(
        (item) => item.category === e
      );
      getDataFromSearch(searchJacketsShirts);
    };

    const searchHandlerPantsSkirts = () => {
      const searchPantsSkirts = products.filter(
        (item) => item.category === "pants" || item.category === "skirts"
      );
      getDataFromSearch(searchPantsSkirts);
    };
    const searchHandlerAll = () => getDataFromSearch(products);
    return (
      <div className="flex flex-nowrap">
        <button
          className="rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 mx-2"
          onClick={() => searchHandlerJacketsShirts("jackets")}
        >
          jackets
        </button>
        <button
          className="rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 mx-2"
          onClick={() => searchHandlerJacketsShirts("shirts")}
        >
          shirts
        </button>
        <button
          className="rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 mx-2"
          onClick={searchHandlerPantsSkirts}
        >
          pants & skirts
        </button>
        <button
          className="rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 mx-2"
          onClick={searchHandlerAll}
        >
          All category
        </button>
      </div>
    );
  }
}
