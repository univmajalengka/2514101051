/* ===== DATA (ubah isi di sini untuk mengganti konten) ===== */
// Foto ada di folder assets/image/. Jika file belum ada, tampil kotak hijau pengganti.
const destinations = [
  {id:"cikuda", nama:"Situ Cikuda", lokasi:"Desa Padaherang, Kecamatan Sindangwangi, Kabupaten Majalengka, Jawa Barat.", foto:"assets/image/cikuda.jpeg",
   desk:"Danau alami bernuansa tenang, cocok untuk menikmati suasana alam.", aktivitas:["Menikmati suasana alam","Fotografi","Bersantai"]},
  {id:"sampora", nama:"Bukit Sampora", lokasi:"Desa Wisata Teja, Kecamatan Rajagaluh, Kabupaten Majalengka, Jawa Barat", foto:"assets/image/sampora.jpeg",
   desk:"Kawasan perbukitan dengan panorama alam yang luas.", aktivitas:["Menikmati panorama","Fotografi","Jalan santai di jalur aman"]},
  {id:"pakuwon", nama:"Bumi Pakuwon", lokasi:"Desa Bantaragung, Kecamatan Sindangwangi, Kabupaten Majalengka, Jawa Barat", foto:"assets/image/bumi-pakuwon.jpeg",
   desk:"Destinasi wisata alam di Majalengka untuk bersantai dan menikmati suasana (deskripsi perlu diverifikasi).", aktivitas:["Menikmati suasana alam","Fotografi","Bersantai"]},
  {id:"panyaweuyan", nama:"Terasering Panyaweuyan", lokasi:"Desa Sukasari Kidul, Kecamatan Argapura, Kabupaten Majalengka, Jawa Barat.", foto:"assets/image/panyaweyan.jpeg",
   desk:"Hamparan terasering di lereng bukit yang indah, terutama di pagi hari.", aktivitas:["Menikmati panorama terasering","Fotografi","Menikmati suasana pagi"]}
];

const tidakTermasuk = ["Transportasi menuju titik kumpul","Tiket masuk resmi (jika ada)","Makan di luar yang disebutkan","Parkir dan pengeluaran pribadi"];
const catatan = ["Harga dan rincian adalah simulasi untuk tugas kuliah.","Jam kegiatan perkiraan dan dapat berubah.","Aktivitas bergantung pada izin pengelola dan kondisi cuaca.","Pendamping hanya jika tersedia."];
const packages = [
  {id:"p1", nama:"Cikuda Nature Escape", harga:125000, durasi:"1 hari", tujuan:"Situ Cikuda", foto:"assets/image/cikuda2.jpeg",
   desk:"Perjalanan santai menikmati suasana danau yang tenang.",
   aktivitas:["Menikmati suasana alam","Berjalan santai di area yang diperbolehkan","Fotografi","Bersantai"],
   fasilitas:["Itinerary perjalanan","Pendamping lokal (jika tersedia)","Air mineral","Dokumentasi kelompok"],
   itinerary:[["08.00","Berkumpul & pengarahan"],["09.00","Tiba dan menikmati suasana danau"],["11.00","Jalan santai & fotografi"],["12.30","Istirahat"],["14.00","Dokumentasi kelompok"],["15.00","Selesai"]]},
  {id:"p2", nama:"Sampora Hill Adventure", harga:150000, durasi:"1 hari", tujuan:"Bukit Sampora", foto:"assets/image/sampora2.jpeg",
   desk:"Menikmati panorama perbukitan dengan jalur yang aman.",
   aktivitas:["Menikmati panorama perbukitan","Fotografi","Berjalan santai pada jalur aman","Menikmati suasana alam"],
   fasilitas:["Itinerary","Pendamping (jika tersedia)","Air mineral","Dokumentasi kelompok"],
   itinerary:[["07.30","Berkumpul & pengarahan"],["09.00","Tiba di lokasi"],["09.30","Jalan santai & menikmati panorama"],["11.30","Fotografi"],["12.30","Istirahat"],["14.00","Dokumentasi kelompok & selesai"]]},
  {id:"p3", nama:"Pakuwon Nature Experience", harga:175000, durasi:"1 hari", tujuan:"Bumi Pakuwon", foto:"assets/image/bumi-pakuwon2.jpeg",
   desk:"Perjalanan santai menikmati suasana alam di Bumi Pakuwon.",
   aktivitas:["Menikmati suasana alam","Fotografi","Bersantai"],
   fasilitas:["Itinerary","Pendamping lokal (jika tersedia)","Air mineral","Dokumentasi kelompok"],
   itinerary:[["08.00","Berkumpul & pengarahan"],["09.30","Tiba dan menikmati suasana"],["10.30","Fotografi & bersantai"],["12.30","Istirahat"],["14.00","Dokumentasi kelompok"],["15.00","Selesai"]]},
  {id:"p4", nama:"Panyaweuyan Sunrise Trip", harga:200000, durasi:"1 hari", tujuan:"Terasering Panyaweuyan", foto:"assets/image/panyaweyan2.jpeg",
   desk:"Menikmati panorama terasering dan suasana pagi.",
   aktivitas:["Menikmati panorama terasering","Fotografi","Menikmati suasana pagi"],
   fasilitas:["Itinerary","Pendamping (jika tersedia)","Air mineral","Dokumentasi kelompok"],
   itinerary:[["04.30","Berkumpul (keberangkatan pagi)"],["06.00","Tiba & menunggu sunrise"],["06.30","Menikmati panorama & fotografi"],["09.00","Sarapan / istirahat"],["10.30","Dokumentasi kelompok"],["11.30","Selesai"]]}
];

