document
  .getElementById("loginForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();

    const password = document.getElementById("password").value;

    const error = document.getElementById("error");

    const btnLogin = document.getElementById("btnLogin");

    error.classList.add("d-none");

    btnLogin.disabled = true;

    btnLogin.innerText = "Memproses...";

    try {
      const params = new URLSearchParams({
        action: "login",

        username: username,

        password: password,
      });

      const response = await fetch(`${API_URL}?${params.toString()}`);

      const result = await response.json();

      if (!result.status) {
        error.innerText = result.message;

        error.classList.remove("d-none");

        btnLogin.disabled = false;

        btnLogin.innerText = "Login";

        return;
      }

      localStorage.setItem(
        "token",

        result.token,
      );

      localStorage.setItem(
        "user",

        JSON.stringify(result.user),
      );

      window.location.href = "data-pelatih.html";
    } catch (error) {
      error.innerText = "Terjadi kesalahan koneksi";

      error.classList.remove("d-none");

      btnLogin.disabled = false;

      btnLogin.innerText = "Login";
    }
  });
