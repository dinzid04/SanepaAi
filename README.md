# Sanepa AI

Sanepa AI adalah asisten percakapan cerdas yang dirancang untuk membantu Anda dengan berbagai tugas. Dibangun dengan Node.js, Express, dan frontend vanilla JavaScript, aplikasi ini menyediakan antarmuka yang bersih dan modern untuk berinteraksi dengan AI.

## Fitur

-   **Antarmuka Percakapan:** UI yang bersih dan intuitif untuk mengobrol dengan AI.
-   **Dukungan Mode Terang & Gelap:** Beralih antara mode terang dan gelap untuk kenyamanan visual Anda.
-   **Riwayat Obrolan:** Semua percakapan Anda disimpan secara lokal di browser Anda.
-   **Dukungan File:** Unggah gambar dan dokumen untuk dianalisis oleh AI.
-   **Desain Responsif:** UI yang berfungsi dengan baik di perangkat desktop dan seluler.
-   **Penanganan API yang Aman:** Panggilan API ditangani melalui backend, menjaga kunci API Anda tetap aman.

## Penyiapan & Instalasi

Untuk menjalankan Sanepa AI secara lokal, ikuti langkah-langkah berikut.

### Prasyarat

-   [Node.js](https://nodejs.org/) (versi 14 atau lebih tinggi)
-   [npm](https://www.npmjs.com/) (biasanya disertakan dengan Node.js)

### 1. Kloning Repositori

Pertama, kloning repositori ke mesin lokal Anda:

```bash
git clone <URL_REPOSITORI_ANDA>
cd <NAMA_DIREKTORI_REPOSITORI>
```

### 2. Instal Dependensi

Instal dependensi yang diperlukan menggunakan npm:

```bash
npm install
```

### 3. Konfigurasi Variabel Lingkungan

Aplikasi ini menggunakan file `.env` untuk menyimpan kunci API Gemini Anda.

1.  Buat file bernama `.env` di direktori root proyek.
2.  Buka file `.env` dan tambahkan baris berikut, ganti `KUNCI_API_ANDA_DI_SINI` dengan kunci API Gemini Anda yang sebenarnya:

```
GEMINI_API_KEY=KUNCI_API_ANDA_DI_SINI
```

**Penting:** File `.env` sudah termasuk dalam `.gitignore` untuk mencegah kunci API Anda dikomit secara tidak sengaja ke kontrol versi.

### 4. Jalankan Server

Setelah Anda menginstal dependensi dan mengonfigurasi kunci API Anda, Anda dapat memulai server:

```bash
node main.js
```

Server akan berjalan di `http://localhost:3000`. Anda sekarang dapat membuka alamat ini di browser Anda untuk mulai menggunakan Sanepa AI.

**Catatan tentang Error 404:** Jika Anda mendapatkan error 404, kemungkinan besar itu karena server backend tidak berjalan. Pastikan Anda telah mengikuti langkah 4 dan server berjalan di terminal Anda sebelum mencoba mengakses aplikasi. Backend menangani permintaan API, jadi sangat penting untuk menjalankannya.