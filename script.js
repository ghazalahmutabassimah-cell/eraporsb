/* =========================================================
   Logic Application eRapor SD Tahfidz Bintang Al-Qur'an
   (Mendukung Auto-Login / Keep Session via LocalStorage)
   ========================================================= */

// Database Mata Pelajaran Berdasarkan Tingkat Kelas (1 s.d. 6 SD)
const mapelByKelas = {
  1: [
    { id: 1, name: "Pendidikan Agama Islam", value: 90, desc: "Sangat baik dalam mengenal rukun iman dan doa harian." },
    { id: 2, name: "Pendidikan Pancasila", value: 88, desc: "Mampu mengenal simbol-simbol Pancasila dan bersikap santun." },
    { id: 3, name: "Bahasa Indonesia (Membaca & Menulis)", value: 85, desc: "Lancar membaca kata sederhana dan mengeja huruf fonik." },
    { id: 4, name: "Matematika Dasar", value: 84, desc: "Mengenal angka 1-50 dan penjumlahan sederhana." },
    { id: 5, name: "Seni Budaya & Prakarya (SBdP)", value: 92, desc: "Sangat kreatif menggambar pola garis dan mewarnai." },
    { id: 6, name: "PJOK", value: 89, desc: "Aktif dan lincah dalam senam kesegaran jasmani." },
    { id: 7, name: "Bahasa Arab Dasar", value: 90, desc: "Mengenal kosa kata huruf hijaiyah dan benda di kelas." },
    { id: 8, name: "Bahasa Inggris Fun & Songs", value: 86, desc: "Mengenal warna, angka, dan nama hewan dalam bahasa Inggris." },
    { id: 9, name: "Adab & Kebiasaan Positif", value: 94, desc: "Selalu merapikan perlengkapan sekolah dan bersikap ramah." },
    { id: 10, name: "Pengenalan Al-Qur'an", value: 91, desc: "Mengenal harakat dasar dan melafalkan surah pendek." },
  ],
  2: [
    { id: 1, name: "Pendidikan Agama Islam", value: 91, desc: "Sangat baik memahami gerakan dan bacaan shalat." },
    { id: 2, name: "Pendidikan Pancasila", value: 87, desc: "Memahami aturan di rumah dan di sekolah dengan disiplin." },
    { id: 3, name: "Bahasa Indonesia", value: 86, desc: "Mampu membaca kalimat panjang dan menuliskan pengalaman." },
    { id: 4, name: "Matematika", value: 83, desc: "Memahami pengurangan dan perkalian dasar 1-5." },
    { id: 5, name: "Seni Budaya & Prakarya", value: 90, desc: "Terampil membuat karya kerajinan tangan sederhana." },
    { id: 6, name: "PJOK", value: 88, desc: "Menguasai teknik permainan bola kecil dan melatih keseimbangan." },
    { id: 7, name: "Bahasa Arab", value: 89, desc: "Hafal anggota tubuh dan kosa kata keluarga." },
    { id: 8, name: "Bahasa Inggris", value: 85, desc: "Mampu merespons sapaan harian dan menyebutkan benda sekitar." },
    { id: 9, name: "Bahasa Daerah / Muatan Lokal", value: 88, desc: "Mengenal lagu dan bahasa daerah dasar." },
    { id: 10, name: "Kerapian & Kebersihan", value: 93, desc: "Sangat menjaga kebersihan diri dan ruang kelas." },
  ],
  3: [
    { id: 1, name: "Pendidikan Agama Islam", value: 92, desc: "Sangat baik memahami syarat sah shalat dan kisah para nabi." },
    { id: 2, name: "Pendidikan Pancasila", value: 89, desc: "Aktif menceritakan keberagaman suku dan budaya Indonesia." },
    { id: 3, name: "Bahasa Indonesia", value: 87, desc: "Mampu membuat paragraf teks narasi dan cerita pendek." },
    { id: 4, name: "Matematika", value: 85, desc: "Memahami pecahan sederhana dan pembagian angka dua digit." },
    { id: 5, name: "IPAS Dasar (IPA & IPS)", value: 88, desc: "Memahami wujud benda dan kenampakan alam di lingkungan." },
    { id: 6, name: "Seni Budaya & Prakarya", value: 89, desc: "Mampu menyanyikan lagu nasional dengan nada tepat." },
    { id: 7, name: "PJOK", value: 87, desc: "Menunjukkan sportivitas dalam olahraga kasti dan lari." },
    { id: 8, name: "Bahasa Arab", value: 90, desc: "Memahami ucapan salam dan struktur kalimat sederhana." },
    { id: 9, name: "Bahasa Inggris", value: 86, desc: "Mampu menyusun kalimat perintah dan percakapan singkat." },
    { id: 10, name: "Informatika Dasar", value: 91, desc: "Terampil menyalakan komputer dan menggunakan mengetik dasar." },
  ],
  4: [
    { id: 1, name: "Pendidikan Agama Islam", value: 93, desc: "Sangat memahami zakat, puasa, dan tata cara thaharah." },
    { id: 2, name: "Pendidikan Pancasila", value: 88, desc: "Memahami norma masyarakat dan penerapan sila Pancasila." },
    { id: 3, name: "Bahasa Indonesia", value: 86, desc: "Memahami ide pokok paragraf dan membuat surat sederhana." },
    { id: 4, name: "Matematika", value: 81, desc: "Memahami FPB, KPK, dan pengukuran bangun datar." },
    { id: 5, name: "IPAS (Ilmu Pengetahuan Alam & Sosial)", value: 86, desc: "Memahami bagian tumbuhan dan wujud zat benda." },
    { id: 6, name: "Seni Budaya & Musik", value: 89, desc: "Mampu memainkan alat musik ritmis dengan harmonis." },
    { id: 7, name: "PJOK", value: 88, desc: "Menguasai variasi gerak dasar atletik dan senam lantai." },
    { id: 8, name: "Bahasa Arab", value: 92, desc: "Sangat baik mempraktikkan mufradat profesi dan sekolah." },
    { id: 9, name: "Bahasa Inggris", value: 87, desc: "Memahami tenses sederhana (Present Tense) dalam dialog." },
    { id: 10, name: "Informatika / Digital Literacy", value: 90, desc: "Terampil menggunakan Microsoft Word untuk tugas cerita." },
  ],
  5: [
    { id: 1, name: "Pendidikan Agama Islam & Budi Pekerti", value: 92, desc: "Sangat baik dalam memahami kisah nabi dan praktik ibadah wudhu/shalat." },
    { id: 2, name: "Pendidikan Pancasila", value: 88, desc: "Sangat santun dan memahami aturan hak serta kewajiban di sekolah." },
    { id: 3, name: "Bahasa Indonesia", value: 86, desc: "Mampu membaca cerita dengan lancar dan menulis karangan sederhana." },
    { id: 4, name: "Bahasa Arab SD", value: 95, desc: "Sangat baik mempraktikkan mufradat kosakata benda di sekitar kelas." },
    { id: 5, name: "Bahasa Inggris SD", value: 87, desc: "Aktif dan percaya diri dalam dialog menyapa harian." },
    { id: 6, name: "Matematika SD", value: 82, desc: "Memahami konsep operasi hitung pecahan dan perkalian dasar." },
    { id: 7, name: "Ilmu Pengetahuan Alam & Sosial (IPAS)", value: 85, desc: "Memahami bagian tubuh tumbuhan dan daur hidup hewan." },
    { id: 8, name: "Seni Budaya & Prakarya (SBdP)", value: 90, desc: "Kreatif membuat kerajinan origami dan gambar imajinatif." },
    { id: 9, name: "Informatika & Koding Dasar", value: 89, desc: "Mengenal operasi komputer dasar dan logika Scratch visual." },
    { id: 10, name: "PJOK (Olah Raga SD)", value: 88, desc: "Memiliki kelincahan fisik yang baik dan semangat sportif." },
  ],
  6: [
    { id: 1, name: "Pendidikan Agama Islam", value: 94, desc: "Sangat mahir memahami fiqih muamalah dan sejarah Islam." },
    { id: 2, name: "Pendidikan Pancasila", value: 90, desc: "Memiliki kepemimpinan dan jiwa gotong royong yang tinggi." },
    { id: 3, name: "Bahasa Indonesia", value: 88, desc: "Terampil pidato singkat dan menganalisis karya sastra anak." },
    { id: 4, name: "Matematika Lanjutan", value: 85, desc: "Memahami pengolahan data rata-rata, modus, dan bangun ruang." },
    { id: 5, name: "IPAS Terpadu", value: 89, desc: "Memahami sistem tata surya dan kelestarian ekosistem bumi." },
    { id: 6, name: "Seni Budaya & Pameran Karya", value: 91, desc: "Terampil pameran seni rupa 3 dimensi dan batik piring." },
    { id: 7, name: "PJOK & Kesehatan Usia Dini", value: 90, desc: "Memahami pola hidup sehat dan kebugaran jasmani mandiri." },
    { id: 8, name: "Bahasa Arab Terapan", value: 94, desc: "Mampu menterjemahkan teks bacaan pendek secara tartil." },
    { id: 9, name: "Bahasa Inggris", value: 89, desc: "Mampu presentasi singkat menceritakan cita-cita (Future Plan)." },
    { id: 10, name: "Informatika & Dasar Koding/Robotik", value: 92, desc: "Mampu membuat animasi Scratch interaktif dan mengolah data." },
  ],
};

