/**
 * DATA KURIKULUM & MATERI MK SISTEM DIGITAL (14 MINGGU)
 * Dibuat khusus untuk Media Ajar Interaktif HTML5
 * Berdasarkan Kurikulum Sistem Digital ITERA & Standar Teknik Elektro / Informatika
 */

const COURSE_DATA = {
  courseTitle: "Sistem Digital",
  courseCode: "INF203 / EL2102",
  academicYear: "Semester Ganjil 2025/2026",
  lecturer: "Dr. Swadexi Istiqphara, S.T., M.T. • Efa Maydhona, S.T., M.T. • Nia Saputri Utami, S.T., M.T.",
  institution: "Institut Teknologi Sumatera (ITERA)",
  totalWeeks: 14,
  weeks: [
    {
      week: 1,
      title: "Pendahuluan Sistem Digital & Konversi Sistem Bilangan",
      date: "25 Agustus 2025",
      badge: "Fundamental",
      summary: "Memahami konsep dasar sinyal analog vs digital, arsitektur data biner dalam komputasi modern, serta metode konversi bilangan terpusat pada Biner (Central Hub) untuk integer dan pecahan.",
      cpmk: "Mampu memahami karakteristik sistem digital, representasi data komputer, dan mempraktikkan konversi bilangan dengan metode Biner Sentral.",
      submenus: [
        {
          id: "w1-intro",
          title: "01. Dasar Sistem Digital",
          icon: "fas fa-microchip",
          type: "lecture"
        },
        {
          id: "w1-app",
          title: "02. Aplikasi & Komputasi",
          icon: "fas fa-network-wired",
          type: "lecture"
        },
        {
          id: "w1-numsys",
          title: "03. Sistem Bilangan & Bit",
          icon: "fas fa-binary",
          type: "lecture"
        },
        {
          id: "w1-converter",
          title: "04. Simulator Biner Sentral",
          icon: "fas fa-project-diagram",
          type: "simulator"
        },
        {
          id: "w1-bitboard",
          title: "05. Papan Register Bit",
          icon: "fas fa-toggle-on",
          type: "bitboard"
        },
        {
          id: "w1-quiz",
          title: "06. Latihan & Kuis Interaktif",
          icon: "fas fa-award",
          type: "quiz"
        }
      ]
    },
    {
      week: 2,
      title: "Representasi Bilangan Negatif & Aritmatika Biner",
      date: "01 September 2025",
      badge: "Arithmetic",
      summary: "Mempelajari representasi bilangan negatif: Sign-Magnitude, 1's Complement, dan 2's Complement. Operasi pengurangan via penjumlahan C2, deteksi overflow, dan sign extension.",
      cpmk: "Mampu mengidentifikasi representasi bilangan negatif serta melakukan operasi aritmatika biner dan deteksi overflow [CPMK-2].",
      submenus: [
        {
          id: "w2-neg-rep",
          title: "01. Skema Bilangan Negatif",
          icon: "fas fa-plus-minus",
          type: "lecture"
        },
        {
          id: "w2-c2-arithmetic",
          title: "02. Aritmatika C2 & Overflow",
          icon: "fas fa-calculator",
          type: "lecture"
        },
        {
          id: "w2-c2-converter",
          title: "03. Simulator 2's Complement",
          icon: "fas fa-exchange-alt",
          type: "c2_simulator"
        },
        {
          id: "w2-quiz",
          title: "04. Latihan Soal Pertemuan 2",
          icon: "fas fa-tasks",
          type: "quiz_w2"
        }
      ]
    },
    {
      week: 3,
      title: "Aljabar Boolean, Gerbang Logika & Bentuk SOP/POS",
      date: "08 September 2025",
      badge: "Logic Core",
      summary: "Mempelajari Aljabar Boolean, 7 gerbang logika & tabel kebenaran, hukum & teorema lengkap, prioritas operator, representasi standar SOP (Minterm) & POS (Maxterm), serta analisis dan penyederhanaan rangkaian logika kombinasi.",
      cpmk: "Mahasiswa mampu menjelaskan dan memodelkan konsep dasar Aljabar Boolean untuk menganalisis, menyederhanakan, serta merancang rangkaian logika kombinasi sederhana menggunakan teorema/hukum Boolean [Sub-CPMK Pertemuan 3 ITERA].",
      submenus: [
        {
          id: "w3-gates",
          title: "01. Gerbang Logika & Prioritas",
          icon: "fas fa-shapes",
          type: "lecture"
        },
        {
          id: "w3-laws",
          title: "02. Hukum & Teorema Boolean",
          icon: "fas fa-balance-scale",
          type: "lecture"
        },
        {
          id: "w3-soppos",
          title: "03. Bentuk SOP & POS (Minterm/Maxterm)",
          icon: "fas fa-table",
          type: "lecture"
        },
        {
          id: "w3-simulator",
          title: "04. Simulator Tabel Kebenaran & Sirkuit",
          icon: "fas fa-microchip",
          type: "w3_simulator"
        },
        {
          id: "w3-exercises",
          title: "05. Pembahasan Soal Latihan 1 - 4",
          icon: "fas fa-pencil-ruler",
          type: "w3_exercises"
        },
        {
          id: "w3-quiz",
          title: "06. Evaluasi & Kuis Mandiri M3",
          icon: "fas fa-award",
          type: "w3_quiz"
        }
      ]
    },
    {
      week: 4,
      title: "Penyederhanaan Logika dengan Karnaugh Map (K-Map)",
      date: "15 September 2025",
      badge: "K-Map",
      summary: "Konsep dasar Peta Karnaugh (K-Map), kode Gray, aturan pengelompokan pangkat dua, K-Map 2, 3, dan 4 variabel, kondisi Don't Care (X), serta studi kasus sistem keamanan gedung dan gerbang parkir otomatis.",
      cpmk: "Mahasiswa mampu menjelaskan dan memodelkan konsep dasar Aljabar Boolean untuk menganalisis, menyederhanakan, serta merancang rangkaian logika kombinasi sederhana menggunakan teorema/hukum Boolean dan Karnaugh Map [Sub-CPMK Pertemuan 4 ITERA].",
      submenus: [
        {
          id: "w4-concepts",
          title: "01. Konsep & Aturan K-Map",
          icon: "fas fa-th-large",
          type: "lecture"
        },
        {
          id: "w4-kmap234",
          title: "02. K-Map 2, 3 & 4 Variabel",
          icon: "fas fa-cubes",
          type: "lecture"
        },
        {
          id: "w4-cases",
          title: "03. Studi Kasus Sensor Nyata",
          icon: "fas fa-building",
          type: "lecture"
        },
        {
          id: "w4-simulator",
          title: "04. Simulator Peta Karnaugh Interaktif",
          icon: "fas fa-chess-board",
          type: "w4_simulator"
        },
        {
          id: "w4-exercises",
          title: "05. Pembahasan Latihan Slide 11-12 & 18",
          icon: "fas fa-pencil-ruler",
          type: "w4_exercises"
        },
        {
          id: "w4-quiz",
          title: "06. Evaluasi & Kuis Mandiri M4",
          icon: "fas fa-award",
          type: "w4_quiz"
        }
      ]
    },
    {
      week: 5,
      title: "Rangkaian Kombinasional Aritmatika: Adder & Subtractor",
      date: "22 September 2025",
      badge: "Arithmetic",
      summary: "Memahami dan merancang blok dasar aritmatika digital ALU: Half Adder, Full Adder, Ripple Carry Adder (RCA), Carry Lookahead Adder (CLA), Half Subtractor, Full Subtractor, dan unit Adder-Subtractor Terintegrasi 4-Bit dengan kontrol Mode M.",
      cpmk: "Mampu memahami dan merancang rangkaian adder dan subtractors [Sub-CPMK Aritmatika Digital ITERA - Dosen Pengampu: Dr. Swadexi Istiqphara, S.T., M.T.].",
      submenus: [
        {
          id: "w5-adders",
          title: "01. Rangkaian Adder (HA, FA, RCA)",
          icon: "fas fa-plus-circle",
          type: "lecture"
        },
        {
          id: "w5-cla",
          title: "02. Carry Lookahead Adder (CLA)",
          icon: "fas fa-bolt",
          type: "lecture"
        },
        {
          id: "w5-subtractors",
          title: "03. Subtractor & Unit Terintegrasi",
          icon: "fas fa-minus-circle",
          type: "lecture"
        },
        {
          id: "w5-simulator",
          title: "04. Simulator Interaktif Adder/Subtractor",
          icon: "fas fa-microchip",
          type: "w5_simulator"
        },
        {
          id: "w5-exercises",
          title: "05. Pembahasan Kasus Slide 33 & Soal",
          icon: "fas fa-pencil-ruler",
          type: "w5_exercises"
        },
        {
          id: "w5-quiz",
          title: "06. Evaluasi & Kuis Mandiri M5",
          icon: "fas fa-award",
          type: "w5_quiz"
        }
      ]
    },
    {
      week: 6,
      title: "Multilevel NAND, NOR, dan Multiplexer",
      date: "29 September 2025",
      badge: "Universal & MUX",
      summary: "Implementasi fungsi logika dengan gerbang universal NAND & NOR, rangkaian bertingkat (multilevel), hukum De Morgan, serta prinsip dan perancangan Multiplexer (MUX 2:1, 4:1, 8:1) sebagai data selector.",
      cpmk: "1. Mampu memahami implementasi rangkaian multilevel NAND & NOR. 2. Mampu menjelaskan prinsip multiplexer (MUX). 3. Mampu mendesain rangkaian menggunakan kombinasi NAND/NOR/MUX [Sub-CPMK Pertemuan 6 ITERA - Dr. Swadexi Istiqphara, S.T., M.T.].",
      submenus: [
        {
          id: "w6-universal-multilevel",
          title: "01. Gerbang Universal & Multilevel NAND/NOR",
          icon: "fas fa-network-wired",
          type: "lecture"
        },
        {
          id: "w6-mux",
          title: "02. Multiplexer (MUX 2:1, 4:1, 8:1)",
          icon: "fas fa-random",
          type: "lecture"
        },
        {
          id: "w6-simulator",
          title: "03. Simulator Interaktif MUX & Universal",
          icon: "fas fa-microchip",
          type: "w6_simulator"
        },
        {
          id: "w6-exercises",
          title: "04. Pembahasan Latihan 1-5 (Slide 15-16)",
          icon: "fas fa-pencil-ruler",
          type: "w6_exercises"
        },
        {
          id: "w6-quiz",
          title: "05. Evaluasi & Kuis Mandiri M6",
          icon: "fas fa-award",
          type: "w6_quiz"
        }
      ]
    },
    {
      week: 7,
      title: "Decoder, Encoder, dan BCD ke 7-Segment",
      date: "06 Oktober 2025",
      badge: "Decoder & Display",
      summary: "Memahami prinsip dan perancangan Decoder (1:2, 2:4 dengan Enable, 3:8, IC 74138), rangkaian Encoder & Priority Encoder (74LS148), aplikasi scanner keypad dan pengalamatan memori CPU, serta kendali LED 7-Segment Common Anode dan Common Cathode berbasis kode BCD 8421.",
      cpmk: "1. Mahasiswa mampu memahami dan mengimplementasikan rangkaian decoder dan encoder. 2. Mahasiswa mampu mendesain rangkaian BCD ke 7-segment. 3. Mahasiswa mampu menganalisis tabel kebenaran dan output visualnya [Sub-CPMK Pertemuan 7 ITERA - Dr. Swadexi Istiqphara, S.T., M.T.].",
      submenus: [
        {
          id: "w7-decoder",
          title: "01. Rangkaian Decoder & IC 74138",
          icon: "fas fa-project-diagram",
          type: "lecture"
        },
        {
          id: "w7-encoder",
          title: "02. Rangkaian Encoder & Priority",
          icon: "fas fa-sort-numeric-down",
          type: "lecture"
        },
        {
          id: "w7-sevenseg",
          title: "03. Display 7-Segment & BCD 8421",
          icon: "fas fa-calculator",
          type: "lecture"
        },
        {
          id: "w7-simulator",
          title: "04. Simulator Decoder, Encoder & 7-Seg",
          icon: "fas fa-microchip",
          type: "w7_simulator"
        },
        {
          id: "w7-quiz",
          title: "05. Evaluasi & Kuis Mandiri M7",
          icon: "fas fa-award",
          type: "w7_quiz"
        }
      ]
    },
    {
      week: 8,
      title: "Evaluasi Tengah Semester (UTS)",
      date: "13 Oktober 2025",
      badge: "Exam",
      summary: "Ujian Tengah Semester menguji pemahaman Minggu 1 hingga 7: Sistem bilangan, Aljabar Boolean, Gerbang Universal, K-Map, dan Rangkaian Kombinasional.",
      cpmk: "Evaluasi komprehensif CPMK 1 s.d. CPMK 3.",
      submenus: [
        { id: "w8-review", title: "01. Review Materi UTS 1-7", icon: "fas fa-book-open", type: "roadmap" },
        { id: "w8-simulation", title: "02. Simulasi Ujian Mandiri", icon: "fas fa-file-alt", type: "roadmap" }
      ]
    },
    {
      week: 9,
      title: "Rangkaian Sekuensial: Latch & Flip-Flop",
      date: "20 Oktober 2025",
      badge: "Sequential",
      summary: "Elemen memori bistabil: SR Latch, Gated Latch, D Flip-Flop (Edge-Triggered), JK Flip-Flop, T Flip-Flop, Timing Diagram & Metastabilitas.",
      cpmk: "Mampu menjelaskan mekanisme kerja pemicuan tepi (clocking) dan karakteristik elemen penyimpan data 1-bit.",
      submenus: [
        { id: "w9-latches", title: "01. SR & D Latch", icon: "fas fa-memory", type: "roadmap" },
        { id: "w9-flipflops", title: "02. JK & T Edge-Triggered FF", icon: "fas fa-wave-square", type: "roadmap" }
      ]
    },
    {
      week: 10,
      title: "Register & Shift Register (SISO, SIPO, PISO, PIPO)",
      date: "27 Oktober 2025",
      badge: "Registers",
      summary: "Penyimpanan multi-bit, transfer data serial dan paralel, Universal Shift Register, Ring Counter, dan Johnson Counter.",
      cpmk: "Mampu merancang modul transfer dan geser data bit untuk komunikasi digital.",
      submenus: [
        { id: "w10-reg", title: "01. Struktur Register Paralel", icon: "fas fa-server", type: "roadmap" },
        { id: "w10-shift", title: "02. Konfigurasi Shift Register", icon: "fas fa-arrows-alt-h", type: "roadmap" }
      ]
    },
    {
      week: 11,
      title: "Pencacah Biner: Counter Asinkron & Sinkron",
      date: "03 November 2025",
      badge: "Counters",
      summary: "Ripple Counter (Asinkron), Synchronous Up/Down Counter, Modulo-N Counter (Mod-6, Mod-10 / BCD Decade Counter), dan analisis propagasi delay.",
      cpmk: "Mampu mendesain pencacah biner sinkron dengan sembarang urutan urut cacah.",
      submenus: [
        { id: "w11-async", title: "01. Ripple Counter (Asinkron)", icon: "fas fa-sort-numeric-up", type: "roadmap" },
        { id: "w11-sync", title: "02. Desain Synchronous Counter", icon: "fas fa-stopwatch", type: "roadmap" }
      ]
    },
    {
      week: 12,
      title: "Desain Finite State Machine (FSM: Mealy & Moore)",
      date: "10 November 2025",
      badge: "FSM",
      summary: "Pemodelan sistem berurut: State Diagram, State Table, State Reduction, State Assignment, implementasi rangkaian FSM mesin Mealy vs Moore.",
      cpmk: "Mampu memodelkan dan mengimplementasikan sistem kendali logika sekuensial berbasis FSM.",
      submenus: [
        { id: "w12-fsm-model", title: "01. Mesin Mealy vs Moore", icon: "fas fa-project-diagram", type: "roadmap" },
        { id: "w12-fsm-design", title: "02. Prosedur Desain FSM Lengkap", icon: "fas fa-cogs", type: "roadmap" }
      ]
    },
    {
      week: 13,
      title: "Arsitektur Memori (RAM, ROM) & Programmable Logic (PLD/FPGA)",
      date: "17 November 2025",
      badge: "Memory",
      summary: "Hierarki memori digital, Static RAM (SRAM), Dynamic RAM (DRAM), ROM/PROM/EEPROM, serta pengantar Programmable Logic Device (PLA, PAL, CPLD, FPGA).",
      cpmk: "Mampu menjelaskan organisasi modul memori dan teknologi perangkat keras logika terprogram.",
      submenus: [
        { id: "w13-memory", title: "01. Organisasi Memori RAM & ROM", icon: "fas fa-database", type: "roadmap" },
        { id: "w13-fpga", title: "02. Pengantar CPLD & FPGA", icon: "fas fa-microchip", type: "roadmap" }
      ]
    },
    {
      week: 14,
      title: "Integrasi Sistem Digital, Mini Proyek & Persiapan UAS",
      date: "24 November 2025",
      badge: "Capstone",
      summary: "Studi kasus integrasi perancangan sistem digital lengkap: Sistem Lampu Lalu Lintas berbasis FSM, Stopwatch Digital dengan Counter & 7-Segment, dan tinjauan persiapan UAS.",
      cpmk: "Mampu mengintegrasikan blok-blok sistem kombinasional dan sekuensial menjadi sistem fungsional utuh.",
      submenus: [
        { id: "w14-project", title: "01. Studi Kasus Mini Proyek", icon: "fas fa-laptop-code", type: "roadmap" },
        { id: "w14-review", title: "02. Rangkuman & Pembahasan UAS", icon: "fas fa-graduation-cap", type: "roadmap" }
      ]
    }
  ]
};

/**
 * TEKS MATERI DETAIL MINGGU 1 (Berdasarkan Slide ITERA & Rujukan Buku Teks)
 */
const WEEK1_CONTENT = {
  intro: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 01 / Sub-Materi 01</span>
        <h2>Dasar-Dasar Sistem Digital</h2>
        <p class="subtitle">Memahami perbedaan fundamental antara alam analog dan arsitektur diskrit digital.</p>
      </div>

      <div class="glass-callout mb-4">
        <div class="callout-icon"><i class="fas fa-quote-left"></i></div>
        <div class="callout-body">
          <h4>Definisi Sistem Digital</h4>
          <p><strong>Sistem Digital</strong> adalah suatu sistem rekayasa yang bekerja dengan memanipulasi dan memproses data dalam bentuk simbol diskrit, terutama angka biner (<strong>0</strong> dan <strong>1</strong>). Sistem ini dirancang untuk pengolahan informasi berkecepatan tinggi dengan tingkat presisi dan akurasi yang absolut.</p>
        </div>
      </div>

      <div class="grid-3-cards mb-4">
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-fingerprint"></i></div>
          <h3>Sifat Diskrit (Discrete Nature)</h3>
          <p>Berbeda dengan besaran alamiah yang berubah secara kontinu, sistem digital merepresentasikan informasi dalam tingkatan diskrit terputus. Hal ini membuat komputasi digital bebas dari akumulasi noise tegangan kecil.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-shield-alt"></i></div>
          <h3>Keandalan Tinggi (Reliability)</h3>
          <p>Sistem digital sangat andal karena sinyal hanya perlu dibedakan antara dua keadaan: <em>HIGH</em> (ada tegangan, mewakili 1) dan <em>LOW</em> (tanpa tegangan/ground, mewakili 0), meminimalisir kesalahan akibat gangguan elektromagnetik luar.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-microchip"></i></div>
          <h3>Kemudahan Pemrosesan & Simpan</h3>
          <p>Data biner dapat disimpan dengan mudah dalam elemen memori bistabil (seperti flip-flop atau sel memori semikonduktor) dan direproduksi berulang kali tanpa mengalami degradasi kualitas data.</p>
        </div>
      </div>

      <h3 class="section-title"><i class="fas fa-balance-scale"></i> Komparasi Menyeluruh: Sistem Analog vs. Sistem Digital</h3>
      <div class="table-responsive mb-4">
        <table class="luxury-table">
          <thead>
            <tr>
              <th>Parameter Pembanding</th>
              <th>Sistem Analog</th>
              <th>Sistem Digital</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Bentuk Sinyal</strong></td>
              <td>Kontinu (sinusoidal, variasi tegangan/arus kontinu terhadap waktu)</td>
              <td>Diskrit (pulsa biner persegi: tingkat logika 0 atau 1)</td>
            </tr>
            <tr>
              <td><strong>Prinsip Kerja</strong></td>
              <td>Memproses sinyal langsung menyerupai bentuk gelombang aslinya (misal: gelombang suara mikrofon)</td>
              <td>Mengubah informasi analog menjadi kode biner melalui <em>ADC (Analog-to-Digital Converter)</em></td>
            </tr>
            <tr>
              <td><strong>Ketahanan Derau (Noise)</strong></td>
              <td>Rentan derau; sedikit gangguan tegangan mengubah makna informasi asli</td>
              <td>Sangat tahan derau; toleransi threshold tegangan menjaga logika tetap stabil</td>
            </tr>
            <tr>
              <td><strong>Akurasi & Presisi</strong></td>
              <td>Terbatas oleh toleransi komponen resistor, kapasitor, dan suhu sekitar</td>
              <td>Tinggi; presisi dapat ditingkatkan dengan menambah lebar bit data prosesor</td>
            </tr>
            <tr>
              <td><strong>Penyimpanan & Transmisi</strong></td>
              <td>Sulit disimpan lama tanpa degradasi kualitas (pita kaset, piringan hitam)</td>
              <td>Mudah disimpan di SSD/Flash, transmisi global tanpa distorsi data sedikitpun</td>
            </tr>
            <tr>
              <td><strong>Contoh Perangkat</strong></td>
              <td>Radio FM jadul, termometer raksa, amplifier tabung kuno</td>
              <td>Smartphone, Komputer, Smart TV, Sensor IoT, Mobil Listrik modern</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="academic-note">
        <i class="fas fa-graduation-cap"></i>
        <span><strong>Referensi Resmi Perkuliahan:</strong> Dr. Swadexi Istiqphara, S.T., M.T. – Materi Perkuliahan Sistem Digital ITERA 2025. Download Rujukan Textbook: <em>Buku Sistem Digital for TI (INF203 - UPJ)</em>.</span>
      </div>
    </div>
  `,

  app: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 01 / Sub-Materi 02</span>
        <h2>Aplikasi Sistem Digital & Dampak Komputasi Modern</h2>
        <p class="subtitle">Bagaimana representasi biner menggerakkan revolusi teknologi dunia, otomasi cerdas, dan Artificial Intelligence.</p>
      </div>

      <div class="grid-2-cols mb-4">
        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-home"></i>
            <h3>1. Otomasi Rumah & Gedung Pintar (Smart Home)</h3>
          </div>
          <ul class="luxury-list">
            <li><strong>Kendali Jarak Jauh:</strong> Sistem otomatisasi lampu pintar dan termostat dikendalikan melalui mikrokontroler biner via aplikasi ponsel cerdas.</li>
            <li><strong>Efisiensi Energi:</strong> Pengolahan data digital dari sensor cahaya dan suhu secara presisi untuk mematikan perangkat saat ruangan kosong.</li>
            <li><strong>Keamanan Pintar:</strong> Kamera CCTV AI, sensor gerak PIR, dan kunci pintu biometrik/digital dengan verifikasi pola biner sandi secara real-time.</li>
          </ul>
        </div>

        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-satellite-dish"></i>
            <h3>2. Sistem Telekomunikasi & Konektivitas Global</h3>
          </div>
          <ul class="luxury-list">
            <li><strong>Telepon Seluler & 5G:</strong> Modulasi digital paket data (OFDM, QAM) memungkinkan streaming video 4K dan panggilan suara tanpa derau.</li>
            <li><strong>Teknologi Nirkabel:</strong> Protokol Wi-Fi 6, Bluetooth Low Energy (BLE), dan ZigBee mengirimkan miliaran frame biner tiap detik antar-perangkat.</li>
            <li><strong>Infrastruktur Internet Global:</strong> Kabel serat optik bawah laut mentransmisikan pulsa cahaya on/off biner yang menghubungkan benua dalam hitungan milidetik.</li>
          </ul>
        </div>
      </div>

      <div class="grid-2-cols mb-4">
        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-brain"></i>
            <h3>3. Peran Krusial dalam Kecerdasan Buatan (AI)</h3>
          </div>
          <ul class="luxury-list">
            <li><strong>Pengolahan Data Skala Masif:</strong> Deep Learning dan LLM bergantung pada perhitungan matriks biner presisi tinggi (FP32, FP16, Bfloat16, hingga kuantisasi INT8/INT4).</li>
            <li><strong>Algoritma Pembelajaran Cepat:</strong> Gerbang logika digital di dalam GPU/TPU melakukan ratusan triliun operasi perkalian dan akumulasi (MAC) per detik.</li>
            <li><strong>Otomasi Industri:</strong> Robotika manufaktur cerdas, kendali mobil otonom (Self-Driving Car), dan diagnosis medis menggunakan logika digital terpadu.</li>
          </ul>
        </div>

        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-tv"></i>
            <h3>4. Elektronik Konsumen & Internet of Things (IoT)</h3>
          </div>
          <ul class="luxury-list">
            <li><strong>Perangkat Pintar:</strong> Jam tangan pintar (smartwatch) memantau detak jantung (sinyal analog dari sensor PPG diubah ke biner melalui ADC terintegrasi).</li>
            <li><strong>Hiburan Digital:</strong> Smart TV resolusi tinggi, konsol game modern, dan pemrosesan audio spasial berbasis DSP (Digital Signal Processing).</li>
            <li><strong>Peralatan Rumah Tangga Cerdas:</strong> Kulkas pintar, mesin cuci inverter, dan robot vacuum cleaner terhubung ke cloud internet secara mandiri.</li>
          </ul>
        </div>
      </div>

      <div class="diagram-box">
        <h4><i class="fas fa-route"></i> Alur Pemrosesan Dunia Nyata ke Sistem Digital</h4>
        <div class="process-pipeline">
          <div class="pipe-node">
            <span class="node-tag">Dunia Fisik</span>
            <strong>Sinyal Fisik Analog</strong>
            <small>Suara, Suhu, Tekanan</small>
          </div>
          <div class="pipe-arrow"><i class="fas fa-arrow-right"></i></div>
          <div class="pipe-node">
            <span class="node-tag">Sensor / Transduser</span>
            <strong>Tegangan Kontinu</strong>
            <small>Variasi Voltase Analog</small>
          </div>
          <div class="pipe-arrow"><i class="fas fa-arrow-right"></i></div>
          <div class="pipe-node highlight">
            <span class="node-tag">ADC Unit</span>
            <strong>Stream Biner (0 & 1)</strong>
            <small>Sampling & Kuantisasi</small>
          </div>
          <div class="pipe-arrow"><i class="fas fa-arrow-right"></i></div>
          <div class="pipe-node gold">
            <span class="node-tag">Arsitektur Komputasi</span>
            <strong>CPU / ALU / GPU</strong>
            <small>Pengolahan Logika & Simpan</small>
          </div>
        </div>
      </div>
    </div>
  `,

  numsys: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 01 / Sub-Materi 03</span>
        <h2>Sistem Bilangan Digital & Hierarki Bit</h2>
        <p class="subtitle">Memahami empat pilar basis bilangan komputasi (Biner, Oktal, Desimal, Heksadesimal) dan terminologi data komputer.</p>
      </div>

      <div class="grid-4-cards mb-4">
        <div class="base-card b-bin">
          <div class="base-header">
            <span class="base-radix">Basis 2 (Radix 2)</span>
            <h3>Biner (Binary)</h3>
          </div>
          <p class="base-digits">Digit Simbol: <code>0, 1</code></p>
          <p class="base-desc">Bahasa alami perangkat keras sirkuit elektronik. Representasi fisik dari sakelar transistor: 0 = OFF (0V), 1 = ON (+Vcc).</p>
        </div>

        <div class="base-card b-oct">
          <div class="base-header">
            <span class="base-radix">Basis 8 (Radix 8)</span>
            <h3>Oktal (Octal)</h3>
          </div>
          <p class="base-digits">Digit Simbol: <code>0 s.d. 7</code></p>
          <p class="base-desc">Menyingkat deret biner panjang dengan mengelompokkan <strong>tepat 3 bit</strong> per digit octal (2<sup>3</sup> = 8). Populer pada arsitektur PDP-8 dan sistem izin file UNIX.</p>
        </div>

        <div class="base-card b-dec">
          <div class="base-header">
            <span class="base-radix">Basis 10 (Radix 10)</span>
            <h3>Desimal (Decimal)</h3>
          </div>
          <p class="base-digits">Digit Simbol: <code>0 s.d. 9</code></p>
          <p class="base-desc">Sistem bilangan konvensional manusia berbasis bobot puluhan (10<sup>n</sup>). Wajib dikonversi ke biner sebelum diolah oleh prosesor komputer.</p>
        </div>

        <div class="base-card b-hex">
          <div class="base-header">
            <span class="base-radix">Basis 16 (Radix 16)</span>
            <h3>Heksadesimal (Hex)</h3>
          </div>
          <p class="base-digits">Digit Simbol: <code>0-9, A, B, C, D, E, F</code></p>
          <p class="base-desc">Standar industri mikroprosesor modern. Menyingkat <strong>tepat 4 bit (1 Nibble)</strong> per digit hex (2<sup>4</sup> = 16). Digunakan untuk alamat RAM (0x7FFE) dan kode warna web.</p>
        </div>
      </div>

      <h3 class="section-title"><i class="fas fa-layer-group"></i> Hierarki & Ukuran Kelompok Bit dalam Komputasi</h3>
      <div class="bit-hierarchy-grid mb-4">
        <div class="hierarchy-item">
          <div class="h-badge">1 Bit</div>
          <h4>Bit (Binary Digit)</h4>
          <p>Satuan data fundamental terkecil dalam sistem digital. Hanya bernilai 0 atau 1.</p>
          <code>[ 0 ] atau [ 1 ]</code>
        </div>
        <div class="hierarchy-item">
          <div class="h-badge">4 Bit</div>
          <h4>Nibble</h4>
          <p>Kumpulan 4 bit berurutan. Tepat mewakili <strong>1 digit Heksadesimal</strong>.</p>
          <code>[ 1 0 1 0 ] = A₁₆</code>
        </div>
        <div class="hierarchy-item">
          <div class="h-badge">8 Bit</div>
          <h4>Byte</h4>
          <p>Standar dasar pengalamatan memori CPU. Terdiri dari 2 Nibble (rentang 0 - 255 unsigned).</p>
          <code>[ 1111 0000 ] = F0₁₆</code>
        </div>
        <div class="hierarchy-item">
          <div class="h-badge">16/32/64 Bit</div>
          <h4>Word</h4>
          <p>Lebar bus register data arsitektur CPU (16-bit = 2 byte, 32-bit = 4 byte, 64-bit = 8 byte).</p>
          <code>[ 2 / 4 / 8 Bytes ]</code>
        </div>
      </div>

      <div class="glass-callout mb-4">
        <h4><i class="fas fa-arrows-alt-h"></i> Posisi Signifikan Bit: MSB vs LSB</h4>
        <div class="msb-lsb-container">
          <div class="bit-cell msb">
            <span class="label">MSB (Most Significant Bit)</span>
            <span class="val">1</span>
            <small>Bobot tertinggi: 2⁷ = 128</small>
          </div>
          <div class="bit-cell"><span class="val">0</span><small>2⁶ = 64</small></div>
          <div class="bit-cell"><span class="val">1</span><small>2⁵ = 32</small></div>
          <div class="bit-cell"><span class="val">1</span><small>2⁴ = 16</small></div>
          <div class="bit-cell"><span class="val">0</span><small>2³ = 8</small></div>
          <div class="bit-cell"><span class="val">1</span><small>2² = 4</small></div>
          <div class="bit-cell"><span class="val">0</span><small>2¹ = 2</small></div>
          <div class="bit-cell lsb">
            <span class="label">LSB (Least Significant Bit)</span>
            <span class="val">1</span>
            <small>Bobot terendah: 2⁰ = 1</small>
          </div>
        </div>
        <p class="mt-2 text-muted-center">Pada bilangan pecahan, posisi sebelah kanan titik biner (<em>binary point / radix point</em>) memiliki bobot pangkat negatif: <code>2⁻¹ = 0.5</code>, <code>2⁻² = 0.25</code>, <code>2⁻³ = 0.125</code>, dst.</p>
      </div>
    </div>
  `
};

/**
 * TEKS MATERI DETAIL MINGGU 2 (Berdasarkan Slide 2 ITERA)
 */
const WEEK2_CONTENT = {
  neg_rep: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 02 / Sub-Materi 01</span>
        <h2>Skema Representasi Bilangan Negatif</h2>
        <p class="subtitle">Memahami Sign-Magnitude, 1's Complement, dan 2's Complement pada lebar data n-bit.</p>
      </div>

      <div class="glass-callout mb-4">
        <h4>Notasi & Istilah Kunci</h4>
        <p>Pada bilangan bertanda (<em>signed numbers</em>), <strong>MSB (Most Significant Bit)</strong> berfungsi sebagai <strong>Sign Bit (Bit Tanda)</strong>:</p>
        <ul class="luxury-list">
          <li><strong>MSB = 0:</strong> Menandakan bilangan bernilai <strong>Positif</strong> (+)</li>
          <li><strong>MSB = 1:</strong> Menandakan bilangan bernilai <strong>Negatif</strong> (-)</li>
        </ul>
      </div>

      <div class="grid-3-cards mb-4">
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-tag"></i></div>
          <h3>1. Sign-Magnitude (SM)</h3>
          <p>MSB bertindak sebagai tanda (+/-), dan sisa n-1 bit merupakan besar magnitudo aslinya.</p>
          <div class="code-badge-block">
            <code>+13 (8-bit) = 0000 1101</code><br>
            <code>-13 (8-bit) = 1000 1101</code>
          </div>
          <small class="text-warning">Kelemahan: Memiliki dua nilai nol (+0: 00000000 dan -0: 10000000). Sirkuit aritmatika menjadi rumit.</small>
        </div>

        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-sync-alt"></i></div>
          <h3>2. 1's Complement (C1)</h3>
          <p>Representasi negatif diperoleh dengan cara membalik (inversi/NOT) semua bit dari bentuk positifnya.</p>
          <div class="code-badge-block">
            <code>+13 (8-bit) = 0000 1101</code><br>
            <code>-13 (C1)    = 1111 0010</code>
          </div>
          <small class="text-warning">Kelemahan: Masih memiliki dua nilai nol (+0 dan -0), membutuhkan sirkuit koreksi <em>End-Around Carry</em> pada penjumlahan.</small>
        </div>

        <div class="feature-card highlighted-gold">
          <div class="feature-icon"><i class="fas fa-check-circle"></i></div>
          <h3>3. 2's Complement (C2) ★</h3>
          <p><strong>Standar industri CPU/MCU!</strong> Dihitung dengan rumus: <code>C2 = NOT(semua bit) + 1</code> pada LSB.</p>
          <div class="code-badge-block">
            <code>+13 (8-bit) = 0000 1101</code><br>
            <code>NOT         = 1111 0010</code><br>
            <code>+1          = 1111 0011 (-13)</code>
          </div>
          <small class="text-success">Keunggulan mutlak: Hanya memiliki satu nilai nol, operasi pengurangan diselesaikan langsung dengan adder!</small>
        </div>
      </div>

      <h3 class="section-title"><i class="fas fa-table"></i> Perbandingan 3 Skema Representasi (Lebar 8-Bit)</h3>
      <div class="table-responsive mb-4">
        <table class="luxury-table">
          <thead>
            <tr>
              <th>Skema</th>
              <th>Rentang Nilai (8-bit)</th>
              <th>Rumus Negatif (-X)</th>
              <th>Catatan Arsitektur Hardware</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Sign-Magnitude</strong></td>
              <td>-127 s.d. +127</td>
              <td>Ubah MSB menjadi 1</td>
              <td>Ada masalah +0 dan -0, sirkuit adder & subtractor harus dibuat terpisah</td>
            </tr>
            <tr>
              <td><strong>1's Complement</strong></td>
              <td>-127 s.d. +127</td>
              <td>NOT semua bit (1 &harr; 0)</td>
              <td>Ada masalah +0 dan -0, butuh sirkuit <em>end-around carry</em></td>
            </tr>
            <tr class="row-highlight">
              <td><strong>2's Complement</strong></td>
              <td>-128 s.d. +127</td>
              <td><code>NOT + 1</code></td>
              <td><strong>Standar Industri CPU</strong>: Hanya 1 nol, operasi A - B = A + (-B) via adder</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,

  c2_arithmetic: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 02 / Sub-Materi 02</span>
        <h2>Aritmatika C2, Pengurangan & Deteksi Overflow</h2>
        <p class="subtitle">Bagaimana CPU menyelesaikan operasi pengurangan hanya dengan gerbang penjumlah (Adder) dan mendeteksi luapan memori.</p>
      </div>

      <div class="grid-2-cols mb-4">
        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-calculator"></i>
            <h3>Pengurangan via Penjumlahan: A - B = A + (C2 dari B)</h3>
          </div>
          <p>Dalam prosesor komputer, perancang tidak perlu membuat sirkuit pengurang terpisah yang memakan luas silikon chip. Cukup menggunakan rangkaian <strong>Adder</strong> dengan mengubah suku kedua B menjadi bentuk 2's Complement.</p>
          <div class="code-box-study">
            <strong>Contoh Soal Slide: Hitung 75 - 103 (8-bit C2)</strong><br><br>
            1. Desimal 75 = 0100 1011₂<br>
            2. Desimal 103 = 0110 0111₂<br>
            3. Cari C2 dari 103:<br>
            &nbsp;&nbsp;&nbsp;NOT(103) = 1001 1000<br>
            &nbsp;&nbsp;&nbsp;+ 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 1001 1001₂ (ini adalah -103)<br>
            4. Jumlahkan:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0100 1011 (75)<br>
            &nbsp;&nbsp;&nbsp;+ &nbsp;1001 1001 (-103)<br>
            &nbsp;&nbsp;&nbsp;---------------------<br>
            &nbsp;&nbsp;&nbsp;= &nbsp;1110 0100₂<br><br>
            5. Evaluasi hasil (MSB=1, negatif):<br>
            &nbsp;&nbsp;&nbsp;Nilai desimal = -(2⁸ - U) = -(256 - 228) = <strong>-28</strong> (Tepat!)
          </div>
        </div>

        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-exclamation-triangle"></i>
            <h3>Kondisi Overflow (Luapan Nilai)</h3>
          </div>
          <p><strong>Overflow</strong> terjadi bila hasil penjumlahan aritmatika melampaui kapasitas rentang bit yang tersedia (misal 8-bit bertanda: -128 s.d. +127).</p>
          <div class="callout-sub">
            <h4>Kaidah Deteksi Overflow:</h4>
            <ul>
              <li><strong>Positif + Positif = Negatif</strong> &rarr; <span class="badge-danger">OVERFLOW!</span></li>
              <li><strong>Negatif + Negatif = Positif</strong> &rarr; <span class="badge-danger">OVERFLOW!</span></li>
              <li>Deteksi logika sirkuit hardware: <code>Overflow = (Carry ke MSB) XOR (Carry keluar MSB)</code></li>
            </ul>
          </div>
          <div class="code-box-study mt-2">
            <strong>Contoh Overflow Slide:</strong><br>
            +100 (0110 0100) + +60 (0011 1100)<br>
            = 1001 1000 (Hasil ber-MSB=1 bernilai -104).<br>
            <em>Seharusnya +160, karena +160 > +127 maka terjadi luapan (Overflow)!</em>
          </div>
        </div>
      </div>

      <div class="glass-callout">
        <h4><i class="fas fa-expand-arrows-alt"></i> Konsep Sign Extension (Ekstensi Tanda)</h4>
        <p>Bila data bertanda diperlebar dari 8-bit menjadi 16-bit atau 32-bit (misal saat <em>type casting</em> di bahasa pemrograman C/C++), aturan mutlaknya adalah: <strong>Salin nilai MSB ke semua bit baru di sebelah kiri</strong>.</p>
        <p>Contoh: -37 dalam 8-bit adalah <code>1101 1011</code> (MSB = 1). Ketika diperlebar ke 16-bit menjadi <code>1111 1111 1101 1011</code>.</p>
      </div>
    </div>
  `
};

