import { FirstSection, SecondSection, Footer } from "../styles/homeStyles";
import homeImg from "../Media/home_illustration.svg";
import { useState } from "react";
import { sendRequest } from "../helpers/fetchData";
import Spinner from "./spinner";

export default function Home() {
  const [response, setResponse] = useState();

  return (
    <>
      <div className="home_container">
        <FirstSection>
          <section>
            <div className="main_text">TopStore API</div>
            <p>
              TopStore REST API for your e-commerce or shopping website
              prototype
            </p>
            <div className="buttons">
              {/* <button
                onClick={() =>
                  (window.location = "https://topstore.netlify.app")
                }
              >
                <span>Visit TopStore</span>
              </button> */}
              <button onClick={() => (window.location = "/docs")}>
                <span>Read Docs</span>
                <i className="far fa-file"></i>
              </button>
              <button
                onClick={() =>
                  (window.location =
                    "https://github.com/rohitdhas/TopStore-API")
                }
              >
                <span>View on GitHub</span>
                <i className="fab fa-github"></i>
              </button>
            </div>
          </section>
          <img id="home_img" src={homeImg} alt="home_img" />
        </FirstSection>
        <SecondSection>
          <h4>//Make your First Request to TopStore API</h4>
          <div className="example_code">
            <h2>Example Code</h2>
            <pre>
              <code>
                {`fetch("${process.env.REACT_APP_SERVER_URL}/products/1")\n\t.then((res) => res.json())\n\t.then((data) => console.log(data))`}
              </code>
            </pre>
            <button
              onClick={() =>
                sendRequest("products/1", "getOne_req", setResponse)
              }
            >
              Send Request
            </button>
          </div>
          <div className="example_response" id="getOne_req">
            <Spinner />
            {!response ? null : (
              <>
                <h2>Response</h2>
                <pre>
                  <code>{JSON.stringify(response, null, 6)}</code>
                </pre>
              </>
            )}
          </div>
          <div className="routes_section">
            <h2>Supported Routes</h2>
            <p>All HTTP methods are supported</p>
            <ul>
              <li>
                <span className="method">HTTP Method</span>
                <span>Route</span>
              </li>
              <li>
                <span className="method">GET</span>
                <a href="/api/products">/products</a>
              </li>
              <li>
                <span className="method">GET</span>
                <a href="/api/products/1">/products/1</a>
              </li>
              <li>
                <span className="method">GET</span>
                <a href="/api/products/categories">/products/categories</a>
              </li>
              <li>
                <span className="method">GET</span>
                <a href="/api/products/category/accessories">
                  /products/category/accessories
                </a>
              </li>
              <li>
                <span className="method">GET</span>
                <a href="/api/products?limit=5">/products?limit=5</a>
              </li>
              <li>
                <span className="method">POST</span>
                <span>/products</span>
              </li>
              <li>
                <span className="method">PUT</span>
                <span>/products/1</span>
              </li>
              <li>
                <span className="method">PATCH</span>
                <span>/products/1</span>
              </li>
              <li>
                <span className="method">DELETE</span>
                <span>/products/1</span>
              </li>
            </ul>
            <button onClick={() => (window.location = "/docs")}>
              Read Docs
            </button>
          </div>
        </SecondSection>
      </div>
      <Footer>
        <span>
          Made with <i className="fas fa-heart"></i> by{" "}
          <a href="https://www.linkedin.com/in/rohitdhas" target="_blank">
            Rohit Dhas
          </a>
        </span>
      </Footer>
    </>
  );
}