// Database Siswa Berdasarkan Kelas
const dataSiswaByKelas = {
  1: [
    { nisn: "0181110001", name: "Ananda Rayyan (Kelas 1-A)" },
    { nisn: "0181110002", name: "Aisha Humaira (Kelas 1-A)" },
  ],
  2: [
    { nisn: "0172220001", name: "Bilal Ibnu Rabah (Kelas 2-A)" },
    { nisn: "0172220002", name: "Khadijah Maryam (Kelas 2-A)" },
  ],
  3: [
    { nisn: "0163330001", name: "Fathir Ahmad (Kelas 3-A)" },
    { nisn: "0163330002", name: "Zahra Salsabila (Kelas 3-A)" },
  ],
  4: [
    { nisn: "0154440001", name: "Ibrahim Al-Ghazi (Kelas 4-A)" },
    { nisn: "0154440002", name: "Amina Hafizhah (Kelas 4-A)" },
  ],
  5: [
    { nisn: "0158293041", name: "Muhammad Azzam (Kelas 5-A)" },
    { nisn: "0158293042", name: "Fatima Az-Zahra (Kelas 5-A)" },
  ],
  6: [
    { nisn: "0146660001", name: "Zaid Bin Tsabit (Kelas 6-A)" },
    { nisn: "0146660002", name: "Siti Aisyah (Kelas 6-A)" },
  ],
};

