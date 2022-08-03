export class Navbar {
  #privateNavbar;

  constructor() {
    this.#privateGenerateNavbar();
  }

  get() {
    return this.#privateNavbar;
  }

  #privateGenerateNavbar() {
    // <a class="navbar-brand" href="/source/index.html">Krello</a>
    //<a class="navbar-brand" href="index.html">Krello</a>
    const div = document.createElement("div");

    const btnRed = document.createElement("button");
    btnRed.classList.add("dropdown-item");
    btnRed.textContent = "Red";
    btnRed.addEventListener("click", () => {
      const color =
        "radial-gradient(circle at 22.8% 52.38%, #c1b63b 0, #ccaf34 5.56%, #d5a72f 11.11%, #dd9d2c 16.67%, #e4922a 22.22%, #ea862b 27.78%, #ee772d 33.33%, #f16731 38.89%, #f35436 44.44%, #f23c3c 50%, #f01743 55.56%, #ed004d 61.11%, #e90058 66.67%, #e30064 72.22%, #db0072 77.78%, #d10081 83.33%, #c40091 88.89%, #b400a1 94.44%, #a100b1 100%)";
      document.body.style.background = color;
      this.CaptureBodyColor(color);
    });

    const btnGreen = document.createElement("button");
    btnGreen.classList.add("dropdown-item");
    btnGreen.textContent = "Green";
    btnGreen.addEventListener("click", () => {
      const color= "radial-gradient(circle at 50% -20.71%, #fff56b 0, #fff866 6.25%, #fdfa63 12.5%, #e7fb61 18.75%, #d0fb62 25%, #b5fa65 31.25%, #97f86a 37.5%, #73f670 43.75%, #3cf278 50%, #00ee82 56.25%, #00ea8f 62.5%, #00e69d 68.75%, #00e2ad 75%, #00dfbe 81.25%, #00dbd1 87.5%, #00d8e3 93.75%, #00d6f6 100%)";
      document.body.style.background = color;
      this.CaptureBodyColor(color); 
    });

    const btnBlue = document.createElement("button");
    btnBlue.classList.add("dropdown-item");
    btnBlue.textContent = "Blue";
    btnBlue.addEventListener("click", () => {
      const color= "radial-gradient(circle at 8.15% 0.13%, #ffffff 0, #ffffff 12.5%, #f9ffff 25%, #d8f0fa 37.5%, #b5def2 50%, #92cbeb 62.5%, #72bae5 75%, #55a9e0 87.5%, #3899dc 100%)";
      document.body.style.background = color;
      this.CaptureBodyColor(color);
    });

    const nav = document.createElement("nav");
    nav.classList.add("navbar", "navbar-expand", "bg-light");

    const containerFluid = document.createElement("div");
    containerFluid.classList.add("container-fluid");

    const navbarBrand = document.createElement("a");
    navbarBrand.classList.add("navbar-brand");
    navbarBrand.href = "index.html";
    navbarBrand.textContent = "Krello";

    const navbarToggler = document.createElement("button");
    navbarToggler.classList.add("navbar-toggler");
    navbarToggler.setAttribute("type", "button");
    navbarToggler.setAttribute("data-toggle", "collapse");
    navbarToggler.setAttribute("data-target", "#navbarSupportedContent");
    navbarToggler.setAttribute("aria-controls", "navbarSupportedContent");
    navbarToggler.setAttribute("aria-expanded", "false");
    navbarToggler.setAttribute("aria-label", "Toggle navigation");

    const navbarTogglerIcon = document.createElement("span");
    navbarTogglerIcon.classList.add("navbar-toggler-icon");

    navbarToggler.append(navbarTogglerIcon);

    const navbarCollapse = document.createElement("div");
    navbarCollapse.classList.add("collapse", "navbar-collapse");
    navbarCollapse.id = "navbarSupportedContent";

    const navbarNav = document.createElement("ul");
    navbarNav.classList.add("navbar-nav");
    navbarNav.setAttribute("mr-auto", "mr-auto");

    const navbarNavItem = document.createElement("li");
    navbarNavItem.classList.add("nav-item", "dropdown");

    // <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>

    const navbarNavItemLink = document.createElement("a");
    navbarNavItemLink.classList.add("nav-link", "dropdown-toggle");
    navbarNavItemLink.href = "#";
    navbarNavItemLink.setAttribute("role", "button");
    navbarNavItemLink.setAttribute("data-bs-toggle", "dropdown");
    navbarNavItemLink.setAttribute("aria-expanded", "false");
    navbarNavItemLink.textContent = "Colors";

    const dropdownList = document.createElement("ul");
    dropdownList.classList.add("dropdown-menu");
    dropdownList.id = "dropdown-list";

    const formSearch = document.createElement("form");
    formSearch.classList.add("d-flex","ownSearch");
    formSearch.setAttribute("role", "search");

    const inputSearch = document.createElement("input");
    inputSearch.classList.add("form-control", "mr-sm-2");
    inputSearch.setAttribute("type", "search");
    inputSearch.setAttribute("placeholder", "Search");
    inputSearch.setAttribute("aria-label", "Search");

    const buttonSearch = document.createElement("button");
    buttonSearch.classList.add("btn", "btn-outline-info");
    buttonSearch.setAttribute("type", "submit");
    buttonSearch.textContent = "Search";

    formSearch.append(inputSearch, buttonSearch);

    dropdownList.append(btnRed, btnGreen, btnBlue);

    navbarNavItem.append(navbarNavItemLink, dropdownList);

    navbarNav.append(navbarNavItem);

    navbarCollapse.append(navbarNav, formSearch);

    containerFluid.append(navbarBrand, navbarToggler, navbarCollapse);

    nav.append(containerFluid);

    this.#privateNavbar = nav;
  }

  CaptureBodyColor(color) {
    console.log(color);
    localStorage.setItem("Bg_Color", JSON.stringify(color));
  }
}


