function masuk(){
  var user=document.forms["login"]["username"].value;
  var pw=document.forms["login"]["password"].value;

  if (user == "" || pw == ""){
    alert("Masukkan nama pengguna dan kata sandi Anda!");
  } else (user == "ayu" && pw == "1234"){
    alert("Nama pengguna dan kata sandi yang Anda masukkan benar.")
  }
}
