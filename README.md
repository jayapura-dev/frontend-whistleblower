<p align="center"><img src="https://live.staticflickr.com/65535/49873465473_ac1790f091_b.jpg" width="600px"></p>

<p align="center">
  <a href="https://gitter.im/jayapura_django/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"><img src="https://badges.gitter.im/jayapura_django/community.svg" alt="Gitter" target="_blank"></a>
  <a href="https://github.com/Ekhel/whistleblower/actions"><img src="https://github.com/Ekhel/whistleblower/workflows/Production%20Server/badge.svg" alt="Build Status" target="_blank"></a>
  <a href="https://github.com/Ekhel/whistleblower/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License: MIT" target="_blank"></a>
</p>

## Tentang Whistleblower Sistem :
  - UI Frontend untuk Whistleblower System

  ----------------------------------------------------------------------------------------------------------------------

  ## System Requirements :
* Bahasa Utama :
  - JSX

* Framework :
  - React

* Library :
  - Axios (Comunicate REST API)
  - Redux
  - React Redux
  - Redux Thunk
  - React Alert
  - React Alert Template Basic

* Backend :
  - [Backend Whistle](https://github.com/jayapura-dev/backend-whistleblower)

* HOST
  - [Server VPS]()

-----------------------------------------------------------------------------------------------------------------------

## Consumsi Web Services ( API )

<table class="small table">
    <thead>
      <tr>
        <th>No</th>
        <th>Halaman</th>
        <th>End Point</th>
        <th>Element</th>
        <th>Method</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Form Aduan</td>
        <td>http://127.0.0.1:8000/api/kategori/</td>
        <td>Dropdownlist (Kategori)</td>
        <td> GET </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Form Aduan</td>
        <td>http://127.0.0.1:8000/api/distrik/</td>
        <td>Dropdownlist (Distrik)</td>
        <td> GET </td>
      </tr>
      <tr>
        <td>3</td>
        <td>Form Aduan</td>
        <td>http://127.0.0.1:8000/api/distrik/{params:id_distrik}</td>
        <td>Nested Dropdownlist (Kampung)</td>
        <td> GET </td>
      </tr>
      <tr>
        <td>4</td>
        <td>Form Aduan</td>
        <td>http://127.0.0.1:8000/api/aduan/</td>
        <td>Button Submit (Data Form)</td>
        <td> POST, GET (Callback) </td>
      </tr>
      <tr>
        <td>5</td>
        <td>Register Auth API</td>
        <td>http://127.0.0.1:8000/api/auth/register</td>
        <td>-</td>
        <td> POST (Callback Result Token) </td>
      </tr>
      <tr>
        <td>6</td>
        <td>Login Auth API</td>
        <td>http://127.0.0.1:8000/api/auth/login</td>
        <td>Redux</td>
        <td> POST (Callback Result Token) </td>
      </tr>
      <tr>
        <td>6</td>
        <td>User Auth State (Session)</td>
        <td>http://127.0.0.1:8000/api/auth/user</td>
        <td>]Redux</td>
        <td> GET (Callback) </td>
      </tr>
      <tr>
        <td>7</td>
        <td>User Auth Logout (Session)</td>
        <td>http://127.0.0.1:8000/api/auth/logout</td>
        <td>]Redux</td>
        <td> POST </td>
      </tr>
    </tbody>
</table>

-----------------------------------------------------------------------------------------------------------------------

## Progres Pembuatan & Pengembangan :

* *Kamis 11 Mei 2020*
  - Buat Project [Solved]
  - Buat App frontend-whistleblower [Solved]
  - Buat repository [Solved]

* *Jum'at 12 Mei 2020*
  - Ganti Template [Solved]
  - Buat Base Layout (MasterLayout) Template [Solved]
  - Buat Halaman Home [Solved]
  - Buat Halaman Tata Cara [Solved]

* *Sabtu 13 Juni 2020*
  - Install react-router-dom [Solved]
  - Install axios [Solved]

* *Senin 15 Juni 2020*
  - Buat Halaman Form Aduan [Solved]
  - Setup GET data Distrik & Kampung [Solved]
  - Setup GET data Kategori [Soveld]  
  - Setup POST Data Form Aduan -> Backend [Solved]

* *Selasa 16 Juni 2020*
  - Buat Halaman Petunjuk Aduan [Solved]
  - Buat Halaman Tracking Aduan [Soveld]
  - Setup backend query untuk Tracking Aduan [Solved]

* *Sabtu 20 Juni 2020*
  - Install Redux, React Redux, Redux Thunk [Solved]
  - Install React Alert, React Alert Template Basic [Solved]
  - Buat Actions untuk Redux [Solved]
  - Buat Reducer untuk Redux [Solved]
  - Buat Action Types [Solved]
  - Buat Halaman Register Untuk Register User API -> Backend [Solved]
  - Buat Private Route Untuk Proteksi Halaman Setelah Login Auth API [Solved]
  - Buat Halaman Login Untuk Auth API -> Backend [Solved]

* *Minggu 21 Juni 2020*
  - Buat Fungsi Logout API [Solved]
  - Set Token ke Semua action Redux [Solved]
  - Buat Alers Messages dom [Solved]
  - Buat error reducers [Solved]
