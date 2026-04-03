import { useState } from "react";
import type { Product } from "../../types/product";
import "./style.scss";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  // Se não houver produto, o componente não renderiza nada
  if (!product) return null;

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const formatPrice = (value: number) => {
    // Dividindo por 10 conforme sua lógica de negócio anterior
    return (value / 10).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal__close-button"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          ✕
        </button>

        <div className="modal__grid">
          <div className="modal__image-container">
            <img
              src={product.photo}
              alt={product.productName}
              className="modal__image"
            />
          </div>

          <div className="modal__details">
            <h2 className="modal__title">{product.productName}</h2>
            <p className="modal__price">{formatPrice(product.price)}</p>

            <p className="modal__description">
              {product.descriptionShort ||
                "Many desktop publishing packages and web page editors now many desktop publishing"}
            </p>

            <a href="#" className="modal__link">
              Veja mais detalhes do produto &gt;
            </a>

            <div className="modal__actions">
              <div className="modal__quantity-selector">
                <button onClick={handleDecrement} type="button">
                  -
                </button>
                <span>{quantity.toString().padStart(2, "0")}</span>
                <button onClick={handleIncrement} type="button">
                  +
                </button>
              </div>

              <button className="modal__buy-button">COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
