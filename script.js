/* =====================================================
   DATA (edit di sini untuk mengubah isi web)
===================================================== */
const EXPERIENCE = [
  {
    tab: 'Astra Honda Motor', sub: 'Sep 2025 - Sekarang',
    date: 'Sep 2025 - Sekarang',
    role: 'System Analyst & Developer',
    company: 'PT Istidata Indopasific Solution Centre, ditugaskan di PT Astra Honda Motor Plant 1',
    points: [
      'Menganalisis kebutuhan bisnis menjadi spesifikasi fungsional dan teknis (FSD/TSD).',
      'Mengembangkan aplikasi web enterprise dengan Java Spring Boot dan ASP.NET di atas Oracle, SQL Server, dan MySQL.',
      'Optimasi query SQL dan PL/SQL untuk meningkatkan performa sistem produksi.',
      'Root cause analysis untuk masalah berulang agar downtime berkurang.',
      'Menjalankan pengujian UT, SIT, QAT, dan UAT.',
      'Mendukung integrasi API pada migrasi SAP ECC ke SAP S/4HANA.'
    ]
  },
  {
    tab: 'Politeknik Astra (Magang)', sub: 'Jan 2025 - Jul 2025',
    date: 'Jan 2025 - Jul 2025',
    role: 'Full-stack Developer & Staff Certification Department (Magang)',
    company: 'Politeknik Astra, Bekasi',
    points: [
      'Membangun aplikasi e-learning publik dari nol dengan React.js dan ASP.NET Web API.',
      'Merancang skema database dan mengoptimalkan tabel di SQL Server.',
      'Membuat diagram UML (use case, class, sequence) dan dokumentasi teknis.'
    ]
  },
  {
    tab: 'Astra Honda Motor (Project)', sub: 'Mei 2024 - Okt 2024',
    date: 'Mei 2024 - Okt 2024',
    role: 'System Analyst & Developer (Project Based)',
    company: 'PT Astra Honda Motor, Sunter, Jakarta Utara',
    points: [
      'Migrasi aplikasi Monitoring CBU vs No TPT menggunakan Java Spring Boot.',
      'Migrasi aplikasi Print Rejection Card menggunakan Java Spring Boot.',
      'Memperbarui dokumentasi teknis untuk mendukung QA dan serah terima operasional.'
    ]
  }
];

const SKILLS = [
  ['Java','Bahasa'],['C#','Bahasa'],['SQL','Bahasa'],['JavaScript','Bahasa'],['PHP','Bahasa'],['HTML','Bahasa'],['CSS','Bahasa'],
  ['Spring Boot','Framework'],['ASP.NET','Framework'],['React.js','Framework'],['Laravel','Framework'],['Node.js','Framework'],['Bootstrap','Framework'],
  ['Oracle','Database'],['SQL Server','Database'],['MySQL','Database'],
  ['Postman','Tools'],['Git','Tools'],['Gitblit','Tools'],['Jenkins','Tools'],
  ['FSD','Dokumentasi'],['UML','Dokumentasi'],['Use Case','Dokumentasi'],['Activity Diagram','Dokumentasi'],['SDLC','Dokumentasi'],['Waterfall','Dokumentasi'],['Agile','Dokumentasi'],
  ['Dynamics 365','ERP'],['SAP ECC','ERP'],['SAP S/4HANA','ERP']
];

const ORGS = [
  {
    emoji: '📝', title: 'Sekretaris HIMMA', sub: 'Himpunan Mahasiswa Manajemen Informatika · 2023',
    points: [
      'Mengelola surat-menyurat, notulen rapat, dan dokumentasi internal.',
      'Mengoordinasikan jadwal dan komunikasi antar kepala divisi.',
      'Membantu menyelenggarakan rapat dan acara internal.'
    ]
  },
  {
    emoji: '🌷', title: 'Fasilitator PKKMB', sub: 'Orientasi Mahasiswa Baru, Politeknik Astra · 2023',
    points: [
      'Membimbing mahasiswa baru beradaptasi dengan kehidupan kampus.',
      'Memfasilitasi kegiatan kelompok dan diskusi.',
      'Berkoordinasi dengan panitia agar setiap sesi berjalan lancar.'
    ]
  },
  {
    emoji: '🌏', title: 'Bahasa', sub: 'Kemampuan komunikasi',
    points: ['Indonesia: bahasa ibu (native).', 'English: conversational.']
  }
];

/* ---------- Ilustrasi proyek (SVG) ---------- */
const ART = {
  ecourse: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="40" y="16" width="240" height="142" rx="12" fill="#fff" opacity=".97"/>
    <rect x="40" y="16" width="240" height="22" rx="12" fill="#f6e6ee"/><rect x="40" y="28" width="240" height="10" fill="#f6e6ee"/>
    <circle cx="54" cy="27" r="3.5" fill="#ff8fb1"/><circle cx="66" cy="27" r="3.5" fill="#ffd08a"/><circle cx="78" cy="27" r="3.5" fill="#9be3c0"/>
    <rect x="52" y="48" width="132" height="76" rx="8" fill="var(--accent)"/>
    <polygon points="108,72 108,100 132,86" fill="#fff"/>
    <rect x="52" y="132" width="132" height="6" rx="3" fill="#eadbe3"/><rect x="52" y="132" width="80" height="6" rx="3" fill="var(--accent2)"/>
    <g>
      <rect x="194" y="48" width="74" height="26" rx="6" fill="#f9eef3"/><circle cx="206" cy="61" r="6" fill="var(--accent2)"/><rect x="216" y="55" width="44" height="4" rx="2" fill="#d9c3cf"/><rect x="216" y="63" width="30" height="3" rx="1.5" fill="#ead9e2"/>
      <rect x="194" y="79" width="74" height="26" rx="6" fill="#f9eef3"/><circle cx="206" cy="92" r="6" fill="var(--accent)"/><rect x="216" y="86" width="44" height="4" rx="2" fill="#d9c3cf"/><rect x="216" y="94" width="30" height="3" rx="1.5" fill="#ead9e2"/>
      <rect x="194" y="110" width="74" height="26" rx="6" fill="#f9eef3"/><circle cx="206" cy="123" r="6" fill="var(--accent2)"/><rect x="216" y="117" width="44" height="4" rx="2" fill="#d9c3cf"/><rect x="216" y="125" width="30" height="3" rx="1.5" fill="#ead9e2"/>
    </g>
    <rect x="194" y="141" width="74" height="12" rx="6" fill="var(--accent)"/>
    <text x="231" y="150" font-size="8" font-weight="700" fill="#fff" text-anchor="middle" font-family="sans-serif">Daftar Kursus</text>
    <text x="16" y="44" font-size="16" fill="#fff" opacity=".85">✦</text><text x="292" y="150" font-size="14" fill="#fff" opacity=".85">✦</text>
  </svg>`,

  ahm: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="22" y="18" width="86" height="42" rx="10" fill="#fff" opacity=".95"/>
    <text x="65" y="43" font-size="12" font-weight="700" text-anchor="middle" fill="#a8788c" font-family="sans-serif">Sistem Lama</text>
    <line class="flow" x1="112" y1="39" x2="170" y2="39" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    <polygon points="170,32 182,39 170,46" fill="#fff"/>
    <rect x="186" y="18" width="112" height="42" rx="10" fill="#fff"/>
    <text x="242" y="43" font-size="12" font-weight="800" text-anchor="middle" fill="var(--accent)" font-family="sans-serif">Spring Boot</text>
    <rect x="22" y="72" width="276" height="84" rx="10" fill="#fff" opacity=".96"/>
    <rect x="22" y="72" width="276" height="20" rx="10" fill="var(--accent)" opacity=".18"/>
    <rect x="34" y="79" width="50" height="6" rx="3" fill="var(--accent)"/><rect x="120" y="79" width="40" height="6" rx="3" fill="var(--accent)"/><rect x="200" y="79" width="40" height="6" rx="3" fill="var(--accent)"/>
    <g fill="#e9d4de">
      <rect x="34" y="100" width="64" height="5" rx="2.5"/><rect x="120" y="100" width="50" height="5" rx="2.5"/><rect x="200" y="100" width="56" height="5" rx="2.5"/>
      <rect x="34" y="120" width="54" height="5" rx="2.5"/><rect x="120" y="120" width="60" height="5" rx="2.5"/><rect x="200" y="120" width="44" height="5" rx="2.5"/>
      <rect x="34" y="140" width="70" height="5" rx="2.5"/><rect x="120" y="140" width="44" height="5" rx="2.5"/><rect x="200" y="140" width="60" height="5" rx="2.5"/>
    </g>
    <g fill="#7bd8a8">
      <circle cx="278" cy="103" r="6"/><circle cx="278" cy="123" r="6"/><circle cx="278" cy="143" r="6"/>
    </g>
    <g stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M275,103 l2.5,2.5 l4.5,-5"/><path d="M275,123 l2.5,2.5 l4.5,-5"/><path d="M275,143 l2.5,2.5 l4.5,-5"/>
    </g>
  </svg>`,

  sap: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <text x="160" y="26" font-size="11" font-weight="700" fill="#fff" text-anchor="middle" font-family="sans-serif" opacity=".9">ECC → S/4HANA</text>
    <rect x="18" y="58" width="88" height="56" rx="12" fill="#fff" opacity=".96"/>
    <text x="62" y="92" font-size="13" font-weight="800" text-anchor="middle" fill="#8a6bb5" font-family="sans-serif">SAP ECC</text>
    <rect x="214" y="58" width="88" height="56" rx="12" fill="#fff"/>
    <text x="258" y="92" font-size="13" font-weight="800" text-anchor="middle" fill="var(--accent)" font-family="sans-serif">S/4HANA</text>
    <line class="flow" x1="106" y1="86" x2="132" y2="86" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    <line class="flow" x1="188" y1="86" x2="214" y2="86" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    <circle cx="160" cy="86" r="27" fill="#fff"/>
    <text x="160" y="91" font-size="14" font-weight="800" text-anchor="middle" fill="var(--accent)" font-family="sans-serif">API</text>
    <circle r="4.5" fill="#fff"><animateMotion dur="1.8s" repeatCount="indefinite" path="M106,70 L214,70"/></circle>
    <circle r="4.5" fill="#fff" opacity=".8"><animateMotion dur="2.2s" repeatCount="indefinite" path="M106,104 L214,104"/></circle>
    <ellipse cx="62" cy="142" rx="22" ry="7" fill="#fff" opacity=".85"/><rect x="40" y="130" width="44" height="12" fill="#fff" opacity=".85"/><ellipse cx="62" cy="130" rx="22" ry="7" fill="#fff"/>
    <ellipse cx="258" cy="142" rx="22" ry="7" fill="#fff" opacity=".85"/><rect x="236" y="130" width="44" height="12" fill="#fff" opacity=".85"/><ellipse cx="258" cy="130" rx="22" ry="7" fill="#fff"/>
    <text x="160" y="150" font-size="10" fill="#fff" text-anchor="middle" font-family="sans-serif" opacity=".9">data tetap mengalir ✦</text>
  </svg>`,

  db: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="22" y="16" width="276" height="138" rx="12" fill="#fff" opacity=".97"/>
    <rect x="34" y="28" width="252" height="22" rx="6" fill="#2c1d33"/>
    <text x="44" y="43" font-size="10" fill="#ffc7e0" font-family="monospace">SELECT ... FROM ... JOIN ...</text>
    <text x="34" y="74" font-size="9.5" font-weight="700" fill="#a8788c" font-family="sans-serif">Sebelum</text>
    <rect x="92" y="66" width="190" height="11" rx="5.5" fill="#f4c2d3"/>
    <text x="34" y="98" font-size="9.5" font-weight="700" fill="#a8788c" font-family="sans-serif">Sesudah</text>
    <rect x="92" y="90" width="190" height="11" rx="5.5" fill="var(--accent)">
      <animate attributeName="width" values="190;70;70;190" keyTimes="0;.4;.85;1" dur="4s" repeatCount="indefinite"/>
    </rect>
    <text x="286" y="100" font-size="15" text-anchor="end">⚡</text>
    <rect x="34" y="118" width="62" height="20" rx="10" fill="var(--accent2)"/>
    <text x="65" y="132" font-size="9.5" font-weight="800" fill="#fff" text-anchor="middle" font-family="sans-serif">RCA ✓</text>
    <rect x="104" y="118" width="62" height="20" rx="10" fill="var(--accent)" opacity=".85"/>
    <text x="135" y="132" font-size="9.5" font-weight="800" fill="#fff" text-anchor="middle" font-family="sans-serif">Tuning ✓</text>
  </svg>`
};

/* ---------- Proyek ----------
   DRAFT: bagian yang bertanda "DRAFT" disusun dari CV + pemahaman umum,
   silakan koreksi/ubah sesuai kondisi sebenarnya.                      */
const PROJECTS = [
  {
    id: 'ecourse', cat: 'Web App', grad: 'g1', art: 'ecourse',
    title: 'E-Course System Politeknik Astra',
    role: 'Full-stack Developer & Analyst',
    period: 'Jan - Jul 2025 · Proyek akhir D3',
    short: 'Aplikasi e-learning publik untuk menelusuri dan mendaftar kursus pelatihan secara online.',
    desc: 'Aplikasi e-learning/pelatihan publik yang dibangun dari nol untuk Politeknik Astra, sekaligus menjadi proyek akhir D3. Pengguna dapat menelusuri program pelatihan dan mendaftar secara online.',
    points: [
      'Membangun front-end dengan React.js dan back-end dengan ASP.NET Web API.',
      'Merancang skema database dan mengoptimalkan struktur tabel di SQL Server agar tetap efisien saat konten kursus bertambah.',
      'Mengumpulkan kebutuhan dari stakeholder, lalu menuangkannya ke diagram UML (use case, class, sequence).',
      'Mengembangkan dan mengonsumsi RESTful API untuk menghubungkan front-end dan back-end.',
      'Menyusun dokumentasi arsitektur, desain database, dan alur aplikasi untuk keperluan maintenance dan serah terima.'
    ],
    stack: ['React.js','ASP.NET Web API','SQL Server','REST API','UML'],
    links: [['Source Code','#'],['Live Demo','#']]   // ganti '#' dengan link asli
  },
  {
    id: 'ahm', cat: 'Enterprise', grad: 'g2', art: 'ahm',
    title: 'Migrasi Aplikasi Enterprise AHM',
    role: 'System Analyst & Developer',
    period: 'Mei - Okt 2024 · Project based (hybrid)',
    short: 'Migrasi aplikasi Monitoring CBU vs No TPT dan Print Rejection Card ke Java Spring Boot.',
    desc: 'Proyek migrasi dua aplikasi internal di PT Astra Honda Motor ke arsitektur Java Spring Boot, disertai pembaruan dokumentasi agar selaras dengan sistem baru.',
    points: [
      'Migrasi aplikasi Monitoring CBU vs No TPT ke Java Spring Boot.',
      'Migrasi aplikasi Print Rejection Card ke Java Spring Boot.',
      'Memetakan alur dan fungsi aplikasi lama agar berjalan sama di sistem baru. (DRAFT)',
      'Memperbarui dokumentasi teknis agar mencerminkan sistem hasil migrasi, mendukung pengujian QA dan serah terima operasional.'
    ],
    stack: ['Java Spring Boot','Oracle','Git','Jenkins'],
    links: []
  },
  {
    id: 'sap', cat: 'Enterprise', grad: 'g3', art: 'sap',
    title: 'Integrasi API: SAP ECC ke S/4HANA',
    role: 'System Analyst & Developer',
    period: 'Sep 2025 - Sekarang',
    short: 'Dukungan pekerjaan API pada migrasi SAP agar aliran data antar sistem tetap lancar.',
    desc: 'Bagian dari program migrasi SAP ECC ke SAP S/4HANA di lingkungan enterprise Astra Honda Motor, dengan fokus pada integrasi antar sistem lewat API.',
    points: [
      'Mendukung pekerjaan terkait API pada integrasi antar sistem.',
      'Memastikan aliran data antar sistem tetap konsisten selama dan setelah migrasi.',
      'Menguji endpoint API menggunakan Postman. (DRAFT)',
      'Berkolaborasi dengan stakeholder bisnis dan korporat serta menjaga dokumentasi teknis.'
    ],
    stack: ['REST API','SAP ECC','SAP S/4HANA','Postman'],
    links: []
  },
  {
    id: 'db', cat: 'Database', grad: 'g4', art: 'db',
    title: 'Optimasi Query & Root Cause Analysis',
    role: 'System Analyst & Developer',
    period: 'Sep 2025 - Sekarang',
    short: 'Tuning query SQL/PL-SQL dan analisis akar masalah untuk sistem produksi yang lebih stabil.',
    desc: 'Pekerjaan berkelanjutan menjaga performa dan keandalan aplikasi produksi: mengoptimalkan query dan menelusuri akar masalah dari isu yang berulang.',
    points: [
      'Optimasi dan tuning query SQL serta PL/SQL untuk meningkatkan efisiensi dan waktu respons sistem.',
      'Root cause analysis pada masalah aplikasi yang berulang, lalu menerapkan perbaikan permanen untuk mengurangi downtime.',
      'Pengujian terstruktur UT, SIT, QAT, dan UAT agar cacat terdeteksi lebih awal.',
      'Bekerja di atas Oracle, SQL Server, dan MySQL.'
    ],
    stack: ['SQL','PL/SQL','Oracle','SQL Server','MySQL'],
    links: []
  }
];

const PALETTES = {
  rose:     { label: 'Rose',     a: '#e8588f', b: '#b78cff' },
  lavender: { label: 'Lavender', a: '#8e6cf0', b: '#f08bc4' },
  peach:    { label: 'Peach',    a: '#f2765f', b: '#f7a8c4' },
  mint:     { label: 'Mint',     a: '#2fb89a', b: '#f58fb8' }
};

const TERMINAL = {
  help:       () => ['Perintah tersedia:', '  about       tentang saya', '  experience  pengalaman kerja', '  skills      daftar skill', '  projects    proyek pilihan', '  education   pendidikan & sertifikasi', '  learning    yang sedang saya pelajari', '  contact     cara menghubungi saya', '  theme       ganti tema gelap/terang', '  palette     ganti warna (rose, lavender, peach, mint)', '  petals      hujan kelopak bunga 🌸', '  music       putar / jeda musik 🎵', '  cat         panggil / sembunyikan kucing 🐱', '  cat oren    ganti bulu: oren, abu, hitam, palet', '  feed        kasih makan Mochi 🐟', '  yarn        main bola benang dengan Mochi 🧶', '  home        suruh Mochi pulang / keluar rumah 🏠', '  ide         mode editor kode </>', '  cv          unduh CV (PDF)', '  clear       bersihkan layar'].map(l => CURRENT_LANG === 'en' ? (EN[l] || l.slice(0, 14) + tr(l.slice(14))) : l),
  about:      () => ['Anisatul Fatikha, Fullstack Developer & System Analyst.', '2 tahun pengalaman di aplikasi enterprise, integrasi sistem,', 'dan database. Berbasis di Jakarta Utara.'],
  whoami:     () => TERMINAL.about(),
  experience: () => EXPERIENCE.map(e => `• ${tr(e.date)}  ${tr(e.role)}`),
  skills:     () => ['Bahasa   : Java, C#, SQL, JavaScript, PHP, HTML, CSS', 'Framework: Spring Boot, ASP.NET, React.js, Laravel, Node.js, Bootstrap', 'Database : Oracle, SQL Server, MySQL', 'ERP      : Dynamics 365, SAP ECC, SAP S/4HANA'],
  projects:   () => PROJECTS.map(p => `• ${tr(p.title)}`),
  education:  () => ['D3 Manajemen Informatika, Politeknik Astra (IPK 3.73)', 'Sertifikasi: Lean Six Sigma White Belt (2026), Dynamics 365 Fundamentals (2025),', '            MTCNA (2024), Java OOP Course-Net (2023)'],
  learning:   () => ['Sedang dipelajari:', ...$$('#learnGrid .learn-card').map(c => '• ' + $('h3', c).textContent + ', ' + $('.company', c).textContent)],
  learn:      () => TERMINAL.learning(),
  belajar:    () => TERMINAL.learning(),
  contact:    () => ['Email   : fatikhaanisatul@gmail.com', 'LinkedIn: linkedin.com/in/anisatul-fatikha', 'GitHub  : github.com/ansfatikhaa'],
  hello:      () => ['Halo juga! 👋 Ketik "help" untuk melihat perintah.'],
  hi:         () => TERMINAL.hello(),
  sudo:       () => ['Nice try 😄 tapi kamu tidak punya akses di sini.']
};

