let jumlah = 1;

function tambahJumlah() {
  jumlah++;
  updateJumlah();
}

function kurangiJumlah() {
  if (jumlah > 1) {
    jumlah--;
    updateJumlah();
  }
}

function updateJumlah() {
  document.getElementById('jumlah').innerText = jumlah;
}
