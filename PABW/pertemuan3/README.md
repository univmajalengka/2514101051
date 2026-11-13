# Tugas Pertemuan 3: Website Wisata Alam Majalengka

Mata kuliah: Pengembangan Aplikasi Berbasis Web

## Data Diri
| Keterangan | Identitas |
|------------|-----------|
| Nama | Matra Archi Sumantri |
| NPM | 2514101051 |

## Deskripsi
Website promosi wisata alam di Kabupaten Majalengka, Jawa Barat. Website menampilkan destinasi wisata, paket perjalanan lengkap dengan itinerary, serta formulir pemesanan simulasi. Seluruh harga dan rincian paket hanya simulasi untuk tugas kuliah.

## Fitur
- **Destinasi wisata**: Situ Cikuda, Bukit Sampora, Bumi Pakuwon, dan Terasering Panyaweuyan, lengkap dengan lokasi, deskripsi, aktivitas, dan tombol video (pencarian YouTube).
- **Paket wisata**: empat paket dengan harga per orang, durasi, aktivitas, fasilitas, itinerary, serta rincian yang tidak termasuk.
- **Modal detail**: informasi destinasi dan paket tampil dalam jendela pop-up.
- **Formulir pemesanan simulasi**: validasi input, tanggal tidak boleh masa lalu, dan estimasi total biaya (harga x jumlah peserta).
- **Navbar responsif**: transparan di bagian atas, berubah hijau saat halaman digulir, dan menu otomatis menutup di layar HP.
- **Galeri mosaik**: foto ditampilkan dalam grid dengan ukuran berbeda dan efek hover.
- **Tema alam**: palet warna hijau, krem, dan cokelat dengan efek animasi pada kartu.
- **Responsif**: tampilan menyesuaikan layar HP.
- **Gambar pengganti**: jika foto tidak ditemukan, tampil kotak hijau berisi nama destinasi.

## Teknologi
- HTML, CSS, dan JavaScript
- Bootstrap 5 (komponen dan modal)
- Bootstrap Icons
- Google Fonts (Poppins dan Playfair Display)

## Struktur Folder
```
pertemuan3/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── image/      (foto hero, destinasi, paket, dan galeri)
└── README.md
```
(Sesuaikan jika lokasi `script.js` di folder kamu berbeda.)

## Cara Menjalankan
Buka file `index.html` langsung di browser. Koneksi internet diperlukan agar Bootstrap dan ikon termuat.

## Catatan
Konten destinasi dan paket dapat diubah pada bagian `DATA` di awal file `script.js`. Warna tema diatur lewat variabel di bagian atas `style.css`.
