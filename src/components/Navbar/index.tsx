import iconCrown from "../../assets/icons/IconCrown.svg";
import "./style.scss";

type NavItem = {
  label: string;
  isHighlight?: boolean;
  hasIcon?: boolean;
};

const navItems: NavItem[] = [
  { label: "Todas Categorias" },
  { label: "Supermercado" },
  { label: "Livros" },
  { label: "Moda" },
  { label: "Lançamentos" },
  { label: "Ofertas do Dia", isHighlight: true },
  { label: "Assinatura", hasIcon: true },
];

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ul className="navbar__list">
          {navItems.map((item) => {
            return (
              <li
                key={item.label}
                className={`navbar__item ${item.isHighlight ? "navbar__item--highlight" : ""} ${item.hasIcon ? "navbar__item--with-icon" : ""}`}
              >
                <a
                  href="#"
                  className={item.isHighlight ? "navbar__link--highlight" : ""}
                >
                  {item.hasIcon && (
                    <img src={iconCrown} alt="" className="navbar__icon" />
                  )}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