/* =====================================================
   BILINGUAL: Indonesian / English
   Language is persisted locally; all existing interactions are preserved.
===================================================== */
const CURRENT_LANG = (() => {
  try {
    const q = new URLSearchParams(location.search).get('lang');   // mis. index.html?lang=en
    if (q === 'en' || q === 'id') { localStorage.setItem('portfolio-lang', q); return q; }
    return localStorage.getItem('portfolio-lang') || 'id';
  } catch (_) { return 'id'; }
})();
const EN = {
  'Halo, saya':'Hello, I am', 'Selamat pagi, saya':'Good morning, I am', 'Selamat siang, saya':'Good afternoon, I am', 'Selamat sore, saya':'Good afternoon, I am', 'Selamat malam, saya':'Good evening, I am',
  'Saya seorang':'I am a', 'Fullstack Developer dengan 2 tahun pengalaman membangun aplikasi enterprise, integrasi sistem, dan pengelolaan database. Gerakkan mouse di area ini, ada sesuatu yang bereaksi.':'Fullstack Developer with 2 years of experience building enterprise applications, system integrations, and managing databases. Move your mouse around this area to see something react.',
  'Lihat Proyek':'View Projects','Hubungi Saya':'Contact Me','Download CV':'Download CV','Terbuka untuk kolaborasi':'Open to collaboration','Tahun pengalaman':'Years of experience','IPK D3':'Diploma GPA','Sertifikasi':'Certifications','psst, klik avatar-nya ✦':'psst, click the avatar ✦','Tekan':'Press','untuk jalan pintas':'for shortcuts','Beranda':'Home',
  'Tentang':'About','Pengalaman':'Experience','Skill':'Skills','Proyek':'Projects','Pendidikan':'Education','Kontak':'Contact','Pengalaman Kerja':'Work Experience','Technical Skills':'Technical Skills','Proyek Pilihan':'Featured Projects','Pendidikan & Sertifikasi':'Education & Certifications','Mari':'Let’s','Terhubung':'Connect','Latar belakang':'Background','Perjalanan':'Career Journey','Keahlian':'Expertise','Karya':'Selected Work',
  'Tentang Saya':'About Me','Saya lulusan D3 Manajemen Informatika Politeknik Astra (IPK 3.73) dan penerima beasiswa penuh Yayasan Astra Bina Ilmu. Saat ini saya bekerja sebagai System Analyst & Developer yang ditugaskan di PT Astra Honda Motor, Enterprise Digitalization Management Department.':'I hold a Diploma in Informatics Management from Astra Polytechnic (GPA 3.73) and received a full scholarship from the Astra Bina Ilmu Foundation. I currently work as a System Analyst & Developer assigned to PT Astra Honda Motor, within the Enterprise Digitalization Management Department.',
  'Saya nyaman bekerja di frontend dan backend: dari analisis kebutuhan, FSD/TSD, optimasi query SQL/PL-SQL, sampai pengujian (UT, SIT, QAT, UAT) dan dokumentasi teknis.':'I work across both frontend and backend development, covering requirements analysis, FSD/TSD, SQL/PL-SQL query optimization, testing (UT, SIT, QAT, UAT), and technical documentation.',
  '→ Coba terminal di sebelah. Ketik':'→ Try the terminal. Type','atau klik perintahnya.':'or click a command.','ketik perintah...':'type a command...','Pintasan':'Shortcuts','Cari bagian atau aksi... (mis. proyek, warna, tema)':'Search sections or actions... (e.g. projects, colors, theme)','↑↓ pilih · Enter jalankan · Esc tutup':'↑↓ navigate · Enter select · Esc close',
  'Ke bagian Tentang':'Go to About','Ke bagian Pengalaman':'Go to Experience','Ke bagian Skill':'Go to Skills','Ke bagian Proyek':'Go to Projects','Ke bagian Pendidikan':'Go to Education','Ke bagian Kontak':'Go to Contact','Tidak ada hasil':'No results','navigasi':'navigation','proyek':'project','tampilan':'appearance','warna':'color','seru-seruan':'fun','musik':'music','kucing':'cat',
  'Warna favoritmu':'Choose your color','Bulu Mochi':'Mochi’s fur','🐟 Kasih makan Mochi':'🐟 Feed Mochi','Ganti warna':'Change colors','Ganti tema':'Toggle theme','Tutup':'Close','Yang dikerjakan':'Responsibilities','Teknologi':'Technologies','Proyek internal perusahaan, kode tidak dipublikasikan.':'Internal company project; source code is not publicly available.','Lihat detail →':'View details →','KLIK UNTUK MEMBALIK ↻':'CLICK TO FLIP ↻',
  'Sep 2025 - Sekarang':'Sep 2025 - Present','Sekarang':'Present','Jan 2025 - Jul 2025':'Jan 2025 - Jul 2025','Mei 2024 - Okt 2024':'May 2024 - Oct 2024','Astra Honda Motor (Project)':'Astra Honda Motor (Project)','Politeknik Astra (Magang)':'Astra Polytechnic (Internship)',
  'System Analyst & Developer':'System Analyst & Developer','Full-stack Developer & Staff Certification Department (Magang)':'Full-stack Developer & Certification Department Staff (Internship)','System Analyst & Developer (Project Based)':'System Analyst & Developer (Project-based)',
  'Menganalisis kebutuhan bisnis menjadi spesifikasi fungsional dan teknis (FSD/TSD).':'Translated business requirements into functional and technical specifications (FSD/TSD).','Mengembangkan aplikasi web enterprise dengan Java Spring Boot dan ASP.NET di atas Oracle, SQL Server, dan MySQL.':'Developed enterprise web applications using Java Spring Boot and ASP.NET with Oracle, SQL Server, and MySQL.','Optimasi query SQL dan PL/SQL untuk meningkatkan performa sistem produksi.':'Optimized SQL and PL/SQL queries to improve production system performance.','Root cause analysis untuk masalah berulang agar downtime berkurang.':'Performed root cause analysis on recurring issues to reduce downtime.','Menjalankan pengujian UT, SIT, QAT, dan UAT.':'Conducted UT, SIT, QAT, and UAT testing.','Mendukung integrasi API pada migrasi SAP ECC ke SAP S/4HANA.':'Supported API integration during the SAP ECC to SAP S/4HANA migration.',
  'Membangun aplikasi e-learning publik dari nol dengan React.js dan ASP.NET Web API.':'Built a public e-learning application from the ground up using React.js and ASP.NET Web API.','Merancang skema database dan mengoptimalkan tabel di SQL Server.':'Designed the database schema and optimized tables in SQL Server.','Membuat diagram UML (use case, class, sequence) dan dokumentasi teknis.':'Created UML diagrams (use case, class, sequence) and technical documentation.','Migrasi aplikasi Monitoring CBU vs No TPT menggunakan Java Spring Boot.':'Migrated the CBU vs No TPT Monitoring application using Java Spring Boot.','Migrasi aplikasi Print Rejection Card menggunakan Java Spring Boot.':'Migrated the Print Rejection Card application using Java Spring Boot.','Memperbarui dokumentasi teknis untuk mendukung QA dan serah terima operasional.':'Updated technical documentation to support QA and operational handover.',
  'Semua':'All','Bahasa':'Language','Framework':'Framework','Database':'Database','Tools':'Tools','Dokumentasi':'Documentation','ERP':'ERP','skill ditampilkan':'skills displayed','Penerima Beasiswa Penuh Yayasan Astra Bina Ilmu':'Recipient of the Astra Bina Ilmu Foundation Full Scholarship','IPK':'GPA','Proyek akhir: Web-Based E-Course System untuk pelatihan publik':'Final project: Web-Based E-Course System for public training','Mata kuliah: manajemen database, pemrograman web, analisis & desain sistem, rekayasa perangkat lunak':'Coursework: database management, web programming, systems analysis & design, and software engineering','Sebelumnya: SMKN 2 Kebumen, Audio Video Engineering (2018 - 2021)':'Previously: SMKN 2 Kebumen, Audio Video Engineering (2018–2021)',
  'Lean Six Sigma White Belt':'Lean Six Sigma White Belt','Microsoft Dynamics 365 Fundamentals':'Microsoft Dynamics 365 Fundamentals','MikroTik Certified Network Associate (MTCNA)':'MikroTik Certified Network Associate (MTCNA)','Java OOP Course-Net':'Java OOP Course-Net','Organisasi &':'Organizations &','Kegiatan':'Activities','Sekretaris HIMMA':'HIMMA Secretary','Himpunan Mahasiswa Manajemen Informatika · 2023':'Informatics Management Student Association · 2023','Fasilitator PKKMB':'Student Orientation Facilitator','Orientasi Mahasiswa Baru, Politeknik Astra · 2023':'New Student Orientation, Astra Polytechnic · 2023','Kemampuan komunikasi':'Communication skills','Indonesia: bahasa ibu (native).':'Indonesian: native.','English: conversational.':'English: conversational.',
  'Mengelola surat-menyurat, notulen rapat, dan dokumentasi internal.':'Managed correspondence, meeting minutes, and internal documentation.','Mengoordinasikan jadwal dan komunikasi antar kepala divisi.':'Coordinated schedules and communication among division leads.','Membantu menyelenggarakan rapat dan acara internal.':'Helped organize meetings and internal events.','Membimbing mahasiswa baru beradaptasi dengan kehidupan kampus.':'Guided new students as they adapted to campus life.','Memfasilitasi kegiatan kelompok dan diskusi.':'Facilitated group activities and discussions.','Berkoordinasi dengan panitia agar setiap sesi berjalan lancar.':'Coordinated with the organizing committee to ensure each session ran smoothly.',
  'Terbuka untuk peluang kerja, kolaborasi proyek, atau diskusi seputar software development. Isi form di samping, atau salin email langsung.':'Open to job opportunities, project collaborations, or software development discussions. Fill out the form or copy my email directly.','Nama':'Name','Email':'Email','Pesan':'Message','Nama kamu':'Your name','email@contoh.com':'email@example.com','Tulis pesanmu...':'Write your message...','Kirim Pesan':'Send Message','Lengkapi semua kolom dulu ya.':'Please complete all fields.','Format email belum benar.':'Please enter a valid email address.','Terima kasih! Pesanmu terkirim 💌':'Thank you! Your message has been sent 💌','Terima kasih! Pesanmu sudah terkirim 💌':'Thank you! Your message has been sent 💌','Mengirim…':'Sending…','Pesan belum terkirim.':'Message could not be sent.','Koneksi bermasalah, pesan belum terkirim. Coba lagi atau salin email di samping.':'Connection problem. The message was not sent. Please try again or copy the email address.','Membuka aplikasi email kamu…':'Opening your email application…','Email disalin ✔':'Email copied ✔','Pesan terkirim ✔':'Message sent ✔','Mengunduh CV… 📄':'Downloading CV… 📄',
  'Warna Rose dipakai 🎀':'Rose color applied 🎀','Warna Lavender dipakai 🎀':'Lavender color applied 🎀','Warna Peach dipakai 🎀':'Peach color applied 🎀','Warna Mint dipakai 🎀':'Mint color applied 🎀','Mode gelap 🌙':'Dark mode 🌙','Mode terang ☀️':'Light mode ☀️',
  'Daftar Kursus':'Course Catalog','Sistem Lama':'Legacy System','data tetap mengalir ✦':'Data keeps flowing ✦','Sebelum':'Before','Sesudah':'After','RCA ✓':'RCA ✓','Tuning ✓':'Tuning ✓',
  'PT Istidata Indopasific Solution Centre, ditugaskan di PT Astra Honda Motor Plant 1':'PT Istidata Indopasific Solution Centre, assigned to PT Astra Honda Motor Plant 1',
  'Politeknik Astra, Bekasi':'Astra Polytechnic, Bekasi','PT Astra Honda Motor, Sunter, Jakarta Utara':'PT Astra Honda Motor, Sunter, North Jakarta',
  'E-Course System Politeknik Astra':'Astra Polytechnic E-Course System','Aplikasi e-learning publik untuk menelusuri dan mendaftar kursus pelatihan secara online.':'A public e-learning application for browsing and registering for training courses online.',
  'Aplikasi e-learning/pelatihan publik yang dibangun dari nol untuk Politeknik Astra, sekaligus menjadi proyek akhir D3. Pengguna dapat menelusuri program pelatihan dan mendaftar secara online.':'A public e-learning and training application built from scratch for Astra Polytechnic as a Diploma final project. Users can browse training programs and register online.',
  'Membangun front-end dengan React.js dan back-end dengan ASP.NET Web API.':'Built the frontend with React.js and the backend with ASP.NET Web API.','Merancang skema database dan mengoptimalkan struktur tabel di SQL Server agar tetap efisien saat konten kursus bertambah.':'Designed the database schema and optimized SQL Server table structures to maintain efficiency as course content grows.','Mengumpulkan kebutuhan dari stakeholder, lalu menuangkannya ke diagram UML (use case, class, sequence).':'Gathered stakeholder requirements and translated them into UML diagrams (use case, class, and sequence).','Mengembangkan dan mengonsumsi RESTful API untuk menghubungkan front-end dan back-end.':'Developed and consumed RESTful APIs to connect the frontend and backend.','Menyusun dokumentasi arsitektur, desain database, dan alur aplikasi untuk keperluan maintenance dan serah terima.':'Prepared architecture, database design, and application workflow documentation for maintenance and handover.',
  'Migrasi Aplikasi Enterprise AHM':'AHM Enterprise Application Migration','Migrasi aplikasi Monitoring CBU vs No TPT dan Print Rejection Card ke Java Spring Boot.':'Migration of the CBU vs No TPT Monitoring and Print Rejection Card applications to Java Spring Boot.','Proyek migrasi dua aplikasi internal di PT Astra Honda Motor ke arsitektur Java Spring Boot, disertai pembaruan dokumentasi agar selaras dengan sistem baru.':'Migrated two internal applications at PT Astra Honda Motor to a Java Spring Boot architecture and updated documentation to align with the new system.','Memetakan alur dan fungsi aplikasi lama agar berjalan sama di sistem baru. (DRAFT)':'Mapped legacy application workflows and functions to maintain equivalent behavior in the new system. (DRAFT)',
  'Integrasi API: SAP ECC ke S/4HANA':'API Integration: SAP ECC to S/4HANA','Dukungan pekerjaan API pada migrasi SAP agar aliran data antar sistem tetap lancar.':'API integration support for the SAP migration to keep data flowing smoothly between systems.','Bagian dari program migrasi SAP ECC ke SAP S/4HANA di lingkungan enterprise Astra Honda Motor, dengan fokus pada integrasi antar sistem lewat API.':'Contributed to the SAP ECC to SAP S/4HANA migration program at Astra Honda Motor, focusing on API-based system integration.','Mendukung pekerjaan terkait API pada integrasi antar sistem.':'Supported API-related work for system integration.','Memastikan aliran data antar sistem tetap konsisten selama dan setelah migrasi.':'Helped maintain consistent data flows between systems during and after the migration.','Menguji endpoint API menggunakan Postman. (DRAFT)':'Tested API endpoints using Postman. (DRAFT)','Berkolaborasi dengan stakeholder bisnis dan korporat serta menjaga dokumentasi teknis.':'Collaborated with business and corporate stakeholders and maintained technical documentation.',
  'Optimasi Query & Root Cause Analysis':'Query Optimization & Root Cause Analysis','Tuning query SQL/PL-SQL dan analisis akar masalah untuk sistem produksi yang lebih stabil.':'SQL/PL-SQL query tuning and root cause analysis to improve production system stability.','Pekerjaan berkelanjutan menjaga performa dan keandalan aplikasi produksi: mengoptimalkan query dan menelusuri akar masalah dari isu yang berulang.':'Ongoing work to maintain production application performance and reliability through query optimization and root cause analysis of recurring issues.','Optimasi dan tuning query SQL serta PL/SQL untuk meningkatkan efisiensi dan waktu respons sistem.':'Optimized and tuned SQL and PL/SQL queries to improve system efficiency and response times.','Root cause analysis pada masalah aplikasi yang berulang, lalu menerapkan perbaikan permanen untuk mengurangi downtime.':'Investigated recurring application issues and implemented permanent fixes to reduce downtime.','Pengujian terstruktur UT, SIT, QAT, dan UAT agar cacat terdeteksi lebih awal.':'Performed structured UT, SIT, QAT, and UAT to detect defects early.','Bekerja di atas Oracle, SQL Server, dan MySQL.':'Worked with Oracle, SQL Server, and MySQL.',
  'Buka proyek: ':'Open project: ','Ganti tema gelap / terang':'Toggle dark / light theme','Hujan kelopak bunga 🌸':'Flower petal shower 🌸','Putar / jeda musik 🎵':'Play / pause music 🎵','Panggil / sembunyikan kucing 🐱':'Show / hide the cat 🐱','Mochi pulang / keluar rumah 🏠':'Send Mochi home / call Mochi 🏠','Kasih makan Mochi 🐟':'Feed Mochi 🐟','Salin email':'Copy email','Buka LinkedIn':'Open LinkedIn','Buka GitHub':'Open GitHub',
  'Saya':'Me','Pengalaman':'Experience','Keahlian':'Expertise','Pilihan':'Featured','Sertifikasi':'Certifications','Latar belakang':'Background','Kontak':'Contact','Pendidikan':'Education','Kerja':'Work','Mari':'Let’s','Terhubung':'Connect','Kembali ke atas':'Back to top','Scroll ke bawah':'Scroll down','Ganti warna':'Change colors','Warna favoritmu':'Choose your color','klik untuk kejutan':'Click for a surprise','Kirim':'Send','Dibuat dengan HTML, CSS & JavaScript ✿':'Built with HTML, CSS & JavaScript ✿',
  'Perintah tersedia:':'Available commands:','tentang saya':'about me','pengalaman kerja':'work experience','daftar skill':'list of skills','proyek pilihan':'featured projects','pendidikan & sertifikasi':'education & certifications','cara menghubungi saya':'how to contact me','ganti tema gelap/terang':'toggle dark/light theme','ganti warna (rose, lavender, peach, mint)':'change color (rose, lavender, peach, mint)','hujan kelopak bunga 🌸':'flower petal shower 🌸','putar / jeda musik 🎵':'play / pause music 🎵','panggil / sembunyikan kucing 🐱':'show / hide the cat 🐱','ganti bulu: oren, abu, hitam, palet':'change fur: orange, grey, black, palette','kasih makan Mochi 🐟':'feed Mochi 🐟','suruh Mochi pulang / keluar rumah 🏠':'send Mochi home / call Mochi 🏠','unduh CV (PDF)':'download CV (PDF)','bersihkan layar':'clear screen','Selamat datang! Ketik "help" untuk melihat perintah.':'Welcome! Type "help" to see the available commands.','Halo juga! 👋 Ketik "help" untuk melihat perintah.':'Hello there! 👋 Type "help" to see the available commands.','perintah tidak dikenal':'unknown command','ketik perintah...':'type a command...',
  'Jan - Jul 2025 · Proyek akhir D3':'Jan–Jul 2025 · Diploma final project','Mei - Okt 2024 · Project based (hybrid)':'May–Oct 2024 · Project-based (hybrid)','Sep 2025 - Sekarang':'Sep 2025 - Present',
  'Fullstack Developer & System Analyst':'Fullstack Developer & System Analyst','System Analyst & Developer':'System Analyst & Developer','Full-stack Developer & Analyst':'Full-stack Developer & Analyst',
  'Halo, saya':'Hello, I am','Terbuka untuk kolaborasi':'Open to collaboration','Tahun pengalaman':'Years of experience','IPK D3':'Diploma GPA','Organisasi &':'Organizations &','klik kartu untuk membalik':'click a card to flip','Buat dengan HTML, CSS & JavaScript':'Built with HTML, CSS & JavaScript',
  'Buka LinkedIn':'Open LinkedIn','Buka GitHub':'Open GitHub','Pintasan (Ctrl+K)':'Shortcuts (Ctrl+K)','Ganti tema':'Toggle theme','Menu':'Menu','Avatar':'Avatar','Rumah Mochi':'Mochi’s house','Putar musik':'Play music','Kembali ke atas':'Back to top'
};
/* Tambahan terjemahan: label, footer, terminal, kucing, musik */
Object.assign(EN, {
  '01 · Tentang':'01 · About','02 · Perjalanan':'02 · Journey','03 · Keahlian':'03 · Expertise','04 · Karya':'04 · Work','05 · Latar belakang':'05 · Background','06 · Kontak':'06 · Contact',
  '· dibuat dengan HTML, CSS & JavaScript ✿':'· built with HTML, CSS & JavaScript ✿','KLIK UNTUK MEMBALIK ↻':'CLICK TO FLIP ↻',
  'kontak':'contact','Jeda musik':'Pause music',' · klik untuk jeda':' · click to pause','♪ Putar musik':'♪ Play music',
  'Oren':'Orange','Abu-abu':'Grey','Hitam':'Black','Ikut palet':'Match palette','oren':'orange','abu-abu':'grey','hitam':'black','ikut palet':'match palette',
  'Pilihan bulu: oren, abu, hitam, palet':'Fur options: orange, grey, black, palette',
  /* terminal */
  'Tema diganti ke gelap 🌙':'Theme switched to dark 🌙','Tema diganti ke terang ☀️':'Theme switched to light ☀️',
  '♪ Musik diputar. Ketik "music" lagi untuk menjeda.':'♪ Music playing. Type "music" again to pause.','⏸ Musik dijeda.':'⏸ Music paused.',
  'Mochi pulang ke rumahnya 🏠':'Mochi went home 🏠','Mochi keluar dari rumah 🥱':'Mochi came out of the house 🥱',
  'Ikan dijatuhkan! 🐟 Mochi datang…':'Fish dropped! 🐟 Mochi is coming…','Mochi datang! 🐱 Gerakkan mouse, dia akan mengikuti.':'Mochi is here! 🐱 Move your mouse and it will follow.',
  'Mochi pergi tidur dulu 💤':'Mochi went off for a nap 💤',
  '  cat oren    ganti bulu: oren, abu, hitam, palet':'  cat orange  change fur: orange, grey, black, palette',
  '2 tahun pengalaman di aplikasi enterprise, integrasi sistem,':'2 years of experience in enterprise applications, system integration,',
  'dan database. Berbasis di Jakarta Utara.':'and databases. Based in North Jakarta.',
  'Bahasa   : Java, C#, SQL, JavaScript, PHP, HTML, CSS':'Languages: Java, C#, SQL, JavaScript, PHP, HTML, CSS',
  'D3 Manajemen Informatika, Politeknik Astra (IPK 3.73)':'Diploma in Informatics Management, Astra Polytechnic (GPA 3.73)',
  'Sertifikasi: Lean Six Sigma White Belt (2026), Dynamics 365 Fundamentals (2025),':'Certifications: Lean Six Sigma White Belt (2026), Dynamics 365 Fundamentals (2025),',
  'Nice try 😄 tapi kamu tidak punya akses di sini.':'Nice try 😄 but you don’t have access here.',
  /* mode editor kode */
  'Hanya untuk dilihat':'View only','Memuat dokumen…':'Loading document…','Dokumen belum bisa ditampilkan. Coba muat ulang halaman.':'The document could not be displayed. Please reload the page.','Transkrip Nilai':'Academic Transcript',
  'Lihat transkrip nilai ↗':'View academic transcript ↗','Klik untuk melihat sertifikatnya.':'Click to view the certificate.','Lihat sertifikat':'View certificate',
  '  ide         mode editor kode </>':'  ide         code editor mode </>',
  'Mode editor kode':'Code editor mode','Mode editor kode </>':'Code editor mode </>','Mode editor aktif </>':'Editor mode on </>','Mode editor dimatikan':'Editor mode off',
  'tutup editor':'close editor','Keluar dari mode editor':'Exit editor mode','Mode editor aktif. Klik "tutup editor" untuk kembali.':'Editor mode on. Click "close editor" to go back.',
  /* toast & pesan */
  'Hai! Kamu menemukan easter egg 🌸':'Hi! You found an easter egg 🌸','Semangat terus ya, kamu hebat ✨':'Keep going, you’re doing great ✨','Kode rapi, hati tenang 💖':'Clean code, calm mind 💖',
  'Satu commit lagi, baru istirahat ☕':'One more commit, then I’ll rest ☕','Bug itu cuma fitur yang belum dikenalkan 🐞':'A bug is just a feature that hasn’t been introduced yet 🐞',
  'Kode rahasia terbuka! 🌸':'Secret code unlocked! 🌸','Musik tidak bisa diputar 😢':'The music couldn’t be played 😢','Browser kamu belum mendukung audio ini 😢':'Your browser doesn’t support this audio 😢',
  'Lo-fi diputar 🎵 klik piringan lagi untuk jeda':'Lo-fi is playing 🎵 click the record again to pause',
  ' Coba lagi, atau kirim langsung lewat email.':' Please try again, or email me directly.','Pesan dari portofolio: ':'Message from portfolio: ',
  'Migrasi aplikasi Monitoring CBU vs No TPT ke Java Spring Boot.':'Migrated the CBU vs No TPT Monitoring application to Java Spring Boot.','Migrasi aplikasi Print Rejection Card ke Java Spring Boot.':'Migrated the Print Rejection Card application to Java Spring Boot.',
  'Memetakan alur dan fungsi aplikasi lama agar berjalan sama di sistem baru.':'Mapped the flows and functions of the legacy applications so they behave the same in the new system.',
  'Memperbarui dokumentasi teknis agar mencerminkan sistem hasil migrasi, mendukung pengujian QA dan serah terima operasional.':'Updated technical documentation to reflect the migrated system, supporting QA testing and operational handover.',
  'Menguji endpoint API menggunakan Postman.':'Tested API endpoints using Postman.',
  'D3 Manajemen Informatika':'Diploma (D3) in Informatics Management','IPK 3.73 / 4.00':'GPA 3.73 / 4.00','Sep 2022 - Agu 2025':'Sep 2022 - Aug 2025','Pendidikan &':'Education &','Portofolio Canva':'Canva Portfolio','Klik untuk kejutan':'Click for a surprise','Indonesia: bahasa ibu (native).':'Indonesian: native.','English: conversational.':'English: conversational.',
  /* kucing */
  'hoaam~ 🥱':'yaaawn~ 🥱','miaw? ada apa?':'meow? what’s up?','aku bangun~':'I’m awake~','pulang dulu ya 🏠':'heading home for now 🏠','Bulu baru! ✨':'New fur! ✨','Kelopak! 🌸':'Petals! 🌸',
  'Kenyang~ makasih ya 💕':'So full~ thank you 💕','nyam nyam 🐟':'nom nom 🐟','enak!':'yummy!','nyam~ 😋':'nom~ 😋','hap!':'gotcha!','dapet!':'got it!','nyam 🌸':'nom 🌸',
  'miaw~ 😺':'meow~ 😺','meong~':'meow~','miaw!':'meow!','mrow?':'mrow?','♪ lagunya enak~':'♪ nice song~'
});
Object.assign(EN, {
  '06 · Bertumbuh':'06 · Growth','07 · Kontak':'07 · Contact','Belajar':'Learning','Sedang Saya':'Currently','Pelajari':'Learning',
  'Selain bekerja, saya melanjutkan kuliah S1 dan terus menambah ilmu baru.':'Alongside work, I’m pursuing a bachelor’s degree and continuing to pick up new skills.',
  'Sedang berjalan':'In progress','Kuliah':'Degree','S1 Sistem Informasi':'Bachelor’s in Information Systems',
  'Kuliah S1 Sistem Informasi secara daring, berjalan bersamaan dengan pekerjaan saya sebagai System Analyst & Developer.':'Studying for a bachelor’s degree in Information Systems online, alongside my work as a System Analyst & Developer.',
  'Kuliah daring':'Online study','Sambil bekerja':'While working','Sistem Informasi':'Information Systems',
  'Sedang dipelajari:':'Currently learning:','yang sedang saya pelajari':'what I’m currently learning','main bola benang dengan Mochi 🧶':'play with a ball of yarn with Mochi 🧶',
  'Ke bagian Belajar':'Go to Learning','Main bola benang 🧶':'Play with yarn 🧶','🧶 Main bola benang':'🧶 Play with yarn',
  'Bola benang dilempar! 🧶 Mochi mau main… (bola bisa diseret)':'Yarn ball thrown! 🧶 Mochi wants to play… (you can drag the ball)','Bola benang disimpan 🧶':'Yarn ball put away 🧶',
  'Animasi dikurangi di perangkatmu, jadi Mochi diam saja 🧶':'Reduced motion is on for your device, so Mochi stays still 🧶',
  'Bola benang! 🧶':'Yarn ball! 🧶','Capek ah~ 😮‍💨':'Tired~ 😮‍💨','terkam!':'pounce!','hehe 🧶':'hehe 🧶','dapet! 🧶':'got it! 🧶','prrr 🧶':'prrr 🧶'
});
const ENN = {};
Object.keys(EN).forEach(k => { ENN[k.replace(/\s+/g, ' ').trim()] = EN[k]; });
const PATTERNS = [
  [/^Buka proyek: ([\s\S]*)$/, m => 'Open project: ' + tr(m[1])],
  [/^Warna (Rose|Lavender|Peach|Mint)$/, m => 'Color ' + m[1]],
  [/^Bulu Mochi: ([\s\S]*)$/, m => 'Mochi’s fur: ' + tr(m[1])],
  [/^Bulu Mochi sekarang: ([\s\S]*) 🐱$/, m => 'Mochi’s fur is now: ' + tr(m[1]) + ' 🐱'],
  [/^Warna diganti ke ([\s\S]*) 🎀$/, m => 'Color changed to ' + m[1] + ' 🎀'],
  [/^palet tidak ditemukan\. Pilihan: ([\s\S]*)$/, m => 'palette not found. Options: ' + m[1]],
  [/^Pilihan: ([\s\S]*)\. Contoh: palette lavender$/, m => 'Options: ' + m[1] + '. Example: palette lavender'],
  [/^perintah tidak dikenal: "([\s\S]*)"\. Ketik "help"\.$/, m => 'unknown command: "' + m[1] + '". Type "help".'],
  [/^Dapat (\d+) kelopak! 🌸$/, m => 'Caught ' + m[1] + ' petals! 🌸'],
  [/^Halo, aku (.+)! Gerakkan mouse, aku ikut 🐾$/, m => 'Hi, I’m ' + m[1] + '! Move your mouse and I’ll follow 🐾'],
  [/^(.+) datang! 🐱$/, m => m[1] + ' is here! 🐱']
];
const tr = value => {
  if (CURRENT_LANG !== 'en' || typeof value !== 'string') return value;
  if (EN[value]) return EN[value];
  for (const [re, fn] of PATTERNS) { const m = value.match(re); if (m) return fn(m); }
  return value;
};
/* Ilustrasi SVG berisi teks (mis. "Daftar Kursus"): terjemahkan teks di antara tag */
const trHTML = html => CURRENT_LANG === 'en' ? html.replace(/>([^<>]+)</g, (m, t) => { const n = t.trim(); return n && tr(n) !== n ? '>' + tr(n) + '<' : m; }) : html;

