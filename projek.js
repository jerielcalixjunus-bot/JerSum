document.getElementById('daftar').onsubmit = function(){

    var pass = document.getElementById('pass').value.trim();
    var passcek = document.getElementById('confirm').value.trim();

    if (pass !== passcek) {
        alert("Password tidak sama!");
        return false;
    }

    var nama = document.getElementById('name').value.trim();
    var user = document.getElementById('user').value.trim();

    if (nama === "" || user === "" || pass === "" || passcek === "") {
        alert("Semua data harus diisi!");
        return false;
    }

    alert("Pendaftaran Berhasil!");
    return true;
}

function beliProduk(nama,harga){
	alert(nama + "berhasil ditambahkan!\nHarga: Rp "+ harga);
}