import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */}</nav>;
  const link = links.map((link) => {
    return (
      <nav>
        {/* display an <a> tag for each link here */}
        <a href={`#$link`} key={link}>
          {link}{" "}
        </a>
      </nav>
    );
  });
  return <nav>{link}</nav>;
}

export default NavBar;
