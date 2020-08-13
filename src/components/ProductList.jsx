import React, { Fragment } from 'react';
import Product from "./Product";
import Title from "../components/Title";
import { ProductConsumer } from "../context.jsx";
// import { storeProducts } from "../data";

const ProductList = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const getData = () => {
  //     setProducts(storeProducts);
  //   }
  //   getData();
  // }, []);


  return (
    <Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="Products" />
          <div className="row">
            <ProductConsumer>
              {(value) => {
                return value.products.map(product =>
                  <Product key={product.id} product={product} />
                )
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductList;