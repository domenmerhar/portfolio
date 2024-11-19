export const contactForm = `
    <div class="modal">
      <div class="backdrop">
        <form class="modal-card">
          <h2 class="contact__header">Kontakt</h2>

          <label for="#subject" class="contact__subject">Zadeva</label>
          <input
            type="text"
            class="contact__input"
            placeholder="Zadeva"
            id="#subject"
          />
          <p class="contact__subject-error"></p>

          <label for="#message" class="contact__message">Sporočilo</label>
          <textarea
            class="contact__textarea"
            placeholder="Sporočilo"
            id="#message"
          ></textarea>
          <p class="contact__message-error"></p>

          <button class="contact__button">Pošlji</button>
        </form>
      </div>
    </div>`;

export const toast = (message) => `
  <div class="toast hidden">
      <div class="toast__glow"></div>
      ${message}
    </div>`;

export const grandBuyCardHTML = `<div class="modal">
      <div class="backdrop">
        <div class="modal-card">
          <img
            src="assets/grandBuy-details.png"
            alt="grandBuy"
            class="modal__project-image"
          />
          <h2 class="modal__project-header text-gradient">GrandBuy</h2>

          <div class="modal__project-technologies">
            <div class="modal__project-technology">
              <div class="glow--small react-glow"></div>
              <img
                src="assets/react.png"
                alt=""
                class="project-technology__image"
              />
            </div>

            <div class="modal__project-technology">
              <div class="glow--small node-glow"></div>
              <img
                src="assets/node.png"
                alt=""
                class="project-technology__image"
              />
            </div>

            <div class="modal__project-technology">
              <div class="glow--small typescript-glow"></div>
              <img
                src="assets/typescript.png"
                alt=""
                class="project-technology__image"
              />
            </div>

            <div class="modal__project-technology">
              <div class="glow--small css-glow"></div>
              <img
                src="assets/css.png"
                alt=""
                class="project-technology__image"
              />
            </div>

            <div class="modal__project-technology">
              <div class="glow--small html-glow"></div>
              <img
                src="assets/html.png"
                alt=""
                class="project-technology__image"
              />
            </div>
          </div>

          <p class="modal__description">
            Sodobna spletna aplikacija za nakupovanje, ki uporabnikom omogoča enostavno brskanje, iskanje in nakup izdelkov. Aplikacija vključuje intuitiven uporabniški vmesnik, prilagodljivo iskalno funkcijo ter varno obdelavo plačil. 
          </p>

          <div class="modal-buttons">
            <a
              href="https://github.com/domenmerhar/GrandBuy"
              class="modal-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>`;

export const bookViewerCardHTML = `<div class="modal">
      <div class="backdrop">
        <div class="modal-card">
          <img
            src="assets/book-viewer-details.png"
            alt="grandBuy"
            class="modal__project-image"
          />
          <h2 class="modal__project-header text-gradient">BookViewer</h2>

          <div class="modal__project-technologies">
            <div class="modal__project-technology">
              <div class="glow--small react-glow"></div>
              <img
                src="assets/react.png"
                alt=""
                class="project-technology__image"
              />
            </div>

            <div class="modal__project-technology">
              <div class="glow--small typescript-glow"></div>
              <img
                src="assets/typescript.png"
                alt=""
                class="project-technology__image"
              />
            </div>

            <div class="modal__project-technology">
              <div class="glow--small css-glow"></div>
              <img
                src="assets/css.png"
                alt=""
                class="project-technology__image"
              />
            </div>

            <div class="modal__project-technology">
              <div class="glow--small html-glow"></div>
              <img
                src="assets/html.png"
                alt=""
                class="project-technology__image"
              />
            </div>
          </div>

          <p class="modal__description">
            BookViewer je spletna knjižnična aplikacija, ki omogoča dostop do obsežne zbirke knjig. Uporabniki lahko brskajo po različnih kategorijah in žanrih, iščejo določene knjige ter ustvarijo svojo osebno knjižnico priljubljenih knjig.
          </p>

          <div class="modal-buttons">
            <a
              href="https://github.com/domenmerhar/book-viewer"
              class="modal-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                />
              </svg>
            </a>

            <a
              href="https://domen-merhar-book-viewer.netlify.app/"
              class="modal-button"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>`;

export const netflixCloneCardHTML = `<div class="modal">
      <div class="backdrop">
        <div class="modal-card">
          <img
            src="assets/netflix-clone-details.png"
            alt="grandBuy"
            class="modal__project-image"
          />
          <h2 class="modal__project-header text-gradient">Netflix Clone</h2>

          <div class="modal__project-technologies">
            <div class="modal__project-technology">
              <div class="glow--small react-glow"></div>
              <img
                src="assets/react.png"
                alt=""
                class="project-technology__image"
              />
            </div>

            <div class="modal__project-technology">
              <div class="glow--small typescript-glow"></div>
              <img
                src="assets/typescript.png"
                alt=""
                class="project-technology__image"
              />
            </div>

            <div class="modal__project-technology">
              <div class="glow--small css-glow"></div>
              <img
                src="assets/css.png"
                alt=""
                class="project-technology__image"
              />
            </div>

            <div class="modal__project-technology">
              <div class="glow--small html-glow"></div>
              <img
                src="assets/html.png"
                alt=""
                class="project-technology__image"
              />
            </div>
          </div>

          <p class="modal__description">
            Aplikacija, podobna Netflixu, ki uporabnikom omogoča brskanje in ogled filmskih napovednikov z interaktivnimi vrsticami filmov in izpostavljenim razdelkom za priporočeni film. Ob kliku na sličico filma aplikacija predvaja napovednik izbranega filma.
          </p>

          <div class="modal-buttons">
            <a
              href="https://github.com/domenmerhar/netflix-clone"
              class="modal-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                />
              </svg>
            </a>

            <a
              href="https://domenmerhar.github.io/netflix-clone/"
              class="modal-button"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>`;

export const moonSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>
`;

export const sunSVG = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
`;
