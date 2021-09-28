import Spinner from "./spinner";
import docImg from "../Media/cart_illustration.svg";
import { Footer } from "../styles/homeStyles";
import { CodeTest, TopSection, TestSection } from "../styles/docsStyles";
import { useState } from "react";
import { sendRequest, staticRequests } from "../helpers/fetchData";

export default function Docs() {
  const [oneProduct, setOneProduct] = useState();
  const [allProducts, setAllProducts] = useState();
  const [categories, setCategories] = useState();
  const [productsByCategory, setProductsByCategory] = useState();
  const [postOne, setPostOne] = useState();
  const [updateOne, setUpdateOne] = useState();
  const [updateSpecific, setUpdateSpecific] = useState();
  const [deleteOne, setDeleteOne] = useState();

  return (
    <>
      <div id="docs_container">
        <TopSection>
          <section>
            <h2>Getting Started</h2>
            <p>
              topStore API can be used with any type of shopping project that
              needs products data in JSON format. You can use examples below to
              check how topStore API works and feel free to enjoy it in your
              awesome projects!
            </p>
          </section>
          <img src={docImg} alt="cart_illustration" />
        </TopSection>
        {/* Tests Start Here */}
        <TestSection>
          <h1>API Tests</h1>
          <CodeTest>
            <div className="test_name">Get One Product</div>
            <pre>
              <code>
                {`fetch("http://localhost:8080/products/1")\n\t.then((res) => res.json())\n\t.then((data) => console.log(data))`}
              </code>
            </pre>
            <button
              onClick={() =>
                sendRequest("products/1", "getOne_req", setOneProduct)
              }
            >
              Send Request
            </button>
            <div className="example_response" id="getOne_req">
              <Spinner />
              {!oneProduct ? null : (
                <>
                  <h2>Response</h2>
                  <pre>
                    <button onClick={() => setOneProduct(null)}>Clear</button>
                    <code>{JSON.stringify(oneProduct, null, 6)}</code>
                  </pre>
                </>
              )}
            </div>
          </CodeTest>
          <CodeTest>
            <div className="test_name">Get All Product</div>
            <pre>
              <code>
                {`fetch("http://localhost:8080/products?limit=5")\n\t.then((res) => res.json())\n\t.then((data) => console.log(data))`}
              </code>
            </pre>
            <div className="note">
              NOTE - You can limit results using limit query!
            </div>
            <button
              onClick={() =>
                sendRequest("products?limit=5", "getAll_req", setAllProducts)
              }
            >
              Send Request
            </button>
            <div className="example_response" id="getAll_req">
              <Spinner />
              {!allProducts ? null : (
                <>
                  <h2>Response</h2>
                  <pre>
                    <button onClick={() => setAllProducts(null)}>Clear</button>
                    <code>{JSON.stringify(allProducts, null, 6)}</code>
                  </pre>
                </>
              )}
            </div>
            {/* <Spinner /> */}
          </CodeTest>
          <CodeTest>
            <div className="test_name">Get Categories</div>
            <pre>
              <code>
                {`fetch("http://localhost:8080/products/categories")\n\t.then((res) => res.json())\n\t.then((data) => console.log(data))`}
              </code>
            </pre>
            <button
              onClick={() =>
                sendRequest(
                  "products/categories",
                  "getCategory_req",
                  setCategories
                )
              }
            >
              Send Request
            </button>
            <div className="example_response" id="getCategory_req">
              <Spinner />
              {!categories ? null : (
                <>
                  <h2>Response</h2>
                  <pre>
                    <button onClick={() => setCategories(null)}>Clear</button>
                    <code>{JSON.stringify(categories, null, 6)}</code>
                  </pre>
                </>
              )}
            </div>
            {/* <Spinner /> */}
          </CodeTest>
          <CodeTest>
            <div className="test_name">Get Products by Category</div>
            <pre>
              <code>
                {`fetch("http://localhost:8080/products/category/electronics")\n\t.then((res) => res.json())\n\t.then((data) => console.log(data))`}
              </code>
            </pre>
            <button
              onClick={() =>
                sendRequest(
                  "products/category/electronics",
                  "getByCategory_req",
                  setProductsByCategory
                )
              }
            >
              Send Request
            </button>
            <div className="example_response" id="getByCategory_req">
              <Spinner />
              {!productsByCategory ? null : (
                <>
                  <h2>Response</h2>
                  <pre>
                    <button onClick={() => setProductsByCategory(null)}>
                      Clear
                    </button>
                    <code>{JSON.stringify(productsByCategory, null, 6)}</code>
                  </pre>
                </>
              )}
            </div>
            {/* <Spinner /> */}
          </CodeTest>
          <CodeTest>
            <div className="test_name">Add a new Product</div>
            <pre>
              <code>
                {`
                fetch("http://localhost:8080/products", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                      name: "Nike T-Shirt",
                      price: 2000,
                      description: "Lorem ipsum set dolor...",
                      image: "https://picsum.photos/200/300",
                      category: "clothing"
                  })
                })
                .then(res=>res.json())
                .then(json=>console.log(json))
              `}
              </code>
            </pre>
            <div className="note">
              NOTE - If you send an object like the code above, it will return
              you an object with a new id. remember that nothing in real will
              insert into the database. so if you want to access the new id you
              will get a 404 error.
            </div>
            <button onClick={() => staticRequests("POST", setPostOne)}>
              Send Request
            </button>
            <div className="example_response">
              {!postOne ? null : (
                <>
                  <h2>Response</h2>
                  <pre>
                    <button onClick={() => setPostOne(null)}>Clear</button>
                    <code>{JSON.stringify(postOne, null, 6)}</code>
                  </pre>
                </>
              )}
            </div>
          </CodeTest>
          <CodeTest>
            <div className="test_name">Update an Existing Product</div>
            <pre>
              <code>
                {`
              fetch("http://localhost:8080/products/2", {
                  method: "PUT",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                      name: "Nike T-Shirt",
                      price: 2000,
                      description: "Lorem ipsum set dolor...",
                      image: "https://picsum.photos/200/300",
                      category: "clothing"
                  })
                })
                .then(res=>res.json())
                .then(json=>console.log(json))
                `}
              </code>
            </pre>
            <button onClick={() => staticRequests("PUT", setUpdateOne)}>
              Send Request
            </button>
            <div className="example_response">
              {!updateOne ? null : (
                <>
                  <h2>Response</h2>
                  <pre>
                    <button onClick={() => setUpdateOne(null)}>Clear</button>
                    <code>{JSON.stringify(updateOne, null, 6)}</code>
                  </pre>
                </>
              )}
            </div>
          </CodeTest>
          <CodeTest>
            <div className="test_name">Update a specific field</div>
            <pre>
              <code>
                {`
              fetch("http://localhost:8080/products/2", {
                  method: "PATCH",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                      name: "Nike T-Shirt"
                  })
                })
                .then(res=> res.json())
                .then(json=> console.log(json))
                `}
              </code>
            </pre>
            <div className="note">
              NOTE - This will return an object with sent id. And remember
              nothing in real will update in Database!
            </div>
            <button onClick={() => staticRequests("PATCH", setUpdateSpecific)}>
              Send Request
            </button>
            <div className="example_response">
              {!updateSpecific ? null : (
                <>
                  <h2>Response</h2>
                  <pre>
                    <button onClick={() => setUpdateSpecific(null)}>
                      Clear
                    </button>
                    <code>{JSON.stringify(updateSpecific, null, 6)}</code>
                  </pre>
                </>
              )}
            </div>
          </CodeTest>
          <CodeTest>
            <div className="test_name">Delete a Product</div>
            <pre>
              <code>
                {`
              fetch('http://localhost:8080/products/1',{
                method:"DELETE"
            })
                .then(res=>res.json())
                .then(json=>console.log(json))
                `}
              </code>
            </pre>
            <div className="note">
              NOTE - The product will not be deleted on the database. It will
              return you the fake deleted product.
            </div>
            <button
              onClick={() =>
                sendRequest(
                  "products/1",
                  "deleteOne_req",
                  setDeleteOne,
                  "DELETE"
                )
              }
            >
              Send Request
            </button>
            <div className="example_response" id="deleteOne_req">
              <Spinner />
              {!deleteOne ? null : (
                <>
                  <h2>Response</h2>
                  <pre>
                    <button onClick={() => setDeleteOne(null)}>Clear</button>
                    <code>{JSON.stringify(deleteOne, null, 6)}</code>
                  </pre>
                </>
              )}
            </div>
          </CodeTest>
        </TestSection>
        {/* Tests Start Here */}
      </div>
      <Footer>
        <span>
          Made with <i className="fas fa-heart"></i> by{" "}
          <a
            href="https://www.linkedin.com/in/rohit-dhas-26b68215a/"
            target="_blank"
          >
            Rohit Dhas
          </a>
        </span>
      </Footer>
    </>
  );
}
