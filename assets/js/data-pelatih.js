let allData = [];

let currentPage = 1;

const perPage = 10;

document.addEventListener("DOMContentLoaded", function () {
  loadData();

  const search = document.getElementById("search");

  if (search) {
    search.addEventListener("input", function () {
      currentPage = 1;

      renderData();
    });
  }
});

async function loadData() {
  try {
    const result = await getData("data");

    allData = result.data;

    const loading = document.getElementById("loading");

    const tableContainer = document.getElementById("tableContainer");

    const totalData = document.getElementById("totalData");

    if (loading) {
      loading.classList.add("d-none");
    }

    if (tableContainer) {
      tableContainer.classList.remove("d-none");
    }

    if (totalData) {
      totalData.innerText = `${allData.length} Data`;
    }

    renderData();
  } catch (error) {
    const loading = document.getElementById("loading");

    const errorElement = document.getElementById("error");

    if (loading) {
      loading.classList.add("d-none");
    }

    if (errorElement) {
      errorElement.classList.remove("d-none");

      errorElement.innerText = error.message;
    }
  }
}

function renderData() {
  const searchElement = document.getElementById("search");

  const search = searchElement ? searchElement.value.toLowerCase() : "";

  const filteredData = allData.filter((item) => {
    const keyword = `

        ${item.Nama || ""}

        ${item.NTA || ""}

        ${item.Alamat || ""}

        ${item["No HP"] || ""}

      `.toLowerCase();

    return keyword.includes(search);
  });

  const totalPage = Math.ceil(filteredData.length / perPage);

  if (currentPage > totalPage && totalPage > 0) {
    currentPage = 1;
  }

  const start = (currentPage - 1) * perPage;

  const dataPage = filteredData.slice(start, start + perPage);

  const table = document.getElementById("dataTable");

  if (!table) {
    return;
  }

  table.innerHTML = "";

  if (dataPage.length === 0) {
    table.innerHTML = `

      <tr>

        <td
          colspan="15"
          class="text-center py-4">

          Data tidak ditemukan

        </td>

      </tr>

    `;
  }

  dataPage.forEach((item, index) => {
    const nomor = start + index + 1;

    table.innerHTML += `

      <tr>

        <td class="text-center">
          ${nomor}
        </td>


        <td class="text-center">

          ${
            item.Foto
              ? `

                <img
                  src="${item.Foto}"
                  width="50"
                  height="50"
                  style="
                    object-fit: cover;
                    border-radius: 8px;
                  "
                >

              `
              : `

                <span
                  class="text-muted">

                  Tidak ada

                </span>

              `
          }

        </td>


        <td>

          <strong>

            ${item.Nama || "-"}

          </strong>

        </td>


        <td class="text-center">

          ${item.NTA || "-"}

        </td>


       

        <td class="text-center">

          <a
            href="detail.html?id=${item.ID}"
            class="btn btn-sm btn-primary">

            Detail

          </a>

        </td>

      </tr>

    `;
  });

  renderPagination(totalPage);
}

function renderPagination(totalPage) {
  const pagination = document.getElementById("pagination");

  if (!pagination) {
    return;
  }

  pagination.innerHTML = "";

  if (totalPage <= 1) {
    return;
  }

  for (let i = 1; i <= totalPage; i++) {
    pagination.innerHTML += `

      <li
        class="page-item
        ${i === currentPage ? "active" : ""}">

        <button
          class="page-link"
          onclick="changePage(${i})">

          ${i}

        </button>

      </li>

    `;
  }
}

function changePage(page) {
  currentPage = page;

  renderData();
}

function resetSearch() {
  const search = document.getElementById("search");

  if (search) {
    search.value = "";
  }

  currentPage = 1;

  renderData();
}
