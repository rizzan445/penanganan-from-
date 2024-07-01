document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var phone = document.getElementById("phone").value;
  
    var info = document.getElementById("info");
  
    // Validasi data
    if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "" || dob === "" || gender === "" || phone === "") {
      info.textContent = "Harap lengkapi semua kolom.";
    } else if (password !== confirmPassword) {
      info.textContent = "Password dan konfirmasi password tidak cocok.";
    } else {
      // Menampilkan data yang telah didaftarkan dalam pop-up
      var data = "Nama Depan: " + firstName + "\n" +
                 "Nama Belakang: " + lastName + "\n" +
                 "Email: " + email + "\n" +
                 "Tanggal Lahir: " + dob + "\n" +
                 "Jenis Kelamin: " + gender + "\n" +
                 "Nomor Telepon: " + phone;
      window.alert("Data yang telah didaftarkan:\n\n" + data);
      info.textContent = "Terima kasih telah mendaftar. Data Anda telah diterima.";
      // Reset form
      document.getElementById("registrationForm").reset();
    }
  });
  