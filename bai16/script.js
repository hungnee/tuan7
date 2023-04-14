function validateForm() {
    const username = document.forms[0]["username"].value;
    const password = document.forms[0]["password"].value;
    const rePassword = document.forms[0]["re-pass"].value;
    const name = document.forms[1]["name"].value;
    const dateOfBirth = document.forms[1]["dateofbirth"].value;
    const address = document.forms[1]["address"].value;
    const phoneNumber = document.forms[1]["phone-number"].value;
    const email = document.forms[1]["email"].value;

    const usernameRegex = /^[a-zA-Z0-9_]{6,}$/;
    const passwordRegex = /^.{8,}$/;
    const nameRegex = /^[a-zA-Z ]+$/;
    const phoneNumberRegex = /^[0-9]{9,10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!usernameRegex.test(username)) {
        alert("Tên đăng nhập không hợp lệ.");
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert("Mật khẩu phải có ít nhất 8 ký tự.");
        return false;
    }

    if (password !== rePassword) {
        alert("Mật khẩu không trùng khớp.");
        return false;
    }

    if (!nameRegex.test(name)) {
        alert("Họ và tên không hợp lệ.");
        return false;
    }

    if (dateOfBirth === "") {
        alert("Vui lòng nhập ngày sinh.");
        return false;
    }

    if (!phoneNumberRegex.test(phoneNumber)) {
        alert("Số điện thoại không hợp lệ.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Email không hợp lệ.");
        return false;
    }

    return true;
}

<form onsubmit="return validateForm()">
