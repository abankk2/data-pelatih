document.addEventListener("DOMContentLoaded", function () {
  const token = localStorage.getItem("token");

  const user = localStorage.getItem("user");

  let userData = null;

  if (user) {
    userData = JSON.parse(user);
  }

  const navbar = document.getElementById("navbar");

  if (!navbar) {
    return;
  }

  navbar.innerHTML = `

      <nav
        class="navbar navbar-expand-lg bg-white shadow-sm">

        <div class="container">


          <a
            class="navbar-brand fw-bold"
            href="index.html">

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

                <a
                  href="index.html"
                  class="nav-link">

                  Home

                </a>

              </li>


              ${
                token
                  ? `

                    <li class="nav-item">

                      <a
                        href="data-gudep.html"
                        class="nav-link">

                        Data Gudep

                      </a>

                    </li>


                    <li class="nav-item">

                      <span
                        class="nav-link">

                        Halo,
                        ${userData?.nama || "User"}

                      </span>

                    </li>


                    <li class="nav-item">

                      <button
                        onclick="logout()"
                        class="btn btn-danger btn-sm ms-lg-2">

                        Logout

                      </button>

                    </li>

                  `
                  : `

                    <li class="nav-item">

                      <a
                        href="login.html"
                        class="btn btn-primary btn-sm">

                        Login

                      </a>

                    </li>

                  `
              }


            </ul>


          </div>


        </div>

      </nav>

    `;
});