/* =====================================================
   UTIL
===================================================== */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer  = matchMedia('(pointer: fine)').matches;
const rand = (a, b) => Math.random() * (b - a) + a;

function toast(msg) {
  const t = $('#toast');
  t.textContent = tr(msg);
  t.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove('show'), 2400);
}
function mk(tag, cls, text) {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (text !== undefined) el.textContent = tr(text);
  return el;
}

/* Unduh CV: dipakai terminal & command palette (tombol di hero memakai <a download> langsung).
   Nama file harus sama dengan atribut href pada #cvBtn di index.html. */
function downloadCV() {
  const btn = document.getElementById('cvBtn');
  if (btn) btn.click();
  toast('Mengunduh CV… 📄');
}

/* =====================================================
   TEMA (gelap/terang) + PALET WARNA
===================================================== */
const root = document.documentElement;
const themeBtn = $('#themeBtn');
const ICON_MOON = '<svg class="i" viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
const ICON_SUN  = '<svg class="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';

function applyTheme(t) {
  root.setAttribute('data-theme', t);
  themeBtn.innerHTML = t === 'dark' ? ICON_SUN : ICON_MOON;
}
function toggleTheme() {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) {}
  return next;
}
function applyPalette(name, silent) {
  if (!PALETTES[name]) return false;
  root.setAttribute('data-palette', name);
  $$('.swatch').forEach(s => s.classList.toggle('active', s.dataset.name === name));
  try { localStorage.setItem('palette', name); } catch (e) {}
  if (!silent) toast(`Warna ${PALETTES[name].label} dipakai 🎀`);
  return true;
}

let savedTheme = null, savedPalette = null;
try { savedTheme = localStorage.getItem('theme'); savedPalette = localStorage.getItem('palette'); } catch (e) {}
applyTheme(savedTheme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
themeBtn.addEventListener('click', toggleTheme);

/* Palette picker UI */
(function paletteUI() {
  const fab = $('#palFab'), pop = $('#palPop'), box = $('#swatches');
  Object.entries(PALETTES).forEach(([name, p]) => {
    const b = mk('button', 'swatch');
    b.type = 'button'; b.dataset.name = name; b.title = p.label; b.setAttribute('aria-label', 'Warna ' + p.label);
    b.style.background = `linear-gradient(135deg, ${p.a}, ${p.b})`;
    b.addEventListener('click', () => applyPalette(name));
    box.append(b);
  });
  function setOpen(o) { pop.classList.toggle('open', o); fab.setAttribute('aria-expanded', o); }
  fab.addEventListener('click', e => { e.stopPropagation(); setOpen(!pop.classList.contains('open')); });
  document.addEventListener('click', e => { if (!e.target.closest('.palette')) setOpen(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
  const feed = $('#feedBtn'); if (feed) feed.addEventListener('click', () => { window.feedCat && window.feedCat(); setOpen(false); });
  const yarnB = $('#yarnBtn'); if (yarnB) yarnB.addEventListener('click', () => { window.playYarn && window.playYarn(); setOpen(false); });
  applyPalette(PALETTES[savedPalette] ? savedPalette : 'rose', true);
})();

/* =====================================================
   NAV, PROGRESS, SCROLLSPY
===================================================== */
const links = $('#links');
$('#burger').addEventListener('click', () => links.classList.toggle('open'));
$$('a', links).forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

const progress = $('#progress'), toTop = $('#toTop');
addEventListener('scroll', () => {
  const h = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + '%';
  toTop.classList.toggle('show', scrollY > 500);
}, { passive: true });
toTop.addEventListener('click', () => scrollTo({ top: 0 }));

const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) $$('.links a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach(s => spy.observe(s));

/* Sapaan sesuai jam */
(function greeting() {
  const h = new Date().getHours();
  const w = h < 11 ? 'pagi' : h < 15 ? 'siang' : h < 18 ? 'sore' : 'malam';
  $('#greet').textContent = `Selamat ${w}, saya`;
})();

/* =====================================================
   REVEAL + COUNTER
===================================================== */
function runCounter(el) {
  const target = parseFloat(el.dataset.count);
  const dec = parseInt(el.dataset.decimals || '0', 10);
  const suffix = el.dataset.suffix || '';
  if (reduceMotion) { el.textContent = target.toFixed(dec) + suffix; return; }
  const dur = 1400, t0 = performance.now();
  (function step(now) {
    const p = Math.min((now - t0) / dur, 1);
    el.textContent = (target * (1 - Math.pow(1 - p, 3))).toFixed(dec) + suffix;
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}
const revealIO = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('visible');
  $$('[data-count]', e.target).forEach(runCounter);
  revealIO.unobserve(e.target);
}), { threshold: 0.12 });
const observeReveal = () => $$('.reveal:not(.visible)').forEach(el => revealIO.observe(el));
observeReveal();

/* Efek mengetik */
(function typing() {
  const roles = ['Fullstack Developer', 'System Analyst', 'Java & React Enthusiast', 'Problem Solver'];
  const el = $('#typed');
  if (reduceMotion) { el.textContent = roles[0]; return; }
  let r = 0, c = 0, del = false;
  (function tick() {
    const w = roles[r];
    el.textContent = w.slice(0, c);
    if (!del && c < w.length) { c++; return setTimeout(tick, 90); }
    if (!del && c === w.length) { del = true; return setTimeout(tick, 1400); }
    if (del && c > 0) { c--; return setTimeout(tick, 45); }
    del = false; r = (r + 1) % roles.length;
    setTimeout(tick, 300);
  })();
})();

/* Marquee teknologi */
(function marquee() {
  const track = $('#marqueeTrack');
  const names = SKILLS.map(s => s[0]);
  for (let k = 0; k < 2; k++) names.forEach(n => track.append(mk('span', '', n)));
})();

/* =====================================================
   PARTIKEL INTERAKTIF (canvas)
===================================================== */
(function particles() {
  const canvas = $('#bg'), ctx = canvas.getContext('2d'), hero = $('#home');
  let w, h, dots = [], mouse = { x: null, y: null }, running = true;

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = hero.clientWidth; h = hero.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(90, Math.floor((w * h) / 16000));
    dots = Array.from({ length: n }, () => ({ x: rand(0, w), y: rand(0, h), vx: rand(-.25, .25), vy: rand(-.25, .25), r: rand(1, 2.6) }));
  }
  resize();
  addEventListener('resize', resize);

  hero.addEventListener('mousemove', e => { const b = hero.getBoundingClientRect(); mouse.x = e.clientX - b.left; mouse.y = e.clientY - b.top; });
  hero.addEventListener('mouseleave', () => { mouse.x = mouse.y = null; });
  hero.addEventListener('click', e => {
    if (e.target.closest('a,button')) return;
    const b = hero.getBoundingClientRect();
    for (let i = 0; i < 8; i++) {
      const a = rand(0, Math.PI * 2), s = rand(1, 3);
      dots.push({ x: e.clientX - b.left, y: e.clientY - b.top, vx: Math.cos(a) * s, vy: Math.sin(a) * s, r: 2.2, life: 60 });
    }
  });
  new IntersectionObserver(es => { running = es[0].isIntersecting; if (running) draw(); }).observe(hero);

  function draw() {
    if (!running) return;
    const rgb = getComputedStyle(root).getPropertyValue('--particle').trim();
    ctx.clearRect(0, 0, w, h);
    for (let i = dots.length - 1; i >= 0; i--) {
      const d = dots[i];
      if (mouse.x !== null) {
        const dx = d.x - mouse.x, dy = d.y - mouse.y, dist = Math.hypot(dx, dy);
        if (dist < 140 && dist > 0) { d.x += (dx / dist) * 1.6; d.y += (dy / dist) * 1.6; }
      }
      d.x += d.vx; d.y += d.vy;
      if (d.life !== undefined) { d.life--; d.vx *= .96; d.vy *= .96; if (d.life <= 0) { dots.splice(i, 1); continue; } }
      if (d.x < 0 || d.x > w) d.vx *= -1;
      if (d.y < 0 || d.y > h) d.vy *= -1;
      ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb},.55)`; ctx.fill();
    }
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y, dist = Math.hypot(dx, dy);
        if (dist < 120) {
          ctx.strokeStyle = `rgba(${rgb},${(1 - dist / 120) * .22})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y); ctx.lineTo(dots[j].x, dots[j].y); ctx.stroke();
        }
      }
    }
    if (!reduceMotion) requestAnimationFrame(draw);
  }
  draw();
})();

/* =====================================================
   EFEK: glow, sparkle trail, tilt, magnetic
===================================================== */
window.bindTilt = () => {};
if (finePointer && !reduceMotion) {
  const glow = $('#glow');
  let lastSpark = 0;
  addEventListener('mousemove', e => {
    glow.classList.add('on');
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    const now = performance.now();
    if (now - lastSpark > 70) {
      lastSpark = now;
      const s = mk('span', 'sparkle', Math.random() > .5 ? '✦' : '✿');
      s.style.left = e.clientX + 'px'; s.style.top = e.clientY + 'px';
      s.style.setProperty('--sx', rand(-24, 24) + 'px'); s.style.setProperty('--sy', rand(12, 44) + 'px');
      if (Math.random() > .5) s.style.color = 'var(--accent2)';
      document.body.append(s);
      setTimeout(() => s.remove(), 900);
    }
  }, { passive: true });

  window.bindTilt = function (el) {
    el.addEventListener('mousemove', e => {
      const b = el.getBoundingClientRect();
      el.classList.remove('leave');
      el.style.setProperty('--ry', (((e.clientX - b.left) / b.width - .5) * 6) + 'deg');
      el.style.setProperty('--rx', (-((e.clientY - b.top) / b.height - .5) * 6) + 'deg');
    });
    el.addEventListener('mouseleave', () => {
      el.classList.add('leave');
      el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg');
    });
  };
  $$('.tilt').forEach(window.bindTilt);

  $$('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const b = btn.getBoundingClientRect();
      btn.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * .25}px, ${(e.clientY - b.top - b.height / 2) * .35}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });
}

/* Confetti dari avatar + hujan kelopak */
function burst(x, y) {
  if (reduceMotion) return;
  const chars = ['✿', '♥', '✦', '❀', '✧', '🌸'];
  for (let i = 0; i < 30; i++) {
    const s = mk('span', 'burst', chars[Math.floor(rand(0, chars.length))]);
    const a = rand(0, Math.PI * 2), r = rand(70, 190);
    s.style.left = x + 'px'; s.style.top = y + 'px';
    s.style.setProperty('--dx', Math.cos(a) * r + 'px'); s.style.setProperty('--dy', Math.sin(a) * r + 'px');
    s.style.color = i % 2 ? 'var(--accent)' : 'var(--accent2)';
    s.style.fontSize = rand(14, 26) + 'px';
    document.body.append(s);
    setTimeout(() => s.remove(), 1000);
  }
}
function rainPetals() {
  if (reduceMotion) { toast('🌸🌷🌸'); return; }
  const chars = ['🌸', '🌷', '🌺', '💮'];
  for (let i = 0; i < 32; i++) {
    const p = mk('span', 'petal', chars[Math.floor(rand(0, chars.length))]);
    const dur = rand(8, 13);
    p.style.left = rand(0, 100) + 'vw';
    p.style.fontSize = rand(16, 30) + 'px';
    p.style.animationDuration = dur + 's';
    p.style.animationDelay = rand(0, 4.5) + 's';
    p.style.setProperty('--drift', rand(-80, 80) + 'px');
    document.body.append(p);
    setTimeout(() => p.remove(), (dur + 3) * 1000);
  }
  if (window.catChase) window.catChase();   // Mochi ikut mengejar kelopak
}
let avatarClicks = 0;
$('#avatarBtn').addEventListener('click', e => {
  const b = e.currentTarget.getBoundingClientRect();
  burst(b.left + b.width / 2, b.top + b.height / 2);
  // Avatar goyang "jelly" setiap klik; klik ke-5, 10, ... memicu hujan kelopak + Mochi ikut mengejar
  const el = e.currentTarget;
  el.classList.remove('jelly'); void el.offsetWidth; el.classList.add('jelly');
  avatarClicks++;
  if (avatarClicks % 5 === 0) rainPetals();
});
(function konami() {
  const seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let i = 0;
  addEventListener('keydown', e => {
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    i = k === seq[i] ? i + 1 : (k === seq[0] ? 1 : 0);
    if (i === seq.length) { i = 0; rainPetals(); toast('Kode rahasia terbuka! 🌸'); }
  });
})();

/* =====================================================
   EXPERIENCE TABS
===================================================== */
(function experience() {
  const tabs = $('#expTabs'), panel = $('#expPanel');
  function show(i) {
    $$('.exp-tab', tabs).forEach((t, k) => { t.classList.toggle('active', k === i); t.setAttribute('aria-selected', k === i); });
    const e = EXPERIENCE[i];
    panel.replaceChildren();
    panel.append(mk('span', 'date', e.date), mk('h3', '', e.role), mk('p', 'company', e.company));
    const ul = mk('ul', 'bullets');
    e.points.forEach(p => ul.append(mk('li', '', p)));
    panel.append(ul);
    panel.classList.remove('swap'); void panel.offsetWidth; panel.classList.add('swap');
  }
  EXPERIENCE.forEach((e, i) => {
    const b = mk('button', 'exp-tab');
    b.type = 'button'; b.setAttribute('role', 'tab');
    b.append(mk('strong', '', e.tab), mk('span', '', e.sub));
    b.addEventListener('click', () => show(i));
    tabs.append(b);
  });
  show(0);
})();

/* =====================================================
   SKILLS FILTER
===================================================== */
(function skills() {
  const cats = ['Semua', ...new Set(SKILLS.map(s => s[1]))];
  const bar = $('#skillFilters'), cloud = $('#skillCloud'), count = $('#skillCount');
  let active = 'Semua';
  function render() {
    cloud.replaceChildren();
    const list = SKILLS.filter(s => active === 'Semua' || s[1] === active);
    list.forEach(([name, cat], i) => {
      const chip = mk('div', 'skill-chip', name);
      chip.style.animationDelay = (i * 25) + 'ms';
      if (active === 'Semua') chip.append(mk('small', '', cat));
      cloud.append(chip);
    });
    count.textContent = CURRENT_LANG === 'en' ? `${list.length} skills displayed` : `${list.length} skill ditampilkan`;
  }
  cats.forEach(c => {
    const b = mk('button', 'filter' + (c === active ? ' active' : ''), c);
    b.type = 'button';
    b.addEventListener('click', () => { active = c; $$('.filter', bar).forEach(x => x.classList.toggle('active', x === b)); render(); });
    bar.append(b);
  });
  render();
})();

/* =====================================================
   PROJECTS + MODAL
===================================================== */
(function projects() {
  const bar = $('#projFilters'), grid = $('#projGrid'), modal = $('#modal');
  const cats = ['Semua', ...new Set(PROJECTS.map(p => p.cat))];
  let active = 'Semua', lastFocus = null;

  function openModal(p) {
    lastFocus = document.activeElement;
    const th = $('#mThumb'); th.className = 'modal-thumb ' + p.grad; th.innerHTML = trHTML(ART[p.art]); // ART = konstanta SVG milik sendiri
    $('#mRole').textContent = tr(p.role); $('#mPeriod').textContent = tr(p.period);
    $('#mTitle').textContent = tr(p.title); $('#mDesc').textContent = tr(p.desc);
    const list = $('#mList'); list.replaceChildren();
    p.points.forEach(t => list.append(mk('li', '', t.replace(' (DRAFT)', ''))));
    const st = $('#mStack'); st.replaceChildren();
    p.stack.forEach(s => st.append(mk('span', '', s)));
    const ln = $('#mLinks'); ln.replaceChildren();
    if (p.links.length) {
      p.links.forEach(([label, href]) => { const a = mk('a', '', label + ' ↗'); a.href = href; a.target = '_blank'; a.rel = 'noopener'; ln.append(a); });
    } else {
      ln.append(mk('span', 'muted', 'Proyek internal perusahaan, kode tidak dipublikasikan.'));
    }
    modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    $('#modalClose').focus();
  }
  function closeModal() {
    modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }
  window.openProject = id => { const p = PROJECTS.find(x => x.id === id); if (p) openModal(p); };
  $('#modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });

  function render() {
    grid.replaceChildren();
    PROJECTS.filter(p => active === 'Semua' || p.cat === active).forEach((p, i) => {
      const card = mk('article', 'project tilt');
      card.style.animationDelay = (i * 80) + 'ms';
      card.tabIndex = 0;
      const thumb = mk('div', 'thumb ' + p.grad);
      thumb.innerHTML = trHTML(ART[p.art]);
      const body = mk('div', 'p-body');
      const chips = mk('div', 'chips');
      p.stack.slice(0, 4).forEach(s => chips.append(mk('span', '', s)));
      body.append(mk('h3', '', p.title), mk('p', '', p.short), chips, mk('span', 'p-more', 'Lihat detail →'));
      card.append(thumb, body);
      card.addEventListener('click', () => openModal(p));
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(p); } });
      window.bindTilt(card);
      grid.append(card);
    });
  }
  cats.forEach(c => {
    const b = mk('button', 'filter' + (c === active ? ' active' : ''), c);
    b.type = 'button';
    b.addEventListener('click', () => { active = c; $$('.filter', bar).forEach(x => x.classList.toggle('active', x === b)); render(); });
    bar.append(b);
  });
  render();
})();

