async function getData(sheet = "data") {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "login.html";

    return;
  }

  const params = new URLSearchParams({
    action: "getData",

    sheet: sheet,

    token: token,
  });

  const response = await fetch(`${API_URL}?${params.toString()}`);

  const result = await response.json();

  if (!result.status) {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    window.location.href = "login.html";

    return;
  }

  return result;
}

async function getDetail(id) {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "login.html";

    return;
  }

  const params = new URLSearchParams({
    action: "getDetail",

    id: id,

    token: token,
  });

  const response = await fetch(`${API_URL}?${params.toString()}`);

  const result = await response.json();

  if (!result.status) {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    window.location.href = "login.html";

    return;
  }

  return result;
}

async function getTotalData() {
  const params = new URLSearchParams({
    action: "getTotalData",
  });

  const response = await fetch(`${API_URL}?${params.toString()}`);

  const result = await response.json();

  if (!result.status) {
    throw new Error(result.message);
  }

  return result;
}
