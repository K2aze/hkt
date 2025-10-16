import { useTranslation } from "react-i18next"
import ArrowIcon from "./assets/ArrowIcon"
import { useState } from "react"

function App() {
  const { t, i18n } = useTranslation()
  const [showLangDropdown, setShowLangDropdown] = useState(false)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  const scrollTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }




  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollTop(e)}
              >
                {t("top")}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  scrollToSection(e, "about")
                }
              >
                {t("ecotourism")}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#spots"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  scrollToSection(e, "spots")
                }
              >
                {t("tourist_spots")}
              </a>
            </li>
            <li className="nav__item"><a href="https://www.unicef.or.jp/kodomo/sdgs/17goals/" target="_blank">{t("sdgs")}</a></li>
          </ul>
        </nav>
        <div style={{ position: "relative", display: "inline-block" }}>
          <button
            className="header__menu-btn"
            onClick={() => setShowLangDropdown((prev) => !prev)}
          >
            ☰
            <span>{t("language")}</span>
          </button>
          {showLangDropdown && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                background: "#fff",
                border: "1px solid #ccc",
                zIndex: 1000,
                minWidth: "120px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
            >
              <button
                style={{ width: "100%", padding: "8px", textAlign: "left", background: "none", border: "none" }}
                onClick={() => { changeLanguage("en"); setShowLangDropdown(false); }}
              >
                English
              </button>
              <button
                style={{ width: "100%", padding: "8px", textAlign: "left", background: "none", border: "none" }}
                onClick={() => { changeLanguage("ja"); setShowLangDropdown(false); }}
              >
                日本語
              </button>
              <button
                style={{ width: "100%", padding: "8px", textAlign: "left", background: "none", border: "none" }}
                onClick={() => { changeLanguage("vi"); setShowLangDropdown(false); }}
              >
                Tiếng Việt
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero__text">
            <p>{t("hero_text")}</p>
          </div>
          <div className="hero__image">
            <img src="imgs/1758413403911.jpg" alt="Hero Image" />
          </div>
        </section>

        <section className="about" id="about">
          <div className="about__quest">
            <h2 className="about__quest__title">{t("what_is_ecotourism")}</h2>
            <span className="about__quest__pt">?</span>
          </div>
          <div className="about__content">
            <h2 className="about__content__title">{t("ecotourism_description_title")}</h2>
            <p className="about__content__desc">
              {t("ecotourism_description")}
            </p>
          </div>
        </section>

        <section className="spots" id="spots">

          <div className="spots__item">
            <div className="spots__image">
              <img src="imgs/1758413403792.jpg" alt="Spot 1" />
            </div>
            <div className="spots__text">
              <h3 className="spots__subtitle">{t("hiruzen_cycling")}</h3>
              <p className="spots__desc">
                {t("hiruzen_cycling_description")}
              </p>
            </div>
          </div>

          <div className="spots__item">
            <div className="spots__image">
              <img src="imgs/1758413404027.jpg" alt="Spot 2" />
            </div>
            <div className="spots__text">
              <h3 className="spots__subtitle">{t("canoe_ecotour")}</h3>
              <p className="spots__desc">
                {t("canoe_ecotour_description")}
              </p>
            </div>
          </div>

          <div className="spots__slider">
            <button className="slider__btn slider__btn--prev">‹</button>
            <div className="slider__list">
              <div className="slider__item">
                <img className="slider__item__img" src="imgs/1758413403665.jpg" alt="観光地1" />
                <h3>{t("traditional_lodging")}</h3>
                <p>{t("traditional_lodging_description")}</p>
              </div>
              <div className="slider__item">
                <img className="slider__item__img" src="imgs/1758413403561.jpg" alt="観光地2" />
                <h3>{t("traditional_lodging")}</h3>
                <p>{t("traditional_lodging_description")}</p>
              </div>
              <div className="slider__item">
                <img className="slider__item__img" src="imgs/1758413403792.jpg" alt="観光地3" />
                <h3>{t("traditional_lodging")}</h3>
                <p>{t("traditional_lodging_description")}</p>
              </div>
            </div>
            <button className="slider__btn slider__btn--next">›</button>
          </div>
        </section>

        <section className="sdgs">
          <div className="sdgs__content">
            <h2 className="sdgs__title">{t("sdgs_initiatives")}</h2>
            <p className="sdgs__desc">{t("sdgs_full_form")}</p>
            <a href="https://www.unicef.or.jp/kodomo/sdgs/17goals/" target="_blank" className="sdgs__btn">{t("read_more")} <ArrowIcon /></a>
          </div>
          <div className="sdgs__image">
            <img src="imgs/1758413404027.jpg" alt="SDGs Image" />
          </div>
        </section>

        <section className="reservation">
          <div className="reservation__image">
            <img src="imgs/1758413403854.jpg" alt="Reservation" />
          </div>
          <div className="reservation__content">
            <p className="reservation__text">{t("reservation_text")}</p>
            <a href="https://www.hekisuien.jp/" target="_blank" rel="noopener" className="reservation__btn">{t("book_now")} <ArrowIcon /></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__catch">{t("hero_text")}</p>
        <nav className="footer__nav">
          <ul className="footer__list">
            <li className="footer__item">
              <a
                href="#"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollTop(e)}
              >
                {t("top")}
              </a>
            </li>
            <li className="footer__item">
              <a
                href="#about"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  scrollToSection(e, "about")
                }
              >
                {t("ecotourism")}
              </a>
            </li>
            <li className="footer__item">
              <a
                href="#spots"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  scrollToSection(e, "spots")
                }
              >
                {t("tourist_spots")}
              </a>
            </li>
            <li className="footer__item"><a href="https://www.unicef.or.jp/kodomo/sdgs/17goals/" target="_blank">{t("sdgs_initiatives")}</a></li>
          </ul>
        </nav>

        <a
          className="stt"
          href="#"
          aria-label="scroll to top"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollTop(e)}
        >
          <span className="stt__circle"></span>
          <ArrowIcon />
        </a>
      </footer>
    </>
  )
}

export default App