// Link video: tautan PENCARIAN YouTube (bukan video tertentu), dipakai tombol "Video" di kartu destinasi.
// Ganti dengan link video asli jika sudah diverifikasi.
const videos = destinations.map(d => ({
  url:"https://www.youtube.com/results?search_query="+encodeURIComponent(d.nama+" Majalengka")
}));

/* ===== FUNGSI BANTUAN ===== */
const rupiah = n => "Rp" + n.toLocaleString("id-ID");
const $ = id => document.getElementById(id);
// Jika gambar tidak ada, ganti dengan placeholder hijau berisi teks
function placeholder(img){
  img.onerror = null;
  const t = encodeURIComponent(img.alt || "Foto");
  img.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='%232f6b3f'/><text x='50%' y='50%' fill='white' font-size='28' text-anchor='middle' font-family='sans-serif'>"+decodeURIComponent(t)+"</text></svg>";
}
const img = (src, alt) => `<img src="${src}" alt="${alt}" loading="lazy" onerror="placeholder(this)">`;
const list = arr => "<ul>" + arr.map(x => "<li>"+x+"</li>").join("") + "</ul>";

/* ===== TAMPILKAN KARTU ===== */
$("destList").innerHTML = destinations.map((d, i) => `
  <div class="col-md-6 col-lg-3"><div class="card card-j">
    <div class="img-wrap">${img(d.foto, d.nama)}</div>
    <div class="card-body">
      <h5>${d.nama}</h5>
      <p class="small text-muted mb-1"><i class="bi bi-geo-alt"></i> ${d.lokasi}</p>
      <p class="small">${d.desk}</p>
      <p class="small mb-2"><b>Aktivitas:</b> ${d.aktivitas.join(", ")}.</p>
      <div class="btns">
        <button class="btn btn-leaf btn-sm" onclick="showDest('${d.id}')">Lihat Detail</button>
        <a class="btn btn-outline-leaf btn-sm" target="_blank" rel="noopener" href="${videos[i].url}"><i class="bi bi-youtube"></i> Video</a>
      </div>
    </div></div></div>`).join("");

$("packageList").innerHTML = packages.map(p => `
  <div class="col-md-6 col-lg-3"><div class="card card-j">
    <div class="img-wrap">${img(p.foto, p.nama)}</div>
    <div class="card-body">
      <h5>${p.nama}</h5>
      <p class="price mb-1">${rupiah(p.harga)}/orang</p>
      <p class="small mb-1"><i class="bi bi-clock"></i> ${p.durasi} · <i class="bi bi-geo-alt"></i> ${p.tujuan}</p>
      <p class="small">${p.desk}</p>
      <p class="small"><b>Aktivitas:</b> ${p.aktivitas.slice(0,3).join(", ")}.</p>
      <div class="btns"><button class="btn btn-leaf w-100" onclick="showPackage('${p.id}')">Lihat Detail</button></div>
    </div></div></div>`).join("");

