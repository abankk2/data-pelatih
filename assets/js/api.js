async function getData(sheet = "data") {
  const url = `${API_URL}?action=getData&sheet=${sheet}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Gagal mengambil data API");
  }

  const result = await response.json();

  if (!result.status) {
    throw new Error(result.message);
  }

  return result;
}

async function getDetail(id) {
  const url = `${API_URL}?action=getDetail&id=${id}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Gagal mengambil detail data");
  }

  const result = await response.json();

  if (!result.status) {
    throw new Error(result.message);
  }

  return result;
}
