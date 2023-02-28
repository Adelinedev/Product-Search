import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div className="group relative">
        <a className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          {this.props.category}
        </a>
        <div className="relative h-80 w-full overflow-hidden mt-1 rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          <img
            src={this.props.imgUrl}
            className="h-full w-full object-scale-down object-center object-top-left"
          />
        </div>
        <div className="flex justify-between text-base mt-2 pr-6">
          <p className="font-semibold text-gray-900">{this.props.name}</p>

          <p className=" text-gray-500">{this.props.price} AUD</p>
        </div>
        <h3 className="mt-2 mb-5 text-sm text-gray-500">
          <span className="absolute inset-0" />
          {this.props.description}
        </h3>
      </div>
    );
  }
}
