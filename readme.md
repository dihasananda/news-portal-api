# News Portal API

API sederhana untuk aplikasi portal berita dengan fitur CRUD untuk berita dan kategori, autentikasi pengguna, dan dokumentasi API.

## Fitur
- Registrasi dan login pengguna
- CRUD untuk berita dan kategori
- Autentikasi menggunakan JSON Web Token (JWT)
- Dokumentasi API menggunakan Swagger
- Pengujian endpoint dengan Jest dan Supertest

## Teknologi yang Digunakan
- **Node.js**
- **Express.js**
- **Sequelize** (ORM)
- **PostgreSQL** (database)
- **JWT** (autentikasi)
- **Swagger** (dokumentasi API)
- **Jest** dan **Supertest** (pengujian)

## Instalasi

Pastikan Anda sudah menginstal **Node.js** dan **PostgreSQL**.

### Langkah-Langkah

1. Clone repositori ini:
   ```bash
   git clone https://github.com/username/news-portal-api.git
   cd news-portal-api
   ```

2. Instal dependencies:
   ```bash
   npm install
   ```

3. Buat database PostgreSQL dan konfigurasikan di `config/database.js`.

4. Jalankan migrasi database (jika diperlukan):
   ```bash
   npx sequelize-cli db:migrate
   ```

5. Jalankan server:
   ```bash
   node app.js
   ```
   Server akan berjalan di `http://localhost:3000`.

## Endpoint API

Buka dokumentasi API di `http://localhost:3000/api-docs` untuk melihat deskripsi lengkap setiap endpoint.

## Pengujian

Jalankan pengujian menggunakan perintah berikut:
```bash
npm test