/**
 * TEKS MATERI DETAIL MINGGU 3 (Berdasarkan Slide Pertemuan 3 ITERA)
 * Dosen: Dr. Swadexi Istiqphara, S.T., M.T., Efa Maydhona, S.T., M.T., Nia Saputri Utami, S.T., M.T.
 */
const WEEK3_CONTENT = {
  gates: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 03 / Sub-Materi 01</span>
        <h2>Gerbang Logika Dasar & Operator Aljabar Boolean</h2>
        <p class="subtitle">Memahami variabel Boolean, operator fundamental (AND, OR, NOT), urutan prioritas operasi, dan 7 gerbang logika standar.</p>
      </div>

      <!-- Info Akademik & Sub-CPMK ITERA -->
      <div class="glass-callout mb-4">
        <div class="callout-icon"><i class="fas fa-bullseye text-primary"></i></div>
        <div class="callout-body">
          <h4>Sub-CPMK & Indikator Keberhasilan (Slide 3)</h4>
          <p><strong>Sub-CPMK:</strong> Mahasiswa mampu menjelaskan dan memodelkan konsep dasar Aljabar Boolean untuk menganalisis, menyederhanakan, serta merancang rangkaian logika kombinasi sederhana menggunakan teorema/hukum Boolean.</p>
          <ul class="luxury-list mt-2">
            <li>Menjelaskan variabel Boolean, operator dasar (AND, OR, NOT), dan hukumnya dengan contoh yang benar (&ge; 80% ketepatan konsep).</li>
            <li>Menyusun tabel kebenaran dari sebuah ekspresi logika atau rangkaian hingga 4 variabel tanpa kesalahan baris.</li>
            <li>Menyederhanakan ekspresi menggunakan hukum Boolean.</li>
          </ul>
          <div class="team-lecturers mt-3">
            <span class="pill-tag"><i class="fas fa-user-friends"></i> Tim Dosen: Dr. Swadexi Istiqphara, S.T., M.T. • Efa Maydhona, S.T., M.T. • Nia Saputri Utami, S.T., M.T.</span>
            <span class="pill-tag"><i class="fas fa-book"></i> Ref: Brown & Vranesic (2009) & D. Givone (2002)</span>
          </div>
        </div>
      </div>

      <!-- Konsep Dasar Variabel & Operator -->
      <div class="grid-3-cards mb-4">
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-toggle-on"></i></div>
          <h3>1. Variabel & Domain Boolean</h3>
          <p>Variabel Boolean hanya memiliki dua kemungkinan nilai biner: <strong>0</strong> (False / LOW / 0 Volt) atau <strong>1</strong> (True / HIGH / +5 Volt). Variabel dinotasikan dengan huruf alfabet (A, B, C, X, Y, Z).</p>
          <div class="code-badge-block">Domain B = { 0, 1 }</div>
        </div>

        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-asterisk"></i></div>
          <h3>2. Simbol Operator Baku (Slide 6)</h3>
          <p>Tiga operator logika fundamental dalam matematika diskrit dan rangkaian elektronika:</p>
          <ul class="luxury-list mt-2">
            <li><strong>AND:</strong> Simbol titik <code>( · )</code> &rarr; contoh: <code>A · B</code> atau disingkat <code>AB</code></li>
            <li><strong>OR:</strong> Simbol tambah <code>( + )</code> &rarr; contoh: <code>A + B</code></li>
            <li><strong>NOT:</strong> Garis atas <code>( Ā )</code> atau petik <code>( A' )</code> &rarr; contoh: <code>Ā</code>, <code>(A + B)̄</code>, atau <code>A'</code></li>
          </ul>
        </div>

        <div class="feature-card highlighted-gold">
          <div class="feature-icon"><i class="fas fa-sort-amount-down-alt"></i></div>
          <h3>3. Prioritas Operasi (Slide 8)</h3>
          <p>Bila tidak terdapat tanda kurung, urutan eksekusi Aljabar Boolean wajib mengikuti hierarki ketat:</p>
          <div class="callout-sub" style="margin: 8px 0; background: rgba(245, 175, 25, 0.08); border-color: rgba(245, 175, 25, 0.3);">
            <ol style="padding-left: 20px; font-weight: 600; color: #fff;">
              <li>Tanda Kurung <code>( ... )</code> &rarr; Dikerjakan terdepan!</li>
              <li>Operator <strong>NOT</strong> (Inversi komplemen)</li>
              <li>Operator <strong>AND</strong> (Perkalian logika)</li>
              <li>Operator <strong>OR</strong> (Penjumlahan logika)</li>
            </ol>
          </div>
          <small class="text-warning"><strong>Contoh Slide 8:</strong> Pada ekspresi <code>AB + Ā B̄</code>, cari NOT dari A dan B terlebih dahulu, kemudian kalikan AND, baru dijumlahkan dengan OR.</small>
        </div>
      </div>

      <!-- 7 Gerbang Logika Lengkap Interaktif (Slide 5) -->
      <h3 class="section-title"><i class="fas fa-project-diagram"></i> 7 Gerbang Logika Standar (Slide 5 ITERA) & Simulator Interaktif</h3>
      <p class="subtitle mb-3">Klik tombol input [0] atau [1] pada masing-masing gerbang di bawah ini untuk melihat perubahan sinyal output secara langsung (real-time):</p>

      <div class="gates-interactive-grid mb-4" id="gatesInteractiveGrid">
        
        <!-- NOT GATE -->
        <div class="gate-card" data-gate="NOT">
          <div class="gate-card-header">
            <span class="gate-badge">Inverter</span>
            <h4>Gerbang NOT</h4>
          </div>
          <div class="gate-formula">F = Ā &nbsp; (atau A')</div>
          <div class="gate-interactive-stage">
            <div class="gate-io-row">
              <span class="io-label">Input A:</span>
              <button class="gate-toggle-btn active" data-gate-target="NOT" data-pin="A" data-val="0">0</button>
              <button class="gate-toggle-btn" data-gate-target="NOT" data-pin="A" data-val="1">1</button>
            </div>
            <div class="gate-symbol-visual">
              <svg width="120" height="50" viewBox="0 0 120 50">
                <line x1="10" y1="25" x2="35" y2="25" stroke="#00d2ff" stroke-width="2.5"/>
                <polygon points="35,10 75,25 35,40" fill="rgba(0,210,255,0.15)" stroke="#00d2ff" stroke-width="2"/>
                <circle cx="80" cy="25" r="4.5" fill="#0b1120" stroke="#00d2ff" stroke-width="2"/>
                <line x1="85" y1="25" x2="110" y2="25" stroke="#00d2ff" stroke-width="2.5"/>
              </svg>
            </div>
            <div class="gate-output-display">
              <span class="out-label">Output F:</span>
              <span class="led-indicator active" id="led-NOT">1</span>
            </div>
          </div>
          <table class="mini-truth-table">
            <thead><tr><th>Input I</th><th>Output F</th></tr></thead>
            <tbody>
              <tr class="active-row" id="row-NOT-0"><td>0</td><td><strong>1</strong></td></tr>
              <tr id="row-NOT-1"><td>1</td><td><strong>0</strong></td></tr>
            </tbody>
          </table>
        </div>

        <!-- AND GATE -->
        <div class="gate-card" data-gate="AND">
          <div class="gate-card-header">
            <span class="gate-badge">Konjungsi</span>
            <h4>Gerbang AND</h4>
          </div>
          <div class="gate-formula">F = A · B &nbsp; (atau AB)</div>
          <div class="gate-interactive-stage">
            <div class="gate-io-row">
              <span class="io-label">A:</span>
              <button class="gate-toggle-btn active" data-gate-target="AND" data-pin="A" data-val="0">0</button>
              <button class="gate-toggle-btn" data-gate-target="AND" data-pin="A" data-val="1">1</button>
              <span class="io-label" style="margin-left: 8px;">B:</span>
              <button class="gate-toggle-btn active" data-gate-target="AND" data-pin="B" data-val="0">0</button>
              <button class="gate-toggle-btn" data-gate-target="AND" data-pin="B" data-val="1">1</button>
            </div>
            <div class="gate-symbol-visual">
              <svg width="120" height="50" viewBox="0 0 120 50">
                <line x1="10" y1="17" x2="40" y2="17" stroke="#00d2ff" stroke-width="2"/>
                <line x1="10" y1="33" x2="40" y2="33" stroke="#00d2ff" stroke-width="2"/>
                <path d="M 40 10 L 60 10 A 15 15 0 0 1 60 40 L 40 40 Z" fill="rgba(0,210,255,0.15)" stroke="#00d2ff" stroke-width="2"/>
                <line x1="75" y1="25" x2="110" y2="25" stroke="#00d2ff" stroke-width="2.5"/>
              </svg>
            </div>
            <div class="gate-output-display">
              <span class="out-label">Output F:</span>
              <span class="led-indicator" id="led-AND">0</span>
            </div>
          </div>
          <table class="mini-truth-table">
            <thead><tr><th>A</th><th>B</th><th>F</th></tr></thead>
            <tbody>
              <tr class="active-row" id="row-AND-00"><td>0</td><td>0</td><td>0</td></tr>
              <tr id="row-AND-10"><td>1</td><td>0</td><td>0</td></tr>
              <tr id="row-AND-01"><td>0</td><td>1</td><td>0</td></tr>
              <tr id="row-AND-11"><td>1</td><td>1</td><td><strong>1</strong></td></tr>
            </tbody>
          </table>
        </div>

        <!-- OR GATE -->
        <div class="gate-card" data-gate="OR">
          <div class="gate-card-header">
            <span class="gate-badge">Disjungsi</span>
            <h4>Gerbang OR</h4>
          </div>
          <div class="gate-formula">F = A + B</div>
          <div class="gate-interactive-stage">
            <div class="gate-io-row">
              <span class="io-label">A:</span>
              <button class="gate-toggle-btn active" data-gate-target="OR" data-pin="A" data-val="0">0</button>
              <button class="gate-toggle-btn" data-gate-target="OR" data-pin="A" data-val="1">1</button>
              <span class="io-label" style="margin-left: 8px;">B:</span>
              <button class="gate-toggle-btn active" data-gate-target="OR" data-pin="B" data-val="0">0</button>
              <button class="gate-toggle-btn" data-gate-target="OR" data-pin="B" data-val="1">1</button>
            </div>
            <div class="gate-symbol-visual">
              <svg width="120" height="50" viewBox="0 0 120 50">
                <line x1="10" y1="17" x2="42" y2="17" stroke="#00d2ff" stroke-width="2"/>
                <line x1="10" y1="33" x2="42" y2="33" stroke="#00d2ff" stroke-width="2"/>
                <path d="M 38 10 Q 55 25 38 40 Q 62 40 75 25 Q 62 10 38 10 Z" fill="rgba(0,210,255,0.15)" stroke="#00d2ff" stroke-width="2"/>
                <line x1="75" y1="25" x2="110" y2="25" stroke="#00d2ff" stroke-width="2.5"/>
              </svg>
            </div>
            <div class="gate-output-display">
              <span class="out-label">Output F:</span>
              <span class="led-indicator" id="led-OR">0</span>
            </div>
          </div>
          <table class="mini-truth-table">
            <thead><tr><th>A</th><th>B</th><th>F</th></tr></thead>
            <tbody>
              <tr class="active-row" id="row-OR-00"><td>0</td><td>0</td><td>0</td></tr>
              <tr id="row-OR-10"><td>1</td><td>0</td><td><strong>1</strong></td></tr>
              <tr id="row-OR-01"><td>0</td><td>1</td><td><strong>1</strong></td></tr>
              <tr id="row-OR-11"><td>1</td><td>1</td><td><strong>1</strong></td></tr>
            </tbody>
          </table>
        </div>

        <!-- NAND GATE -->
        <div class="gate-card" data-gate="NAND">
          <div class="gate-card-header">
            <span class="gate-badge" style="background: rgba(245,175,25,0.2); color: var(--accent-gold);">Universal</span>
            <h4>Gerbang NAND</h4>
          </div>
          <div class="gate-formula">F = (A · B)̄ &nbsp; (atau (AB)')</div>
          <div class="gate-interactive-stage">
            <div class="gate-io-row">
              <span class="io-label">A:</span>
              <button class="gate-toggle-btn active" data-gate-target="NAND" data-pin="A" data-val="0">0</button>
              <button class="gate-toggle-btn" data-gate-target="NAND" data-pin="A" data-val="1">1</button>
              <span class="io-label" style="margin-left: 8px;">B:</span>
              <button class="gate-toggle-btn active" data-gate-target="NAND" data-pin="B" data-val="0">0</button>
              <button class="gate-toggle-btn" data-gate-target="NAND" data-pin="B" data-val="1">1</button>
            </div>
            <div class="gate-symbol-visual">
              <svg width="120" height="50" viewBox="0 0 120 50">
                <line x1="10" y1="17" x2="38" y2="17" stroke="#f5af19" stroke-width="2"/>
                <line x1="10" y1="33" x2="38" y2="33" stroke="#f5af19" stroke-width="2"/>
                <path d="M 38 10 L 58 10 A 15 15 0 0 1 58 40 L 38 40 Z" fill="rgba(245,175,25,0.15)" stroke="#f5af19" stroke-width="2"/>
                <circle cx="77" cy="25" r="4" fill="#0b1120" stroke="#f5af19" stroke-width="2"/>
                <line x1="81" y1="25" x2="110" y2="25" stroke="#f5af19" stroke-width="2.5"/>
              </svg>
            </div>
            <div class="gate-output-display">
              <span class="out-label">Output F:</span>
              <span class="led-indicator active" id="led-NAND">1</span>
            </div>
          </div>
          <table class="mini-truth-table">
            <thead><tr><th>A</th><th>B</th><th>F</th></tr></thead>
            <tbody>
              <tr class="active-row" id="row-NAND-00"><td>0</td><td>0</td><td><strong>1</strong></td></tr>
              <tr id="row-NAND-10"><td>1</td><td>0</td><td><strong>1</strong></td></tr>
              <tr id="row-NAND-01"><td>0</td><td>1</td><td><strong>1</strong></td></tr>
              <tr id="row-NAND-11"><td>1</td><td>1</td><td>0</td></tr>
            </tbody>
          </table>
        </div>

        <!-- NOR GATE -->
        <div class="gate-card" data-gate="NOR">
          <div class="gate-card-header">
            <span class="gate-badge" style="background: rgba(245,175,25,0.2); color: var(--accent-gold);">Universal</span>
            <h4>Gerbang NOR</h4>
          </div>
          <div class="gate-formula">F = (A + B)̄ &nbsp; (atau (A+B)')</div>
          <div class="gate-interactive-stage">
            <div class="gate-io-row">
              <span class="io-label">A:</span>
              <button class="gate-toggle-btn active" data-gate-target="NOR" data-pin="A" data-val="0">0</button>
              <button class="gate-toggle-btn" data-gate-target="NOR" data-pin="A" data-val="1">1</button>
              <span class="io-label" style="margin-left: 8px;">B:</span>
              <button class="gate-toggle-btn active" data-gate-target="NOR" data-pin="B" data-val="0">0</button>
              <button class="gate-toggle-btn" data-gate-target="NOR" data-pin="B" data-val="1">1</button>
            </div>
            <div class="gate-symbol-visual">
              <svg width="120" height="50" viewBox="0 0 120 50">
                <line x1="10" y1="17" x2="38" y2="17" stroke="#f5af19" stroke-width="2"/>
                <line x1="10" y1="33" x2="38" y2="33" stroke="#f5af19" stroke-width="2"/>
                <path d="M 35 10 Q 52 25 35 40 Q 58 40 70 25 Q 58 10 35 10 Z" fill="rgba(245,175,25,0.15)" stroke="#f5af19" stroke-width="2"/>
                <circle cx="74" cy="25" r="4" fill="#0b1120" stroke="#f5af19" stroke-width="2"/>
                <line x1="78" y1="25" x2="110" y2="25" stroke="#f5af19" stroke-width="2.5"/>
              </svg>
            </div>
            <div class="gate-output-display">
              <span class="out-label">Output F:</span>
              <span class="led-indicator active" id="led-NOR">1</span>
            </div>
          </div>
          <table class="mini-truth-table">
            <thead><tr><th>A</th><th>B</th><th>F</th></tr></thead>
            <tbody>
              <tr class="active-row" id="row-NOR-00"><td>0</td><td>0</td><td><strong>1</strong></td></tr>
              <tr id="row-NOR-10"><td>1</td><td>0</td><td>0</td></tr>
              <tr id="row-NOR-01"><td>0</td><td>1</td><td>0</td></tr>
              <tr id="row-NOR-11"><td>1</td><td>1</td><td>0</td></tr>
            </tbody>
          </table>
        </div>

        <!-- XOR GATE -->
        <div class="gate-card" data-gate="XOR">
          <div class="gate-card-header">
            <span class="gate-badge" style="background: rgba(139,92,246,0.2); color: var(--accent-purple);">Exclusive</span>
            <h4>Gerbang XOR (Slide 16)</h4>
          </div>
          <div class="gate-formula">F = A ⊕ B = ĀB + AB̄</div>
          <div class="gate-interactive-stage">
            <div class="gate-io-row">
              <span class="io-label">A:</span>
              <button class="gate-toggle-btn active" data-gate-target="XOR" data-pin="A" data-val="0">0</button>
              <button class="gate-toggle-btn" data-gate-target="XOR" data-pin="A" data-val="1">1</button>
              <span class="io-label" style="margin-left: 8px;">B:</span>
              <button class="gate-toggle-btn active" data-gate-target="XOR" data-pin="B" data-val="0">0</button>
              <button class="gate-toggle-btn" data-gate-target="XOR" data-pin="B" data-val="1">1</button>
            </div>
            <div class="gate-symbol-visual">
              <svg width="120" height="50" viewBox="0 0 120 50">
                <line x1="5" y1="17" x2="35" y2="17" stroke="#8b5cf6" stroke-width="2"/>
                <line x1="5" y1="33" x2="35" y2="33" stroke="#8b5cf6" stroke-width="2"/>
                <path d="M 28 10 Q 42 25 28 40" fill="none" stroke="#8b5cf6" stroke-width="2"/>
                <path d="M 35 10 Q 52 25 35 40 Q 58 40 73 25 Q 58 10 35 10 Z" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2"/>
                <line x1="73" y1="25" x2="110" y2="25" stroke="#8b5cf6" stroke-width="2.5"/>
              </svg>
            </div>
            <div class="gate-output-display">
              <span class="out-label">Output F:</span>
              <span class="led-indicator" id="led-XOR">0</span>
            </div>
          </div>
          <table class="mini-truth-table">
            <thead><tr><th>A</th><th>B</th><th>F</th></tr></thead>
            <tbody>
              <tr class="active-row" id="row-XOR-00"><td>0</td><td>0</td><td>0</td></tr>
              <tr id="row-XOR-01"><td>0</td><td>1</td><td><strong>1</strong> <small>(ĀB)</small></td></tr>
              <tr id="row-XOR-10"><td>1</td><td>0</td><td><strong>1</strong> <small>(AB̄)</small></td></tr>
              <tr id="row-XOR-11"><td>1</td><td>1</td><td>0</td></tr>
            </tbody>
          </table>
        </div>

        <!-- XNOR GATE -->
        <div class="gate-card" data-gate="XNOR">
          <div class="gate-card-header">
            <span class="gate-badge" style="background: rgba(16,185,129,0.2); color: var(--accent-emerald);">Equivalence</span>
            <h4>Gerbang XNOR</h4>
          </div>
          <div class="gate-formula">F = (A ⊕ B)̄ = AB + ĀB̄</div>
          <div class="gate-interactive-stage">
            <div class="gate-io-row">
              <span class="io-label">A:</span>
              <button class="gate-toggle-btn active" data-gate-target="XNOR" data-pin="A" data-val="0">0</button>
              <button class="gate-toggle-btn" data-gate-target="XNOR" data-pin="A" data-val="1">1</button>
              <span class="io-label" style="margin-left: 8px;">B:</span>
              <button class="gate-toggle-btn active" data-gate-target="XNOR" data-pin="B" data-val="0">0</button>
              <button class="gate-toggle-btn" data-gate-target="XNOR" data-pin="B" data-val="1">1</button>
            </div>
            <div class="gate-symbol-visual">
              <svg width="120" height="50" viewBox="0 0 120 50">
                <line x1="5" y1="17" x2="33" y2="17" stroke="#10b981" stroke-width="2"/>
                <line x1="5" y1="33" x2="33" y2="33" stroke="#10b981" stroke-width="2"/>
                <path d="M 27 10 Q 40 25 27 40" fill="none" stroke="#10b981" stroke-width="2"/>
                <path d="M 33 10 Q 48 25 33 40 Q 56 40 70 25 Q 56 10 33 10 Z" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2"/>
                <circle cx="74" cy="25" r="4" fill="#0b1120" stroke="#10b981" stroke-width="2"/>
                <line x1="78" y1="25" x2="110" y2="25" stroke="#10b981" stroke-width="2.5"/>
              </svg>
            </div>
            <div class="gate-output-display">
              <span class="out-label">Output F:</span>
              <span class="led-indicator active" id="led-XNOR">1</span>
            </div>
          </div>
          <table class="mini-truth-table">
            <thead><tr><th>A</th><th>B</th><th>F</th></tr></thead>
            <tbody>
              <tr class="active-row" id="row-XNOR-00"><td>0</td><td>0</td><td><strong>1</strong></td></tr>
              <tr id="row-XNOR-01"><td>0</td><td>1</td><td>0</td></tr>
              <tr id="row-XNOR-10"><td>1</td><td>0</td><td>0</td></tr>
              <tr id="row-XNOR-11"><td>1</td><td>1</td><td><strong>1</strong></td></tr>
            </tbody>
          </table>
        </div>

      </div>

      <div class="academic-note">
        <i class="fas fa-graduation-cap"></i>
        <span><strong>Kaidah Analisis Rangkaian:</strong> Gerbang NAND dan NOR disebut <em>Universal Gates</em> karena setiap fungsi logika Boolean apapun (NOT, AND, OR, XOR) dapat dibangun hanya menggunakan kombinasi gerbang NAND saja atau NOR saja.</span>
      </div>
    </div>
  `,

  laws: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 03 / Sub-Materi 02</span>
        <h2>Hukum & Teorema Aljabar Boolean</h2>
        <p class="subtitle">Memahami 12 hukum dasar Aljabar Boolean, hukum De Morgan, prinsip penyerapan, serta pembuktian melalui tabel kebenaran.</p>
      </div>

      <!-- Master Table 12 Hukum Boolean (Slide 7 & Slide 4) -->
      <div class="table-responsive mb-4">
        <table class="luxury-table">
          <thead>
            <tr>
              <th style="width: 22%;">Nama Hukum / Teorema</th>
              <th style="width: 25%;">Bentuk Penjumlahan (OR)</th>
              <th style="width: 25%;">Bentuk Perkalian (AND)</th>
              <th style="width: 28%;">Catatan Analisis Teknis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Hukum Identitas (Identity)</strong></td>
              <td><code>A + 0 = A</code></td>
              <td><code>A · 1 = A</code></td>
              <td>Konstanta identitas: 0 untuk OR, dan 1 untuk AND.</td>
            </tr>
            <tr>
              <td><strong>2. Hukum Idempoten (Idempotent)</strong></td>
              <td><code>A + A = A</code></td>
              <td><code>A · A = A</code></td>
              <td>Pengulangan variabel yang sama tidak mengubah nilai logika.</td>
            </tr>
            <tr>
              <td><strong>3. Hukum Komplemen (Complement)</strong></td>
              <td><code>A + A' = 1</code></td>
              <td><code>A · A' = 0</code></td>
              <td>Variabel dan komplemennya selalu menghasilkan nilai absolut (1 atau 0).</td>
            </tr>
            <tr>
              <td><strong>4. Hukum Dominasi (Null Element)</strong></td>
              <td><code>A + 1 = 1</code></td>
              <td><code>A · 0 = 0</code></td>
              <td>1 mendominasi operasi OR; 0 mendominasi operasi AND.</td>
            </tr>
            <tr>
              <td><strong>5. Hukum Involusi (Double Negation)</strong></td>
              <td colspan="2" class="text-center"><code>(A')' = A &nbsp; (atau A̿ = A)</code></td>
              <td>Inversi dua kali mengembalikan variabel ke nilai aslinya.</td>
            </tr>
            <tr class="row-highlight">
              <td><strong>6. Hukum Penyerapan (Absorption) ★</strong></td>
              <td><code>A + AB = A</code><br><code>A + A'B = A + B</code></td>
              <td><code>A(A + B) = A</code><br><code>A(A' + B) = AB</code></td>
              <td>Menyerap suku redundan. Sangat sering keluar pada soal ujian perkuliahan!</td>
            </tr>
            <tr>
              <td><strong>7. Hukum Komutatif (Commutative)</strong></td>
              <td><code>A + B = B + A</code></td>
              <td><code>A · B = B · A</code></td>
              <td>Urutan letak variabel tidak mempengaruhi hasil keluaran.</td>
            </tr>
            <tr>
              <td><strong>8. Hukum Asosiatif (Associative)</strong></td>
              <td><code>A + (B + C) = (A + B) + C</code></td>
              <td><code>A(BC) = (AB)C</code></td>
              <td>Pengelompokan kurung pada operator yang sama bebas dipindahkan.</td>
            </tr>
            <tr class="row-highlight">
              <td><strong>9. Hukum Distributif (Distributive) ★</strong></td>
              <td><code>A + (B · C) = (A + B)(A + C)</code></td>
              <td><code>A · (B + C) = AB + AC</code></td>
              <td><strong>PENTING:</strong> <code>A + BC = (A+B)(A+C)</code> hanya berlaku di Aljabar Boolean!</td>
            </tr>
            <tr class="row-highlight">
              <td><strong>10. Hukum De Morgan ★</strong></td>
              <td><code>(A + B)' = A' · B'</code></td>
              <td><code>(A · B)' = A' + B'</code></td>
              <td><em>"Break the line, change the sign"</em>. Digunakan untuk konversi gerbang.</td>
            </tr>
            <tr>
              <td><strong>11. Hukum 0 / 1 (Negasi Konstanta)</strong></td>
              <td><code>0' = 1</code></td>
              <td><code>1' = 0</code></td>
              <td>Inversi tegangan logika ground (0V) adalah VCC (+5V), dan sebaliknya.</td>
            </tr>
            <tr>
              <td><strong>12. Teorema Konsensus (Slide 4)</strong></td>
              <td><code>AB + A'C + BC = AB + A'C</code></td>
              <td><code>(A+B)(A'+C)(B+C) = (A+B)(A'+C)</code></td>
              <td>Suku ketiga <code>BC</code> adalah suku konsensus redundan yang bisa dieliminasi.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pembuktian Teorema De Morgan dengan Tabel Kebenaran -->
      <h3 class="section-title"><i class="fas fa-check-circle text-success"></i> Pembuktian Teorema De Morgan Melalui Tabel Kebenaran</h3>
      <div class="grid-2-cols mb-4">
        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-divide"></i>
            <h4>Teorema De Morgan 1: (A + B)' = A' · B'</h4>
          </div>
          <p class="mb-2">Perhatikan kesamaan kolom <code>(A + B)'</code> dan kolom <code>A' · B'</code> pada setiap baris:</p>
          <div class="table-responsive">
            <table class="luxury-table" style="font-size: 13px;">
              <thead><tr><th>A</th><th>B</th><th>A'</th><th>B'</th><th>A + B</th><th style="color: var(--primary-cyan);">(A + B)'</th><th style="color: var(--accent-gold);">A' · B'</th></tr></thead>
              <tbody>
                <tr><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td style="font-weight:700; color: var(--primary-cyan);">1</td><td style="font-weight:700; color: var(--accent-gold);">1</td></tr>
                <tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td style="font-weight:700; color: var(--primary-cyan);">0</td><td style="font-weight:700; color: var(--accent-gold);">0</td></tr>
                <tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td style="font-weight:700; color: var(--primary-cyan);">0</td><td style="font-weight:700; color: var(--accent-gold);">0</td></tr>
                <tr><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td><td style="font-weight:700; color: var(--primary-cyan);">0</td><td style="font-weight:700; color: var(--accent-gold);">0</td></tr>
              </tbody>
            </table>
          </div>
          <p class="text-success mt-2" style="font-size: 12.5px;"><i class="fas fa-check"></i> <strong>Terbukti Identik:</strong> Gerbang NOR setara dengan gerbang AND yang inputnya dibalik (Active-Low AND).</p>
        </div>

        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-times"></i>
            <h4>Teorema De Morgan 2: (A · B)' = A' + B'</h4>
          </div>
          <p class="mb-2">Perhatikan kesamaan kolom <code>(A · B)'</code> dan kolom <code>A' + B'</code> pada setiap baris:</p>
          <div class="table-responsive">
            <table class="luxury-table" style="font-size: 13px;">
              <thead><tr><th>A</th><th>B</th><th>A'</th><th>B'</th><th>A · B</th><th style="color: var(--primary-cyan);">(A · B)'</th><th style="color: var(--accent-gold);">A' + B'</th></tr></thead>
              <tbody>
                <tr><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td style="font-weight:700; color: var(--primary-cyan);">1</td><td style="font-weight:700; color: var(--accent-gold);">1</td></tr>
                <tr><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td><td style="font-weight:700; color: var(--primary-cyan);">1</td><td style="font-weight:700; color: var(--accent-gold);">1</td></tr>
                <tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td style="font-weight:700; color: var(--primary-cyan);">1</td><td style="font-weight:700; color: var(--accent-gold);">1</td></tr>
                <tr><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td><td style="font-weight:700; color: var(--primary-cyan);">0</td><td style="font-weight:700; color: var(--accent-gold);">0</td></tr>
              </tbody>
            </table>
          </div>
          <p class="text-success mt-2" style="font-size: 12.5px;"><i class="fas fa-check"></i> <strong>Terbukti Identik:</strong> Gerbang NAND setara dengan gerbang OR yang inputnya dibalik (Active-Low OR / Negative OR).</p>
        </div>
      </div>

      <!-- Prinsip Dualitas -->
      <div class="glass-callout">
        <h4><i class="fas fa-clone text-warning"></i> Prinsip Dualitas (Duality Principle)</h4>
        <p>Setiap kesamaan identitas Aljabar Boolean tetap bernilai benar jika:</p>
        <ul class="luxury-list mt-1">
          <li>Operator <strong>AND ( · )</strong> ditukar menjadi operator <strong>OR ( + )</strong> dan sebaliknya.</li>
          <li>Konstanta identitas <strong>0</strong> ditukar menjadi <strong>1</strong> dan sebaliknya.</li>
          <li>Variabel tetap dipertahankan (tidak dibalik / tanpa mengubah komplemen variabel).</li>
        </ul>
      </div>
    </div>
  `,

  soppos: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 03 / Sub-Materi 03</span>
        <h2>Bentuk Standar Fungsi Boolean: SOP & POS</h2>
        <p class="subtitle">Memahami Sum of Product (Minterm), Product of Sum (Maxterm), kaidah pembacaan bit, dan teknik konversi aljabar.</p>
      </div>

      <!-- Pengantar Bentuk Standar (Slide 9) -->
      <div class="grid-2-cols mb-4">
        
        <!-- CARD SOP (Slide 10) -->
        <div class="feature-card highlighted-gold">
          <div class="feature-icon"><i class="fas fa-plus"></i></div>
          <h3>1. Sum of Product (SOP) / Minterm</h3>
          <p>Bentuk baku di mana beberapa suku perkalian (AND) dijumlahkan bersama menggunakan operator OR.</p>
          <div class="callout-sub" style="background: rgba(245, 175, 25, 0.08); border-color: rgba(245, 175, 25, 0.3);">
            <strong>Ciri-Ciri (Slide 10):</strong>
            <ul>
              <li>Dalam setiap suku, operasi antar variabel adalah perkalian (AND).</li>
              <li>Setiap suku (term) dijumlahkan (OR).</li>
              <li>Setiap suku mengandung <em>semua</em> variabel domain (pada bentuk kanonik).</li>
            </ul>
          </div>
          <div class="code-box-study">
            <strong>Cara Membaca Minterm (Slide 10):</strong><br>
            • Variabel <strong>tanpa komplemen</strong> dianggap bernilai <strong>1</strong>.<br>
            • Variabel <strong>dengan komplemen</strong> dibaca <strong>0</strong>.<br><br>
            <strong>Contoh:</strong><br>
            • <code>x' y z</code> &rarr; <code>0 1 1</code> &rarr; Minterm <strong>m₃</strong><br>
            • <code>x y z</code> &rarr; <code>1 1 1</code> &rarr; Minterm <strong>m₇</strong><br>
            • <code>x' y' z'</code> &rarr; <code>0 0 0</code> &rarr; Minterm <strong>m₀</strong><br>
            Notasi Singkat: <code>F = Σ m(0, 3, 7)</code>
          </div>
          <small class="text-warning">★ Dibangun langsung dari baris tabel kebenaran yang menghasilkan <strong>Output = 1</strong>.</small>
        </div>

        <!-- CARD POS (Slide 11) -->
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-times"></i></div>
          <h3>2. Product of Sum (POS) / Maxterm</h3>
          <p>Bentuk baku di mana beberapa suku penjumlahan (OR) dikalikan bersama menggunakan operator AND.</p>
          <div class="callout-sub" style="background: rgba(0, 210, 255, 0.08); border-color: rgba(0, 210, 255, 0.3);">
            <strong>Ciri-Ciri (Slide 11):</strong>
            <ul>
              <li>Dalam setiap suku, operasi antar variabel adalah penjumlahan (OR).</li>
              <li>Setiap suku (term) dikalikan (AND).</li>
              <li>Setiap suku mengandung <em>semua</em> variabel domain.</li>
            </ul>
          </div>
          <div class="code-box-study">
            <strong>Cara Membaca Maxterm (Slide 11):</strong><br>
            • Variabel <strong>tanpa komplemen</strong> dianggap bernilai <strong>0</strong>.<br>
            • Variabel <strong>dengan komplemen</strong> dibaca <strong>1</strong>.<br><br>
            <strong>Contoh:</strong><br>
            • <code>(x + y + z')</code> &rarr; <code>0 0 1</code> &rarr; Maxterm <strong>M₁</strong><br>
            • <code>(x' + y' + z)</code> &rarr; <code>1 1 0</code> &rarr; Maxterm <strong>M₆</strong><br>
            • <code>(x + y + z)</code> &rarr; <code>0 0 0</code> &rarr; Maxterm <strong>M₀</strong><br>
            Notasi Singkat: <code>F = Π M(0, 1, 6)</code>
          </div>
          <small class="text-primary">★ Dibangun langsung dari baris tabel kebenaran yang menghasilkan <strong>Output = 0</strong>.</small>
        </div>

      </div>

      <!-- Contoh Konversi Resmi Slide Kuliah (Slide 12 & 13) -->
      <h3 class="section-title"><i class="fas fa-exchange-alt"></i> Contoh Konversi Resmi Slide Perkuliahan ITERA</h3>
      
      <div class="grid-2-cols mb-4">
        
        <!-- POS ke SOP (Slide 12) -->
        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-arrow-right text-warning"></i>
            <h4>Contoh 1: Konversi POS ke SOP (Slide 12)</h4>
          </div>
          <p><strong>Soal:</strong> Diberikan fungsi bentuk POS: <code>F(A, B) = (A + B)(Ā + B)</code>. Ubah ke bentuk SOP!</p>
          <div class="code-box-study mt-2">
            <strong>Langkah Penyelesaian (Distributif Perkalian):</strong><br>
            F = (A + B)(Ā + B)<br>
            F = A · Ā + AB + ĀB + B · B &nbsp;&nbsp; <em>(Distribusi suku)</em><br>
            F = 0 + AB + ĀB + B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>(Hukum Komplemen A·Ā=0, Idempoten B·B=B)</em><br>
            F = (A + Ā)B + B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>(Faktorkan B)</em><br>
            F = 1 · B + B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>(Hukum Komplemen A+Ā=1)</em><br>
            F = B + B = <strong>B</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>(Hukum Idempoten)</em><br><br>
            <span class="text-success"><strong>Hasil Akhir Sederhana:</strong> F = B</span>
          </div>
        </div>

        <!-- SOP ke POS (Slide 13) -->
        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-arrow-left text-primary"></i>
            <h4>Contoh 2: Konversi SOP ke POS (Slide 13)</h4>
          </div>
          <p><strong>Soal:</strong> Diberikan ekspresi SOP: <code>G = A + ĀB</code>. Ubah ke bentuk POS!</p>
          <div class="code-box-study mt-2">
            <strong>Langkah Penyelesaian (Hukum Distributif Boolean):</strong><br>
            G = A + ĀB<br>
            G = (A + Ā)(A + B) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>(Terapkan Distributif X + YZ = (X+Y)(X+Z))</em><br>
            G = 1 · (A + B) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>(Hukum Komplemen A + Ā = 1)</em><br>
            G = <strong>A + B</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>(Hukum Identitas 1 · X = X)</em><br><br>
            <span class="text-success"><strong>Hasil Akhir:</strong> G = A + B &nbsp; (sudah berupa suku POS murni)</span>
          </div>
        </div>

      </div>

      <!-- Contoh Penyederhanaan 3-Variabel & Tabel Kebenaran (Slide 15 & 16) -->
      <h3 class="section-title"><i class="fas fa-table"></i> Analisis Tabel Kebenaran & Pembentukan SOP (Slide 15 & 16)</h3>
      
      <div class="grid-2-cols mb-4">
        
        <!-- Slide 15: Penyederhanaan 3 Variabel -->
        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-layer-group"></i>
            <h4>Penyederhanaan Logika 3-Variabel (Slide 15)</h4>
          </div>
          <p>Fungsi logika dibentuk dari baris yang menghasilkan nilai 1 pada tabel kebenaran:</p>
          <div class="table-responsive mt-2 mb-2">
            <table class="luxury-table" style="font-size: 12.5px;">
              <thead><tr><th>A</th><th>B</th><th>C</th><th>Output Y</th><th>Keterangan Suku Minterm</th></tr></thead>
              <tbody>
                <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>-</td></tr>
                <tr><td>0</td><td>0</td><td>1</td><td>0</td><td>-</td></tr>
                <tr class="row-highlight"><td>0</td><td>1</td><td>0</td><td><strong>1</strong></td><td>m₂ = Ā B C̄</td></tr>
                <tr><td>0</td><td>1</td><td>1</td><td>0</td><td>-</td></tr>
                <tr><td>1</td><td>0</td><td>0</td><td>0</td><td>-</td></tr>
                <tr><td>1</td><td>0</td><td>1</td><td>0</td><td>-</td></tr>
                <tr class="row-highlight"><td>1</td><td>1</td><td>0</td><td><strong>1</strong></td><td>m₆ = A B C̄</td></tr>
                <tr><td>1</td><td>1</td><td>1</td><td>0</td><td>-</td></tr>
              </tbody>
            </table>
          </div>
          <div class="code-box-study">
            Y = Ā B C̄ + A B C̄<br>
            Y = (Ā + A) · (B C̄) = 1 · B C̄ = <strong>B C̄</strong> &nbsp; (atau B C')
          </div>
        </div>

        <!-- Slide 16: Pembentukan XOR via SOP -->
        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-bezier-curve"></i>
            <h4>Pembentukan Rangkaian XOR via Baris SOP (Slide 16)</h4>
          </div>
          <p>Perhatikan tabel kebenaran fungsi XOR: output bernilai 1 tepat pada 2 baris ganjil:</p>
          <div class="table-responsive mt-2 mb-2">
            <table class="luxury-table" style="font-size: 12.5px;">
              <thead><tr><th>A</th><th>B</th><th>Output F</th><th>Pembentukan Suku SOP (Output = 1)</th></tr></thead>
              <tbody>
                <tr><td>0</td><td>0</td><td>0</td><td>-</td></tr>
                <tr class="row-highlight"><td>0</td><td>1</td><td><strong>1</strong></td><td>Baris 2: A=0, B=1 &rArr; <strong>Ā · B</strong></td></tr>
                <tr class="row-highlight"><td>1</td><td>0</td><td><strong>1</strong></td><td>Baris 3: A=1, B=0 &rArr; <strong>A · B̄</strong></td></tr>
                <tr><td>1</td><td>1</td><td>0</td><td>-</td></tr>
              </tbody>
            </table>
          </div>
          <div class="code-box-study">
            <strong>Persamaan Logika XOR (Slide 16):</strong><br>
            A ⊕ B = (A · B̄) + (Ā · B)<br>
            <em>Rangkaian dibangun menggunakan: 2 gerbang NOT (inversi A dan B), 2 gerbang AND untuk suku perkalian, dan 1 gerbang OR untuk penjumlahan akhir.</em>
          </div>
        </div>

      </div>

    </div>
  `,

  exercises: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 03 / Sub-Materi 05</span>
        <h2>Pembahasan Lengkap Latihan 1 s.d. 4 Slide ITERA</h2>
        <p class="subtitle">Kunci jawaban tuntas beserta penjabaran matematis, tabel kebenaran multi-titik, dan analisis gerbang logika tunggal pengganti.</p>
      </div>

      <!-- LATIHAN 1 (Slide 14) -->
      <div class="exercise-module-box mb-4">
        <div class="exercise-module-header">
          <span class="badge-accent"><i class="fas fa-edit"></i> Latihan 1 (Slide 14 ITERA)</span>
          <h3>Konversi Bentuk Baku SOP dan POS</h3>
        </div>

        <div class="grid-2-cols mt-3">
          
          <!-- Latihan 1.1 -->
          <div class="showcase-card">
            <h4>1. Ubah ke bentuk SOP: <code>(A + B + C)(Ā + B + C)</code></h4>
            <div class="solution-steps mt-2">
              <p><strong>Metode Pemisalan Cepat:</strong></p>
              <div>Misalkan suku yang sama <code>(B + C) = X</code>.</div>
              <div>Persamaan menjadi: <code>(X + A)(X + Ā)</code></div>
              <div>Gunakan hukum distributif: <code>X + A·Ā = X + 0 = X</code></div>
              <div>Substitusikan kembali nilai X: <strong>B + C</strong></div>
              <div class="mt-2"><strong>Metode Perkalian Distribusi Penuh:</strong></div>
              <div style="font-size: 12px; color: var(--text-dim);">
                = A·Ā + AB + AC + ĀB + BB + BC + ĀC + BC + CC<br>
                = 0 + AB + AC + ĀB + B + BC + ĀC + BC + C<br>
                = B(A + Ā + 1 + C) + C(A + Ā + 1) = B(1) + C(1) = <strong>B + C</strong>
              </div>
              <div class="mt-2 text-success font-weight-bold">
                Bentuk Kanonik Minterm: B + C = Σ m(2, 3, 4, 5, 6, 7)
              </div>
            </div>
          </div>

          <!-- Latihan 1.2 -->
          <div class="showcase-card">
            <h4>2. Ubah ke bentuk POS: <code>AC̄ + ABC</code></h4>
            <div class="solution-steps mt-2">
              <p><strong>Langkah Penjabaran Aljabar:</strong></p>
              <div>1. Faktorkan variabel <code>A</code> dari kedua suku:</div>
              <div>&nbsp;&nbsp;&nbsp;<code>= A · (C̄ + BC)</code></div>
              <div>2. Terapkan hukum distributif pada kurung <code>(C̄ + BC)</code>:</div>
              <div>&nbsp;&nbsp;&nbsp;<code>C̄ + BC = (C̄ + B)(C̄ + C) = (B + C̄) · 1 = B + C̄</code></div>
              <div>3. Gabungkan kembali dengan A:</div>
              <div>&nbsp;&nbsp;&nbsp;<strong>A · (B + C̄)</strong></div>
              <div class="mt-2 text-success font-weight-bold">
                Bentuk POS Selesai: A · (B + C̄) &nbsp; (atau A(B + C'))
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- LATIHAN 2 (Slide 17) -->
      <div class="exercise-module-box mb-4">
        <div class="exercise-module-header">
          <span class="badge-accent"><i class="fas fa-edit"></i> Latihan 2 (Slide 17 ITERA)</span>
          <h3>Penyederhanaan, Rangkaian & Tabel Kebenaran</h3>
        </div>

        <div class="solution-steps mt-3">
          
          <!-- Soal 2.1 -->
          <div class="mb-4 p-3 glass-callout">
            <h4 style="color: var(--accent-gold);">Soal 2.1: Sederhanakan <code>z = (A + B̄ · C)̄</code></h4>
            <p class="mt-2"><strong>Langkah De Morgan:</strong></p>
            <ol class="luxury-list" style="padding-left: 20px;">
              <li>Pecah garis atas tanda tambah (OR): <code>z = Ā · (B̄ · C)̄</code></li>
              <li>Pecah garis atas perkalian pada suku kedua: <code>(B̄ · C)̄ = B̿ + C̄ = B + C̄</code></li>
              <li>Kalikan secara distributif: <code>z = Ā · (B + C̄) = <strong>ĀB + ĀC̄</strong></code></li>
            </ol>
            <div class="table-responsive mt-3">
              <table class="luxury-table" style="font-size: 12.5px;">
                <thead><tr><th>A</th><th>B</th><th>C</th><th>B̄ · C</th><th>A + B̄C</th><th>z = (A + B̄C)̄</th><th>Bentuk Sederhana: Ā(B + C̄)</th></tr></thead>
                <tbody>
                  <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td><strong>1</strong></td><td>1·(0+1) = <strong>1</strong></td></tr>
                  <tr><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td><strong>0</strong></td><td>1·(0+0) = <strong>0</strong></td></tr>
                  <tr><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td><strong>1</strong></td><td>1·(1+1) = <strong>1</strong></td></tr>
                  <tr><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td><td><strong>1</strong></td><td>1·(1+0) = <strong>1</strong></td></tr>
                  <tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td><strong>0</strong></td><td>0·(0+1) = <strong>0</strong></td></tr>
                  <tr><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td><td><strong>0</strong></td><td>0·(0+0) = <strong>0</strong></td></tr>
                  <tr><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td><td><strong>0</strong></td><td>0·(1+1) = <strong>0</strong></td></tr>
                  <tr><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td><td><strong>0</strong></td><td>0·(1+0) = <strong>0</strong></td></tr>
                </tbody>
              </table>
            </div>
            <p class="text-success mt-2"><strong>Minterm:</strong> z = Σ m(0, 2, 3)</p>
          </div>

          <!-- Soal 2.2 -->
          <div class="mb-4 p-3 glass-callout">
            <h4 style="color: var(--primary-cyan);">Soal 2.2: Sederhanakan <code>Y = ĀBCD + ABCD̄ + ABCD + A B̄ C D</code> (4 Variabel)</h4>
            <p class="mt-2"><strong>Langkah Pengelompokan & Idempoten:</strong></p>
            <div class="code-box-study">
              Karena hukum idempoten menyatakan <code>ABCD = ABCD + ABCD + ABCD</code>, suku <code>ABCD</code> dapat digandakan untuk disederhanakan dengan masing-masing suku komplemen:<br><br>
              Y = (ĀBCD + ABCD) + (ABCD̄ + ABCD) + (A B̄ C D + ABCD)<br>
              Y = (Ā + A)BCD + ABC(D̄ + D) + AC(B̄ + B)D<br>
              Y = 1 · BCD + ABC · 1 + ACD · 1<br>
              <strong>Y = BCD + ABC + ACD</strong>
            </div>
            <p class="text-success mt-2"><strong>Hasil Minimal 3 Suku:</strong> Y = BCD + ABC + ACD (Minterm m₇, m₁₁, m₁₄, m₁₅)</p>
          </div>

          <!-- Soal 2.3 -->
          <div class="p-3 glass-callout">
            <h4 style="color: var(--accent-emerald);">Soal 2.3: Rancang Rangkaian <code>ω = (A + BC) · (D + EF)</code></h4>
            <p class="mt-2">Rangkaian logika kombinasi 2-tingkat POS:</p>
            <ul class="luxury-list" style="padding-left: 20px;">
              <li>Tingkat 1: Gerbang AND untuk <code>BC</code> dan Gerbang AND untuk <code>EF</code>.</li>
              <li>Tingkat 2: Gerbang OR untuk <code>(A + BC)</code> dan Gerbang OR untuk <code>(D + EF)</code>.</li>
              <li>Tingkat 3 (Output): Gerbang AND menggabungkan kedua output OR menjadi keluaran <code>ω</code>.</li>
            </ul>
          </div>

        </div>
      </div>

      <!-- LATIHAN 3 (Slide 18) - MULTI-POINT CIRCUIT ANALYSIS -->
      <div class="exercise-module-box mb-4">
        <div class="exercise-module-header">
          <span class="badge-accent"><i class="fas fa-microchip"></i> Latihan 3 (Slide 18 ITERA) ★</span>
          <h3>Analisis Rangkaian Multi-Titik (C, D, Q) & Gerbang Tunggal Pengganti</h3>
        </div>

        <div class="grid-2-cols mt-3">
          
          <!-- Visual Circuit SVG & Interactive Tester -->
          <div class="showcase-card">
            <h4>Skematik Rangkaian Slide 18:</h4>
            <p class="text-muted" style="font-size: 13px;">Uji kombinasi sakelar input A dan B untuk mengamati sinyal di kabel C, D, dan Q:</p>
            
            <div class="interactive-circuit-board mt-3">
              <div class="circuit-inputs-bar">
                <span>Input Pin:</span>
                <button class="gate-toggle-btn active" id="btnL3A0" onclick="window.sisdigApp.setL3Input('A', 0)">A = 0</button>
                <button class="gate-toggle-btn" id="btnL3A1" onclick="window.sisdigApp.setL3Input('A', 1)">A = 1</button>
                <button class="gate-toggle-btn active" id="btnL3B0" onclick="window.sisdigApp.setL3Input('B', 0)" style="margin-left: 12px;">B = 0</button>
                <button class="gate-toggle-btn" id="btnL3B1" onclick="window.sisdigApp.setL3Input('B', 1)">B = 1</button>
              </div>

              <!-- SVG Rangkaian Slide 18 -->
              <div class="svg-circuit-wrap mt-2">
                <svg width="100%" height="220" viewBox="0 0 460 220" class="circuit-svg">
                  <!-- Wire A -->
                  <path id="wireL3-A" d="M 20 60 L 110 60 M 70 60 L 70 150 L 110 150" fill="none" stroke="#00d2ff" stroke-width="2.5"/>
                  <text x="25" y="52" fill="#00d2ff" font-size="12" font-weight="700">A (<tspan id="txtL3-A">0</tspan>)</text>

                  <!-- Wire B -->
                  <path id="wireL3-B" d="M 20 85 L 110 85 M 90 85 L 90 175 L 110 175" fill="none" stroke="#00d2ff" stroke-width="2.5"/>
                  <text x="25" y="105" fill="#00d2ff" font-size="12" font-weight="700">B (<tspan id="txtL3-B">0</tspan>)</text>

                  <!-- NAND Gate (Top) -->
                  <g transform="translate(110, 45)">
                    <rect x="0" y="0" width="8" height="55" fill="transparent"/>
                    <path d="M 0 0 L 30 0 A 27 27 0 0 1 30 55 L 0 55 Z" fill="rgba(0,210,255,0.12)" stroke="#00d2ff" stroke-width="2"/>
                    <circle cx="61" cy="27.5" r="4.5" fill="#0b1120" stroke="#00d2ff" stroke-width="2"/>
                    <text x="10" y="-8" fill="#94a3b8" font-size="11" font-weight="600">NAND</text>
                  </g>

                  <!-- Wire C (from NAND output) -->
                  <path id="wireL3-C" d="M 176 72.5 L 260 72.5 L 260 100 L 290 100" fill="none" stroke="#f5af19" stroke-width="2.5"/>
                  <circle cx="215" cy="72.5" r="4" fill="#f5af19"/>
                  <text x="205" y="62" fill="#f5af19" font-size="13" font-weight="800">Titik C = <tspan id="txtL3-C">1</tspan></text>

                  <!-- Ex-OR Gate (Bottom) -->
                  <g transform="translate(110, 135)">
                    <path d="M -8 0 Q 8 27.5 -8 55" fill="none" stroke="#8b5cf6" stroke-width="2"/>
                    <path d="M 0 0 Q 18 27.5 0 55 Q 35 55 52 27.5 Q 35 0 0 0 Z" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="8" y="70" fill="#94a3b8" font-size="11" font-weight="600">Ex-OR</text>
                  </g>

                  <!-- Wire D (from XOR output) -->
                  <path id="wireL3-D" d="M 162 162.5 L 260 162.5 L 260 135 L 290 135" fill="none" stroke="#8b5cf6" stroke-width="2.5"/>
                  <circle cx="215" cy="162.5" r="4" fill="#8b5cf6"/>
                  <text x="205" y="180" fill="#8b5cf6" font-size="13" font-weight="800">Titik D = <tspan id="txtL3-D">0</tspan></text>

                  <!-- Ex-NOR Gate (Right) -->
                  <g transform="translate(290, 90)">
                    <path d="M -8 0 Q 8 27.5 -8 55" fill="none" stroke="#10b981" stroke-width="2"/>
                    <path d="M 0 0 Q 18 27.5 0 55 Q 35 55 52 27.5 Q 35 0 0 0 Z" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2"/>
                    <circle cx="56.5" cy="27.5" r="4.5" fill="#0b1120" stroke="#10b981" stroke-width="2"/>
                    <text x="10" y="-8" fill="#94a3b8" font-size="11" font-weight="600">Ex-NOR</text>
                  </g>

                  <!-- Wire Q Output -->
                  <line id="wireL3-Q" x1="351" y1="117.5" x2="420" y2="117.5" stroke="#10b981" stroke-width="3"/>
                  <circle cx="420" cy="117.5" r="6" id="dotL3-Q" fill="#ef4444"/>
                  <text x="375" y="105" fill="#10b981" font-size="14" font-weight="800">Keluaran Q = <tspan id="txtL3-Q">0</tspan></text>
                </svg>
              </div>

            </div>
          </div>

          <!-- Tabel Kebenaran Multi-Titik & Pembuktian Aljabar -->
          <div class="showcase-card">
            <h4>Tabel Kebenaran Titik C, D, dan Q (Slide 18)</h4>
            <div class="table-responsive mt-2">
              <table class="luxury-table" style="font-size: 13px;">
                <thead>
                  <tr>
                    <th>A</th>
                    <th>B</th>
                    <th style="color: var(--accent-gold);">Titik C = (AB)̄</th>
                    <th style="color: var(--accent-purple);">Titik D = A ⊕ B</th>
                    <th style="color: var(--accent-emerald);">Output Q = (C ⊕ D)̄</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="rowL3-00"><td>0</td><td>0</td><td>1</td><td>0</td><td><strong>0</strong></td></tr>
                  <tr id="rowL3-01"><td>0</td><td>1</td><td>1</td><td>1</td><td><strong style="color: var(--accent-emerald);">1</strong></td></tr>
                  <tr id="rowL3-10"><td>1</td><td>0</td><td>1</td><td>1</td><td><strong style="color: var(--accent-emerald);">1</strong></td></tr>
                  <tr id="rowL3-11"><td>1</td><td>1</td><td>0</td><td>0</td><td><strong style="color: var(--accent-emerald);">1</strong></td></tr>
                </tbody>
              </table>
            </div>

            <div class="callout-sub mt-3" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
              <h4 style="color: var(--accent-emerald);"><i class="fas fa-bolt"></i> Identifikasi Gerbang Tunggal Pengganti:</h4>
              <p>Perhatikan kolom keluaran <strong>Q</strong> di atas: <code>[0, 1, 1, 1]</code>.<br>
              Nilai kebenaran ini <strong>tepat 100% sama dengan tabel kebenaran Gerbang OR (A + B)</strong>!</p>
              <p class="mt-1"><strong>Kesimpulan Resmi:</strong> Seluruh rangkaian di atas dapat digantikan dengan <strong>1 Gerbang OR tunggal</strong>.</p>
            </div>

            <div class="code-box-study mt-2">
              <strong>Pembuktian Matematis Aljabar Boolean:</strong><br>
              Q = C ⊙ D = CD + C̄ D̄<br>
              • CD = (Ā + B̄)(ĀB + AB̄) = ĀB + AB̄ = A ⊕ B<br>
              • C̄ D̄ = (AB) · (A ⊙ B) = (AB)(AB + ĀB̄) = AB<br>
              • Q = (ĀB + AB̄) + AB = A(B̄ + B) + ĀB = A(1) + ĀB = <strong>A + B</strong> &nbsp; (Hukum Penyerapan)
            </div>
          </div>

        </div>
      </div>

      <!-- LATIHAN 4 (Slide 19) -->
      <div class="exercise-module-box mb-4">
        <div class="exercise-module-header">
          <span class="badge-accent"><i class="fas fa-project-diagram"></i> Latihan 4 (Slide 19 ITERA) ★</span>
          <h3>Rangkaian Gerbang AND, OR, dan XOR</h3>
        </div>

        <div class="grid-2-cols mt-3">
          
          <div class="showcase-card">
            <h4>Deskripsi Rangkaian (Slide 19):</h4>
            <ul class="luxury-list mt-2">
              <li><strong>Gerbang AND</strong> menghasilkan sinyal <code>C = A · B</code></li>
              <li><strong>Gerbang OR</strong> menghasilkan sinyal <code>D = A + B</code></li>
              <li>Sinyal <strong>C dan D</strong> masuk ke <strong>gerbang XOR</strong> menghasilkan keluaran <code>Q = C ⊕ D</code></li>
            </ul>

            <div class="interactive-circuit-board mt-3">
              <div class="circuit-inputs-bar">
                <span>Input Pin:</span>
                <button class="gate-toggle-btn active" id="btnL4A0" onclick="window.sisdigApp.setL4Input('A', 0)">A = 0</button>
                <button class="gate-toggle-btn" id="btnL4A1" onclick="window.sisdigApp.setL4Input('A', 1)">A = 1</button>
                <button class="gate-toggle-btn active" id="btnL4B0" onclick="window.sisdigApp.setL4Input('B', 0)" style="margin-left: 12px;">B = 0</button>
                <button class="gate-toggle-btn" id="btnL4B1" onclick="window.sisdigApp.setL4Input('B', 1)">B = 1</button>
              </div>

              <!-- SVG Rangkaian Slide 19 -->
              <div class="svg-circuit-wrap mt-2">
                <svg width="100%" height="220" viewBox="0 0 460 220" class="circuit-svg">
                  <!-- Wire A -->
                  <path id="wireL4-A" d="M 20 60 L 110 60 M 70 60 L 70 150 L 110 150" fill="none" stroke="#00d2ff" stroke-width="2.5"/>
                  <text x="25" y="52" fill="#00d2ff" font-size="12" font-weight="700">A (<tspan id="txtL4-A">0</tspan>)</text>

                  <!-- Wire B -->
                  <path id="wireL4-B" d="M 20 85 L 110 85 M 90 85 L 90 175 L 110 175" fill="none" stroke="#00d2ff" stroke-width="2.5"/>
                  <text x="25" y="105" fill="#00d2ff" font-size="12" font-weight="700">B (<tspan id="txtL4-B">0</tspan>)</text>

                  <!-- AND Gate (Top) -->
                  <g transform="translate(110, 45)">
                    <path d="M 0 0 L 25 0 A 27.5 27.5 0 0 1 25 55 L 0 55 Z" fill="rgba(0,210,255,0.12)" stroke="#00d2ff" stroke-width="2"/>
                    <text x="12" y="-8" fill="#94a3b8" font-size="11" font-weight="600">AND</text>
                  </g>

                  <!-- Wire C -->
                  <path id="wireL4-C" d="M 163 72.5 L 260 72.5 L 260 100 L 290 100" fill="none" stroke="#00d2ff" stroke-width="2.5"/>
                  <circle cx="215" cy="72.5" r="4" fill="#00d2ff"/>
                  <text x="205" y="62" fill="#00d2ff" font-size="13" font-weight="800">Titik C = <tspan id="txtL4-C">0</tspan></text>

                  <!-- OR Gate (Bottom) -->
                  <g transform="translate(110, 135)">
                    <path d="M 0 0 Q 18 27.5 0 55 Q 35 55 52 27.5 Q 35 0 0 0 Z" fill="rgba(245,175,25,0.12)" stroke="#f5af19" stroke-width="2"/>
                    <text x="15" y="70" fill="#94a3b8" font-size="11" font-weight="600">OR</text>
                  </g>

                  <!-- Wire D -->
                  <path id="wireL4-D" d="M 162 162.5 L 260 162.5 L 260 135 L 290 135" fill="none" stroke="#f5af19" stroke-width="2.5"/>
                  <circle cx="215" cy="162.5" r="4" fill="#f5af19"/>
                  <text x="205" y="180" fill="#f5af19" font-size="13" font-weight="800">Titik D = <tspan id="txtL4-D">0</tspan></text>

                  <!-- XOR Gate (Right) -->
                  <g transform="translate(290, 90)">
                    <path d="M -8 0 Q 8 27.5 -8 55" fill="none" stroke="#8b5cf6" stroke-width="2"/>
                    <path d="M 0 0 Q 18 27.5 0 55 Q 35 55 52 27.5 Q 35 0 0 0 Z" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2"/>
                    <text x="15" y="-8" fill="#94a3b8" font-size="11" font-weight="600">XOR</text>
                  </g>

                  <!-- Wire Q Output -->
                  <line id="wireL4-Q" x1="342" y1="117.5" x2="420" y2="117.5" stroke="#8b5cf6" stroke-width="3"/>
                  <circle cx="420" cy="117.5" r="6" id="dotL4-Q" fill="#ef4444"/>
                  <text x="375" y="105" fill="#8b5cf6" font-size="14" font-weight="800">Keluaran Q = <tspan id="txtL4-Q">0</tspan></text>
                </svg>
              </div>
            </div>
          </div>

          <div class="showcase-card">
            <h4>Tabel Kebenaran & Persamaan Aljabar (Slide 19)</h4>
            <div class="table-responsive mt-2">
              <table class="luxury-table" style="font-size: 13px;">
                <thead>
                  <tr>
                    <th>A</th>
                    <th>B</th>
                    <th style="color: var(--primary-cyan);">Titik C = AB</th>
                    <th style="color: var(--accent-gold);">Titik D = A + B</th>
                    <th style="color: var(--accent-purple);">Output Q = C ⊕ D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="rowL4-00"><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                  <tr id="rowL4-01"><td>0</td><td>1</td><td>0</td><td>1</td><td><strong style="color: var(--accent-purple);">1</strong></td></tr>
                  <tr id="rowL4-10"><td>1</td><td>0</td><td>0</td><td>1</td><td><strong style="color: var(--accent-purple);">1</strong></td></tr>
                  <tr id="rowL4-11"><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td></tr>
                </tbody>
              </table>
            </div>

            <div class="callout-sub mt-3" style="background: rgba(139,92,246,0.08); border-color: rgba(139,92,246,0.3);">
              <h4 style="color: var(--accent-purple);"><i class="fas fa-equals"></i> Kesimpulan Persamaan Aljabar Boolean:</h4>
              <p>Output Q bernilai <strong>1</strong> jika salah satu sinyal berbeda, menghasilkan deret: <code>[0, 1, 1, 0]</code>.<br>
              Nilai ini identik dengan fungsi <strong>Gerbang XOR: Q = A ⊕ B</strong>.</p>
            </div>

            <div class="code-box-study mt-2">
              <strong>Penjabaran Matematis Teorema:</strong><br>
              Q = C ⊕ D = C · D̄ + C̄ · D<br>
              Q = (AB) · (A + B)̄ + (AB)̄ · (A + B)<br>
              Q = (AB) · (ĀB̄) + (Ā + B̄) · (A + B)<br>
              Q = 0 + (ĀA + ĀB + B̄A + B̄B)<br>
              Q = 0 + (0 + ĀB + AB̄ + 0)<br>
              <strong>Q = ĀB + AB̄ = A ⊕ B</strong> &nbsp;&nbsp; <em>(Terbukti Tuntas!)</em>
            </div>
          </div>

        </div>
      </div>

    </div>
  `
};

/**
 * TEKS MATERI DETAIL MINGGU 4 (Berdasarkan Slide Pertemuan 4 ITERA)
 * Topik: Penyederhanaan dengan Karnaugh Map (K-Map 2, 3, 4 Variabel & Don't Care)
 * Dosen: Dr. Swadexi Istiqphara, S.T., M.T. (ITERA ©2025)
 */
const WEEK4_CONTENT = {
  concepts: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 04 / Sub-Materi 01</span>
        <h2>Konsep Dasar & Aturan Baku Peta Karnaugh (K-Map)</h2>
        <p class="subtitle">Memahami motivasi penyederhanaan grafis, urutan Kode Gray, aturan baku grouping pangkat dua, dan pencegahan kesalahan pengelompokan.</p>
      </div>

      <!-- Info Akademik Sub-CPMK ITERA -->
      <div class="glass-callout mb-4">
        <div class="callout-icon"><i class="fas fa-bullseye text-primary"></i></div>
        <div class="callout-body">
          <h4>Sub-CPMK & Indikator Capaian Perkuliahan (Slide 3)</h4>
          <p><strong>Sub-CPMK:</strong> Mahasiswa mampu menjelaskan dan memodelkan konsep dasar Aljabar Boolean untuk menganalisis, menyederhanakan, serta merancang rangkaian logika kombinasi sederhana menggunakan teorema/hukum Boolean dan Karnaugh Map.</p>
          <ul class="luxury-list mt-2">
            <li>Menjelaskan variabel Boolean, operator dasar, dan hukumnya dengan contoh yang benar (&ge; 80% ketepatan konsep).</li>
            <li>Menyusun tabel kebenaran dari sebuah ekspresi logika atau rangkaian hingga 4 variabel tanpa kesalahan baris.</li>
            <li>Menyederhanakan ekspresi menggunakan Peta Karnaugh (K-Map).</li>
          </ul>
          <div class="team-lecturers mt-3">
            <span class="pill-tag"><i class="fas fa-user-tie"></i> Dosen Pengampu: Dr. Swadexi Istiqphara, S.T., M.T. (ITERA ©2025)</span>
            <span class="pill-tag"><i class="fas fa-book"></i> Ref: Brown & Vranesic (2009) & D. Givone (2002)</span>
          </div>
        </div>
      </div>

      <!-- Motivasi K-Map (Slide 5) -->
      <div class="grid-3-cards mb-4">
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-file-code"></i></div>
          <h3>1. Kompleksitas SOP / POS</h3>
          <p>Fungsi Boolean di dunia nyata (seperti sensor industri, sistem kendali, prosesor) seringkali sangat kompleks dan panjang jika dituliskan dalam bentuk kanonik standar minterm/maxterm.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-tools"></i></div>
          <h3>2. Keterbatasan Aljabar Manual</h3>
          <p>Penyederhanaan aljabar manual menuntut intuisi tinggi dan rentan kesalahan (<em>human error</em>) saat memilih hukum distribusi atau penyerapan mana yang harus diterapkan terlebih dahulu.</p>
        </div>

        <div class="feature-card highlighted-gold">
          <div class="feature-icon"><i class="fas fa-chess-board"></i></div>
          <h3>3. K-Map: Solusi Grafis Cepat</h3>
          <p><strong>Karnaugh Map</strong> adalah metode visual-geometris yang sangat sistematis, intuitif, dan cepat dalam mengidentifikasi pola minterm bertetangga untuk meminimalkan jumlah gerbang logika.</p>
        </div>
      </div>

      <!-- Konsep Dasar & Kode Gray (Slide 6 & 7) -->
      <h3 class="section-title"><i class="fas fa-th"></i> Konsep Fundamental & Penyusunan Kode Gray (Slide 6 & 7)</h3>
      <div class="grid-2-cols mb-4">
        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-table text-primary"></i>
            <h4>Prinsip Dasar Peta Karnaugh (Slide 6)</h4>
          </div>
          <ul class="luxury-list">
            <li><strong>Representasi Grafis:</strong> K-Map adalah pemetaan dua dimensi dari tabel kebenaran di mana setiap sel mewakili tepat satu <strong>Minterm</strong> (pada bentuk SOP) atau <strong>Maxterm</strong> (pada bentuk POS).</li>
            <li><strong>Pengisian Sel (Slide 7):</strong>
              <br>• Angka <code>1</code>: Minterm masuk dalam fungsi aktif (SOP).
              <br>• Angka <code>0</code>: Minterm tidak masuk / bernilai nol.
              <br>• Huruf <code>X</code>: <strong>Don't Care</strong> (boleh dianggap 1 atau 0 demi memperbesar kelompok).
            </li>
            <li><strong>Prinsip Grouping:</strong> Menggabungkan sel-sel bernilai 1 yang bersebelahan untuk mengeliminasi variabel yang nilainya berubah (antara 0 dan 1).</li>
          </ul>

          <!-- Diagram SOP K-Map vs POS K-Map (Slide 6) -->
          <div class="grid-2-cols mt-3" style="gap: 12px;">
            <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 10px; text-align: center;">
              <span class="pill-tag mb-2" style="background: rgba(0,210,255,0.15); color: var(--primary-cyan);">SOP K-Map (Minterm)</span>
              <table class="luxury-table" style="font-family: var(--font-mono); font-size: 11px; margin-top: 6px;">
                <thead>
                  <tr><th>A \ B</th><th>0</th><th>1</th></tr>
                </thead>
                <tbody>
                  <tr><th>0</th><td>m₀ <small>(0)</small></td><td>m₁ <small>(1)</small></td></tr>
                  <tr><th>1</th><td>m₂ <small>(2)</small></td><td>m₃ <small>(3)</small></td></tr>
                </tbody>
              </table>
            </div>

            <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 10px; text-align: center;">
              <span class="pill-tag mb-2" style="background: rgba(245,175,25,0.15); color: var(--accent-gold);">POS K-Map (Maxterm)</span>
              <table class="luxury-table" style="font-family: var(--font-mono); font-size: 11px; margin-top: 6px;">
                <thead>
                  <tr><th>A \ B</th><th>0</th><th>1</th></tr>
                </thead>
                <tbody>
                  <tr><th>0</th><td>M₀ <small>(0)</small></td><td>M₁ <small>(1)</small></td></tr>
                  <tr><th>1</th><td>M₂ <small>(2)</small></td><td>M₃ <small>(3)</small></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-barcode text-warning"></i>
            <h4>Mengapa Wajib Menggunakan Kode Gray? (Slide 7)</h4>
          </div>
          <p>Pada tabel K-Map, urutan koordinat biner disusun sebagai: <code>00 &rarr; 01 &rarr; 11 &rarr; 10</code>.</p>
          <div class="callout-sub" style="background: rgba(245, 175, 25, 0.08); border-color: rgba(245, 175, 25, 0.3);">
            <strong style="color: var(--accent-gold);"><i class="fas fa-exclamation-triangle"></i> Catatan Kuliah Slide 7:</strong><br>
            <em>"Bukan 2 (10), tapi 3 (11). Karena hanya boleh 1 variabel saja yang berubah antar kotak yang bersebelahan."</em>
          </div>
          <p style="font-size: 13px; color: var(--text-dim);" class="mt-2">Jika setelah <code>01</code> ditulis <code>10</code>, maka terjadi perubahan 2 bit sekaligus (bit pertama 0&rarr;1 dan bit kedua 1&rarr;0). Hal ini melanggar teorema kedekatan Boolean!</p>
          
          <div class="table-responsive mt-3">
            <table class="luxury-table" style="text-align: center; font-size: 11px; font-family: var(--font-mono);">
              <thead>
                <tr><th>Urutan Transisi</th><th>Bit Berubah</th><th>Status K-Map</th></tr>
              </thead>
              <tbody>
                <tr><td>00 &rarr; 01</td><td>Bit ke-2 (0 &rarr; 1)</td><td><span class="text-success">Sah (1 bit)</span></td></tr>
                <tr class="row-highlight"><td>01 &rarr; 11</td><td>Bit ke-1 (0 &rarr; 1)</td><td><span class="text-success">Sah (1 bit, Kode Gray)</span></td></tr>
                <tr><td>11 &rarr; 10</td><td>Bit ke-2 (1 &rarr; 0)</td><td><span class="text-success">Sah (1 bit)</span></td></tr>
                <tr><td>10 &rarr; 00 (Wrap)</td><td>Bit ke-1 (1 &rarr; 0)</td><td><span class="text-success">Sah (1 bit wrap-around)</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Aturan Pengelompokan / Grouping (Slide 7 & 8) -->
      <h3 class="section-title"><i class="fas fa-check-double"></i> Aturan Pengelompokan (Grouping Rules - Slide 7 & 8)</h3>
      
      <div class="grid-2-cols mb-4">
        
        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-list-ol text-success"></i>
            <h4>Kaidah Mutlak Grouping (Slide 7)</h4>
          </div>
          <ol class="luxury-list" style="padding-left: 18px;">
            <li><strong>Kelipatan Pangkat Dua (2<sup>n</sup>):</strong> Jumlah sel dalam sebuah grup hanya boleh berukuran <strong>1, 2, 4, 8, atau 16</strong>. Tidak boleh berjumlah 3, 5, 6, atau 7!</li>
            <li><strong>Bentuk Persegi Panjang / Bujur Sangkar:</strong> Kelompok sel harus berupa blok utuh (1&times;1, 1&times;2, 2&times;1, 2&times;2, 1&times;4, 4&times;1, 2&times;4, 4&times;4). Bentuk L, diagonal, atau zig-zag dilarang.</li>
            <li><strong>Sifat Wrap-Around (Melipat Pinggir):</strong> Pinggir paling kiri tersambung langsung dengan pinggir paling kanan (seperti silinder). Baris paling atas tersambung dengan baris paling bawah.</li>
            <li><strong>Prioritas Ukuran Terbesar:</strong> Selalu prioritaskan membentuk grup berukuran terbesar yang memungkinkan untuk mengeliminasi sebanyak mungkin variabel literal.</li>
          </ol>
        </div>

        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-balance-scale text-danger"></i>
            <h4>Komparasi Visual: Benar vs. Salah (Slide 8)</h4>
          </div>
          <div class="table-responsive">
            <table class="luxury-table" style="font-size: 13px;">
              <thead>
                <tr>
                  <th>Kasus Pengelompokan</th>
                  <th>Status</th>
                  <th>Alasan Teknis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mengelompokkan <strong>5 sel</strong> sekaligus</td>
                  <td><span class="badge-danger">SALAH (✗)</span></td>
                  <td>5 bukan pangkat dua (2<sup>n</sup>). Wajib dipecah menjadi grup 4 dan grup 2 dengan tumpang tindih (overlap)!</td>
                </tr>
                <tr>
                  <td>Mengelompokkan <strong>4 sel</strong> (2 &times; 2 atau 1 &times; 4)</td>
                  <td><span class="pill-tag" style="background: rgba(16,185,129,0.2); color: var(--accent-emerald);">BENAR (✓)</span></td>
                  <td>4 adalah 2<sup>2</sup>. Mengeliminasi tepat 2 variabel logika sekaligus!</td>
                </tr>
                <tr>
                  <td>Mengelompokkan <strong>3 sel</strong> berurutan</td>
                  <td><span class="badge-danger">SALAH (✗)</span></td>
                  <td>3 bukan pangkat dua. Harus dibuat grup 2 dengan overlap atau dibiarkan sel tunggal.</td>
                </tr>
                <tr>
                  <td>Mengelompokkan <strong>2 sel</strong> bertetangga</td>
                  <td><span class="pill-tag" style="background: rgba(16,185,129,0.2); color: var(--accent-emerald);">BENAR (✓)</span></td>
                  <td>2 adalah 2<sup>1</sup>. Mengeliminasi tepat 1 variabel logika.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  `,

  kmap234: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 04 / Sub-Materi 02</span>
        <h2>Penerapan K-Map 2, 3, dan 4 Variabel</h2>
        <p class="subtitle">Memahami struktur tabel, penempatan minterm, eliminasi variabel berubah, dan kondisi Don't Care (X).</p>
      </div>

      <!-- K-MAP 2 VARIABEL (Slide 9) -->
      <div class="exercise-module-box mb-4">
        <div class="exercise-module-header">
          <span class="badge-accent"><i class="fas fa-th-large"></i> K-Map 2 Variabel (Slide 9 ITERA)</span>
          <h3>Contoh 1: Q = AB + A'B + AB'</h3>
        </div>

        <div class="grid-2-cols mt-3">
          <div class="showcase-card">
            <h4>Grid K-Map 2-Variabel (2 &times; 2 = 4 Sel)</h4>
            <div class="table-responsive mt-2">
              <table class="luxury-table" style="text-align: center; font-family: var(--font-mono);">
                <thead>
                  <tr>
                    <th>B \\ A</th>
                    <th>0 (A')</th>
                    <th>1 (A)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>0 (B')</th>
                    <td>0 <small class="text-muted">(A'B')</small></td>
                    <td class="row-highlight"><strong>1</strong> <small style="color:var(--accent-gold);">(AB')</small></td>
                  </tr>
                  <tr>
                    <th>1 (B)</th>
                    <td class="row-highlight"><strong>1</strong> <small style="color:var(--accent-gold);">(A'B)</small></td>
                    <td class="row-highlight"><strong>1</strong> <small style="color:var(--accent-gold);">(AB)</small></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="mt-2 text-muted" style="font-size: 13px;">Input minterm: m₁ (A'B), m₂ (AB'), m₃ (AB). Minterm m₀ (A'B') bernilai 0.</p>
          </div>

          <div class="showcase-card">
            <h4>Langkah Pengelompokan & Pembuktian Aljabar</h4>
            <div class="solution-steps">
              <div><strong>1. Grup 1 (Kolom Vertikal A = 1):</strong><br>
                Menggabungkan sel <code>AB'</code> dan <code>AB</code>. Variabel B berubah dari 0 ke 1 (tereliminasi), menyisakan <strong>A</strong>.
              </div>
              <div class="mt-2"><strong>2. Grup 2 (Baris Horizontal B = 1):</strong><br>
                Menggabungkan sel <code>A'B</code> dan <code>AB</code>. Variabel A berubah dari 0 ke 1 (tereliminasi), menyisakan <strong>B</strong>.
              </div>
              <div class="callout-sub mt-2" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
                <strong style="color: var(--accent-emerald);">Hasil Penyederhanaan K-Map: Q = A + B</strong>
              </div>
              <div class="code-box-study mt-2">
                <strong>Pembuktian Aljabar Boolean (Slide 9):</strong><br>
                Q = AB + A'B + AB'<br>
                Q = A(B + B') + A'B &nbsp;&nbsp; <em>(Faktorkan A)</em><br>
                Q = A(1) + A'B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>(Hukum Komplemen B+B'=1)</em><br>
                Q = A + A'B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>(Hukum Identitas)</em><br>
                Q = <strong>A + B</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>(Hukum Penyerapan / Distributif)</em> &rarr; <strong>Terbukti Tepat!</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- K-MAP 3 VARIABEL (Slide 10) -->
      <div class="exercise-module-box mb-4">
        <div class="exercise-module-header">
          <span class="badge-accent"><i class="fas fa-th"></i> K-Map 3 Variabel (Slide 10 ITERA)</span>
          <h3>Contoh: Q = ABC' + AB'C' + AB'C + ABC</h3>
        </div>

        <div class="grid-2-cols mt-3">
          <div class="showcase-card">
            <h4>Grid K-Map 3-Variabel (2 &times; 4 = 8 Sel)</h4>
            <div class="table-responsive mt-2">
              <table class="luxury-table" style="text-align: center; font-family: var(--font-mono); font-size: 13px;">
                <thead>
                  <tr>
                    <th>C \\ AB</th>
                    <th>00 (A'B')</th>
                    <th>01 (A'B)</th>
                    <th style="color: var(--primary-cyan);">11 (AB)</th>
                    <th style="color: var(--accent-gold);">10 (AB')</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>0 (C')</th>
                    <td>0</td>
                    <td>0</td>
                    <td class="row-highlight"><strong>1</strong> <small>(ABC')</small></td>
                    <td class="row-highlight"><strong>1</strong> <small>(AB'C')</small></td>
                  </tr>
                  <tr>
                    <th>1 (C)</th>
                    <td>0</td>
                    <td>0</td>
                    <td class="row-highlight"><strong>1</strong> <small>(ABC)</small></td>
                    <td class="row-highlight"><strong>1</strong> <small>(AB'C)</small></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="mt-2 text-muted" style="font-size: 13px;">Minterm bernilai 1: m₄ (100), m₅ (101), m₆ (110), m₇ (111). Sisa sel bernilai 0.</p>
          </div>

          <div class="showcase-card">
            <h4>Analisis Pengelompokan Grup 4 Sel</h4>
            <div class="solution-steps">
              <p>Perhatikan bahwa seluruh 4 sel pada kolom <code>AB = 11</code> dan <code>AB = 10</code> bernilai 1 dan saling bersebelahan:</p>
              <div>• Membentuk <strong>1 grup beranggotakan 4 sel (2 &times; 2)</strong>.</div>
              <div>• <strong>Variabel B:</strong> bernilai 1 pada kolom 11 dan 0 pada kolom 10 &rarr; <em>Berubah (Tereliminasi)</em>.</div>
              <div>• <strong>Variabel C:</strong> bernilai 0 pada baris atas dan 1 pada baris bawah &rarr; <em>Berubah (Tereliminasi)</em>.</div>
              <div>• <strong>Variabel A:</strong> bernilai 1 pada kolom 11 dan 1 pada kolom 10 &rarr; <em>Konstan = 1 (Tetap)</em>.</div>
              <div class="callout-sub mt-3" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
                <strong style="color: var(--accent-emerald); font-size: 16px;">Hasil Penyederhanaan K-Map: Q = A</strong>
              </div>
              <small class="text-success">Grup berukuran 4 sel berhasil mengeliminasi 2 variabel sekaligus (B dan C)!</small>
            </div>
          </div>
        </div>
      </div>

      <!-- K-MAP 4 VARIABEL (Slide 13) -->
      <div class="exercise-module-box mb-4">
        <div class="exercise-module-header">
          <span class="badge-accent"><i class="fas fa-border-all"></i> K-Map 4 Variabel (Slide 13 ITERA)</span>
          <h3>Contoh: Q = A'BC'D + ABC'D + A'BCD + ABCD</h3>
        </div>

        <div class="grid-2-cols mt-3">
          <div class="showcase-card">
            <h4>Grid K-Map 4-Variabel (4 &times; 4 = 16 Sel)</h4>
            <div class="table-responsive mt-2">
              <table class="luxury-table" style="text-align: center; font-family: var(--font-mono); font-size: 12.5px;">
                <thead>
                  <tr>
                    <th>CD \\ AB</th>
                    <th>00</th>
                    <th style="color: var(--primary-cyan);">01</th>
                    <th style="color: var(--primary-cyan);">11</th>
                    <th>10</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>00</th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th style="color: var(--accent-gold);">01</th>
                    <td>0</td>
                    <td class="row-highlight"><strong>1</strong> <small>(m₅)</small></td>
                    <td class="row-highlight"><strong>1</strong> <small>(m₁₃)</small></td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th style="color: var(--accent-gold);">11</th>
                    <td>0</td>
                    <td class="row-highlight"><strong>1</strong> <small>(m₇)</small></td>
                    <td class="row-highlight"><strong>1</strong> <small>(m₁₅)</small></td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th>10</th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="mt-2 text-muted" style="font-size: 13px;">SOP kanonik: m₅ (0101), m₇ (0111), m₁₃ (1101), m₁₅ (1111).</p>
          </div>

          <div class="showcase-card">
            <h4>Analisis Eliminasi Suku 4-Variabel</h4>
            <div class="solution-steps">
              <p>Keempat kotak bernilai 1 membentuk 1 grup bujur sangkar (2 &times; 2):</p>
              <div>• <strong>Variabel A:</strong> bernilai 0 (kolom 01) dan 1 (kolom 11) &rarr; <em>Berubah &rarr; Tereliminasi</em>.</div>
              <div>• <strong>Variabel B:</strong> bernilai 1 pada kedua kolom &rarr; <strong>Konstan = 1 (TETAP B)</strong>.</div>
              <div>• <strong>Variabel C:</strong> bernilai 0 (baris 01) dan 1 (baris 11) &rarr; <em>Berubah &rarr; Tereliminasi</em>.</div>
              <div>• <strong>Variabel D:</strong> bernilai 1 pada kedua baris &rarr; <strong>Konstan = 1 (TETAP D)</strong>.</div>
              <div class="callout-sub mt-3" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
                <strong style="color: var(--accent-emerald); font-size: 16px;">Hasil Minimum K-Map 4-Variabel: Q = BD</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- DON'T CARE CONDITION (Slide 17) -->
      <div class="showcase-card mb-2">
        <div class="showcase-header">
          <i class="fas fa-question-circle text-warning"></i>
          <h4>Kondisi Don't Care (X) pada K-Map (Slide 17 ITERA)</h4>
        </div>
        <div class="grid-2-cols mt-2">
          <div>
            <p><strong>Definisi (Slide 17):</strong></p>
            <p>Kondisi input yang secara fisik <strong>tidak pernah terjadi</strong> dalam operasional sistem, atau kondisi di mana nilai output rangkaian <strong>tidak relevan / tidak diperhatikan</strong>. Sel ini ditandai dengan simbol <code>X</code> (Don't Care).</p>
            <div class="callout-sub mt-2">
              <strong>Tujuan & Strategi Penggunaan:</strong>
              <ul class="luxury-list mt-1">
                <li>Dapat dimanfaatkan sebagai angka <code>1</code> untuk <strong>memperbesar ukuran grup</strong> sehingga persamaan menjadi jauh lebih sederhana dan hemat gerbang logika.</li>
                <li>Boleh diabaikan (dianggap <code>0</code>) jika tidak membantu memperbesar grup.</li>
                <li>Tidak mengubah kebenaran fungsi operasional alat.</li>
              </ul>
            </div>
          </div>

          <div>
            <p><strong>Contoh K-Map 3-Variabel dengan Don't Care (Slide 17):</strong></p>
            <div class="table-responsive mt-1">
              <table class="luxury-table" style="text-align: center; font-family: var(--font-mono); font-size: 13px;">
                <thead>
                  <tr>
                    <th>C \\ AB</th>
                    <th>B'A'</th>
                    <th>B'A</th>
                    <th>BA</th>
                    <th>BA'</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>C'</th>
                    <td style="color: var(--accent-amber); font-weight: 700;">X</td>
                    <td style="color: var(--accent-amber); font-weight: 700;">X</td>
                    <td style="color: var(--primary-cyan); font-weight: 700;">1</td>
                    <td style="color: var(--primary-cyan); font-weight: 700;">1</td>
                  </tr>
                  <tr>
                    <th>C</th>
                    <td>0</td>
                    <td style="color: var(--primary-cyan); font-weight: 700;">1</td>
                    <td style="color: var(--primary-cyan); font-weight: 700;">1</td>
                    <td style="color: var(--primary-cyan); font-weight: 700;">1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="mt-2 text-muted" style="font-size: 12.5px;">Jika kedua nilai <code>X</code> pada baris C' dianggap <code>1</code>, kita dapat membentuk grup 4 sel horizontal pada baris C' dan grup 4 sel horizontal pada baris BA/BA', meminimalkan gerbang secara drastis!</p>
          </div>
        </div>
      </div>

    </div>
  `,

  cases: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 04 / Sub-Materi 03</span>
        <h2>Studi Kasus Desain Sensor Nyata dengan K-Map 4 Variabel</h2>
        <p class="subtitle">Menganalisis sistem keamanan gedung 4 sensor dan sistem gerbang parkir otomatis dari deskripsi soal cerita hingga K-Map minimum.</p>
      </div>

      <!-- STUDI KASUS 1: SISTEM KEAMANAN GEDUNG (Slide 14 - 16) -->
      <div class="exercise-module-box mb-4">
        <div class="exercise-module-header">
          <span class="badge-accent"><i class="fas fa-shield-alt"></i> Studi Kasus 1 (Slide 14 - 16 ITERA) ★</span>
          <h3>Desain Sistem Alarm Keamanan Gedung 4 Sensor</h3>
        </div>

        <div class="grid-2-cols mt-3">
          <div class="showcase-card">
            <h4>Deskripsi Masalah Soal Cerita (Slide 14):</h4>
            <p>Sebuah gedung bertingkat memiliki sistem keamanan berbasis 4 sensor digital:</p>
            <ul class="luxury-list mt-2">
              <li><code>A</code> = Sensor pintu (1 jika pintu terbuka, 0 jika tertutup)</li>
              <li><code>B</code> = Sensor jendela (1 jika jendela terbuka, 0 jika tertutup)</li>
              <li><code>C</code> = Sensor gerak (1 jika ada gerakan, 0 jika tenang)</li>
              <li><code>D</code> = Sensor asap (1 jika terdeteksi asap kebakaran, 0 jika aman)</li>
            </ul>
            <div class="callout-sub mt-3" style="background: rgba(241,39,17,0.08); border-color: rgba(241,39,17,0.3);">
              <strong>Kondisi Alarm Menyala (Q = 1):</strong>
              <ul class="luxury-list mt-1">
                <li>Pintu terbuka dan ada gerakan &rarr; <code>A · C</code></li>
                <li>Jendela terbuka dan ada gerakan &rarr; <code>B · C</code></li>
                <li>Ada asap kebakaran tanpa peduli sensor lain &rarr; <code>D</code></li>
              </ul>
              <strong class="mt-2 d-block" style="color: var(--accent-amber);">Persamaan Fungsi: Q(A, B, C, D) = (A · C) + (B · C) + D</strong>
            </div>
          </div>

          <!-- Simulator Sensor Real-Time Interaktif -->
          <div class="showcase-card">
            <h4>Simulator Interaktif Sensor Keamanan Gedung:</h4>
            <p class="text-muted" style="font-size: 13px;">Uji sakelar sensor di bawah ini untuk melihat status alarm real-time:</p>
            
            <div class="interactive-circuit-board mt-2">
              <div class="grid-2-cols" style="gap: 10px;">
                <div class="gate-io-row">
                  <span class="io-label">Pintu (A):</span>
                  <button class="gate-toggle-btn active" id="btnSensA0" onclick="window.sisdigApp.setBuildingSensor('A', 0)">0 (Tutup)</button>
                  <button class="gate-toggle-btn" id="btnSensA1" onclick="window.sisdigApp.setBuildingSensor('A', 1)">1 (Buka)</button>
                </div>
                <div class="gate-io-row">
                  <span class="io-label">Jendela (B):</span>
                  <button class="gate-toggle-btn active" id="btnSensB0" onclick="window.sisdigApp.setBuildingSensor('B', 0)">0 (Tutup)</button>
                  <button class="gate-toggle-btn" id="btnSensB1" onclick="window.sisdigApp.setBuildingSensor('B', 1)">1 (Buka)</button>
                </div>
                <div class="gate-io-row">
                  <span class="io-label">Gerak (C):</span>
                  <button class="gate-toggle-btn active" id="btnSensC0" onclick="window.sisdigApp.setBuildingSensor('C', 0)">0 (Aman)</button>
                  <button class="gate-toggle-btn" id="btnSensC1" onclick="window.sisdigApp.setBuildingSensor('C', 1)">1 (Gerak!)</button>
                </div>
                <div class="gate-io-row">
                  <span class="io-label">Asap (D):</span>
                  <button class="gate-toggle-btn active" id="btnSensD0" onclick="window.sisdigApp.setBuildingSensor('D', 0)">0 (Aman)</button>
                  <button class="gate-toggle-btn" id="btnSensD1" onclick="window.sisdigApp.setBuildingSensor('D', 1)">1 (Asap!)</button>
                </div>
              </div>

              <div class="alarm-status-banner mt-3 p-3 text-center" id="alarmStatusBanner" style="border-radius: 8px; background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.4);">
                <span style="font-size: 20px; font-weight: 800; color: #10b981;" id="alarmStatusText">
                  <i class="fas fa-check-shield"></i> SISTEM AMAN (Q = 0)
                </span>
                <p id="alarmReasonText" class="text-muted mt-1" style="font-size: 12.5px;">Semua sensor berada dalam batas normal.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Tabel Kebenaran 16 Kombinasi & K-Map 4-Var (Slide 15 - 16) -->
        <div class="grid-2-cols mt-4">
          <div class="showcase-card">
            <h4>Tabel Kebenaran 16 Kombinasi Lengkap (Slide 15):</h4>
            <div class="table-responsive mt-2" style="max-height: 280px; overflow-y: auto;">
              <table class="luxury-table" style="font-size: 12px; text-align: center;">
                <thead>
                  <tr><th>Baris</th><th>A</th><th>B</th><th>C</th><th>D</th><th>Output Q</th><th>Keterangan Sistem</th></tr>
                </thead>
                <tbody>
                  <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>Semua aman</td></tr>
                  <tr class="row-highlight"><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td><strong>1</strong></td><td>Asap terdeteksi</td></tr>
                  <tr><td>2</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>Hanya gerakan (bukan pintu/jendela)</td></tr>
                  <tr class="row-highlight"><td>3</td><td>0</td><td>0</td><td>1</td><td>1</td><td><strong>1</strong></td><td>Asap terdeteksi</td></tr>
                  <tr><td>4</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>Hanya jendela terbuka</td></tr>
                  <tr class="row-highlight"><td>5</td><td>0</td><td>1</td><td>0</td><td>1</td><td><strong>1</strong></td><td>Asap terdeteksi</td></tr>
                  <tr class="row-highlight"><td>6</td><td>0</td><td>1</td><td>1</td><td>0</td><td><strong>1</strong></td><td>Jendela terbuka + gerakan</td></tr>
                  <tr class="row-highlight"><td>7</td><td>0</td><td>1</td><td>1</td><td>1</td><td><strong>1</strong></td><td>Asap terdeteksi</td></tr>
                  <tr><td>8</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>Hanya pintu terbuka</td></tr>
                  <tr class="row-highlight"><td>9</td><td>1</td><td>0</td><td>0</td><td>1</td><td><strong>1</strong></td><td>Asap terdeteksi</td></tr>
                  <tr class="row-highlight"><td>10</td><td>1</td><td>0</td><td>1</td><td>0</td><td><strong>1</strong></td><td>Pintu terbuka + gerakan</td></tr>
                  <tr class="row-highlight"><td>11</td><td>1</td><td>0</td><td>1</td><td>1</td><td><strong>1</strong></td><td>Asap, pintu + gerakan</td></tr>
                  <tr><td>12</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>Pintu + jendela (tanpa gerak & asap)</td></tr>
                  <tr class="row-highlight"><td>13</td><td>1</td><td>1</td><td>0</td><td>1</td><td><strong>1</strong></td><td>Asap terdeteksi</td></tr>
                  <tr class="row-highlight"><td>14</td><td>1</td><td>1</td><td>1</td><td>0</td><td><strong>1</strong></td><td>Pintu + gerak & jendela + gerak</td></tr>
                  <tr class="row-highlight"><td>15</td><td>1</td><td>1</td><td>1</td><td>1</td><td><strong>1</strong></td><td>Asap terdeteksi</td></tr>
                </tbody>
              </table>
            </div>
            <p class="text-success mt-2" style="font-size: 13px;"><strong>11 Minterm Aktif (Slide 15):</strong> Q = Σ m{1, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15}</p>
          </div>

          <div class="showcase-card">
            <h4>Peta Karnaugh 4 Variabel & Grouping (Slide 16):</h4>
            <div class="table-responsive mt-2">
              <table class="luxury-table" style="text-align: center; font-family: var(--font-mono); font-size: 12.5px;">
                <thead>
                  <tr><th>AB \\ CD</th><th>00</th><th style="color:var(--primary-cyan);">01</th><th style="color:var(--primary-cyan);">11</th><th style="color:var(--accent-gold);">10</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <th>00</th>
                    <td>0</td>
                    <td class="row-highlight"><strong>1</strong> <small>(m₁)</small></td>
                    <td class="row-highlight"><strong>1</strong> <small>(m₃)</small></td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th>01</th>
                    <td>0</td>
                    <td class="row-highlight"><strong>1</strong> <small>(m₅)</small></td>
                    <td class="row-highlight"><strong>1</strong> <small>(m₇)</small></td>
                    <td class="row-highlight" style="border: 2px solid var(--accent-gold);"><strong>1</strong> <small>(m₆)</small></td>
                  </tr>
                  <tr>
                    <th>11</th>
                    <td>0</td>
                    <td class="row-highlight"><strong>1</strong> <small>(m₁₃)</small></td>
                    <td class="row-highlight"><strong>1</strong> <small>(m₁₅)</small></td>
                    <td class="row-highlight" style="border: 2px solid var(--accent-gold);"><strong>1</strong> <small>(m₁₄)</small></td>
                  </tr>
                  <tr>
                    <th>10</th>
                    <td>0</td>
                    <td class="row-highlight"><strong>1</strong> <small>(m₉)</small></td>
                    <td class="row-highlight"><strong>1</strong> <small>(m₁₁)</small></td>
                    <td class="row-highlight" style="border: 2px solid var(--accent-gold);"><strong>1</strong> <small>(m₁₀)</small></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="solution-steps mt-3">
              <div><strong>1. Grup 1 (8 Sel - Kolom CD = 01 dan 11):</strong><br>
                Mencakup minterm <code>{1, 3, 5, 7, 9, 11, 13, 15}</code>. Karena A, B, C berubah dan D tetap 1 &rarr; <strong>D</strong>.
              </div>
              <div class="mt-1"><strong>2. Grup 2 (4 Sel - Kolom AB=11, 10 & CD=11, 10):</strong><br>
                Mencakup <code>{10, 11, 14, 15}</code> di mana A=1 dan C=1 &rarr; <strong>AC</strong>.
              </div>
              <div class="mt-1"><strong>3. Grup 3 (4 Sel - Kolom AB=01, 11 & CD=11, 10):</strong><br>
                Mencakup <code>{6, 7, 14, 15}</code> di mana B=1 dan C=1 &rarr; <strong>BC</strong>.
              </div>
              <div class="callout-sub mt-2" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
                <strong style="color: var(--accent-emerald); font-size: 16px;">Hasil Minimum Resmi Slide 16: Q(A, B, C, D) = D + AC + BC</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- STUDI KASUS 2: SISTEM GERBANG PARKIR OTOMATIS (Slide 18) -->
      <div class="exercise-module-box mb-2">
        <div class="exercise-module-header">
          <span class="badge-accent"><i class="fas fa-parking"></i> Studi Kasus 2 (Slide 18 No. 2 ITERA) ★</span>
          <h3>Desain Logika Gerbang Parkir Otomatis</h3>
        </div>

        <div class="grid-2-cols mt-3">
          <div class="showcase-card">
            <h4>Deskripsi 4 Sensor Parkir (Slide 18):</h4>
            <ul class="luxury-list mt-2">
              <li><code>A</code> = Kartu parkir valid (1 jika valid, 0 jika salah)</li>
              <li><code>B</code> = Kendaraan terdeteksi di sensor depan palang (1 jika ada)</li>
              <li><code>C</code> = Kapasitas parkir penuh (1 jika penuh, 0 jika belum penuh)</li>
              <li><code>D</code> = Tombol darurat ditekan (1 jika darurat aktif)</li>
            </ul>
            <div class="code-box-study mt-3">
              <strong>Kondisi Gerbang Terbuka (F = 1):</strong><br>
              1. Kendaraan ada (B) & Kartu valid (A) & Kapasitas belum penuh (C̄) &rarr; <code>A · B · C̄</code><br>
              2. Tombol darurat ditekan (D = 1) tanpa peduli sensor lain &rarr; <code>D</code><br><br>
              <span class="text-success"><strong>Persamaan Logika Sistem: F = D + AB C̄</strong></span>
            </div>
          </div>

          <div class="showcase-card">
            <h4>Analisis K-Map 4 Variabel Gerbang Parkir:</h4>
            <p>Minterm yang bernilai 1:</p>
            <ul class="luxury-list mt-1">
              <li>Suku <code>D</code> aktif pada seluruh 8 minterm ber-D=1: <code>m₁, m₃, m₅, m₇, m₉, m₁₁, m₁₃, m₁₅</code>.</li>
              <li>Suku <code>AB C̄</code> aktif pada minterm <code>m₁₂ (1100)</code> dan <code>m₁₃ (1101)</code>.</li>
            </ul>
            <p class="mt-2 text-muted" style="font-size: 13px;">Pada K-Map 4-variabel, <code>m₁₃</code> sudah masuk dalam grup 8 sel dari <code>D</code>. Minterm <code>m₁₂</code> digabungkan dengan tetangganya <code>m₁₃</code> membentuk grup 2 sel horizontal yang mengeliminasi D, menyisakan <code>AB C̄</code>.</p>
            <div class="callout-sub mt-2" style="background: rgba(0,210,255,0.08); border-color: rgba(0,210,255,0.3);">
              <strong style="color: var(--primary-cyan);">Bentuk Minimum Gerbang Parkir: F = D + AB C̄ &nbsp; (atau D + ABC')</strong>
            </div>
          </div>
        </div>
      </div>

    </div>
  `,

  exercises: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 04 / Sub-Materi 05</span>
        <h2>Pembahasan Lengkap Latihan Slide 11–12 & 18 ITERA</h2>
        <p class="subtitle">Kunci jawaban tuntas, pemetaan minterm ke Peta Karnaugh, pembuktian eliminasi variabel, dan analisis prime implicants.</p>
      </div>

      <!-- LATIHAN SLIDE 11 & JAWABAN SLIDE 12 -->
      <div class="exercise-module-box mb-4">
        <div class="exercise-module-header">
          <span class="badge-accent"><i class="fas fa-edit"></i> Latihan Slide 11 & Jawaban Slide 12 ITERA</span>
          <h3>Penyederhanaan K-Map 2 & 3 Variabel</h3>
        </div>

        <div class="grid-2-cols mt-3">
          
          <!-- Latihan 1 -->
          <div class="showcase-card">
            <h4>1. Sederhanakan: <code>Q = AB̄ + ĀB̄</code> (2-Variabel)</h4>
            <div class="solution-steps mt-2">
              <p><strong>Identifikasi Minterm:</strong></p>
              <div>• <code>AB̄</code> = A=1, B=0 &rarr; minterm m₂</div>
              <div>• <code>ĀB̄</code> = A=0, B=0 &rarr; minterm m₀</div>
              <div class="mt-2"><strong>Pemetaan K-Map 2-Variabel (Slide 12 Gambar 1):</strong></div>
              <div class="table-responsive mt-1">
                <table class="luxury-table" style="text-align: center; font-family: var(--font-mono); font-size: 13px;">
                  <thead><tr><th>B \ A</th><th>0</th><th>1</th></tr></thead>
                  <tbody>
                    <tr class="row-highlight"><th>0</th><td><strong>1</strong> <small>(ĀB̄)</small></td><td><strong>1</strong> <small>(AB̄)</small></td></tr>
                    <tr><th>1</th><td>0</td><td>0</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="mt-2"><strong>Analisis Eliminasi:</strong><br>
                Kedua sel berada pada baris B = 0 (B̄). Nilai A berubah dari 0 ke 1 (tereliminasi). Nilai B tetap konstan = 0 (B̄).
              </div>
              <div class="callout-sub mt-2" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
                <strong style="color: var(--accent-emerald);">Hasil Akhir Resmi Slide 12: Q = B̄ &nbsp; (atau B')</strong>
              </div>
            </div>
          </div>

          <!-- Latihan 2 -->
          <div class="showcase-card">
            <h4>2. Sederhanakan: <code>Q = ĀB̄C + ĀBC + AB̄C + ABC + ABC̄</code> (3-Variabel)</h4>
            <div class="solution-steps mt-2">
              <p><strong>Identifikasi Minterm:</strong></p>
              <div>m₁ (001), m₃ (011), m₅ (101), m₇ (111), m₆ (110).</div>
              <div class="mt-2"><strong>Pemetaan K-Map 3-Variabel (Slide 12 Gambar 2):</strong></div>
              <div class="table-responsive mt-1">
                <table class="luxury-table" style="text-align: center; font-family: var(--font-mono); font-size: 12px;">
                  <thead><tr><th>C \ AB</th><th>00</th><th>01</th><th>11</th><th>10</th></tr></thead>
                  <tbody>
                    <tr><th>0</th><td>0</td><td>0</td><td class="row-highlight" style="border: 2px solid var(--accent-gold);"><strong>1</strong> <small>(m₆)</small></td><td>0</td></tr>
                    <tr class="row-highlight"><th>1</th><td><strong>1</strong> <small>(m₁)</small></td><td><strong>1</strong> <small>(m₃)</small></td><td><strong>1</strong> <small>(m₇)</small></td><td><strong>1</strong> <small>(m₅)</small></td></tr>
                  </tbody>
                </table>
              </div>
              <div class="mt-2"><strong>Analisis Dua Kelompok (Slide 12):</strong><br>
                1. <strong>Grup 4 Sel Horizontal (Baris C = 1):</strong> Mencakup {m₁, m₃, m₇, m₅}. A dan B berubah &rarr; menghasilkan <strong>C</strong>.<br>
                2. <strong>Grup 2 Sel Vertikal (Kolom AB = 11):</strong> Mencakup {m₆, m₇}. C berubah (0 &rarr; 1) &rarr; menghasilkan <strong>AB</strong>.
              </div>
              <div class="callout-sub mt-2" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
                <strong style="color: var(--accent-emerald);">Hasil Akhir Resmi Slide 12: Q = AB + C</strong>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- LATIHAN SLIDE 18 -->
      <div class="exercise-module-box mb-2">
        <div class="exercise-module-header">
          <span class="badge-accent"><i class="fas fa-tasks"></i> Latihan Soal Slide 18 ITERA</span>
          <h3>Evaluasi K-Map 4 Variabel & Sistem Nyata</h3>
        </div>

        <div class="grid-2-cols mt-3">
          
          <div class="showcase-card">
            <h4>Soal 1: Sederhanakan <code>Q = ABCD' + AB'C'D + A'BCD</code></h4>
            <div class="solution-steps mt-2">
              <p><strong>Identifikasi Minterm 4-Variabel:</strong></p>
              <div>• <code>ABCD'</code> = 1110₂ = minterm m₁₄</div>
              <div>• <code>AB'C'D</code> = 1001₂ = minterm m₉</div>
              <div>• <code>A'BCD</code> = 0111₂ = minterm m₇</div>
              <div class="mt-2"><strong>Analisis Kedekatan Kotak pada K-Map:</strong></div>
              <ul class="luxury-list" style="font-size: 13px;">
                <li>m₁₄ berada di sel (AB=11, CD=10).</li>
                <li>m₉ berada di sel (AB=10, CD=01).</li>
                <li>m₇ berada di sel (AB=01, CD=11).</li>
              </ul>
              <p class="text-warning mt-2" style="font-size: 13px;">
                <i class="fas fa-info-circle"></i> Ketiga minterm ini memiliki jarak Hamming &ge; 2 satu sama lain (tidak ada sisi yang saling bersebelahan langsung atau melingkar pada K-Map).
              </p>
              <div class="callout-sub mt-2" style="background: rgba(0,210,255,0.08); border-color: rgba(0,210,255,0.3);">
                <strong>Kesimpulan Aljabar:</strong> Ketiga suku adalah <em>Essential Prime Implicants</em> terisolasi. Bentuk minimum tidak dapat diperkecil lagi:<br>
                <code style="color:var(--primary-cyan); font-weight:700;">Q = ABCD' + AB'C'D + A'BCD</code>
              </div>
            </div>
          </div>

    </div>
  `
};

/**
 * TEKS MATERI DETAIL MINGGU 6: MULTILEVEL NAND, NOR, DAN MULTIPLEXER
 * Berdasarkan Slide Resmi Pertemuan 6 MK Sistem Digital ITERA (3-SKS)
 * Dosen Pengampu: Dr. Swadexi Istiqphara, S.T., M.T.
 */
const WEEK6_CONTENT = {
  universal_multilevel: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 06 / Sub-Materi 01</span>
        <h2>Gerbang Universal (NAND & NOR) & Desain Rangkaian Multilevel</h2>
        <p class="subtitle">Memahami teorema universalitas gerbang, pembuktian hukum De Morgan, serta prosedur perancangan sirkuit logika bertingkat (multilevel).</p>
      </div>

      <!-- Detail Kuliah & Rujukan Resmi Slide 1 - 3 -->
      <div class="glass-callout mb-4">
        <div class="callout-icon"><i class="fas fa-graduation-cap"></i></div>
        <div class="callout-body">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <h4 style="margin:0;">Informasi Kuliah Pertemuan 6 ITERA</h4>
            <span class="pill-tag"><i class="fas fa-university"></i> Institut Teknologi Sumatera</span>
          </div>
          <div class="grid-2-cols mt-2" style="font-size: 13.5px;">
            <div>
              <strong>Mata Kuliah:</strong> Sistem Digital (INF203 / EL2102) • 3-SKS<br>
              <strong>Materi:</strong> Multilevel NAND, NOR, dan Multiplexer<br>
              <strong>Dosen Pengampu:</strong> Dr. Swadexi Istiqphara, S.T., M.T.<br>
              <strong>Buku Rujukan (Slide 2):</strong> S. Brown and Z. Vranesic, <em>Fundamentals of Digital Logic and VHDL Design</em>, 3rd Edition, McGraw-Hill, 2009.
            </div>
            <div>
              <strong>Sub - CPMK Pertemuan 6 (Slide 3):</strong>
              <ul class="luxury-list mt-1" style="font-size: 12.5px;">
                <li>1. Mahasiswa mampu memahami implementasi rangkaian multilevel NAND &amp; NOR.</li>
                <li>2. Mahasiswa mampu menjelaskan prinsip multiplexer (MUX).</li>
                <li>3. Mahasiswa dapat mendesain rangkaian menggunakan kombinasi NAND/NOR/MUX.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Review Hukum De Morgan (Slide 5) -->
      <h3 class="section-title"><i class="fas fa-balance-scale"></i> 1. Review: Hukum De Morgan (De Morgan's Law) (Slide 5)</h3>
      <div class="grid-2-cols mb-4">
        <!-- NOR = Bubbled AND -->
        <div class="feature-card highlighted-gold">
          <div class="feature-icon"><i class="fas fa-project-diagram"></i></div>
          <h3>1. Hukum De Morgan Pertama: NOR = Bubbled AND</h3>
          <p>Komplemen dari penjumlahan (OR) sama dengan perkalian (AND) dari masing-masing komplemen variabelnya:</p>
          <div class="code-box-study mt-2" style="font-size: 16px; font-weight: 700; color: var(--accent-gold);">
            (A + B)' = Ā · B̄ &nbsp;&nbsp;&harr;&nbsp;&nbsp; NOR &equiv; Bubbled AND
          </div>
          <p class="text-muted mt-2" style="font-size: 13px;">
            Artinya, gerbang <strong>NOR</strong> dengan input <code>A</code> dan <code>B</code> menghasilkan fungsi yang persis sama dengan gerbang <strong>AND</strong> yang kedua inputnya telah diberi gelembung pembalik (bubble/inverter).
          </p>
        </div>

        <!-- NAND = Bubbled OR -->
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-shapes"></i></div>
          <h3>2. Hukum De Morgan Kedua: NAND = Bubbled OR</h3>
          <p>Komplemen dari perkalian (AND) sama dengan penjumlahan (OR) dari masing-masing komplemen variabelnya:</p>
          <div class="code-box-study mt-2" style="font-size: 16px; font-weight: 700; color: var(--primary-cyan);">
            (A · B)' = Ā + B̄ &nbsp;&nbsp;&harr;&nbsp;&nbsp; NAND &equiv; Bubbled OR
          </div>
          <p class="text-muted mt-2" style="font-size: 13px;">
            Artinya, gerbang <strong>NAND</strong> dengan input <code>A</code> dan <code>B</code> menghasilkan fungsi yang persis sama dengan gerbang <strong>OR</strong> yang kedua inputnya telah diberi gelembung pembalik (bubble/inverter).
          </p>
        </div>
      </div>

      <!-- NAND dan NOR sebagai Gerbang Universal (Slide 6) -->
      <h3 class="section-title"><i class="fas fa-star"></i> 2. NAND &amp; NOR sebagai Gerbang Universal (Universal Gates) (Slide 6)</h3>
      <div class="showcase-card mb-4">
        <div class="showcase-header">
          <i class="fas fa-quote-left text-warning"></i>
          <h4 style="font-size: 18px; color: var(--accent-gold);">
            "Semua fungsi logika (AND, OR, NOT, XOR, XNOR) bisa dibentuk hanya dari gerbang NAND atau NOR"
          </h4>
        </div>
        <p class="mt-2" style="font-size: 14px;">Meskipun dalam perancangan sistem digital terdapat banyak ragam gerbang logika dasar, <strong>kita tidak wajib memiliki semuanya secara fisik di rangkaian perangkat keras!</strong></p>
        <div class="grid-3-cards mt-3">
          <div class="feature-card">
            <div class="feature-icon"><i class="fas fa-microchip"></i></div>
            <h3>Cukup 1 Jenis Gerbang</h3>
            <p>Cukup dengan satu jenis gerbang saja (hanya NAND atau hanya NOR), kita sudah bisa menyusun rangkaian logika kompleks apapun.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon"><i class="fas fa-shield-alt"></i></div>
            <h3>Kekuatan Fungsional Lengkap</h3>
            <p>NAND dan NOR secara matematis terbukti <em>functional complete</em> (mampu merepresentasikan sembarang fungsi aljabar Boolean).</p>
          </div>
          <div class="feature-card highlighted-gold">
            <div class="feature-icon"><i class="fas fa-industry"></i></div>
            <h3>Efisiensi Fabrikasi IC</h3>
            <p>Dalam fabrikasi semikonduktor (CMOS/TTL), gerbang NAND/NOR membutuhkan jumlah transistor paling sedikit, sehingga diproduksi massal secara murah dan andal.</p>
          </div>
        </div>
      </div>

      <!-- Pembuktian Gerbang Dasar dari NAND (Slide 7) -->
      <h3 class="section-title"><i class="fas fa-check-double"></i> 3. Pembuktian Matematis: Membentuk Fungsi Dasar dari NAND (Slide 7)</h3>
      <div class="grid-2-cols mb-4">
        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-chevron-right text-primary"></i>
            <h4>A. NOT dari NAND (1 Gerbang NAND)</h4>
          </div>
          <p style="font-size: 13.5px;">Hubungkan kedua input NAND ke sinyal yang sama (<code>A</code> dan <code>A</code>):</p>
          <div class="code-box-study mt-2">
            <code>Y = (A · A)' = Ā</code><br>
            <span class="text-success"><i class="fas fa-check"></i> Terbukti: Satu gerbang NAND dengan input disatukan berfungsi sebagai inverter (NOT).</span>
          </div>

          <div class="showcase-header mt-4">
            <i class="fas fa-chevron-right text-primary"></i>
            <h4>B. AND dari NAND (2 Gerbang NAND)</h4>
          </div>
          <p style="font-size: 13.5px;">Gunakan 1 NAND untuk perkalian, lalu balik hasilnya dengan NOT NAND kedua:</p>
          <div class="code-box-study mt-2">
            <code>Y = ((A · B)')' = A · B</code><br>
            <span class="text-success"><i class="fas fa-check"></i> Terbukti: NAND diikuti inverter menghasilkan operasi AND murni.</span>
          </div>
        </div>

        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-chevron-right text-warning"></i>
            <h4>C. OR dari NAND via De Morgan (3 Gerbang NAND)</h4>
          </div>
          <p style="font-size: 13.5px;">Inversi kedua input terlebih dahulu, lalu masukkan ke gerbang NAND:</p>
          <div class="code-box-study mt-2">
            <code>A + B = ((A + B)')' = (Ā · B̄)'</code> &nbsp; <em>(Hukum De Morgan)</em><br>
            <span class="text-success"><i class="fas fa-check"></i> Terbukti: Inverter A (NAND 1) & Inverter B (NAND 2) di-NAND-kan (NAND 3) menghasilkan OR.</span>
          </div>

          <div class="showcase-header mt-4">
            <i class="fas fa-chevron-right text-warning"></i>
            <h4>D. XOR dari NAND (4 Gerbang NAND)</h4>
          </div>
          <p style="font-size: 13.5px;">Bentuk kanonik XOR: <code>A &oplus; B = A·B̄ + Ā·B</code>:</p>
          <div class="code-box-study mt-2">
            Karena seluruh operasi dasar (AND, OR, NOT) terbukti dapat dibentuk dari NAND, maka fungsi turunan <strong>XOR secara otomatis dapat dibangun sepenuhnya dari gerbang NAND</strong>.
          </div>
        </div>
      </div>

      <!-- MULTILEVEL NAND (Slide 8 - 12) -->
      <h3 class="section-title"><i class="fas fa-layer-group"></i> 4. Konsep & Prosedur Desain Multilevel NAND (Slide 8 - 12)</h3>
      <div class="grid-2-cols mb-4">
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-info-circle"></i></div>
          <h3>Definisi Multilevel NAND (Slide 8)</h3>
          <p><strong>Multilevel Logic:</strong> Rangkaian logika yang memiliki <strong>lebih dari dua tingkatan (level) gerbang</strong> di antara jalur input dan keluaran output.</p>
          <div class="callout-sub mt-2" style="background: rgba(0,210,255,0.08); border-color: rgba(0,210,255,0.3);">
            <strong>Mengapa Membutuhkan Multilevel? (Slide 8):</strong><br>
            • Seringkali implementasi 2-level (AND-OR standar) memerlukan gerbang dengan jumlah input yang sangat banyak (<em>fan-in</em> tinggi) yang tidak tersedia di IC fisik.<br>
            • Rangkaian bertingkat (berlapis) memberikan fleksibilitas jauh lebih tinggi untuk fungsi Boolean kompleks berukuran besar.
          </div>
        </div>

        <div class="feature-card highlighted-gold">
          <div class="feature-icon"><i class="fas fa-list-ol"></i></div>
          <h3>Prosedur Standar Desain NAND-Only (Slide 8 & 11)</h3>
          <ol class="luxury-list mt-1" style="font-size: 13px; line-height: 1.8;">
            <li><strong>Langkah 1:</strong> Tulis atau ubah fungsi Boolean ke dalam bentuk standar <strong>SOP (Sum of Product)</strong>.</li>
            <li><strong>Langkah 2:</strong> Implementasikan setiap suku perkalian (AND) menggunakan gerbang NAND: <code>AND = (NAND)'</code>.</li>
            <li><strong>Langkah 3:</strong> Gabungkan suku-suku dengan OR menggunakan hukum De Morgan: <code>OR = NAND of inverted inputs</code>.</li>
            <li><strong>Langkah 4:</strong> Hilangkan inverter ganda yang bersebelahan (involusi <code>(X')' = X</code>) sehingga <strong>seluruh gerbang menjadi NAND murni</strong>.</li>
          </ol>
        </div>
      </div>

      <!-- Contoh Implementasi Multilevel NAND Slide 9, 10, 11, 12 -->
      <div class="exercise-module-box mb-4">
        <div class="exercise-module-header">
          <span class="badge-accent"><i class="fas fa-chalkboard-teacher"></i> Contoh Kasus Resmi Slide 9, 11 &amp; 12 ITERA</span>
          <h3>Studi Kasus Konversi: Rangkaian 3-Level NAND</h3>
        </div>

        <div class="grid-2-cols mt-3">
          <!-- Kasus 1: Q = A + BC (Slide 9 & 12) -->
          <div class="showcase-card">
            <h4>Contoh 1 (Slide 9 & 12): Implementasikan <code>Q = A + BC</code> dengan NAND</h4>
            <div class="solution-steps mt-2" style="font-size: 13px;">
              <div><strong>1. Identifikasi bentuk SOP:</strong> Suku 1 = <code>A</code>, Suku 2 = <code>B · C</code>.</div>
              <div class="mt-1"><strong>2. Implementasi suku AND (BC):</strong><br>
                <code>BC = ((B · C)')'</code> &rarr; NAND 1 menghasilkan <code>(BC)'</code>, lalu di-NOT oleh NAND 2 menghasilkan <code>BC</code>.
              </div>
              <div class="mt-1"><strong>3. Implementasi suku A:</strong><br>
                Input <code>A</code> dihubungkan langsung ke gerbang level berikutnya.
              </div>
              <div class="mt-1"><strong>4. Gabungkan dengan OR (De Morgan):</strong><br>
                <code>A + BC = ((A + BC)')' = (Ā · (BC)')'</code>.<br>
                Gunakan gerbang NAND akhir dengan input: <code>Ā</code> (inverter NAND untuk A) dan <code>(BC)'</code> (output NAND pertama)!
              </div>
              <div class="callout-sub mt-2" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
                <strong style="color: var(--accent-emerald);">Hasil Akhir NAND-Only: Q = (Ā · (BC)')'</strong>
              </div>
            </div>
          </div>

          <!-- Kasus 2: F = AB' + BC (Slide 11) -->
          <div class="showcase-card">
            <h4>Contoh 2 (Slide 11): Implementasikan <code>F = AB̄ + BC</code> dengan NAND</h4>
            <div class="solution-steps mt-2" style="font-size: 13px;">
              <div><strong>1. Dua suku perkalian AND:</strong> <code>A B̄</code> dan <code>B · C</code>.</div>
              <div class="mt-1"><strong>2. Suku A B̄:</strong> Buat <code>B̄</code> dengan inverter NAND, lalu NAND-kan dengan <code>A</code> &rarr; <code>(A B̄)'</code>.</div>
              <div class="mt-1"><strong>3. Suku B · C:</strong> Masukkan ke gerbang NAND &rarr; <code>(B C)'</code>.</div>
              <div class="mt-1"><strong>4. Gabungkan dengan OR via De Morgan:</strong><br>
                <code>(AB̄) + (BC) = ((AB̄ + BC)')' = ((AB̄)' · (BC)')'</code>.<br>
                Cukup masukkan output <code>(A B̄)'</code> dan output <code>(B C)'</code> langsung ke <strong>gerbang NAND penutup level ke-3</strong>!
              </div>
              <div class="callout-sub mt-2" style="background: rgba(0,210,255,0.08); border-color: rgba(0,210,255,0.3);">
                <strong style="color: var(--primary-cyan);">Hasil Akhir (Slide 11): Rangkaian 3 Level NAND Lengkap!</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- MULTILEVEL NOR (Slide 13 & 14) -->
      <h3 class="section-title"><i class="fas fa-sitemap"></i> 5. Multilevel NOR &amp; Prosedur Desain POS (Slide 13 & 14)</h3>
      <div class="grid-2-cols mb-4">
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-shapes"></i></div>
          <h3>Definisi & Karakteristik Multilevel NOR (Slide 13)</h3>
          <p><strong>Multilevel NOR:</strong> Rangkaian dengan lebih dari dua tingkatan gerbang logika yang dibangun <strong>murni menggunakan gerbang NOR saja</strong>.</p>
          <ul class="luxury-list mt-2" style="font-size: 13px;">
            <li><strong>Basis Bentuk Standar:</strong> Desain NOR biasanya diawali dari bentuk <strong>POS (Product of Sum)</strong>, bukan SOP!</li>
            <li><strong>Fungsi Dasar dari NOR:</strong>
              <div class="mt-1">• <strong>NOT:</strong> <code>(A + A)' = Ā</code> (satu NOR dengan input disatukan).</div>
              <div>• <strong>OR:</strong> <code>((A + B)')' = A + B</code> (NOR diikuti inverter NOR).</div>
              <div>• <strong>AND (De Morgan):</strong> <code>A · B = ((A · B)')' = (Ā + B̄)'</code> (NOR dari input terinversi).</div>
            </li>
          </ul>
        </div>

        <div class="feature-card highlighted-gold">
          <div class="feature-icon"><i class="fas fa-pencil-ruler"></i></div>
          <h3>Prosedur Desain dengan NOR (Slide 14)</h3>
          <ol class="luxury-list mt-1" style="font-size: 13px; line-height: 1.8;">
            <li><strong>Langkah 1:</strong> Ubah fungsi Boolean ke bentuk <strong>POS (Product of Sum)</strong>.</li>
            <li><strong>Langkah 2:</strong> Implementasikan setiap suku penjumlahan (OR) menggunakan gerbang NOR.</li>
            <li><strong>Langkah 3:</strong> Gabungkan hasil perkalian dengan gerbang AND menggunakan identitas De Morgan sehingga tetap berupa gerbang NOR murni.</li>
            <li><strong>Hasil Akhir:</strong> Terbentuk sirkuit multilevel NOR terpadu.</li>
          </ol>
          <div class="code-box-study mt-2" style="font-size: 12.5px;">
            <strong>Contoh Singkat Slide 14: <code>F = (A + B)(C + D)</code></strong><br>
            • Terapkan De Morgan: <code>F = (((A+B)(C+D))')' = ((A+B)' + (C+D)')'</code><br>
            • <code>(A+B)'</code> dibuat dari gerbang NOR 1.<br>
            • <code>(C+D)'</code> dibuat dari gerbang NOR 2.<br>
            • Masukkan kedua output ke gerbang NOR 3 penutup level akhir!
          </div>
        </div>
      </div>

    </div>
  `,

  mux: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 06 / Sub-Materi 02</span>
        <h2>Multiplexer (MUX) sebagai Data Selector</h2>
        <p class="subtitle">Prinsip kerja, arsitektur dasar, persamaan minterm select line, serta implementasi MUX 2:1, 4:1, dan 8:1.</p>
      </div>

      <!-- Pendahuluan MUX (Slide 17 & 18) -->
      <div class="grid-2-cols mb-4">
        <div class="feature-card highlighted-gold">
          <div class="feature-icon"><i class="fas fa-random"></i></div>
          <h3>Definisi Multiplexer (MUX) (Slide 18)</h3>
          <p><strong>Multiplexer (MUX)</strong> adalah rangkaian logika kombinasional yang memilih salah satu dari banyak jalur input data (<strong>2<sup>k</sup> input</strong>) untuk diteruskan ke <strong>satu output tunggal (Y)</strong>, berdasarkan kendali jalur pemilih (<strong>Select line S</strong> berukuran <code>k</code> bit).</p>
          <div class="callout-sub mt-2" style="background: rgba(245,175,25,0.08); border-color: rgba(245,175,25,0.3);">
            <strong>Disebut Juga "Data Selector":</strong> Bekerja seperti sakelar pemilih digital multi-posisi yang menyalurkan data terpilih ke jalur transmisi bersama.
          </div>
        </div>

        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-cogs"></i></div>
          <h3>Struktur & Persamaan Umum MUX 2ᵏ : 1 (Slide 18)</h3>
          <ul class="luxury-list" style="font-size: 13px;">
            <li><strong>Input Data:</strong> <code>D₀, D₁, D₂, ..., Dₙ₋₁</code> (berjumlah <code>n = 2ᵏ</code>).</li>
            <li><strong>Select Line:</strong> <code>S</code> (berjumlah <code>k</code> bit, sehingga dapat membentuk <code>2ᵏ</code> kombinasi biner).</li>
            <li><strong>Output Tunggal:</strong> <code>Y</code>.</li>
          </ul>
          <div class="code-box-study mt-2" style="font-size: 14px;">
            <strong>Persamaan Umum Output (Slide 18):</strong><br>
            <code style="color: var(--primary-cyan); font-weight:700; font-size:16px;">Y = &Sigma; Dᵢ &middot; mᵢ(S) &nbsp; (dari i = 0 s.d. 2ᵏ - 1)</code><br>
            <small class="text-muted">• Dᵢ = Data input ke-i &nbsp;|&nbsp; mᵢ(S) = Minterm select line aktif pemilih Dᵢ</small>
          </div>
        </div>
      </div>

      <!-- Catatan Penting & Aplikasi MUX (Slide 18) -->
      <div class="grid-3-cards mb-4">
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-microchip"></i></div>
          <h3>Pengganti Gerbang Logika</h3>
          <p>MUX dapat digunakan secara langsung untuk merealisasikan sembarang fungsi Boolean tanpa perlu merancang gerbang AND/OR/NOT terpisah.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-server"></i></div>
          <h3>Arsitektur CPU & Memori</h3>
          <p>Digunakan di Arithmetic Logic Unit (ALU), pemilihan register bus internal CPU, dan *bank address decoding* pada modul RAM.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-network-wired"></i></div>
          <h3>Komunikasi Data</h3>
          <p>Memungkinkan pengiriman puluhan kanal data audio/video melalui satu kabel transmisi fisik bersama via Time-Division Multiplexing.</p>
        </div>
      </div>

      <!-- 2:1 MULTIPLEXER (Slide 19) -->
      <h3 class="section-title"><i class="fas fa-toggle-on"></i> 1. Multiplexer 2:1 (Slide 19)</h3>
      <div class="grid-2-cols mb-4">
        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-info-circle text-primary"></i>
            <h4>Spesifikasi & Persamaan Logika 2:1 MUX (Slide 19)</h4>
          </div>
          <p style="font-size: 13.5px;">Memilih antara 2 input data (<code>D₀</code> atau <code>D₁</code>) menggunakan 1 jalur select line (<code>S</code>):</p>
          <div class="code-box-study mt-2" style="font-size: 15px;">
            <strong>Persamaan Boolean Output (Slide 19):</strong><br>
            <code style="color: var(--accent-gold); font-weight: 700;">Y = S̄ &middot; D₀ + S &middot; D₁</code>
          </div>
          <ul class="luxury-list mt-2" style="font-size: 13px;">
            <li>Jika <strong>S = 0</strong> &rarr; S̄=1, S=0 &rarr; <code>Y = 1·D₀ + 0·D₁ = <strong>D₀</strong></code>.</li>
            <li>Jika <strong>S = 1</strong> &rarr; S̄=0, S=1 &rarr; <code>Y = 0·D₀ + 1·D₁ = <strong>D₁</strong></code>.</li>
          </ul>
          <div class="callout-sub mt-2" style="background: rgba(0,210,255,0.08); border-color: rgba(0,210,255,0.3);">
            <strong>Komponen Gerbang:</strong> Dibangun dari 2 gerbang AND 2-input, 1 gerbang inverter NOT, dan 1 gerbang OR.
          </div>
        </div>

        <div class="showcase-card highlighted-gold">
          <div class="showcase-header">
            <i class="fas fa-table text-warning"></i>
            <h4>Tabel Kebenaran Lengkap 8 Baris 2:1 MUX (Slide 19)</h4>
          </div>
          <div class="table-responsive mt-1">
            <table class="luxury-table" style="text-align: center; font-size: 12px;">
              <thead><tr><th>Select (S)</th><th>Data (D₀)</th><th>Data (D₁)</th><th>Output Y</th><th>Status Saluran</th></tr></thead>
              <tbody>
                <tr><td>0</td><td>0</td><td>0</td><td><strong>0</strong></td><td>Memilih D₀ (nilai 0)</td></tr>
                <tr><td>0</td><td>0</td><td>1</td><td><strong>0</strong></td><td>Memilih D₀ (nilai 0)</td></tr>
                <tr class="row-highlight"><td>0</td><td>1</td><td>0</td><td><strong>1</strong></td><td>Memilih D₀ (nilai 1)</td></tr>
                <tr class="row-highlight"><td>0</td><td>1</td><td>1</td><td><strong>1</strong></td><td>Memilih D₀ (nilai 1)</td></tr>
                <tr><td>1</td><td>0</td><td>0</td><td><strong>0</strong></td><td>Memilih D₁ (nilai 0)</td></tr>
                <tr class="row-highlight"><td>1</td><td>0</td><td>1</td><td><strong>1</strong></td><td>Memilih D₁ (nilai 1)</td></tr>
                <tr><td>1</td><td>1</td><td>0</td><td><strong>0</strong></td><td>Memilih D₁ (nilai 0)</td></tr>
                <tr class="row-highlight"><td>1</td><td>1</td><td>1</td><td><strong>1</strong></td><td>Memilih D₁ (nilai 1)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- 4:1 MULTIPLEXER (Slide 20) -->
      <h3 class="section-title"><i class="fas fa-sitemap"></i> 2. Multiplexer 4:1 (Slide 20)</h3>
      <div class="grid-2-cols mb-4">
        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-microchip text-primary"></i>
            <h4>Struktur & Persamaan 4:1 MUX (Slide 20)</h4>
          </div>
          <p style="font-size: 13.5px;">Memilih 1 dari 4 input data (<code>D₀, D₁, D₂, D₃</code>) menggunakan 2 jalur select line (<code>S₁, S₀</code>):</p>
          <div class="code-box-study mt-2" style="font-size: 13.5px; line-height: 1.8;">
            <strong>Persamaan Boolean Output (Slide 20):</strong><br>
            <code style="color: var(--primary-cyan); font-weight:700;">Y = S̄₁S̄₀D₀ + S̄₁S₀D₁ + S₁S̄₀D₂ + S₁S₀D₃</code>
          </div>
          <div class="callout-sub mt-3" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
            <strong style="color: var(--accent-emerald);">Rangkaian Gerbang Internal (Slide 20):</strong><br>
            Terdiri dari <strong>4 gerbang AND 3-input</strong> (masing-masing menerima kombinasi minterm select + 1 input data), 2 gerbang inverter NOT, dan <strong>1 gerbang OR 4-input</strong>.
          </div>
        </div>

        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-table text-warning"></i>
            <h4>Tabel Kebenaran Fungsional 4:1 MUX (Slide 20)</h4>
          </div>
          <div class="table-responsive mt-1">
            <table class="luxury-table" style="text-align: center; font-size: 13px;">
              <thead><tr><th>Select S₁</th><th>Select S₀</th><th>Kombinasi Biner</th><th>Output (Y) Terpilih</th></tr></thead>
              <tbody>
                <tr class="row-highlight"><td>0</td><td>0</td><td><code>00₂ (0)</code></td><td><strong>D₀</strong></td></tr>
                <tr><td>0</td><td>1</td><td><code>01₂ (1)</code></td><td><strong>D₁</strong></td></tr>
                <tr><td>1</td><td>0</td><td><code>10₂ (2)</code></td><td><strong>D₂</strong></td></tr>
                <tr class="row-highlight"><td>1</td><td>1</td><td><code>11₂ (3)</code></td><td><strong>D₃</strong></td></tr>
              </tbody>
            </table>
          </div>
          <p class="text-muted mt-2" style="font-size: 12.5px;">Kombinasi biner dari <code>S₁S₀</code> secara presisi memilih indeks input data yang bersesuaian.</p>
        </div>
      </div>

      <!-- 8:1 MULTIPLEXER (Slide 21) -->
      <h3 class="section-title"><i class="fas fa-layer-group"></i> 3. Multiplexer 8:1 (Slide 21)</h3>
      <div class="showcase-card mb-4">
        <div class="showcase-header">
          <i class="fas fa-network-wired text-primary"></i>
          <h4>Struktur & Tabel Kebenaran 8:1 MUX (Slide 21)</h4>
        </div>
        <p style="font-size: 13.5px;">Memilih 1 dari 8 input data (<code>D₀ s.d. D₇</code>) menggunakan 3 jalur select line (<code>S₂, S₁, S₀</code>):</p>
        
        <div class="grid-2-cols mt-3">
          <div class="table-responsive">
            <table class="luxury-table" style="text-align: center; font-size: 12.5px;">
              <thead><tr><th>S₂</th><th>S₁</th><th>S₀</th><th>Kombinasi</th><th>Output (Y)</th></tr></thead>
              <tbody>
                <tr><td>0</td><td>0</td><td>0</td><td>000₂</td><td><strong>D₀</strong></td></tr>
                <tr><td>0</td><td>0</td><td>1</td><td>001₂</td><td><strong>D₁</strong></td></tr>
                <tr><td>0</td><td>1</td><td>0</td><td>010₂</td><td><strong>D₂</strong></td></tr>
                <tr><td>0</td><td>1</td><td>1</td><td>011₂</td><td><strong>D₃</strong></td></tr>
                <tr><td>1</td><td>0</td><td>0</td><td>100₂</td><td><strong>D₄</strong></td></tr>
                <tr><td>1</td><td>0</td><td>1</td><td>101₂</td><td><strong>D₅</strong></td></tr>
                <tr><td>1</td><td>1</td><td>0</td><td>110₂</td><td><strong>D₆</strong></td></tr>
                <tr class="row-highlight"><td>1</td><td>1</td><td>1</td><td>111₂</td><td><strong>D₇</strong></td></tr>
              </tbody>
            </table>
          </div>

          <div>
            <div class="code-box-study" style="font-size: 13px; line-height: 1.8;">
              <strong>Persamaan Boolean Output (Slide 21):</strong><br>
              <code>Y = &Sigma; mᵢ(S₂, S₁, S₀) &middot; Dᵢ &nbsp; (i=0..7)</code><br><br>
              <code>Y = S̄₂S̄₁S̄₀D₀ + S̄₂S̄₁S₀D₁ + S̄₂S₁S̄₀D₂ + S̄₂S₁S₀D₃ + S₂S̄₁S̄₀D₄ + S₂S̄₁S₀D₅ + S₂S₁S̄₀D₆ + S₂S₁S₀D₇</code>
            </div>
            <div class="callout-sub mt-2" style="background: rgba(245,175,25,0.08); border-color: rgba(245,175,25,0.3);">
              <strong>Sinyal Enable (E / Strobe) (Slide 21):</strong><br>
              Pada sirkuit terintegrasi (IC) nyata seperti IC TTL 74151 (8-to-1 Data Selector), terdapat pin <strong>Enable (E)</strong> aktif LOW. Jika E = 1, keluaran MUX dinonaktifkan (Y = 0) terlepas dari status select line.
            </div>
          </div>
        </div>
      </div>

    </div>
  `,

  exercises: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 06 / Sub-Materi 04</span>
        <h2>Pembahasan Lengkap Latihan Soal 1–5 Slide 15 & Kunci Jawaban Slide 16 ITERA</h2>
        <p class="subtitle">Kunci jawaban resmi, pembuktian hukum De Morgan, dan konversi aljabar rangkaian Multilevel NAND/NOR.</p>
      </div>

      <!-- SOAL 1 & 2 -->
      <div class="exercise-module-box mb-4">
        <div class="exercise-module-header">
          <span class="badge-accent"><i class="fas fa-edit"></i> Latihan 1 & 2 (Slide 15 & 16)</span>
          <h3>Fungsi Dasar 2 Variabel dengan NAND dan NOR Murni</h3>
        </div>

        <div class="grid-2-cols mt-3">
          <!-- Soal 1 -->
          <div class="showcase-card">
            <h4>1. (NAND Multilevel) Implementasikan <code>F(A,B) = A · B</code> hanya dengan NAND gate</h4>
            <div class="solution-steps mt-2" style="font-size: 13px;">
              <p><strong>Langkah Konversi Involusi Ganda:</strong></p>
              <div>• Suatu fungsi tidak berubah nilainya jika di-invers dua kali: <code>X = (X')'</code>.</div>
              <div class="mt-1">• Terapkan pada <code>A · B</code>: <code>A · B = ((A · B)')'</code>.</div>
              <div class="mt-2"><strong>Realisasi Gerbang:</strong></div>
              <div>1. <strong>NAND 1:</strong> Menghitung <code>(A · B)'</code>.</div>
              <div>2. <strong>NAND 2:</strong> Bertindak sebagai inverter NOT (kedua input dihubungkan ke output NAND 1).</div>
              <div class="callout-sub mt-2" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
                <strong style="color: var(--accent-emerald);">Jawaban Resmi Slide 16 No. 1: A · B = ((A · B)')' &nbsp; (2 Gerbang NAND)</strong>
              </div>
            </div>
          </div>

          <!-- Soal 2 -->
          <div class="showcase-card">
            <h4>2. (NOR Multilevel) Implementasikan <code>F(A,B) = A + B</code> hanya dengan NOR gate</h4>
            <div class="solution-steps mt-2" style="font-size: 13px;">
              <p><strong>Langkah Konversi Involusi Ganda:</strong></p>
              <div>• Terapkan komplemen ganda pada <code>A + B</code>: <code>A + B = ((A + B)')'</code>.</div>
              <div class="mt-2"><strong>Realisasi Gerbang:</strong></div>
              <div>1. <strong>NOR 1:</strong> Menghasilkan <code>(A + B)'</code>.</div>
              <div>2. <strong>NOR 2:</strong> Bertindak sebagai inverter NOT (kedua input dihubungkan ke output NOR 1).</div>
              <div class="callout-sub mt-2" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
                <strong style="color: var(--accent-emerald);">Jawaban Resmi Slide 16 No. 2: A + B = ((A + B)')' &nbsp; (2 Gerbang NOR)</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SOAL 3 & 4 -->
      <div class="exercise-module-box mb-4">
        <div class="exercise-module-header">
          <span class="badge-accent"><i class="fas fa-tasks"></i> Latihan 3 & 4 (Slide 15 & 16)</span>
          <h3>Implementasi Bentuk SOP Menggunakan Gerbang NAND</h3>
        </div>

        <div class="grid-2-cols mt-3">
          <!-- Soal 3 -->
          <div class="showcase-card">
            <h4>3. (SOP dengan NAND) <code>F(A, B, C) = A B̄ + BC</code></h4>
            <div class="solution-steps mt-2" style="font-size: 13px;">
              <p><strong>Realisasi Tiap Suku (Slide 16 No. 3):</strong></p>
              <div>• Suku 1: <code>A · B̄</code> &rarr; dibuat dengan inverter NAND untuk B, lalu di-NAND-kan dengan A.</div>
              <div>• Suku 2: <code>B · C = ((B · C)')'</code>.</div>
              <div class="mt-2"><strong>Penggabungan OR dengan NAND (De Morgan):</strong></div>
              <div>• <code>X + Y = ((X + Y)')' = (X' · Y')'</code>.</div>
              <div>• <code>F = ( (A B̄)' · (B C)' )'</code>.</div>
              <div class="callout-sub mt-2" style="background: rgba(0,210,255,0.08); border-color: rgba(0,210,255,0.3);">
                <strong style="color: var(--primary-cyan);">Jawaban Resmi Slide 16 No. 3: F = ((AB̄)' · (BC)')'</strong>
              </div>
            </div>
          </div>

          <!-- Soal 4 -->
          <div class="showcase-card">
            <h4>4. (SOP 3 Variabel) <code>F(A, B, C) = ĀC + AB C̄</code></h4>
            <div class="solution-steps mt-2" style="font-size: 13px;">
              <p><strong>Realisasi Suku AND dengan NAND (Slide 16 No. 4):</strong></p>
              <div>• Suku 1: <code>ĀC = ((ĀC)')'</code>.</div>
              <div>• Suku 2: <code>AB C̄ = ((AB C̄)')'</code>.</div>
              <div class="mt-2"><strong>OR Antar Suku dengan NAND (Hukum De Morgan):</strong></div>
              <div>• <code>F = (ĀC) + (AB C̄) = ( (ĀC)' · (AB C̄)' )'</code>.</div>
              <p class="text-muted mt-1" style="font-size: 12px;">Satu inverter gerbang NAND dipakai untuk Ā dan C̄ bila input belum tersedia dalam bentuk komplemen.</p>
              <div class="callout-sub mt-2" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
                <strong style="color: var(--accent-emerald);">Jawaban Resmi Slide 16 No. 4: F = ((ĀC)' · (AB C̄)')'</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SOAL 5: 4-VARIABEL (Slide 15 & 16) -->
      <div class="exercise-module-box mb-2">
        <div class="exercise-module-header">
          <span class="badge-accent"><i class="fas fa-layer-group"></i> Latihan 5 (Slide 15 & 16)</span>
          <h3>Implementasi Fungsi 4-Variabel NAND-Only: F(W, X, Y, Z) = W X̄ + W̄ Y Z + X Z</h3>
        </div>

        <div class="showcase-card mt-3">
          <h4>Langkah Penyelesaian Sistematis Resmi Slide 16 No. 5:</h4>
          <div class="solution-steps mt-2" style="font-size: 13px;">
            <p><strong>1. Identifikasi &amp; Realisasi Setiap Suku AND dengan NAND:</strong></p>
            <ul class="luxury-list">
              <li>Suku 1: <code>W X̄ = ((W X̄)')'</code> &rarr; Masuk ke NAND level-1: menghasilkan <code>(W X̄)'</code>.</li>
              <li>Suku 2: <code>W̄ Y Z = ((W̄ Y Z)')'</code> &rarr; Masuk ke NAND level-1: menghasilkan <code>(W̄ Y Z)'</code>.</li>
              <li>Suku 3: <code>X Z = ((X Z)')'</code> &rarr; Masuk ke NAND level-1: menghasilkan <code>(X Z)'</code>.</li>
            </ul>

            <p class="mt-3"><strong>2. Penggabungan Seluruh Suku dengan Gerbang OR via Hukum De Morgan:</strong></p>
            <div class="code-box-study mt-1" style="font-size: 14px;">
              <code>F = (W X̄) + (W̄ Y Z) + (X Z)</code><br>
              <code>F = ( ((W X̄) + (W̄ Y Z) + (X Z))' )'</code><br>
              <code>F = ( (W X̄)' · (W̄ Y Z)' · (X Z)' )'</code>
            </div>

            <p class="mt-2 text-muted" style="font-size: 12.5px;">
              Ketiga output dari gerbang NAND tingkat pertama langsung dimasukkan bersama ke <strong>gerbang NAND tingkat akhir ber-input 3</strong>. Seluruh rangkaian tersusun murni dari gerbang NAND tanpa membutuhkan gerbang AND atau OR fisik!
            </p>

            <div class="callout-sub mt-2" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
              <strong style="color: var(--accent-emerald); font-size: 15px;">
                <i class="fas fa-check-circle"></i> Jawaban Akhir Resmi Slide 16 No. 5: F = ((W X̄)' · (W̄ Y Z)' · (X Z)')'
              </strong>
            </div>
          </div>
        </div>
      </div>

    </div>
  `
};

/**
 * TEKS MATERI DETAIL MINGGU 5: RANGKAIAN ADDER & SUBTRACTOR
 * Berdasarkan Slide Resmi MK Sistem Digital ITERA (3-SKS)
 * Dosen Pengampu: Dr. Swadexi Istiqphara, S.T., M.T.
 */
const WEEK5_CONTENT = {
  adders: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 07 / Sub-Materi 01</span>
        <h2>Rangkaian Adder (Half Adder, Full Adder & Ripple Carry Adder)</h2>
        <p class="subtitle">Fondasi blok aritmatika digital pada ALU prosesor: Konsep penjumlahan biner, perambatan Carry, dan arsitektur rangkaian berantai multi-bit.</p>
      </div>

      <!-- Detail Kuliah & Rujukan Resmi Slide 1 - 3 -->
      <div class="glass-callout mb-4">
        <div class="callout-icon"><i class="fas fa-graduation-cap"></i></div>
        <div class="callout-body">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <h4 style="margin:0;">Informasi Kurikulum Perkuliahan ITERA</h4>
            <span class="pill-tag"><i class="fas fa-university"></i> Institut Teknologi Sumatera</span>
          </div>
          <div class="grid-2-cols mt-2" style="font-size: 13.5px;">
            <div>
              <strong>Mata Kuliah:</strong> Sistem Digital (INF203 / EL2102) • 3-SKS<br>
              <strong>Dosen Pengampu:</strong> Dr. Swadexi Istiqphara, S.T., M.T.<br>
              <strong>Sub-CPMK:</strong> Mampu memahami dan merancang rangkaian adder dan subtractors (Slide 3).
            </div>
            <div>
              <strong>Buku Referensi Perkuliahan (Slide 2):</strong>
              <ul class="luxury-list mt-1" style="font-size: 12.5px;">
                <li>S. Brown & Z. Vranesic, <em>Fundamentals of Digital Logic and VHDL Design</em>, 3rd Ed, McGraw-Hill, 2009.</li>
                <li>Donald D. Givone, <em>Digital Principles and Design</em>, McGraw-Hill, 2002.</li>
                <li>J. M. Yarborough, <em>Digital Logic Application and Design</em>, West Publishing, 1997.</li>
                <li>V. P. Nelson et al., <em>Digital Logic Circuit Analysis and Design</em>, Prentice Hall, 1995.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Peran Adder & Subtractor di ALU (Slide 5) -->
      <h3 class="section-title"><i class="fas fa-microchip"></i> 1. Adder & Subtractor: Blok Dasar Aritmatika Digital (Slide 5)</h3>
      <div class="grid-3-cards mb-4">
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-calculator"></i></div>
          <h3>Arithmetic Logic Unit (ALU)</h3>
          <p>Adder &amp; Subtractor merupakan unit komputasi paling fundamental yang berada di dalam <strong>ALU (Arithmetic Logic Unit)</strong> pada prosesor komputer modern (CPU).</p>
        </div>
        <div class="feature-card highlighted-gold">
          <div class="feature-icon"><i class="fas fa-plus-minus"></i></div>
          <h3>Dasar Operasi Hitung</h3>
          <p>Menjadi basis operasional bagi perhitungan: <strong>Penjumlahan (Addition)</strong> dan <strong>Pengurangan (Subtraction)</strong> secara langsung pada tingkat gerbang logika.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-project-diagram"></i></div>
          <h3>Operasi Turunan Kompleks</h3>
          <p>Mendasari seluruh operasi aritmatika turunan: <strong>Perkalian (Multiplication)</strong> dan <strong>Pembagian (Division)</strong> yang diselesaikan melalui perulangan penjumlahan dan pergeseran (shift).</p>
        </div>
      </div>

      <!-- Review Representasi Bilangan (Slide 8) -->
      <h3 class="section-title"><i class="fas fa-layer-group"></i> 2. Review: Representasi Bilangan dalam Sistem Digital (Slide 8)</h3>
      <div class="grid-2-cols mb-4">
        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-binary text-primary"></i>
            <h4>Skema Representasi Bilangan Digital</h4>
          </div>
          <ul class="luxury-list mt-2" style="font-size: 13.5px;">
            <li><strong>1. Unsigned Binary:</strong> Hanya menyatakan bilangan positif tanpa tanda. Contoh: <code>1011₂ = 11₁₀</code>.</li>
            <li><strong>2. Signed Binary (Sign-Magnitude):</strong> Bit paling kiri (MSB) adalah bit tanda (<code>0 = Positif</code>, <code>1 = Negatif</code>). Contoh: <code>1001₂ = -9</code>.</li>
            <li><strong>3. One's Complement (Komplemen Satu):</strong> Bilangan negatif dibentuk dengan membalik seluruh bit (inversi). Contoh: <code>+5 (0101₂) &rarr; -5 (1010₂)</code>.</li>
            <li><strong>4. Two's Complement (Komplemen Dua - Standar Industri):</strong> Bilangan negatif = <code>One's Complement + 1</code>. Contoh: <code>+5 (0101₂) &rarr; 1010₂ + 1 = 1011₂ (-5)</code>.</li>
          </ul>
        </div>

        <div class="showcase-card highlighted-gold">
          <div class="showcase-header">
            <i class="fas fa-star text-warning"></i>
            <h4>Mengapa Two's Complement Paling Banyak Digunakan? (Slide 8)</h4>
          </div>
          <p class="mt-2" style="font-size: 13.5px;">Pada arsitektur CPU digital modern, sistem Two's Complement mendominasi karena dua keunggulan mutlak:</p>
          <div class="callout-sub mt-2" style="background: rgba(245,175,25,0.08); border-color: rgba(245,175,25,0.3);">
            <strong style="color: var(--accent-gold);"><i class="fas fa-check"></i> Hanya Ada Satu Representasi untuk Angka Nol (0)</strong>
            <p style="font-size: 12.5px; margin-top: 3px;">Menghilangkan ambiguitas +0 dan -0 yang timbul pada Sign-Magnitude dan One's Complement.</p>
          </div>
          <div class="callout-sub mt-2" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
            <strong style="color: var(--accent-emerald);"><i class="fas fa-check"></i> Operasi Pengurangan Bisa Dilakukan dengan Adder Biasa!</strong>
            <p style="font-size: 12.5px; margin-top: 3px;">Pengurangan <code>A - B</code> diubah menjadi penjumlahan <code>A + (-B) = A + B̄ + 1</code>. Hardware yang sama dapat digunakan untuk tambah sekaligus kurang.</p>
          </div>
        </div>
      </div>

      <!-- Penjumlahan Biner & Konsep Carry (Slide 6) -->
      <h3 class="section-title"><i class="fas fa-plus"></i> 3. Penjumlahan Biner & Konsep Carry (Slide 6)</h3>
      <div class="grid-2-cols mb-4">
        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-list-ol text-primary"></i>
            <h4>Aturan Dasar Penjumlahan Biner</h4>
          </div>
          <p>Penjumlahan biner mirip dengan desimal, namun hanya menggunakan dua simbol digit (<strong>0</strong> dan <strong>1</strong>):</p>
          <div class="code-box-study mt-2">
            • <code>0 + 0 = 0</code><br>
            • <code>0 + 1 = 1</code><br>
            • <code>1 + 0 = 1</code><br>
            • <code>1 + 1 = 10₂</code> &nbsp; &rarr; <strong>Hasil Sum = 0, Carry = 1</strong><br>
            • <code>1 + 1 + 1 = 11₂</code> &rarr; <strong>Hasil Sum = 1, Carry = 1</strong> (bila ada carry-in)
          </div>
          <div class="callout-sub mt-2" style="background: rgba(0,210,255,0.08); border-color: rgba(0,210,255,0.3);">
            <strong>Konsep Carry (C):</strong> Terjadi jika penjumlahan dua bit menghasilkan nilai &ge; 2. Carry bernilai bobot lebih tinggi dan wajib diteruskan ke kolom bit berikutnya (ke arah kiri/MSB).
          </div>
        </div>

        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-chalkboard-teacher text-warning"></i>
            <h4>Contoh Penjumlahan Multi-Bit Slide 6</h4>
          </div>
          <p>Menjumlahkan <code>1011₂ (11 desimal)</code> dengan <code>0110₂ (6 desimal)</code>:</p>
          <div class="code-box-study mt-2" style="font-size: 14px;">
            &nbsp; Carry : &nbsp; <strong>1 1 0 0</strong><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 0 1 1 &nbsp; (11₁₀)<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; + 0 1 1 0 &nbsp; ( 6₁₀)<br>
            &nbsp; -----------------------<br>
            &nbsp; Hasil : &nbsp;<strong>1 0 0 0 1₂</strong> &nbsp; (17₁₀) &nbsp;&rarr; <em>Carry akhir = 1</em>
          </div>
          <p class="text-muted mt-2" style="font-size: 12.5px;">Carry yang muncul dari Bit-1 merambat ke Bit-2, lalu ke Bit-3, hingga meluap menjadi bit ke-5 (MSB baru).</p>
        </div>
      </div>

      <!-- HALF ADDER (Slide 9 - 13) -->
      <h3 class="section-title"><i class="fas fa-cubes"></i> 4. Half Adder (HA) - Rangkaian Penjumlah 2-Bit (Slide 9 - 12)</h3>
      <div class="grid-2-cols mb-4">
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-info-circle"></i></div>
          <h3>Definisi & Karakteristik Half Adder</h3>
          <p><strong>Half Adder (HA)</strong> adalah rangkaian kombinasional sederhana yang dirancang untuk menjumlahkan <strong>tepat 2 bit biner</strong> (A dan B).</p>
          <ul class="luxury-list mt-2" style="font-size: 13px;">
            <li><strong>Input:</strong> <code>A</code> (bit pertama) dan <code>B</code> (bit kedua).</li>
            <li><strong>Output:</strong> <code>Sum (S)</code> &rarr; hasil penjumlahan satuan, dan <code>Carry (C)</code> &rarr; luapan bawaan jika ada.</li>
            <li><strong>Disebut "Half" karena:</strong> Hanya dapat menjumlahkan 2 input bit dan <em>tidak memiliki input Carry-in (Cin)</em> untuk menerima limpahan dari penjumlahan kolom sebelumnya.</li>
          </ul>
        </div>

        <div class="feature-card highlighted-gold">
          <div class="feature-icon"><i class="fas fa-table"></i></div>
          <h3>Tabel Kebenaran Half Adder (Slide 10)</h3>
          <div class="table-responsive mt-1">
            <table class="luxury-table" style="text-align: center; font-size: 13px;">
              <thead>
                <tr><th>Input A</th><th>Input B</th><th>Sum (S)</th><th>Carry (C)</th><th>Keterangan Operasi</th></tr>
              </thead>
              <tbody>
                <tr><td>0</td><td>0</td><td><strong>0</strong></td><td><strong>0</strong></td><td>0 + 0 = 0</td></tr>
                <tr class="row-highlight"><td>0</td><td>1</td><td><strong>1</strong></td><td><strong>0</strong></td><td>0 + 1 = 1</td></tr>
                <tr class="row-highlight"><td>1</td><td>0</td><td><strong>1</strong></td><td><strong>0</strong></td><td>1 + 0 = 1</td></tr>
                <tr style="background: rgba(245,175,25,0.15);"><td>1</td><td>1</td><td><strong>0</strong></td><td><strong>1</strong></td><td>1 + 1 = 10₂ (S=0, C=1)</td></tr>
              </tbody>
            </table>
          </div>
          <div class="code-box-study mt-2" style="font-size: 13px;">
            <strong>Analisis Persamaan Logika (Slide 10 & 11):</strong><br>
            • <code>Sum (S) = 1</code> jika A &ne; B &rarr; <strong>Operasi XOR: S = A &oplus; B</strong><br>
            • <code>Carry (C) = 1</code> jika A=1 dan B=1 &rarr; <strong>Operasi AND: C = A &middot; B</strong>
          </div>
        </div>
      </div>

      <!-- Rangkaian Skematik & Elektronika Nyata HA (Slide 11 & 12) -->
      <div class="grid-2-cols mb-4">
        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-project-diagram text-primary"></i>
            <h4>Rangkaian Skematik Half Adder (Slide 11)</h4>
          </div>
          <p>Half Adder dibangun dari <strong>1 Gerbang XOR</strong> dan <strong>1 Gerbang AND</strong>:</p>
          <div class="circuit-schematic-box mt-3 text-center">
            <div style="font-family: var(--font-mono); font-size: 14px; background: rgba(0,0,0,0.4); padding: 16px; border-radius: 12px; border: 1px solid var(--border-subtle); line-height: 1.8;">
              Input A ──────┬─────────────────[ XOR ]───────&gt; <strong>Sum (S = A &oplus; B)</strong><br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
              Input B ──┬───┼─────────────────[ &nbsp; &nbsp; ]<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└─────[ AND ]───────────────────&gt; <strong>Carry (C = A &middot; B)</strong><br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─────────[ &nbsp; &nbsp; ]
            </div>
          </div>
          <div class="callout-sub mt-3" style="background: rgba(0,210,255,0.08); border-color: rgba(0,210,255,0.3);">
            <strong>Fungsi Gerbang:</strong> Gerbang XOR bertindak sebagai penjumlah modulo-2 tanpa carry, sedangkan gerbang AND mendeteksi kondisi di mana kedua input aktif serentak untuk menghasilkan sinyal carry.
          </div>
        </div>

        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-microchip text-warning"></i>
            <h4>Implementasi Hardware IC TTL (Slide 12)</h4>
          </div>
          <p>Pada praktikum elektronika digital di laboratorium ITERA, Half Adder direalisasikan menggunakan dua IC TTL standar seri 7400:</p>
          <ul class="luxury-list mt-2" style="font-size: 13px;">
            <li><strong>IC 74ALS86N (Quad 2-Input XOR Gates):</strong> Pin 1 (A₀), Pin 2 (B₀) &rarr; Pin 3 (Output Sum S₀). Pin 7 = GND, Pin 14 = Vcc (+5V).</li>
            <li><strong>IC 74LF08N (Quad 2-Input AND Gates):</strong> Pin 1 (A₀), Pin 2 (B₀) &rarr; Pin 3 (Output Carry C₀). Pin 7 = GND, Pin 14 = Vcc (+5V).</li>
            <li><strong>Komponen Penunjang Breadboard:</strong> Sakelar input DIP Switch, Resistor pull-down (10 k&Omega;), Resistor pembatas arus LED (330 &Omega;), dan LED merah/hijau sebagai indikator logika HIGH.</li>
          </ul>
        </div>
      </div>

      <!-- KEKURANGAN HALF ADDER (Slide 13) -->
      <div class="exercise-module-box mb-4">
        <div class="exercise-module-header">
          <span class="badge-accent"><i class="fas fa-exclamation-triangle"></i> Keterbatasan Kritis (Slide 13)</span>
          <h3>Mengapa Half Adder Tidak Cukup untuk Operasi Multi-Bit?</h3>
        </div>
        <div class="grid-2-cols mt-3">
          <div>
            <p>Pada operasi penjumlahan multi-bit (misalnya 4-bit, 8-bit, 32-bit), penjumlahan setiap kolom bit menghasilkan <strong>Carry-out</strong> yang wajib ditambahkan pada bit di sebelah kirinya sebagai <strong>Carry-in</strong>.</p>
            <div class="callout-sub mt-3" style="background: rgba(239,68,68,0.08); border-color: rgba(239,68,68,0.4);">
              <strong class="text-danger"><i class="fas fa-times-circle"></i> Permasalahan Fatal:</strong>
              <p style="font-size: 13px; margin-top: 4px;">Half Adder hanya memiliki 2 jalur input (A dan B). Half Adder <strong>sama sekali tidak memiliki input Carry-in</strong>. Akibatnya, Half Adder tidak dapat mengakomodasi limpahan carry dari tahapan bit sebelumnya!</p>
            </div>
          </div>

          <div class="showcase-card">
            <h4>Analisis Kolom demi Kolom Slide 13: <code>1011₂ + 0110₂</code></h4>
            <div style="font-size: 12.5px; line-height: 1.8;">
              <div>• <strong>Bit-0 (LSB):</strong> A₀=1, B₀=0, Cin=0 &rarr; <code>1 + 0 + 0 = 1</code>, Carry-out = 0 <em>(Half Adder mampu)</em></div>
              <div>• <strong>Bit-1:</strong> A₁=1, B₁=1, Cin=0 &rarr; <code>1 + 1 + 0 = 0</code>, <strong>Carry-out = 1</strong> <em>(Half Adder mampu)</em></div>
              <div class="text-warning">• <strong>Bit-2:</strong> A₂=0, B₂=1, <strong>Carry-in = 1</strong> &rarr; <code>0 + 1 + 1 = 0</code>, <strong>Carry-out = 1</strong> <em>(HA GAGAL, butuh 3 input!)</em></div>
              <div class="text-warning">• <strong>Bit-3 (MSB):</strong> A₃=1, B₃=0, <strong>Carry-in = 1</strong> &rarr; <code>1 + 0 + 1 = 0</code>, <strong>Carry-out = 1</strong> <em>(HA GAGAL!)</em></div>
            </div>
            <div class="callout-sub mt-2" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.4);">
              <strong style="color: var(--accent-emerald);"><i class="fas fa-arrow-right"></i> Solusi Resmi: Dibutuhkan FULL ADDER (3 Input: A, B, Cin)</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- FULL ADDER (Slide 14 - 16) -->
      <h3 class="section-title"><i class="fas fa-plus-circle"></i> 5. Full Adder (FA) - Solusi Multi-Bit 3 Input (Slide 14 - 16)</h3>
      <div class="grid-2-cols mb-4">
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-layer-group"></i></div>
          <h3>Definisi & Input/Output Full Adder (Slide 14)</h3>
          <p><strong>Full Adder (FA)</strong> adalah rangkaian kombinasi untuk menjumlahkan <strong>3 input biner</strong> secara serentak.</p>
          <ul class="luxury-list mt-2" style="font-size: 13px;">
            <li><strong>Input A:</strong> Bit operan pertama.</li>
            <li><strong>Input B:</strong> Bit operan kedua.</li>
            <li><strong>Input Cin:</strong> Carry-in yang berasal dari hasil carry-out penjumlahan bit sebelumnya.</li>
            <li><strong>Output Sum (S):</strong> Hasil bit penjumlahan pada posisi saat ini.</li>
            <li><strong>Output Cout:</strong> Carry-out yang akan diteruskan ke bit berikutnya.</li>
          </ul>
        </div>

        <div class="feature-card highlighted-gold">
          <div class="feature-icon"><i class="fas fa-table"></i></div>
          <h3>Tabel Kebenaran Full Adder 8 Baris (Slide 15)</h3>
          <div class="table-responsive mt-1">
            <table class="luxury-table" style="text-align: center; font-size: 12.5px;">
              <thead>
                <tr><th>A</th><th>B</th><th>Cin</th><th>Sum (S)</th><th>Cout</th><th>Perhitungan</th></tr>
              </thead>
              <tbody>
                <tr><td>0</td><td>0</td><td>0</td><td><strong>0</strong></td><td><strong>0</strong></td><td>0+0+0 = 0</td></tr>
                <tr class="row-highlight"><td>0</td><td>0</td><td>1</td><td><strong>1</strong></td><td><strong>0</strong></td><td>0+0+1 = 1</td></tr>
                <tr class="row-highlight"><td>0</td><td>1</td><td>0</td><td><strong>1</strong></td><td><strong>0</strong></td><td>0+1+0 = 1</td></tr>
                <tr style="background: rgba(245,175,25,0.12);"><td>0</td><td>1</td><td>1</td><td><strong>0</strong></td><td><strong>1</strong></td><td>0+1+1 = 10₂</td></tr>
                <tr class="row-highlight"><td>1</td><td>0</td><td>0</td><td><strong>1</strong></td><td><strong>0</strong></td><td>1+0+0 = 1</td></tr>
                <tr style="background: rgba(245,175,25,0.12);"><td>1</td><td>0</td><td>1</td><td><strong>0</strong></td><td><strong>1</strong></td><td>1+0+1 = 10₂</td></tr>
                <tr style="background: rgba(245,175,25,0.12);"><td>1</td><td>1</td><td>0</td><td><strong>0</strong></td><td><strong>1</strong></td><td>1+1+0 = 10₂</td></tr>
                <tr style="background: rgba(16,185,129,0.18);"><td>1</td><td>1</td><td>1</td><td><strong>1</strong></td><td><strong>1</strong></td><td>1+1+1 = 11₂</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Persamaan Logika & Rangkaian FA (Slide 16) -->
      <div class="showcase-card mb-4">
        <div class="showcase-header">
          <i class="fas fa-code-branch text-primary"></i>
          <h4>Persamaan Logika & Realisasi Rangkaian Full Adder (Slide 16)</h4>
        </div>
        <div class="grid-2-cols mt-3">
          <div>
            <div class="code-box-study" style="font-size: 14.5px;">
              <strong>1. Persamaan Sum (S):</strong><br>
              <code style="color: var(--primary-cyan); font-weight:700; font-size:16px;">S = A &oplus; B &oplus; Cin</code><br>
              <small class="text-muted">Sum bernilai 1 jika jumlah bit 1 pada input bernilai ganjil (fungsi paritas ganjil 3 input).</small><br><br>
              <strong>2. Persamaan Carry-out (Cout):</strong><br>
              <code style="color: var(--accent-gold); font-weight:700; font-size:16px;">Cout = (A &middot; B) + (Cin &middot; (A &oplus; B))</code><br>
              <small class="text-muted">Bentuk ekuivalen kanonik SOP: <code>Cout = AB + A&middot;Cin + B&middot;Cin</code></small>
            </div>
          </div>
          <div>
            <div class="callout-sub" style="background: rgba(0,210,255,0.08); border-color: rgba(0,210,255,0.3);">
              <strong>Struktur Realisasi Full Adder (Slide 16):</strong><br>
              Full Adder dirancang dengan mengombinasikan:
              <ul class="luxury-list mt-1" style="font-size: 13px;">
                <li><strong>Half Adder 1:</strong> Menjumlahkan <code>A</code> dan <code>B</code> &rarr; Menghasilkan <code>S₁ = A &oplus; B</code> dan <code>C₁ = A &middot; B</code>.</li>
                <li><strong>Half Adder 2:</strong> Menjumlahkan <code>S₁</code> dan <code>Cin</code> &rarr; Menghasilkan output akhir <code>Sum = S₁ &oplus; Cin = A &oplus; B &oplus; Cin</code> dan <code>C₂ = Cin &middot; S₁</code>.</li>
                <li><strong>1 Gerbang OR:</strong> Menggabungkan kedua carry <code>Cout = C₁ + C₂ = (A &middot; B) + (Cin &middot; (A &oplus; B))</code>.</li>
              </ul>
              <strong class="text-success mt-2 d-block">Kesimpulan: 1 Full Adder = 2 Half Adder + 1 Gerbang OR!</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- RIPPLE CARRY ADDER (Slide 17 - 19) -->
      <h3 class="section-title"><i class="fas fa-link"></i> 6. Ripple Carry Adder (RCA) - Penjumlah Multi-Bit Berantai (Slide 17 - 19)</h3>
      <div class="grid-3-cards mb-4">
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-network-wired"></i></div>
          <h3>Definisi RCA (Slide 17)</h3>
          <p><strong>Ripple Carry Adder (RCA)</strong> adalah rangkaian penjumlahan biner multi-bit yang dibangun dengan menghubungkan beberapa Full Adder secara <strong>berantai (kaskade)</strong>.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-random"></i></div>
          <h3>Prinsip Kerja Berantai</h3>
          <p>Setiap Full Adder menangani sepasang bit <code>(Aᵢ, Bᵢ)</code>. Carry-out dari satu FA menjadi Carry-in bagi FA berikutnya: <code>Cout(i) &rarr; Cin(i+1)</code>, merambat dari LSB ke MSB.</p>
        </div>
        <div class="feature-card highlighted-gold">
          <div class="feature-icon"><i class="fas fa-sitemap"></i></div>
          <h3>Struktur RCA 4-Bit (Slide 18)</h3>
          <p>Terdiri dari <strong>4 Full Adder</strong>. Input: <code>A[3:0]</code>, <code>B[3:0]</code>, dan <code>Cin (C₀ = 0)</code>. Output: <code>Sum[3:0]</code> dan Carry akhir <code>Cout (C₄)</code>.</p>
        </div>
      </div>

      <!-- Kelemahan RCA & Propagation Delay (Slide 19) -->
      <div class="exercise-module-box mb-2">
        <div class="exercise-module-header">
          <span class="badge-accent"><i class="fas fa-stopwatch"></i> Analisis Performa Kritis (Slide 19)</span>
          <h3>Kelemahan Utama Ripple Carry Adder: Propagation Delay (Waktu Tunda)</h3>
        </div>
        <div class="grid-2-cols mt-3">
          <div class="showcase-card">
            <h4>Mekanisme Keterlambatan Perambatan Carry (Slide 19):</h4>
            <p style="font-size: 13.5px;">Carry dari bit terendah (LSB) <strong>harus melewati seluruh Full Adder secara serial</strong> sebelum hasil pada bit tertinggi (MSB) menjadi valid dan stabil.</p>
            <div class="callout-sub mt-2" style="background: rgba(239,68,68,0.08); border-color: rgba(239,68,68,0.3);">
              <strong>Dampak Skalabilitas:</strong>
              <ul class="luxury-list mt-1" style="font-size: 13px;">
                <li><strong>RCA 4-Bit:</strong> Carry harus merambat melewati 3 tahapan Full Adder.</li>
                <li><strong>RCA 32-Bit:</strong> Carry harus merambat melewati <strong>31 tahapan Full Adder</strong>!</li>
                <li><strong>RCA 64-Bit:</strong> Carry harus merambat melewati <strong>63 tahapan</strong> &rarr; Waktu komputasi sangat lambat!</li>
              </ul>
            </div>
          </div>

          <div class="showcase-card">
            <h4>Dampak Nyata terhadap Sistem Komputer &amp; Solusi (Slide 19):</h4>
            <p style="font-size: 13px;">Propagation delay ini secara langsung <strong>membatasi kecepatan clock CPU</strong> komputer. Karena RCA lambat, CPU tidak bisa dipacu pada frekuensi clock tinggi.</p>
            <div class="callout-sub mt-2" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
              <strong style="color: var(--accent-emerald);"><i class="fas fa-bolt"></i> Solusi Percepatan Carry Arsitektur Modern:</strong>
              <ul class="luxury-list mt-1" style="font-size: 12.5px;">
                <li><strong>1. Carry Lookahead Adder (CLA):</strong> Menghitung carry secara paralel serentak tanpa menunggu perambatan serial (Materi Sub-02).</li>
                <li><strong>2. Carry Skip Adder:</strong> Melompati blok bit jika kondisi propagate terpenuhi.</li>
                <li><strong>3. Carry Select Adder:</strong> Menghitung dua kemungkinan hasil sekaligus (asumsi Cin=0 dan Cin=1) lalu memilih via multiplexer.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  `,

  cla: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 06 / Sub-Materi 02</span>
        <h2>Carry Lookahead Adder (CLA) & Komparasi Kinerja</h2>
        <p class="subtitle">Teknik akselerasi carry paralel berkecepatan tinggi: Konsep Generate (G), Propagate (P), dan perbandingan menyeluruh RCA vs CLA.</p>
      </div>

      <!-- Definisi & Prinsip CLA (Slide 20) -->
      <div class="grid-2-cols mb-4">
        <div class="feature-card highlighted-gold">
          <div class="feature-icon"><i class="fas fa-bolt"></i></div>
          <h3>Definisi Carry Lookahead Adder (Slide 20)</h3>
          <p><strong>Carry Lookahead Adder (CLA)</strong> adalah jenis adder yang dirancang khusus untuk <strong>mempercepat perhitungan carry</strong> pada operasi penjumlahan multi-bit.</p>
          <div class="callout-sub mt-2" style="background: rgba(245,175,25,0.08); border-color: rgba(245,175,25,0.3);">
            <strong>Prinsip Utama:</strong> CLA <strong>tidak menunggu carry dari bit sebelumnya</strong> merambat satu per satu, melainkan menghitung seluruh sinyal carry pada saat yang sama secara <strong>paralel</strong> langsung dari bit-bit input!
          </div>
        </div>

        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-tachometer-alt"></i></div>
          <h3>Tujuan & Aplikasi Industri (Slide 20)</h3>
          <p>Tujuan utama CLA adalah mereduksi <strong>propagation delay</strong> secara drastis sehingga kecepatan eksekusi ALU prosesor meningkat signifikan.</p>
          <ul class="luxury-list mt-2" style="font-size: 13px;">
            <li><strong>ALU Kecepatan Tinggi:</strong> Dipakai pada prosesor modern Intel x86, ARM Cortex, dan GPU Nvidia/AMD.</li>
            <li><strong>Paralelisasi Logika:</strong> Mengubah komputasi berantai $O(n)$ pada RCA menjadi komputasi paralel $O(1)$ berbobot gerbang konstan.</li>
          </ul>
        </div>
      </div>

      <!-- Konsep Generate & Propagate (Slide 21) -->
      <h3 class="section-title"><i class="fas fa-code-branch"></i> 1. Konsep Generate (G) & Propagate (P) pada CLA (Slide 21)</h3>
      <div class="grid-2-cols mb-4">
        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-fire text-danger"></i>
            <h4>Generate Carry: Gᵢ = Aᵢ &middot; Bᵢ</h4>
          </div>
          <p style="font-size: 13.5px;">Suatu posisi bit ke-<code>i</code> akan <strong>menghasilkan (generate) carry baru</strong> jika kedua bit input bernilai 1 (<code>Aᵢ = 1</code> dan <code>Bᵢ = 1</code>), terlepas dari berapapun nilai carry yang masuk sebelumnya.</p>
          <div class="code-box-study mt-2">
            Persamaan: <code>Gᵢ = Aᵢ &middot; Bᵢ</code> &nbsp; (Gerbang AND)<br>
            <em>Contoh: Jika A=1 dan B=1 &rarr; 1+1=10₂ &rarr; Pasti menghasilkan carry out 1!</em>
          </div>

          <div class="showcase-header mt-3">
            <i class="fas fa-share text-primary"></i>
            <h4>Propagate Carry: Pᵢ = Aᵢ &oplus; Bᵢ</h4>
          </div>
          <p style="font-size: 13.5px;">Suatu posisi bit ke-<code>i</code> akan <strong>meneruskan (propagate) carry lama</strong> jika salah satu bit input bernilai 1 (<code>A=0, B=1</code> atau <code>A=1, B=0</code>).</p>
          <div class="code-box-study mt-2">
            Persamaan: <code>Pᵢ = Aᵢ &oplus; Bᵢ</code> &nbsp; (Gerbang XOR)<br>
            <em>Contoh: Jika A=1, B=0 dan ada Cin=1 &rarr; 1+0+1=10₂ &rarr; Carry dari sebelumnya diteruskan ke kolom berikutnya!</em>
          </div>
        </div>

        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-table text-warning"></i>
            <h4>Tabel Kebenaran G & P serta Hubungan dengan Sum (Slide 21)</h4>
          </div>
          <div class="table-responsive mt-1">
            <table class="luxury-table" style="text-align: center; font-size: 13px;">
              <thead>
                <tr><th>Aᵢ</th><th>Bᵢ</th><th>Generate (Gᵢ = A&middot;B)</th><th>Propagate (Pᵢ = A&oplus;B)</th><th>Keterangan Aksi</th></tr>
              </thead>
              <tbody>
                <tr><td>0</td><td>0</td><td><strong>0</strong></td><td><strong>0</strong></td><td>Carry musnah (kill)</td></tr>
                <tr class="row-highlight"><td>0</td><td>1</td><td><strong>0</strong></td><td><strong>1</strong></td><td>Carry diteruskan (propagate)</td></tr>
                <tr class="row-highlight"><td>1</td><td>0</td><td><strong>0</strong></td><td><strong>1</strong></td><td>Carry diteruskan (propagate)</td></tr>
                <tr style="background: rgba(245,175,25,0.15);"><td>1</td><td>1</td><td><strong>1</strong></td><td><strong>0</strong></td><td>Carry baru dibangkitkan (generate)</td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout-sub mt-3" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
            <strong style="color: var(--accent-emerald);"><i class="fas fa-calculator"></i> Hubungan Fundamental dengan Sum (Sᵢ):</strong>
            <p style="font-size: 13px; margin-top: 2px;">Karena <code>Pᵢ = Aᵢ &oplus; Bᵢ</code>, maka Sum tiap bit dihitung sangat ringkas dengan:<br>
            <code style="font-size: 15px; font-weight:700;">Sᵢ = Pᵢ &oplus; Cᵢ</code></p>
          </div>
        </div>
      </div>

      <!-- Persamaan Carry Lookahead (Slide 22) -->
      <h3 class="section-title"><i class="fas fa-project-diagram"></i> 2. Penurunan Persamaan Carry Lookahead (Slide 22)</h3>
      <div class="showcase-card mb-4">
        <div class="showcase-header">
          <i class="fas fa-sitemap text-primary"></i>
          <h4>Ekspansi Matematis Carry Paralel 4-Bit (Slide 22)</h4>
        </div>
        <p style="font-size: 13.5px;">Persamaan rekursif dasar: Carry bit ke-(i+1) terjadi jika carry baru dihasilkan (<code>Gᵢ</code>) ATAU carry lama diteruskan (<code>Pᵢ &middot; Cᵢ</code>):<br>
        <code style="color: var(--accent-gold); font-size: 16px; font-weight: 700;">Cᵢ₊₁ = Gᵢ + Pᵢ &middot; Cᵢ</code></p>

        <div class="code-box-study mt-3" style="font-size: 13.5px; line-height: 1.9;">
          <strong>Ekspansi untuk CLA 4-Bit:</strong><br>
          • <code>C₁ = G₀ + P₀ &middot; C₀</code><br>
          • <code>C₂ = G₁ + P₁ &middot; C₁ = G₁ + P₁ &middot; (G₀ + P₀ &middot; C₀) = <strong>G₁ + P₁&middot;G₀ + P₁&middot;P₀&middot;C₀</strong></code><br>
          • <code>C₃ = G₂ + P₂ &middot; C₂ = <strong>G₂ + P₂&middot;G₁ + P₂&middot;P₁&middot;G₀ + P₂&middot;P₁&middot;P₀&middot;C₀</strong></code><br>
          • <code>C₄ = G₃ + P₃ &middot; C₃ = <strong>G₃ + P₃&middot;G₂ + P₃&middot;P₂&middot;G₁ + P₃&middot;P₂&middot;P₁&middot;G₀ + P₃&middot;P₂&middot;P₁&middot;P₀&middot;C₀</strong></code>
        </div>

        <div class="callout-sub mt-3" style="background: rgba(0,210,255,0.08); border-color: rgba(0,210,255,0.3);">
          <strong style="color: var(--primary-cyan);"><i class="fas fa-lightbulb"></i> Makna Penting Penurunan Rumus di Atas:</strong>
          <p style="font-size: 13px; margin-top: 3px;">Perhatikan bahwa persamaan untuk <strong>C₁, C₂, C₃, dan C₄ sama sekali TIDAK bergantung pada carry antara!</strong> Semuanya diekspresikan hanya dengan sinyal <code>Gᵢ</code>, <code>Pᵢ</code>, dan carry awal <code>C₀</code>. Artinya, seluruh carry dapat diproses secara serentak hanya dalam <strong>2 tingkatan gerbang (Gerbang AND tingkat 1, lalu Gerbang OR tingkat 2)</strong>!</p>
        </div>
      </div>

      <!-- Komparasi RCA vs CLA (Slide 24) -->
      <h3 class="section-title"><i class="fas fa-balance-scale"></i> 3. Perbandingan Menyeluruh: RCA vs CLA (Slide 24)</h3>
      <div class="table-responsive mb-4">
        <table class="luxury-table" style="font-size: 13.5px;">
          <thead>
            <tr>
              <th style="width: 20%;">Aspek Pembanding</th>
              <th style="width: 40%; color: var(--accent-gold);"><i class="fas fa-link"></i> Ripple Carry Adder (RCA)</th>
              <th style="width: 40%; color: var(--primary-cyan);"><i class="fas fa-bolt"></i> Carry Lookahead Adder (CLA)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Arsitektur Desain</strong></td>
              <td>Sederhana (Serial kaskade Full Adder berurutan)</td>
              <td>Kompleks (Paralel dengan modul generator carry khusus)</td>
            </tr>
            <tr class="row-highlight">
              <td><strong>Propagation Delay</strong></td>
              <td><span class="text-danger font-weight-bold">Tinggi</span> (Meningkat linier O(n), carry merambat LSB&rarr;MSB)</td>
              <td><span class="text-success font-weight-bold">Sangat Rendah</span> (Carry dihitung langsung dalam 2 level gerbang)</td>
            </tr>
            <tr>
              <td><strong>Kebutuhan Hardware</strong></td>
              <td><span class="text-success">Hemat gerbang logika</span> (Hanya butuh n buah Full Adder standar)</td>
              <td><span class="text-warning">Lebih banyak gerbang</span> (Butuh gerbang AND/OR dengan fan-in input besar)</td>
            </tr>
            <tr class="row-highlight">
              <td><strong>Skala Aplikasi</strong></td>
              <td>Cocok untuk penjumlahan jumlah bit kecil (misal: 2-bit, 4-bit)</td>
              <td>Sangat ideal untuk prosesor modern bus data lebar (32-bit, 64-bit)</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  `,

  subtractors: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 06 / Sub-Materi 03</span>
        <h2>Rangkaian Pengurang (Subtractor) & Adder-Subtractor Terintegrasi</h2>
        <p class="subtitle">Memahami Half Subtractor, Full Subtractor, dan arsitektur brilian unit terintegrasi dengan kontrol gerbang XOR Mode M.</p>
      </div>

      <!-- Pengantar Pengurangan Biner & Borrow (Slide 7) -->
      <h3 class="section-title"><i class="fas fa-minus"></i> 1. Dasar Pengurangan Biner & Konsep Borrow (Slide 7)</h3>
      <div class="grid-2-cols mb-4">
        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-list-ol text-primary"></i>
            <h4>Aturan Dasar Pengurangan Biner (Slide 7)</h4>
          </div>
          <p style="font-size: 13.5px;">Pengurangan biner mengikuti kaidah pinjaman berbobot basis 2:</p>
          <div class="code-box-study mt-2">
            • <code>0 - 0 = 0</code> &nbsp; (Difference = 0, Borrow = 0)<br>
            • <code>1 - 0 = 1</code> &nbsp; (Difference = 1, Borrow = 0)<br>
            • <code>1 - 1 = 0</code> &nbsp; (Difference = 0, Borrow = 0)<br>
            • <code>0 - 1 = 1</code> &nbsp; (Difference = 1, <strong>Borrow = 1</strong> &rarr; meminjam dari bit lebih tinggi)
          </div>
          <div class="callout-sub mt-2" style="background: rgba(245,175,25,0.08); border-color: rgba(245,175,25,0.3);">
            <strong>Konsep Borrow (Pinjam):</strong> Jika pengurangan membutuhkan <code>0 - 1</code>, maka dilakukan pinjaman ke bit sebelah kiri yang lebih tinggi. Bit yang dipinjam bernilai <strong>"2" dalam sistem biner</strong>, sehingga <code>(2 + 0) - 1 = 1</code>.
          </div>
        </div>

        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-calculator text-warning"></i>
            <h4>Contoh Pengurangan Multi-Bit Slide 7</h4>
          </div>
          <p>Mengurangkan <code>1001₂ (9 desimal)</code> dengan <code>0101₂ (5 desimal)</code>:</p>
          <div class="code-box-study mt-2" style="font-size: 14px;">
            &nbsp; Bilangan A (Minuend) &nbsp;&nbsp;: &nbsp; 1 0 0 1 &nbsp; (9₁₀)<br>
            &nbsp; Bilangan B (Subtrahend): - 0 1 0 1 &nbsp; (5₁₀)<br>
            &nbsp; ------------------------------------<br>
            &nbsp; Difference (Hasil) &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp; <strong>0 1 0 0₂</strong> &nbsp; (4₁₀)
          </div>
          <div class="table-responsive mt-3">
            <table class="luxury-table" style="text-align: center; font-size: 12.5px;">
              <thead><tr><th>A</th><th>B</th><th>Difference (D)</th><th>Borrow (B)</th></tr></thead>
              <tbody>
                <tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                <tr class="row-highlight"><td>0</td><td>1</td><td><strong>1</strong></td><td><strong>1</strong></td></tr>
                <tr><td>1</td><td>0</td><td>1</td><td>0</td></tr>
                <tr><td>1</td><td>1</td><td>0</td><td>0</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- HALF SUBTRACTOR (Slide 26 & 27) -->
      <h3 class="section-title"><i class="fas fa-cut"></i> 2. Half Subtractor (HS) - Pengurang 2-Bit (Slide 26 & 27)</h3>
      <div class="grid-2-cols mb-4">
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-info-circle"></i></div>
          <h3>Definisi & Karakteristik Half Subtractor</h3>
          <p><strong>Half Subtractor</strong> adalah rangkaian kombinasi untuk mengurangkan 2 input bit biner: <code>A</code> (minuend, yang dikurangi) dan <code>B</code> (subtrahend, pengurang).</p>
          <ul class="luxury-list mt-2" style="font-size: 13px;">
            <li><strong>Difference (D):</strong> Hasil pengurangan <code>A - B</code>.</li>
            <li><strong>Borrow (B):</strong> Bernilai 1 jika <code>A &lt; B</code> (memerlukan pinjaman dari bit lebih tinggi).</li>
            <li><strong>Keterbatasan:</strong> Sama seperti Half Adder, tidak memiliki input Borrow-in (Bin) sehingga tidak dapat digunakan secara mandiri untuk pengurangan multi-bit.</li>
          </ul>
        </div>

        <div class="feature-card highlighted-gold">
          <div class="feature-icon"><i class="fas fa-project-diagram"></i></div>
          <h3>Tabel Kebenaran & Skematik Logika (Slide 27)</h3>
          <div class="code-box-study" style="font-size: 14px;">
            <strong>Persamaan Logika Half Subtractor (Slide 27):</strong><br>
            • <code>Difference (D) = A &oplus; B</code> &nbsp; &rarr; <em>(Gerbang XOR)</em><br>
            • <code>Borrow (B) = Ā &middot; B</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &rarr; <em>(Gerbang NOT + AND)</em>
          </div>
          <div class="circuit-schematic-box mt-3 text-center">
            <div style="font-family: var(--font-mono); font-size: 13px; background: rgba(0,0,0,0.4); padding: 14px; border-radius: 12px; border: 1px solid var(--border-subtle); line-height: 1.8;">
              A ──────┬─────────────────[ XOR ]───────&gt; <strong>Difference (D = A &oplus; B)</strong><br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
              B ──┬───┼─────────────────[ &nbsp; &nbsp; ]<br>
              &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│<br>
              &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└──[ NOT ]───┬───[ AND ]───────&gt; <strong>Borrow (B = Ā &middot; B)</strong><br>
              &nbsp;&nbsp;&nbsp;&nbsp;└────────────────┘
            </div>
          </div>
        </div>
      </div>

      <!-- FULL SUBTRACTOR (Slide 28 - 30) -->
      <h3 class="section-title"><i class="fas fa-layer-group"></i> 3. Full Subtractor (FS) - Solusi 3-Input Multi-Bit (Slide 28 - 30)</h3>
      <div class="grid-2-cols mb-4">
        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-info-circle text-primary"></i>
            <h4>Definisi Full Subtractor (Slide 28)</h4>
          </div>
          <p style="font-size: 13.5px;">Rangkaian kombinasi untuk melakukan operasi pengurangan dengan <strong>3 input</strong>: <code>A</code> (minuend), <code>B</code> (subtrahend), dan <code>Bin</code> (borrow-in dari bit sebelumnya).</p>
          <ul class="luxury-list mt-2" style="font-size: 13px;">
            <li><strong>Difference (D):</strong> Hasil pengurangan <code>A - B - Bin</code>.</li>
            <li><strong>Borrow-out (Bout):</strong> Pinjaman yang wajib diteruskan ke kolom bit berikutnya di sebelah kiri.</li>
            <li><strong>Prinsip Kerja:</strong> Jika A cukup besar, langsung dihitung <code>A - B - Bin</code>. Jika A terlalu kecil, sirkuit meminjam dari bit lebih tinggi menghasilkan <code>Bout = 1</code>.</li>
          </ul>
        </div>

        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-table text-warning"></i>
            <h4>Tabel Kebenaran Full Subtractor (Slide 29)</h4>
          </div>
          <div class="table-responsive">
            <table class="luxury-table" style="text-align: center; font-size: 12.5px;">
              <thead>
                <tr><th>A</th><th>B</th><th>Bin</th><th>Difference (D)</th><th>Borrow-out (Bout)</th></tr>
              </thead>
              <tbody>
                <tr><td>0</td><td>0</td><td>0</td><td><strong>0</strong></td><td><strong>0</strong></td></tr>
                <tr class="row-highlight"><td>0</td><td>0</td><td>1</td><td><strong>1</strong></td><td><strong>1</strong></td></tr>
                <tr class="row-highlight"><td>0</td><td>1</td><td>0</td><td><strong>1</strong></td><td><strong>1</strong></td></tr>
                <tr class="row-highlight"><td>0</td><td>1</td><td>1</td><td><strong>0</strong></td><td><strong>1</strong></td></tr>
                <tr><td>1</td><td>0</td><td>0</td><td><strong>1</strong></td><td><strong>0</strong></td></tr>
                <tr><td>1</td><td>0</td><td>1</td><td><strong>0</strong></td><td><strong>0</strong></td></tr>
                <tr><td>1</td><td>1</td><td>0</td><td><strong>0</strong></td><td><strong>0</strong></td></tr>
                <tr style="background: rgba(16,185,129,0.18);"><td>1</td><td>1</td><td>1</td><td><strong>1</strong></td><td><strong>1</strong></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Persamaan Logika Full Subtractor (Slide 30) -->
      <div class="showcase-card mb-4">
        <div class="showcase-header">
          <i class="fas fa-code-branch text-primary"></i>
          <h4>Persamaan Logika &amp; Skematik Full Subtractor (Slide 30)</h4>
        </div>
        <div class="code-box-study mt-2" style="font-size: 14.5px;">
          • <strong>Persamaan Difference (D):</strong><br>
          <code style="color: var(--primary-cyan); font-weight:700; font-size: 16px;">D = A &oplus; B &oplus; Bin</code><br><br>
          • <strong>Persamaan Borrow-out (Bout):</strong><br>
          <code style="color: var(--accent-gold); font-weight:700; font-size: 16px;">Bout = Ā &middot; (B + Bin) + (B &middot; Bin) = Ā&middot;B + Ā&middot;Bin + B&middot;Bin</code>
        </div>
      </div>

      <!-- ADDER-SUBTRACTOR TERINTEGRASI (Slide 31 - 33) -->
      <h3 class="section-title"><i class="fas fa-microchip"></i> 4. Adder-Subtractor Terintegrasi (Unit ALU 4-Bit) (Slide 31 - 32)</h3>
      <div class="exercise-module-box mb-4">
        <div class="exercise-module-header">
          <span class="badge-accent"><i class="fas fa-cogs"></i> Masterpiece Arsitektur Komputer</span>
          <h3>Integrasi Cerdas Adder & Subtractor Menggunakan Gerbang XOR & Kontrol Mode M</h3>
        </div>

        <div class="grid-2-cols mt-3">
          <div class="showcase-card highlighted-gold">
            <h4>Bagaimana Cara Kerjanya? (Slide 31)</h4>
            <p style="font-size: 13.5px;">Daripada membuat dua sirkuit terpisah yang memboroskan transistor, unit ALU menggabungkan <strong>Full Adder</strong> dengan gerbang <strong>XOR</strong> pada input B serta satu jalur kontrol <strong>M (Mode)</strong>:</p>
            <div class="code-box-study mt-2" style="font-size: 13.5px;">
              • <strong>Mode Penjumlahan (M = 0):</strong><br>
              &nbsp;&nbsp;- Gerbang XOR: <code>Bᵢ &oplus; 0 = Bᵢ</code> (Data B masuk apa adanya).<br>
              &nbsp;&nbsp;- Carry-in awal: <code>Cin₀ = 0</code>.<br>
              &nbsp;&nbsp;- Operasi yang terjadi: <code>A + B + 0 = A + B</code>.<br>
              &nbsp;&nbsp;- Cout berperan sebagai Carry biasa.<br><br>
              • <strong>Mode Pengurangan (M = 1):</strong><br>
              &nbsp;&nbsp;- Gerbang XOR: <code>Bᵢ &oplus; 1 = B̄ᵢ</code> (Membalik semua bit B / 1's Complement).<br>
              &nbsp;&nbsp;- Carry-in awal: <code>Cin₀ = 1</code>.<br>
              &nbsp;&nbsp;- Operasi yang terjadi: <code>A + B̄ + 1 = A + (-B) = A - B</code> <strong>(Two's Complement!)</strong>.<br>
              &nbsp;&nbsp;- Cout diinterpretasi sebagai Borrow-out (Cout=1: hasil positif/tanpa borrow, Cout=0: terjadi borrow).
            </div>
          </div>

          <div class="showcase-card">
            <h4>Tabel Kebenaran Kontrol Mode M (Slide 32)</h4>
            <div class="table-responsive mt-1">
              <table class="luxury-table" style="text-align: center; font-size: 12px;">
                <thead>
                  <tr><th>M (Mode)</th><th>A</th><th>B</th><th>Cin</th><th>S (Sum/Diff)</th><th>Cout (Carry/Borrow)</th><th>Fungsi</th></tr>
                </thead>
                <tbody>
                  <tr style="background: rgba(0,210,255,0.06);"><td>0 (Add)</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0 + 0 = 0</td></tr>
                  <tr style="background: rgba(0,210,255,0.06);"><td>0 (Add)</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0 + 1 = 1</td></tr>
                  <tr style="background: rgba(0,210,255,0.06);"><td>0 (Add)</td><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1 + 0 = 1</td></tr>
                  <tr style="background: rgba(0,210,255,0.06);"><td>0 (Add)</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1 + 1 = 10₂</td></tr>
                  <tr style="background: rgba(245,175,25,0.08);"><td>1 (Sub)</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0 - 0 = 0</td></tr>
                  <tr style="background: rgba(245,175,25,0.08);"><td>1 (Sub)</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0 - 1 = -1 (borrow 1)</td></tr>
                  <tr style="background: rgba(245,175,25,0.08);"><td>1 (Sub)</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1 - 0 = 1</td></tr>
                  <tr style="background: rgba(245,175,25,0.08);"><td>1 (Sub)</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1 - 1 = 0</td></tr>
                </tbody>
              </table>
            </div>
            <div class="callout-sub mt-2" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
              <strong style="color: var(--accent-emerald);"><i class="fas fa-check-circle"></i> Keuntungan Absolut Hardware:</strong>
              <p style="font-size: 12.5px; margin-top: 2px;">Satu rangkaian fisik 4-Bit Full Adder melayani dua operasi aritmatika sekaligus hanya dengan mengubah status bit sinyal kendali <code>M</code>.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  `,

  exercises: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 06 / Sub-Materi 05</span>
        <h2>Pembahasan Lengkap Contoh Kasus Slide 33 & Soal Aritmatika ITERA</h2>
        <p class="subtitle">Analisis bit-per-bit Mode Add (11+6=17), Mode Sub (9-5=4), mekanisme Two's Complement, dan latihan mandiri Sub-CPMK.</p>
      </div>

      <!-- KASUS 1: MODE ADD (Slide 33) -->
      <div class="exercise-module-box mb-4">
        <div class="exercise-module-header">
          <span class="badge-accent"><i class="fas fa-plus"></i> Kasus 1 Resmi Slide 33 ITERA</span>
          <h3>Mode Add (M = 0): Penjumlahan A + B &rarr; 1011₂ (11) + 0110₂ (6)</h3>
        </div>

        <div class="grid-2-cols mt-3">
          <div class="showcase-card">
            <h4>Data Operan & Kondisi Awal:</h4>
            <ul class="luxury-list mt-2" style="font-size: 13.5px;">
              <li><strong>Input A:</strong> <code>1011₂ = 11₁₀</code> (A₃=1, A₂=0, A₁=1, A₀=1)</li>
              <li><strong>Input B:</strong> <code>0110₂ = 6₁₀</code> (B₃=0, B₂=1, B₁=1, B₀=0)</li>
              <li><strong>Mode M:</strong> <code>0 (Add)</code> &rarr; Sinyal M=0 disalurkan ke semua gerbang XOR dan Cin₀ awal = 0.</li>
              <li><strong>Inversi B':</strong> <code>Bᵢ' = Bᵢ &oplus; 0 = Bᵢ</code> &rarr; Nilai B tidak berubah (tetap <code>0110₂</code>).</li>
              <li><strong>Target Hasil:</strong> <code>11 + 6 = 17₁₀ (10001₂)</code>.</li>
            </ul>
          </div>

          <div class="showcase-card highlighted-gold">
            <h4>Tabel Langkah Komputasi Bit-demi-Bit (Slide 33):</h4>
            <div class="table-responsive mt-1">
              <table class="luxury-table" style="text-align: center; font-size: 12.5px;">
                <thead>
                  <tr><th>Bit (i)</th><th>Aᵢ</th><th>Bᵢ</th><th>M</th><th>Bᵢ' (Bᵢ&oplus;M)</th><th>Cin</th><th>Sᵢ (A&oplus;B'&oplus;Cin)</th><th>Cout</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>0 (LSB)</strong></td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td><strong>1</strong></td><td>0</td></tr>
                  <tr><td><strong>1</strong></td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td><strong>0</strong></td><td>1</td></tr>
                  <tr><td><strong>2</strong></td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td><strong>0</strong></td><td>1</td></tr>
                  <tr><td><strong>3 (MSB)</strong></td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td><strong>0</strong></td><td>1</td></tr>
                </tbody>
              </table>
            </div>
            <div class="callout-sub mt-2" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
              <strong style="color: var(--accent-emerald);">Hasil Akhir Gabungan:</strong><br>
              <code>S (MSB..LSB) = 0001₂</code>, dan <code>Cout final (C₄) = 1</code>.<br>
              Gabungan 5-bit: <code>1 0001₂ = 16 + 1 = 17₁₀</code> &nbsp; <span class="badge-accent"><i class="fas fa-check"></i> Tepat 100%!</span>
            </div>
          </div>
        </div>
      </div>

      <!-- KASUS 2: MODE SUB (Slide 33) -->
      <div class="exercise-module-box mb-4">
        <div class="exercise-module-header">
          <span class="badge-accent"><i class="fas fa-minus"></i> Kasus 2 Resmi Slide 33 ITERA</span>
          <h3>Mode Sub (M = 1): Pengurangan A − B &rarr; 1001₂ (9) − 0101₂ (5)</h3>
        </div>

        <div class="grid-2-cols mt-3">
          <div class="showcase-card">
            <h4>Mekanisme Two's Complement Otomatis:</h4>
            <p style="font-size: 13.5px;">Pada pengurangan <code>A - B</code>, sistem digital mengubah operasi menjadi <code>A + (-B)</code>:</p>
            <div class="code-box-study mt-2" style="font-size: 13px;">
              1. <strong>Input A:</strong> <code>1001₂ = 9₁₀</code><br>
              2. <strong>Input B:</strong> <code>0101₂ = 5₁₀</code><br>
              3. <strong>Mode M = 1:</strong><br>
              &nbsp;&nbsp;• Membalik bit B: <code>Bᵢ' = Bᵢ &oplus; 1 = B̄ᵢ</code> &rarr; <code>0101₂</code> dibalik menjadi <code>1010₂</code> (1's complement)<br>
              &nbsp;&nbsp;• Memasukkan <code>Cin₀ = 1</code> (menambah 1 &rarr; menjadikannya 2's complement!)<br>
              4. <strong>Persamaan Sirkuit:</strong> <code>A + B̄ + 1 = 9 + (-5) = 4₁₀ (0100₂)</code>.
            </div>
          </div>

          <div class="showcase-card highlighted-gold">
            <h4>Tabel Langkah Komputasi Bit-demi-Bit (Slide 33):</h4>
            <div class="table-responsive mt-1">
              <table class="luxury-table" style="text-align: center; font-size: 12.5px;">
                <thead>
                  <tr><th>Bit (i)</th><th>Aᵢ</th><th>Bᵢ</th><th>M</th><th>Bᵢ' (Bᵢ&oplus;M)</th><th>Cin</th><th>Sᵢ (A&oplus;B'&oplus;Cin)</th><th>Cout</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>0 (LSB)</strong></td><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td><td><strong>0</strong></td><td>1</td></tr>
                  <tr><td><strong>1</strong></td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td><strong>0</strong></td><td>1</td></tr>
                  <tr><td><strong>2</strong></td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td><strong>1</strong></td><td>0</td></tr>
                  <tr><td><strong>3 (MSB)</strong></td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td><strong>0</strong></td><td>1</td></tr>
                </tbody>
              </table>
            </div>
            <div class="callout-sub mt-2" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
              <strong style="color: var(--accent-emerald);">Hasil Akhir Pengurangan:</strong><br>
              <code>S (MSB..LSB) = 0100₂ = 4₁₀</code>, dan <code>Cout final (C₄) = 1</code>.<br>
              <small class="text-muted">Cout final = 1 menandakan hasil bernilai positif (tidak ada borrow / end-around carry diabaikan dalam 2's complement).</small>
            </div>
          </div>
        </div>
      </div>

      <!-- KASUS 3: PENGURANGAN MENGHASILKAN NEGATIF (A < B) -->
      <div class="exercise-module-box mb-2">
        <div class="exercise-module-header">
          <span class="badge-accent"><i class="fas fa-balance-scale-right"></i> Studi Lanjutan: Aritmatika Negatif</span>
          <h3>Kasus 3: Bagaimana Jika A &lt; B? Contoh: 5 − 9 = −4</h3>
        </div>

        <div class="grid-2-cols mt-3">
          <div class="showcase-card">
            <h4>Perhitungan A = 0101₂ (5) dan B = 1001₂ (9):</h4>
            <ul class="luxury-list mt-2" style="font-size: 13px;">
              <li>M = 1 &rarr; B di-invert: <code>B' = 1001 &oplus; 1111 = 0110₂</code>.</li>
              <li>Cin₀ = 1.</li>
              <li>Perhitungan: <code>0101₂ + 0110₂ + 1 = 1100₂</code>.</li>
              <li><strong>Cout final = 0</strong> &rarr; Menandakan hasil akhir bernilai <strong>NEGATIF</strong> (terjadi borrow).</li>
            </ul>
          </div>

          <div class="showcase-card">
            <h4>Interpretasi Two's Complement Negatif:</h4>
            <p style="font-size: 13px;">Hasil <code>S = 1100₂</code> adalah representasi Two's Complement dari bilangan negatif:</p>
            <div class="code-box-study mt-2">
              • Ambil Two's complement dari <code>1100₂</code>:<br>
              &nbsp;&nbsp;Inversi: <code>0011₂</code> &rarr; Tambah 1: <code>0011₂ + 1 = 0100₂ = 4₁₀</code>.<br>
              • Tambahkan tanda negatif: <strong>-4₁₀</strong>.<br>
              <span class="text-success">Terbukti sirkuit menghasilkan <code>5 - 9 = -4</code> dengan sempurna!</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  `
};

/**
 * TEKS MATERI DETAIL MINGGU 7: DECODER, ENCODER, DAN BCD KE 7-SEGMENT
 * Berdasarkan Slide Resmi Pertemuan 7 MK Sistem Digital ITERA (3-SKS)
 * Dosen Pengampu: Dr. Swadexi Istiqphara, S.T., M.T.
 */
const WEEK7_CONTENT = {
  decoder: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 07 / Sub-Materi 01</span>
        <h2>Rangkaian Decoder, IC 74138 &amp; Aplikasi Sistem Digital</h2>
        <p class="subtitle">Memahami prinsip dasar konversi biner ke aktivasi saluran tunggal, blok diagram umum n-to-2ⁿ, skematik Decoder 1:2, 2:4 (dengan Enable), 3:8, arsitektur IC 74138, serta 4 aplikasi industri.</p>
      </div>

      <!-- Detail Kuliah & Rujukan Resmi Slide 1 - 3 -->
      <div class="glass-callout mb-4">
        <div class="callout-icon"><i class="fas fa-graduation-cap"></i></div>
        <div class="callout-body">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <h4 style="margin:0;">Informasi Kuliah Pertemuan 7 ITERA</h4>
            <span class="pill-tag"><i class="fas fa-university"></i> Institut Teknologi Sumatera</span>
          </div>
          <div class="grid-2-cols mt-2" style="font-size: 13.5px;">
            <div>
              <strong>Mata Kuliah:</strong> Sistem Digital (INF203 / EL2102) • 3-SKS<br>
              <strong>Materi:</strong> DECODER, ENCODER, BCD 7-SEGMENT<br>
              <strong>Dosen Pengampu:</strong> Dr. Swadexi Istiqphara, S.T., M.T.<br>
              <strong>Buku Rujukan (Slide 2):</strong> S. Brown and Z. Vranesic, <em>Fundamentals of Digital Logic and VHDL Design</em>, 3rd Edition, McGraw-Hill, 2009.
            </div>
            <div>
              <strong>Indikator Capaian Pembelajaran (Slide 3):</strong>
              <ul class="luxury-list mt-1" style="font-size: 12.5px;">
                <li>Menjelaskan konsep dasar dan perbedaan rangkaian kombinasional vs sekuensial.</li>
                <li>Mendesain rangkaian decoder (1:2, 2:4 dengan Enable, 3:8, IC 74138).</li>
                <li>Menganalisis pengalamatan memori CPU dan pemilihan saluran sinyal.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Review Rangkaian Kombinasional vs Sekuensial (Slide 5 & 6) -->
      <h3 class="section-title"><i class="fas fa-layer-group"></i> 1. Review: Rangkaian Kombinasional vs Sekuensial (Slide 5 &amp; 6)</h3>
      <div class="grid-2-cols mb-4">
        <div class="showcase-card">
          <div class="showcase-header">
            <h4><i class="fas fa-microchip text-primary"></i> Karakteristik Rangkaian Kombinasional</h4>
          </div>
          <p class="mt-2" style="font-size: 13.5px; line-height: 1.6;">
            <strong>Definisi (Slide 5):</strong> Rangkaian logika di mana nilai keluaran (output) pada saat tertentu <strong>hanya bergantung murni pada kombinasi nilai masukan (input) saat itu juga</strong>, tanpa memerlukan riwayat input sebelumnya (tidak memiliki memori internal).
          </p>
          <div class="code-box-study mt-2" style="font-size: 13px;">
            <strong>Contoh Rangkaian:</strong><br>
            • Encoder &amp; Decoder<br>
            • Multiplexer (MUX) &amp; Demultiplexer (DEMUX)<br>
            • Adder &amp; Subtractor (ALU)
          </div>
        </div>

        <div class="showcase-card">
          <div class="showcase-header">
            <h4><i class="fas fa-table text-warning"></i> Tabel Perbandingan (Slide 6)</h4>
          </div>
          <div class="table-responsive mt-2">
            <table class="luxury-table" style="font-size: 12.5px;">
              <thead>
                <tr>
                  <th>Aspek Analisis</th>
                  <th style="color: var(--primary-cyan);">Kombinasional</th>
                  <th style="color: var(--accent-gold);">Sekuensial</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Memori Internal</strong></td>
                  <td><span class="badge-val low">Tidak Ada</span></td>
                  <td><span class="badge-val high">Ada</span></td>
                </tr>
                <tr>
                  <td><strong>Ketergantungan Output</strong></td>
                  <td>Hanya input saat ini</td>
                  <td>Input saat ini + State memori sebelumnya</td>
                </tr>
                <tr>
                  <td><strong>Komponen Utama</strong></td>
                  <td>Gerbang Logika (AND, OR, NOT, NAND, NOR)</td>
                  <td>Flip-Flop, Latch, Register, Counter</td>
                </tr>
                <tr>
                  <td><strong>Umpan Balik (Feedback)</strong></td>
                  <td>Tidak ada loop feedback</td>
                  <td>Memiliki loop feedback dari output ke input</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Definisi & Blok Diagram Decoder (Slide 7 & 8) -->
      <h3 class="section-title"><i class="fas fa-project-diagram"></i> 2. Definisi &amp; Blok Diagram Decoder Umum (Slide 7 &amp; 8)</h3>
      <div class="showcase-card mb-4">
        <div class="grid-2-cols" style="align-items: center;">
          <div>
            <div class="callout-sub" style="background: rgba(0,210,255,0.08); border-color: rgba(0,210,255,0.3);">
              <strong style="color: var(--primary-cyan); font-size: 15px;">
                <i class="fas fa-quote-left"></i> "Decoder adalah rangkaian logika yang mengubah input biner menjadi satu output aktif dari beberapa kemungkinan output." (Slide 7)
              </strong>
            </div>
            <ul class="luxury-list mt-3" style="font-size: 13.5px;">
              <li><strong>Rasio Input &rarr; Output:</strong> Masukan sebesar <code>n bit</code> biner akan menghasilkan tepat <code>2ⁿ saluran output</code>.</li>
              <li><strong>Prinsip Aktivasi:</strong> Untuk setiap kombinasi biner masukan tertentu, <strong>hanya ada satu jalur output yang aktif (HIGH / LOW)</strong> pada satu satuan waktu.</li>
              <li><strong>Domain Aplikasi Nyata:</strong> Pengalamatan memori komputer (Memory Addressing), driver display 7-segment, decoding instruksi CPU, dan seleksi data bus.</li>
            </ul>
          </div>

          <div style="text-align: center; background: rgba(11,17,32,0.8); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <div style="font-size: 12px; font-weight: 700; color: var(--text-dim); text-transform: uppercase; margin-bottom: 12px;">
              Blok Diagram Binary Decoder Umum (Slide 8)
            </div>
            <div style="display: flex; justify-content: center; align-items: center; gap: 16px;">
              <div style="font-family: var(--font-mono); font-size: 13px; color: var(--primary-cyan);">
                n jalur input<br>&rarr;&rarr;&rarr;
              </div>
              <div style="background: linear-gradient(135deg, rgba(30,41,59,0.9), rgba(15,23,42,0.95)); border: 2px solid var(--primary-cyan); border-radius: 8px; padding: 24px 28px; box-shadow: 0 0 20px rgba(0,210,255,0.2);">
                <strong style="font-size: 16px; color: var(--text-main); font-family: var(--font-mono);">BINARY<br>DECODER</strong><br>
                <small class="text-muted" style="font-size: 11px;">(n to 2ⁿ)</small>
              </div>
              <div style="font-family: var(--font-mono); font-size: 13px; color: var(--accent-emerald);">
                &rarr;&rarr;&rarr;<br>2ⁿ jalur output
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Decoder 1-to-2 & Decoder 2-to-4 (Slide 9, 10, 11, 12) -->
      <h3 class="section-title"><i class="fas fa-sitemap"></i> 3. Desain Rangkaian Decoder: 1 to 2, 2 to 4 &amp; Strobe Enable (Slide 9 - 12)</h3>
      <div class="grid-2-cols mb-4">
        <!-- Sub-card A: Decoder 1 to 2 -->
        <div class="exercise-module-box">
          <div class="exercise-module-header">
            <span class="badge-accent">Slide 9</span>
            <h3>A. Decoder 1 to 2</h3>
          </div>
          <p class="mt-2" style="font-size: 13px;">Decoder paling mendasar dengan 1 jalur input <code>A</code> dan 2 jalur keluaran <code>Y₀, Y₁</code>.</p>
          <div class="table-responsive mt-2">
            <table class="truth-table" style="font-size: 12px; text-align: center;">
              <thead>
                <tr><th>Input (A)</th><th>Output Y₀</th><th>Output Y₁</th><th>Keterangan</th></tr>
              </thead>
              <tbody>
                <tr><td><code>0</code></td><td><strong style="color:var(--accent-emerald);">1</strong></td><td>0</td><td>Kanal Y₀ aktif (Y₀ = Ā)</td></tr>
                <tr><td><code>1</code></td><td>0</td><td><strong style="color:var(--accent-emerald);">1</strong></td><td>Kanal Y₁ aktif (Y₁ = A)</td></tr>
              </tbody>
            </table>
          </div>
          <div class="code-box-study mt-2" style="font-size: 13px;">
            <code>Y₀ = Ā (melewati gerbang NOT)</code><br>
            <code>Y₁ = A (jalur langsung tanpa inversi)</code>
          </div>
        </div>

        <!-- Sub-card B: Decoder 2 to 4 -->
        <div class="exercise-module-box">
          <div class="exercise-module-header">
            <span class="badge-accent">Slide 10 &amp; 11</span>
            <h3>B. Decoder 2 to 4 Standar</h3>
          </div>
          <p class="mt-2" style="font-size: 13px;">Masukan 2-bit <code>(X, Y)</code> menghasilkan 4 jalur keluaran minterm <code>(F₀, F₁, F₂, F₃)</code>.</p>
          <div class="table-responsive mt-2">
            <table class="truth-table" style="font-size: 12px; text-align: center;">
              <thead>
                <tr><th>X</th><th>Y</th><th>F₀</th><th>F₁</th><th>F₂</th><th>F₃</th><th>Persamaan Minterm</th></tr>
              </thead>
              <tbody>
                <tr><td>0</td><td>0</td><td><strong style="color:var(--accent-emerald);">1</strong></td><td>0</td><td>0</td><td>0</td><td><code>F₀ = X' &middot; Y'</code></td></tr>
                <tr><td>0</td><td>1</td><td>0</td><td><strong style="color:var(--accent-emerald);">1</strong></td><td>0</td><td>0</td><td><code>F₁ = X' &middot; Y</code></td></tr>
                <tr><td>1</td><td>0</td><td>0</td><td>0</td><td><strong style="color:var(--accent-emerald);">1</strong></td><td>0</td><td><code>F₂ = X &middot; Y'</code></td></tr>
                <tr><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td><strong style="color:var(--accent-emerald);">1</strong></td><td><code>F₃ = X &middot; Y</code></td></tr>
              </tbody>
            </table>
          </div>
          <p class="mt-2 text-muted" style="font-size: 12px;">
            <strong>Implementasi Sirkuit (Slide 11):</strong> Tersusun dari 2 buah gerbang inverter (NOT X dan NOT Y) serta 4 buah gerbang AND 2-masukan.
          </p>
        </div>
      </div>

      <!-- Decoder 2 to 4 dengan Enable (Slide 12) -->
      <div class="showcase-card mb-4">
        <div class="showcase-header">
          <span class="badge-accent">Slide 12</span>
          <h4><i class="fas fa-toggle-on text-warning"></i> Decoder 2 to 4 dengan Jalur Strobe / Enable (En)</h4>
        </div>
        <p class="mt-2" style="font-size: 13.5px; line-height: 1.6;">
          Dalam sistem digital nyata, decoder hampir selalu dilengkapi pin <strong>Enable (En)</strong>. Pin ini berfungsi sebagai saklar master untuk menyalakan atau mematikan seluruh keluaran decoder. Jika <code>En = 0</code>, semua keluaran dipaksa nonaktif (0), terlepas dari kombinasi input X dan Y.
        </p>
        <div class="grid-2-cols mt-3">
          <div class="code-box-study" style="font-size: 13px;">
            <strong>Persamaan Logika dengan Enable Active-HIGH (Slide 12):</strong><br>
            <code>y₀ = a' &middot; b' &middot; En</code><br>
            <code>y₁ = a' &middot; b &middot; En</code><br>
            <code>y₂ = a &middot; b' &middot; En</code><br>
            <code>y₃ = a &middot; b &middot; En</code><br>
            <small class="text-muted">Setiap gerbang AND menggunakan 3 masukan (a, b, dan En).</small>
          </div>
          <div class="callout-sub" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
            <strong style="color: var(--accent-emerald); font-size: 14px;">Kegunaan Utama Jalur Enable:</strong>
            <ul class="luxury-list mt-1" style="font-size: 12.5px;">
              <li><strong>Kaskade (Ekspansi Decoder):</strong> Menggabungkan beberapa decoder kecil untuk membentuk decoder lebih besar (misal 2 buah decoder 2:4 menjadi decoder 3:8).</li>
              <li><strong>Sinkronisasi Bus:</strong> Mengatur waktu aktivasi periferal agar selaras dengan pulsa clock prosesor.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Decoder 3 to 8 & IC 74138 (Slide 13, 14, 15, 16) -->
      <h3 class="section-title"><i class="fas fa-microchip"></i> 4. Decoder 3 to 8 &amp; Bedah IC Standar Industri: IC 74138 (Slide 13 - 16)</h3>
      <div class="grid-2-cols mb-4">
        <!-- Decoder 3 to 8 Teori -->
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-cubes"></i></div>
          <h3>Decoder 3 to 8 (Slide 13 &amp; 14)</h3>
          <p class="mt-1" style="font-size: 13px;">
            Menerima masukan biner 3-bit <code>(x, y, z)</code> dan menghasilkan 8 saluran minterm <code>(F₀ s.d. F₇)</code>.
          </p>
          <div class="code-box-study mt-2" style="font-size: 12.5px;">
            <code>F₀ = x' y' z' (m₀: 000)</code>&nbsp;&nbsp;<code>F₄ = x y' z' (m₄: 100)</code><br>
            <code>F₁ = x' y' z  (m₁: 001)</code>&nbsp;&nbsp;<code>F₅ = x y' z  (m₅: 101)</code><br>
            <code>F₂ = x' y  z' (m₂: 010)</code>&nbsp;&nbsp;<code>F₆ = x y  z' (m₆: 110)</code><br>
            <code>F₃ = x' y  z  (m₃: 011)</code>&nbsp;&nbsp;<code>F₇ = x y  z  (m₇: 111)</code>
          </div>
          <p class="mt-2 text-muted" style="font-size: 12px;">
            <strong>Skematik Gerbang:</strong> Memerlukan 3 gerbang NOT untuk sinyal <code>x', y', z'</code> dan 8 buah gerbang AND 3-masukan (Slide 14).
          </p>
        </div>

        <!-- Bedah IC 74138 -->
        <div class="feature-card highlighted-gold">
          <div class="feature-icon"><i class="fas fa-memory"></i></div>
          <h3>IC 74138 / 74LS138: 3-to-8 Line Decoder (Slide 15 &amp; 16)</h3>
          <p class="mt-1" style="font-size: 13px;">
            IC standar industri paling populer untuk decoding alamat memori komputer.
          </p>
          <ul class="luxury-list mt-2" style="font-size: 12.5px;">
            <li><strong>Input Seleksi Alamat:</strong> <code>A₀ (Pin 1), A₁ (Pin 2), A₂ (Pin 3)</code>.</li>
            <li><strong>3 Jalur Enable Khusus (Slide 15):</strong> 
              <br>&bull; <code>Ē₁ (Pin 4)</code>: Active LOW.
              <br>&bull; <code>Ē₂ (Pin 5)</code>: Active LOW.
              <br>&bull; <code>E₃ (Pin 6)</code>: Active HIGH.
              <br><em>IC hanya aktif jika: <code>E = Ē₁' &middot; Ē₂' &middot; E₃ = 1</code>.</em>
            </li>
            <li><strong>Keluaran Active-LOW (Slide 16):</strong> 8 keluaran terbalik <code>Ȳ₀ s.d. Ȳ₇</code> menggunakan gerbang NAND internal 4-masukan (output terpilih bernilai 0V/LOW).</li>
          </ul>
        </div>
      </div>

      <!-- 4 Aplikasi Decoder di Industri (Slide 17 - 21) -->
      <h3 class="section-title"><i class="fas fa-laptop-code"></i> 5. Empat Aplikasi Nyata Decoder di Dunia Nyata (Slide 17 - 21)</h3>
      <div class="grid-4-cards mb-2">
        <!-- Aplikasi 1 -->
        <div class="feature-card">
          <div class="feature-icon" style="color: var(--primary-cyan);"><i class="fas fa-memory"></i></div>
          <h4 style="font-size: 15px;">1. Address Decoder Memori (Slide 18)</h4>
          <p class="mt-2" style="font-size: 12.5px; line-height: 1.5;">
            CPU mengirimkan alamat biner untuk memilih lokasi memori fisik spesifik. Decoder 3:8 menerima <code>A₂A₁A₀</code> dan mengaktifkan sinyal <strong>Chip Select (CS)</strong> pada 1 dari 8 blok RAM/ROM (contoh alamat <code>101₂</code> mengaktifkan blok 5, <code>Y₅ = 1</code>).
          </p>
        </div>

        <!-- Aplikasi 2 -->
        <div class="feature-card">
          <div class="feature-icon" style="color: var(--accent-gold);"><i class="fas fa-sliders-h"></i></div>
          <h4 style="font-size: 15px;">2. Channel Selector / Routing (Slide 19)</h4>
          <p class="mt-2" style="font-size: 12.5px; line-height: 1.5;">
            Digunakan untuk memilih satu sumber sinyal audio/video dari banyak saluran masukan. Input kontrol 2-bit memilih 1 dari 4 channel audio dengan mengaktifkan transistor switching (BC557) pada jalur yang dipilih.
          </p>
        </div>

        <!-- Aplikasi 3 -->
        <div class="feature-card">
          <div class="feature-icon" style="color: var(--accent-ruby);"><i class="fas fa-key"></i></div>
          <h4 style="font-size: 15px;">3. Kunci Digital Keamanan (Slide 20)</h4>
          <p class="mt-2" style="font-size: 12.5px; line-height: 1.5;">
            Decoder dikonfigurasi untuk mendeteksi kode PIN biner tertentu. Misalnya ketika kombinasi input 3-bit tepat bernilai <code>101₂ (5)</code>, output <code>Y₅</code> aktif memicu relay/solenoid untuk membuka kunci brankas atau pintu elektronik.
          </p>
        </div>

        <!-- Aplikasi 4 -->
        <div class="feature-card">
          <div class="feature-icon" style="color: var(--accent-emerald);"><i class="fas fa-network-wired"></i></div>
          <h4 style="font-size: 15px;">4. Pengendalian Periferal (Slide 21)</h4>
          <p class="mt-2" style="font-size: 12.5px; line-height: 1.5;">
            Dalam arsitektur mikrokontroler (MCU), decoder 4-to-16 digunakan untuk mengaktifkan modul periferal tertentu (misalnya modul ADC, UART, SPI, Timer, atau port I/O) yang sedang diajak berkomunikasi oleh CPU bus.
          </p>
        </div>
      </div>
    </div>
  `,

  encoder: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 07 / Sub-Materi 02</span>
        <h2>Rangkaian Encoder, Priority Encoder &amp; Keypad Scanner</h2>
        <p class="subtitle">Memahami operasi kebalikan decoder (2ⁿ input &rarr; n output), persamaan logika OR, solusi konflik input dengan Priority Encoder 74LS148, aplikasi matriks keyboard, dan tabel komparasi lengkap.</p>
      </div>

      <!-- Definisi Encoder (Slide 22 & 23) -->
      <h3 class="section-title"><i class="fas fa-sort-numeric-down"></i> 1. Konsep Dasar &amp; Prinsip Kerja Encoder (Slide 22 &amp; 23)</h3>
      <div class="grid-2-cols mb-4">
        <div class="showcase-card">
          <div class="callout-sub" style="background: rgba(245,175,25,0.08); border-color: rgba(245,175,25,0.3);">
            <strong style="color: var(--accent-gold); font-size: 15px;">
              <i class="fas fa-quote-left"></i> "Encoder adalah kebalikan dari decoder. Mengubah 2ⁿ input menjadi n-bit output biner." (Slide 22)
            </strong>
          </div>
          <ul class="luxury-list mt-3" style="font-size: 13.5px;">
            <li><strong>Fungsi Utama:</strong> Mengkodekan sinyal aktivasi diskrit tunggal dari dunia fisik menjadi representasi bilangan digital biner yang dimengerti mikroprosesor.</li>
            <li><strong>Aturan Operasi Standar:</strong> Pada encoder biner murni, diasumsikan <strong>hanya satu jalur masukan yang aktif (logika 1) pada satu waktu</strong>.</li>
            <li><strong>Contoh Rasio:</strong> 8 input <code>(Y₀ s.d. Y₇)</code> diubah menjadi keluaran biner 3-bit <code>(A₂A₁A₀)</code> yang menunjukkan nomor indeks jalur yang sedang aktif.</li>
          </ul>
        </div>

        <!-- Encoder 4 to 2 (Slide 23) -->
        <div class="exercise-module-box">
          <div class="exercise-module-header">
            <span class="badge-accent">Slide 23</span>
            <h3>Encoder 4 to 2</h3>
          </div>
          <div class="table-responsive mt-2">
            <table class="truth-table" style="font-size: 12.5px; text-align: center;">
              <thead>
                <tr><th colspan="4">Input (One-Hot)</th><th colspan="2">Output Biner</th></tr>
                <tr><th>D₃</th><th>D₂</th><th>D₁</th><th>D₀</th><th>A₁ (MSB)</th><th>A₀ (LSB)</th></tr>
              </thead>
              <tbody>
                <tr><td>0</td><td>0</td><td>0</td><td><strong style="color:var(--primary-cyan);">1</strong></td><td>0</td><td>0</td></tr>
                <tr><td>0</td><td>0</td><td><strong style="color:var(--primary-cyan);">1</strong></td><td>0</td><td>0</td><td>1</td></tr>
                <tr><td>0</td><td><strong style="color:var(--primary-cyan);">1</strong></td><td>0</td><td>0</td><td>1</td><td>0</td></tr>
                <tr><td><strong style="color:var(--primary-cyan);">1</strong></td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>
              </tbody>
            </table>
          </div>
          <div class="code-box-study mt-2" style="font-size: 13px;">
            <strong>Persamaan Logika Gerbang OR (Slide 23):</strong><br>
            <code>A₁ = D₂ + D₃</code>&nbsp;&nbsp;(A₁ bernilai 1 jika D₂ atau D₃ aktif)<br>
            <code>A₀ = D₁ + D₃</code>&nbsp;&nbsp;(A₀ bernilai 1 jika D₁ atau D₃ aktif)
          </div>
        </div>
      </div>

      <!-- Klasifikasi Jenis Encoder & Priority Encoder (Slide 24, 25, 26) -->
      <h3 class="section-title"><i class="fas fa-layer-group"></i> 2. Jenis-Jenis Encoder &amp; Solusi Priority Encoder (Slide 24 - 26)</h3>
      <div class="table-responsive mb-4">
        <table class="luxury-table" style="font-size: 13px;">
          <thead>
            <tr>
              <th>Kategori Encoder (Slide 24)</th>
              <th>Fungsi Operasional</th>
              <th>Contoh Komponen / Aplikasi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Binary Encoder</strong></td>
              <td>Mengubah 2ⁿ masukan diskrit menjadi n-bit kode biner standar.</td>
              <td>8-to-3 Binary Encoder</td>
            </tr>
            <tr>
              <td><strong>Priority Encoder</strong></td>
              <td>Memberikan prioritas pada masukan bernilai bobot tertinggi jika ada lebih dari satu input aktif bersamaan.</td>
              <td>IC 74LS148 (8-to-3 Priority Encoder)</td>
            </tr>
            <tr>
              <td><strong>Decimal to BCD Encoder</strong></td>
              <td>Mengubah 10 masukan tombol desimal (0–9) menjadi kode BCD 4-bit (8421).</td>
              <td>Keyboard kalkulator, Keypad matrix ATM</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Bedah Priority Encoder (Slide 26) -->
      <div class="showcase-card mb-4">
        <div class="showcase-header">
          <span class="badge-accent">Slide 26</span>
          <h4><i class="fas fa-award text-warning"></i> Mengapa Membutuhkan Priority Encoder? (IC 74LS148)</h4>
        </div>
        <p class="mt-2" style="font-size: 13.5px; line-height: 1.6;">
          <strong>Permasalahan Encoder Biasa:</strong> Dalam aplikasi dunia nyata (seperti tombol keyboard ditekan bersamaan), jika dua atau lebih input aktif sekaligus, encoder biasa akan menghasilkan bit output acak/salah. 
          <br><strong>Solusi (Priority Encoder):</strong> Setiap input diberi bobot prioritas. Masukan berbobot tertinggi <strong>selalu dimenangkan</strong>, mengabaikan semua masukan yang bernilai lebih rendah (kondisi <em>don't care</em> / X).
        </p>

        <div class="grid-2-cols mt-3">
          <div class="table-responsive">
            <table class="truth-table" style="font-size: 12px; text-align: center;">
              <thead>
                <tr><th>Input Tertinggi Aktif</th><th>Output Biner (Y₂ Y₁ Y₀)</th><th>Keterangan Prioritas</th></tr>
              </thead>
              <tbody>
                <tr style="background: rgba(239,68,68,0.12);"><td><strong>D₇ = 1</strong> (D₆..D₀ = X)</td><td><code>1 1 1</code></td><td>Prioritas Tertinggi (Top Priority)</td></tr>
                <tr><td><strong>D₆ = 1</strong> (D₅..D₀ = X)</td><td><code>1 1 0</code></td><td>Mengabaikan D₅ s.d. D₀</td></tr>
                <tr><td><strong>D₅ = 1</strong> (D₄..D₀ = X)</td><td><code>1 0 1</code></td><td>Mengabaikan D₄ s.d. D₀</td></tr>
                <tr><td><strong>D₄ = 1</strong> (D₃..D₀ = X)</td><td><code>1 0 0</code></td><td>Mengabaikan D₃ s.d. D₀</td></tr>
                <tr><td><strong>D₃ = 1</strong> (D₂..D₀ = X)</td><td><code>0 1 1</code></td><td>Mengabaikan D₂ s.d. D₀</td></tr>
                <tr><td><strong>D₂ = 1</strong> (D₁..D₀ = X)</td><td><code>0 1 0</code></td><td>Mengabaikan D₁ &amp; D₀</td></tr>
                <tr><td><strong>D₁ = 1</strong> (D₀ = X)</td><td><code>0 0 1</code></td><td>Mengabaikan D₀</td></tr>
                <tr style="background: rgba(148,163,184,0.08);"><td><strong>D₀ = 1</strong></td><td><code>0 0 0</code></td><td>Prioritas Terendah</td></tr>
              </tbody>
            </table>
          </div>

          <div class="code-box-study" style="font-size: 12.5px;">
            <strong>Persamaan Logika Rangkaian Priority Encoder (Slide 26):</strong><br><br>
            <code>Q₀ = D₁ + D₃ + D₅ + D₇</code><br><br>
            <code>Q₁ = D₂ + D₃ + D₆ + D₇</code><br><br>
            <code>Q₂ = D₄ + D₅ + D₆ + D₇</code><br><br>
            <small class="text-muted">Perhatikan bahwa bit D₇ terhubung ke seluruh gerbang OR (Q₀, Q₁, Q₂), memastikan output 111₂ selalu tercapai jika D₇ aktif!</small>
          </div>
        </div>
      </div>

      <!-- Keypad Scanner & Tabel Komparasi (Slide 27 & 28) -->
      <h3 class="section-title"><i class="fas fa-balance-scale"></i> 3. Aplikasi Keypad Scanner &amp; Komparasi Decoder vs Encoder (Slide 27 &amp; 28)</h3>
      <div class="grid-2-cols mb-2">
        <div class="showcase-card">
          <div class="showcase-header">
            <h4><i class="fas fa-keyboard text-primary"></i> Keyboard / Keypad Scanner (Slide 27)</h4>
          </div>
          <p class="mt-2" style="font-size: 13px; line-height: 1.6;">
            Ketika pengguna menekan tombol angka pada keypad 4&times;4, rangkaian scanning menggunakan kombinasi:
          </p>
          <ul class="luxury-list mt-2" style="font-size: 12.5px;">
            <li><strong>Decoder:</strong> Mengaktifkan baris (rows) keypad satu per satu secara bergantian (sequential scanning).</li>
            <li><strong>Encoder:</strong> Membaca kolom (columns) mana yang terhubung, lalu mengonversinya menjadi kode biner unik 4-bit (10-to-4 encoder) untuk dikirim ke mikrokontroler.</li>
          </ul>
        </div>

        <div class="showcase-card">
          <div class="showcase-header">
            <h4><i class="fas fa-exchange-alt text-warning"></i> Tabel Komparasi Resmi (Slide 28)</h4>
          </div>
          <div class="table-responsive mt-2">
            <table class="luxury-table" style="font-size: 12px;">
              <thead>
                <tr><th>Aspek</th><th style="color:var(--primary-cyan);">Decoder</th><th style="color:var(--accent-gold);">Encoder</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Arah Fungsi</strong></td><td>Biner &rarr; Aktivasi Tunggal</td><td>Aktivasi Tunggal &rarr; Biner</td></tr>
                <tr><td><strong>Jumlah Input</strong></td><td><code>n bit</code></td><td><code>2ⁿ jalur</code></td></tr>
                <tr><td><strong>Jumlah Output</strong></td><td><code>2ⁿ jalur</code></td><td><code>n bit</code></td></tr>
                <tr><td><strong>Contoh Sirkuit</strong></td><td>3-to-8 line decoder</td><td>8-to-3 line encoder</td></tr>
                <tr><td><strong>Nomor IC Standar</strong></td><td><strong>IC 74LS138</strong></td><td><strong>IC 74LS148</strong></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,

  sevenseg: `
    <div class="luxury-content-card">
      <div class="content-header">
        <span class="badge-accent"><i class="fas fa-bookmark"></i> Pertemuan 07 / Sub-Materi 03</span>
        <h2>Display 7-Segment, Common Anode/Cathode &amp; Kode BCD 8421</h2>
        <p class="subtitle">Memahami struktur anatomi 7 LED garis (a–g) dan titik desimal dp, analisis perbedaan listrik Common Anode vs Common Cathode, representasi kode BCD, serta tabel kebenaran decoder heksadesimal.</p>
      </div>

      <!-- Anatomi 7-Segment (Slide 30) -->
      <h3 class="section-title"><i class="fas fa-calculator"></i> 1. Anatomi &amp; Prinsip Kerja Seven Segment Display (Slide 30)</h3>
      <div class="showcase-card mb-4">
        <div class="grid-2-cols" style="align-items: center;">
          <div>
            <p style="font-size: 13.5px; line-height: 1.6;">
              <strong>Struktur Fisik (Slide 30):</strong> Sebuah peraga 7-segment tersusun dari <strong>7 dioda pemancar cahaya (LED) berbentuk batang</strong> yang diberi label alfabet <code>a, b, c, d, e, f, g</code> disusun membentuk angka 8, serta <strong>1 buah LED tambahan <code>(dp)</code></strong> yang berfungsi menampilkan tanda titik desimal (*decimal point*).
            </p>
            <div class="callout-sub mt-3" style="background: rgba(0,210,255,0.08); border-color: rgba(0,210,255,0.3);">
              <strong style="color: var(--primary-cyan); font-size: 14px;">Penempatan Posisi Masing-Masing Segmen:</strong>
              <div class="grid-2-cols mt-2" style="font-size: 12.5px; font-family: var(--font-mono);">
                <div>
                  • Segmen a: Batang horizontal atas<br>
                  • Segmen b: Batang vertikal kanan atas<br>
                  • Segmen c: Batang vertikal kanan bawah<br>
                  • Segmen d: Batang horizontal bawah
                </div>
                <div>
                  • Segmen e: Batang vertikal kiri bawah<br>
                  • Segmen f: Batang vertikal kiri atas<br>
                  • Segmen g: Batang horizontal tengah<br>
                  • Segmen dp: Titik desimal kanan bawah
                </div>
              </div>
            </div>
          </div>

          <!-- Sketsa 7-Segment Display Mini Visualizer -->
          <div style="text-align: center; background: rgba(11,17,32,0.9); padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <div style="font-size: 12px; font-weight: 700; color: var(--text-dim); text-transform: uppercase; margin-bottom: 12px;">
              Diagram Pinout &amp; Segmen LED (Slide 31)
            </div>
            <div style="display: inline-block; font-family: var(--font-mono); font-size: 18px; line-height: 1.2; background: #020617; padding: 16px 24px; border-radius: 8px; border: 2px solid #334155; color: #ef4444;">
              &nbsp;&nbsp;[-- a --]&nbsp;&nbsp;<br>
              | f |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| b |<br>
              &nbsp;&nbsp;[-- g --]&nbsp;&nbsp;<br>
              | e |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| c |<br>
              &nbsp;&nbsp;[-- d --]&nbsp;&nbsp;&nbsp;(dp)
            </div>
            <p class="text-muted mt-2" style="font-size: 12px;">Setiap kombinasi segmen menyala membentuk karakter visual angka 0 s.d. 9.</p>
          </div>
        </div>
      </div>

      <!-- Common Anode vs Common Cathode (Slide 31) -->
      <h3 class="section-title"><i class="fas fa-bolt"></i> 2. Common Anode (CA) vs Common Cathode (CC) (Slide 31)</h3>
      <div class="grid-2-cols mb-4">
        <!-- Common Anode -->
        <div class="feature-card highlighted-gold">
          <div class="feature-icon" style="color: var(--accent-gold);"><i class="fas fa-plus-circle"></i></div>
          <h3>Common Anode (CA) - Active LOW</h3>
          <p class="mt-1" style="font-size: 13px;">Semua kaki <strong>Anoda (+)</strong> dari ke-8 LED dihubungkan menjadi satu titik bersama (*common pin*).</p>
          <div class="code-box-study mt-2" style="font-size: 12.5px;">
            <strong>Konfigurasi Listrik (Slide 31):</strong><br>
            • Kaki Common &rarr; Dihubungkan ke <strong>VCC (+5V)</strong>.<br>
            • Logika Penyalaan &rarr; Diberikan sinyal <strong>LOW (0V / 0)</strong>.<br>
            • Aliran Arus &rarr; VCC &rarr; LED &rarr; Output Dekoder (Sinking Current).
          </div>
          <div class="callout-sub mt-2" style="background: rgba(245,175,25,0.1); border-color: rgba(245,175,25,0.4); font-size: 12px;">
            Cocok dikendalikan oleh IC decoder dengan keluaran Active-LOW seperti <strong>IC 7447</strong> atau <strong>IC 74138</strong>.
          </div>
        </div>

        <!-- Common Cathode -->
        <div class="feature-card">
          <div class="feature-icon" style="color: var(--primary-cyan);"><i class="fas fa-minus-circle"></i></div>
          <h3>Common Cathode (CC) - Active HIGH</h3>
          <p class="mt-1" style="font-size: 13px;">Semua kaki <strong>Katoda (−)</strong> dari ke-8 LED dihubungkan menjadi satu titik bersama (*common pin*).</p>
          <div class="code-box-study mt-2" style="font-size: 12.5px;">
            <strong>Konfigurasi Listrik (Slide 31):</strong><br>
            • Kaki Common &rarr; Dihubungkan ke <strong>Ground (GND / 0V)</strong>.<br>
            • Logika Penyalaan &rarr; Diberikan sinyal <strong>HIGH (+5V / 1)</strong>.<br>
            • Aliran Arus &rarr; Output Dekoder &rarr; LED &rarr; GND (Sourcing Current).
          </div>
          <div class="callout-sub mt-2" style="background: rgba(0,210,255,0.1); border-color: rgba(0,210,255,0.4); font-size: 12px;">
            Cocok dikendalikan langsung oleh mikrokontroler (Arduino, STM32) atau IC driver <strong>IC 7448</strong>.
          </div>
        </div>
      </div>

      <!-- Kode BCD 8421 & Tabel Kebenaran HEX Decoder (Slide 32 & 33) -->
      <h3 class="section-title"><i class="fas fa-table"></i> 3. Kode BCD (8421) &amp; Tabel Kebenaran Decoder 7-Segment (Slide 32 &amp; 33)</h3>
      <div class="showcase-card mb-4">
        <div class="callout-sub" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
          <strong style="color: var(--accent-emerald); font-size: 14.5px;">
            Konsep Kode BCD (Binary Coded Decimal / 8421 Code - Slide 32):
          </strong>
          <p style="font-size: 13px; margin-top: 4px;">
            BCD menyatakan setiap digit desimal (0–9) menggunakan 4-bit biner terpisah berbobot 8-4-2-1, bukan dikonversi sekaligus.
            <br><em>Contoh Konsep Resmi: Desimal <code>59₁₀</code> &rarr; <code>5 = 0101₂</code> dan <code>9 = 1001₂</code> &rarr; BCD = <code>0101 1001</code>.</em>
          </p>
        </div>

        <div class="table-responsive mt-3">
          <table class="truth-table" style="font-size: 12px; text-align: center;">
            <thead>
              <tr>
                <th colspan="4">Input BCD / Heksa (Slide 33)</th>
                <th colspan="7">Output Segmen (Active-HIGH / Common Cathode)</th>
                <th rowspan="2">Karakter Visual yang Tampil</th>
              </tr>
              <tr>
                <th>A (8)</th><th>B (4)</th><th>C (2)</th><th>D (1)</th>
                <th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th>g</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td><strong style="font-size:15px; color:var(--accent-gold);">Display 0</strong></td></tr>
              <tr><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td><strong style="font-size:15px; color:var(--accent-gold);">Display 1</strong></td></tr>
              <tr><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td><strong style="font-size:15px; color:var(--accent-gold);">Display 2</strong></td></tr>
              <tr><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td><td><strong style="font-size:15px; color:var(--accent-gold);">Display 3</strong></td></tr>
              <tr><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td><strong style="font-size:15px; color:var(--accent-gold);">Display 4</strong></td></tr>
              <tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td><strong style="font-size:15px; color:var(--accent-gold);">Display 5</strong></td></tr>
              <tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td><strong style="font-size:15px; color:var(--accent-gold);">Display 6</strong></td></tr>
              <tr><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td><strong style="font-size:15px; color:var(--accent-gold);">Display 7</strong></td></tr>
              <tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td><strong style="font-size:15px; color:var(--accent-gold);">Display 8</strong></td></tr>
              <tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td><strong style="font-size:15px; color:var(--accent-gold);">Display 9</strong></td></tr>
              <tr style="background: rgba(0,210,255,0.06);"><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td><td><strong style="color:var(--primary-cyan);">Display A (10)</strong></td></tr>
              <tr style="background: rgba(0,210,255,0.06);"><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td><strong style="color:var(--primary-cyan);">Display b (11)</strong></td></tr>
              <tr style="background: rgba(0,210,255,0.06);"><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td><strong style="color:var(--primary-cyan);">Display C (12)</strong></td></tr>
              <tr style="background: rgba(0,210,255,0.06);"><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td><td><strong style="color:var(--primary-cyan);">Display d (13)</strong></td></tr>
              <tr style="background: rgba(0,210,255,0.06);"><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td><strong style="color:var(--primary-cyan);">Display E (14)</strong></td></tr>
              <tr style="background: rgba(0,210,255,0.06);"><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td><strong style="color:var(--primary-cyan);">Display F (15)</strong></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `
};