// Kredensial Login
const CREDENTIALS = {
  admin: {
    username: "admin",
    password: "adminbintang123",
    name: "Administrator Utama",
    roleText: "Super Admin System",
  },
  walikelas: {
    username: "walikelas",
    password: "walibintang123",
    name: "Ust. Husen, S.Pd.I",
    roleText: "Wali Kelas V-A",
  },
};

let currentRole = "walikelas";

// Inisialisasi saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  checkLoginSession();
});

/**
 * Memeriksa status login dari LocalStorage agar tidak logout saat di-refresh (F5)
 */
function checkLoginSession() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const savedRole = localStorage.getItem("userRole");

  if (isLoggedIn === "true" && savedRole && CREDENTIALS[savedRole]) {
    currentRole = savedRole;
    const userCredential = CREDENTIALS[savedRole];

    document.getElementById("login-view")?.classList.add("hidden");
    document.getElementById("app-view")?.classList.remove("hidden");

    const nameDisplay = document.getElementById("user-display-name");
    const roleDisplay = document.getElementById("user-display-role");

    if (nameDisplay) nameDisplay.textContent = userCredential.name;
    if (roleDisplay) roleDisplay.textContent = userCredential.roleText;

    updateDropdownSiswa();
  } else {
    document.getElementById("login-view")?.classList.remove("hidden");
    document.getElementById("app-view")?.classList.add("hidden");
  }
}

/**
 * Memperbarui daftar nama siswa di dropdown berdasarkan kelas yang dipilih
 */
