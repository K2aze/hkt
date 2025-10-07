import ArrowIcon from "./assets/ArrowIcon"
import "./style.scss"

function App() {

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
                トップ
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  scrollToSection(e, "about")
                }
              >
                エコツーリズム
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#spots"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  scrollToSection(e, "spots")
                }
              >
                観光名所
              </a>
            </li>
            <li className="nav__item"><a href="#">SDGs</a></li>
          </ul>
        </nav>
        <button className="header__menu-btn">
          ☰
          <span>langugage</span>
        </button>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero__text">
            <p>旅することが、<br />未来をつくる。</p>
          </div>
          <div className="hero__image">
            <img src="/imgs/1758413403911.jpg" alt="Hero Image" />
          </div>
        </section>

        <section className="about" id="about">
          <div className="about__quest">
            <h2 className="about__quest__title">エコツーリズムとは</h2>
            <span className="about__quest__pt">?</span>
          </div>
          <div className="about__content">
            <h2 className="about__content__title">自然環境や文化を大切にしながらそこに住む人たちとつながる旅</h2>
            <p className="about__content__desc">
              自然や地域文化を守りながら楽しむ、持続可能な観光のスタイルです。
            </p>
          </div>
        </section>

        <section className="spots" id="spots">

          <div className="spots__item">
            <div className="spots__image">
              <img src="/imgs/1758413403792.jpg" alt="Spot 1" />
            </div>
            <div className="spots__text">
              <h3 className="spots__subtitle">蒜山高原サイクリング</h3>
              <p className="spots__desc">
                蒜山高原界では6月から晩秋に至る長期間にわたり30km圏の自転車道が整備されています。 豊かな自然を感受できる白樺並木を通り、 サイクリング、ウォーキング、ジョッギング、乗馬などのリクリエーションを楽しめます。 自転車は高原の施設店舗をお得に利用される料金でレンタルできます。 女子旅やファミリー、ハニーケーション、一人旅どんなスタイルでも満足してサイクリングを楽しいです。
              </p>
            </div>
          </div>

          <div className="spots__item">
            <div className="spots__image">
              <img src="/imgs/1758413404027.jpg" alt="Spot 2" />
            </div>
            <div className="spots__text">
              <h3 className="spots__subtitle">カヌーエコツアー</h3>
              <p className="spots__desc">
                JR岡山駅から110分という好アクセス。「自然志 向通り、カヌー講座追求を得て」「自然100選」に認定 感じる紅葉のコントラスト、青と白さを風景をまる 水面にしぶる秋晴れ・エコツアー。平日昼営業の キャンプイン構想・ライフワークを図りそして自由、 気。秋の夜で新鮮い晴れをヨウベウでい新鮮い 気。カヌーで秋高いかを気分清流な方ながら素で 受けられいこでい。平静時の計画と上体協調整備 整理でかカヌー・エコツアー の総配がお好ます！
              </p>
            </div>
          </div>

          <div className="spots__slider">
            <button className="slider__btn slider__btn--prev">‹</button>
            <div className="slider__list">
              <div className="slider__item">
                <img className="slider__item__img" src="/imgs/1758413403665.jpg" alt="観光地1" />
                <h3>古民家宿泊施設</h3>
                <p>伝統的な建築と現代的な快適さを融合した宿泊施設での体験</p>
              </div>
              <div className="slider__item">
                <img className="slider__item__img" src="imgs/1758413403561.jpg" alt="観光地2" />
                <h3>古民家宿泊施設</h3>
                <p>伝統的な建築と現代的な快適さを融合した宿泊施設での体験</p>
              </div>
              <div className="slider__item">
                <img className="slider__item__img" src="/imgs/1758413403792.jpg" alt="観光地3" />
                <h3>古民家宿泊施設</h3>
                <p>伝統的な建築と現代的な快適さを融合した宿泊施設での体験</p>
              </div>
            </div>
            <button className="slider__btn slider__btn--next">›</button>
          </div>
        </section>

        <section className="sdgs">
          <div className="sdgs__content">
            <h2 className="sdgs__title">SDGsの取り組み</h2>
            <p className="sdgs__desc">持続可能な開発目標（Sustainable Development Goals）</p>
            <a href="#" className="sdgs__btn">続きを読む <ArrowIcon /></a>
          </div>
          <div className="sdgs__image">
            <img src="/imgs/1758413404027.jpg" alt="SDGs Image" />
          </div>
        </section>

        <section className="reservation">
          <div className="reservation__image">
            <img src="/imgs/1758413403854.jpg" alt="Reservation" />
          </div>
          <div className="reservation__content">
            <p className="reservation__text">自然体験型エコツーリズムのご予約はこちらから</p>
            <a href="https://www.hekisuien.jp/" target="_blank" rel="noopener" className="reservation__btn">ご予約はこちら <ArrowIcon /></a>
          </div>
        </section>
      </main >

      <footer className="footer">
        <p className="footer__catch">旅することが、未来をつくる。</p>
        <nav className="footer__nav">
          <ul className="footer__list">
            <li className="footer__item">
              <a
                href="#"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollTop(e)}
              >
                トップ
              </a>
            </li>
            <li className="footer__item">
              <a
                href="#about"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  scrollToSection(e, "about")
                }
              >
                エコツーリズム
              </a>
            </li>
            <li className="footer__item">
              <a
                href="#spots"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  scrollToSection(e, "spots")
                }
              >
                観光名所
              </a>
            </li>
            <li className="footer__item"><a href="#">SDGsの取り組み</a></li>
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