/* =====================================================
   FLIP CARDS (organisasi)
===================================================== */
(function flips() {
  const grid = $('#flipGrid');
  ORGS.forEach(o => {
    const card = mk('div', 'flip reveal');
    card.tabIndex = 0; card.setAttribute('role', 'button'); card.setAttribute('aria-pressed', 'false');
    const inner = mk('div', 'flip-inner');
    const front = mk('div', 'face front');
    front.append(mk('div', 'big', o.emoji), mk('h4', '', o.title), mk('p', 'sub', o.sub), mk('p', 'tap', 'KLIK UNTUK MEMBALIK ↻'));
    const back = mk('div', 'face back');
    const ul = mk('ul', 'bullets');
    o.points.forEach(t => ul.append(mk('li', '', t)));
    back.append(mk('h4', '', o.title), ul);
    inner.append(front, back); card.append(inner);
    const toggle = () => { const on = card.classList.toggle('on'); card.setAttribute('aria-pressed', on); };
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
    grid.append(card);
  });
  observeReveal();
})();

/* =====================================================
   TERMINAL
===================================================== */
(function terminal() {
  const out = $('#termOut'), input = $('#termInput'), body = $('#termBody'), chips = $('#termChips');
  const history = []; let hi = 0;
  const print = (text, cls) => { out.append(mk('div', 'row ' + (cls || ''), text)); body.scrollTop = body.scrollHeight; };

  function run(raw) {
    const cmd = raw.trim().toLowerCase().replace(/\s+/g, ' ');
    if (!cmd) return;
    history.push(cmd); hi = history.length;
    print('$ ' + cmd, 'cmd');
    const [name, arg] = cmd.split(' ');
    if (name === 'clear') { out.replaceChildren(); return; }
    if (name === 'theme') { print('Tema diganti ke ' + (toggleTheme() === 'dark' ? 'gelap 🌙' : 'terang ☀️'), 'hl'); return; }
    if (name === 'petals') { rainPetals(); print('🌸🌷🌸', 'hl'); return; }
    if (name === 'music') {
      Promise.resolve(window.toggleMusic && window.toggleMusic())
        .then(on => print(on ? '♪ Musik diputar. Ketik "music" lagi untuk menjeda.' : '⏸ Musik dijeda.', 'hl'));
      return;
    }
    if (name === 'ide' || name === 'code' || name === 'editor' || name === 'vscode') { const on = window.toggleIDE ? window.toggleIDE(true) : false; print(on ? 'Mode editor aktif </>' : 'Mode editor dimatikan', 'hl'); return; }
    if (name === 'cv') { downloadCV(); print('Mengunduh CV… 📄', 'hl'); return; }
    if (name === 'home' || name === 'rumah') { const on = window.catHome ? window.catHome() : false; print(on ? 'Mochi pulang ke rumahnya 🏠' : 'Mochi keluar dari rumah 🥱', 'hl'); return; }
    if (name === 'yarn' || name === 'benang' || name === 'ball') {
      const on = window.playYarn ? window.playYarn() : false;
      if (on === null) print('Animasi dikurangi di perangkatmu, jadi Mochi diam saja 🧶', 'err');
      else print(on ? 'Bola benang dilempar! 🧶 Mochi mau main… (bola bisa diseret)' : 'Bola benang disimpan 🧶', 'hl');
      return;
    }
    if (name === 'feed' || name === 'makan') { window.feedCat && window.feedCat(); print('Ikan dijatuhkan! 🐟 Mochi datang…', 'hl'); return; }
    if (name === 'cat' || name === 'meow') {
      if (arg) {
        const k = window.setCatFur ? window.setCatFur(arg) : null;
        if (k) print('Bulu Mochi sekarang: ' + k + ' 🐱', 'hl'); else print('Pilihan bulu: oren, abu, hitam, palet', 'err');
        return;
      }
      const on = window.toggleCat ? window.toggleCat() : false;
      print(on ? 'Mochi datang! 🐱 Gerakkan mouse, dia akan mengikuti.' : 'Mochi pergi tidur dulu 💤', 'hl');
      return;
    }
    if (name === 'palette') {
      if (!arg) { print('Pilihan: ' + Object.keys(PALETTES).join(', ') + '. Contoh: palette lavender'); return; }
      if (applyPalette(arg, true)) print('Warna diganti ke ' + arg + ' 🎀', 'hl');
      else print('palet tidak ditemukan. Pilihan: ' + Object.keys(PALETTES).join(', '), 'err');
      return;
    }
    const fn = TERMINAL[name];
    if (fn && !arg) fn().forEach(l => print(l));
    else print(`perintah tidak dikenal: "${cmd.slice(0, 40)}". Ketik "help".`, 'err');
  }

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { run(input.value); input.value = ''; }
    else if (e.key === 'ArrowUp') { if (hi > 0) input.value = history[--hi]; e.preventDefault(); }
    else if (e.key === 'ArrowDown') { hi = Math.min(hi + 1, history.length); input.value = history[hi] || ''; e.preventDefault(); }
  });
  $('#terminal').addEventListener('click', e => { if (!e.target.closest('button')) input.focus({ preventScroll: true }); });
  ['help', 'about', 'experience', 'skills', 'projects', 'education', 'learning', 'contact', 'palette', 'petals', 'music', 'cat', 'feed', 'yarn', 'home', 'cv', 'clear'].forEach(c => {
    const b = mk('button', '', c); b.type = 'button';
    b.addEventListener('click', () => run(c));
    chips.append(b);
  });
  print('Selamat datang! Ketik "help" untuk melihat perintah.', 'hl');
})();

/* =====================================================
   COMMAND PALETTE (Ctrl/Cmd + K)
===================================================== */
(function commandPalette() {
  const wrap = $('#cmdk'), input = $('#cmdInput'), list = $('#cmdList');
  const go = id => () => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' }); };

  const ITEMS = [
    { label: 'Ke bagian Tentang',     hint: 'navigasi', run: go('about') },
    { label: 'Ke bagian Pengalaman',  hint: 'navigasi', run: go('experience') },
    { label: 'Ke bagian Skill',       hint: 'navigasi', run: go('skills') },
    { label: 'Ke bagian Proyek',      hint: 'navigasi', run: go('projects') },
    { label: 'Ke bagian Pendidikan',  hint: 'navigasi', run: go('education') },
    { label: 'Ke bagian Belajar',     hint: 'navigasi', run: go('learning') },
    { label: 'Ke bagian Kontak',      hint: 'navigasi', run: go('contact') },
    ...PROJECTS.map(p => ({ label: 'Buka proyek: ' + p.title, hint: 'proyek', run: () => { go('projects')(); setTimeout(() => window.openProject(p.id), 450); } })),
    { label: 'Ganti tema gelap / terang', hint: 'tampilan', run: () => toast(toggleTheme() === 'dark' ? 'Mode gelap 🌙' : 'Mode terang ☀️') },
    ...Object.entries(PALETTES).map(([k, p]) => ({ label: 'Warna ' + p.label, hint: 'warna', run: () => applyPalette(k) })),
    { label: 'Mode editor kode </>', hint: 'tampilan', run: () => window.toggleIDE && window.toggleIDE() },
    { label: 'Hujan kelopak bunga 🌸', hint: 'seru-seruan', run: rainPetals },
    { label: 'Putar / jeda musik 🎵', hint: 'musik', run: () => window.toggleMusic && window.toggleMusic() },
    { label: 'Panggil / sembunyikan kucing 🐱', hint: 'seru-seruan', run: () => window.toggleCat && window.toggleCat() },
    { label: 'Mochi pulang / keluar rumah 🏠', hint: 'kucing', run: () => window.catHome && window.catHome() },
    { label: 'Kasih makan Mochi 🐟', hint: 'kucing', run: () => window.feedCat && window.feedCat() },
    { label: 'Main bola benang 🧶', hint: 'kucing', run: () => window.playYarn && window.playYarn() },
    ...['oren', 'abu-abu', 'hitam', 'ikut palet'].map(k => ({ label: 'Bulu Mochi: ' + k, hint: 'kucing', run: () => window.setCatFur && window.setCatFur(k) })),
    { label: 'Download CV (PDF)', hint: 'kontak', run: downloadCV },
    { label: 'Salin email', hint: 'kontak', run: async () => { try { await navigator.clipboard.writeText('fatikhaanisatul@gmail.com'); toast('Email disalin ✔'); } catch (e) { toast('fatikhaanisatul@gmail.com'); } } },
    { label: 'Buka GitHub', hint: 'kontak', run: () => window.open('https://github.com/ansfatikhaa', '_blank', 'noopener') },
    { label: 'Buka LinkedIn', hint: 'kontak', run: () => window.open('https://www.linkedin.com/in/anisatul-fatikha/', '_blank', 'noopener') }
  ];

  let shown = [], sel = 0;
  function render() {
    const q = input.value.trim().toLowerCase();
    shown = ITEMS.filter(i => !q || (tr(i.label) + ' ' + tr(i.hint)).toLowerCase().includes(q));
    sel = Math.min(sel, Math.max(shown.length - 1, 0));
    list.replaceChildren();
    if (!shown.length) { list.append(mk('li', 'empty', 'Tidak ada hasil')); return; }
    shown.forEach((it, i) => {
      const li = mk('li', i === sel ? 'sel' : '');
      li.append(mk('span', '', it.label), mk('small', '', it.hint));
      li.addEventListener('mousemove', () => { sel = i; $$('li', list).forEach((x, k) => x.classList.toggle('sel', k === i)); });
      li.addEventListener('click', () => choose(i));
      list.append(li);
    });
    const cur = $('li.sel', list); if (cur) cur.scrollIntoView({ block: 'nearest' });
  }
  function open() { wrap.classList.add('open'); wrap.setAttribute('aria-hidden', 'false'); input.value = ''; sel = 0; render(); setTimeout(() => input.focus(), 30); }
  function close() { wrap.classList.remove('open'); wrap.setAttribute('aria-hidden', 'true'); }
  function choose(i) { const it = shown[i]; if (!it) return; close(); setTimeout(it.run, 120); }

  input.addEventListener('input', () => { sel = 0; render(); });
  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { sel = Math.min(sel + 1, shown.length - 1); render(); e.preventDefault(); }
    else if (e.key === 'ArrowUp') { sel = Math.max(sel - 1, 0); render(); e.preventDefault(); }
    else if (e.key === 'Enter') { choose(sel); }
  });
  wrap.addEventListener('click', e => { if (e.target === wrap) close(); });
  $('#cmdBtn').addEventListener('click', open);
  addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); wrap.classList.contains('open') ? close() : open(); }
    else if (e.key === 'Escape' && wrap.classList.contains('open')) close();
  });
})();

