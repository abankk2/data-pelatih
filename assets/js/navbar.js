document.addEventListener("DOMContentLoaded", function () {
  const navbar = `
        <nav class="navbar navbar-expand-lg bg-white shadow-sm">
            <div class="container">

                <a class="navbar-brand fw-bold" href="index.html">
                    PUSDIKLATCAB
                </a>

                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMenu">

                    <span class="navbar-toggler-icon"></span>

                </button>

                <div
                    class="collapse navbar-collapse"
                    id="navbarMenu">

                    <ul class="navbar-nav ms-auto">

                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="index.html">

                                Beranda

                            </a>
                        </li>

                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="data-pelatih.html">

                                Data Pelatih

                            </a>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
    `;

  document.getElementById("navbar").innerHTML = navbar;
});
