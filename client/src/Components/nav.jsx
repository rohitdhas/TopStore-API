import { NavBar } from "../styles/navbarStyles";

export default function Nav() {
  return (
    <NavBar>
      <div id="site_logo">
        <a href="/">
          <span>top</span>Store API
        </a>
      </div>
      <ul>
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/docs">
          <li>Docs</li>
        </a>
        <a href="https://github.com/rohitdhas/TopStore-API">
          <li>GitHub</li>
        </a>
      </ul>
    </NavBar>
  );
}
