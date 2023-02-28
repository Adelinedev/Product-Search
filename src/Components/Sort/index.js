import React, { Component } from "react";

export default class Sort extends Component {
  render() {
    const { products, getDataFromSearch } = this.props;
    const sortAscend = () => {
      const ascendingitems = products.sort((a, b) => a.price - b.price);
      console.log(ascendingitems);
      getDataFromSearch(ascendingitems);
    };
    const sortDescend = () => {
      const descendingitems = products.sort((a, b) => b.price - a.price);
      console.log(descendingitems);
      getDataFromSearch(descendingitems);
    };
    return (
      <div className="flex mb-1 md:absolute items-center lg:items-end lg:mb-0 lg:static top-0 right-0 ">
        <p className="pr-1 text-gray-500">Sort by price </p>
        <button
          className="rounded-full text-sm leading-3 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
          onClick={sortAscend}
        >
          <svg
            className="inline-block w-4 h-4 mx-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <button
          className="rounded-full text-sm leading-3 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
          onClick={sortDescend}
        >
          <svg
            className="inline-block w-4 h-4 mx-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            ></path>
          </svg>
        </button>
      </div>
    );
  }
}
