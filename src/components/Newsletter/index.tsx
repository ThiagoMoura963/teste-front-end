import type React from "react";
import { useState } from "react";
import "./style.scss";

export const Newsletter = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [accept, setAccept] = useState<boolean>(false);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!accept) return;

    alert("Inscrição realizada com sucesso!");
    setName("");
    setEmail("");
    setAccept(false);
  };

  return (
    <section className="newsletter">
      <div className="newsletter__container">
        <div className="newsletter__content">
          <h2 className="newsletter__title">Inscreva-se na nossa newsletter</h2>
          <p className="newsletter__subtitle">
            Assine a nossa newsletter e receba as novidades e contaúdos
            exclusivos da Econverse
          </p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__inputs-group">
            <input
              type="text"
              placeholder="Digite seu nome"
              className="newsletter__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="newsletter__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              className="newsletter__button"
              disabled={!accept}
            >
              INSCREVER
            </button>
          </div>

          <div className="newsletter__terms">
            <input
              type="checkbox"
              id="terms"
              checked={accept}
              onChange={() => setAccept(!accept)}
            />
            <label htmlFor="terms">Aceito os termos e condições</label>
          </div>
        </form>
      </div>
    </section>
  );
};
