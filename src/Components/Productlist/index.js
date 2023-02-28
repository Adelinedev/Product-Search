import React, { Component } from "react";
import Product from "../Product";
import Searchbox from "../Searchbox";
import Sort from "../Sort";
import CategoryButtons from "../CategoryButtons";

const products = [
  {
    name: "Leather Jacket",
    category: "jackets",
    description:
      "Whether it's to protect from wind or just to look super cool, this leather jacket has you covered.",
    price: 400,
    imgUrl:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQJTBhWFSaUdkwj6lLp_uftOg8wxIhlGx1wjDzd4VzvhRufCHGDaZ1RNC9KulzInLoJ-LhM8igR6qCF5ssMNp7Mp2ue5hFKRh7TgdsYKUNj_S2H_QVz1xR57w&usqp=CAc",
  },
  {
    name: "Wool cardigan",
    category: "jackets",
    description:
      "Beautifully warm and soft, this cardigan will make you feel cosy on a cold day.",
    price: 80,
    imgUrl:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQpvMlsmNpzREep0scVFHoXQNCyDd-eVviQRUUqH9jyupKLUO1uX3nI1BcK-QKuIuZrIe7DlOKrJh28YOVlrAKZ-XvK8RkP0CxiWkAIL0-lUoj_mK81MGYw&usqp=CAc",
  },
  {
    name: "Striped business shirt",
    category: "shirts",
    description:
      "No ironing necessary to look professional every day with this striped shirt.",
    price: 50,
    imgUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQl7l0mIhP6UBofmAP2ICMc7GVEAYm5rgtacvhbt7LQHIUyWGt5ZZHIFKPtBHt-0WvRGDzEM3jCuYt6Glf2vUf9OQub83o-vpouqeZbOEw&usqp=CAE",
  },
  {
    name: "Short-sleeved polo shirt",
    category: "shirts",
    description: "The best shirt you can get for that business-casual look.",
    price: 30,
    imgUrl:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSXurVQE7a1W2wC-iHJemTspOQXlEl5gcw2FDz9BDZTxo3ZAoZFcS1WpCypE4ZTP9tNhIWgC8u38SqbRqAfUdzGwhSeRzLZdYlXKWP00ClHWNIVI1KTTifn&usqp=CAE",
  },
  {
    name: "Plain business shirt",
    category: "shirts",
    description:
      "No ironing necessary to look professional every day with this plain business shirt.",
    price: 50,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRhtzr2X5OWkAiaM0LnqipMmfj599ff5KKAZeRq6iFChtcsVwMZKmKDPvOZAkqQbBoE3Qc1VYABZWCsk4I5wGE6Qe_oD7hjsVtx77lVSM-ZBGrjP6xMO0K3KQ&usqp=CAE",
  },
  {
    name: "Suit Jacket",
    category: "jackets",
    description: "Wear it with jeans or suit pants, it works with both!",
    price: 120,
    imgUrl:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTv2j6hst39Af5wOFo5tCSP4WE3g883cs6B65KljptHq8AMjHt9Z_Eb26-MY1SIRQ3FlcDnTqmeVls-htjUKH1UcONSeRPkXeOo2-2I9-s&usqp=CAE",
  },
  {
    name: "Suit Trousers",
    category: "pants",
    description:
      "Get 5 of these and you've got pants for every day of the week.",
    price: 100,
    imgUrl:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTR5p7verXotZrfIFIch1hIIyehXqo65NkjM-0LsI-9TtkqN45-zJdu13ODwYz81UFs2OMBmnwqVRaSx6yKe19W-TfBHBL7Jk8g5UBaoehYvJUZ_BscXJkv&usqp=CAE",
  },
  {
    name: "Denim Jeans",
    category: "pants",
    description:
      "A timeless classic, these denim jeans will never go out of style.",
    price: 80,
    imgUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSX7VaMRsuxr2UR9tpvw_Y--IAwDJF7JFN0IzGMNPlei4PgeueoaWDCmth7g3u2EVIV5l7qmaYLVSwPBrVsiIKbO0qv0pCvoodLIPftXUp4W61PfricqrDG&usqp=CAE",
  },
  {
    name: "Pencil Skirt",
    category: "skirts",
    description:
      "A classy work-ready skirt that will make you feel like a million bucks.",
    price: 100,
    imgUrl:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSBq9iwXeAl5u1bMZ039LdTG3u5m9dwYNn5swZjzkVKiE7GP5xGS0jtxZzDd9KalwWz0lSQxh1RfHF1hukFQLrUjVtrkPMVPmZgIzRKftLevi3MzN0OZFWX0Q&usqp=CAE",
  },
  {
    name: "Cotton flowy skirt",
    category: "skirts",
    description:
      "For those warm summer days when you just need to feel the breeze on your legs.",
    price: 45,
    imgUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSQ0a6r_tfafDUww678XWmWM1cWib5AltecXgxl0AR8fts-Ji3XCU-qOcZ5b2Z5cVFwX852Dfbjv2Qb8tzuyMK8a9To8CPW2JVVTknPC25huH60HTLdOBxPUQ&usqp=CAE",
  },
];

export default class Productlist extends Component {
  state = { productsMap: products };
  render() {
    const getDataFromSearch = (e) => {
      this.setState({
        productsMap: e,
      });
    };
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <div className="flex flex-col lg:flex-row lg:justify-between relative">
              <Searchbox
                getDataFromSearch={getDataFromSearch}
                products={products}
              />
              <div className="flex flex-col lg:flex-row items-center">
                <Sort
                  products={products}
                  getDataFromSearch={getDataFromSearch}
                />
                <CategoryButtons
                  products={products}
                  getDataFromSearch={getDataFromSearch}
                />
              </div>
            </div>

            <hr className="border-t border-gray-300 my-4"></hr>
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {this.state.productsMap.map((item) => {
                return (
                  <Product
                    name={item.name}
                    category={item.category}
                    description={item.description}
                    price={item.price}
                    imgUrl={item.imgUrl}
                    key={item.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