function updateDropdownSiswa() {
  const selectKelas = document.getElementById("select-kelas");
  const selectSiswa = document.getElementById("select-siswa");
  if (!selectKelas || !selectSiswa) return;

  const kelasVal = selectKelas.value;
  const daftarSiswa = dataSiswaByKelas[kelasVal] || [];

  selectSiswa.innerHTML = "";
  daftarSiswa.forEach((s) => {
    selectSiswa.innerHTML += `<option value="${s.nisn}">${s.name} (NISN: ${s.nisn})</option>`;
  });

  renderMapelTable();
}

/**
 * Render Tabel Mata Pelajaran Sesuai Tingkat Kelas Yang Dipilih
 */
function renderMapelTable() {
  const tbody = document.getElementById("table-mapel-body");
  const selectKelas = document.getElementById("select-kelas");
  if (!tbody) return;

  const kelasVal = selectKelas ? selectKelas.value : "5";
  const listMapel = mapelByKelas[kelasVal] || mapelByKelas["5"];

  tbody.innerHTML = "";
  listMapel.forEach((m, index) => {
    tbody.innerHTML += `
      <tr class="hover:bg-gray-50 transition">
          <td class="px-4 py-3 font-semibold text-gray-500">${index + 1}</td>
          <td class="px-4 py-3 font-bold text-gray-800">${m.name}</td>
          <td class="px-4 py-3 text-center">
              <input type="number" value="${m.value}" min="0" max="100" class="w-16 px-2 py-1 text-center border border-gray-300 rounded font-bold text-brand-700 focus:ring-2 focus:ring-brand-500 outline-none">
          </td>
          <td class="px-4 py-3">
              <input type="text" value="${m.desc}" class="w-full px-3 py-1 border border-gray-300 rounded text-xs bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none">
          </td>
      </tr>
    `;
  });

  renderPrintableMapel(listMapel);
}

/**
 * Render Tabel Mapel khusus untuk Lembar Cetak Raport
 */
function renderPrintableMapel(listMapel) {
  const printBody = document.getElementById("printable-mapel-body");
  if (!printBody) return;

  printBody.innerHTML = "";
  listMapel.forEach((m, index) => {
    let predikat = "B";
    if (m.value >= 90) predikat = "A";
    else if (m.value < 80) predikat = "C";

    printBody.innerHTML += `
      <tr>
        <td class="border border-gray-400 px-2 py-1 text-center">${index + 1}</td>
        <td class="border border-gray-400 px-2 py-1 font-semibold">${m.name}</td>
        <td class="border border-gray-400 px-2 py-1 text-center font-bold">${m.value}</td>
        <td class="border border-gray-400 px-2 py-1 text-center">${predikat}</td>
        <td class="border border-gray-400 px-2 py-1">${m.desc}</td>
      </tr>
    `;
  });
}

/**
 * Mengatur Role pengguna (Wali Kelas / Admin)
 */
function setRole(role) {
  currentRole = role;
  const btnWali = document.getElementById("btn-role-walikelas");
  const btnAdmin = document.getElementById("btn-role-admin");

  if (role === "walikelas") {
    btnWali.className =
      "flex-1 py-2 text-sm font-semibold rounded-lg bg-white shadow text-brand-700 transition";
    btnAdmin.className =
      "flex-1 py-2 text-sm font-semibold rounded-lg text-gray-500 hover:text-gray-700 transition";
  } else {
    btnAdmin.className =
      "flex-1 py-2 text-sm font-semibold rounded-lg bg-white shadow text-brand-700 transition";
    btnWali.className =
      "flex-1 py-2 text-sm font-semibold rounded-lg text-gray-500 hover:text-gray-700 transition";
  }
}

/**
 * Memproses Validasi Login dan Menyimpan Session
 */
