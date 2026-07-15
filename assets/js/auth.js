function cekLogin() {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "login.html";
  }
}

function getUser() {
  const user = localStorage.getItem("user");

  if (!user) {
    return null;
  }

  return JSON.parse(user);
}

async function logout() {
  const token = localStorage.getItem("token");

  try {
    const params = new URLSearchParams({
      action: "logout",

      token: token,
    });

    await fetch(`${API_URL}?${params.toString()}`);
  } catch (error) {
    console.error(error);
  }

  localStorage.removeItem("token");

  localStorage.removeItem("user");

  window.location.href = "login.html";
}