/* =====================================================
   KONTAK
===================================================== */
(function contact() {
  const EMAIL = 'fatikhaanisatul@gmail.com';

  /* FORMSPREE: buat form di https://formspree.io (gratis), lalu salin ID-nya.
     Contoh endpoint "https://formspree.io/f/xyzabcde" -> ID-nya "xyzabcde".
     Selama masih bernilai placeholder, form otomatis memakai mailto: seperti sebelumnya. */
  const FORMSPREE_ID = 'GANTI_DENGAN_ID_FORMSPREE';
  const useFormspree = /^[a-z0-9]{6,}$/i.test(FORMSPREE_ID) && !/^GANTI/i.test(FORMSPREE_ID);

  const form = $('#contactForm'), err = $('#formError'), msg = $('#cMsg'), count = $('#cCount'), sendBtn = $('#sendBtn');
  const setStatus = (text, ok) => { err.textContent = tr(text); err.classList.toggle('ok', !!ok); };

  msg.addEventListener('input', () => { count.textContent = `${msg.value.length} / 600`; });
  $('#copyEmail').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(EMAIL); toast('Email disalin ✔'); } catch (e) { toast(EMAIL); }
  });

  function viaMailto(name, mail, text) {
    location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(tr('Pesan dari portofolio: ') + name)}&body=${encodeURIComponent(text + '\n\n- ' + name + ' (' + mail + ')')}`;
    toast('Membuka aplikasi email kamu…');
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (sendBtn.disabled) return;
    const name = $('#cName').value.trim(), mail = $('#cEmail').value.trim(), text = msg.value.trim();
    if (!name || !mail || !text) { setStatus('Lengkapi semua kolom dulu ya.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) { setStatus('Format email belum benar.'); return; }
    setStatus('');

    // honeypot terisi = bot. Pura-pura sukses, tidak dikirim.
    if ($('#cGotcha').value) { form.reset(); count.textContent = '0 / 600'; setStatus('Terima kasih! Pesanmu terkirim 💌', true); return; }

    if (!useFormspree) { viaMailto(name, mail, text); return; }

    const label = sendBtn.textContent;
    sendBtn.disabled = true; sendBtn.textContent = tr('Mengirim…');
    try {
      const res = await fetch('https://formspree.io/f/' + FORMSPREE_ID, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name, email: mail, message: text, _subject: tr('Pesan dari portofolio: ') + name })
      });
      if (res.ok) {
        form.reset(); count.textContent = '0 / 600';
        setStatus('Terima kasih! Pesanmu sudah terkirim 💌', true);
        toast('Pesan terkirim ✔');
      } else {
        let detail = '';
        try { const d = await res.json(); detail = (d.errors || []).map(x => x.message).join(', '); } catch (_) {}
        setStatus(tr(detail || 'Pesan belum terkirim.') + tr(' Coba lagi, atau kirim langsung lewat email.'));
      }
    } catch (_) {
      setStatus('Koneksi bermasalah, pesan belum terkirim. Coba lagi atau salin email di samping.');
    } finally {
      sendBtn.disabled = false; sendBtn.textContent = label;
    }
  });
})();

/* =====================================================
   MUSIK: piringan hitam
   Default: lo-fi generatif lewat Web Audio (tanpa file, tanpa hak cipta).
   Mau pakai lagu sendiri? Isi MUSIC_SRC, mis. 'assets/lagu.mp3'
   (pastikan kamu punya hak memakainya).
===================================================== */
(function music() {
  const MUSIC_SRC = '';
  const TITLE = 'Sakura Lo-fi';

  const wrap = $('#vinyl'), btn = $('#vinylBtn'), label = $('#vinylLabel');
  let playing = false, audio = null;

  /* ---------- mode generatif ---------- */
  let ctx = null, master = null, bus = null, timer = null, nextTime = 0, step = 0;
  const BPM = 72, STEP = 60 / BPM / 2, SWING = 0.18;
  const mtof = m => 440 * Math.pow(2, (m - 69) / 12);
  const CHORDS = [[60, 64, 67, 71], [57, 60, 64, 67], [62, 65, 69, 72], [55, 59, 62, 65]]; // Cmaj7 Am7 Dm7 G7
  const BASS = [36, 33, 38, 31];
  const PENTA = [72, 74, 76, 79, 81, 84];

  function makeNoise(seconds, sparse) {
    const len = Math.floor(ctx.sampleRate * seconds), buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = sparse ? (Math.random() < 0.0009 ? (Math.random() * 2 - 1) : 0) : (Math.random() * 2 - 1);
    return buf;
  }

  function setup() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = 0;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3200;
    master.connect(lp); lp.connect(ctx.destination);

    bus = ctx.createGain(); bus.connect(master);                       // jalur kering
    const delay = ctx.createDelay(1); delay.delayTime.value = STEP * 3; // gema lembut
    const fb = ctx.createGain(); fb.gain.value = 0.3;
    const wet = ctx.createGain(); wet.gain.value = 0.35;
    bus.connect(delay); delay.connect(fb); fb.connect(delay); delay.connect(wet); wet.connect(master);

    // suara "kresek" piringan
    const crackle = ctx.createBufferSource(); crackle.buffer = makeNoise(3, true); crackle.loop = true;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 2500;
    const cg = ctx.createGain(); cg.gain.value = 0.35;
    crackle.connect(bp); bp.connect(cg); cg.connect(master); crackle.start();

    ctx._noise = makeNoise(1, false);
    return true;
  }

  function tone(freq, t, dur, type, vol, dest) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(dest || bus);
    o.start(t); o.stop(t + dur + 0.05);
  }
  function keys(freq, t, dur, vol) { tone(freq, t, dur, 'triangle', vol); tone(freq * 2, t, dur * 0.6, 'sine', vol * 0.35); }
  function hat(t, vol) {
    const s = ctx.createBufferSource(), g = ctx.createGain(), hp = ctx.createBiquadFilter();
    s.buffer = ctx._noise; hp.type = 'highpass'; hp.frequency.value = 7000;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
    s.connect(hp); hp.connect(g); g.connect(master); s.start(t, Math.random() * 0.5, 0.08);
  }
  function snare(t) {
    const s = ctx.createBufferSource(), g = ctx.createGain(), bp = ctx.createBiquadFilter();
    s.buffer = ctx._noise; bp.type = 'bandpass'; bp.frequency.value = 1800;
    g.gain.setValueAtTime(0.14, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
    s.connect(bp); bp.connect(g); g.connect(master); s.start(t, Math.random() * 0.5, 0.2);
  }
  function kick(t) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.setValueAtTime(130, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.12);
    g.gain.setValueAtTime(0.4, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + 0.25);
  }

  /* Kirim "denyut" ke tampilan (kebun, kunang-kunang) tepat saat bunyinya terdengar */
  function emitBeat(t, kind) {
    const ms = Math.max(0, (t - ctx.currentTime + (ctx.outputLatency || 0)) * 1000);
    setTimeout(() => document.dispatchEvent(new CustomEvent('musicbeat', { detail: { kind } })), ms);
  }

  function playStep(s, time) {
    const pos = s % 8, bar = Math.floor(s / 8) % 4, chord = CHORDS[bar];
    const t = time + (pos % 2 ? STEP * SWING : 0);
    if (pos === 0) chord.forEach((n, i) => keys(mtof(n), t + i * 0.018, STEP * 7, 0.05));
    if (pos === 3) chord.slice(1).forEach(n => keys(mtof(n), t, STEP * 1.5, 0.022));
    if (pos === 0 || pos === 4) tone(mtof(BASS[bar]), t, STEP * 3, 'sine', 0.17);
    if (pos === 6 && Math.random() < 0.4) tone(mtof(BASS[bar] + 12), t, STEP * 1.5, 'sine', 0.09);
    if (pos === 0 || pos === 4) { kick(t); emitBeat(t, 'kick'); }
    if (pos === 2 || pos === 6) { snare(t); emitBeat(t, 'snare'); }
    hat(t, pos % 2 ? 0.03 : 0.05);
    if (pos % 2 === 0 && Math.random() < 0.42) { tone(mtof(PENTA[Math.floor(Math.random() * PENTA.length)]), t, STEP * 2.6, 'sine', 0.05); emitBeat(t, 'note'); }
  }

  function scheduler() {
    while (nextTime < ctx.currentTime + 0.25) { playStep(step, nextTime); nextTime += STEP; step++; }
  }

  /* ---------- kontrol ---------- */
  function ui(on) {
    wrap.classList.toggle('playing', on);
    btn.setAttribute('aria-pressed', on);
    btn.setAttribute('aria-label', tr(on ? 'Jeda musik' : 'Putar musik'));
    label.textContent = on ? '♪ ' + TITLE + tr(' · klik untuk jeda') : tr('♪ Putar musik');
    document.dispatchEvent(new CustomEvent('musicchange', { detail: on }));   // didengar oleh Mochi
  }

  async function start() {
    if (MUSIC_SRC) {
      if (!audio) { audio = new Audio(MUSIC_SRC); audio.loop = true; audio.volume = 0.5; }
      try { await audio.play(); } catch (e) { toast('Musik tidak bisa diputar 😢'); return false; }
      return true;
    }
    if (!ctx && !setup()) { toast('Browser kamu belum mendukung audio ini 😢'); return false; }
    try { await ctx.resume(); } catch (e) {}
    nextTime = ctx.currentTime + 0.08; step = 0;
    clearInterval(timer); timer = setInterval(scheduler, 50);
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
    master.gain.linearRampToValueAtTime(0.9, ctx.currentTime + 0.8);
    return true;
  }
  function stop() {
    if (audio) audio.pause();
    if (ctx) {
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
      master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4);
      clearInterval(timer);
      setTimeout(() => { if (!playing && ctx) ctx.suspend(); }, 500);
    }
  }

  async function toggle() {
    if (!playing) {
      playing = await start();
      if (playing) toast('Lo-fi diputar 🎵 klik piringan lagi untuk jeda');
    } else { playing = false; stop(); }
    ui(playing);
    return playing;
  }
  window.toggleMusic = toggle;
  btn.addEventListener('click', toggle);
  ui(false);
})();

/* =====================================================
   KEBUN MENARI: saat musik diputar, rumput & bunga bergoyang sesuai tempo (72 BPM),
   kebun "memantul" di setiap ketukan kick, dan kunang-kunang kecil berkedip di setiap
   snare / nada melodi. Murni hiasan; mati total jika animasi dikurangi.
===================================================== */
(function gardenDance() {
  if (reduceMotion) return;
  const box = mk('div', 'garden-flies'); box.setAttribute('aria-hidden', 'true');
  const SPOTS = [[18, 46], [52, 84], [88, 38], [124, 72], [160, 52], [196, 92], [232, 44], [268, 78], [296, 56]];
  const dots = SPOTS.map(([x, y], i) => {
    const f = mk('span', 'fly'), d = mk('i');
    f.style.left = x + 'px'; f.style.bottom = y + 'px';
    f.style.animationDuration = (4 + (i % 4) * 0.9) + 's'; f.style.animationDelay = (-i * 0.7) + 's';
    f.append(d); box.append(f); return d;
  });
  document.body.append(box);
  const svgs = $$('.garden-back svg, .garden-front svg');
  let rr = 0;
  const flash = () => dots[rr++ % dots.length].animate(
    [{ opacity: 0, transform: 'scale(.5)' }, { opacity: 1, transform: 'scale(1.3)', offset: .22 }, { opacity: 0, transform: 'scale(.8)' }],
    { duration: 950, easing: 'ease-out' });

  document.addEventListener('musicchange', e => document.body.classList.toggle('dancing', !!e.detail));
  document.addEventListener('musicbeat', e => {
    if (!document.body.classList.contains('dancing') || document.hidden) return;
    const k = e.detail.kind;
    if (k === 'kick') svgs.forEach(sv => sv.animate(
      [{ transform: 'scale(1,1)' }, { transform: 'scale(.985,1.09)', offset: .3 }, { transform: 'scale(1,1)' }],
      { duration: 340, easing: 'ease-out' }));
    else if (k === 'snare') { flash(); flash(); }
    else flash();
  });
})();

/* =====================================================
   LANGIT MALAM (mode gelap): bintang kecil berkelip + kunang-kunang
   Kanvas fixed di belakang konten. Kunang-kunang berkelip bergantian dan menjauh pelan dari kursor.
   Berhenti total di mode terang / tab tersembunyi. Animasi dikurangi = bintang diam, tanpa kunang-kunang.
===================================================== */
(function nightSky() {
  const cv = $('#night'); if (!cv) return;
  const g = cv.getContext('2d');
  const TAU = Math.PI * 2;
  let W = 0, H = 0, DPR = 1, stars = [], flies = [], running = false, last = 0, mx = -999, my = -999;
  const isDark = () => root.getAttribute('data-theme') === 'dark';

  function seed() {
    const n = Math.round(Math.min(210, Math.max(60, W * H / 9500)));
    stars = Array.from({ length: n }, () => {
      const big = Math.random() < 0.07;
      return { x: Math.random(), y: Math.random() * 0.96, r: big ? rand(1.1, 1.7) : rand(0.35, 1.05), big,
               ph: rand(0, TAU), sp: rand(0.5, 1.6), base: big ? rand(0.7, 0.95) : rand(0.25, 0.7) };
    });
    const m = reduceMotion ? 0 : Math.round(Math.min(22, Math.max(9, W / 75)));
    flies = Array.from({ length: m }, () => ({
      x: rand(0, W), y: H * (0.3 + 0.7 * Math.pow(Math.random(), 0.8)), a: rand(0, TAU), turn: 0, v: rand(9, 24),
      ph: rand(0, TAU), per: rand(2.2, 4.4), r: rand(7, 13), bob: rand(0, TAU), flash: 0
    }));
  }
  function resize() {
    DPR = Math.min(2, window.devicePixelRatio || 1);
    W = innerWidth; H = innerHeight;
    cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR);
    seed();
    if (!running) paint(performance.now() / 1000, 0);
  }

  function paint(t, dt) {
    g.setTransform(DPR, 0, 0, DPR, 0, 0);
    g.clearRect(0, 0, W, H);
    g.globalCompositeOperation = 'source-over';
    for (const s of stars) {
      const tw = reduceMotion ? 1 : 0.62 + 0.38 * Math.sin(t * s.sp + s.ph);
      const al = s.base * tw, x = s.x * W, y = s.y * H;
      g.fillStyle = `rgba(255,244,238,${al})`;
      if (s.big) {                                              // bintang besar: titik + kilau silang
        g.beginPath(); g.arc(x, y, s.r * 0.75, 0, TAU); g.fill();
        g.strokeStyle = `rgba(255,236,232,${al * 0.55})`; g.lineWidth = 0.6; g.beginPath();
        g.moveTo(x - s.r * 3.2, y); g.lineTo(x + s.r * 3.2, y); g.moveTo(x, y - s.r * 3.2); g.lineTo(x, y + s.r * 3.2); g.stroke();
      } else { g.beginPath(); g.arc(x, y, s.r, 0, TAU); g.fill(); }
    }
    g.globalCompositeOperation = 'lighter';
    for (const f of flies) {
      if (dt) {
        f.turn += (Math.random() - 0.5) * 7 * dt; f.turn *= Math.pow(0.12, dt);   // jalan acak yang halus
        f.a += f.turn * dt * 2;
        const dx = f.x - mx, dy = f.y - my, d = Math.hypot(dx, dy);
        if (d < 110) { const k = (1 - d / 110) * 70 * dt; f.x += dx / d * k; f.y += dy / d * k; }   // menjauh dari kursor
        f.x += Math.cos(f.a) * f.v * dt; f.y += Math.sin(f.a) * f.v * dt * 0.7 + Math.sin(t * 1.3 + f.bob) * 4 * dt;
        if (f.x < -20) f.x = W + 20; else if (f.x > W + 20) f.x = -20;
        if (f.y < H * 0.18) f.a += Math.sin(Math.PI / 2 - f.a) * 2.5 * dt;          // terlalu tinggi: belok turun
        if (f.y > H + 10) f.y = H * 0.4;
      }
      const c = Math.sin(t / f.per * TAU + f.ph);
      let glow = c > -0.15 ? Math.pow((c + 0.15) / 1.15, 1.6) : 0;   // menyala sebentar, padam sebentar
      if (f.flash > 0.01) { glow = Math.max(glow, f.flash); if (dt) f.flash *= Math.pow(0.05, dt); }   // kedip mengikuti musik
      if (glow < 0.02) continue;
      const R = f.r * (0.75 + 0.25 * glow);
      const gr = g.createRadialGradient(f.x, f.y, 0, f.x, f.y, R);
      gr.addColorStop(0, `rgba(240,255,150,${0.9 * glow})`); gr.addColorStop(0.18, `rgba(220,255,120,${0.5 * glow})`); gr.addColorStop(1, 'rgba(190,255,100,0)');
      g.fillStyle = gr; g.beginPath(); g.arc(f.x, f.y, R, 0, TAU); g.fill();
      g.fillStyle = `rgba(255,255,220,${glow})`; g.beginPath(); g.arc(f.x, f.y, 1.3, 0, TAU); g.fill();
    }
    g.globalCompositeOperation = 'source-over';
  }

  function frame(now) {
    if (!running) return;
    if (!isDark()) { running = false; setTimeout(() => { if (!isDark()) g.clearRect(0, 0, cv.width, cv.height); }, 1300); return; }
    requestAnimationFrame(frame);
    if (document.hidden) { last = now; return; }
    const dt = Math.min((now - last) / 1000, 0.05); last = now;
    paint(now / 1000, reduceMotion ? 0 : dt);
  }
  function start() {
    if (!isDark()) return;
    if (reduceMotion) { paint(0, 0); return; }
    if (running) return;
    running = true; last = performance.now(); requestAnimationFrame(frame);
  }
  new MutationObserver(() => { if (isDark()) { if (reduceMotion) paint(0, 0); start(); } }).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
  addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
  addEventListener('pointerleave', () => { mx = my = -999; });
  addEventListener('resize', resize);
  document.addEventListener('musicbeat', e => {
    if (e.detail.kind === 'kick' || !flies.length) return;
    for (let i = 0; i < 3; i++) flies[Math.floor(Math.random() * flies.length)].flash = 1;
  });
  resize(); start();
})();

/* =====================================================
   MOCHI 3D: renderer mini (canvas 2D, tanpa library)
   Model asli 3D: badan, kepala, kaki & ekor adalah ellipsoid yang diproyeksikan
   dengan kamera sedikit menunduk, diberi cahaya dari kiri-atas (cahaya tetap di dunia,
   jadi sorotnya ikut bergeser saat badan berputar). Putar balik = badan berputar di
   sumbu Y (pegas), kepala tetap menoleh ke pengunjung. State dibaca dari class di #cat.
===================================================== */
function createCat3D(canvas, catEl, getFace, reduce, getLook, getLamp) {
  const g = canvas.getContext('2d');
  const CW = 96, CH = 86, OX = 48, OY = 82;                 // ukuran kanvas & titik pijak (px CSS)
  const DPR = Math.min(3, Math.max(2, window.devicePixelRatio || 1));
  canvas.width = CW * DPR; canvas.height = CH * DPR;
  const TAU = Math.PI * 2, PITCH = 0.3, CAM = 1;

  /* ---------- matematika kecil ---------- */
  const mul = (a, b) => { const r = new Array(9); for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) r[i * 3 + j] = a[i * 3] * b[j] + a[i * 3 + 1] * b[3 + j] + a[i * 3 + 2] * b[6 + j]; return r; };
  const rotX = t => { const c = Math.cos(t), s = Math.sin(t); return [1, 0, 0, 0, c, -s, 0, s, c]; };
  const rotY = t => { const c = Math.cos(t), s = Math.sin(t); return [c, 0, s, 0, 1, 0, -s, 0, c]; };
  const rotZ = t => { const c = Math.cos(t), s = Math.sin(t); return [c, -s, 0, s, c, 0, 0, 0, 1]; };
  const ap = (m, v) => [m[0] * v[0] + m[1] * v[1] + m[2] * v[2], m[3] * v[0] + m[4] * v[1] + m[5] * v[2], m[6] * v[0] + m[7] * v[1] + m[8] * v[2]];
  const tp = m => [m[0], m[3], m[6], m[1], m[4], m[7], m[2], m[5], m[8]];
  const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const sc = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const norm = a => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
  const clamp = (v, a, b) => Math.min(Math.max(v, a), b);
  const lp = (a, b, k) => a + (b - a) * k;
  const lp3 = (a, b, k) => [lp(a[0], b[0], k), lp(a[1], b[1], k), lp(a[2], b[2], k)];
  // basis rotasi yang sumbu-Y-nya searah d (untuk ellipsoid yang memanjang sepanjang ruas kaki)
  const basisY = d => {
    const y = norm(d), ref = Math.abs(y[2]) > 0.9 ? [1, 0, 0] : [0, 0, 1];
    const x = norm(cross(y, ref)), z = cross(x, y);
    return [x[0], y[0], z[0], x[1], y[1], z[1], x[2], y[2], z[2]];
  };
  const V = rotX(PITCH);                                    // dunia -> layar (x, y-atas, kedalaman ke arah penonton)
  const LIGHT0 = norm([-0.38, 0.86, 0.5]);
  let LIGHT = LIGHT0;                                        // berubah condong ke lampu rumah saat Mochi disorot

  /* ---------- warna (dibaca dari variabel CSS, berubah halus) ---------- */
  const pc = document.createElement('canvas'); pc.width = pc.height = 1;
  const pg = pc.getContext('2d', { willReadFrequently: true });
  const parse = (str, fb) => {
    if (!str) return fb;
    try { pg.clearRect(0, 0, 1, 1); pg.fillStyle = '#000'; pg.fillStyle = str; pg.fillRect(0, 0, 1, 1); const d = pg.getImageData(0, 0, 1, 1).data; return [d[0], d[1], d[2]]; }
    catch (e) { return fb; }
  };
  const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
  const rgb = (c, a = 1) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`;
  const WHITE = [255, 255, 255], PLUM = [58, 34, 48];
  const KEYS = { fur: ['--fur', [246, 194, 139]], fur2: ['--fur2', [233, 177, 120]], stripe: ['--stripe', [227, 157, 94]], eye: ['--eye', [58, 34, 48]], ink: ['--ink', [58, 34, 48]], whisk: ['--whisk', [184, 138, 99]], accent: ['--accent', [212, 71, 124]] };
  const tgt = {}, cur = {};
  let colorsReady = false;
  function readColors() {
    const cs = getComputedStyle(catEl);
    for (const k in KEYS) tgt[k] = parse(cs.getPropertyValue(KEYS[k][0]).trim(), KEYS[k][1]);
    if (!colorsReady) { for (const k in tgt) cur[k] = tgt[k].slice(); colorsReady = true; }
  }
  readColors();
  new MutationObserver(readColors).observe(catEl, { attributes: true, attributeFilter: ['data-fur'] });
  new MutationObserver(readColors).observe(document.documentElement, { attributes: true, attributeFilter: ['data-palette', 'data-theme'] });
  const pal = (base, mid, dk = 0) => {
    const b = mix(base, PLUM, dk), m = mix(mid, PLUM, dk);
    return { l: mix(b, WHITE, 0.42), b, m, d: mix(m, PLUM, 0.34) };
  };

  /* ---------- gambar satu ellipsoid berlight ---------- */
  function ell(cw, Rw, r, P, o) {
    o = o || {};
    const W = mul(V, Rw);
    let s00 = 0, s01 = 0, s11 = 0;
    for (let k = 0; k < 3; k++) { const q = r[k] * r[k]; s00 += W[k] * W[k] * q; s01 += W[k] * W[3 + k] * q; s11 += W[3 + k] * W[3 + k] * q; }
    const a = s00, b = -s01, c = s11;                         // kovarians di koordinat kanvas (y dibalik)
    const md = (a + c) / 2, df = Math.sqrt(((a - c) / 2) ** 2 + b * b);
    const ra = Math.sqrt(Math.max(md + df, 0.04)), rb = Math.sqrt(Math.max(md - df, 0.04));
    const th = 0.5 * Math.atan2(2 * b, a - c);
    const cs = ap(V, cw), cx = OX + cs[0], cy = OY - cs[1];
    if (o.shadow) {
      g.save(); g.translate(cx, cy); g.rotate(th); g.scale(ra, rb);
      const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
      gr.addColorStop(0, `rgba(50,20,35,${0.34 * (o.alpha || 1)})`); gr.addColorStop(0.55, `rgba(50,20,35,${0.2 * (o.alpha || 1)})`); gr.addColorStop(1, 'rgba(50,20,35,0)');
      g.fillStyle = gr; g.beginPath(); g.arc(0, 0, 1, 0, TAU); g.fill(); g.restore();
      return;
    }
    // titik permukaan yang menghadap cahaya -> pusat sorot di ruang unit
    const Rt = tp(Rw), Ll = ap(Rt, LIGHT), q = [r[0] * r[0] * Ll[0], r[1] * r[1] * Ll[1], r[2] * r[2] * Ll[2]];
    const den = Math.sqrt(Math.max(dot(Ll, q), 1e-6));
    const so = ap(V, ap(Rw, sc(q, 1 / den)));
    const ox = so[0], oy = -so[1], ct = Math.cos(th), st = Math.sin(th);
    let hx = (ox * ct + oy * st) / ra, hy = (-ox * st + oy * ct) / rb;
    const hl = Math.hypot(hx, hy); if (hl > 0.78) { hx *= 0.78 / hl; hy *= 0.78 / hl; }
    g.save(); g.translate(cx, cy); g.rotate(th); g.scale(ra, rb);
    const gr = g.createRadialGradient(hx, hy, 0, hx, hy, 1.95);
    gr.addColorStop(0, rgb(P.l)); gr.addColorStop(0.2, rgb(P.b)); gr.addColorStop(0.6, rgb(P.m)); gr.addColorStop(1, rgb(P.d));
    g.fillStyle = gr; g.beginPath(); g.arc(0, 0, 1, 0, TAU); g.fill(); g.restore();
    if (!o.noLine) { g.beginPath(); g.ellipse(cx, cy, ra, rb, th, 0, TAU); g.lineWidth = 0.6; g.strokeStyle = rgb(mix(P.d, PLUM, 0.5), 0.2); g.stroke(); }
  }

  /* ---------- poligon 3D (telinga) ---------- */
  function poly(pts, col, a, line) {
    g.beginPath();
    pts.forEach((p, i) => { const s = ap(V, p); i ? g.lineTo(OX + s[0], OY - s[1]) : g.moveTo(OX + s[0], OY - s[1]); });
    g.closePath(); g.fillStyle = rgb(col, a === undefined ? 1 : a); g.fill();
    if (line !== false) { g.lineWidth = 0.7; g.lineJoin = 'round'; g.strokeStyle = rgb(col, a === undefined ? 1 : a); g.stroke(); }
  }

  /* ---------- keadaan animasi ---------- */
  let last = performance.now(), yaw = getFace() > 0 ? 0 : -Math.PI, yawT = yaw, yv = 0, pendFace = getFace(), pendT = 0;
  let legAmp = 0, gait = 0, sleepAmt = 0, nod = 0, nodX = 0, nodY = 0, tailPh = 0, tailT = 1.8, lift = 0;
  // duduk (sitAmt), menjilat kaki depan (lickAmt, lickPh = fase jilatan), arah pandang mata (gazeX/Y: -1..1, layar)
  let sitAmt = 0, lickAmt = 0, lickPh = 0, gazeX = 0, gazeY = 0, lickSide = 1;
  let lampK = 0, nightAmt = 0, lampUx = 1, lampUy = 0;      // sorotan lampu (0..1), mode malam, arah lampu di layar

  function step(dt, t) {
    const cl = catEl.classList;
    const walk = cl.contains('walk'), run = cl.contains('run'), sleep = cl.contains('sleep');
    const groove = cl.contains('groove'), sniff = cl.contains('sniff'), chomp = cl.contains('chomp');
    const sit = cl.contains('sit') && !walk && !run && !sleep && !sniff && !chomp;
    const lick = sit && cl.contains('lick');
    sitAmt += ((sit ? 1 : 0) - sitAmt) * (reduce ? 1 : Math.min(1, dt * (sit ? 6.5 : 11)));
    lickAmt += ((lick ? 1 : 0) - lickAmt) * (reduce ? 1 : Math.min(1, dt * 7));
    if (lickAmt > 0.01 && !reduce) lickPh += dt * TAU / 0.46;
    // arah pandang: vektor layar dari kepala ke kursor, diperkecil kalau kursor sangat dekat
    const L = getLook ? getLook() : null;
    let gx = 0, gy = 0;
    if (L && L.on && !sleep) { const m = Math.hypot(L.x, L.y) || 1, kk = Math.min(1, m / 120); gx = L.x / m * kk; gy = L.y / m * kk; }
    const LP = getLamp ? getLamp() : null;
    lampK += ((LP ? LP.k : 0) - lampK) * Math.min(1, dt * 6);
    nightAmt += ((LP && LP.night ? 1 : 0) - nightAmt) * Math.min(1, dt * 3);
    if (LP && LP.k > 0) { lampUx = LP.ux; lampUy = LP.uy; }
    const kg = Math.min(1, dt * 16);
    gazeX += (gx - gazeX) * kg; gazeY += (gy - gazeY) * kg;
    // putar balik: pegas (dengan jeda kecil agar tidak goyang saat kursor melintas tepat di atas kucing)
    const f = getFace();
    if (f !== pendFace) { pendFace = f; pendT = 0; } else pendT += dt;
    if (pendT > 0.09) yawT = f > 0 ? 0 : -Math.PI;
    if (reduce) { yaw = yawT; yv = 0; }
    else { const K = 80, C = 2 * Math.sqrt(K) * 0.8; yv += ((yawT - yaw) * K - yv * C) * dt; yaw += yv * dt; }
    const k = Math.min(1, dt * 14);
    legAmp += ((reduce ? 0 : (walk || run) ? 0.46 : 0) - legAmp) * k;
    if (legAmp > 0.01) gait += dt * TAU / (run ? 0.22 : 0.36);
    sleepAmt += ((sleep ? 1 : 0) - sleepAmt) * Math.min(1, dt * 9);
    lift = legAmp / 0.46 * 1.7 * Math.abs(Math.sin(gait));
    // kepala: menunduk (sniff/chomp/tidur) atau mengangguk (musik)
    let nt = 0, tx = 0, ty = 0;
    if (sleep) nt = 10 * Math.PI / 180;
    else if (sniff) { nt = 15 * Math.PI / 180; tx = 3; ty = -4; }
    else if (chomp) { const m = 0.5 - 0.5 * Math.cos(t * TAU / 0.26); nt = (15 - 12 * m) * Math.PI / 180; tx = 3 - m; ty = -(4 - 3 * m); }
    else if (groove && !reduce) nt = (3 - 5 * Math.cos(t * TAU / 0.833)) * Math.PI / 180;
    if (!sleep && !sniff && !chomp) {
      nt += gazeY * 0.17 * (1 - lickAmt);                    // menengadah / menunduk mengikuti kursor
      if (lickAmt > 0.01) { nt += lickAmt * (0.5 + 0.05 * Math.sin(lickPh)); tx += lickAmt * 2.5; ty -= lickAmt * 5; }   // menunduk ke kaki
    }
    const kn = Math.min(1, dt * (chomp ? 30 : 12));
    nod += (nt - nod) * kn; nodX += (tx - nodX) * kn; nodY += (ty - nodY) * kn;
    const tt = sleep ? 4.5 : (walk || run) ? 0.5 : groove ? 0.6 : 1.8;
    tailT += (tt - tailT) * Math.min(1, dt * 4);
    if (!reduce) tailPh += dt * TAU / tailT;
    for (const key in cur) for (let i = 0; i < 3; i++) cur[key][i] += (tgt[key][i] - cur[key][i]) * Math.min(1, dt * 8);
  }

  /* ---------- gambar kucing ---------- */
  const BODY_C = [-2, 16, 0], BODY_R = [20, 12, 11];
  const HEAD_R = [13, 12, 12], NECK = [13, 22, 0], HEAD_OFF = [7, 8, 0];
  // pose duduk: badan miring (dada naik, pantat turun), paha & telapak belakang menapak, kaki depan lurus
  const SIT_C = [-6, 15.4, 0], SIT_R = [17.5, 11.5, 11], SIT_TILT = 0.94, NECK_SIT = [1.5, 30, 0];
  const TAIL_STAND = [[-19, 14, 0], [-32, 14, 0], [-34, 30, 0], [-26, 36, 0]];
  const TAIL_SIT = [[-17, 5, 0], [-30, 1.5, 0], [-38, 5, 0], [-35, 13, 0]];

  function draw(t) {
    g.setTransform(DPR, 0, 0, DPR, 0, 0);
    g.clearRect(0, 0, CW, CH);
    const sleepK = sleepAmt, awake = 1 - sleepK, s = sitAmt, ls = lickAmt;
    const Rb = rotY(yaw), cy = Math.cos(yaw);
    const furC = cur.fur, fur2C = cur.fur2;
    const P = pal(furC, fur2C), Pfar = pal(furC, fur2C, 0.16);
    const pawBase = mix(furC, [255, 250, 244], 0.62), pawMid = mix(fur2C, [250, 236, 226], 0.45);
    const Ppaw = pal(pawBase, pawMid), PpawFar = pal(pawBase, pawMid, 0.16);
    const items = [];
    const world = p => ap(Rb, p);
    const unworld = w => ap(tp(Rb), w);
    const depthOf = w => ap(V, w)[2];
    const breath = reduce ? 0 : Math.sin(t * 2.4) * 0.014;
    const liftV = [0, lift, 0];
    // cahaya condong ke arah lampu rumah (x layar, y atas, z ke penonton)
    LIGHT = lampK > 0.01 ? norm(lp3(LIGHT0, norm([lampUx, 0.3 - lampUy * 0.7, 0.55]), lampK * 0.85)) : LIGHT0;

    /* kepala dihitung lebih dulu: kaki yang menjilat perlu tahu di mana mulutnya */
    const bias = 0.42 * cy;                                  // wajah condong ke arah jalan
    const hYaw = -yaw + bias;
    const Rnod = rotZ(-nod), Rh = mul(Rb, mul(Rnod, rotY(hYaw)));
    const neck = lp3(NECK, NECK_SIT, s);
    const hLocal = add(add(neck, ap(Rnod, add(HEAD_OFF, [nodX, nodY, 0]))), add(liftV, [0, breath * 2, 0]));
    const hc = world(hLocal);
    const headD = depthOf(hc) + 1;

    /* bayangan di tanah (ikut berputar) */
    ell(world([lp(-2, -4, s), 0, 0]), Rb, [lp(23, 19.5, s), 0.2, lp(12.5, 14, s)], null, { shadow: true, alpha: 1 - sleepK * 0.15 });

    /* badan: miring saat duduk */
    const bodyC = add(lp3(BODY_C, SIT_C, s), liftV);
    const bodyR = [lp(BODY_R[0], SIT_R[0], s), lp(BODY_R[1], SIT_R[1], s), lp(BODY_R[2], SIT_R[2], s)];
    const Rbz = rotZ(SIT_TILT * s), Rbody = mul(Rb, Rbz);
    const bodyD = depthOf(world(bodyC));

    /* ekor: rantai bola mengikuti kurva, bergoyang di sisi & atas-bawah. Duduk: ekor tergeletak di tanah */
    const TP = TAIL_STAND.map((p, i) => lp3(p, TAIL_SIT[i], s));
    const bez = k => { const u = 1 - k; return [0, 1].map(i => u * u * u * TP[0][i] + 3 * u * u * k * TP[1][i] + 3 * u * k * k * TP[2][i] + k * k * k * TP[3][i]); };
    const tailAmp = reduce ? 0 : 1;
    const az = 0.16 * Math.sin(tailPh) * tailAmp * (1 - s * 0.6), Rtz = rotZ(az);
    const N = 15;
    for (let i = 0; i < N; i++) {
      const k = i / (N - 1), b2 = bez(k);
      let p = [b2[0] - TP[0][0], b2[1] - TP[0][1], 0];
      p = add(ap(Rtz, p), TP[0]);
      p[2] += 8 * k * Math.sin(tailPh - 2.4 * k) * tailAmp * (1 - s * 0.55);
      const loc = add(p, liftV), w = world(loc), tip = i >= N - 3;
      const Pt = tip ? pal(mix(cur.stripe, WHITE, 0.15), cur.stripe) : P;
      const d = i < 4 ? Math.min(depthOf(w), bodyD - 0.5) : depthOf(w);
      items.push({ d, f: () => ell(w, Rb, [3.1 - 0.4 * k, 3.1 - 0.4 * k, 3.1 - 0.4 * k], Pt, { noLine: true }) });
    }

    /* kaki belakang (berjalan): menyusut saat duduk, diganti paha + telapak */
    const legVis = awake;
    const rearVis = legVis * (1 - s);
    if (rearVis > 0.04) {
      [[-10, 5.2, 0, true], [-10, -5.2, Math.PI, false]].forEach(([lx, lz, ph, near]) => {
        const ang = legAmp * Math.sin(gait + ph), Rz = rotZ(ang), Rl = mul(Rb, Rz);
        const hip = [lx, 11.5 + lift * 0.5, lz], dirv = ap(Rz, [0, -1, 0]);
        const cL = add(hip, sc(dirv, 6.2 * rearVis)), cP = add(hip, add(sc(dirv, 11 * rearVis), ap(Rz, [0.9, 0, 0])));
        const cw = world(cL), pw = world(cP);
        items.push({ d: depthOf(cw), f: () => {
          ell(cw, Rl, [3.3 * rearVis, 6.6 * rearVis, 3.3 * rearVis], near ? P : Pfar);
          ell(pw, Rl, [4.1 * rearVis, 2.7 * rearVis, 4 * rearVis], near ? Ppaw : PpawFar);
        } });
      });
    }
    const sitVis = s * awake;
    if (sitVis > 0.04) {
      [1, -1].forEach(sd => {
        const nearW = sd * cy >= 0;
        const hc2 = world([-9.5, 8.6, sd * 8.2]), fc = world([3.5, 2.4, sd * 7.6]);
        items.push({ d: depthOf(hc2), f: () => ell(hc2, Rb, [10.2 * sitVis, 8.8 * sitVis, 5.7 * sitVis], nearW ? P : Pfar) });
        items.push({ d: depthOf(fc), f: () => ell(fc, Rb, [6 * sitVis, 2.5 * sitVis, 3.5 * sitVis], nearW ? Ppaw : PpawFar) });
      });
    }

    /* kaki depan: dua ruas (pangkal -> siku -> telapak). Berjalan = ayun, duduk = lurus, menjilat = satu kaki terangkat ke mulut */
    if (ls < 0.02) lickSide = cy >= 0 ? 1 : -1;
    const pawSpot = (sdz) => {                                  // titik telapak di depan dagu (ruang dunia -> lokal)
      const u = lickSide * 3.2, bob = Math.sin(lickPh + 1.2);
      const w = add(add(hc, ap(Rh, [u, -6.6, 11.8])), [0.5 * bob, 0.9 * bob, 0]);
      return unworld(w);
    };
    if (legVis > 0.04) {
      [[10, 5.2, Math.PI, true], [10, -5.2, 0, false]].forEach(([lx, lz, ph, near]) => {
        const ang = legAmp * Math.sin(gait + ph), Rz = rotZ(ang);
        const hipW = [lx, 11.5 + lift * 0.5, lz], dirv = ap(Rz, [0, -1, 0]);
        const pawW = add(hipW, add(sc(dirv, 11 * legVis), ap(Rz, [0.9, 0, 0])));
        const hipS = [7.2, 20.5, lz], pawS = [9.6, 2.7, lz];
        const sdz = lz > 0 ? 1 : -1, isLick = sdz === lickSide && ls > 0.001;
        const S = lp3(hipW, hipS, s);
        let Pw = lp3(pawW, pawS, s);
        if (isLick) Pw = lp3(Pw, pawSpot(sdz), ls);
        const nearV = sdz * cy >= 0;
        const Pl = nearV ? P : Pfar, Pp = nearV ? Ppaw : PpawFar;
        const dv = sub(Pw, S), len = Math.hypot(dv[0], dv[1], dv[2]) || 1;
        let E = null;
        if (isLick && ls > 0.02) {                               // siku menekuk ke bawah-belakang
          const m = lp3(S, Pw, 0.5), l1 = 10.2, h = Math.sqrt(Math.max(0, l1 * l1 - (len / 2) ** 2));
          let bend = [-0.35, -1, 0.25 * sdz];
          bend = sub(bend, sc(norm(dv), dot(bend, norm(dv)))); bend = norm(bend);
          E = add(m, sc(bend, h * ls));
        }
        const natD = depthOf(world(lp3(S, Pw, 0.5)));
        const d = isLick && ls > 0.05 ? Math.max(natD, headD + 1.5) : natD;
        const seg = (A, B, r, pal2, noLine) => {
          const dd = sub(B, A), L2 = Math.hypot(dd[0], dd[1], dd[2]) || 1, cw = world(lp3(A, B, 0.5));
          ell(cw, mul(Rb, basisY(dd)), [r * legVis, (L2 / 2 + 1.2) * legVis, r * legVis], pal2, { noLine });
        };
        items.push({ d, f: () => {
          if (E) { seg(S, E, 3.4, Pl, true); seg(E, Pw, 3.2, Pl, false); }
          else seg(S, Pw, 3.3, Pl, false);
          const last = E ? sub(Pw, E) : dv;
          ell(world(Pw), mul(Rb, basisY(last)), [4.1 * legVis, 2.7 * legVis, 4 * legVis], Pp);
        } });
      });
    }

    /* badan + belang */
    items.push({ d: bodyD, f: () => {
      ell(world(bodyC), Rbody, [bodyR[0], bodyR[1] * (1 + breath), bodyR[2]], P);
      g.lineCap = 'round'; g.lineJoin = 'round';
      [-14, -6, 2].forEach(x0 => {
        const dx = x0 - BODY_C[0], kk = Math.sqrt(Math.max(0, 1 - (dx / bodyR[0]) ** 2));
        let prev = null;
        for (let i = 0; i <= 14; i++) {
          const psi = (-80 + i * (160 / 14)) * Math.PI / 180;
          const rel = [dx, kk * bodyR[1] * Math.cos(psi), kk * bodyR[2] * Math.sin(psi)];
          const loc = add(bodyC, ap(Rbz, rel));
          const nl = ap(Rbz, norm([dx / (bodyR[0] ** 2), rel[1] / (bodyR[1] ** 2), rel[2] / (bodyR[2] ** 2)]));
          const face = ap(V, ap(Rb, nl))[2], sp = ap(V, world(loc));
          const pt = { x: OX + sp[0], y: OY - sp[1], f: face };
          if (prev && pt.f > 0.04 && prev.f > 0.04) {
            const w = (3.1 - 1.1 * Math.abs(psi) / 1.4) * (0.45 + 0.55 * Math.min(1, (pt.f + prev.f) / 1.2));
            g.beginPath(); g.moveTo(prev.x, prev.y); g.lineTo(pt.x, pt.y);
            g.lineWidth = Math.max(w, 0.6); g.strokeStyle = rgb(mix(cur.stripe, PLUM, 0.06), 0.92); g.stroke();
          }
          prev = pt;
        }
      });
    } });

    items.push({ d: headD, f: () => drawHead(hc, Rh, t, P, sleepK) });

    items.sort((p, q) => p.d - q.d);
    items.forEach(it => it.f());

    /* malam: Mochi sedikit redup & kebiruan, tapi hangat bersinar saat disorot lampu (hanya mengenai piksel kucing) */
    if (nightAmt > 0.01 || lampK > 0.01) {
      g.save(); g.globalCompositeOperation = 'source-atop';
      const dim = 0.24 * nightAmt * (1 - lampK);
      if (dim > 0.005) { g.fillStyle = `rgba(28,22,72,${dim})`; g.fillRect(0, 0, CW, CH); }
      if (lampK > 0.01) {
        const gx = OX + lampUx * 18, gy = OY - 28 + lampUy * 14;
        const gr = g.createRadialGradient(gx, gy, 3, gx, gy, 46);
        gr.addColorStop(0, `rgba(255,226,150,${0.42 * lampK})`); gr.addColorStop(1, `rgba(255,196,110,${0.12 * lampK})`);
        g.fillStyle = gr; g.fillRect(0, 0, CW, CH);
      }
      g.restore();
    }
  }

  function surf(Rh, hc, u, v, lift2) {
    const rx = HEAD_R[0], ry = HEAD_R[1], rz = HEAD_R[2];
    const w = 1 - (u / rx) ** 2 - (v / ry) ** 2;
    if (w <= 0.001) return null;
    const sw = Math.sqrt(w), z = rz * sw + (lift2 || 0);
    const p = [u, v, z];
    const t1 = [1, 0, -rz * (u / (rx * rx)) / sw], t2 = [0, 1, -rz * (v / (ry * ry)) / sw];
    const n = norm([u / (rx * rx), v / (ry * ry), rz * sw / (rz * rz)]);
    const vis = ap(V, ap(Rh, n))[2];
    const sp = ap(V, add(hc, ap(Rh, p)));
    const s1 = ap(V, ap(Rh, t1)), s2 = ap(V, ap(Rh, t2));
    return { vis, m: [s1[0], -s1[1], s2[0], -s2[1], OX + sp[0], OY - sp[1]] };
  }
  function decal(Rh, hc, u, v, fn, lift2) {
    const s = surf(Rh, hc, u, v, lift2);
    if (!s || s.vis < 0.05) return;
    g.save(); g.globalAlpha = clamp(s.vis * 3, 0, 1); g.transform(...s.m); fn(s.m); g.restore();
  }

  function drawHead(hc, Rh, t, P, sleepK) {
    const loc2w = p => add(hc, ap(Rh, p));
    /* telinga: limas kecil, sisi yang menghadap kamera saja */
    [-1, 1].forEach(sd => {
      const B = [[sd * 12, 6.5, 1.5], [sd * 1.8, 11.8, 2], [sd * 7.5, 9, -6.5]].map(loc2w);
      const T = loc2w([sd * 10.5, 21.5, -1]);
      const cen = loc2w([sd * 7, 12, -1.5]);
      [[0, 1], [1, 2], [2, 0]].forEach(([i, j], fi) => {
        const A = B[i], Bp = B[j];
        let nrm = norm(cross(sub(A, T), sub(Bp, T)));
        const mid = sc(add(add(A, Bp), T), 1 / 3);
        if (dot(nrm, sub(mid, cen)) < 0) nrm = sc(nrm, -1);
        if (ap(V, nrm)[2] < 0) return;
        const lam = clamp(dot(nrm, LIGHT) * 0.75 + 0.25, 0, 1);
        const col = lam > 0.5 ? mix(cur.fur, WHITE, (lam - 0.5) * 0.5) : mix(mix(cur.fur2, PLUM, 0.2), cur.fur, lam * 2);
        poly([A, Bp, T], col, 1);
        if (fi === 0) {                                      // bagian dalam telinga (pink)
          const ce = mid, k = 0.58, ip = [A, Bp, T].map(p => add(ce, sc(sub(p, ce), k)));
          const pk = mix([255, 179, 207], PLUM, (1 - lam) * 0.18);
          poly(ip, pk, 1, false);
        }
      });
    });

    /* kalung: cincin penuh yang melingkar di bagian bawah kepala/leher.
       Separuh belakang digambar sebelum kepala (tertutup), separuh depan sesudahnya. */
    const CY = -10.6, kr = Math.sqrt(1 - (CY / HEAD_R[1]) ** 2), CRX = HEAD_R[0] * kr + 0.9, CRZ = HEAD_R[2] * kr + 0.9;
    function drawCollar(front) {
      let prev = null;
      for (let i = 0; i <= 48; i++) {
        const a = i * TAU / 48;
        const p = [CRX * Math.sin(a), CY, CRZ * Math.cos(a)];
        const vis = ap(V, ap(Rh, norm([Math.sin(a), -0.2, Math.cos(a)])))[2], s = ap(V, loc2w(p));
        const pt = { x: OX + s[0], y: OY - s[1], v: vis };
        const ok = front ? (pt.v > -0.02 && prev && prev.v > -0.02) : (pt.v <= 0.02 && prev && prev.v <= 0.02);
        if (ok) {
          g.beginPath(); g.moveTo(prev.x, prev.y); g.lineTo(pt.x, pt.y);
          g.lineWidth = 2.7; g.lineCap = 'round';
          g.strokeStyle = rgb(mix(cur.accent, PLUM, front ? 0.1 : 0.35)); g.stroke();
          if (front) { g.beginPath(); g.moveTo(prev.x, prev.y - 0.6); g.lineTo(pt.x, pt.y - 0.6); g.lineWidth = 0.9; g.strokeStyle = rgb(mix(cur.accent, WHITE, 0.4), 0.5); g.stroke(); }
        }
        prev = pt;
      }
      if (front && ap(V, ap(Rh, [0, -0.2, 1]))[2] > 0.05) {          // lonceng di tengah depan
        const s = ap(V, loc2w([0, CY - 1.5, CRZ + 0.8])), bx = OX + s[0], by = OY - s[1];
        const gr = g.createRadialGradient(bx - 0.7, by - 0.8, 0.1, bx, by, 2.3);
        gr.addColorStop(0, '#fff4b8'); gr.addColorStop(0.5, '#ffd166'); gr.addColorStop(1, '#d9981c');
        g.beginPath(); g.arc(bx, by, 2.1, 0, TAU); g.fillStyle = gr; g.fill();
        g.lineWidth = 0.5; g.strokeStyle = '#c28618'; g.stroke();
      }
    }
    drawCollar(false);
    ell(hc, Rh, HEAD_R, P);

    /* belang dahi */
    [[-2.6, 7.2, 3.2], [0, 7.8, 4.2], [2.6, 7.2, 3.2]].forEach(([u, v, len]) => decal(Rh, hc, u, v, () => {
      g.beginPath(); g.moveTo(0, 0); g.lineTo(0, -len); g.lineWidth = 1.3; g.lineCap = 'round'; g.strokeStyle = rgb(cur.stripe, 0.85); g.stroke();
    }));

    /* pipi merona */
    [-1, 1].forEach(sd => decal(Rh, hc, sd * 8.3, -3.8, () => {
      g.beginPath(); g.ellipse(0, 0, 2.9, 2.3, 0, 0, TAU); g.fillStyle = 'rgba(255,150,192,.5)'; g.fill();
    }));

    /* mata: pupil mengikuti kursor, berkedip. Tidur = garis melengkung, menjilat = garis melengkung ceria */
    const pp = (t % 4.6) / 4.6;
    const blink = reduce ? 1 : pp < 0.92 ? 1 : pp < 0.95 ? 1 - (pp - 0.92) / 0.03 * 0.9 : 0.1 + (pp - 0.95) / 0.05 * 0.9;
    // iris: bulu gelap -> hijau supaya gerak pupil terlihat; mata kuning (kucing hitam) dibiarkan
    const lumE = cur.eye[0] * 0.3 + cur.eye[1] * 0.59 + cur.eye[2] * 0.11;
    const iris = lumE < 90 ? [104, 184, 126] : cur.eye;
    [-1, 1].forEach(sd => decal(Rh, hc, sd * 5.1, 1.2, m => {
      if (sleepK > 0.5) {
        g.beginPath(); g.moveTo(-2.6, 0.4); g.quadraticCurveTo(0, -2.8, 2.6, 0.4);
        g.lineWidth = 1.6; g.lineCap = 'round'; g.strokeStyle = rgb(cur.ink); g.stroke(); return;
      }
      if (lickAmt > 0.55) {                                    // ^ ^ (keenakan menjilat)
        g.beginPath(); g.moveTo(-2.6, -0.7); g.quadraticCurveTo(0, 3.3, 2.6, -0.7);
        g.lineWidth = 1.6; g.lineCap = 'round'; g.strokeStyle = rgb(cur.ink); g.stroke(); return;
      }
      // arah pandang layar -> koordinat mata (invers matriks decal), dibatasi di dalam bola mata
      let px = 0, py = 0;
      const det = m[0] * m[3] - m[1] * m[2];
      if (Math.abs(det) > 0.1) {
        const sx = gazeX * 1.15, sy = gazeY * 0.95;
        px = (m[3] * sx - m[2] * sy) / det; py = (-m[1] * sx + m[0] * sy) / det;
        const q = Math.hypot(px / 1.15, py / 0.95);
        if (q > 1) { px /= q; py /= q; }
      }
      const sy = blink;
      g.beginPath(); g.ellipse(px * 0.2, py * 0.2 * sy, 2.1, 2.95 * sy, 0, 0, TAU); g.fillStyle = rgb(iris); g.fill();
      g.beginPath(); g.ellipse(px, py * sy, 1.0, 2.0 * sy, 0, 0, TAU); g.fillStyle = '#1b1220'; g.fill();
      if (sy > 0.5) { g.beginPath(); g.arc(0.8 + px * 0.2, (1.4 + py * 0.2) * sy, 0.85, 0, TAU); g.fillStyle = '#fff'; g.fill(); }
    }));

    /* hidung & mulut */
    decal(Rh, hc, 0, -3.1, () => {
      g.beginPath(); g.moveTo(-1.6, 0.4); g.lineTo(1.6, 0.4); g.lineTo(0, -1.7); g.closePath(); g.fillStyle = '#e8588f'; g.fill();
      g.beginPath(); g.moveTo(0, -1.7); g.quadraticCurveTo(-1.6, -4.1, -3.7, -2.6); g.moveTo(0, -1.7); g.quadraticCurveTo(1.6, -4.1, 3.7, -2.6);
      g.lineWidth = 1; g.lineCap = 'round'; g.strokeStyle = rgb(cur.ink); g.stroke();
      if (lickAmt > 0.15) {                                    // lidah keluar-masuk saat menjilat
        const ext = lickAmt * (0.55 + 0.45 * Math.sin(lickPh * 2));
        g.beginPath(); g.ellipse(0, -2.9 - ext * 1.1, 1.5, 0.7 + ext * 1.5, 0, 0, TAU);
        g.fillStyle = '#ff7fa8'; g.fill();
        g.lineWidth = 0.4; g.strokeStyle = 'rgba(190,60,100,.55)'; g.stroke();
      }
    });

    /* kumis: garis 3D dari pipi keluar */
    [-1, 1].forEach(sd => [[-3.2, 1.7], [-5.2, -1.2]].forEach(([v, dv]) => {
      const s = surf(Rh, hc, sd * 10.4, v, 0.4); if (!s || s.vis < -0.15) return;
      const p0 = add(hc, ap(Rh, [sd * 10.4, v, s ? HEAD_R[2] * Math.sqrt(Math.max(0.001, 1 - (10.4 / HEAD_R[0]) ** 2 - (v / HEAD_R[1]) ** 2)) : 0]));
      const p1 = add(p0, ap(Rh, [sd * 7, dv, -1.2]));
      const a0 = ap(V, p0), a1 = ap(V, p1);
      g.beginPath(); g.moveTo(OX + a0[0], OY - a0[1]); g.lineTo(OX + a1[0], OY - a1[1]);
      g.lineWidth = 0.9; g.lineCap = 'round'; g.strokeStyle = rgb(cur.whisk, clamp(s.vis * 4 + 0.7, 0, 1)); g.stroke();
    }));

    drawCollar(true);
  }

  /* ---------- loop ---------- */
  function frame(now) {
    requestAnimationFrame(frame);
    const cl = catEl.classList;
    if (document.hidden || cl.contains('hidden') || cl.contains('indoors')) { last = now; return; }
    const dt = Math.min((now - last) / 1000, 0.05); last = now;
    step(dt, now / 1000);
    draw(now / 1000);
  }
  requestAnimationFrame(frame);
}

