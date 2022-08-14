"use strict";

//Khởi tạo giá trị
const submitBtn = document.getElementById("submit-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewoemedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
const tableBodyEl = document.getElementById("tbody");
const deleteBtn = document.getElementById("btn-danger");

//Tạo petArr
const petArr = [];

// Bắt sự kiện vào nút submit
submitBtn.addEventListener("click", function () {
  //console.log(data);
  //Validate dữ liệu
  validateData();

  //Nếu không gặp lỗi gì thì thêm vào mảng
  const validate = validateData(data);
  if (validate) {
    petArr.push(data);
    clearInput();
    renderTable(petArr);
  }
});

//Lấy dữ liệu từ inputForm
const data = {
  id: idInput.value,
  name: nameInput.value,
  age: parseInt(ageInput.value),
  type: typeInput.value,
  weight: parseInt(weightInput.value),
  length: parseInt(lengthInput.value),
  color: colorInput,
  breed: breedInput.value,
  vaccinated: vaccinatedInput.checked,
  dewoemed: dewoemedInput.checked,
  sterilized: sterilizedInput.checked,
  date: new Date(),
};
console.log(data);

//Validate dữ liệu hợp lệ
const validateData = function () {
  //Không có trường nào bị nhập thiếu
  if (
    data.idInput === "" &&
    data.nameInput === "" &&
    data.ageInput === "" &&
    data.weightInput === "" &&
    data.lengthInput === ""
  ) {
    alert("Please fill all information!");
  }
  //Giá trị id không trùng với các id còn lại
  if (idInput == data.id) {
    alert("ID must be unique");
  }
  //Age nhập trong khoảng từ 1 -> 15
  if (ageInput.value < 1 && ageInput.value > 15) {
    alert("Age must be between 1 and 15!");
  }
  //Weight chỉ dc nhập từ 1-15
  if (weightInput.value < 1 && weightInput.value > 15) {
    alert("Weight must be between 1 and 15!");
  }
  //Lenght chỉ dc nhập từ 1-100
  if (weightInput.value < 1 && weightInput.value > 100) {
    alert("Height must be between 1 and 100!");
  }
  //Bắt buộc chọn giá trị cho trường Type
  if (typeInput.value == "Select Type") {
    alert("Please select a type");
  }
  //Bắt buộc phải chọn trường breed
  if (breedInput.value === "Select Breed") {
    alert("Please select breed!");
  }
};

//Hàm hiển thị danh sách thú cưng
function renderTable(data) {
  table.innerHTML = "";
  const row = document.createElement("tr");
  row.innerHTML = `
  <tr>
  <th scope="row">${data.id}</th>
  <td>${data.name}</td>
  <td>${data.age}</td>
  <td>${data.type}</td>
  <td>${data.weight} kg</td>
  <td>${data.length} cm</td>
  <td>${data.breed}</td>
  <td>
    <i class="bi bi-square-fill" style="color: ${data.color}"></i>
  </td>
  <td><i class="bi bi-check-circle-fill"></i></td>
  <td><i class="bi bi-check-circle-fill"></i></td>
  <td><i class="bi bi-check-circle-fill"></i></td>
  <td>${data.Date}</td>
  <td>
    <button type="button" class="btn btn-danger" conclick="deletePet('${data.id}')">Delete</button>
  </td>
</tr>
<tr>`;
  tableBodyEl.appendChild(row);
}

//Clear Input
const clearInput = () => {
  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  typeInput.value = "Select Type";
  weightInput.value = "";
  lengthInput.value = "";
  breedInput.value = "Select Breed";
  vaccinatedInput.checked = false;
  dewoemedInput.checked = false;
  sterilizedInput.checked = false;
};

//Xóa một thú cưng
const deletePet = (petId) => {
  if (confirm("Are you sure you want to delete this?")) {
    //petArr.splice(petId)
  }
};
