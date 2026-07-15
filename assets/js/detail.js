document.addEventListener("DOMContentLoaded", loadDetail);

async function loadDetail() {
  const params = new URLSearchParams(window.location.search);

  const id = params.get("id");

  if (!id) {
    showError("ID data tidak ditemukan");

    return;
  }

  try {
    const result = await getDetail(id);

    const data = result.data;

    tampilkanData(data);
  } catch (error) {
    showError(error.message);
  }
}

function tampilkanData(data) {
  const loading = document.getElementById("loading");

  const detail = document.getElementById("detail");

  if (loading) {
    loading.classList.add("d-none");
  }

  if (detail) {
    detail.classList.remove("d-none");
  }

  setText("id", data.ID);

  setText("nama", data.Nama);

  setText("ttl", data.TTL);

  setText("nta", data.NTA);

  setText("nohp", data["No HP"]);

  setText("alamat", data.Alamat);

  setText("sus", data["Sus Pramuka"]);

  setText("kmd", data.KMD);

  setText("kml", data.KML);

  setText("kpd", data.KPD);

  setText("kpl", data.KPL);

  setText("baju", data["Ukuran Baju"]);

  setText("sepatu", data["Ukuran Sepatu"]);

  setText("topi", data["Ukuran Topi"]);

  const foto = document.getElementById("foto");

  const fotoTidakAda = document.getElementById("fotoTidakAda");

  if (foto && fotoTidakAda) {
    if (data.Foto) {
      foto.src = data.Foto;

      foto.classList.remove("d-none");

      fotoTidakAda.classList.add("d-none");
    } else {
      foto.classList.add("d-none");

      fotoTidakAda.classList.remove("d-none");
    }
  }
}

function setText(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.innerText = value || "-";
  }
}

function showError(message) {
  const loading = document.getElementById("loading");

  const error = document.getElementById("error");

  if (loading) {
    loading.classList.add("d-none");
  }

  if (error) {
    error.classList.remove("d-none");

    error.innerText = message;
  }
}