/* =====================================================
   KUCING PENGIKUT: Mochi
   - mengikuti kursor (atau tap terakhir di HP), duduk saat sampai, tidur kalau didiamkan
   - klik untuk mengelus
   - goyang saat musik main, mengejar kelopak saat hujan bunga
   - warna bulu: oren / abu-abu / hitam / ikut palet
===================================================== */
(function cat() {
  const el = $('#cat'), bubble = $('#catBubble');
  const NAME = 'Mochi';
  const SAYS = ['meong~', 'miaw!', 'prrr...', 'mrow?', 'nyam nyam 🐟'];
  const clamp = (v, a, b) => Math.min(Math.max(v, a), b);
  const pick = arr => arr[Math.floor(rand(0, arr.length))];

  let x = innerWidth * 0.18, y = innerHeight - 14;
  let target = null, face = 1, hover = false, touchHold = false;
  let lastActive = performance.now(), last = lastActive, traveled = 0, bubbleT = null;
  let visible = true, musicOn = false, chasing = false, caught = 0;
  try { visible = localStorage.getItem('cat') !== 'off'; } catch (e) {}
  el.classList.toggle('hidden', !visible);
  const look = { x: 0, y: 0, on: false };                  // arah pandang mata: vektor layar dari kepala ke yang dilihat
  const lamp = { k: 0, ux: 1, uy: 0, night: false };       // sorotan lampu rumah ke Mochi
  createCat3D($('#catCanvas'), el, () => face, reduceMotion, () => look, () => lamp);

  /* ---------- warna bulu ---------- */
  const FURS = [
    { k: 'orange', label: 'Oren',       bg: '#f6c28b' },
    { k: 'gray',   label: 'Abu-abu',    bg: '#b9bfca' },
    { k: 'black',  label: 'Hitam',      bg: '#3b3441' },
    { k: 'auto',   label: 'Ikut palet', bg: 'conic-gradient(#f9c4d6 0 25%, #d3c1f7 0 50%, #ffcfb0 0 75%, #b5ecd8 0)' }
  ];
  const ALIAS = { oren: 'orange', orange: 'orange', jingga: 'orange', abu: 'gray', 'abu-abu': 'gray', gray: 'gray', grey: 'gray',
                  hitam: 'black', black: 'black', palet: 'auto', palette: 'auto', auto: 'auto', 'ikut palet': 'auto' };
  let fur = 'orange';
  try { const f = localStorage.getItem('catFur'); if (FURS.some(o => o.k === f)) fur = f; } catch (e) {}

  const furBox = $('#furOpts');
  FURS.forEach(o => {
    const b = mk('button', 'fur-btn'); b.type = 'button'; b.dataset.k = o.k; b.title = o.label;
    b.setAttribute('aria-label', 'Bulu Mochi: ' + o.label); b.style.background = o.bg;
    b.addEventListener('click', () => setFur(o.k, true));
    furBox.append(b);
  });
  function setFur(k, announce) {
    const key = ALIAS[String(k).toLowerCase()] || (FURS.some(o => o.k === k) ? k : null);
    if (!key) return null;
    fur = key;
    el.dataset.fur = key;
    $$('.fur-btn', furBox).forEach(b => b.classList.toggle('active', b.dataset.k === key));
    try { localStorage.setItem('catFur', key); } catch (e) {}
    if (announce && visible) {
      say('Bulu baru! ✨'); el.classList.remove('happy'); void el.offsetWidth;
      el.classList.add('happy'); setTimeout(() => el.classList.remove('happy'), 520);
    }
    return FURS.find(o => o.k === key).label.toLowerCase();
  }
  window.setCatFur = k => setFur(k, true);
  setFur(fur, false);

  /* ---------- duduk & menjilat kaki ----------
     berhenti bergerak sebentar -> duduk. Duduk + kursor diam beberapa detik -> menjilat kaki depan.
     Kursor bergerak lagi -> berhenti menjilat, mata kembali mengikuti kursor. */
  let restSince = 0, sitting = false, licking = false, lickStart = 0, lickEnd = 0, nextLick = 0, lastPtr = 0;
  function startLick(now) {
    licking = true; lickStart = now; lickEnd = now + rand(3800, 5600);
    el.classList.add('lick');
  }
  function endLick(now) {
    if (!licking) return;
    licking = false; el.classList.remove('lick');
    nextLick = (now || performance.now()) + rand(6000, 11000);
  }
  function standUp() {
    restSince = 0;
    if (sitting) { sitting = false; el.classList.remove('sit'); }
    endLick();
  }
  function updateLook(pt) {
    let tx = null, ty = null;
    if (pt) { tx = pt.x; ty = pt.y; }
    else if (food) { tx = food.x; ty = food.y - 8; }
    else if (yarn) { tx = yarn.x; ty = yarn.y - 14 - yarn.z; }
    else if (target) { tx = target.x; ty = target.y; }
    if (tx === null || inHouse || !visible) { look.on = false; return; }
    look.on = true; look.x = tx - (x + face * 6); look.y = ty - (y - 34);
  }

  /* ---------- cahaya lampu rumah ----------
     Malam hari lampu taman di samping rumah memancarkan kolam cahaya hangat yang lembut (diam, bernapas pelan) dan menerangi tanah di bawahnya.
     Mochi yang berjalan masuk ke kolam itu bulunya ikut hangat, makin dekat makin terang; di luarnya ia redup kebiruan. */
  const pool = mk('div', 'lamp-pool'); pool.setAttribute('aria-hidden', 'true'); document.body.append(pool);
  const POOL_RX = 230, POOL_RY = 190;                      // setengah lebar/tinggi kolam cahaya (px), sama dengan CSS
  const floorGlow = mk('div', 'lamp-floor'); floorGlow.setAttribute('aria-hidden', 'true'); document.body.append(floorGlow);
  const lampSvg = $('#gardenLamp') ? $('#gardenLamp').querySelector('svg') : null;
  function lampPos() {
    if (!lampSvg) return null;
    const r = lampSvg.getBoundingClientRect();
    return { x: r.left + r.width * 22 / 44, y: r.top + r.height * 32 / 124, gy: r.bottom - 5 };   // lentera & tanah di SVG lampu taman
  }
  function placePool() {
    const p = lampPos(); if (!p) return null;
    pool.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
    floorGlow.style.transform = `translate3d(${p.x}px, ${p.gy}px, 0)`;
    return p;
  }
  function updateLamp() {
    const night = root.getAttribute('data-theme') === 'dark';
    lamp.night = night;
    const p = placePool();
    if (!night || !p || inHouse || !visible || reduceMotion) { lamp.k = 0; return; }
    const dx = x - p.x, dy = (y - 22) - p.y;
    const dn = Math.hypot(dx / POOL_RX, dy / POOL_RY);                            // jarak ternormalisasi di dalam elips cahaya
    const u = clamp((1 - dn) / 0.8, 0, 1);
    lamp.k = u * u * (3 - 2 * u);
    const hx = x + face * 6, hy = y - 34, hd = Math.hypot(p.x - hx, p.y - hy) || 1;
    lamp.ux = (p.x - hx) / hd; lamp.uy = (p.y - hy) / hd;                         // arah lampu dari kepala Mochi
  }
  addEventListener('resize', () => { placePool(); });

  /* ---------- helper tampilan ---------- */
  function setState(...cls) {
    ['idle', 'walk', 'run', 'sleep'].forEach(c => el.classList.toggle(c, cls.includes(c)));
    el.classList.toggle('groove', musicOn && cls.includes('idle'));
  }
  function place() {
    el.style.transform = `translate3d(${x - 36}px, ${y - 56}px, 0)`;
    el.style.setProperty('--face', face);
  }
  function say(text, ms = 1700) {
    bubble.textContent = tr(text);
    bubble.classList.add('show');
    clearTimeout(bubbleT);
    bubbleT = setTimeout(() => bubble.classList.remove('show'), ms);
  }
  function hop() { el.classList.remove('happy'); void el.offsetWidth; el.classList.add('happy'); setTimeout(() => el.classList.remove('happy'), 520); }
  function hearts() {
    if (reduceMotion) return;
    for (let i = 0; i < 6; i++) {
      const h = mk('span', 'burst', '♥');
      h.style.left = (x + face * 16) + 'px'; h.style.top = (y - 44) + 'px';
      h.style.setProperty('--dx', rand(-50, 50) + 'px'); h.style.setProperty('--dy', rand(-100, -35) + 'px');
      h.style.color = i % 2 ? 'var(--accent)' : 'var(--accent2)';
      h.style.fontSize = rand(14, 22) + 'px';
      document.body.append(h);
      setTimeout(() => h.remove(), 1000);
    }
  }

  /* ---------- kejar kelopak ---------- */
  /* Petal dilacak: kecepatannya dihitung dari posisi antar-frame supaya Mochi bisa memperkirakan
     ke mana petal jatuh, dan targetnya dikunci supaya tidak ganti-ganti sasaran tiap frame. */
  const petalSeen = new WeakMap();
  let lockPetal = null;
  function nearestPetal(now) {
    let best = null, bd = Infinity, locked = null, ld = Infinity;
    document.querySelectorAll('.petal').forEach(p => {
      const r = p.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const prev = petalSeen.get(p);
      let vx = 0, vy = 0.14;                                       // px per ms; tebakan awal: jatuh pelan
      if (prev) {
        vx = prev.vx; vy = prev.vy;
        const span = now - prev.t;
        if (span > 8) { vx = vx * .7 + (cx - prev.x) / span * .3; vy = vy * .7 + (cy - prev.y) / span * .3; }
      }
      if (!prev || now - prev.t > 8) petalSeen.set(p, { x: cx, y: cy, t: now, vx, vy });
      if (cy < 30 || cy > innerHeight - 4 || cx < 0 || cx > innerWidth) return;   // belum turun / sudah lewat
      if (cy > y + 4) return;                                    // sudah jatuh melewati kaki Mochi: dilepas, tidak diikuti turun
      // titik & waktu petal melewati ketinggian kepala Mochi; yang tak sempat dikejar diberi skor jelek
      const tHead = vy > 0.02 ? Math.max(0, (y - 48 - cy) / vy) : 0;
      const hx = cx + vx * tHead;
      const d = Math.abs(hx - x) + (Math.abs(hx - x) > tHead * 0.45 + 60 ? 500 : 0);
      const c = { el: p, x: cx, y: cy, vx, vy };
      if (d < bd) { bd = d; best = c; }
      if (p === lockPetal) { locked = c; ld = d; }
    });
    if (locked && best !== locked && bd > ld * 0.6) best = locked;   // tetap pada petal yang sama kecuali ada yang jauh lebih dekat
    lockPetal = best ? best.el : null;
    return best;
  }

  /* ---------- melompat menangkap petal ----------
     Mochi menunggu di bawah petal, menunduk sedikit, melompat, lalu di puncak lompatan petal "dicaplok"
     (petal melayang masuk ke mulut dan mengecil). Kadang meleset. */
  const LEAP_T = 260;                       // ms dari awal lompat sampai puncak (saat petal ditangkap)
  let leapUntil = 0, leapCatchAt = 0, leapPetal = null, leapMiss = false, leapCooldown = 0, noticed = null, noticeAt = 0, lastPt = null, petalSide = -1;
  function tryLeap(pt, now) {
    const fx = pt.x + pt.vx * LEAP_T, fy = pt.y + pt.vy * LEAP_T;   // perkiraan posisi petal saat Mochi di puncak
    const mx = x + face * 16, my = y - 62;
    if (Math.abs(fx - mx) > 38 || Math.abs(fy - my) > 48) return;
    if (Math.abs(pt.x - x) > 6) face = pt.x > x ? 1 : -1;
    leapPetal = pt.el; leapCatchAt = now + LEAP_T; leapUntil = now + 600; leapMiss = Math.random() < .18;
    standUp(); setState('idle');
    el.classList.remove('leap'); void el.offsetWidth; el.classList.add('leap');
    setTimeout(() => el.classList.remove('leap'), 620);
  }
  function catchPetal(p, cx, cy, mx, my) {
    const w = p.offsetWidth, h = p.offsetHeight;
    p.style.animation = 'none'; p.style.left = (cx - w / 2) + 'px'; p.style.top = (cy - h / 2) + 'px'; p.style.transform = 'none';
    try {
      const a = p.animate([{ transform: 'translate(0,0) scale(1) rotate(0deg)', opacity: 1 },
                           { transform: `translate(${mx - cx}px,${my - cy + 8}px) scale(.25) rotate(140deg)`, opacity: 0 }],
                          { duration: 260, easing: 'ease-in', fill: 'forwards' });
      a.onfinish = () => p.remove();
    } catch (e) { p.remove(); }
    setTimeout(() => p.remove(), 420);
    caught++;
    say(pick(['hap!', 'dapet!', 'nyam 🌸']), 900);
  }
  function resolveLeap(now) {
    if (!leapPetal || now < leapCatchAt) return;
    const p = leapPetal; leapPetal = null;
    leapCooldown = now + 700;
    if (!p.isConnected) return;
    const r = p.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const mx = x + face * 16, my = y - 62;
    if (!leapMiss && Math.hypot(cx - mx, cy - my) < 52) catchPetal(p, cx, cy, mx, my);
    else if (Math.random() < .7) say(pick(['yah~', 'hampir!', 'mrow?']), 900);
  }

  window.catChase = () => {
    if (!visible || reduceMotion) return;
    chasing = true; caught = 0; lastActive = performance.now();
    setTimeout(() => say('Kelopak! 🌸', 1200), 150);
  };

  /* ---------- rumah Mochi ---------- */
  const houseEl = $('#catHouse');
  let goingHome = false, inHouse = false, wake = false, stayUntil = 0;
  const doorGoal = () => {
    const r = houseEl.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: clamp(innerHeight - 6, 60, innerHeight - 4) };
  };
  function enterHouse() {
    const d = doorGoal();
    inHouse = true; goingHome = false; wake = false; x = d.x; y = d.y;
    el.classList.add('indoors'); houseEl.classList.add('occupied');
    setState('idle');
  }
  function leaveHouse() {
    inHouse = false; wake = false; goingHome = false; lastActive = performance.now();
    el.classList.remove('indoors'); houseEl.classList.remove('occupied');
    if (visible) say(pick(['hoaam~ 🥱', 'miaw? ada apa?', 'aku bangun~']), 1600);
  }
  window.catHome = () => {
    if (!visible) setVisible(true);
    if (inHouse) { leaveHouse(); return false; }
    goingHome = 'forced'; lastActive = performance.now(); stayUntil = lastActive + 5000;
    say('pulang dulu ya 🏠', 1500);
    return true;
  };
  if (houseEl) houseEl.addEventListener('click', () => window.catHome());

  /* ---------- kasih makan ----------
     ikan memantul -> Mochi sadar ("!") -> jalan pelan -> mengendus -> mengunyah per gigitan -> senang */
  let food = null, fed = 0, eating = false;
  window.feedCat = () => {
    if (!visible) setVisible(true);
    if (inHouse) leaveHouse();
    goingHome = false;
    if (food || eating) return true;
    const dir = Math.random() < .5 ? -1 : 1;
    const fx = clamp(x + dir * rand(130, 240), 60, innerWidth - 60);
    const fy = clamp(y, 60, innerHeight - 6);
    const wrap = mk('span', 'fish'), inner = mk('span', 'fish-i', '🐟');
    wrap.append(inner);
    wrap.style.left = fx + 'px'; wrap.style.top = (fy - 14) + 'px';
    document.body.append(wrap);
    food = { el: wrap, inner, x: fx, y: fy, ready: false };
    if (reduceMotion) { food.ready = true; setTimeout(startEating, 300); return true; }
    wrap.animate([
      { transform: 'translateY(-75vh) rotate(-50deg)', opacity: 0, offset: 0 },
      { opacity: 1, offset: .15 },
      { transform: 'translateY(0) rotate(12deg)',   offset: .55, easing: 'ease-out' },
      { transform: 'translateY(-28px) rotate(-10deg)', offset: .7, easing: 'ease-in' },
      { transform: 'translateY(0) rotate(7deg)',    offset: .82, easing: 'ease-out' },
      { transform: 'translateY(-9px) rotate(-4deg)', offset: .91, easing: 'ease-in' },
      { transform: 'translateY(0) rotate(0)',       offset: 1 }
    ], { duration: 950, easing: 'cubic-bezier(.45,0,.9,.6)' });
    setTimeout(() => {                       // ikan mendarat: Mochi menoleh & kaget
      if (!food) return;
      lastActive = performance.now();
      say('!', 700); hop();
      setTimeout(() => { if (food) food.ready = true; }, 550);   // jeda sebelum berjalan
    }, 850);
    return true;
  }
  function startEating() {
    if (!food || eating) return;
    eating = true; lastActive = performance.now();
    const f = food;
    el.classList.add('sniff');
    setTimeout(() => say('hmm~', 600), 100);
    const bite = (scale, delay) => setTimeout(() => { f.inner.style.scale = scale; hop(); }, delay);
    setTimeout(() => { el.classList.remove('sniff'); el.classList.add('chomp'); }, 650);
    bite(.7, 900); bite(.4, 1250); bite(.12, 1600);
    setTimeout(() => {
      el.classList.remove('chomp'); f.el.remove(); food = null; eating = false; fed++;
      lastActive = performance.now();
      if (fed % 3 === 0) { say('Kenyang~ makasih ya 💕', 2600); hearts(); }
      else { say(pick(['nyam nyam 🐟', 'enak!', 'nyam~ 😋']), 1500); if (fed % 2 === 0) hearts(); }
    }, 1900);
  }

  /* ---------- bola benang ----------
     Bola jatuh dari atas, memantul dan menggelinding (z = tinggi, untuk efek pantul).
     Mochi mengejar, menepuk ke depan, sesekali menerkam. Pengunjung bisa menyeret & melempar bolanya. */
  const YARN_LIFE = 45000;                 // berhenti sendiri kalau tidak disentuh pengunjung
  const YARN_SVG = '<svg class="yarn-ball" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<defs><radialGradient id="yg" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>' +
    '<circle cx="20" cy="20" r="17" style="fill:var(--accent)"/>' +
    '<g fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1.6" stroke-linecap="round"><path d="M5 22c8-8 22-9 30-2"/><path d="M6.5 28c9-6 20-6 27-1"/><path d="M9 13c6 4 16 6 24 4"/><path d="M15 5.5c-3 10-2 20 3 29"/><path d="M26 5c4 9 4 19-1 30"/></g>' +
    '<circle cx="20" cy="20" r="17" fill="url(#yg)"/>' +
    '<path d="M33 31c4 2 5 5 2 7" fill="none" style="stroke:var(--accent)" stroke-width="2" stroke-linecap="round"/></svg>';
  let yarn = null;

  function removeYarn(msg) {
    if (!yarn) return;
    const Y = yarn; yarn = null;
    [Y.el, Y.sh, Y.svg].forEach(n => n.remove());
    if (msg && visible) say(msg, 2200);
  }
  function bindYarnDrag(Y) {
    Y.el.addEventListener('pointerdown', e => {
      e.preventDefault(); e.stopPropagation();
      Y.drag = true; Y.el.classList.add('grab');
      try { Y.el.setPointerCapture(e.pointerId); } catch (_) {}
      Y.vx = Y.vy = Y.vz = 0; Y.dvx = Y.dvy = 0; Y.pt = performance.now(); Y.user = Y.pt;
    });
    Y.el.addEventListener('pointermove', e => {
      if (!Y.drag) return;
      const t = performance.now(), d = Math.max(t - Y.pt, 8) / 16.7;
      const nx = clamp(e.clientX, 24, innerWidth - 24), ny = clamp(e.clientY + 34, 70, innerHeight - 6);
      Y.dvx = Y.dvx * .6 + ((nx - Y.x) / d) * .4; Y.dvy = Y.dvy * .6 + ((ny - Y.y) / d) * .4;
      Y.x = nx; Y.y = ny; Y.z = 20; Y.pt = t; Y.user = t;
    });
    const end = () => {
      if (!Y.drag) return;
      Y.drag = false; Y.el.classList.remove('grab');
      Y.vx = clamp(Y.dvx, -26, 26); Y.vy = clamp(Y.dvy, -14, 14); Y.vz = 0; Y.user = performance.now();
      if (visible && Math.hypot(Y.vx, Y.vy) > 6) say(pick(['wuih! 🧶', 'ayo kejar!']), 1000);
    };
    Y.el.addEventListener('pointerup', end);
    Y.el.addEventListener('pointercancel', end);
  }
  // true = bola dilempar, false = bola disimpan, null = animasi dikurangi (Mochi diam)
  window.playYarn = () => {
    if (reduceMotion) { toast('Animasi dikurangi di perangkatmu, jadi Mochi diam saja 🧶'); return null; }
    if (yarn) { removeYarn('Bola disimpan 🧶'); return false; }
    if (!visible) setVisible(true);
    if (inHouse) leaveHouse();
    goingHome = false;
    const dir = Math.random() < .5 ? -1 : 1, now = performance.now();
    const bx = clamp(x + dir * rand(150, 260), 60, innerWidth - 60), by = clamp(y - rand(0, 40), 90, innerHeight - 10);
    const el = mk('div', 'yarn'); el.innerHTML = YARN_SVG;        // YARN_SVG = konstanta milik sendiri
    const sh = mk('span', 'yarn-shadow');
    const NS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(NS, 'svg'); svg.setAttribute('class', 'yarn-thread'); svg.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS(NS, 'path'); svg.append(path);
    document.body.append(svg, sh, el);
    yarn = { el, sh, svg, path, ball: el.firstElementChild, x: bx, y: by, vx: rand(-1, 1), vy: 0, z: 260, vz: 0, ang: 0,
             trail: [], lastBat: 0, bats: 0, drag: false, dvx: 0, dvy: 0, pt: now, user: now };
    bindYarnDrag(yarn);
    lastActive = now;
    setTimeout(() => { if (yarn) say('Bola benang! 🧶', 1400); }, 250);
    return true;
  };
  function batYarn(Y, now, dxb) {
    Y.lastBat = now; Y.bats++;
    const dir = dxb >= 0 ? 1 : -1, pounce = Math.random() < .22, sp = pounce ? rand(11, 16) : rand(5, 9);
    Y.vx = dir * sp + rand(-1, 1);
    Y.vy = rand(-2.4, 2.4) + (Y.y > innerHeight * .75 ? -1.2 : 0);
    Y.vz = pounce ? rand(6.5, 9) : rand(2.2, 4.6);
    face = dir; lastActive = now; hop();
    if (pounce) say(pick(['hiyaa! 🧶', 'terkam!', 'mrow! 🧶']), 1000);
    else if (Math.random() < .35) say(pick(['hehe 🧶', 'dapet! 🧶', 'prrr 🧶']), 900);
    if (Y.bats % 8 === 0) hearts();
  }
  function stepYarn(now, dt) {
    const Y = yarn; if (!Y) return;
    if (now - Y.user > YARN_LIFE) { removeYarn('Capek ah~ 😮‍💨'); return; }
    if (!Y.drag) {
      Y.x += Y.vx * dt; Y.y += Y.vy * dt;
      Y.vz -= .55 * dt; Y.z += Y.vz * dt;
      if (Y.z <= 0) { Y.z = 0; Y.vz = Y.vz < -1.6 ? -Y.vz * .45 : 0; }
      if (Y.z < 1) { const f = Math.pow(.962, dt); Y.vx *= f; Y.vy *= f; }
      if (Y.x < 24) { Y.x = 24; Y.vx = Math.abs(Y.vx) * .7; }
      if (Y.x > innerWidth - 24) { Y.x = innerWidth - 24; Y.vx = -Math.abs(Y.vx) * .7; }
      if (Y.y < 70) { Y.y = 70; Y.vy = Math.abs(Y.vy) * .7; }
      if (Y.y > innerHeight - 6) { Y.y = innerHeight - 6; Y.vy = -Math.abs(Y.vy) * .7; }
      if (Math.abs(Y.vx) < .05) Y.vx = 0;
      if (Math.abs(Y.vy) < .05) Y.vy = 0;
    }
    const sp = Math.hypot(Y.vx, Y.vy), cy = Y.y - 14 - Y.z;
    Y.ang += (Y.vx + Y.vy * .5) * dt * 3.4;
    // benang: jejak posisi bola, memendek saat bola diam
    const lastP = Y.trail[Y.trail.length - 1];
    if ((sp > .8 || Y.drag) && (!lastP || Math.hypot(lastP[0] - Y.x, lastP[1] - cy) > 6)) { Y.trail.push([Y.x, cy]); if (Y.trail.length > 38) Y.trail.shift(); }
    else if (sp <= .8 && !Y.drag && Y.trail.length > 8) Y.trail.shift();
    Y.path.setAttribute('d', Y.trail.length ? 'M' + Y.trail.map(p => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('L') + 'L' + Y.x.toFixed(1) + ' ' + cy.toFixed(1) : '');
    Y.el.style.transform = `translate3d(${Y.x - 17}px, ${cy - 17}px, 0)`;
    Y.ball.style.transform = `rotate(${Y.ang}deg)`;
    Y.sh.style.transform = `translate3d(${Y.x}px, ${Y.y}px, 0) scale(${1 - Math.min(Y.z, 120) / 170})`;
    Y.el.style.zIndex = Y.y > y ? 91 : 88;       // di depan atau di belakang Mochi
    if (!Y.drag && visible && !inHouse && !eating && now - Y.lastBat > 480 && Y.z < 14) {
      const dxb = Y.x - x, dyb = Y.y - y;
      if (Math.abs(dxb) < 42 && Math.abs(dyb) < 26) batYarn(Y, now, dxb);
    }
  }
  /* ---------- jejak kaki ----------
     Tiap Mochi menempuh satu langkah, telapak kecil muncul di tanah di belakangnya (kiri-kanan bergantian,
     searah jalannya), lalu memudar sendiri. Dibatasi jumlahnya supaya ringan. */
  const PAW_SVG = '<svg viewBox="0 0 20 22" aria-hidden="true"><ellipse cx="10" cy="15" rx="5.2" ry="4.4"/><ellipse cx="3.7" cy="9" rx="2" ry="2.7" transform="rotate(-24 3.7 9)"/><ellipse cx="7.8" cy="4.6" rx="2" ry="2.8"/><ellipse cx="12.2" cy="4.6" rx="2" ry="2.8"/><ellipse cx="16.3" cy="9" rx="2" ry="2.7" transform="rotate(24 16.3 9)"/></svg>';
  const PAW_MAX = 24, PAW_LIFE = 1700;
  let pawDist = 0, pawSide = 1, pawCount = 0;
  function dropPaw(dx, dy, run) {
    if (pawCount >= PAW_MAX) return;
    const len = Math.hypot(dx, dy) || 1, ux = dx / len, uy = dy / len;
    const off = pawSide * 5; pawSide = -pawSide;                    // tegak lurus arah jalan, bergantian kiri/kanan
    const px = x - ux * 9 - uy * off;
    const py = y - 3 - uy * 5 + ux * off * 0.5;                     // tanah terlihat agak miring, jadi sisi vertikal dipipihkan
    const ang = Math.atan2(uy, ux) * 180 / Math.PI + 90;            // SVG menghadap atas
    const p = mk('span', 'paw' + (run ? ' run' : ''));
    p.setAttribute('aria-hidden', 'true'); p.innerHTML = PAW_SVG;
    p.style.transform = `translate3d(${px - 7}px, ${py - 8}px, 0) rotate(${ang}deg)`;
    document.body.append(p); pawCount++;
    setTimeout(() => { p.remove(); pawCount--; }, PAW_LIFE);
  }

  /* ---------- loop utama ---------- */
  function frame(now) {
    const dt = Math.min(now - last, 50) / 16.7; last = now;
    stepYarn(now, dt);
    if (eating && food) {                                  // sedang makan: diam menghadap ikan
      face = food.x > x ? 1 : -1; lastActive = now; setState('idle'); standUp(); updateLook(); updateLamp(); place();
      return requestAnimationFrame(frame);
    }
    if (inHouse) {                                         // tidur di rumah sampai ada gerakan
      if (wake && now > stayUntil) leaveHouse();
      else { wake = false; place(); return requestAnimationFrame(frame); }
    }
    if (now < leapUntil) {                                  // sedang di udara: tidak berjalan, mata tetap ke petal
      lastActive = now; resolveLeap(now); updateLook(lastPt); updateLamp(); place();
      return requestAnimationFrame(frame);
    }
    let goal = null, fast = false, pt = null, gentle = false;

    if (visible && chasing) {
      if (!document.querySelector('.petal')) {
        chasing = false; lockPetal = null; noticed = null;
        if (caught > 1) say('Dapat ' + caught + ' kelopak! 🌸', 2200);
        caught = 0; traveled = 0;   // traveled direset agar bubble hasil tidak tertimpa meong biasa
      } else {
        pt = nearestPetal(now);
        if (pt) {
          if (pt.el !== noticed) { noticed = pt.el; noticeAt = now + rand(200, 380); petalSide = x <= pt.x ? -1 : 1; }   // jeda sejenak: "oh, ada petal"
          if (now >= noticeAt) {
            // tetap di ketinggian sendiri, geser kiri-kanan ke titik tempat petal akan lewat setinggi kepala
            const lead = pt.vy > 0.02 ? clamp((y - 48 - pt.y) / pt.vy, 0, 2000) : 0;
            const px = clamp(pt.x + pt.vx * lead, 40, innerWidth - 40);
            goal = { x: clamp(px + petalSide * 16, 40, innerWidth - 40), y };   // sisi tetap, jadi tidak bolak-balik
            fast = Math.abs(goal.x - x) > 110;
          }
        }
      }
    }
    lastPt = pt;
    if (!goal && food && food.ready) { goal = { x: clamp(food.x - face * 18, 40, innerWidth - 40), y: food.y }; gentle = true; }
    if (!goal && yarn) {                                  // bola benang: tetap di sisi sendiri, siap menepuk
      const sideY = x <= yarn.x ? -1 : 1;
      goal = { x: clamp(yarn.x + sideY * 30, 40, innerWidth - 40), y: clamp(yarn.y, 60, innerHeight - 4) };
      fast = Math.hypot(yarn.vx, yarn.vy) > 2.5 || Math.hypot(yarn.x - x, yarn.y - y) > 260;
    }
    const waitingPetal = visible && chasing && !pt;      // kelopak belum ada yang turun, Mochi menunggu
    if (!goal && !waitingPetal && visible && !hover && !touchHold && target) {
      const side = x <= target.x ? -1 : 1;                // tetap di sisi tempat dia berada
      goal = { x: clamp(target.x + side * 62, 40, innerWidth - 40), y: clamp(target.y + 26, 60, innerHeight - 4) };
    }

    if (goingHome && visible && !food && !chasing && houseEl) { goal = doorGoal(); gentle = true; fast = false; }
    let moving = false;
    if (goal) {
      const dx = goal.x - x, dy = goal.y - y, dist = Math.hypot(dx, dy);
      if (dist > (fast ? 4 : 8)) {
        const sp = (fast ? clamp(dist * 0.09, 2.2, 11) : gentle ? clamp(dist * 0.045, 1.3, 5.2) : clamp(dist * 0.05, 1.4, 9)) * dt;
        x += dx / dist * sp; y += dy / dist * sp;
        if (Math.abs(dx) > 1.5) face = dx > 0 ? 1 : -1;
        traveled += sp; moving = true; lastActive = now;
        pawDist += sp;
        if (pawDist > (sp > 5 ? 36 : 24) && visible) { pawDist = 0; dropPaw(dx, dy, sp > 5); }
        sp > 5 ? setState('walk', 'run') : setState('walk');
      }
    }
    if (moving) standUp();
    if (pt && now >= noticeAt && now > leapCooldown && !leapPetal) tryLeap(pt, now);
    if (food && food.ready && !eating && Math.hypot(food.x - (x + face * 18), food.y - y) < 24) startEating();
    if (!moving) {
      if (traveled > 350 && visible && !chasing) say(pick(SAYS));
      traveled = 0;
      pawDist = 0;
      if (target && !hover && !chasing) face = target.x > x ? 1 : -1;
      if (pt && Math.abs(pt.x - x) > 4) face = pt.x > x ? 1 : -1;
      if (food) face = food.x > x ? 1 : -1;
      if (yarn && !food) face = yarn.x > x ? 1 : -1;
      if (hover || touchHold || chasing || yarn) lastActive = now;
      if (goingHome) {
        const d = doorGoal();
        if (Math.hypot(d.x - x, d.y - y) < 16) { enterHouse(); }
        else setState('idle');
      } else if (now - lastActive > 8000 && houseEl) { goingHome = 'auto'; stayUntil = now + 1500; setState('idle'); }
      else setState('idle');
      // duduk setelah diam sebentar; menjilat kaki kalau kursor lama diam
      if (!restSince) restSince = now;
      const wantSit = !goingHome && !chasing && !yarn && !food && now - restSince > 750;
      if (wantSit && !sitting) { sitting = true; el.classList.add('sit'); nextLick = now + rand(1800, 3200); }
      else if (!wantSit && sitting) standUp();
      if (sitting && !licking && now > nextLick && now - lastPtr > 2400 && !hover && !touchHold) startLick(now);
      else if (licking && (now > lickEnd || lastPtr > lickStart || hover || touchHold)) endLick(now);
    }
    updateLook(pt);
    updateLamp();
    place();
    requestAnimationFrame(frame);
  }

  /* ---------- input ---------- */
  function setTarget(e) { target = { x: e.clientX, y: e.clientY }; lastActive = lastPtr = performance.now(); wake = true; if (goingHome === 'auto') goingHome = false; }
  if (!reduceMotion) {
    addEventListener('pointermove', setTarget, { passive: true });
    addEventListener('pointerdown', setTarget, { passive: true });
  }
  el.addEventListener('pointerdown', e => { e.stopPropagation(); touchHold = true; setTimeout(() => { touchHold = false; }, 700); });
  el.addEventListener('mouseenter', () => { hover = true; if (goingHome === 'auto') goingHome = false; });
  el.addEventListener('mouseleave', () => { hover = false; });
  el.addEventListener('click', () => {
    lastActive = performance.now();
    setState('idle');
    hop();
    say(pick(['prrr... 💕', 'purr~ ♥', 'miaw~ 😺']));
    hearts();
  });
  addEventListener('resize', () => { x = clamp(x, 40, innerWidth - 40); y = clamp(y, 60, innerHeight - 4); place(); });

  // bereaksi pada piringan musik
  document.addEventListener('musicchange', e => {
    musicOn = !!e.detail;
    el.classList.toggle('groove', musicOn && el.classList.contains('idle'));
    if (musicOn && visible) say('♪ lagunya enak~', 2000);
  });

  function setVisible(v) {
    if (!v) removeYarn();
    visible = v;
    el.classList.toggle('hidden', !v);
    try { localStorage.setItem('cat', v ? 'on' : 'off'); } catch (e) {}
    if (v) {
      if (target) { x = clamp(target.x - 110, 40, innerWidth - 40); y = clamp(target.y + 26, 60, innerHeight - 4); }
      lastActive = performance.now();
      setTimeout(() => say(NAME + ' datang! 🐱'), 150);
    }
  }
  window.toggleCat = () => { setVisible(!visible); return visible; };

  setState('idle'); place(); placePool();
  if (!reduceMotion) requestAnimationFrame(frame);
  else { x = innerWidth * 0.12; y = innerHeight - 14; place(); }
  if (visible) setTimeout(() => say('Halo, aku ' + NAME + '! Gerakkan mouse, aku ikut 🐾', 2600), 1200);
})();