function handleLogin(e) {
  e.preventDefault();

  const usernameInput = document.getElementById("login-username")?.value.trim();
  const passwordInput = document.getElementById("login-password")?.value;

  const userCredential = CREDENTIALS[currentRole];

  if (
    usernameInput !== userCredential.username ||
    passwordInput !== userCredential.password
  ) {
    alert(
      `Login Gagal! Username atau password ${currentRole === "admin" ? "Administrator" : "Wali Kelas SD"} salah.`
    );
    return;
  }

  // Simpan status login ke localStorage
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("userRole", currentRole);

  document.getElementById("login-view").classList.add("hidden");
  document.getElementById("app-view").classList.remove("hidden");

  const nameDisplay = document.getElementById("user-display-name");
  const roleDisplay = document.getElementById("user-display-role");

  if (nameDisplay) nameDisplay.textContent = userCredential.name;
  if (roleDisplay) roleDisplay.textContent = userCredential.roleText;

  updateDropdownSiswa();
}

/**
 * Keluar dari Aplikasi & Menghapus Session
 */
function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userRole");

  const loginForm = document.querySelector("#login-view form");
  if (loginForm) loginForm.reset();

  document.getElementById("app-view").classList.add("hidden");
  document.getElementById("login-view").classList.remove("hidden");
}

/**
 * Navigasi Antar Tab Menu
 */
function switchTab(tabName) {
  const tabs = [
    "input-mapel",
    "kelola-mapel",
    "input-siswa",
    "input-walikelas",
    "input-tahfidz",
    "input-kehadiran",
    "cetak-raport",
  ];

  tabs.forEach((t) => {
    const tabElement = document.getElementById(`tab-${t}`);
    const navElement = document.getElementById(`nav-${t}`);
    if (tabElement) tabElement.classList.add("hidden");
    if (navElement) {
      navElement.className =
        "w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 transition";
    }
  });

  const targetTab = document.getElementById(`tab-${tabName}`);
  const targetNav = document.getElementById(`nav-${tabName}`);

  if (targetTab) targetTab.classList.remove("hidden");
  if (targetNav) {
    targetNav.className =
      "w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-brand-700 bg-brand-50 font-bold shadow-sm transition";
  }

  if (tabName === "kelola-mapel") {
    renderTabelKelolaMapel();
  } else if (tabName === "input-siswa") {
    renderTabelSiswa();
  }
}

/**
 * Menambahkan Mata Pelajaran Baru ke Kelas Tertentu
 */
function tambahMapelBaru(e) {
  e.preventDefault();
  const kelas = document.getElementById("tambah-mapel-kelas").value;
  const nama = document.getElementById("tambah-mapel-nama").value.trim();
  const nilai = parseInt(document.getElementById("tambah-mapel-nilai").value) || 80;
  const desc = document.getElementById("tambah-mapel-desc").value.trim();

  if (!mapelByKelas[kelas]) {
    mapelByKelas[kelas] = [];
  }

  const newId = mapelByKelas[kelas].length + 1;
  mapelByKelas[kelas].push({
    id: newId,
    name: nama,
    value: nilai,
    desc: desc,
  });

  alert(`Alhamdulillah! Mata pelajaran "${nama}" berhasil ditambahkan ke Kelas ${kelas}.`);

  document.getElementById("tambah-mapel-nama").value = "";
  document.getElementById("tambah-mapel-desc").value = "";

  renderTabelKelolaMapel();
  renderMapelTable();
}

/**
 * Render Tabel Manajemen Kelola Mapel
 */
