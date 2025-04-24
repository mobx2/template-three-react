import headerLinks from "../data/headerLinks";
import megaMenuLinksPone from "../data/megaMenuLinksPone";
import megaMenuLinksPtwo from "../data/megaMenuLinksPtwo";

function Header() {
  return (
    <>
      <header id="header" className="header">
        <div className="container">
          <a className="logo" href="/public/index.html">
            Hemoo
          </a>

          <ul className="main-nav">
            {headerLinks.map((link) => (
              <li
                key={link.id}
                className={link.hasMegaMenu ? "hasMegaMenu" : ""}
              >
                <a href={link.href} id={link.id}>
                  {link.name}
                </a>

                {link.hasMegaMenu && (
                  <div className="mega-menu">
                    <div className="image">
                      <img src="/imgs/megamenu.png" alt="mega menu" />
                    </div>
                    <ul className="links">
                      {megaMenuLinksPone.map((link) => (
                        <li key={link.id}>
                          <a href={link.href} id={link.id}>
                            <i className={link.icon}></i>
                            {link.displayText}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <ul className="links">
                      {megaMenuLinksPtwo.map((link) => (
                        <li key={link.id}>
                          <a href={link.href} id={link.id}>
                            <i className={link.icon}></i>
                            {link.displayText}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
