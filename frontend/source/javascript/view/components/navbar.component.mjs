export class Navbar {
  #privateNavbar;

  constructor() {
    this.#privateGenerateNavbar();
  }

  get() {
    return this.#privateNavbar;
  }

  // #privateGenerateNavbar() {
  //     const nav = document.createElement('nav');
  //     nav.classList.add('navbar', 'navbar-expand-lg', 'bg-light');

  //     const div = document.createElement('div');
  //     div.classList.add('container-fluid');

  //     const name = document.createElement('a');
  //     name.classList.add('navbar-brand');
  //     name.href = '#';
  //     name.textContent = 'Navbar';

  //     const button = document.createElement('button');
  //     button.type = 'button';
  //     button.classList.add('btn', 'btn-success');
  //     button.textContent = 'Agregar';

  //     div.append(name, button);
  //     nav.appendChild(div);

  //     this.#privateNavbar = nav;
  // }

  #privateGenerateNavbar() {
    // <a class="navbar-brand" href="/source/index.html">Krello</a>
    //<a class="navbar-brand" href="index.html">Krello</a>
    const div = document.createElement("div");
    div.innerHTML = `<nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">Krello</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  BackGround
                </a>
                <ul class="dropdown-menu">
                  <button class="dropdown-item">Red</button>
                  <button class="dropdown-item">Green</button>
                  <button class="dropdown-item">Blue</button>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-info" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>`;
    this.#privateNavbar = div;
  }
}