$("fPackage").innerHTML = packages.map(p => `<option value="${p.id}">${p.nama} — ${rupiah(p.harga)}/orang</option>`).join("");

/* ===== MODAL ===== */
const infoModal = new bootstrap.Modal($("infoModal"));
const bookModal = new bootstrap.Modal($("bookModal"));
let currentPackage = null;

function showDest(id){
  const d = destinations.find(x => x.id === id);
  $("infoTitle").textContent = d.nama;
  $("infoBody").innerHTML = `${img(d.foto, d.nama)}<p class="mt-3">${d.desk}</p>
    <h6>Lokasi</h6><p>${d.lokasi}</p><h6>Aktivitas</h6>${list(d.aktivitas)}
    <p class="small"><span class="badge badge-check">Perlu dicek</span> Fasilitas, jam buka, dan tiket resmi belum diverifikasi; cek ke pengelola.</p>`;
  $("chooseBtn").classList.add("d-none");
  infoModal.show();
}
function showPackage(id){
  const p = packages.find(x => x.id === id);
  currentPackage = p;
  $("infoTitle").textContent = p.nama;
  $("infoBody").innerHTML = `${img(p.foto, p.nama)}
    <p class="mt-3 price">${rupiah(p.harga)}/orang · ${p.durasi} · ${p.tujuan}</p><p>${p.desk}</p>
    <h6>Itinerary (perkiraan)</h6>${list(p.itinerary.map(i => "<b>"+i[0]+"</b> — "+i[1]))}
    <h6>Aktivitas</h6>${list(p.aktivitas)}<h6>Fasilitas Termasuk</h6>${list(p.fasilitas)}
    <h6>Tidak Termasuk</h6>${list(tidakTermasuk)}<h6>Catatan & Ketentuan</h6>${list(catatan)}`;
  $("chooseBtn").classList.remove("d-none");
  infoModal.show();
}

// Tombol "Pilih Paket": tutup modal detail, buka formulir
$("chooseBtn").onclick = () => {
  infoModal.hide();
  $("fPackage").value = currentPackage.id;
  $("bookResult").classList.add("d-none");
  $("bookForm").classList.remove("was-validated");
  setTimeout(() => bookModal.show(), 350);
};

// Tombol "Isi Formulir Pemesanan" di bagian Pemesanan: langsung membuka formulir
function openBooking(){
  $("bookResult").classList.add("d-none");
  $("bookForm").classList.remove("was-validated");
  bookModal.show();
}

/* ===== FORMULIR (validasi sederhana) ===== */
$("fDate").min = new Date().toISOString().split("T")[0];   // tanggal tidak boleh masa lalu
$("bookForm").addEventListener("submit", e => {
  e.preventDefault();
  const form = e.target;
  form.classList.add("was-validated");
  if (!form.checkValidity()) return;
  const p = packages.find(x => x.id === $("fPackage").value);
  const n = Number($("fPeople").value);
  $("bookResult").innerHTML = `<b>Terima kasih, ${$("fName").value}!</b><br>Pilihan simulasimu: <b>${p.nama}</b>, ${n} peserta, tanggal ${$("fDate").value}.
    Estimasi: ${rupiah(p.harga*n)}.<br><small>Ini hanya simulasi, tidak ada pemesanan sungguhan.</small>`;
  $("bookResult").classList.remove("d-none");
  form.reset(); form.classList.remove("was-validated");
});

/* ===== NAVBAR: berubah warna saat digulir & menu HP menutup setelah klik ===== */
window.addEventListener("scroll", () => $("mainNav").classList.toggle("scrolled", window.scrollY > 60));
document.querySelectorAll("#menu .nav-link").forEach(a => a.addEventListener("click", () => {
  const m = bootstrap.Collapse.getInstance($("menu")); if (m) m.hide();
}));