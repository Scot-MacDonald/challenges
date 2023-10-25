import "./styles.css";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Link from "./components/Link";

import Avatar from "./components/Avatar";
import Logo from "./components/Logo";

export default function App() {
  return (
    <>
      <Header>
        <Logo />

        <Nav>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Nav>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