$('#year').textContent = new Date().getFullYear();


/* =====================================================
   MODE EDITOR KODE: tampilan ala VS Code
   Section = file, navbar = tab, ada nomor baris, breadcrumb, dan status bar.
===================================================== */
(function codeMode() {
  const FILES = {
    home:       ['index.html',      'HTML',       'html', '<>'],
    about:      ['about.md',        'Markdown',   'md',   'M↓'],
    experience: ['experience.json', 'JSON',       'json', '{}'],
    skills:     ['skills.ts',       'TypeScript', 'ts',   'TS'],
    projects:   ['projects.java',   'Java',       'java', 'JV'],
    education:  ['education.sql',   'SQL',        'sql',  'DB'],
    learning:   ['learning.py',     'Python',     'py',   'PY'],
    contact:    ['contact.html',    'HTML',       'html', '<>']
  };
  const IDS = Object.keys(FILES), LH = 24, KEY = 'portfolio-ide';
  const btn = $('#ideBtn');
  let on = false, built = false, gutter, crumb, status, cur, lineEl, colEl, langEl, fileEl, ro, ticking = false, lines = 0, col = 1, curKey = '';

  const tag = (a, id) => { const f = FILES[id]; a.dataset.file = f[0]; a.dataset.ext = f[2]; a.dataset.ico = f[3]; };
  tag($('.logo'), 'home');
  $$('#links a').forEach(a => tag(a, a.getAttribute('href').slice(1)));

  function build() {
    if (built) return; built = true;
    gutter = mk('div', 'ide-gutter'); gutter.setAttribute('aria-hidden', 'true');
    crumb = mk('div', 'ide-crumb'); crumb.setAttribute('aria-hidden', 'true');
    crumb.append(mk('span', '', 'anisatul-portfolio'), mk('i', '', '›'), mk('span', '', 'src'), mk('i', '', '›'));
    fileEl = mk('b', '', 'index.html'); crumb.append(fileEl);
    status = mk('div', 'ide-status');
    const exit = mk('button', 'ide-exit', '</> ' + tr('tutup editor'));
    exit.type = 'button'; exit.setAttribute('aria-label', tr('Keluar dari mode editor'));
    exit.addEventListener('click', () => api(true));
    const branch = mk('span', 'ide-item', '⑂ main*');
    lineEl = mk('span', 'ide-item', 'Ln 1, Col 1');
    langEl = mk('span', 'ide-item', 'HTML');
    status.append(exit, branch, mk('span', 'ide-item hide-sm', '✓ 0  ⚠ 0'), mk('span', 'ide-sp'), lineEl,
      mk('span', 'ide-item hide-sm', 'Spaces: 2'), mk('span', 'ide-item hide-sm', 'UTF-8'), langEl, mk('span', 'ide-item hide-sm', '🌸 Prettier'));
    document.body.append(gutter, crumb, status);
    ro = new ResizeObserver(sizeGutter);
  }
  function sizeGutter() {
    const n = Math.ceil(document.body.offsetHeight / LH);
    if (n === lines) return;
    lines = n;
    gutter.textContent = Array.from({ length: n }, (_, i) => i + 1).join('\n');
  }
  function update() {
    ticking = false;
    const probe = scrollY + innerHeight * 0.47;
    let key = 'home';
    for (const id of IDS) { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top + scrollY <= probe) key = id; }
    if (key !== curKey) {
      curKey = key;
      fileEl.textContent = FILES[key][0]; langEl.textContent = FILES[key][1];
      $('.logo').classList.toggle('active', key === 'home');
      const L = $('#links');
      $$('#links a').forEach(a => { const hit = a.getAttribute('href') === '#' + key; a.classList.toggle('active', hit); if (hit) L.scrollLeft += a.getBoundingClientRect().left - L.getBoundingClientRect().left - (L.clientWidth - a.offsetWidth) / 2; });
    }
    lineEl.textContent = 'Ln ' + (Math.floor((scrollY + innerHeight / 2) / LH) + 1) + ', Col ' + col;
  }
  const schedule = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  const onMove = e => { const c = Math.floor(e.clientX / 9) + 1; if (c !== col) { col = c; schedule(); } };

  function api(silent) {
    on = !on;
    if (on) {
      build();
      $$('main section[id]').forEach(s => { if (FILES[s.id] && !$('.ide-fileline', s)) s.prepend(mk('div', 'ide-fileline', '// ' + FILES[s.id][0])); });
      document.body.classList.add('ide'); document.documentElement.classList.add('ide-root');
      sizeGutter(); ro.observe(document.body); curKey = ''; update();
      addEventListener('scroll', schedule, { passive: true }); addEventListener('resize', schedule); addEventListener('mousemove', onMove, { passive: true });
      if (silent !== 'quiet' && silent !== true) toast(tr('Mode editor aktif </>'));
    } else {
      document.body.classList.remove('ide'); document.documentElement.classList.remove('ide-root');
      $$('.ide-fileline').forEach(n => n.remove()); ro.disconnect();
      removeEventListener('scroll', schedule); removeEventListener('resize', schedule); removeEventListener('mousemove', onMove);
      $('.logo').classList.remove('active');
    }
    btn.setAttribute('aria-pressed', on);
    try { on ? sessionStorage.setItem(KEY, '1') : sessionStorage.removeItem(KEY); } catch (_) {}
    return on;
  }
  btn.addEventListener('click', () => api());
  window.toggleIDE = api;
  try { if (sessionStorage.getItem(KEY)) api('quiet'); } catch (_) {}
})();

