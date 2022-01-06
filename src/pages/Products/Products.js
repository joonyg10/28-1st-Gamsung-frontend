import React, { useEffect, useState } from "react";
import ProductsFilter from "./Filter/ProductsFilter";
import ProductCard from "./ProductCard/ProductCard";
import "./Products.scss";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filterList, setFilterList] = useState({});

  useEffect(() => {
    fetch("http://10.58.3.15:8000/products", {
      method: "GET",
    })
      .then(response => response.json())
      .then(result => setProducts([...result.results]));
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const emptyObj = {};
      products.forEach(({ subcategory }) => {
        if (!Object.keys(emptyObj).includes(subcategory)) {
          emptyObj[subcategory] = false;
        }
      });
      setFilterList(emptyObj);
    }
  }, [products]);

  const changeCheckStatus = (subcategory, event) => {
    const dummyObj = { ...filterList };
    dummyObj[subcategory] = event.target.checked;
    setFilterList({ ...dummyObj });
  };

  return (
    <div className="products">
      <div className="top-image-container">
        <span className="products-list-title">스마트폰</span>
      </div>
      <div className="buffer-layer" />
      <div className="search-status-layer">
        <span>검색결과:</span>
        <span>{products.length} 개</span>
      </div>
      <main className="main-container">
        <div className="aside-filter-container">
          <ProductsFilter
            filterList={filterList}
            changeCheckStatus={changeCheckStatus}
            filterName={Object.keys(filterList)}
          />
        </div>
        <div className="product-list-container">
          {products.map(
            ({
              subcategory,
              main_image,
              name,
              serial_number,
              price,
              storage,
              id,
            }) => {
              if (!Object.values(filterList).includes(true)) {
                return (
                  <ProductCard
                    key={serial_number}
                    main_image={main_image}
                    name={name}
                    serial_number={serial_number}
                    price={price}
                    storage={storage}
                    id={id}
                  />
                );
              } else if (filterList[subcategory]) {
                return (
                  <ProductCard
                    key={serial_number}
                    main_image={main_image}
                    name={name}
                    serial_number={serial_number}
                    price={price}
                    storage={storage}
                    id={id}
                  />
                );
              } else {
                return null;
              }
            }
          )}
        </div>
      </main>
    </div>
  );
};

export default Products;
