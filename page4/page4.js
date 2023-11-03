var form = document.getElementById("myForm"),
    userName = document.getElementById("name"),
    sDate = document.getElementById("sDate"),
    submitBtn = document.querySelector(".submit"),
    userInfo = document.getElementById("data"),
    modal = document.getElementById("userForm"),
    modalTitle = document.querySelector("#userForm .modal-title"),
    newUserBtn = document.querySelector(".newUser");

let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : [];

let isEdit = false, editId;

showInfo();

newUserBtn.addEventListener('click', () => {
    submitBtn.innerText = 'Submit';
    modalTitle.innerText = "The Form";
    isEdit = false;
    form.reset();
});

function showInfo() {
    document.querySelectorAll('.employeeDetails').forEach(info => info.remove());
    getData.forEach((element, index) => {
        let createElement = `<tr class="employeeDetails">
            <td>${index+1}</td>
            <td>${element.employeeName}</td>
            <td>${element.employeeEmail}</td>
            <td>${element.startDate}</td>
            <td>
                <button class="btn btn-success" onclick="readInfo('${element.employeeName}', '${element.employeeEmail}', '${element.startDate}')" data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye"></i></button>
                <button class="btn btn-primary" onclick="editInfo(${index}, '${element.employeeName}', '${element.startDate}')" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>
                <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash"></i></button>
            </td>
        </tr>`;

        userInfo.innerHTML += createElement;
    });
}

showInfo();

function readInfo(name, email, sDate) {
    document.querySelector('#showName').value = name;
    document.querySelector("#showEmail").value = email;
    document.querySelector("#showsDate").value = sDate;
}

function editInfo(index, name, sDate) {
    isEdit = true;
    editId = index;
    userName.value = name;
    sDate.value = sDate;
    submitBtn.innerText = "Update";
    modalTitle.innerText = "Update The Form";
}

function deleteInfo(index) {
    if (confirm("Are you sure want to delete?")) {
        getData.splice(index, 1);
        localStorage.setItem("userProfile", JSON.stringify(getData));
        showInfo();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const information = {
        employeeName: userName.value,
        employeeEmail: email.value,
        startDate: sDate.value,
    };

    if (!isEdit) {
        getData.push(information);
    } else {
        isEdit = false;
        getData[editId] = information;
    }

    localStorage.setItem('userProfile', JSON.stringify(getData));

    submitBtn.innerText = "Submit";
    modalTitle.innerHTML = "The Form";
    showInfo();
    form.reset();
});