/* =====================================================
   PENAMPIL DOKUMEN: sertifikat & transkrip tampil di popup.
   PDF digambar ke canvas (pdf.js lokal di assets/vendor, dimuat saat pertama dibuka),
   jadi tidak ada toolbar / tombol unduh bawaan browser, termasuk di HP.
   Catatan: ini mencegah unduhan yang "kebetulan", bukan pengamanan mutlak, karena file
   tetap berada di server publik.
===================================================== */
(function docViewer() {
  const box = $('#docv'), body = $('#docvBody'), title = $('#docvTitle'), closeBtn = $('#docvClose');
  if (!box) return;
  let lib = null, token = 0, lastFocus = null;

  const loadScript = src => new Promise((ok, no) => { const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = no; document.head.append(s); });
  async function ensureLib() {
    if (lib) return lib;
    await loadScript('assets/vendor/pdf.min.js');
    lib = window.pdfjsLib; lib.GlobalWorkerOptions.workerSrc = 'assets/vendor/pdf.worker.min.js';
    return lib;
  }
  const msg = t => body.replaceChildren(mk('p', 'docv-msg', tr(t)));

  async function open(src, name) {
    const my = ++token; lastFocus = document.activeElement;
    title.textContent = tr(name); msg('Memuat dokumen…'); body.scrollTop = 0;
    box.classList.add('open'); box.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
    closeBtn.focus();
    try {
      const pdf = await (await ensureLib()).getDocument({ url: src }).promise;
      if (my !== token) return;
      body.replaceChildren();
      const cssW = Math.min(body.clientWidth - 36, 900), dpr = Math.min(2, window.devicePixelRatio || 1);
      for (let n = 1; n <= pdf.numPages; n++) {
        const page = await pdf.getPage(n); if (my !== token) return;
        const k = cssW / page.getViewport({ scale: 1 }).width, vp = page.getViewport({ scale: k * dpr });
        const cv = mk('canvas', 'docv-page'); cv.width = Math.round(vp.width); cv.height = Math.round(vp.height);
        cv.setAttribute('role', 'img'); cv.setAttribute('aria-label', name + ' (' + n + '/' + pdf.numPages + ')');
        body.append(cv);
        await page.render({ canvasContext: cv.getContext('2d'), viewport: vp }).promise;
      }
    } catch (e) { if (my === token) msg('Dokumen belum bisa ditampilkan. Coba muat ulang halaman.'); }
  }
  function close() {
    token++; box.classList.remove('open'); box.setAttribute('aria-hidden', 'true'); document.body.style.overflow = '';
    setTimeout(() => { if (!box.classList.contains('open')) body.replaceChildren(); }, 400);
    if (lastFocus) lastFocus.focus();
  }

  document.addEventListener('click', e => { const b = e.target.closest('[data-doc]'); if (b) open(b.dataset.doc, b.dataset.title || b.textContent.trim()); });
  closeBtn.addEventListener('click', close);
  box.addEventListener('click', e => { if (e.target === box) close(); });
  addEventListener('keydown', e => {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'Tab') { e.preventDefault(); closeBtn.focus(); }      // fokus tetap di popup
  });
  box.addEventListener('contextmenu', e => e.preventDefault());
  box.addEventListener('dragstart', e => e.preventDefault());
})();

/* Apply translations to static HTML text and accessible attributes. Dynamic text
   created through mk() is translated at creation time via tr(). */
(function languageSwitcher() {
  const actions = document.querySelector('.nav-actions');
  if (!actions || document.getElementById('langToggle')) return;
  const button = document.createElement('button');
  button.type = 'button'; button.id = 'langToggle'; button.className = 'lang-toggle';
  button.setAttribute('aria-label', 'Switch language');
  button.innerHTML = CURRENT_LANG === 'id' ? '<span class="active">ID</span><span>EN</span>' : '<span>ID</span><span class="active">EN</span>';
  actions.insertBefore(button, actions.querySelector('#burger'));

  const norm = t => t.replace(/\s+/g, ' ').trim();
  const translateStatic = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const raw = node.nodeValue, n = norm(raw);
      if (!n) return;
      const t = ENN[n] || tr(n);
      if (t !== n) node.nodeValue = raw.replace(raw.trim(), () => t);
    });
    ['placeholder', 'aria-label', 'title'].forEach(attr => {
      document.querySelectorAll('[' + attr + ']').forEach(el => {
        const v = el.getAttribute(attr), t = ENN[norm(v)] || tr(v);
        if (t !== v) el.setAttribute(attr, t);
      });
    });
    document.documentElement.lang = CURRENT_LANG;
    const locale = document.querySelector('meta[property="og:locale"]'); if (locale) locale.content = 'en_US';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.content = 'Interactive portfolio of Anisatul Fatikha, Fullstack Developer and System Analyst: React.js, Java Spring Boot, ASP.NET, SQL.';
  };
  if (CURRENT_LANG === 'en') translateStatic();
  button.addEventListener('click', () => {
    const next = CURRENT_LANG === 'id' ? 'en' : 'id';
    try { localStorage.setItem('portfolio-lang', next); } catch (_) {}
    const u = new URL(location.href);
    if (u.searchParams.has('lang')) { u.searchParams.delete('lang'); location.replace(u.toString()); }
    else location.reload();
  });
})();
