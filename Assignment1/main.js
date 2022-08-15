"use strict";
//Chọn các phần tử
const idEl = document.getElementById("input-id");
const nameEl = document.getElementById("input-name");
const ageEl = document.getElementById("input-age");
const typeEl = document.getElementById("input-type");
const weightEl = document.getElementById("input-weight");
const lengthEl = document.getElementById("input-length");
const colorEl = document.getElementById("input-color-1");
const breedEl = document.getElementById("input-breed");
const vaccinatedEl = document.getElementById("input-vaccinated");
const dewormedEl = document.getElementById("input-dewormed");
const sterilizedEl = document.getElementById("input-sterilized");

const btnSubmit = document.getElementById("submit-btn");
const btnHealthy = document.getElementById("healthy-btn");
const btnDelete = document.getElementsByClassName("btn-danger");

const tbodyEl = document.getElementById("tbody");

// Chỉnh hiển thị ngày
let today = new Date();
let d = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
today = `${d}/${mm}/${yyyy}`;

// tạo hiển thị ban đầu
const init = function () {
  idEl.value = "";
  nameEl.value = "";
  ageEl.value = "";
  typeEl.value = "";
  weightEl.value = "";
  lengthEl.value = "";
  colorEl.value = "";
  breedEl.value = "";
  vaccinatedEl.checked = false;
  dewormedEl.checked = false;
  sterilizedEl.checked = false;
};

// Bắt sự kiện 'Click' vào nút Submit
btnSubmit.addEventListener("click", function () {
  // Lấy dữ liệu từ các Input form
  const data = {
    ID: idEl.value,
    name: nameEl.value,
    age: parseInt(ageEl.value),
    type: typeEl.value,
    weight: parseInt(weightEl.value),
    length: parseInt(lengthEl.value),
    color: colorEl.value,
    breed: breedEl.value,
    vaccinated: vaccinatedEl.checked,
    dewormed: dewormedEl.checked,
    sterilized: sterilizedEl.checked,
    date: today,
  };
  // Hiển thị danh sách thú cưng
  let addPet = function () {
    const petArr = [];
    petArr.push(data);
    const renderTableData = function (x) {
      for (let i = 0; i < x.length; i++) {
        let vaccinatedText = x[i].vaccinated
          ? "bi bi-check-circle-fill"
          : "bi bi-x-circle-fill";
        let dewormedText = x[i].dewormed
          ? "bi bi-check-circle-fill"
          : "bi bi-x-circle-fill";
        let sterilizedText = x[i].sterilized
          ? "bi bi-check-circle-fill"
          : "bi bi-x-circle-fill";
        const row = document.createElement("tr");
        row.innerHTML = `<th scope = "row"> ${x[i].ID}</th>
        <td>${x[i].name}</td>
        <td>${x[i].age}</td>
        <td>${x[i].type}</td>
        <td>${x[i].weight} kg</td>
        <td>${x[i].length} cm</td>
        <td>${x[i].breed}</td>
        <td>
      <i class="bi bi-square-fill" style="color: ${x[i].color}"></i>
    </td>
    <td><i class="${vaccinatedText}"></i></td>
    <td><i class="${dewormedText}"></i></td>
    <td><i class="${sterilizedText}"></i></td>
    <td>${x[i].date}</td>
    <td>
      <button type="button" class="btn btn-danger">Delete</button>
    </td>`;
        tbodyEl.appendChild(row);
      }
    };
    renderTableData(petArr);
    // Xóa thông tin từ input form
    init();
  };
  // Validate dữ liệu hợp lệ
  // Kiểm tra ID không được trùng với các thú cưng còn lại
  let chk = false;
  for (let i = 0; i < tbodyEl.rows.length; i++) {
    if (idEl.value === tbodyEl.rows[i].cells[0].textContent) {
      chk = true;
      break;
    }
  }
  // Kiểm tra các trường có bị nhập thiếu hay không
  if (chk) {
    alert("ID must unique!");
    return;
  } else if (idEl.value.trim().length === 0) {
    alert("Please add ID!");
    return;
  } else if (nameEl.value.trim().length === 0) {
    alert("Please add name of a pet!");
    return;
  } else if (ageEl.value.trim().length === 0) {
    alert("Please add age!");
    return;
  } else if (weightEl.value.trim().length === 0) {
    alert("Please add weight!");
    return;
  } else if (lengthEl.value.trim().length === 0) {
    alert("Please add length!");
    return;
  } else if (typeEl.selectedIndex === 0) {
    alert("Please select type!");
    return;
  } else if (breedEl.selectedIndex === 0) {
    alert("Please select breed!");
    return;
  }
  // Kiểm tra các thông tin nằm trong khoảng cho phép và in thông tin pet ra bảng
  else if (ageEl.value < 1 || ageEl.value > 15) {
    alert("Age must be between 1 and 15");
    return;
  } else if (weightEl.value < 1 || weightEl.value > 15) {
    alert("Weight must be between 1 and 15");
    return;
  } else if (lengthEl.value < 1 || lengthEl.value > 100) {
    alert("Length must be between 1 and 100");
    return;
  } else {
    addPet();
  }
});

// Xóa 1 thú cưng
tbodyEl.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-danger")) {
    e.target.parentElement.parentElement.remove();
  }
});
