document.addEventListener("DOMContentLoaded", function () {
  const user = getUser();

  const nama = user ? user.nama : "User";

  const navbar = `

      <nav
        class="navbar navbar-expand-lg bg-white shadow-sm">

        <div class="container-fluid">


          <a
            class="navbar-brand fw-bold"
            href="data-pelatih.html">

            PUSDIKLATCAB

          </a>


          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu">

            <span
              class="navbar-toggler-icon">

            </span>

          </button>


          <div
            class="collapse navbar-collapse"
            id="navbarMenu">


            <ul
              class="navbar-nav ms-auto align-items-lg-center">


              <li class="nav-item">

                <span
                  class="nav-link">

                  Halo, ${nama}

                </span>

              </li>


              <li class="nav-item">

                <a
                  href="data-pelatih.html"
                  class="nav-link">

                  Data

                </a>

              </li>


              <li class="nav-item">

                <button
                  onclick="logout()"
                  class="btn btn-danger btn-sm ms-lg-2">

                  Logout

                </button>

              </li>


            </ul>


          </div>


        </div>

      </nav>

    `;

  const navbarElement = document.getElementById("navbar");

  if (navbarElement) {
    navbarElement.innerHTML = navbar;
  }
});