function renderTabelKelolaMapel() {
  const tbody = document.getElementById("table-kelola-mapel-body");
  const kelasSelect = document.getElementById("tambah-mapel-kelas");
  if (!tbody) return;

  const kelasVal = kelasSelect ? kelasSelect.value : "5";
  const listMapel = mapelByKelas[kelasVal] || [];

  tbody.innerHTML = "";

  if (listMapel.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="px-4 py-3 text-center text-gray-400">Belum ada mata pelajaran untuk kelas ini.</td></tr>`;
    return;
  }

  listMapel.forEach((m, index) => {
    tbody.innerHTML += `
      <tr class="hover:bg-gray-50 transition">
        <td class="px-4 py-3 font-semibold text-gray-500">${index + 1}</td>
        <td class="px-4 py-3 font-bold text-gray-800">${m.name}</td>
        <td class="px-4 py-3 text-center font-semibold text-brand-700">${m.value}</td>
        <td class="px-4 py-3 text-xs text-gray-600">${m.desc}</td>
        <td class="px-4 py-3 text-center">
          <button type="button" onclick="hapusMapel('${kelasVal}', ${index})" class="text-red-600 hover:text-red-800 text-xs font-semibold px-2 py-1 rounded hover:bg-red-50 transition">
            <i class="fa-solid fa-trash mr-1"></i> Hapus
          </button>
        </td>
      </tr>
    `;
  });
}

/**
 * Menghapus Mata Pelajaran dari Kelas
 */
function hapusMapel(kelas, index) {
  if (confirm("Apakah Anda yakin ingin menghapus mata pelajaran ini?")) {
    mapelByKelas[kelas].splice(index, 1);
    renderTabelKelolaMapel();
    renderMapelTable();
  }
}

/**
 * Menambahkan Siswa Baru
 */
function tambahSiswa(e) {
  e.preventDefault();
  const kelas = document.getElementById("tambah-siswa-kelas").value;
  const nisn = document.getElementById("tambah-siswa-nisn").value.trim();
  const nama = document.getElementById("tambah-siswa-nama").value.trim();

  if (!dataSiswaByKelas[kelas]) {
    dataSiswaByKelas[kelas] = [];
  }

  dataSiswaByKelas[kelas].push({
    nisn: nisn,
    name: `${nama} (Kelas ${kelas}-A)`,
  });

  alert("Alhamdulillah! Data siswa berhasil ditambahkan.");

  document.getElementById("tambah-siswa-nisn").value = "";
  document.getElementById("tambah-siswa-nama").value = "";

  updateDropdownSiswa();
  renderTabelSiswa();
}

/**
 * Render Tabel Daftar Siswa
 */
function renderTabelSiswa() {
  const tbody = document.getElementById("table-siswa-body");
  const kelasSelect = document.getElementById("tambah-siswa-kelas");
  if (!tbody) return;

  const kelasVal = kelasSelect ? kelasSelect.value : "5";
  const listSiswa = dataSiswaByKelas[kelasVal] || [];

  tbody.innerHTML = "";

  if (listSiswa.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" class="px-4 py-3 text-center text-gray-400">Belum ada data siswa di kelas ini.</td></tr>`;
    return;
  }

  listSiswa.forEach((s) => {
    tbody.innerHTML += `
      <tr class="hover:bg-gray-50 transition">
        <td class="px-4 py-3 font-semibold text-gray-700">${s.nisn}</td>
        <td class="px-4 py-3 font-bold text-gray-800">${s.name}</td>
        <td class="px-4 py-3 text-center">
          <button type="button" onclick="hapusSiswa('${kelasVal}', '${s.nisn}')" class="text-red-600 hover:text-red-800 text-xs font-semibold px-2 py-1 rounded hover:bg-red-50 transition">
            <i class="fa-solid fa-trash mr-1"></i> Hapus
          </button>
        </td>
      </tr>
    `;
  });
}

/**
 * Menghapus Data Siswa
 */
function hapusSiswa(kelas, nisn) {
  if (confirm("Apakah Anda yakin ingin menghapus data siswa ini?")) {
    dataSiswaByKelas[kelas] = dataSiswaByKelas[kelas].filter(
      (s) => s.nisn !== nisn
    );
    updateDropdownSiswa();
    renderTabelSiswa();
  }
}

/**
 * Menyimpan dan Memperbarui Data Wali Kelas
 */
function simpanWaliKelas(e) {
  e.preventDefault();
  const nama = document.getElementById("walikelas-nama").value;
  const kelas = document.getElementById("walikelas-kelas").value;
  const roleText = `Wali ${kelas}`;

  const nameDisplay = document.getElementById("user-display-name");
  const roleDisplay = document.getElementById("user-display-role");
  if (nameDisplay) nameDisplay.textContent = nama;
  if (roleDisplay) roleDisplay.textContent = roleText;

  alert("Alhamdulillah! Data Wali Kelas berhasil diperbarui.");
}

/**
 * Notifikasi Simpan Data Umum
 */
function saveDataAlert() {
  alert("Alhamdulillah! Data berhasil disimpan ke sistem eRapor.");
}
