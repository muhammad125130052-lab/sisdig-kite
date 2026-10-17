/**
 * APP CONTROLLER & UI INTERACTION
 * MK Sistem Digital - Media Ajar Interaktif HTML5
 * Mengatur Navigasi Minggu 1-14, Submenu Dinamis, Jam & Tanggal Real-Time,
 * Simulator Central Hub, Bit Register Board, serta Kuis Interaktif.
 */

class SisdigApp {
  constructor() {
    this.currentWeek = 1;
    this.currentSubmenuId = "w1-converter"; // Buka simulator terlebih dahulu atau w1-intro
    this.selectedBase = 10;
    this.bitboardWidth = 8;
    this.bitboardState = new Array(8).fill(0);

    // Initial default test bit in register (e.g. 0010 1101 = 45)
    this.bitboardState[2] = 1;
    this.bitboardState[4] = 1;
    this.bitboardState[6] = 1;

    // Week 6 Multilevel & Multiplexer Simulator State (Pertemuan 6 ITERA)
    this.w6SimTab = "mux"; // "mux" or "universal"
    this.w6MuxType = "4to1"; // "2to1", "4to1", "8to1"
    this.w6MuxSelect = [0, 0, 0]; // [S0, S1, S2]
    this.w6MuxData = [1, 0, 1, 0, 0, 1, 1, 0]; // D0 s.d D7
    this.w6MuxEnable = 1; // 1: Active, 0: Disabled (Strobe E)
    this.w6UnivPreset = "sop1"; // "not", "and", "or", "xor", "sop1", "sop2", "pos1"
    this.w6UnivInputs = { A: 1, B: 0, C: 1, D: 0 };

    // Week 5 ALU & Logic Simulator State (Adder & Subtractor ITERA)
    this.w5Mode = 0; // 0: ADD, 1: SUB
    this.w5BitsA = [1, 1, 0, 1]; // [LSB -> MSB]: A0=1, A1=1, A2=0, A3=1 (1011₂ = 11₁₀)
    this.w5BitsB = [0, 1, 1, 0]; // [LSB -> MSB]: B0=0, B1=1, B2=1, B3=0 (0110₂ = 6₁₀)
    this.w5ActiveSimTab = "alu"; // "alu", "gates", "delay"
    this.w5GateType = "fa"; // "ha", "fa", "hs", "fs"
    this.w5GateA = 1;
    this.w5GateB = 1;
    this.w5GateCin = 1;
    this.w5DelayWidth = 32;

    // Week 6 Multilevel & Multiplexer Simulator State (Pertemuan 6 ITERA)
    this.w6SimTab = "mux"; // "mux" or "universal"
    this.w6MuxType = "4to1"; // "2to1", "4to1", "8to1"
    this.w6MuxSelect = [0, 0, 0]; // [S0, S1, S2]
    this.w6MuxData = [1, 0, 1, 0, 0, 1, 1, 0]; // D0 s.d D7
    this.w6MuxEnable = 1; // 1: Active, 0: Disabled (Strobe E)
    this.w6UnivPreset = "sop1"; // "not", "and", "or", "xor", "sop1", "sop2", "pos1"
    this.w6UnivInputs = { A: 1, B: 0, C: 1, D: 0 };

    // Week 7 Decoder, Encoder & 7-Segment Simulator State (Pertemuan 7 ITERA)
    this.w7SimTab = "sevenseg"; // "sevenseg", "decoder", "encoder"
    // 7-Segment & BCD
    this.w7BcdVal = 5; // default 5 (0101)
    this.w7BcdBits = [0, 1, 0, 1]; // [A, B, C, D] (bobot 8, 4, 2, 1)
    this.w7DisplayType = "cc"; // "cc" (Common Cathode - active high) or "ca" (Common Anode - active low)
    this.w7LedColor = "red"; // "red", "cyan", "emerald"
    this.w7DpState = 0; // decimal point
    // Decoder
    this.w7DecType = "3to8"; // "1to2", "2to4", "3to8"
    this.w7DecInputs = [1, 0, 1]; // [A2, A1, A0] default 101 -> activates Y5
    this.w7DecEnable1 = 0; // E1_bar (active LOW)
    this.w7DecEnable2 = 0; // E2_bar (active LOW)
    this.w7DecEnable3 = 1; // E3 (active HIGH)
    this.w7Dec24Enable = 1; // En for 2-to-4 (active HIGH)
    // Encoder
    this.w7EncType = "priority"; // "priority" (74LS148) or "binary" (4-to-2)
    this.w7EncInputs8 = [0, 0, 0, 0, 0, 1, 0, 0]; // D0 s.d D7 (D5 active default)
    this.w7EncInputs4 = [0, 0, 1, 0]; // D0 s.d D3 (D2 active default)

    // Backward compatibility aliases
    this.w7Mode = this.w5Mode;
    this.w7BitsA = this.w5BitsA;
    this.w7BitsB = this.w5BitsB;
    this.w7ActiveSimTab = this.w5ActiveSimTab;
    this.w7GateType = this.w5GateType;
    this.w7GateA = this.w5GateA;
    this.w7GateB = this.w5GateB;
    this.w7GateCin = this.w5GateCin;
    this.w7DelayWidth = this.w5DelayWidth;

    this.init();
  }

  init() {
    this.initClockAndDate();
    this.renderSidebarWeeks();
    this.switchWeek(7, "w7-decoder");
    this.setupEventListeners();
  }

  /* ==========================================================================
     1. JAM & TANGGAL REAL-TIME
     ========================================================================== */
  initClockAndDate() {
    const updateTime = () => {
      const now = new Date();

      // Format Tanggal Bahasa Indonesia untuk Main Menu
      const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
      const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
      ];
      const dayName = days[now.getDay()];
      const dayDate = now.getDate();
      const monthName = months[now.getMonth()];
      const year = now.getFullYear();

      const dateStr = `${dayName}, ${dayDate} ${monthName} ${year}`;
      const dateEl = document.getElementById("headerLiveDate");
      if (dateEl) {
        dateEl.textContent = dateStr;
      }

      // Format Jam & Menit untuk Widget Kiri Bawah
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      const clockEl = document.getElementById("bottomClockDigits");
      if (clockEl) {
        clockEl.textContent = `${hours}:${minutes}:${seconds}`;
      }
    };

    updateTime();
    setInterval(updateTime, 1000);
  }

  /* ==========================================================================
     2. SIDEBAR NAVIGASI MINGGU 1 - 14
     ========================================================================== */
  renderSidebarWeeks() {
    const listEl = document.getElementById("weekNavList");
    if (!listEl) return;

    listEl.innerHTML = COURSE_DATA.weeks.map(w => `
      <li class="week-nav-item ${w.week === this.currentWeek ? 'active' : ''}" data-week="${w.week}">
        <span class="week-badge">M${w.week}</span>
        <div class="week-info">
          <div class="week-name">${w.title}</div>
          <div class="week-tag">${w.badge} • ${w.submenus.length} Sub-Materi</div>
        </div>
      </li>
    `).join("");

    // Bind event klik item minggu
    listEl.querySelectorAll(".week-nav-item").forEach(item => {
      item.addEventListener("click", () => {
        const wk = parseInt(item.getAttribute("data-week"), 10);
        this.switchWeek(wk);
      });
    });
  }

  switchWeek(weekNum, targetSubmenuId = null) {
    this.currentWeek = weekNum;
    const weekData = COURSE_DATA.weeks.find(w => w.week === weekNum);
    if (!weekData) return;

    // Update active class pada sidebar
    document.querySelectorAll(".week-nav-item").forEach(item => {
      const wk = parseInt(item.getAttribute("data-week"), 10);
      item.classList.toggle("active", wk === weekNum);
    });

    // Render Banner Info Minggu
    const bannerEl = document.getElementById("weekBannerContainer");
    if (bannerEl) {
      bannerEl.innerHTML = `
        <div class="banner-top">
          <span class="pill-tag">${weekData.badge}</span>
          <span class="banner-date"><i class="far fa-calendar-alt"></i> ${weekData.date}</span>
        </div>
        <h2>Minggu ${weekData.week}: ${weekData.title}</h2>
        <p>${weekData.summary}</p>
      `;
    }

    // Default submenu
    this.currentSubmenuId = targetSubmenuId || weekData.submenus[0].id;
    this.renderSubmenus(weekData);
    this.renderContent();

    // Close mobile sidebar if open
    const sidebar = document.getElementById("appSidebar");
    if (sidebar) sidebar.classList.remove("open");
  }

  /* ==========================================================================
     3. SUBMENU TABS
     ========================================================================== */
  renderSubmenus(weekData) {
    const container = document.getElementById("submenuContainer");
    if (!container) return;

    container.innerHTML = weekData.submenus.map(sub => `
      <button class="submenu-tab-btn ${sub.id === this.currentSubmenuId ? 'active' : ''}" data-sub-id="${sub.id}">
        <i class="${sub.icon}"></i>
        <span>${sub.title}</span>
      </button>
    `).join("");

    container.querySelectorAll(".submenu-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.currentSubmenuId = btn.getAttribute("data-sub-id");
        container.querySelectorAll(".submenu-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.renderContent();
      });
    });
  }

  /* ==========================================================================
     4. RENDER STAGE KONTEN DINAMIS
     ========================================================================== */
  renderContent() {
    const stage = document.getElementById("contentStage");
    if (!stage) return;

    // Rute Konten Minggu 1
    if (this.currentWeek === 1) {
      if (this.currentSubmenuId === "w1-intro") {
        stage.innerHTML = WEEK1_CONTENT.intro;
      } else if (this.currentSubmenuId === "w1-app") {
        stage.innerHTML = WEEK1_CONTENT.app;
      } else if (this.currentSubmenuId === "w1-numsys") {
        stage.innerHTML = WEEK1_CONTENT.numsys;
      } else if (this.currentSubmenuId === "w1-converter") {
        this.renderConverterSimulator(stage);
      } else if (this.currentSubmenuId === "w1-bitboard") {
        this.renderBitboard(stage);
      } else if (this.currentSubmenuId === "w1-quiz") {
        this.renderQuizSection(stage);
      }
      return;
    }

    // Rute Konten Minggu 2
    if (this.currentWeek === 2) {
      if (this.currentSubmenuId === "w2-neg-rep") {
        stage.innerHTML = WEEK2_CONTENT.neg_rep;
      } else if (this.currentSubmenuId === "w2-c2-arithmetic") {
        stage.innerHTML = WEEK2_CONTENT.c2_arithmetic;
      } else if (this.currentSubmenuId === "w2-c2-converter") {
        this.renderC2Simulator(stage);
      } else if (this.currentSubmenuId === "w2-quiz") {
        this.renderWeek2Quiz(stage);
      }
      return;
    }

    // Rute Konten Minggu 3 (Aljabar Boolean, Gerbang Logika & Bentuk SOP/POS)
    if (this.currentWeek === 3) {
      if (this.currentSubmenuId === "w3-gates") {
        stage.innerHTML = WEEK3_CONTENT.gates;
        this.initGatesInteractive();
      } else if (this.currentSubmenuId === "w3-laws") {
        stage.innerHTML = WEEK3_CONTENT.laws;
      } else if (this.currentSubmenuId === "w3-soppos") {
        stage.innerHTML = WEEK3_CONTENT.soppos;
      } else if (this.currentSubmenuId === "w3-simulator") {
        this.renderTruthTableSimulator(stage);
      } else if (this.currentSubmenuId === "w3-exercises") {
        stage.innerHTML = WEEK3_CONTENT.exercises;
        this.initExercisesInteractive();
      } else if (this.currentSubmenuId === "w3-quiz") {
        this.renderWeek3Quiz(stage);
      }
      return;
    }

    // Rute Konten Minggu 4 (Penyederhanaan Logika dengan Karnaugh Map K-Map)
    if (this.currentWeek === 4) {
      if (this.currentSubmenuId === "w4-concepts") {
        stage.innerHTML = WEEK4_CONTENT.concepts;
      } else if (this.currentSubmenuId === "w4-kmap234") {
        stage.innerHTML = WEEK4_CONTENT.kmap234;
      } else if (this.currentSubmenuId === "w4-cases") {
        stage.innerHTML = WEEK4_CONTENT.cases;
        this.initBuildingSensors();
      } else if (this.currentSubmenuId === "w4-simulator") {
        this.renderKMapSimulator(stage);
      } else if (this.currentSubmenuId === "w4-exercises") {
        stage.innerHTML = WEEK4_CONTENT.exercises;
      } else if (this.currentSubmenuId === "w4-quiz") {
        this.renderWeek4Quiz(stage);
      }
      return;
    }

    // Rute Konten Minggu 5 (Rangkaian Kombinasional Aritmatika: Adder & Subtractor ITERA)
    if (this.currentWeek === 5) {
      if (this.currentSubmenuId === "w5-adders") {
        stage.innerHTML = WEEK5_CONTENT.adders;
      } else if (this.currentSubmenuId === "w5-cla") {
        stage.innerHTML = WEEK5_CONTENT.cla;
      } else if (this.currentSubmenuId === "w5-subtractors") {
        stage.innerHTML = WEEK5_CONTENT.subtractors;
      } else if (this.currentSubmenuId === "w5-simulator") {
        this.renderWeek5Simulator(stage);
      } else if (this.currentSubmenuId === "w5-exercises") {
        stage.innerHTML = WEEK5_CONTENT.exercises;
      } else if (this.currentSubmenuId === "w5-quiz") {
        this.renderWeek5Quiz(stage);
      }
      return;
    }

    // Rute Konten Minggu 6 (Multilevel NAND, NOR, dan Multiplexer ITERA)
    if (this.currentWeek === 6) {
      if (this.currentSubmenuId === "w6-universal-multilevel") {
        stage.innerHTML = WEEK6_CONTENT.universal_multilevel;
      } else if (this.currentSubmenuId === "w6-mux") {
        stage.innerHTML = WEEK6_CONTENT.mux;
      } else if (this.currentSubmenuId === "w6-simulator") {
        this.renderWeek6MuxSimulator(stage);
      } else if (this.currentSubmenuId === "w6-exercises") {
        stage.innerHTML = WEEK6_CONTENT.exercises;
      } else if (this.currentSubmenuId === "w6-quiz") {
        this.renderWeek6MuxQuiz(stage);
      }
      return;
    }

    // Rute Konten Minggu 7 (Decoder, Encoder, dan BCD ke 7-Segment ITERA)
    if (this.currentWeek === 7) {
      if (this.currentSubmenuId === "w7-decoder") {
        stage.innerHTML = WEEK7_CONTENT.decoder;
      } else if (this.currentSubmenuId === "w7-encoder") {
        stage.innerHTML = WEEK7_CONTENT.encoder;
      } else if (this.currentSubmenuId === "w7-sevenseg") {
        stage.innerHTML = WEEK7_CONTENT.sevenseg;
      } else if (this.currentSubmenuId === "w7-simulator") {
        this.renderWeek7Simulator(stage);
      } else if (this.currentSubmenuId === "w7-quiz") {
        this.renderWeek7Quiz(stage);
      }
      return;
    }

    // Rute Konten Minggu 8 s.d. 14 (Roadmap & Silabus Terstruktur)
    this.renderRoadmap(stage);
  }

  /* ==========================================================================
     5. SIMULATOR BINER SENTRAL (MINGGU 1 SUBMENU 4)
     ========================================================================== */
  renderConverterSimulator(container) {
    container.innerHTML = `
      <div class="luxury-content-card simulator-panel">
        <div class="content-header">
          <span class="badge-accent"><i class="fas fa-microchip"></i> Media Ajar Interaktif Utama</span>
          <h2>Simulator Konversi: Central Binary Hub</h2>
          <p class="subtitle">
            Metode terpadu: Semua bilangan dikonversi ke <strong>Biner</strong> terlebih dahulu sebagai poros tengah,
            kemudian dikelompokkan <strong>4-bit (Nibble)</strong> untuk Heksadesimal, 
            <strong>3-bit</strong> untuk Oktal, dan <strong>dijumlahkan bobot 2<sup>n</sup></strong> untuk Desimal.
          </p>
        </div>

        <div class="converter-input-card">
          <div class="input-row-controls">
            <div class="form-group flex-1">
              <label><i class="fas fa-keyboard"></i> Masukkan Nilai (Bulat atau Pecahan):</label>
              <div class="input-with-icon">
                <i class="fas fa-hashtag"></i>
                <input type="text" id="convInputValue" placeholder="Contoh: 258 atau 0.625 atau 1A.8" value="258" />
              </div>
            </div>

            <div class="form-group">
              <label><i class="fas fa-layer-group"></i> Basis Bilangan Asal:</label>
              <div class="base-selector-pills" id="baseSelector">
                <button class="base-btn" data-base="2">Biner (2)</button>
                <button class="base-btn" data-base="8">Oktal (8)</button>
                <button class="base-btn active" data-base="10">Desimal (10)</button>
                <button class="base-btn" data-base="16">Heksa (16)</button>
              </div>
            </div>

            <button class="btn-convert-action" id="btnExecuteConvert">
              <i class="fas fa-bolt"></i>
              <span>Konversi Sekarang</span>
            </button>
          </div>

          <div class="preset-examples-bar">
            <span><i class="fas fa-lightbulb text-warning"></i> Contoh Soal Slide Kuliah ITERA:</span>
            <button class="preset-chip" data-val="258" data-base="10">258₁₀ (Slide 37)</button>
            <button class="preset-chip" data-val="0.625" data-base="10">0.625₁₀ Pecahan (Slide 35)</button>
            <button class="preset-chip" data-val="125" data-base="10">125₁₀ (Slide 31)</button>
            <button class="preset-chip" data-val="7562" data-base="10">7562₁₀ (Slide 32)</button>
            <button class="preset-chip" data-val="2F" data-base="16">2F₁₆ (Slide 32)</button>
            <button class="preset-chip" data-val="1A.8" data-base="16">1A.8₁₆ Pecahan (Slide 32)</button>
            <button class="preset-chip" data-val="1011" data-base="2">1011₂ (Slide 30)</button>
          </div>
        </div>

        <div id="conversionResultContainer"></div>
      </div>
    `;

    // Bind Event Converter
    const inputVal = document.getElementById("convInputValue");
    const btnExecute = document.getElementById("btnExecuteConvert");
    const baseSelector = document.getElementById("baseSelector");

    baseSelector.querySelectorAll(".base-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        baseSelector.querySelectorAll(".base-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.selectedBase = parseInt(btn.getAttribute("data-base"), 10);
        this.executeConversion();
      });
    });

    btnExecute.addEventListener("click", () => this.executeConversion());
    inputVal.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.executeConversion();
    });

    container.querySelectorAll(".preset-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const val = chip.getAttribute("data-val");
        const b = parseInt(chip.getAttribute("data-base"), 10);
        inputVal.value = val;
        this.selectedBase = b;

        baseSelector.querySelectorAll(".base-btn").forEach(btn => {
          btn.classList.toggle("active", parseInt(btn.getAttribute("data-base"), 10) === b);
        });

        this.executeConversion();
      });
    });

    // Jalankan kalkulasi awal dengan nilai default 258
    this.executeConversion();
  }

  executeConversion() {
    const inputValEl = document.getElementById("convInputValue");
    const resContainer = document.getElementById("conversionResultContainer");
    if (!inputValEl || !resContainer) return;

    const val = inputValEl.value.trim();
    const result = window.centralConverter.processConversion(val, this.selectedBase);

    if (!result.success) {
      resContainer.innerHTML = `
        <div class="glass-callout" style="border-color: var(--accent-amber); background: rgba(241, 39, 17, 0.08);">
          <div class="callout-icon text-danger"><i class="fas fa-exclamation-circle"></i></div>
          <div class="callout-body">
            <h4>Kesalahan Input Bilangan</h4>
            <p>${result.error}</p>
          </div>
        </div>
      `;
      return;
    }

    const { binHub, hexRes, octRes, decRes } = result;

    // Render Diagram Central Hub
    resContainer.innerHTML = `
      <div class="central-hub-diagram">
        <div class="hub-architecture-title">
          <h3><i class="fas fa-project-diagram text-primary"></i> Arsitektur Transformasi: Biner Sebagai Poros Pusat</h3>
          <p>Bilangan asal ditransformasikan ke bentuk Biner, lalu diekspansi secara paralel ke sistem bilangan tujuan.</p>
        </div>

        <!-- 1. THE CENTRAL BINARY NODE -->
        <div class="central-bridge-node">
          <div class="hub-header"><i class="fas fa-network-wired"></i> Jembatan Biner Sentral (Central Binary Stream)</div>
          <div class="hub-binary-display">${this.formatBinarySpaced(binHub.intBin, binHub.fracBin)}</div>
          <div style="font-size: 12px; color: var(--text-dim);">
            ${binHub.fracBin ? `Panjang: ${binHub.intBin.length} bit bulat + ${binHub.fracBin.length} bit pecahan` : `Panjang: ${binHub.intBin.length} bit`}
          </div>
        </div>

        <!-- 2. BRANCH GRID KE 3 SISTEM BILANGAN -->
        <div class="hub-branches-grid">
          
          <!-- Heksadesimal (4-Bit Groups) -->
          <div class="branch-target-card b-hex">
            <div class="branch-header">
              <span class="branch-title">Heksadesimal (Basis 16)</span>
              <span class="branch-tag">Kelompok 4-Bit (Nibble)</span>
            </div>
            <p class="branch-method-note">
              Bit dikelompokkan tiap <strong>4 bit</strong> dari titik biner.
              ${hexRes.leadingZeros > 0 ? `<br><small class="text-warning">+${hexRes.leadingZeros} nol di depan untuk melengkapi nibble</small>` : ''}
              ${hexRes.trailingZeros > 0 ? `<br><small class="text-warning">+${hexRes.trailingZeros} nol di belakang pecahan</small>` : ''}
            </p>

            <div class="grouping-visual-row">
              ${hexRes.intGroups.map(g => `
                <div class="bit-group-badge">
                  <span class="grp-bits">${g.bits}</span>
                  <div class="grp-arrow"><i class="fas fa-arrow-down"></i></div>
                  <span class="grp-val">${g.hexChar}</span>
                </div>
              `).join("")}
              ${hexRes.fracGroups.length > 0 ? `
                <div style="align-self: center; font-weight: 800; font-size: 20px; color: var(--text-dim); padding: 0 4px;">.</div>
                ${hexRes.fracGroups.map(g => `
                  <div class="bit-group-badge">
                    <span class="grp-bits">${g.bits}</span>
                    <div class="grp-arrow"><i class="fas fa-arrow-down"></i></div>
                    <span class="grp-val">${g.hexChar}</span>
                  </div>
                `).join("")}
              ` : ''}
            </div>

            <div class="branch-final-result">
              <small>Hasil Heksadesimal:</small>
              <strong>${hexRes.fullHex}₁₆ <span style="font-size: 12px; color: var(--accent-purple);">(0x${hexRes.fullHex})</span></strong>
            </div>
          </div>

          <!-- Oktal (3-Bit Groups) -->
          <div class="branch-target-card b-oct">
            <div class="branch-header">
              <span class="branch-title">Oktal (Basis 8)</span>
              <span class="branch-tag">Kelompok 3-Bit</span>
            </div>
            <p class="branch-method-note">
              Bit dikelompokkan tiap <strong>3 bit</strong> dari titik biner.
              ${octRes.leadingZeros > 0 ? `<br><small class="text-warning">+${octRes.leadingZeros} nol di depan</small>` : ''}
              ${octRes.trailingZeros > 0 ? `<br><small class="text-warning">+${octRes.trailingZeros} nol di belakang</small>` : ''}
            </p>

            <div class="grouping-visual-row">
              ${octRes.intGroups.map(g => `
                <div class="bit-group-badge">
                  <span class="grp-bits">${g.bits}</span>
                  <div class="grp-arrow"><i class="fas fa-arrow-down"></i></div>
                  <span class="grp-val">${g.octVal}</span>
                </div>
              `).join("")}
              ${octRes.fracGroups.length > 0 ? `
                <div style="align-self: center; font-weight: 800; font-size: 20px; color: var(--text-dim); padding: 0 4px;">.</div>
                ${octRes.fracGroups.map(g => `
                  <div class="bit-group-badge">
                    <span class="grp-bits">${g.bits}</span>
                    <div class="grp-arrow"><i class="fas fa-arrow-down"></i></div>
                    <span class="grp-val">${g.octVal}</span>
                  </div>
                `).join("")}
              ` : ''}
            </div>

            <div class="branch-final-result">
              <small>Hasil Oktal:</small>
              <strong>${octRes.fullOct}₈</strong>
            </div>
          </div>

          <!-- Desimal (Penjumlahan Bobot 2^n) -->
          <div class="branch-target-card b-dec">
            <div class="branch-header">
              <span class="branch-title">Desimal (Basis 10)</span>
              <span class="branch-tag">Penjumlahan Bobot 2ⁿ</span>
            </div>
            <p class="branch-method-note">
              Menjumlahkan setiap nilai bit 1 yang dikalikan bobot posisinya: &Sigma; (b<sub>i</sub> &times; 2<sup>i</sup>).
            </p>

            <div class="weight-decomposition-list">
              ${decRes.intWeights.map(w => `
                <div class="weight-row ${w.active ? 'active' : ''}">
                  <span>bit ${w.bit} × 2^${w.power} (${w.weight})</span>
                  <span class="term-val">= ${w.termVal}</span>
                </div>
              `).join("")}
              ${decRes.fracWeights.map(w => `
                <div class="weight-row ${w.active ? 'active' : ''}">
                  <span>bit ${w.bit} × 2^(${w.power}) (${w.weight})</span>
                  <span class="term-val">= ${w.termVal}</span>
                </div>
              `).join("")}
            </div>

            <div class="branch-final-result">
              <small>Hasil Desimal:</small>
              <strong>${decRes.totalDec}₁₀</strong>
            </div>
          </div>

        </div>

        <!-- 3. DETIL LANGKAH PERHITUNGAN MATEMATIS -->
        <div class="step-log-container">
          <div class="step-log-title"><i class="fas fa-file-invoice"></i> Penjabaran Rinci Konversi Asal ke Biner</div>
          <div class="step-log-body">
            ${this.renderStepLogDetails(binHub)}
          </div>
        </div>
      </div>
    `;
  }

  formatBinarySpaced(intBin, fracBin) {
    // Format deret biner dengan spasi tiap 4 bit agar enak dibaca
    const split4 = (str) => {
      let res = [];
      for (let i = str.length; i > 0; i -= 4) {
        res.unshift(str.substring(Math.max(0, i - 4), i));
      }
      return res.join(" ");
    };
    if (fracBin) {
      return `${split4(intBin)} . ${fracBin.match(/.{1,4}/g)?.join(" ") || fracBin}`;
    }
    return split4(intBin);
  }

  renderStepLogDetails(binHub) {
    if (!binHub.steps || binHub.steps.length === 0) return "<p>Tidak ada langkah tambahan.</p>";

    return binHub.steps.map(step => {
      let extraHtml = "";

      if (step.decDiv && step.decDiv.length > 0) {
        extraHtml += `
          <div class="table-responsive mt-2 mb-2">
            <table class="luxury-table">
              <thead>
                <tr>
                  <th>Operasi Pembagian</th>
                  <th>Hasil Bagi</th>
                  <th>Sisa (Bit Biner)</th>
                </tr>
              </thead>
              <tbody>
                ${step.decDiv.map((d, idx) => `
                  <tr>
                    <td>${d.num} ÷ 2</td>
                    <td>${d.quotient}</td>
                    <td><strong>${d.rem}</strong> ${idx === 0 ? '<span class="text-warning">(LSB)</span>' : ''} ${idx === step.decDiv.length - 1 ? '<span class="text-warning">(MSB)</span>' : ''}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
          <p class="text-muted-center mb-2">Bit dibaca dari sisa terbawah (MSB) ke sisa teratas (LSB) = <code>${binHub.intBin}</code></p>
        `;
      }

      if (step.decMul && step.decMul.length > 0) {
        extraHtml += `
          <div class="table-responsive mt-2 mb-2">
            <table class="luxury-table">
              <thead>
                <tr>
                  <th>Operasi Perkalian Pecahan</th>
                  <th>Hasil Kali</th>
                  <th>Bit Bulat</th>
                </tr>
              </thead>
              <tbody>
                ${step.decMul.map((m, idx) => `
                  <tr>
                    <td>${m.val} × 2</td>
                    <td>${m.res}</td>
                    <td><strong>${m.bit}</strong> ${idx === 0 ? '<span class="text-warning">(Atas)</span>' : ''}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
          <p class="text-muted-center mb-2">Bit pecahan dibaca dari atas ke bawah = <code>0.${binHub.fracBin}</code></p>
        `;
      }

      if (step.hexMap) {
        extraHtml += `
          <p class="mt-2"><strong>Pemetaan Nibble:</strong></p>
          <div class="table-responsive mt-2 mb-2">
            <table class="luxury-table">
              <thead><tr><th>Digit Heksadesimal</th><th>Nilai Desimal</th><th>Biner 4-Bit</th></tr></thead>
              <tbody>
                ${step.hexMap.int.map(h => `
                  <tr><td><code>${h.digit}</code></td><td>${h.valDec}</td><td><code>${h.biner}</code></td></tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        `;
      }

      if (step.octMap) {
        extraHtml += `
          <p class="mt-2"><strong>Pemetaan 3-Bit Oktal:</strong></p>
          <div class="table-responsive mt-2 mb-2">
            <table class="luxury-table">
              <thead><tr><th>Digit Oktal</th><th>Biner 3-Bit</th></tr></thead>
              <tbody>
                ${step.octMap.int.map(o => `
                  <tr><td><code>${o.digit}</code></td><td><code>${o.biner}</code></td></tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        `;
      }

      return `
        <div class="mb-2">
          <strong>${step.title}</strong>
          <p class="text-muted">${step.desc}</p>
          ${extraHtml}
        </div>
      `;
    }).join("");
  }

  /* ==========================================================================
     6. PAPAN REGISTER BIT INTERAKTIF (MINGGU 1 SUBMENU 5)
     ========================================================================== */
  renderBitboard(container) {
    container.innerHTML = `
      <div class="bitboard-container">
        <div class="content-header">
          <span class="badge-accent"><i class="fas fa-toggle-on"></i> Praktik Mandiri</span>
          <h2>Papan Register Bit Interaktif</h2>
          <p class="subtitle">Klik langsung sakelar bit di bawah ini untuk melihat bagaimana representasi Biner secara otomatis membentuk nilai Heksadesimal, Oktal, dan Desimal secara instan.</p>
        </div>

        <div class="bitboard-controls-bar">
          <div style="display: flex; gap: 8px; align-items: center;">
            <span style="font-size: 13px; color: var(--text-dim); font-weight: 600;">Lebar Register:</span>
            <button class="btn-pill-action ${this.bitboardWidth === 8 ? 'active' : ''}" id="btnBit8">8-Bit (1 Byte)</button>
            <button class="btn-pill-action ${this.bitboardWidth === 16 ? 'active' : ''}" id="btnBit16">16-Bit (1 Word)</button>
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="btn-pill-action" id="btnBitClear"><i class="fas fa-undo"></i> Reset (Semua 0)</button>
            <button class="btn-pill-action" id="btnBitInvert"><i class="fas fa-exchange-alt"></i> Inversi (NOT)</button>
            <button class="btn-pill-action" id="btnBitRandom"><i class="fas fa-random"></i> Nilai Acak</button>
          </div>
        </div>

        <div class="register-switches-rack" id="registerRack"></div>

        <div class="realtime-readout-grid">
          <div class="readout-card r-bin">
            <span class="r-label"><i class="fas fa-binary"></i> Biner (Basis 2)</span>
            <div class="r-val" id="readoutBin">00000000</div>
          </div>
          <div class="readout-card r-hex">
            <span class="r-label"><i class="fas fa-cube"></i> Heksadesimal (Basis 16)</span>
            <div class="r-val" id="readoutHex">0x00</div>
          </div>
          <div class="readout-card r-oct">
            <span class="r-label"><i class="fas fa-boxes"></i> Oktal (Basis 8)</span>
            <div class="r-val" id="readoutOct">0o0</div>
          </div>
          <div class="readout-card r-dec">
            <span class="r-label"><i class="fas fa-calculator"></i> Desimal Unsigned (Basis 10)</span>
            <div class="r-val" id="readoutDec">0</div>
          </div>
        </div>
      </div>
    `;

    // Bind Controls
    document.getElementById("btnBit8").addEventListener("click", () => {
      this.bitboardWidth = 8;
      this.bitboardState = new Array(8).fill(0);
      this.renderBitboard(container);
    });

    document.getElementById("btnBit16").addEventListener("click", () => {
      this.bitboardWidth = 16;
      this.bitboardState = new Array(16).fill(0);
      this.renderBitboard(container);
    });

    document.getElementById("btnBitClear").addEventListener("click", () => {
      this.bitboardState = new Array(this.bitboardWidth).fill(0);
      this.updateBitboardUI();
    });

    document.getElementById("btnBitInvert").addEventListener("click", () => {
      this.bitboardState = this.bitboardState.map(b => (b === 1 ? 0 : 1));
      this.updateBitboardUI();
    });

    document.getElementById("btnBitRandom").addEventListener("click", () => {
      this.bitboardState = this.bitboardState.map(() => Math.random() > 0.5 ? 1 : 0);
      this.updateBitboardUI();
    });

    this.updateBitboardUI();
  }

  updateBitboardUI() {
    const rack = document.getElementById("registerRack");
    if (!rack) return;

    const n = this.bitboardWidth;
    // Render sakelar dari MSB (kiri) ke LSB (kanan)
    rack.innerHTML = "";
    for (let i = 0; i < n; i++) {
      const bitIndex = i; // 0 di kiri adalah MSB (pangkat n-1-i)
      const power = n - 1 - i;
      const weight = Math.pow(2, power);
      const isSet = this.bitboardState[i] === 1;

      const switchEl = document.createElement("div");
      switchEl.className = `bit-switch-card ${isSet ? 'active' : ''}`;
      switchEl.innerHTML = `
        <span class="bit-switch-pos">b${power} ${power === n - 1 ? '(MSB)' : ''} ${power === 0 ? '(LSB)' : ''}</span>
        <span class="bit-switch-val">${isSet ? 1 : 0}</span>
        <span class="bit-switch-weight">${weight}</span>
      `;

      switchEl.addEventListener("click", () => {
        this.bitboardState[bitIndex] = this.bitboardState[bitIndex] === 1 ? 0 : 1;
        this.updateBitboardUI();
      });

      rack.appendChild(switchEl);
    }

    // Hitung Readout Nilai
    const binStr = this.bitboardState.join("");
    const intVal = parseInt(binStr, 2);
    const hexVal = intVal.toString(16).toUpperCase().padStart(n / 4, "0");
    const octVal = intVal.toString(8);

    document.getElementById("readoutBin").textContent = this.formatBinarySpaced(binStr, "");
    document.getElementById("readoutHex").textContent = `0x${hexVal}`;
    document.getElementById("readoutOct").textContent = `0o${octVal}`;
    document.getElementById("readoutDec").textContent = intVal.toLocaleString();
  }

  /* ==========================================================================
     7. MODUL KUIS & LATIHAN INTERAKTIF (MINGGU 1 SUBMENU 6)
     ========================================================================== */
  renderQuizSection(container) {
    const problems = window.quizModule.structuredProblems;

    container.innerHTML = `
      <div class="quiz-container">
        <div class="content-header">
          <span class="badge-accent"><i class="fas fa-award"></i> Evaluasi Mandiri</span>
          <h2>Latihan Terstruktur & Kuis Pemahaman</h2>
          <p class="subtitle">Uji pemahaman Anda dengan soal-soal resmi dari slide perkuliahan Sistem Digital ITERA. Terapkan metode jembatan biner secara bertahap.</p>
        </div>

        ${problems.map(prob => `
          <div class="quiz-card" id="card-${prob.id}">
            <div class="quiz-badge-header">
              <span class="pill-tag">${prob.title}</span>
              <span style="font-size: 12px; color: var(--accent-gold); font-weight: 700;">Target: ${prob.targetBase}</span>
            </div>
            <p class="quiz-qtext">${prob.question}</p>

            <div class="step-input-grid">
              <div class="step-field">
                <label><i class="fas fa-network-wired text-primary"></i> 1. Biner Sentral:</label>
                <input type="text" id="ansBin-${prob.id}" placeholder="Isi bentuk biner..." />
              </div>
              <div class="step-field">
                <label><i class="fas fa-cube" style="color: var(--accent-purple);"></i> 2. Heksadesimal:</label>
                <input type="text" id="ansHex-${prob.id}" placeholder="Hasil heksa..." />
              </div>
              <div class="step-field">
                <label><i class="fas fa-boxes" style="color: var(--accent-emerald);"></i> 3. Oktal:</label>
                <input type="text" id="ansOct-${prob.id}" placeholder="Hasil oktal..." />
              </div>
            </div>

            <div class="quiz-actions">
              <button class="btn-check-quiz" data-prob-id="${prob.id}">
                <i class="fas fa-check"></i> Cek Jawaban
              </button>
              <button class="btn-hint" data-prob-id="${prob.id}">
                <i class="far fa-lightbulb"></i> Tampilkan Petunjuk (Hint)
              </button>
            </div>

            <div class="quiz-feedback-box" id="feedback-${prob.id}"></div>
          </div>
        `).join("")}
      </div>
    `;

    // Event Check Quiz
    container.querySelectorAll(".btn-check-quiz").forEach(btn => {
      btn.addEventListener("click", () => {
        const pId = btn.getAttribute("data-prob-id");
        const prob = problems.find(p => p.id === pId);
        if (!prob) return;

        const uBin = document.getElementById(`ansBin-${pId}`).value.trim().replace(/\s+/g, "");
        const uHex = document.getElementById(`ansHex-${pId}`).value.trim().toUpperCase().replace("0X", "");
        const uOct = document.getElementById(`ansOct-${pId}`).value.trim().replace("0O", "");
        const fbEl = document.getElementById(`feedback-${pId}`);

        const binCorrect = uBin === prob.correctBin.replace(/\s+/g, "");
        const hexCorrect = uHex === prob.correctHex.toUpperCase();
        const octCorrect = uOct === prob.correctOct;

        if (binCorrect && hexCorrect && octCorrect) {
          fbEl.innerHTML = `
            <div class="glass-callout mt-2" style="border-color: var(--accent-emerald); background: rgba(16, 185, 129, 0.1);">
              <div class="callout-icon text-success"><i class="fas fa-trophy"></i></div>
              <div class="callout-body">
                <h4 class="text-success">Luar Biasa! Semua Jawaban Benar 100%</h4>
                <p>Metode konversi Biner Sentral berhasil Anda kuasai dengan sempurna.</p>
              </div>
            </div>
            ${prob.explanation}
          `;
        } else {
          fbEl.innerHTML = `
            <div class="glass-callout mt-2" style="border-color: var(--accent-amber); background: rgba(241, 39, 17, 0.08);">
              <div class="callout-icon text-danger"><i class="fas fa-times-circle"></i></div>
              <div class="callout-body">
                <h4 class="text-danger">Ada Bagian yang Kurang Tepat</h4>
                <p>
                  Biner: ${binCorrect ? '✓ Benar' : '✗ Salah (Cek kembali pembagian/perkalian 2)'}<br>
                  Heksadesimal: ${hexCorrect ? '✓ Benar' : '✗ Salah (Cek kelompok 4-bit)'}<br>
                  Oktal: ${octCorrect ? '✓ Benar' : '✗ Salah (Cek kelompok 3-bit)'}
                </p>
              </div>
            </div>
            ${prob.explanation}
          `;
        }
      });
    });

    // Event Hint
    container.querySelectorAll(".btn-hint").forEach(btn => {
      btn.addEventListener("click", () => {
        const pId = btn.getAttribute("data-prob-id");
        const prob = problems.find(p => p.id === pId);
        if (!prob) return;
        const fbEl = document.getElementById(`feedback-${pId}`);
        fbEl.innerHTML = `
          <div class="academic-note mt-2">
            <i class="fas fa-info-circle text-warning"></i>
            <span><strong>Petunjuk:</strong> ${prob.hint}</span>
          </div>
        `;
      });
    });
  }

  /* ==========================================================================
     8. SIMULATOR & KUIS PERTEMUAN 2 (BILANGAN NEGATIF & C2)
     ========================================================================== */
  renderC2Simulator(container) {
    container.innerHTML = `
      <div class="luxury-content-card">
        <div class="content-header">
          <span class="badge-accent"><i class="fas fa-calculator"></i> Simulator Pertemuan 2</span>
          <h2>Simulator Representasi Bilangan Bertanda & 2's Complement</h2>
          <p class="subtitle">Kalkulator otomatis untuk menguji Sign-Magnitude, 1's Complement, dan 2's Complement pada bilangan bulat bertanda.</p>
        </div>

        <div class="converter-input-card">
          <div class="input-row-controls">
            <div class="form-group flex-1">
              <label>Masukkan Bilangan Desimal Bertanda (+ atau -):</label>
              <div class="input-with-icon">
                <i class="fas fa-plus-minus"></i>
                <input type="number" id="c2InputVal" value="-13" placeholder="-128 s.d. +127" />
              </div>
            </div>
            <div class="form-group">
              <label>Lebar Bit (n):</label>
              <div class="base-selector-pills">
                <button class="base-btn active" id="c2Bit8Btn">8-Bit</button>
                <button class="base-btn" id="c2Bit16Btn">16-Bit</button>
              </div>
            </div>
            <button class="btn-convert-action" id="btnRunC2"><i class="fas fa-sync"></i> Hitung Representasi</button>
          </div>
        </div>

        <div id="c2ResultContainer" class="mt-4"></div>
      </div>
    `;

    let bitLen = 8;
    const inputVal = document.getElementById("c2InputVal");
    const resBox = document.getElementById("c2ResultContainer");
    const b8 = document.getElementById("c2Bit8Btn");
    const b16 = document.getElementById("c2Bit16Btn");

    b8.addEventListener("click", () => {
      bitLen = 8;
      b8.classList.add("active");
      b16.classList.remove("active");
      calc();
    });
    b16.addEventListener("click", () => {
      bitLen = 16;
      b16.classList.add("active");
      b8.classList.remove("active");
      calc();
    });

    const calc = () => {
      const num = parseInt(inputVal.value, 10);
      if (isNaN(num)) return;

      const minVal = -Math.pow(2, bitLen - 1);
      const maxVal = Math.pow(2, bitLen - 1) - 1;

      if (num < minVal || num > maxVal) {
        resBox.innerHTML = `
          <div class="glass-callout" style="border-color: var(--accent-amber);">
            <div class="callout-icon text-danger"><i class="fas fa-exclamation-triangle"></i></div>
            <div class="callout-body">
              <h4>Nilai Di Luar Rentang ${bitLen}-bit!</h4>
              <p>Rentang representasi bertanda ${bitLen}-bit adalah <strong>${minVal}</strong> s.d. <strong>${maxVal}</strong>.</p>
            </div>
          </div>
        `;
        return;
      }

      // Hitung 3 skema
      const absVal = Math.abs(num);
      const absBin = absVal.toString(2).padStart(bitLen, "0");

      // Sign-Magnitude: MSB 1 jika negatif, sisa magnitudo
      let smBin = "";
      if (num >= 0) {
        smBin = absBin;
      } else {
        smBin = "1" + absVal.toString(2).padStart(bitLen - 1, "0");
      }

      // 1's Complement: inversi semua bit jika negatif
      let c1Bin = "";
      if (num >= 0) {
        c1Bin = absBin;
      } else {
        c1Bin = absBin.split("").map(b => (b === "0" ? "1" : "0")).join("");
      }

      // 2's Complement: C1 + 1
      let c2Bin = "";
      if (num >= 0) {
        c2Bin = absBin;
      } else {
        // C2 via (2^n - absVal)
        const c2Val = Math.pow(2, bitLen) - absVal;
        c2Bin = c2Val.toString(2).padStart(bitLen, "0");
      }

      const c2Hex = parseInt(c2Bin, 2).toString(16).toUpperCase().padStart(bitLen / 4, "0");
      const c2Oct = parseInt(c2Bin, 2).toString(8);

      resBox.innerHTML = `
        <div class="grid-3-cards">
          <div class="feature-card">
            <h3>Sign-Magnitude (SM)</h3>
            <div class="code-badge-block">${this.formatBinarySpaced(smBin, "")}</div>
            <p>Bit tanda MSB = <code>${smBin[0]}</code> (${num >= 0 ? '+' : '-'}), sisa ${bitLen - 1} bit = magnitudo (${absVal}).</p>
          </div>

          <div class="feature-card">
            <h3>1's Complement (C1)</h3>
            <div class="code-badge-block">${this.formatBinarySpaced(c1Bin, "")}</div>
            <p>${num >= 0 ? 'Sama dengan bentuk unsigned positif.' : 'Diperoleh dengan membalik (NOT) semua bit.'}</p>
          </div>

          <div class="feature-card highlighted-gold">
            <h3>2's Complement (C2) ★</h3>
            <div class="code-badge-block" style="color: var(--accent-gold); font-weight: 700;">${this.formatBinarySpaced(c2Bin, "")}</div>
            <p>Hex: <code>0x${c2Hex}</code> | Octal: <code>0o${c2Oct}</code></p>
            <small class="text-success">C2 = NOT(bit positif) + 1</small>
          </div>
        </div>
      `;
    };

    document.getElementById("btnRunC2").addEventListener("click", calc);
    calc();
  }

  renderWeek2Quiz(container) {
    container.innerHTML = `
      <div class="luxury-content-card">
        <div class="content-header">
          <span class="badge-accent"><i class="fas fa-tasks"></i> Evaluasi Pertemuan 02</span>
          <h2>Latihan Soal Slide Perkuliahan 2</h2>
          <p class="subtitle">Mengerjakan soal representasi bilangan negatif dan pengurangan via C2 sesuai slide ITERA.</p>
        </div>

        <div class="glass-callout mb-4">
          <div class="callout-body">
            <h4>Daftar Soal Latihan Slide:</h4>
            <ol class="luxury-list mt-2">
              <li><strong>Soal 1:</strong> Konversikan bilangan desimal <code>-58</code> (8-bit, C2) ke Biner, Octal & Hex.</li>
              <li><strong>Soal 2:</strong> Berapakah nilai desimal dari biner <code>1011 1111</code> (8-bit, C2)?</li>
              <li><strong>Soal 3:</strong> Hitung operasi pengurangan <code>75 - 103</code> (8-bit, C2) menggunakan penjumlah (adder)!</li>
              <li><strong>Soal 4:</strong> Tuliskan <code>-25</code> dalam Sign-Magnitude dan 1's Complement (8-bit).</li>
            </ol>
          </div>
        </div>

        <div class="diagram-box">
          <h4><i class="fas fa-check-double text-success"></i> Kunci Jawaban Lengkap (Slide 24 & 26 ITERA):</h4>
          <div class="solution-steps">
            <div>1. <strong>-58 ke 8-bit C2:</strong> 58 = 0011 1010₂ &rarr; C2 = 1100 0110₂ &rarr; <strong>0xC6</strong> (Oktal: 306₈).</div>
            <div>2. <strong>1011 1111₂ ke Desimal:</strong> Unsigned U = 191. Nilai = -(256 - 191) = <strong>-65₁₀</strong>.</div>
            <div>3. <strong>75 - 103 via C2:</strong> 75 = 0100 1011₂, 103 = 0110 0111₂ &rarr; C2(103) = 1001 1001₂. Penjumlahan: 0100 1011 + 1001 1001 = 1110 0100₂ &rarr; <strong>-28₁₀</strong>.</div>
            <div>4. <strong>-25 (8-bit):</strong> Sign-Magnitude = <strong>1001 1001₂</strong>, C1 = NOT(0001 1001) = <strong>1110 0110₂</strong>.</div>
          </div>
        </div>
      </div>
    `;
  }

  /* ==========================================================================
     8B. PERTEMUAN 3 INTERAKTIF: GERBANG LOGIKA, SIMULATOR, LATIHAN & KUIS
     ========================================================================== */
  initGatesInteractive() {
    const gateStates = {
      NOT: { A: 0 },
      AND: { A: 0, B: 0 },
      OR: { A: 0, B: 0 },
      NAND: { A: 0, B: 0 },
      NOR: { A: 0, B: 0 },
      XOR: { A: 0, B: 0 },
      XNOR: { A: 0, B: 0 }
    };

    const updateGate = (gate) => {
      const s = gateStates[gate];
      let out = 0;
      let rowKey = "";

      if (gate === "NOT") {
        out = s.A === 1 ? 0 : 1;
        rowKey = `row-NOT-${s.A}`;
      } else {
        const a = s.A;
        const b = s.B;
        rowKey = `row-${gate}-${a}${b}`;
        if (gate === "AND") out = (a & b);
        else if (gate === "OR") out = (a | b);
        else if (gate === "NAND") out = !(a & b) ? 1 : 0;
        else if (gate === "NOR") out = !(a | b) ? 1 : 0;
        else if (gate === "XOR") out = (a ^ b);
        else if (gate === "XNOR") out = !(a ^ b) ? 1 : 0;
      }

      const led = document.getElementById(`led-${gate}`);
      if (led) {
        led.textContent = out;
        led.classList.toggle("active", out === 1);
      }

      // Highlight row in mini truth table
      const card = document.querySelector(`.gate-card[data-gate="${gate}"]`);
      if (card) {
        card.querySelectorAll(".mini-truth-table tr").forEach(tr => tr.classList.remove("active-row"));
        const targetRow = document.getElementById(rowKey);
        if (targetRow) targetRow.classList.add("active-row");
      }
    };

    // Attach click listeners to all gate toggle buttons
    document.querySelectorAll(".gate-toggle-btn[data-gate-target]").forEach(btn => {
      btn.addEventListener("click", () => {
        const gate = btn.getAttribute("data-gate-target");
        const pin = btn.getAttribute("data-pin");
        const val = parseInt(btn.getAttribute("data-val"), 10);

        if (!gateStates[gate]) return;
        gateStates[gate][pin] = val;

        // Toggle button active visual
        const parentIo = btn.closest(".gate-io-row") || btn.parentElement;
        parentIo.querySelectorAll(`[data-pin="${pin}"]`).forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        updateGate(gate);
      });
    });
  }

  initExercisesInteractive() {
    this.l3Inputs = { A: 0, B: 0 };
    this.l4Inputs = { A: 0, B: 0 };
    this.updateL3Circuit();
    this.updateL4Circuit();
  }

  setL3Input(pin, val) {
    if (!this.l3Inputs) this.l3Inputs = { A: 0, B: 0 };
    this.l3Inputs[pin] = val;

    // Toggle button UI
    const b0 = document.getElementById(`btnL3${pin}0`);
    const b1 = document.getElementById(`btnL3${pin}1`);
    if (b0 && b1) {
      b0.classList.toggle("active", val === 0);
      b1.classList.toggle("active", val === 1);
    }

    this.updateL3Circuit();
  }

  updateL3Circuit() {
    const { A, B } = this.l3Inputs || { A: 0, B: 0 };
    // Titik C: NAND(A, B) = !(A & B)
    const C = !(A & B) ? 1 : 0;
    // Titik D: XOR(A, B) = A ^ B
    const D = (A ^ B) ? 1 : 0;
    // Keluaran Q: XNOR(C, D) = !(C ^ D)
    const Q = !(C ^ D) ? 1 : 0;

    const elA = document.getElementById("txtL3-A");
    const elB = document.getElementById("txtL3-B");
    const elC = document.getElementById("txtL3-C");
    const elD = document.getElementById("txtL3-D");
    const elQ = document.getElementById("txtL3-Q");
    const dotQ = document.getElementById("dotL3-Q");
    const wireQ = document.getElementById("wireL3-Q");

    if (elA) elA.textContent = A;
    if (elB) elB.textContent = B;
    if (elC) elC.textContent = C;
    if (elD) elD.textContent = D;
    if (elQ) elQ.textContent = Q;

    if (dotQ) {
      dotQ.setAttribute("fill", Q === 1 ? "#10b981" : "#ef4444");
    }
    if (wireQ) {
      wireQ.setAttribute("stroke", Q === 1 ? "#10b981" : "#64748b");
    }

    // Highlight row in truth table
    for (let a = 0; a <= 1; a++) {
      for (let b = 0; b <= 1; b++) {
        const row = document.getElementById(`rowL3-${a}${b}`);
        if (row) {
          row.classList.toggle("row-highlight", a === A && b === B);
        }
      }
    }
  }

  setL4Input(pin, val) {
    if (!this.l4Inputs) this.l4Inputs = { A: 0, B: 0 };
    this.l4Inputs[pin] = val;

    const b0 = document.getElementById(`btnL4${pin}0`);
    const b1 = document.getElementById(`btnL4${pin}1`);
    if (b0 && b1) {
      b0.classList.toggle("active", val === 0);
      b1.classList.toggle("active", val === 1);
    }

    this.updateL4Circuit();
  }

  updateL4Circuit() {
    const { A, B } = this.l4Inputs || { A: 0, B: 0 };
    // C = A & B
    const C = (A & B) ? 1 : 0;
    // D = A | B
    const D = (A | B) ? 1 : 0;
    // Q = C ^ D
    const Q = (C ^ D) ? 1 : 0;

    const elA = document.getElementById("txtL4-A");
    const elB = document.getElementById("txtL4-B");
    const elC = document.getElementById("txtL4-C");
    const elD = document.getElementById("txtL4-D");
    const elQ = document.getElementById("txtL4-Q");
    const dotQ = document.getElementById("dotL4-Q");
    const wireQ = document.getElementById("wireL4-Q");

    if (elA) elA.textContent = A;
    if (elB) elB.textContent = B;
    if (elC) elC.textContent = C;
    if (elD) elD.textContent = D;
    if (elQ) elQ.textContent = Q;

    if (dotQ) {
      dotQ.setAttribute("fill", Q === 1 ? "#10b981" : "#ef4444");
    }
    if (wireQ) {
      wireQ.setAttribute("stroke", Q === 1 ? "#8b5cf6" : "#64748b");
    }

    // Highlight row in truth table
    for (let a = 0; a <= 1; a++) {
      for (let b = 0; b <= 1; b++) {
        const row = document.getElementById(`rowL4-${a}${b}`);
        if (row) {
          row.classList.toggle("row-highlight", a === A && b === B);
        }
      }
    }
  }

  renderTruthTableSimulator(container) {
    container.innerHTML = `
      <div class="luxury-content-card">
        <div class="content-header">
          <span class="badge-accent"><i class="fas fa-microchip"></i> Simulator Interaktif Pertemuan 3</span>
          <h2>Generator Tabel Kebenaran & Evaluator Aljabar Boolean</h2>
          <p class="subtitle">Ketik ekspresi logika Boolean atau gunakan tombol keyboard di bawah. Generator akan menghitung tabel kebenaran lengkap (s.d. 4 variabel / 16 baris) serta mengidentifikasi suku <strong>Minterm (SOP)</strong> dan <strong>Maxterm (POS)</strong>.</p>
        </div>

        <div class="converter-input-card">
          <div class="form-group flex-1">
            <label><i class="fas fa-keyboard"></i> Masukkan Ekspresi Aljabar Boolean:</label>
            <div class="input-with-icon">
              <i class="fas fa-code"></i>
              <input type="text" id="boolExprInput" value="(A + B) * (A' + B)" placeholder="Contoh: (A + B) * (A' + B) atau A*B + A'*C" style="font-family: var(--font-mono); font-size: 15px; font-weight: 600;" />
            </div>
          </div>

          <!-- Virtual Keypad for Easy Typing -->
          <div class="truth-keypad">
            <button class="keypad-btn" data-key="A">A</button>
            <button class="keypad-btn" data-key="B">B</button>
            <button class="keypad-btn" data-key="C">C</button>
            <button class="keypad-btn" data-key="D">D</button>
            <button class="keypad-btn op-btn" data-key="'" title="NOT (Inversi)">NOT (')</button>
            <button class="keypad-btn op-btn" data-key=" * " title="AND (Perkalian)">AND (·)</button>
            <button class="keypad-btn op-btn" data-key=" + " title="OR (Penjumlahan)">OR (+)</button>
            <button class="keypad-btn op-btn" data-key=" ^ " title="XOR (Exclusive-OR)">XOR (⊕)</button>
            <button class="keypad-btn fn-btn" data-key="NAND(A, B)">NAND</button>
            <button class="keypad-btn fn-btn" data-key="NOR(A, B)">NOR</button>
            <button class="keypad-btn fn-btn" data-key="XNOR(A, B)">XNOR</button>
            <button class="keypad-btn" data-key="(">(</button>
            <button class="keypad-btn" data-key=")">)</button>
            <button class="keypad-btn" id="btnKeyClear" style="color: #ef4444;"><i class="fas fa-trash-alt"></i> Clear</button>
          </div>

          <div class="preset-examples-bar mt-2">
            <span><i class="fas fa-lightbulb text-warning"></i> Preset Soal Slide ITERA:</span>
            <button class="preset-chip" data-expr="(A + B) * (A' + B)">Slide 12: POS ke SOP</button>
            <button class="preset-chip" data-expr="A + A' * B">Slide 13: SOP ke POS</button>
            <button class="preset-chip" data-expr="A' * B * C' + A * B * C'">Slide 15: 3-Variabel Y</button>
            <button class="preset-chip" data-expr="A' * B + A * B'">Slide 16: XOR SOP</button>
            <button class="preset-chip" data-expr="!(A + B' * C)">Slide 17: Lat 2.1 (z)</button>
            <button class="preset-chip" data-expr="A'*B*C*D + A*B'*C*D + A*B*C*D' + A*B*C*D">Slide 17: Lat 2.2 (4-Var)</button>
            <button class="preset-chip" data-expr="XNOR(NAND(A, B), XOR(A, B))">Slide 18: Lat 3 (C, D, Q)</button>
            <button class="preset-chip" data-expr="XOR(A * B, A + B)">Slide 19: Lat 4 (AND/OR/XOR)</button>
          </div>

          <div style="margin-top: 14px;">
            <button class="btn-convert-action" id="btnGenerateTruthTable">
              <i class="fas fa-table"></i>
              <span>Generate Tabel Kebenaran Lengkap</span>
            </button>
          </div>
        </div>

        <div id="truthTableResultContainer" class="mt-4"></div>
      </div>
    `;

    const input = document.getElementById("boolExprInput");
    const containerRes = document.getElementById("truthTableResultContainer");

    // Keypad clicks
    container.querySelectorAll(".keypad-btn[data-key]").forEach(b => {
      b.addEventListener("click", () => {
        const k = b.getAttribute("data-key");
        input.value += k;
        input.focus();
      });
    });

    document.getElementById("btnKeyClear").addEventListener("click", () => {
      input.value = "";
      input.focus();
    });

    // Preset clicks
    container.querySelectorAll(".preset-chip[data-expr]").forEach(p => {
      p.addEventListener("click", () => {
        input.value = p.getAttribute("data-expr");
        this.computeTruthTable(input.value.trim(), containerRes);
      });
    });

    document.getElementById("btnGenerateTruthTable").addEventListener("click", () => {
      this.computeTruthTable(input.value.trim(), containerRes);
    });

    // Initial calculation
    this.computeTruthTable(input.value.trim(), containerRes);
  }

  computeTruthTable(rawExpr, targetContainer) {
    if (!rawExpr) {
      targetContainer.innerHTML = `<div class="glass-callout text-warning">Silakan masukkan formula aljabar Boolean terlebih dahulu.</div>`;
      return;
    }

    // 1. Detect variables (A, B, C, D)
    const upper = rawExpr.toUpperCase();
    const vars = [];
    ['A', 'B', 'C', 'D'].forEach(v => {
      if (upper.includes(v)) vars.push(v);
    });

    if (vars.length === 0) {
      targetContainer.innerHTML = `<div class="glass-callout text-danger">Tidak ditemukan variabel logika (A, B, C, atau D) dalam ekspresi.</div>`;
      return;
    }

    vars.sort();

    // 2. Prepare evaluator function
    const NAND = (x, y) => !(x & y) ? 1 : 0;
    const NOR = (x, y) => !(x | y) ? 1 : 0;
    const XOR = (x, y) => (x ^ y) ? 1 : 0;
    const XNOR = (x, y) => !(x ^ y) ? 1 : 0;

    let jsCode = rawExpr
      .replace(/·/g, "*")
      .replace(/⊕/g, "^")
      .replace(/⊙/g, " XNOR ")
      .replace(/AND/gi, "&")
      .replace(/OR/gi, "|")
      .replace(/NOT\s*\(/gi, "!(")
      .replace(/([A-D])'/g, "(!$1)")
      .replace(/([A-D])̄/g, "(!$1)")
      .replace(/\*/g, "&")
      .replace(/\+/g, "|")
      .replace(/([A-D])\s*([A-D])/g, "$1 & $2")
      .replace(/([A-D])\s*\(/g, "$1 & (")
      .replace(/\)\s*([A-D])/g, ") & $1");

    let evalFn;
    try {
      evalFn = new Function('A', 'B', 'C', 'D', 'NAND', 'NOR', 'XOR', 'XNOR', `
        try {
          return (${jsCode}) ? 1 : 0;
        } catch(e) {
          return null;
        }
      `);
      const test = evalFn(0, 0, 0, 0, NAND, NOR, XOR, XNOR);
      if (test === null) throw new Error("Format ekspresi tidak valid");
    } catch (err) {
      targetContainer.innerHTML = `
        <div class="glass-callout" style="border-color: var(--accent-amber);">
          <div class="callout-icon text-danger"><i class="fas fa-exclamation-triangle"></i></div>
          <div class="callout-body">
            <h4>Format Ekspresi Belum Valid</h4>
            <p>Terjadi kesalahan penulisan ekspresi Boolean. Pastikan tanda kurung seimbang dan operator tertulis dengan benar.</p>
            <small class="text-muted">Ekspresi diterima: <code>${rawExpr}</code></small>
          </div>
        </div>
      `;
      return;
    }

    // 3. Generate 2^n rows
    const numRows = Math.pow(2, vars.length);
    const rows = [];
    const minterms = [];
    const maxterms = [];

    for (let i = 0; i < numRows; i++) {
      const binStr = i.toString(2).padStart(vars.length, "0");
      const varValues = { A: 0, B: 0, C: 0, D: 0 };
      vars.forEach((v, idx) => {
        varValues[v] = parseInt(binStr[idx], 10);
      });

      const out = evalFn(varValues.A, varValues.B, varValues.C, varValues.D, NAND, NOR, XOR, XNOR);
      if (out === 1) minterms.push(i);
      else maxterms.push(i);

      rows.push({
        index: i,
        bin: binStr,
        varValues,
        output: out
      });
    }

    // 4. Render Table & Canonical Forms
    targetContainer.innerHTML = `
      <div class="table-responsive mb-4">
        <table class="luxury-table" style="text-align: center;">
          <thead>
            <tr>
              <th style="width: 60px;">Baris</th>
              ${vars.map(v => `<th style="width: 50px;">${v}</th>`).join("")}
              <th style="color: var(--primary-cyan); font-weight: 700;">Output F</th>
              <th>Minterm (SOP)</th>
              <th>Maxterm (POS)</th>
            </tr>
          </thead>
          <tbody>
            ${rows.map(r => `
              <tr class="${r.output === 1 ? 'row-highlight' : ''}">
                <td style="font-family: var(--font-mono); color: var(--text-dim);">${r.index}</td>
                ${vars.map(v => `<td style="font-family: var(--font-mono); font-weight: 600;">${r.varValues[v]}</td>`).join("")}
                <td style="font-family: var(--font-mono); font-size: 15px; font-weight: 800; color: ${r.output === 1 ? 'var(--primary-cyan)' : 'var(--text-muted)'};">
                  ${r.output}
                </td>
                <td>
                  ${r.output === 1 ? `<span class="minterm-badge">m${r.index}</span>` : '<span style="color: var(--text-muted);">-</span>'}
                </td>
                <td>
                  ${r.output === 0 ? `<span class="maxterm-badge">M${r.index}</span>` : '<span style="color: var(--text-muted);">-</span>'}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <div class="grid-2-cols">
        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-plus text-warning"></i>
            <h4>Bentuk Kanonik SOP (Sum of Products)</h4>
          </div>
          <div class="code-badge-block" style="color: var(--accent-gold); font-size: 14px;">
            F(${vars.join(", ")}) = Σ m(${minterms.join(", ")})
          </div>
          <p class="mt-2 text-muted" style="font-size: 12.5px;">Dibangun dari ${minterms.length} baris tabel kebenaran yang menghasilkan keluaran bernilai <strong>1</strong>.</p>
        </div>

        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-times text-primary"></i>
            <h4>Bentuk Kanonik POS (Product of Sums)</h4>
          </div>
          <div class="code-badge-block" style="color: var(--primary-cyan); font-size: 14px;">
            F(${vars.join(", ")}) = Π M(${maxterms.join(", ")})
          </div>
          <p class="mt-2 text-muted" style="font-size: 12.5px;">Dibangun dari ${maxterms.length} baris tabel kebenaran yang menghasilkan keluaran bernilai <strong>0</strong>.</p>
        </div>
      </div>
    `;
  }

  renderWeek3Quiz(container) {
    const questions = [
      {
        id: "q1",
        title: "Soal 1: Prioritas Operasi Aljabar Boolean (Slide 8)",
        question: "Bila sebuah ekspresi Aljabar Boolean <strong>tidak memiliki tanda kurung</strong>, bagaimanakah urutan prioritas penyelesaian operator yang benar menurut standar perkuliahan ITERA?",
        options: [
          { text: "AND &rarr; OR &rarr; NOT", correct: false },
          { text: "NOT &rarr; AND &rarr; OR", correct: true },
          { text: "OR &rarr; AND &rarr; NOT", correct: false },
          { text: "NOT &rarr; OR &rarr; AND", correct: false }
        ],
        explanation: "Sesuai Slide 8 ITERA: Urutan prioritas tanpa tanda kurung adalah: (1) NOT, kemudian (2) AND, dan terakhir (3) OR."
      },
      {
        id: "q2",
        title: "Soal 2: Hukum Distributif & Penyerapan (Slide 13)",
        question: "Bentuk paling sederhana dari pernyataan logika <code>G = A + ĀB</code> (Slide 13) adalah...",
        options: [
          { text: "A", correct: false },
          { text: "B", correct: false },
          { text: "A + B", correct: true },
          { text: "A · B", correct: false }
        ],
        explanation: "Menggunakan hukum distributif Aljabar Boolean: G = (A + Ā)(A + B) = 1 · (A + B) = A + B (Slide 13 ITERA)."
      },
      {
        id: "q3",
        title: "Soal 3: Aturan Membaca Minterm SOP (Slide 10)",
        question: "Pada fungsi 3-variabel (x, y, z), suku perkalian minterm <code>x' y z'</code> mewakili minterm berindeks desimal...",
        options: [
          { text: "m₂ (karena 010₂ = 2)", correct: true },
          { text: "m₅ (karena 101₂ = 5)", correct: false },
          { text: "m₃ (karena 011₂ = 3)", correct: false },
          { text: "m₆ (karena 110₂ = 6)", correct: false }
        ],
        explanation: "Sesuai Slide 10: Variabel berkomplemen bernilai 0 dan tanpa komplemen bernilai 1. Maka x' y z' = 0 1 0 = 2 desimal &rarr; m₂."
      },
      {
        id: "q4",
        title: "Soal 4: Analisis Rangkaian Multi-Titik (Slide 18 - Latihan 3)",
        question: "Pada rangkaian Latihan 3 ITERA yang tersusun atas gerbang NAND (menghasilkan sinyal C), Ex-OR (sinyal D), dan Ex-NOR (keluaran Q), gerbang logika tunggal manakah yang setara untuk mengganti seluruh rangkaian tersebut?",
        options: [
          { text: "Gerbang AND (Q = AB)", correct: false },
          { text: "Gerbang OR (Q = A + B)", correct: true },
          { text: "Gerbang XOR (Q = A ⊕ B)", correct: false },
          { text: "Gerbang NOR (Q = (A + B)')", correct: false }
        ],
        explanation: "Tabel kebenaran keluaran Q untuk masukan 00, 01, 10, 11 adalah [0, 1, 1, 1], yang tepat 100% sama dengan fungsi gerbang OR (Q = A + B)."
      },
      {
        id: "q5",
        title: "Soal 5: Teorema De Morgan (Slide 17 - Latihan 2.1)",
        question: "Diberikan ekspresi <code>z = (A + B̄ · C)̄</code>. Bentuk sederhana setelah menerapkan teorema De Morgan adalah...",
        options: [
          { text: "Ā + B + C̄", correct: false },
          { text: "ĀB + ĀC̄", correct: true },
          { text: "Ā · B · C", correct: false },
          { text: "A + B + C", correct: false }
        ],
        explanation: "z = Ā · (B̄ · C)̄ = Ā · (B̿ + C̄) = Ā · (B + C̄) = ĀB + ĀC̄ (Slide 17 Latihan 2.1)."
      }
    ];

    container.innerHTML = `
      <div class="luxury-content-card">
        <div class="content-header">
          <span class="badge-accent"><i class="fas fa-award"></i> Evaluasi Mandiri Pertemuan 03</span>
          <h2>Kuis Pemahaman Aljabar Boolean & Rangkaian Logika</h2>
          <p class="subtitle">Uji pemahaman materi Pertemuan 3 ITERA: Gerbang Logika, Hukum Boolean, SOP/POS, serta analisis rangkaian kombinasi. Target lulus: &ge; 80% (CPMK Pertemuan 3).</p>
        </div>

        <form id="w3QuizForm">
          ${questions.map((q, idx) => `
            <div class="quiz-w3-card" id="card-${q.id}">
              <div class="quiz-badge-header">
                <span class="pill-tag">${q.title}</span>
              </div>
              <p class="quiz-qtext mt-2">${q.question}</p>

              <div class="quiz-options-group mt-3">
                ${q.options.map((opt, oIdx) => `
                  <label class="quiz-w3-opt" for="opt-${q.id}-${oIdx}">
                    <input type="radio" name="${q.id}" id="opt-${q.id}-${oIdx}" value="${oIdx}" />
                    <span>${opt.text}</span>
                  </label>
                `).join("")}
              </div>

              <div class="quiz-feedback-box mt-3" id="feedback-${q.id}" style="display: none;"></div>
            </div>
          `).join("")}

          <div style="display: flex; gap: 12px; align-items: center; margin-top: 24px;">
            <button type="button" class="btn-convert-action" id="btnSubmitW3Quiz">
              <i class="fas fa-paper-plane"></i> Kirim Jawaban & Evaluasi Nilai
            </button>
            <button type="button" class="btn-pill-action" id="btnResetW3Quiz">
              <i class="fas fa-redo"></i> Reset Jawaban
            </button>
          </div>
        </form>

        <div id="w3QuizSummaryBox" class="mt-4"></div>
      </div>
    `;

    // Radio selection highlight
    container.querySelectorAll(".quiz-w3-opt input").forEach(r => {
      r.addEventListener("change", (e) => {
        const group = r.closest(".quiz-options-group");
        group.querySelectorAll(".quiz-w3-opt").forEach(l => l.classList.remove("selected"));
        r.closest(".quiz-w3-opt").classList.add("selected");
      });
    });

    document.getElementById("btnSubmitW3Quiz").addEventListener("click", () => {
      let score = 0;
      let total = questions.length;
      let answeredCount = 0;

      questions.forEach(q => {
        const card = document.getElementById(`card-${q.id}`);
        const feedback = document.getElementById(`feedback-${q.id}`);
        const selected = document.querySelector(`input[name="${q.id}"]:checked`);

        feedback.style.display = "block";
        card.classList.remove("correct", "wrong");

        if (selected) {
          answeredCount++;
          const chosenIdx = parseInt(selected.value, 10);
          const isCorrect = q.options[chosenIdx].correct;

          if (isCorrect) {
            score++;
            card.classList.add("correct");
            feedback.innerHTML = `
              <div class="glass-callout" style="border-color: rgba(16,185,129,0.5); background: rgba(16,185,129,0.08);">
                <span class="text-success"><i class="fas fa-check-circle"></i> <strong>Jawaban Benar!</strong></span>
                <p class="mt-1" style="font-size: 13px;">${q.explanation}</p>
              </div>
            `;
          } else {
            card.classList.add("wrong");
            feedback.innerHTML = `
              <div class="glass-callout" style="border-color: rgba(239,68,68,0.5); background: rgba(239,68,68,0.08);">
                <span class="text-danger"><i class="fas fa-times-circle"></i> <strong>Jawaban Kurang Tepat.</strong></span>
                <p class="mt-1" style="font-size: 13px;">${q.explanation}</p>
              </div>
            `;
          }
        } else {
          feedback.innerHTML = `
            <div class="glass-callout text-warning" style="font-size: 12.5px;">
              <i class="fas fa-exclamation-circle"></i> Anda belum memilih jawaban untuk soal ini.
            </div>
          `;
        }
      });

      const percentage = Math.round((score / total) * 100);
      const passed = percentage >= 80;
      const summaryBox = document.getElementById("w3QuizSummaryBox");

      summaryBox.innerHTML = `
        <div class="diagram-box" style="border-color: ${passed ? 'var(--accent-emerald)' : 'var(--accent-gold)'};">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
            <div>
              <span class="pill-tag" style="background: ${passed ? 'rgba(16,185,129,0.2)' : 'rgba(245,175,25,0.2)'}; color: ${passed ? 'var(--accent-emerald)' : 'var(--accent-gold)'};">
                <i class="fas ${passed ? 'fa-check-double' : 'fa-award'}"></i> ${passed ? 'KOMPETEN (LULUS SUB-CPMK)' : 'PERLU EVALUASI'}
              </span>
              <h3 style="margin-top: 8px; font-size: 20px;">Skor Anda: ${score} dari ${total} Soal (${percentage}%)</h3>
              <p class="text-muted" style="font-size: 13px;">Standar Capaian Sub-CPMK Pertemuan 3 ITERA: Minimal 80% ketepatan konsep.</p>
            </div>
            <div style="font-size: 32px; font-weight: 800; font-family: var(--font-mono); color: ${passed ? 'var(--accent-emerald)' : 'var(--accent-gold)'};">
              ${percentage}%
            </div>
          </div>
        </div>
      `;

      summaryBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    document.getElementById("btnResetW3Quiz").addEventListener("click", () => {
      document.getElementById("w3QuizForm").reset();
      container.querySelectorAll(".quiz-w3-opt").forEach(l => l.classList.remove("selected"));
      container.querySelectorAll(".quiz-w3-card").forEach(c => c.classList.remove("correct", "wrong"));
      container.querySelectorAll(".quiz-feedback-box").forEach(f => {
        f.style.display = "none";
        f.innerHTML = "";
      });
      document.getElementById("w3QuizSummaryBox").innerHTML = "";
    });
  }

  /* ==========================================================================
     8C. PERTEMUAN 4 INTERAKTIF: SIMULATOR K-MAP, SENSOR KEAMANAN, DAN KUIS MANDIRI
     ========================================================================== */

  // 1. Simulator Sensor Gedung (Slide 14 - 16)
  initBuildingSensors() {
    this.buildingSensors = { A: 0, B: 0, C: 0, D: 0 };
    this.updateBuildingSensorAlarm();
  }

  setBuildingSensor(sensor, val) {
    if (!this.buildingSensors) this.buildingSensors = { A: 0, B: 0, C: 0, D: 0 };
    this.buildingSensors[sensor] = val;

    const b0 = document.getElementById(`btnSens${sensor}0`);
    const b1 = document.getElementById(`btnSens${sensor}1`);
    if (b0 && b1) {
      b0.classList.toggle("active", val === 0);
      b1.classList.toggle("active", val === 1);
    }

    this.updateBuildingSensorAlarm();
  }

  updateBuildingSensorAlarm() {
    const { A, B, C, D } = this.buildingSensors || { A: 0, B: 0, C: 0, D: 0 };
    const isDoorMotion = (A === 1 && C === 1);
    const isWindowMotion = (B === 1 && C === 1);
    const isSmoke = (D === 1);
    const alarmQ = (isDoorMotion || isWindowMotion || isSmoke) ? 1 : 0;

    const banner = document.getElementById("alarmStatusBanner");
    const statusText = document.getElementById("alarmStatusText");
    const reasonText = document.getElementById("alarmReasonText");

    if (banner && statusText && reasonText) {
      banner.classList.remove("triggered", "safe");
      if (alarmQ === 1) {
        banner.classList.add("triggered");
        statusText.innerHTML = `<i class="fas fa-bell"></i> PERINGATAN: ALARM AKTIF! (Q = 1)`;
        statusText.style.color = "#ef4444";

        const triggers = [];
        if (isSmoke) triggers.push("Sensor Asap Kebakaran Aktif (D=1)");
        if (isDoorMotion) triggers.push("Pintu Terbuka & Gerakan Terdeteksi (A=1, C=1)");
        if (isWindowMotion) triggers.push("Jendela Terbuka & Gerakan Terdeteksi (B=1, C=1)");
        reasonText.innerHTML = `<strong>Pemicu Sirene:</strong> ${triggers.join(" • ")}`;
      } else {
        banner.classList.add("safe");
        statusText.innerHTML = `<i class="fas fa-shield-alt"></i> SISTEM AMAN (Q = 0)`;
        statusText.style.color = "#10b981";
        reasonText.textContent = "Semua sensor normal. Tidak ada kondisi bahaya terdeteksi.";
      }
    }
  }

  // 2. Simulator Peta Karnaugh Interaktif (K-Map Solver 2, 3, 4 Variabel)
  renderKMapSimulator(container) {
    this.kmapVarCount = 4;
    this.kmapCells = {};
    for (let i = 0; i < 16; i++) this.kmapCells[i] = 0;

    container.innerHTML = `
      <div class="luxury-content-card">
        <div class="content-header">
          <span class="badge-accent"><i class="fas fa-chess-board"></i> Simulator Interaktif Pertemuan 4</span>
          <h2>Simulator Peta Karnaugh (K-Map 2, 3 & 4 Variabel)</h2>
          <p class="subtitle">Klik langsung setiap sel K-Map untuk mengganti nilai (<strong>0 &rarr; 1 &rarr; X &rarr; 0</strong>). Solver otomatis akan menganalisis minterm aktif, Don't Care, dan menghasilkan bentuk <strong>SOP Minimum</strong> secara real-time.</p>
        </div>

        <div class="converter-input-card">
          <div class="bitboard-controls-bar">
            <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
              <span style="font-size: 13px; color: var(--text-dim); font-weight: 700;">Jumlah Variabel:</span>
              <button class="btn-pill-action" id="btnKMap2Var">2-Variabel (AB)</button>
              <button class="btn-pill-action" id="btnKMap3Var">3-Variabel (ABC)</button>
              <button class="btn-pill-action active" id="btnKMap4Var">4-Variabel (ABCD)</button>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <button class="btn-pill-action" id="btnKMapClear"><i class="fas fa-undo"></i> Reset (Semua 0)</button>
              <button class="btn-pill-action" id="btnKMapAllOn"><i class="fas fa-check"></i> Set Semua 1</button>
              <button class="btn-pill-action" id="btnKMapInvert"><i class="fas fa-exchange-alt"></i> Balik (Inversi)</button>
            </div>
          </div>

          <div class="preset-examples-bar mt-3">
            <span><i class="fas fa-lightbulb text-warning"></i> Preset Soal Slide ITERA:</span>
            <button class="preset-chip" id="presetS9">Slide 9 (2-Var): Q = AB+A'B+AB'</button>
            <button class="preset-chip" id="presetS10">Slide 10 (3-Var): Q = ABC'+AB'C'+AB'C+ABC</button>
            <button class="preset-chip" id="presetS12_1">Slide 12 (Lat 1): Q = AB'+A'B'</button>
            <button class="preset-chip" id="presetS12_2">Slide 12 (Lat 2): Q = A'B'C+A'BC+AB'C+ABC+ABC'</button>
            <button class="preset-chip" id="presetS13">Slide 13 (4-Var): Q = A'BC'D+ABC'D+A'BCD+ABCD</button>
            <button class="preset-chip" id="presetS16">Slide 16 (Keamanan Gedung 11 Minterm)</button>
            <button class="preset-chip" id="presetS17">Slide 17 (Don't Care X)</button>
            <button class="preset-chip" id="presetS18_1">Slide 18.1: Q = ABCD'+AB'C'D+A'BCD</button>
            <button class="preset-chip" id="presetS18_2">Slide 18.2: Gerbang Parkir (D + AB C')</button>
          </div>
        </div>

        <!-- Wadah Grid Tabel K-Map -->
        <div id="kmapGridContainer" class="mt-4"></div>

        <!-- Wadah Hasil Solusi Minimum -->
        <div id="kmapResultContainer" class="mt-4"></div>
      </div>
    `;

    const gridContainer = document.getElementById("kmapGridContainer");
    const resContainer = document.getElementById("kmapResultContainer");

    const updateUI = () => {
      this.drawKMapGrid(gridContainer, resContainer);
    };

    // Mode Buttons
    const b2 = document.getElementById("btnKMap2Var");
    const b3 = document.getElementById("btnKMap3Var");
    const b4 = document.getElementById("btnKMap4Var");

    const setMode = (n) => {
      this.kmapVarCount = n;
      b2.classList.toggle("active", n === 2);
      b3.classList.toggle("active", n === 3);
      b4.classList.toggle("active", n === 4);
      this.kmapCells = {};
      const total = Math.pow(2, n);
      for (let i = 0; i < total; i++) this.kmapCells[i] = 0;
      updateUI();
    };

    b2.addEventListener("click", () => setMode(2));
    b3.addEventListener("click", () => setMode(3));
    b4.addEventListener("click", () => setMode(4));

    // Clear & Invert
    document.getElementById("btnKMapClear").addEventListener("click", () => {
      const total = Math.pow(2, this.kmapVarCount);
      for (let i = 0; i < total; i++) this.kmapCells[i] = 0;
      updateUI();
    });

    document.getElementById("btnKMapAllOn").addEventListener("click", () => {
      const total = Math.pow(2, this.kmapVarCount);
      for (let i = 0; i < total; i++) this.kmapCells[i] = 1;
      updateUI();
    });

    document.getElementById("btnKMapInvert").addEventListener("click", () => {
      const total = Math.pow(2, this.kmapVarCount);
      for (let i = 0; i < total; i++) {
        if (this.kmapCells[i] === 1) this.kmapCells[i] = 0;
        else if (this.kmapCells[i] === 0) this.kmapCells[i] = 1;
      }
      updateUI();
    });

    // Preset Handlers
    document.getElementById("presetS9").addEventListener("click", () => {
      setMode(2);
      // m1 (A'B=01=1), m2 (AB'=10=2), m3 (AB=11=3)
      this.kmapCells[1] = 1;
      this.kmapCells[2] = 1;
      this.kmapCells[3] = 1;
      updateUI();
    });

    document.getElementById("presetS10").addEventListener("click", () => {
      setMode(3);
      // m4 (100), m5 (101), m6 (110), m7 (111)
      this.kmapCells[4] = 1;
      this.kmapCells[5] = 1;
      this.kmapCells[6] = 1;
      this.kmapCells[7] = 1;
      updateUI();
    });

    document.getElementById("presetS12_1").addEventListener("click", () => {
      setMode(2);
      // Q = AB' + A'B' -> m2 (10) dan m0 (00)
      this.kmapCells[0] = 1;
      this.kmapCells[2] = 1;
      updateUI();
    });

    document.getElementById("presetS12_2").addEventListener("click", () => {
      setMode(3);
      // m1, m3, m5, m6, m7
      this.kmapCells[1] = 1;
      this.kmapCells[3] = 1;
      this.kmapCells[5] = 1;
      this.kmapCells[6] = 1;
      this.kmapCells[7] = 1;
      updateUI();
    });

    document.getElementById("presetS13").addEventListener("click", () => {
      setMode(4);
      // m5 (0101), m7 (0111), m13 (1101), m15 (1111)
      this.kmapCells[5] = 1;
      this.kmapCells[7] = 1;
      this.kmapCells[13] = 1;
      this.kmapCells[15] = 1;
      updateUI();
    });

    document.getElementById("presetS16").addEventListener("click", () => {
      setMode(4);
      // Q = {1, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15}
      const ms = [1, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15];
      ms.forEach(m => this.kmapCells[m] = 1);
      updateUI();
    });

    document.getElementById("presetS17").addEventListener("click", () => {
      setMode(3);
      // Slide 17: Row C' has X on m0 and m2, 1 on m6 and m4; Row C has 1 on m3, m7, m5
      this.kmapCells[0] = "X";
      this.kmapCells[2] = "X";
      this.kmapCells[6] = 1;
      this.kmapCells[4] = 1;
      this.kmapCells[3] = 1;
      this.kmapCells[7] = 1;
      this.kmapCells[5] = 1;
      updateUI();
    });

    document.getElementById("presetS18_1").addEventListener("click", () => {
      setMode(4);
      // m14 (1110), m9 (1001), m7 (0111)
      this.kmapCells[14] = 1;
      this.kmapCells[9] = 1;
      this.kmapCells[7] = 1;
      updateUI();
    });

    document.getElementById("presetS18_2").addEventListener("click", () => {
      setMode(4);
      // F = D + AB C'
      // D is 1 on {1, 3, 5, 7, 9, 11, 13, 15}
      // AB C' is 1 on m12 (1100) and m13 (1101)
      [1, 3, 5, 7, 9, 11, 13, 15, 12].forEach(m => this.kmapCells[m] = 1);
      updateUI();
    });

    // Initial render
    // Default load with Building Security Case (Slide 16)
    [1, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15].forEach(m => this.kmapCells[m] = 1);
    updateUI();
  }

  drawKMapGrid(gridEl, resEl) {
    const n = this.kmapVarCount;

    if (n === 2) {
      // 2 Variables: A (baris 0, 1), B (kolom 0, 1)
      // cell minterm = A*2 + B
      gridEl.innerHTML = `
        <div class="table-responsive">
          <table class="kmap-interactive-table">
            <thead>
              <tr>
                <th class="header-corner">A \\ B</th>
                <th>0 (B')</th>
                <th>1 (B)</th>
              </tr>
            </thead>
            <tbody>
              ${[0, 1].map(a => `
                <tr>
                  <th>${a} (${a === 0 ? "A'" : "A"})</th>
                  ${[0, 1].map(b => {
                    const m = a * 2 + b;
                    const val = this.kmapCells[m] !== undefined ? this.kmapCells[m] : 0;
                    return `
                      <td>
                        <button class="kmap-cell-btn val-${val.toString().toLowerCase()}" data-m="${m}">
                          <span class="cell-val">${val}</span>
                          <span class="cell-minterm">m${m}</span>
                        </button>
                      </td>
                    `;
                  }).join("")}
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    } else if (n === 3) {
      // 3 Variables: C on rows (0, 1), AB on columns (00, 01, 11, 10)
      // AB values: [0, 1, 3, 2]
      // minterm = A*4 + B*2 + C
      const abValues = [
        { code: "00", a: 0, b: 0, label: "00 (A'B')" },
        { code: "01", a: 0, b: 1, label: "01 (A'B)" },
        { code: "11", a: 1, b: 1, label: "11 (AB)" },
        { code: "10", a: 1, b: 0, label: "10 (AB')" }
      ];

      gridEl.innerHTML = `
        <div class="table-responsive">
          <table class="kmap-interactive-table">
            <thead>
              <tr>
                <th class="header-corner">C \\ AB</th>
                ${abValues.map(ab => `<th>${ab.label}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${[0, 1].map(c => `
                <tr>
                  <th>${c} (${c === 0 ? "C'" : "C"})</th>
                  ${abValues.map(ab => {
                    const m = ab.a * 4 + ab.b * 2 + c;
                    const val = this.kmapCells[m] !== undefined ? this.kmapCells[m] : 0;
                    return `
                      <td>
                        <button class="kmap-cell-btn val-${val.toString().toLowerCase()}" data-m="${m}">
                          <span class="cell-val">${val}</span>
                          <span class="cell-minterm">m${m}</span>
                        </button>
                      </td>
                    `;
                  }).join("")}
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    } else if (n === 4) {
      // 4 Variables: CD on rows (00, 01, 11, 10), AB on cols (00, 01, 11, 10)
      // minterm = A*8 + B*4 + C*2 + D
      const gray = [
        { code: "00", v1: 0, v2: 0 },
        { code: "01", v1: 0, v2: 1 },
        { code: "11", v1: 1, v2: 1 },
        { code: "10", v1: 1, v2: 0 }
      ];

      gridEl.innerHTML = `
        <div class="table-responsive">
          <table class="kmap-interactive-table">
            <thead>
              <tr>
                <th class="header-corner">CD \\ AB</th>
                ${gray.map(ab => `<th>${ab.code}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${gray.map(cd => `
                <tr>
                  <th>${cd.code}</th>
                  ${gray.map(ab => {
                    const m = ab.v1 * 8 + ab.v2 * 4 + cd.v1 * 2 + cd.v2;
                    const val = this.kmapCells[m] !== undefined ? this.kmapCells[m] : 0;
                    return `
                      <td>
                        <button class="kmap-cell-btn val-${val.toString().toLowerCase()}" data-m="${m}">
                          <span class="cell-val">${val}</span>
                          <span class="cell-minterm">m${m}</span>
                        </button>
                      </td>
                    `;
                  }).join("")}
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    // Bind cell clicks to toggle value (0 -> 1 -> X -> 0)
    gridEl.querySelectorAll(".kmap-cell-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const m = parseInt(btn.getAttribute("data-m"), 10);
        const cur = this.kmapCells[m];
        if (cur === 0) this.kmapCells[m] = 1;
        else if (cur === 1) this.kmapCells[m] = "X";
        else this.kmapCells[m] = 0;
        this.drawKMapGrid(gridEl, resEl);
      });
    });

    // Run solver and display simplified output
    this.updateKMapSolution(resEl);
  }

  updateKMapSolution(resEl) {
    const n = this.kmapVarCount;
    const res = this.solveKMap(n, this.kmapCells);
    const varNames = n === 2 ? "A, B" : (n === 3 ? "A, B, C" : "A, B, C, D");

    resEl.innerHTML = `
      <div class="grid-2-cols">
        <div class="showcase-card highlighted-gold">
          <div class="showcase-header">
            <i class="fas fa-magic text-warning"></i>
            <h4>Hasil Penyederhanaan K-Map (SOP Minimum)</h4>
          </div>
          <div class="code-badge-block" style="font-size: 19px; color: var(--accent-gold); font-weight: 800;">
            F(${varNames}) = ${res.expr}
          </div>
          <div class="mt-3">
            <span class="pill-tag"><i class="fas fa-layer-group"></i> ${res.terms.length} Suku Implikan Prima</span>
            <span class="pill-tag" style="margin-left: 6px;"><i class="fas fa-microchip"></i> Hemat Gerbang Hardware</span>
          </div>
        </div>

        <div class="showcase-card">
          <div class="showcase-header">
            <i class="fas fa-info-circle text-primary"></i>
            <h4>Ringkasan Notasi Minterm & Don't Care</h4>
          </div>
          <div style="font-size: 13.5px; line-height: 1.8;">
            <div><strong>Minterm Aktif (Σ m):</strong> <code>${res.minterms.length > 0 ? "Σ m(" + res.minterms.join(", ") + ")" : "Tidak ada (0)"}</code></div>
            <div><strong>Kondisi Don't Care (d):</strong> <code>${res.dontCares.length > 0 ? "d(" + res.dontCares.join(", ") + ")" : "Tidak ada"}</code></div>
            <div class="mt-2 text-muted" style="font-size: 12.5px;">
              ${res.dontCares.length > 0 ? "Sel Don't Care (X) dipertimbangkan secara otomatis untuk membentuk blok pangkat dua terbesar." : "Semua minterm disederhanakan murni berdasarkan pengelompokan pangkat dua."}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  solveKMap(varCount, cells) {
    const minterms = [];
    const dontCares = [];
    const numCells = Math.pow(2, varCount);

    for (let i = 0; i < numCells; i++) {
      const v = cells[i];
      if (v === 1 || v === "1") minterms.push(i);
      else if (v === "X" || v === "x") dontCares.push(i);
    }

    if (minterms.length === 0) {
      return { terms: ["0"], expr: "0", minterms, dontCares };
    }

    if (minterms.length + dontCares.length === numCells) {
      return { terms: ["1"], expr: "1", minterms, dontCares };
    }

    const varNames = varCount === 2 ? ['A', 'B'] : (varCount === 3 ? ['A', 'B', 'C'] : ['A', 'B', 'C', 'D']);
    const allowed = new Set([...minterms, ...dontCares]);

    // Generate cubes of specific dimension
    const generateCubes = (dim) => {
      const cubes = [];
      const recurse = (pattern, idx, dashes) => {
        if (idx === varCount) {
          if (dashes === dim) cubes.push(pattern);
          return;
        }
        recurse(pattern + "0", idx + 1, dashes);
        recurse(pattern + "1", idx + 1, dashes);
        recurse(pattern + "-", idx + 1, dashes + 1);
      };
      recurse("", 0, 0);
      return cubes;
    };

    const getCoveredCells = (cube) => {
      let results = [0];
      for (let i = 0; i < cube.length; i++) {
        const bitWeight = 1 << (cube.length - 1 - i);
        const char = cube[i];
        if (char === "1") {
          results = results.map(r => r + bitWeight);
        } else if (char === "-") {
          const with1 = results.map(r => r + bitWeight);
          results = results.concat(with1);
        }
      }
      return results;
    };

    const allValidCubes = [];

    for (let dim = varCount; dim >= 0; dim--) {
      const candidates = generateCubes(dim);
      for (const cube of candidates) {
        const covered = getCoveredCells(cube);
        const allInAllowed = covered.every(c => allowed.has(c));
        const containsAtLeastOneMinterm = covered.some(c => minterms.includes(c));

        if (allInAllowed && containsAtLeastOneMinterm) {
          const isRedundant = allValidCubes.some(largerCube => {
            for (let i = 0; i < varCount; i++) {
              if (largerCube[i] !== "-" && largerCube[i] !== cube[i]) return false;
            }
            return true;
          });

          if (!isRedundant) {
            allValidCubes.push(cube);
          }
        }
      }
    }

    let uncovered = new Set(minterms);
    const chosenCubes = [];

    const cubeCovers = allValidCubes.map(cube => {
      const covered = getCoveredCells(cube).filter(c => minterms.includes(c));
      return { cube, covered };
    });

    for (const m of minterms) {
      const covering = cubeCovers.filter(cc => cc.covered.includes(m));
      if (covering.length === 1) {
        const essential = covering[0];
        if (!chosenCubes.includes(essential.cube)) {
          chosenCubes.push(essential.cube);
          essential.covered.forEach(c => uncovered.delete(c));
        }
      }
    }

    while (uncovered.size > 0) {
      let bestCC = null;
      let maxCoverCount = -1;

      for (const cc of cubeCovers) {
        if (chosenCubes.includes(cc.cube)) continue;
        const count = cc.covered.filter(c => uncovered.has(c)).length;
        if (count > maxCoverCount) {
          maxCoverCount = count;
          bestCC = cc;
        }
      }

      if (!bestCC || maxCoverCount <= 0) break;
      chosenCubes.push(bestCC.cube);
      bestCC.covered.forEach(c => uncovered.delete(c));
    }

    const terms = chosenCubes.map(cube => {
      let str = "";
      for (let i = 0; i < varCount; i++) {
        const vName = varNames[i];
        if (cube[i] === "1") str += vName;
        else if (cube[i] === "0") str += `${vName}'`;
      }
      return str || "1";
    });

    return {
      terms,
      expr: terms.join(" + ") || "0",
      minterms,
      dontCares
    };
  }

  // 3. Evaluasi Kuis Mandiri Pertemuan 4
  renderWeek4Quiz(container) {
    const questions = [
      {
        id: "q1_w4",
        title: "Soal 1: Penyusunan Kode Gray pada Sumbu K-Map (Slide 7)",
        question: "Mengapa koordinat baris atau kolom pada Peta Karnaugh disusun menggunakan urutan Kode Gray (<code>00 &rarr; 01 &rarr; 11 &rarr; 10</code>) dan bukan urutan biner biasa (<code>00 &rarr; 01 &rarr; 10 &rarr; 11</code>)?",
        options: [
          { text: "Agar antar dua kotak yang bersebelahan hanya ada 1 variabel saja yang berubah nilainya", correct: true },
          { text: "Agar kapasitas memori cache komputer lebih hemat", correct: false },
          { text: "Agar nilai keluaran rangkaian selalu menghasilkan bilangan desimal ganjil", correct: false },
          { text: "Karena kode Gray mempercepat clock prosessor secara hardware", correct: false }
        ],
        explanation: "Sesuai Slide 7: Pada K-Map, urutan wajib menggunakan kode Gray agar hanya 1 variabel yang berubah statusnya (0&harr;1) antar sel yang bertetangga, memungkinkan eliminasi variabel x + x' = 1."
      },
      {
        id: "q2_w4",
        title: "Soal 2: Aturan Jumlah Sel Pengelompokan (Slide 7 & 8)",
        question: "Berdasarkan kaidah baku Peta Karnaugh (Slide 8), jumlah sel yang sah untuk digabungkan ke dalam sebuah kelompok (grouping) adalah...",
        options: [
          { text: "Boleh 3, 5, atau 7 asalkan berderet lurus", correct: false },
          { text: "Harus berupa kelipatan pangkat dua (1, 2, 4, 8, atau 16 sel)", correct: true },
          { text: "Maksimal 6 sel per kelompok", correct: false },
          { text: "Bebas asalkan tidak berbentuk lingkaran", correct: false }
        ],
        explanation: "Sesuai Slide 7 & 8: Grouping hanya sah jika jumlah selnya merupakan pangkat dua (2ⁿ = 1, 2, 4, 8, 16). Mengelompokkan 3 atau 5 sel adalah SALAH (Slide 8)."
      },
      {
        id: "q3_w4",
        title: "Soal 3: Penyederhanaan K-Map 2-Variabel (Slide 9)",
        question: "Diberikan fungsi logika 2-variabel <code>Q = AB + A'B + AB'</code> (Slide 9). Bentuk paling sederhana yang diperoleh dari penyederhanaan K-Map adalah...",
        options: [
          { text: "Q = AB", correct: false },
          { text: "Q = A + B", correct: true },
          { text: "Q = A' + B'", correct: false },
          { text: "Q = 1", correct: false }
        ],
        explanation: "Sesuai Slide 9: Kelompok vertikal mengeliminasi B menghasilkan A, dan kelompok horizontal mengeliminasi A menghasilkan B, sehingga Q = A + B."
      },
      {
        id: "q4_w4",
        title: "Soal 4: Pemanfaatan Kondisi Don't Care (Slide 17)",
        question: "Apakah fungsi utama dari kondisi <strong>Don't Care (disimbolkan dengan 'X')</strong> pada Peta Karnaugh (Slide 17)?",
        options: [
          { text: "Menghapus tabel kebenaran dari sirkuit digital", correct: false },
          { text: "Dapat dianggap bernilai 1 demi memperbesar ukuran grouping sehingga fungsi logika menjadi lebih sederhana dan hemat gerbang", correct: true },
          { text: "Memaksa tegangan keluaran sirkuit menjadi 0 Volt secara permanen", correct: false },
          { text: "Mengubah rangkaian sekuensial menjadi rangkaian kombinasional", correct: false }
        ],
        explanation: "Sesuai Slide 17: Nilai Don't Care (X) boleh dimanfaatkan sebagai 1 jika menguntungkan pembesaran grup (menghasilkan suku yang lebih sederhana), atau diabaikan sebagai 0 jika tidak diperlukan."
      },
      {
        id: "q5_w4",
        title: "Soal 5: Hasil Desain Sistem Keamanan Gedung 4 Sensor (Slide 16)",
        question: "Pada perancangan alarm keamanan gedung 4-sensor (Pintu A, Jendela B, Gerak C, Asap D), bentuk persamaan Boolean minimum setelah disederhanakan dengan K-Map 4 variabel adalah...",
        options: [
          { text: "Q = ABCD", correct: false },
          { text: "Q = D + AC + BC", correct: true },
          { text: "Q = A + B + C + D", correct: false },
          { text: "Q = AB + CD", correct: false }
        ],
        explanation: "Sesuai Slide 16: Pengelompokan K-Map menghasilkan grup 8-sel (D), grup 4-sel (AC), dan grup 4-sel (BC), menghasilkan persamaan minimum Q = D + AC + BC."
      }
    ];

    container.innerHTML = `
      <div class="luxury-content-card">
        <div class="content-header">
          <span class="badge-accent"><i class="fas fa-award"></i> Evaluasi Mandiri Pertemuan 04</span>
          <h2>Kuis Pemahaman Peta Karnaugh (K-Map) & Desain Logika</h2>
          <p class="subtitle">Uji penguasaan materi Pertemuan 4 ITERA: Kode Gray, Aturan Grouping, K-Map 2-4 Variabel, Don't Care (X), dan Studi Kasus Sensor Nyata. Standar lulus Sub-CPMK: &ge; 80%.</p>
        </div>

        <form id="w4QuizForm">
          ${questions.map((q) => `
            <div class="quiz-w3-card" id="card-${q.id}">
              <div class="quiz-badge-header">
                <span class="pill-tag">${q.title}</span>
              </div>
              <p class="quiz-qtext mt-2">${q.question}</p>

              <div class="quiz-options-group mt-3">
                ${q.options.map((opt, oIdx) => `
                  <label class="quiz-w3-opt" for="opt-${q.id}-${oIdx}">
                    <input type="radio" name="${q.id}" id="opt-${q.id}-${oIdx}" value="${oIdx}" />
                    <span>${opt.text}</span>
                  </label>
                `).join("")}
              </div>

              <div class="quiz-feedback-box mt-3" id="feedback-${q.id}" style="display: none;"></div>
            </div>
          `).join("")}

          <div style="display: flex; gap: 12px; align-items: center; margin-top: 24px;">
            <button type="button" class="btn-convert-action" id="btnSubmitW4Quiz">
              <i class="fas fa-paper-plane"></i> Kirim Jawaban & Evaluasi Nilai
            </button>
            <button type="button" class="btn-pill-action" id="btnResetW4Quiz">
              <i class="fas fa-redo"></i> Reset Jawaban
            </button>
          </div>
        </form>

        <div id="w4QuizSummaryBox" class="mt-4"></div>
      </div>
    `;

    // Radio button UI interaction
    container.querySelectorAll(".quiz-w3-opt input").forEach(r => {
      r.addEventListener("change", () => {
        const group = r.closest(".quiz-options-group");
        group.querySelectorAll(".quiz-w3-opt").forEach(l => l.classList.remove("selected"));
        r.closest(".quiz-w3-opt").classList.add("selected");
      });
    });

    document.getElementById("btnSubmitW4Quiz").addEventListener("click", () => {
      let score = 0;
      let total = questions.length;

      questions.forEach(q => {
        const card = document.getElementById(`card-${q.id}`);
        const feedback = document.getElementById(`feedback-${q.id}`);
        const selected = document.querySelector(`input[name="${q.id}"]:checked`);

        feedback.style.display = "block";
        card.classList.remove("correct", "wrong");

        if (selected) {
          const chosenIdx = parseInt(selected.value, 10);
          const isCorrect = q.options[chosenIdx].correct;

          if (isCorrect) {
            score++;
            card.classList.add("correct");
            feedback.innerHTML = `
              <div class="glass-callout" style="border-color: rgba(16,185,129,0.5); background: rgba(16,185,129,0.08);">
                <span class="text-success"><i class="fas fa-check-circle"></i> <strong>Jawaban Benar!</strong></span>
                <p class="mt-1" style="font-size: 13px;">${q.explanation}</p>
              </div>
            `;
          } else {
            card.classList.add("wrong");
            feedback.innerHTML = `
              <div class="glass-callout" style="border-color: rgba(239,68,68,0.5); background: rgba(239,68,68,0.08);">
                <span class="text-danger"><i class="fas fa-times-circle"></i> <strong>Jawaban Kurang Tepat.</strong></span>
                <p class="mt-1" style="font-size: 13px;">${q.explanation}</p>
              </div>
            `;
          }
        } else {
          feedback.innerHTML = `
            <div class="glass-callout text-warning" style="font-size: 12.5px;">
              <i class="fas fa-exclamation-circle"></i> Anda belum memilih jawaban untuk soal ini.
            </div>
          `;
        }
      });

      const percentage = Math.round((score / total) * 100);
      const passed = percentage >= 80;
      const summaryBox = document.getElementById("w4QuizSummaryBox");

      summaryBox.innerHTML = `
        <div class="diagram-box" style="border-color: ${passed ? 'var(--accent-emerald)' : 'var(--accent-gold)'};">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
            <div>
              <span class="pill-tag" style="background: ${passed ? 'rgba(16,185,129,0.2)' : 'rgba(245,175,25,0.2)'}; color: ${passed ? 'var(--accent-emerald)' : 'var(--accent-gold)'};">
                <i class="fas ${passed ? 'fa-check-double' : 'fa-award'}"></i> ${passed ? 'KOMPETEN (LULUS SUB-CPMK)' : 'PERLU EVALUASI'}
              </span>
              <h3 style="margin-top: 8px; font-size: 20px;">Skor Anda: ${score} dari ${total} Soal (${percentage}%)</h3>
              <p class="text-muted" style="font-size: 13px;">Standar Capaian Sub-CPMK Pertemuan 4 ITERA: Minimal 80% ketepatan konsep K-Map.</p>
            </div>
            <div style="font-size: 32px; font-weight: 800; font-family: var(--font-mono); color: ${passed ? 'var(--accent-emerald)' : 'var(--accent-gold)'};">
              ${percentage}%
            </div>
          </div>
        </div>
      `;

      summaryBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    document.getElementById("btnResetW4Quiz").addEventListener("click", () => {
      document.getElementById("w4QuizForm").reset();
      container.querySelectorAll(".quiz-w3-opt").forEach(l => l.classList.remove("selected"));
      container.querySelectorAll(".quiz-w3-card").forEach(c => c.classList.remove("correct", "wrong"));
      container.querySelectorAll(".quiz-feedback-box").forEach(f => {
        f.style.display = "none";
        f.innerHTML = "";
      });
      document.getElementById("w4QuizSummaryBox").innerHTML = "";
    });
  }

  /* ==========================================================================
     8. SIMULATOR INTERAKTIF MINGGU 6: MULTILEVEL NAND/NOR & MULTIPLEXER (ITERA)
     ========================================================================== */
  renderWeek6MuxSimulator(container) {
    container.innerHTML = `
      <div class="luxury-content-card simulator-panel">
        <div class="content-header">
          <span class="badge-accent"><i class="fas fa-microchip"></i> Lab Virtual Pertemuan 06 ITERA</span>
          <h2>Simulator Interaktif: Multiplexer (MUX) &amp; Gerbang Universal Multilevel</h2>
          <p class="subtitle">Eksplorasi prinsip kerja Multiplexer sebagai Data Selector (Slide 18-21), routing sinyal biner real-time, serta sintesis fungsi logika ke gerbang universal NAND &amp; NOR bertingkat (Slide 6-16).</p>
        </div>

        <!-- Tab Selector Simulator -->
        <div class="sim-tab-controls mb-4">
          <button class="sim-tab-btn ${this.w6SimTab === 'mux' ? 'active' : ''}" data-tab="mux">
            <i class="fas fa-random"></i> <span>1. Virtual Multiplexer Lab (MUX 2:1, 4:1, 8:1 - Slide 18-21)</span>
          </button>
          <button class="sim-tab-btn ${this.w6SimTab === 'universal' ? 'active' : ''}" data-tab="universal">
            <i class="fas fa-network-wired"></i> <span>2. Multilevel NAND/NOR Logic Synthesizer (Slide 6-16)</span>
          </button>
        </div>

        <div id="w6MuxSimTabBody"></div>
      </div>
    `;

    // Tab button events
    container.querySelectorAll(".sim-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.w6SimTab = btn.getAttribute("data-tab");
        container.querySelectorAll(".sim-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.renderWeek6MuxActiveTab();
      });
    });

    this.renderWeek6MuxActiveTab();
  }

  renderWeek6MuxActiveTab() {
    const tabBody = document.getElementById("w6MuxSimTabBody");
    if (!tabBody) return;

    if (this.w6SimTab === "mux") {
      this.drawWeek6MuxContent(tabBody);
    } else if (this.w6SimTab === "universal") {
      this.drawWeek6UniversalContent(tabBody);
    }
  }

  /* --------------------------------------------------------------------------
     A. VIRTUAL MULTIPLEXER LAB (MUX 2:1, 4:1, 8:1)
     -------------------------------------------------------------------------- */
  drawWeek6MuxContent(container) {
    const muxType = this.w6MuxType; // "2to1", "4to1", "8to1"
    let numInputs = 4;
    let numSelects = 2;

    if (muxType === "2to1") {
      numInputs = 2;
      numSelects = 1;
    } else if (muxType === "4to1") {
      numInputs = 4;
      numSelects = 2;
    } else if (muxType === "8to1") {
      numInputs = 8;
      numSelects = 3;
    }

    // Hitung index terpilih berdasarkan select lines: [S0, S1, S2]
    let selectedIndex = 0;
    if (numSelects === 1) {
      selectedIndex = this.w6MuxSelect[0];
    } else if (numSelects === 2) {
      selectedIndex = (this.w6MuxSelect[1] * 2) + this.w6MuxSelect[0];
    } else if (numSelects === 3) {
      selectedIndex = (this.w6MuxSelect[2] * 4) + (this.w6MuxSelect[1] * 2) + this.w6MuxSelect[0];
    }

    // Enable strobe check: if disabled, output Y is 0
    const isEnabled = this.w6MuxEnable === 1;
    const selectedDataVal = this.w6MuxData[selectedIndex];
    const outputY = isEnabled ? selectedDataVal : 0;

    // Representasi biner select lines
    let selectBinaryStr = "";
    if (numSelects === 1) selectBinaryStr = `${this.w6MuxSelect[0]}`;
    else if (numSelects === 2) selectBinaryStr = `${this.w6MuxSelect[1]}${this.w6MuxSelect[0]}`;
    else if (numSelects === 3) selectBinaryStr = `${this.w6MuxSelect[2]}${this.w6MuxSelect[1]}${this.w6MuxSelect[0]}`;

    container.innerHTML = `
      <div class="glass-callout mb-4">
        <div class="callout-icon"><i class="fas fa-random"></i></div>
        <div class="callout-body">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <h4 style="margin:0;">Konfigurasi Multiplexer (Data Selector)</h4>
            <span class="pill-tag"><i class="fas fa-microchip"></i> Teori Slide 18 - 21 ITERA</span>
          </div>
          <p class="mt-1" style="font-size: 13px;">
            Multiplexer menyalurkan 1 data dari <strong>2<sup>k</sup> saluran input</strong> ke <strong>1 output tunggal</strong> berdasarkan kode biner pada <strong>k jalur Select Line (S)</strong>.
          </p>
        </div>
      </div>

      <!-- Controls: MUX Type Selector & Strobe Enable -->
      <div class="grid-2-cols mb-4" style="align-items: center;">
        <div class="form-group">
          <label style="font-weight: 700;"><i class="fas fa-layer-group"></i> Pilih Ukuran MUX (2<sup>k</sup>:1):</label>
          <div class="base-selector-pills mt-2">
            <button class="base-btn ${muxType === '2to1' ? 'active' : ''}" data-muxtype="2to1">
              <i class="fas fa-code-branch"></i> 2:1 MUX (1 Select)
            </button>
            <button class="base-btn ${muxType === '4to1' ? 'active' : ''}" data-muxtype="4to1">
              <i class="fas fa-network-wired"></i> 4:1 MUX (2 Select)
            </button>
            <button class="base-btn ${muxType === '8to1' ? 'active' : ''}" data-muxtype="8to1">
              <i class="fas fa-project-diagram"></i> 8:1 MUX (3 Select)
            </button>
          </div>
        </div>

        <div class="form-group">
          <label style="font-weight: 700;"><i class="fas fa-power-off"></i> Sinyal Strobe / Enable (E) Pin (Slide 21):</label>
          <div class="mt-2" style="display: flex; gap: 10px;">
            <button class="btn-pill-action" id="btnToggleEnable" style="background: ${isEnabled ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)'}; border-color: ${isEnabled ? 'var(--accent-emerald)' : 'var(--accent-ruby)'}; color: ${isEnabled ? 'var(--accent-emerald)' : 'var(--accent-ruby)'}; padding: 9px 18px; border-radius: var(--radius-md); font-weight: 700; cursor: pointer;">
              <i class="fas ${isEnabled ? 'fa-check-circle' : 'fa-ban'}"></i> Enable (E) = ${this.w6MuxEnable} (${isEnabled ? 'AKTIF / ENABLED' : 'NONAKTIF / DISABLED'})
            </button>
          </div>
        </div>
      </div>

      <!-- MUX Interactive Visualizer -->
      <div class="mux-visualizer-container mb-4">
        <!-- Kolom Kiri: Input Data D0 ... Dn -->
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <strong style="font-size: 13px; text-transform: uppercase; color: var(--text-dim);"><i class="fas fa-sign-in-alt"></i> Input Data (D)</strong>
            <span class="pill-tag" style="font-size: 11px;">Klik bit untuk ubah</span>
          </div>

          <div class="mux-channel-grid">
            ${Array.from({ length: numInputs }).map((_, i) => {
              const val = this.w6MuxData[i];
              const isSel = i === selectedIndex;
              return `
                <div class="mux-chan-item ${isSel ? 'selected' : ''}">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <button class="btn-data-toggle" data-channel="${i}" style="width: 38px; height: 38px; border-radius: var(--radius-sm); border: 1px solid ${val === 1 ? 'var(--primary-cyan)' : 'var(--border-subtle)'}; background: ${val === 1 ? 'rgba(0,210,255,0.25)' : 'rgba(11,17,32,0.8)'}; color: ${val === 1 ? 'var(--primary-cyan)' : 'var(--text-dim)'}; font-family: var(--font-mono); font-size: 18px; font-weight: 800; cursor: pointer;">
                      ${val}
                    </button>
                    <div>
                      <div class="chan-label" style="font-size: 13px; font-family: var(--font-mono);">D<sub>${i}</sub></div>
                      <div style="font-size: 11px; color: var(--text-muted);">${isSel ? 'TERPILIH (ROUTED)' : 'Tersedia'}</div>
                    </div>
                  </div>
                  <div>
                    ${isSel ? '<span class="pill-tag" style="background: rgba(0,210,255,0.2); color: var(--primary-cyan); font-size: 11px;"><i class="fas fa-arrow-right"></i> ACTIVE</span>' : ''}
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <!-- Kolom Tengah: Simbol IC MUX & Select Lines -->
        <div class="mux-symbol-area">
          <div class="mux-trapezoid">
            <div class="mux-trapezoid-label">${muxType === '2to1' ? '2 : 1' : muxType === '4to1' ? '4 : 1' : '8 : 1'} MUX</div>
            <div class="mux-trapezoid-sub">Data Selector</div>
            <div class="mux-route-active">
              ${isEnabled ? `<i class="fas fa-check-circle"></i> D<sub>${selectedIndex}</sub> &rarr; Y` : `<i class="fas fa-ban"></i> DISABLED (E=0)`}
            </div>
          </div>

          <!-- Select Line Input Controls (Masuk dari bawah IC MUX) -->
          <div style="margin-top: 18px; text-align: center; width: 100%;">
            <div style="font-size: 12px; font-weight: 700; color: var(--text-dim); text-transform: uppercase; margin-bottom: 8px;">
              <i class="fas fa-sliders-h"></i> Jalur Kontrol Pemilih (Select Lines S):
            </div>
            <div class="mux-select-panel">
              ${numSelects === 3 ? `
                <div class="mux-select-pill ${this.w6MuxSelect[2] === 1 ? 'active' : ''}" data-selidx="2">
                  <span style="font-size: 11px; color: var(--text-muted);">S₂ (MSB)</span>
                  <strong style="font-size: 20px; font-family: var(--font-mono);">${this.w6MuxSelect[2]}</strong>
                </div>
              ` : ''}
              ${numSelects >= 2 ? `
                <div class="mux-select-pill ${this.w6MuxSelect[1] === 1 ? 'active' : ''}" data-selidx="1">
                  <span style="font-size: 11px; color: var(--text-muted);">S₁ ${numSelects === 2 ? '(MSB)' : ''}</span>
                  <strong style="font-size: 20px; font-family: var(--font-mono);">${this.w6MuxSelect[1]}</strong>
                </div>
              ` : ''}
              <div class="mux-select-pill ${this.w6MuxSelect[0] === 1 ? 'active' : ''}" data-selidx="0">
                <span style="font-size: 11px; color: var(--text-muted);">S₀ (LSB)</span>
                <strong style="font-size: 20px; font-family: var(--font-mono);">${this.w6MuxSelect[0]}</strong>
              </div>
            </div>
            <div class="mt-2 text-muted" style="font-size: 12px;">
              Alamat Biner: <code style="color: var(--accent-gold); font-size: 13px;">${selectBinaryStr}₂</code> &equiv; Index Kanal <strong>D<sub>${selectedIndex}</sub></strong>
            </div>
          </div>
        </div>

        <!-- Kolom Kanan: Output Terpadu Y & Indikator LED -->
        <div class="mux-output-panel">
          <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--text-dim); margin-bottom: 12px;">
            <i class="fas fa-lightbulb"></i> Output Tunggal (Y)
          </div>

          <div class="mux-led-bulb ${outputY === 1 ? 'on' : 'off'}">
            ${outputY}
          </div>

          <div style="font-size: 18px; font-weight: 800; font-family: var(--font-mono); margin-top: 4px;">
            Y = ${outputY}
          </div>

          <div class="mt-2">
            <span class="pill-tag" style="background: ${outputY === 1 ? 'rgba(16,185,129,0.2)' : 'rgba(148,163,184,0.1)'}; color: ${outputY === 1 ? 'var(--accent-emerald)' : 'var(--text-muted)'};">
              <i class="fas ${outputY === 1 ? 'fa-bolt' : 'fa-moon'}"></i> ${outputY === 1 ? 'LOGIKA TINGGI (HIGH)' : 'LOGIKA RENDAH (LOW)'}
            </span>
          </div>

          <div class="mt-3 text-muted" style="font-size: 12px; line-height: 1.4;">
            ${isEnabled ? `Sinyal keluaran Y mengikuti nilai saluran <strong>D<sub>${selectedIndex}</sub></strong>.` : `Pin Strobe E bernilai 0, keluaran Y dipaksa LOW (0).`}
          </div>
        </div>
      </div>

      <!-- Detail Rumus & Evaluasi Minterm Sesuai Slide 18-21 -->
      <div class="grid-2-cols mb-4">
        <!-- Card 1: Persamaan Boolean & Active Term -->
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-square-root-alt"></i></div>
          <h3>Persamaan Boolean Output MUX (Slide 18, 19, 20)</h3>
          <p class="mt-1" style="font-size: 13px;">
            Persamaan umum MUX 2<sup>k</sup>:1 adalah <code>Y = &sum; Dᵢ &middot; mᵢ(S)</code>. Suku yang aktif dievaluasi langsung:
          </p>

          <div class="code-box-study mt-2" style="font-size: 13px;">
            ${muxType === '2to1' ? `
              <code>Y = S̄ &middot; D₀ + S &middot; D₁</code><br><br>
              ${selectedIndex === 0 ? '<strong style="color:var(--accent-gold);">&#9658; Suku Aktif (S=0): Y = (1)&middot;D₀ + (0)&middot;D₁ = D₀</strong>' : '<strong style="color:var(--accent-gold);">&#9658; Suku Aktif (S=1): Y = (0)&middot;D₀ + (1)&middot;D₁ = D₁</strong>'}
            ` : muxType === '4to1' ? `
              <code>Y = S̄₁S̄₀D₀ + S̄₁S₀D₁ + S₁S̄₀D₂ + S₁S₀D₃</code><br><br>
              <strong style="color:var(--accent-gold);">&#9658; Minterm Aktif (S₁S₀=${selectBinaryStr}₂): m<sub>${selectedIndex}</sub> = 1 &rarr; Y = D<sub>${selectedIndex}</sub> = ${selectedDataVal}</strong>
            ` : `
              <code>Y = &sum;₇ⁱ⁼⁰ mᵢ(S₂, S₁, S₀) &middot; Dᵢ</code><br><br>
              <strong style="color:var(--accent-gold);">&#9658; Minterm Aktif (S₂S₁S₀=${selectBinaryStr}₂): m<sub>${selectedIndex}</sub> = 1 &rarr; Y = D<sub>${selectedIndex}</sub> = ${selectedDataVal}</strong>
            `}
          </div>
        </div>

        <!-- Card 2: Tabel Kebenaran Real-Time -->
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-table"></i></div>
          <h3>Tabel Kebenaran Operasional MUX</h3>
          <p class="mt-1" style="font-size: 12.5px;">Baris yang sedang aktif disorot dengan warna cyan sesuai posisi select switch:</p>

          <div style="overflow-x: auto; max-height: 220px;" class="mt-2">
            <table class="truth-table" style="font-size: 12px; width: 100%;">
              <thead>
                <tr>
                  ${numSelects === 3 ? '<th>S₂</th>' : ''}
                  ${numSelects >= 2 ? '<th>S₁</th>' : ''}
                  <th>S₀</th>
                  <th>Kanal Terpilih</th>
                  <th>Nilai Dᵢ</th>
                  <th>Output (Y)</th>
                </tr>
              </thead>
              <tbody>
                ${Array.from({ length: numInputs }).map((_, rIdx) => {
                  const isCurRow = rIdx === selectedIndex;
                  const b0 = rIdx & 1;
                  const b1 = (rIdx >> 1) & 1;
                  const b2 = (rIdx >> 2) & 1;
                  const curD = this.w6MuxData[rIdx];
                  const curY = isEnabled ? curD : 0;
                  return `
                    <tr style="${isCurRow ? 'background: rgba(0, 210, 255, 0.18); font-weight: 700;' : ''}">
                      ${numSelects === 3 ? `<td>${b2}</td>` : ''}
                      ${numSelects >= 2 ? `<td>${b1}</td>` : ''}
                      <td>${b0}</td>
                      <td><span class="pill-tag" style="font-size: 10px;">D<sub>${rIdx}</sub></span></td>
                      <td style="font-family: var(--font-mono);">${curD}</td>
                      <td style="font-family: var(--font-mono); color: ${curY === 1 ? 'var(--accent-emerald)' : 'var(--text-muted)'}; font-weight: 800;">${curY}</td>
                    </tr>
                  `;
                }).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    // Attach Mux Controls Events
    container.querySelectorAll("button[data-muxtype]").forEach(b => {
      b.addEventListener("click", () => {
        this.w6MuxType = b.getAttribute("data-muxtype");
        this.drawWeek6MuxContent(container);
      });
    });

    const btnEnable = document.getElementById("btnToggleEnable");
    if (btnEnable) {
      btnEnable.addEventListener("click", () => {
        this.w6MuxEnable = this.w6MuxEnable === 1 ? 0 : 1;
        this.drawWeek6MuxContent(container);
      });
    }

    container.querySelectorAll(".btn-data-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const ch = parseInt(btn.getAttribute("data-channel"), 10);
        this.w6MuxData[ch] = this.w6MuxData[ch] === 1 ? 0 : 1;
        this.drawWeek6MuxContent(container);
      });
    });

    container.querySelectorAll(".mux-select-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        const sIdx = parseInt(pill.getAttribute("data-selidx"), 10);
        this.w6MuxSelect[sIdx] = this.w6MuxSelect[sIdx] === 1 ? 0 : 1;
        this.drawWeek6MuxContent(container);
      });
    });
  }

  /* --------------------------------------------------------------------------
     B. MULTILEVEL NAND/NOR LOGIC SYNTHESIZER (SLIDE 6-16)
     -------------------------------------------------------------------------- */
  drawWeek6UniversalContent(container) {
    const preset = this.w6UnivPreset || "sop1";
    const inputs = this.w6UnivInputs;

    let title = "";
    let originalExpr = "";
    let universalExpr = "";
    let gateType = "NAND";
    let origResult = 0;
    let synthResult = 0;
    let stepsData = [];

    const A = inputs.A;
    const B = inputs.B;
    const C = inputs.C;
    const D = inputs.D;

    if (preset === "not") {
      title = "NOT Gate dari Gerbang NAND (Slide 7)";
      originalExpr = "Y = Ā";
      universalExpr = "Y = (A · A)' = Ā";
      gateType = "NAND";
      origResult = A === 0 ? 1 : 0;
      synthResult = !(A && A) ? 1 : 0;
      stepsData = [
        { level: "Level 1 (NAND)", desc: `Kedua input NAND dihubungkan bersama ke A: (${A} &middot; ${A})'`, val: synthResult }
      ];
    } else if (preset === "and") {
      title = "AND Gate dari Gerbang NAND (Slide 7)";
      originalExpr = "Y = A · B";
      universalExpr = "Y = ((A · B)')' = A · B";
      gateType = "NAND";
      origResult = (A && B) ? 1 : 0;
      const stage1 = !(A && B) ? 1 : 0;
      synthResult = !(stage1 && stage1) ? 1 : 0;
      stepsData = [
        { level: "Level 1 (NAND 1)", desc: `NAND input A dan B: (${A} &middot; ${B})'`, val: stage1 },
        { level: "Level 2 (Inverter via NAND 2)", desc: `Inversi hasil stage 1: (${stage1} &middot; ${stage1})'`, val: synthResult }
      ];
    } else if (preset === "or") {
      title = "OR Gate dari Gerbang NAND via Hukum De Morgan (Slide 7 & 10)";
      originalExpr = "Y = A + B";
      universalExpr = "Y = (Ā · B̄)' = A + B";
      gateType = "NAND";
      origResult = (A || B) ? 1 : 0;
      const notA = !(A && A) ? 1 : 0;
      const notB = !(B && B) ? 1 : 0;
      synthResult = !(notA && notB) ? 1 : 0;
      stepsData = [
        { level: "Level 1 (NAND Inverter)", desc: `Ā = (${A}&middot;${A})' = ${notA}, B̄ = (${B}&middot;${B})' = ${notB}`, val: `${notA}, ${notB}` },
        { level: "Level 2 (NAND Output)", desc: `(Ā &middot; B̄)' = (${notA} &middot; ${notB})'`, val: synthResult }
      ];
    } else if (preset === "xor") {
      title = "XOR Gate dari Gerbang NAND (Slide 7)";
      originalExpr = "Y = A ⊕ B = A B̄ + Ā B";
      universalExpr = "Y = ((A · (A · B)')' · (B · (A · B)')')'";
      gateType = "NAND";
      origResult = (A ^ B);
      const nandAB = !(A && B) ? 1 : 0;
      const term1 = !(A && nandAB) ? 1 : 0;
      const term2 = !(B && nandAB) ? 1 : 0;
      synthResult = !(term1 && term2) ? 1 : 0;
      stepsData = [
        { level: "Level 1 (NAND Pusat)", desc: `(A &middot; B)' = (${A} &middot; ${B})'`, val: nandAB },
        { level: "Level 2 (NAND Cabang)", desc: `T1 = (${A} &middot; ${nandAB})' = ${term1}, T2 = (${B} &middot; ${nandAB})' = ${term2}`, val: `${term1}, ${term2}` },
        { level: "Level 3 (NAND Akhir)", desc: `(T1 &middot; T2)' = (${term1} &middot; ${term2})'`, val: synthResult }
      ];
    } else if (preset === "sop1") {
      title = "Contoh Slide 9 & 12: F = A + BC (Multilevel NAND)";
      originalExpr = "F = A + (B · C)";
      universalExpr = "F = (Ā · (B · C)')'";
      gateType = "NAND";
      origResult = (A || (B && C)) ? 1 : 0;
      const nandBC = !(B && C) ? 1 : 0;
      const notA = !(A && A) ? 1 : 0;
      synthResult = !(notA && nandBC) ? 1 : 0;
      stepsData = [
        { level: "Level 1: Suku AND & Inverter", desc: `NAND(B,C) = (${B}&middot;${C})' = ${nandBC} | Invert A = (${A}&middot;${A})' = ${notA}`, val: `BC'=${nandBC}, A'=${notA}` },
        { level: "Level 2: Gerbang Output NAND", desc: `F = (A' &middot; (BC)')' = (${notA} &middot; ${nandBC})'`, val: synthResult }
      ];
    } else if (preset === "sop2") {
      title = "Contoh Slide 11 & Latihan 3: F = A B̄ + BC (Multilevel NAND 3 Level)";
      originalExpr = "F = (A · B̄) + (B · C)";
      universalExpr = "F = ((A · B̄)' · (B · C)')'";
      gateType = "NAND";
      const notB = !(B && B) ? 1 : 0;
      const termABbar = (A && notB) ? 1 : 0;
      const termBC = (B && C) ? 1 : 0;
      origResult = (termABbar || termBC) ? 1 : 0;
      const nand1 = !(A && notB) ? 1 : 0;
      const nand2 = !(B && C) ? 1 : 0;
      synthResult = !(nand1 && nand2) ? 1 : 0;
      stepsData = [
        { level: "Level 1: Inverter B̄", desc: `B̄ = (${B}&middot;${B})'`, val: notB },
        { level: "Level 2: Suku NAND", desc: `NAND₁(A, B̄) = (${A}&middot;${notB})' = ${nand1} | NAND₂(B, C) = (${B}&middot;${C})' = ${nand2}`, val: `T1=${nand1}, T2=${nand2}` },
        { level: "Level 3: Output NAND (De Morgan OR)", desc: `F = (T1 &middot; T2)' = (${nand1} &middot; ${nand2})'`, val: synthResult }
      ];
    } else if (preset === "pos1") {
      title = "Desain Gerbang NOR Slide 14: F = (A + B)(C + D)";
      originalExpr = "F = (A + B) · (C + D)";
      universalExpr = "F = ((A + B)' + (C + D)')'";
      gateType = "NOR";
      origResult = ((A || B) && (C || D)) ? 1 : 0;
      const nor1 = !(A || B) ? 1 : 0;
      const nor2 = !(C || D) ? 1 : 0;
      synthResult = !(nor1 || nor2) ? 1 : 0;
      stepsData = [
        { level: "Level 1: Suku NOR", desc: `NOR₁(A, B) = (${A}+${B})' = ${nor1} | NOR₂(C, D) = (${C}+${D})' = ${nor2}`, val: `N1=${nor1}, N2=${nor2}` },
        { level: "Level 2: Output NOR (De Morgan AND)", desc: `F = (N1 + N2)' = (${nor1} + ${nor2})'`, val: synthResult }
      ];
    }

    container.innerHTML = `
      <div class="glass-callout mb-4">
        <div class="callout-icon"><i class="fas fa-network-wired"></i></div>
        <div class="callout-body">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <h4 style="margin:0;">Sintesis Rangkaian Logika Bertingkat (Multilevel Gate Synthesizer)</h4>
            <span class="pill-tag"><i class="fas fa-book-open"></i> Slide 6 - 16 ITERA</span>
          </div>
          <p class="mt-1" style="font-size: 13px;">
            Pilih fungsi logika atau studi kasus dari slide resmi perkuliahan, ubah input variabel secara bebas, dan saksikan perambatan logika sinyal step-by-step membuktikan ekuivalensi bentuk gerbang universal!
          </p>
        </div>
      </div>

      <!-- Preset Selector Buttons -->
      <div class="form-group mb-4">
        <label style="font-weight: 700;"><i class="fas fa-list-ul"></i> Pilih Preset Kasus / Pembuktian Teorema:</label>
        <div class="base-selector-pills mt-2">
          <button class="base-btn ${preset === 'not' ? 'active' : ''}" data-univpreset="not">NOT via NAND (Slide 7)</button>
          <button class="base-btn ${preset === 'and' ? 'active' : ''}" data-univpreset="and">AND via NAND (Slide 7)</button>
          <button class="base-btn ${preset === 'or' ? 'active' : ''}" data-univpreset="or">OR via NAND (Slide 7)</button>
          <button class="base-btn ${preset === 'xor' ? 'active' : ''}" data-univpreset="xor">XOR via NAND (Slide 7)</button>
          <button class="base-btn ${preset === 'sop1' ? 'active' : ''}" data-univpreset="sop1">F = A + BC (Slide 9 & 12)</button>
          <button class="base-btn ${preset === 'sop2' ? 'active' : ''}" data-univpreset="sop2">F = AB̄ + BC (Slide 11 & Latihan 3)</button>
          <button class="base-btn ${preset === 'pos1' ? 'active' : ''}" data-univpreset="pos1">F = (A+B)(C+D) NOR (Slide 14)</button>
        </div>
      </div>

      <!-- Interactive Inputs -->
      <div class="luxury-content-card mb-4" style="background: rgba(15,23,42,0.6);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 12px;">
          <div>
            <span class="badge-accent" style="font-size: 11px;">Studi Kasus: ${gateType}-Only Network</span>
            <h3 style="margin-top: 4px; font-size: 17px;">${title}</h3>
          </div>
          <span class="pill-tag" style="background: rgba(0,210,255,0.15); color: var(--primary-cyan);">
            Basis: Gerbang Universal ${gateType}
          </span>
        </div>

        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;" class="mt-2">
          <span style="font-size: 13px; font-weight: 700; color: var(--text-dim); text-transform: uppercase;"><i class="fas fa-sliders-h"></i> Input Logika:</span>
          
          <button class="btn-univ-input" data-var="A" style="background: ${inputs.A === 1 ? 'rgba(0,210,255,0.2)' : 'rgba(11,17,32,0.8)'}; border: 1px solid ${inputs.A === 1 ? 'var(--primary-cyan)' : 'var(--border-subtle)'}; color: ${inputs.A === 1 ? 'var(--primary-cyan)' : 'var(--text-dim)'}; padding: 8px 16px; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 15px; font-weight: 700; cursor: pointer;">
            A = ${inputs.A}
          </button>

          ${preset !== 'not' ? `
            <button class="btn-univ-input" data-var="B" style="background: ${inputs.B === 1 ? 'rgba(0,210,255,0.2)' : 'rgba(11,17,32,0.8)'}; border: 1px solid ${inputs.B === 1 ? 'var(--primary-cyan)' : 'var(--border-subtle)'}; color: ${inputs.B === 1 ? 'var(--primary-cyan)' : 'var(--text-dim)'}; padding: 8px 16px; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 15px; font-weight: 700; cursor: pointer;">
              B = ${inputs.B}
            </button>
          ` : ''}

          ${(preset === 'sop1' || preset === 'sop2' || preset === 'pos1') ? `
            <button class="btn-univ-input" data-var="C" style="background: ${inputs.C === 1 ? 'rgba(0,210,255,0.2)' : 'rgba(11,17,32,0.8)'}; border: 1px solid ${inputs.C === 1 ? 'var(--primary-cyan)' : 'var(--border-subtle)'}; color: ${inputs.C === 1 ? 'var(--primary-cyan)' : 'var(--text-dim)'}; padding: 8px 16px; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 15px; font-weight: 700; cursor: pointer;">
              C = ${inputs.C}
            </button>
          ` : ''}

          ${preset === 'pos1' ? `
            <button class="btn-univ-input" data-var="D" style="background: ${inputs.D === 1 ? 'rgba(0,210,255,0.2)' : 'rgba(11,17,32,0.8)'}; border: 1px solid ${inputs.D === 1 ? 'var(--primary-cyan)' : 'var(--border-subtle)'}; color: ${inputs.D === 1 ? 'var(--primary-cyan)' : 'var(--text-dim)'}; padding: 8px 16px; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 15px; font-weight: 700; cursor: pointer;">
              D = ${inputs.D}
            </button>
          ` : ''}
        </div>
      </div>

      <!-- Multilevel Flow Pipeline Visualization -->
      <div class="univ-flow-container mb-4">
        ${stepsData.map((st) => `
          <div class="univ-level-card">
            <span class="univ-level-badge">${st.level}</span>
            <div style="font-size: 13.5px; line-height: 1.5; margin-bottom: 10px;">${st.desc}</div>
            <div style="background: rgba(0,0,0,0.3); padding: 8px 12px; border-radius: var(--radius-sm); display: flex; justify-content: space-between; align-items: center;">
              <span class="text-muted" style="font-size: 12px;">Sinyal Parsial:</span>
              <strong style="font-family: var(--font-mono); font-size: 16px; color: var(--accent-gold);">${st.val}</strong>
            </div>
          </div>
        `).join("")}

        <!-- Output Level Final Card -->
        <div class="univ-level-card" style="border-color: var(--accent-emerald); background: rgba(16,185,129,0.06);">
          <span class="univ-level-badge" style="background: rgba(16,185,129,0.2); color: var(--accent-emerald);">HASIL AKHIR (${gateType})</span>
          <div style="font-size: 13px; margin-bottom: 8px;">Keluaran Rangkaian Multilevel:</div>
          <div style="font-family: var(--font-mono); font-size: 26px; font-weight: 800; color: var(--accent-emerald);">
            F = ${synthResult}
          </div>
          <div class="mt-2 text-muted" style="font-size: 12px;">
            Identik dengan fungsi asli: <code>${originalExpr} = ${origResult}</code>
          </div>
        </div>
      </div>

      <!-- Verification Proof Callout -->
      <div class="diagram-box" style="border-color: var(--accent-emerald);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <div>
            <span class="pill-tag" style="background: rgba(16,185,129,0.2); color: var(--accent-emerald);">
              <i class="fas fa-check-double"></i> PEMBUKTIAN MATEMATIS DE MORGAN IDENTIK (VALID)
            </span>
            <div class="mt-2" style="font-size: 14.5px;">
              Nilai Fungsi Asli: <strong style="font-family: var(--font-mono); color: var(--primary-cyan);">${originalExpr} = ${origResult}</strong> &harr; 
              Nilai Rangkaian Multilevel ${gateType}: <strong style="font-family: var(--font-mono); color: var(--accent-emerald);">${universalExpr} = ${synthResult}</strong>
            </div>
            <p class="text-muted mt-1" style="font-size: 12.5px;">
              Terbukti bahwa setiap gerbang logika dan bentuk SOP/POS dapat diwujudkan murni 100% menggunakan gerbang <strong>${gateType}</strong> bertingkat sesuai silabus Slide 6 - 16.
            </p>
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll("button[data-univpreset]").forEach(b => {
      b.addEventListener("click", () => {
        this.w6UnivPreset = b.getAttribute("data-univpreset");
        this.drawWeek6UniversalContent(container);
      });
    });

    container.querySelectorAll(".btn-univ-input").forEach(b => {
      b.addEventListener("click", () => {
        const v = b.getAttribute("data-var");
        this.w6UnivInputs[v] = this.w6UnivInputs[v] === 1 ? 0 : 1;
        this.drawWeek6UniversalContent(container);
      });
    });
  }

  /* ==========================================================================
     9. EVALUASI KUIS MANDIRI MINGGU 6: MULTILEVEL NAND/NOR & MUX (ITERA)
     ========================================================================== */
  renderWeek6MuxQuiz(container) {
    const questions = [
      {
        id: "q1_w6m",
        title: "Soal 1: Definisi & Alasan Gerbang Universal (Slide 6)",
        question: "Mengapa gerbang <strong>NAND</strong> dan <strong>NOR</strong> diklasifikasikan sebagai <strong>gerbang universal</strong> dan diproduksi massal dalam IC digital?",
        options: [
          { text: "Karena gerbang NAND dan NOR beroperasi pada kecepatan clock tak hingga tanpa delay propagasi", correct: false },
          { text: "Karena cukup dengan satu jenis gerbang saja (hanya NAND atau hanya NOR), kita sudah bisa menyusun seluruh fungsi logika dasar (AND, OR, NOT, XOR, XNOR)", correct: true },
          { text: "Karena kedua gerbang tersebut hanya membutuhkan tegangan listrik 0 Volt untuk bekerja", correct: false },
          { text: "Karena hanya gerbang NAND yang dapat terhubung langsung ke memori RAM komputer", correct: false }
        ],
        explanation: "Sesuai Slide 6: Cukup dengan satu jenis gerbang saja, yaitu NAND atau NOR, kita sudah bisa menyusun rangkaian untuk menghasilkan fungsi logika apapun (AND, OR, NOT, XOR). Inilah sebabnya gerbang universal sering diproduksi massal karena fabrikasinya lebih sederhana dan fleksibel."
      },
      {
        id: "q2_w6m",
        title: "Soal 2: Pembuktian Gerbang OR dari NAND via De Morgan (Slide 7 & 10)",
        question: "Berdasarkan Hukum De Morgan pada Slide 7 &amp; 10, bentuk ekuivalen dari fungsi <strong>OR (A + B)</strong> jika hanya menggunakan gerbang <strong>NAND</strong> adalah...",
        options: [
          { text: "Y = A · B (tanpa inverter)", correct: false },
          { text: "Y = (Ā · B̄)' (NAND dari input-input yang telah diinvers)", correct: true },
          { text: "Y = Ā + B̄", correct: false },
          { text: "Y = (A + B)'", correct: false }
        ],
        explanation: "Sesuai Slide 7 & 10: Dengan hukum De Morgan dan double negation: A + B = ((A + B)')' = (Ā · B̄)'. Artinya fungsi OR diimplementasikan dengan menginvers masing-masing input A dan B (menggunakan NAND berinput tunggal/sama), lalu hasilnya dimasukkan ke gerbang NAND."
      },
      {
        id: "q3_w6m",
        title: "Soal 3: Prinsip Kerja Multiplexer (MUX) sebagai Data Selector (Slide 18)",
        question: "Apa fungsi utama dari rangkaian logika kombinasional <strong>Multiplexer (MUX)</strong> dalam sistem komputer?",
        options: [
          { text: "Mengubah data analog menjadi frekuensi gelombang FM", correct: false },
          { text: "Memilih salah satu dari banyak saluran input data (2ᵏ input) untuk diteruskan ke satu jalur output tunggal berdasarkan nilai biner Select Line (S)", correct: true },
          { text: "Menghapus bit register carry pada tahapan ALU", correct: false },
          { text: "Menggandakan satu input data tunggal menjadi 8 output secara paralel tanpa kontrol", correct: false }
        ],
        explanation: "Sesuai Slide 18: Multiplexer (MUX) adalah rangkaian logika kombinasi yang memilih salah satu dari banyak input data untuk diteruskan ke output tunggal berdasarkan select line (S). Karena fungsinya ini, MUX juga dikenal sebagai 'data selector'."
      },
      {
        id: "q4_w6m",
        title: "Soal 4: Jumlah Select Line pada Multiplexer 8:1 (Slide 18 & 21)",
        question: "Berdasarkan rumus umum arsitektur MUX 2ᵏ:1 pada Slide 18 &amp; 21, sebuah <strong>Multiplexer 8:1</strong> memiliki berapa jalur <strong>Select Line (S)</strong>?",
        options: [
          { text: "1 select line (S₀)", correct: false },
          { text: "2 select line (S₁, S₀)", correct: false },
          { text: "3 select line (S₂, S₁, S₀) karena 2³ = 8", correct: true },
          { text: "8 select line (S₀ s.d. S₇)", correct: false }
        ],
        explanation: "Sesuai Slide 18 & 21: MUX memiliki 2ᵏ input data, di mana k adalah jumlah select line. Untuk MUX 8:1, 8 = 2³ sehingga dibutuhkan k = 3 select line (S₂, S₁, S₀) yang menghasilkan 2³ = 8 kombinasi biner (000₂ sampai 111₂)."
      },
      {
        id: "q5_w6m",
        title: "Soal 5: Persamaan Boolean Output MUX 4:1 (Slide 20)",
        question: "Persamaan aljabar Boolean yang benar untuk keluaran <strong>Y</strong> pada <strong>Multiplexer 4:1</strong> dengan input D₀, D₁, D₂, D₃ dan select line S₁, S₀ adalah...",
        options: [
          { text: "Y = S₁ · S₀ · (D₀ + D₁ + D₂ + D₃)", correct: false },
          { text: "Y = S̄₁S̄₀D₀ + S̄₁S₀D₁ + S₁S̄₀D₂ + S₁S₀D₃", correct: true },
          { text: "Y = (S₁ + S₀)' · D₀ · D₁", correct: false },
          { text: "Y = D₀ · D₁ · D₂ · D₃", correct: false }
        ],
        explanation: "Sesuai Slide 20: Persamaan output 4:1 MUX adalah penjumlahan perkalian setiap input data dengan minterm select line yang bersesuaian: Y = S̄₁S̄₀D₀ + S̄₁S₀D₁ + S₁S̄₀D₂ + S₁S₀D₃."
      },
      {
        id: "q6_w6m",
        title: "Soal 6: Prosedur Desain Multilevel NAND untuk Fungsi SOP (Slide 8 & 11)",
        question: "Mengapa dalam perancangan rangkaian <strong>Multilevel NAND</strong> untuk fungsi SOP standar (seperti F = AB̄ + BC), suku-suku produk dapat langsung dihubungkan ke gerbang NAND tingkat akhir tanpa inverter tambahan?",
        options: [
          { text: "Karena gerbang NAND tingkat akhir secara fisik otomatis berubah menjadi transistor NPN", correct: false },
          { text: "Karena menurut De Morgan: NAND dengan bubbled inputs (input terinvers) ekuivalen secara logika dengan gerbang OR: ((X)' · (Y)')' = X + Y", correct: true },
          { text: "Karena nilai Carry selalu 0 pada operasi perkalian biner", correct: false },
          { text: "Karena rangkaian SOP hanya diperbolehkan memiliki satu level gerbang", correct: false }
        ],
        explanation: "Sesuai Slide 5, 8 & 11: Gerbang NAND tingkat pertama menghasilkan keluaran terinvers (X' dan Y'). Sesuai hukum De Morgan, gerbang NAND tingkat akhir yang menerima input-input terinvers ini akan menjalankan fungsi OR: (X' · Y')' = X + Y, sehingga penggabungan OR antar-suku SOP langsung terealisasi sempurna."
      }
    ];

    container.innerHTML = `
      <div class="luxury-content-card">
        <div class="content-header">
          <span class="badge-accent"><i class="fas fa-award"></i> Evaluasi Mandiri Pertemuan 06 ITERA</span>
          <h2>Kuis Pemahaman: Multilevel NAND, NOR &amp; Multiplexer (MUX)</h2>
          <p class="subtitle">Uji pemahaman materi Pertemuan 6 ITERA: Teorema Gerbang Universal, Pembuktian De Morgan, Prosedur Multilevel NAND/NOR, serta Desain MUX 2:1, 4:1, 8:1. Standar Capaian Sub-CPMK: &ge; 80%.</p>
        </div>

        <form id="w6MuxQuizForm">
          ${questions.map((q) => `
            <div class="quiz-w3-card" id="card-${q.id}">
              <div class="quiz-badge-header">
                <span class="pill-tag">${q.title}</span>
              </div>
              <p class="quiz-qtext mt-2">${q.question}</p>

              <div class="quiz-options-group mt-3">
                ${q.options.map((opt, oIdx) => `
                  <label class="quiz-w3-opt" for="opt-${q.id}-${oIdx}">
                    <input type="radio" name="${q.id}" id="opt-${q.id}-${oIdx}" value="${oIdx}" />
                    <span>${opt.text}</span>
                  </label>
                `).join("")}
              </div>

              <div class="quiz-feedback-box mt-3" id="feedback-${q.id}" style="display: none;"></div>
            </div>
          `).join("")}

          <div style="display: flex; gap: 12px; align-items: center; margin-top: 24px; flex-wrap: wrap;">
            <button type="button" class="btn-convert-action" id="btnSubmitW6MuxQuiz">
              <i class="fas fa-paper-plane"></i> Kirim Jawaban &amp; Evaluasi Nilai M6
            </button>
            <button type="button" class="btn-pill-action" id="btnResetW6MuxQuiz">
              <i class="fas fa-redo"></i> Reset Jawaban
            </button>
          </div>
        </form>

        <div id="w6MuxQuizSummaryBox" class="mt-4"></div>
      </div>
    `;

    container.querySelectorAll(".quiz-w3-opt input").forEach(r => {
      r.addEventListener("change", () => {
        const group = r.closest(".quiz-options-group");
        group.querySelectorAll(".quiz-w3-opt").forEach(l => l.classList.remove("selected"));
        r.closest(".quiz-w3-opt").classList.add("selected");
      });
    });

    document.getElementById("btnSubmitW6MuxQuiz").addEventListener("click", () => {
      let score = 0;
      let total = questions.length;

      questions.forEach(q => {
        const card = document.getElementById(`card-${q.id}`);
        const feedback = document.getElementById(`feedback-${q.id}`);
        const selected = document.querySelector(`input[name="${q.id}"]:checked`);

        feedback.style.display = "block";
        card.classList.remove("correct", "wrong");

        if (selected) {
          const chosenIdx = parseInt(selected.value, 10);
          const isCorrect = q.options[chosenIdx].correct;

          if (isCorrect) {
            score++;
            card.classList.add("correct");
            feedback.innerHTML = `
              <div class="glass-callout" style="border-color: rgba(16,185,129,0.5); background: rgba(16,185,129,0.08);">
                <span class="text-success"><i class="fas fa-check-circle"></i> <strong>Jawaban Benar!</strong></span>
                <p class="mt-1" style="font-size: 13px;">${q.explanation}</p>
              </div>
            `;
          } else {
            card.classList.add("wrong");
            feedback.innerHTML = `
              <div class="glass-callout" style="border-color: rgba(239,68,68,0.5); background: rgba(239,68,68,0.08);">
                <span class="text-danger"><i class="fas fa-times-circle"></i> <strong>Jawaban Kurang Tepat.</strong></span>
                <p class="mt-1" style="font-size: 13px;">${q.explanation}</p>
              </div>
            `;
          }
        } else {
          feedback.innerHTML = `
            <div class="glass-callout text-warning" style="font-size: 12.5px;">
              <i class="fas fa-exclamation-circle"></i> Anda belum memilih jawaban untuk soal ini.
            </div>
          `;
        }
      });

      const percentage = Math.round((score / total) * 100);
      const passed = percentage >= 80;
      const summaryBox = document.getElementById("w6MuxQuizSummaryBox");

      summaryBox.innerHTML = `
        <div class="diagram-box" style="border-color: ${passed ? 'var(--accent-emerald)' : 'var(--accent-gold)'};">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
            <div>
              <span class="pill-tag" style="background: ${passed ? 'rgba(16,185,129,0.2)' : 'rgba(245,175,25,0.2)'}; color: ${passed ? 'var(--accent-emerald)' : 'var(--accent-gold)'};">
                <i class="fas ${passed ? 'fa-check-double' : 'fa-award'}"></i> ${passed ? 'KOMPETEN (LULUS SUB-CPMK M6 ITERA)' : 'PERLU BELAJAR ULANG'}
              </span>
              <h3 style="margin-top: 8px; font-size: 20px;">Skor Evaluasi Pertemuan 6: ${score} dari ${total} Soal (${percentage}%)</h3>
              <p class="text-muted" style="font-size: 13px;">Standar Capaian Sub-CPMK Pertemuan 6 ITERA: Minimal 80% ketepatan konsep Multilevel NAND/NOR &amp; Multiplexer.</p>
            </div>
            <div style="font-size: 34px; font-weight: 800; font-family: var(--font-mono); color: ${passed ? 'var(--accent-emerald)' : 'var(--accent-gold)'};">
              ${percentage}%
            </div>
          </div>
        </div>
      `;

      summaryBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    document.getElementById("btnResetW6MuxQuiz").addEventListener("click", () => {
      document.getElementById("w6MuxQuizForm").reset();
      container.querySelectorAll(".quiz-w3-opt").forEach(l => l.classList.remove("selected"));
      container.querySelectorAll(".quiz-w3-card").forEach(c => c.classList.remove("correct", "wrong"));
      container.querySelectorAll(".quiz-feedback-box").forEach(f => {
        f.style.display = "none";
        f.innerHTML = "";
      });
      document.getElementById("w6MuxQuizSummaryBox").innerHTML = "";
    });
  }

  /* ==========================================================================
     10. SIMULATOR INTERAKTIF MINGGU 5: ADDER, SUBTRACTOR & ALU UNIT
     ========================================================================== */
  renderWeek5Simulator(container) {
    this.w5ActiveSimTab = this.w5ActiveSimTab || "alu";
    container.innerHTML = `
      <div class="luxury-content-card simulator-panel">
        <div class="content-header">
          <span class="badge-accent"><i class="fas fa-microchip"></i> Lab Virtual Pertemuan 05 ITERA</span>
          <h2>Simulator Interaktif Rangkaian Adder &amp; Subtractor</h2>
          <p class="subtitle">Eksplorasi unit aritmatika 4-bit ALU terintegrasi (Slide 31-33), visualisasi gerbang logika dasar (HA, FA, HS, FS), serta perbandingan delay nyata RCA vs CLA.</p>
        </div>

        <!-- Tab Selector Internal Simulator -->
        <div class="sim-tab-controls mb-4">
          <button class="sim-tab-btn ${this.w5ActiveSimTab === 'alu' ? 'active' : ''}" data-tab="alu">
            <i class="fas fa-microchip"></i> <span>1. Unit 4-Bit Adder-Subtractor ALU (Slide 31-33)</span>
          </button>
          <button class="sim-tab-btn ${this.w5ActiveSimTab === 'gates' ? 'active' : ''}" data-tab="gates">
            <i class="fas fa-shapes"></i> <span>2. Simulator Gerbang 1-Bit (HA, FA, HS, FS)</span>
          </button>
          <button class="sim-tab-btn ${this.w5ActiveSimTab === 'delay' ? 'active' : ''}" data-tab="delay">
            <i class="fas fa-stopwatch"></i> <span>3. Komparasi Delay: RCA vs CLA (Slide 19 &amp; 24)</span>
          </button>
        </div>

        <div id="w5SimTabBody"></div>
      </div>
    `;

    // Tab button events
    container.querySelectorAll(".sim-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.w5ActiveSimTab = btn.getAttribute("data-tab");
        this.w7ActiveSimTab = this.w5ActiveSimTab;
        container.querySelectorAll(".sim-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.renderWeek5ActiveTab();
      });
    });

    this.renderWeek5ActiveTab();
  }

  renderWeek5ActiveTab() {
    const tabBody = document.getElementById("w5SimTabBody");
    if (!tabBody) return;

    if (this.w5ActiveSimTab === "alu") {
      this.drawWeek7AluContent(tabBody);
    } else if (this.w5ActiveSimTab === "gates") {
      this.drawWeek7GatesContent(tabBody);
    } else if (this.w5ActiveSimTab === "delay") {
      this.drawWeek7DelayContent(tabBody);
    }
  }


  /* --------------------------------------------------------------------------
     A. UNIT 4-BIT ADDER-SUBTRACTOR TERINTEGRASI (SLIDE 31, 32, 33)
     -------------------------------------------------------------------------- */
  drawWeek7AluContent(container) {
    const bitsA = this.w7BitsA; // [A0, A1, A2, A3] (LSB to MSB)
    const bitsB = this.w7BitsB; // [B0, B1, B2, B3] (LSB to MSB)
    const M = this.w7Mode; // 0: ADD, 1: SUB

    // Hitung per-bit sesuai teori Slide 31-33
    const steps = [];
    let carry = M; // Cin0 = M

    for (let i = 0; i < 4; i++) {
      const a = bitsA[i];
      const b = bitsB[i];
      const bPrime = b ^ M;
      const cin = carry;
      const sum = a ^ bPrime ^ cin;
      const cout = (a & bPrime) | (cin & (a ^ bPrime));
      steps.push({ bit: i, a, b, m: M, bPrime, cin, sum, cout });
      carry = cout;
    }

    const decA = bitsA[0] * 1 + bitsA[1] * 2 + bitsA[2] * 4 + bitsA[3] * 8;
    const decB = bitsB[0] * 1 + bitsB[1] * 2 + bitsB[2] * 4 + bitsB[3] * 8;
    const binA = `${bitsA[3]}${bitsA[2]}${bitsA[1]}${bitsA[0]}`;
    const binB = `${bitsB[3]}${bitsB[2]}${bitsB[1]}${bitsB[0]}`;
    const binSum = `${steps[3].sum}${steps[2].sum}${steps[1].sum}${steps[0].sum}`;
    const finalCout = steps[3].cout;

    let resultDecText = "";
    let statusAnalysis = "";

    if (M === 0) {
      // Penjumlahan (ADD)
      const totalAdd = decA + decB;
      resultDecText = `${totalAdd}₁₀`;
      statusAnalysis = `
        <div class="callout-sub mt-2" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.4);">
          <strong style="color: var(--accent-emerald);"><i class="fas fa-check-circle"></i> Mode Penjumlahan (M = 0):</strong>
          <div style="font-size: 13px; margin-top: 4px;">
            Input B masuk apa adanya (<code>Bᵢ' = Bᵢ</code>) dan <code>Cin₀ = 0</code>.<br>
            Perhitungan: <code>${binA}₂ (${decA}₁₀) + ${binB}₂ (${decB}₁₀) = ${finalCout === 1 ? '1 ' : ''}${binSum}₂ (${totalAdd}₁₀)</code>.<br>
            ${finalCout === 1 ? '<span class="text-warning font-weight-bold"><i class="fas fa-arrow-up"></i> Terjadi Carry-out akhir (C₄ = 1), hasil meluap ke bit ke-5 (bobot 16).</span>' : '<span class="text-success"><i class="fas fa-check"></i> Tidak ada luapan carry akhir (C₄ = 0), hasil muat dalam 4-bit.</span>'}
          </div>
        </div>
      `;
    } else {
      // Pengurangan (SUB)
      const diff = decA - decB;
      resultDecText = `${diff}₁₀`;
      if (finalCout === 1) {
        statusAnalysis = `
          <div class="callout-sub mt-2" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.4);">
            <strong style="color: var(--accent-emerald);"><i class="fas fa-check-circle"></i> Mode Pengurangan (M = 1) - Hasil Positif (A &ge; B):</strong>
            <div style="font-size: 13px; margin-top: 4px;">
              Input B di-invert via gerbang XOR (<code>B̄</code>) dan <code>Cin₀ = 1</code> membentuk Two's Complement: <code>A + B̄ + 1 = A - B</code>.<br>
              Perhitungan: <code>${binA}₂ (${decA}₁₀) − ${binB}₂ (${decB}₁₀) = ${binSum}₂ (${diff}₁₀)</code>.<br>
              <strong>Status Cout final = 1:</strong> Menandakan <em>TIDAK ADA BORROW</em> (hasil valid bertanda positif). End-around carry diabaikan dalam representasi Two's Complement.
            </div>
          </div>
        `;
      } else {
        statusAnalysis = `
          <div class="callout-sub mt-2" style="background: rgba(239,68,68,0.08); border-color: rgba(239,68,68,0.4);">
            <strong class="text-danger"><i class="fas fa-exclamation-triangle"></i> Mode Pengurangan (M = 1) - Hasil Negatif (A &lt; B):</strong>
            <div style="font-size: 13px; margin-top: 4px;">
              Perhitungan: <code>${binA}₂ (${decA}₁₀) − ${binB}₂ (${decB}₁₀) = ${diff}₁₀</code>.<br>
              <strong>Status Cout final = 0:</strong> Menandakan <em>TERJADI BORROW</em> (hasil bernilai negatif).<br>
              Hasil biner <code>${binSum}₂</code> merupakan representasi <strong>Two's Complement dari ${diff}₁₀</strong> (Inversi ${binSum}₂ = ${binSum.split('').map(b => b === '1' ? '0' : '1').join('')}₂, ditambah 1 = ${Math.abs(diff).toString(2).padStart(4, '0')}₂ = ${Math.abs(diff)}₁₀).
            </div>
          </div>
        `;
      }
    }

    container.innerHTML = `
      <div class="alu-control-panel mb-4">
        <div class="grid-2-cols">
          <!-- Kiri: Mode & Input Control -->
          <div>
            <label style="font-weight: 700; color: var(--text-main); display: flex; align-items: center; gap: 8px;">
              <i class="fas fa-toggle-on text-warning"></i> Sinyal Kendali Mode Operasi (M):
            </label>
            <div class="mode-toggle-group mt-2">
              <button class="mode-btn ${M === 0 ? 'active add' : ''}" id="btnModeAdd">
                <i class="fas fa-plus"></i>
                <span>M = 0 (PENJUMLAHAN / ADD: A + B)</span>
              </button>
              <button class="mode-btn ${M === 1 ? 'active sub' : ''}" id="btnModeSub">
                <i class="fas fa-minus"></i>
                <span>M = 1 (PENGURANGAN / SUB: A − B)</span>
              </button>
            </div>

            <!-- Tombol Preset Slide ITERA -->
            <div class="preset-examples-bar mt-3">
              <span><i class="fas fa-lightbulb text-warning"></i> Preset Slide 33:</span>
              <button class="preset-chip" id="presetAddSlide33">Slide 33 Add (11 + 6 = 17)</button>
              <button class="preset-chip" id="presetSubSlide33">Slide 33 Sub (9 − 5 = 4)</button>
              <button class="preset-chip" id="presetSubNeg">Sub Negatif (5 − 9 = -4)</button>
              <button class="preset-chip" id="presetMaxAdd">Max 4-Bit (15 + 15 = 30)</button>
            </div>
          </div>

          <!-- Kanan: Quick Summary Card -->
          <div class="showcase-card highlighted-gold">
            <div class="showcase-header">
              <i class="fas fa-calculator text-warning"></i>
              <h4>Status Hasil Komputasi ALU 4-Bit</h4>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
              <div>
                <span class="text-muted" style="font-size: 12px;">Operasi Saat Ini:</span>
                <div style="font-family: var(--font-mono); font-size: 17px; font-weight: 700; color: var(--text-main);">
                  ${decA} ${M === 0 ? '+' : '−'} ${decB} = <span style="color: var(--accent-gold);">${resultDecText}</span>
                </div>
                <div class="text-muted" style="font-size: 12px; margin-top: 3px;">
                  Biner: <code>${binA}₂ ${M === 0 ? '+' : '−'} ${binB}₂</code>
                </div>
              </div>
              <div style="text-align: right;">
                <span class="pill-tag" style="background: rgba(0,210,255,0.15); color: var(--primary-cyan); font-family: var(--font-mono); font-size: 15px;">
                  S = ${binSum}₂
                </span>
                <div style="margin-top: 4px;">
                  <span class="pill-tag" style="background: ${finalCout === 1 ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)'}; color: ${finalCout === 1 ? 'var(--accent-emerald)' : 'var(--text-muted)'}; font-size: 12px;">
                    Cout (C₄) = ${finalCout}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Interactive Bit Inputs for A and B -->
        <div class="grid-2-cols mt-4">
          <!-- Operan A -->
          <div class="showcase-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <strong style="color: var(--primary-cyan); font-size: 14px;"><i class="fas fa-sign-in-alt"></i> Operan A (4-Bit Minuend / Term 1):</strong>
              <span class="pill-tag" style="font-family: var(--font-mono);">${decA}₁₀ (0x${decA.toString(16).toUpperCase()})</span>
            </div>
            <p class="text-muted mt-1" style="font-size: 12px;">Klik bit individual untuk toggle 0 &harr; 1 (MSB: A₃ &rarr; LSB: A₀):</p>
            <div class="alu-bit-row mt-2">
              ${[3, 2, 1, 0].map(bitIdx => `
                <button class="alu-bit-btn ${bitsA[bitIdx] === 1 ? 'active' : ''}" data-operand="A" data-bit="${bitIdx}">
                  <span class="bit-idx">A${bitIdx} (2<sup>${bitIdx}</sup>)</span>
                  <span class="bit-val">${bitsA[bitIdx]}</span>
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Operan B -->
          <div class="showcase-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <strong style="color: var(--accent-gold); font-size: 14px;"><i class="fas fa-sign-in-alt"></i> Operan B (4-Bit Subtrahend / Term 2):</strong>
              <span class="pill-tag" style="font-family: var(--font-mono);">${decB}₁₀ (0x${decB.toString(16).toUpperCase()})</span>
            </div>
            <p class="text-muted mt-1" style="font-size: 12px;">Klik bit individual untuk toggle 0 &harr; 1 (MSB: B₃ &rarr; LSB: B₀):</p>
            <div class="alu-bit-row mt-2">
              ${[3, 2, 1, 0].map(bitIdx => `
                <button class="alu-bit-btn ${bitsB[bitIdx] === 1 ? 'active' : ''}" data-operand="B" data-bit="${bitIdx}">
                  <span class="bit-idx">B${bitIdx} (2<sup>${bitIdx}</sup>)</span>
                  <span class="bit-val">${bitsB[bitIdx]}</span>
                </button>
              `).join("")}
            </div>
          </div>
        </div>
      </div>

      <!-- VISUAL 4-STAGE FULL ADDER BLOCKS WITH XOR GATES -->
      <h3 class="section-title"><i class="fas fa-project-diagram"></i> Diagram Sirkuit Fisik 4-Stage Full Adder + XOR (Slide 31)</h3>
      <div class="alu-stages-visualizer mb-4">
        <!-- Render from Bit 3 (MSB, Left) down to Bit 0 (LSB, Right) for natural layout -->
        ${[3, 2, 1, 0].map(i => {
          const s = steps[i];
          return `
            <div class="alu-stage-block" id="stage-block-${i}">
              <div class="stage-header">
                <span class="pill-tag" style="font-size: 11px;">Bit-${i} (${i === 3 ? 'MSB' : (i === 0 ? 'LSB' : 'Bobot 2' + (i === 2 ? '²' : '¹'))})</span>
              </div>
              
              <!-- XOR Input B Gate -->
              <div class="xor-mini-box mt-2">
                <span class="xor-label">XOR: B${i} &oplus; M</span>
                <div class="xor-calc">
                  <code>${s.b} &oplus; ${s.m} = <strong>${s.bPrime}</strong></code>
                  <small class="text-muted">${M === 1 ? '(di-invert)' : '(apa adanya)'}</small>
                </div>
              </div>

              <!-- Full Adder Core Box -->
              <div class="fa-mini-box mt-2">
                <div class="fa-title"><i class="fas fa-microchip"></i> Full Adder ${i}</div>
                <div class="fa-inputs">
                  <div>A${i} = <strong>${s.a}</strong></div>
                  <div>B${i}' = <strong>${s.bPrime}</strong></div>
                  <div class="cin-line">Cin = <span class="badge-val ${s.cin === 1 ? 'high' : 'low'}">${s.cin}</span></div>
                </div>
                <div class="fa-outputs mt-2">
                  <div class="sum-box">
                    <span>S${i} (Sum/Diff):</span>
                    <strong class="val-sum ${s.sum === 1 ? 'high' : 'low'}">${s.sum}</strong>
                  </div>
                  <div class="cout-box">
                    <span>Cout${i}:</span>
                    <strong class="val-cout ${s.cout === 1 ? 'high' : 'low'}">${s.cout}</strong>
                  </div>
                </div>
              </div>

              ${i > 0 ? `
                <div class="carry-arrow-left" title="Carry-out merambat ke Full Adder ${i} sebagai Carry-in">
                  <i class="fas fa-chevron-left"></i> Carry: ${s.cout}
                </div>
              ` : `
                <div class="cin-initial-tag" title="Carry-in awal berasal langsung dari kontrol Mode M">
                  Cin₀ = M (${s.cin}) <i class="fas fa-arrow-left"></i>
                </div>
              `}
            </div>
          `;
        }).join("")}
      </div>

      <!-- TABEL RESMI SLIDE 33 ITERA -->
      <h3 class="section-title"><i class="fas fa-table"></i> Tabel Komputasi Bit-demi-Bit Lengkap (Sesuai Format Slide 33)</h3>
      <div class="table-responsive mb-4">
        <table class="luxury-table" style="text-align: center; font-size: 13px;">
          <thead>
            <tr>
              <th>Bit (i)</th>
              <th>Aᵢ</th>
              <th>Bᵢ</th>
              <th>M (Mode)</th>
              <th style="color: var(--accent-gold);">Bᵢ' = Bᵢ &oplus; M</th>
              <th>Cin</th>
              <th style="color: var(--primary-cyan);">Sᵢ = Aᵢ &oplus; Bᵢ' &oplus; Cin</th>
              <th style="color: var(--accent-emerald);">Cout</th>
              <th>Keterangan Komputasi Kolom</th>
            </tr>
          </thead>
          <tbody>
            ${steps.map(s => `
              <tr class="${s.bit % 2 === 0 ? '' : 'row-highlight'}">
                <td><strong>Bit-${s.bit} ${s.bit === 0 ? '(LSB)' : (s.bit === 3 ? '(MSB)' : '')}</strong></td>
                <td><code>${s.a}</code></td>
                <td><code>${s.b}</code></td>
                <td><span class="pill-tag" style="font-size: 11px;">${s.m}</span></td>
                <td><strong style="color: var(--accent-gold);">${s.bPrime}</strong></td>
                <td><span class="badge-val ${s.cin === 1 ? 'high' : 'low'}">${s.cin}</span></td>
                <td><strong style="color: var(--primary-cyan); font-size: 15px;">${s.sum}</strong></td>
                <td><strong style="color: var(--accent-emerald); font-size: 15px;">${s.cout}</strong></td>
                <td style="font-size: 12px; text-align: left;">
                  ${s.a} + ${s.bPrime} + ${s.cin} = ${s.a + s.bPrime + s.cin} &rarr; S=${s.sum}, Cout=${s.cout}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <!-- STATUS & ANALISIS EDUKATIF -->
      ${statusAnalysis}
    `;

    // Bind Event Mode Toggle
    document.getElementById("btnModeAdd").addEventListener("click", () => {
      this.w7Mode = 0;
      this.drawWeek7AluContent(container);
    });

    document.getElementById("btnModeSub").addEventListener("click", () => {
      this.w7Mode = 1;
      this.drawWeek7AluContent(container);
    });

    // Bind Presets
    document.getElementById("presetAddSlide33").addEventListener("click", () => {
      this.w7Mode = 0;
      this.w7BitsA = [1, 1, 0, 1]; // 1011 (11)
      this.w7BitsB = [0, 1, 1, 0]; // 0110 (6)
      this.drawWeek7AluContent(container);
    });

    document.getElementById("presetSubSlide33").addEventListener("click", () => {
      this.w7Mode = 1;
      this.w7BitsA = [1, 0, 0, 1]; // 1001 (9)
      this.w7BitsB = [1, 0, 1, 0]; // 0101 (5)
      this.drawWeek7AluContent(container);
    });

    document.getElementById("presetSubNeg").addEventListener("click", () => {
      this.w7Mode = 1;
      this.w7BitsA = [1, 0, 1, 0]; // 0101 (5)
      this.w7BitsB = [1, 0, 0, 1]; // 1001 (9)
      this.drawWeek7AluContent(container);
    });

    document.getElementById("presetMaxAdd").addEventListener("click", () => {
      this.w7Mode = 0;
      this.w7BitsA = [1, 1, 1, 1]; // 1111 (15)
      this.w7BitsB = [1, 1, 1, 1]; // 1111 (15)
      this.drawWeek7AluContent(container);
    });

    // Bind Bit Click Toggles
    container.querySelectorAll(".alu-bit-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const op = btn.getAttribute("data-operand");
        const idx = parseInt(btn.getAttribute("data-bit"), 10);
        if (op === "A") {
          this.w7BitsA[idx] = this.w7BitsA[idx] === 1 ? 0 : 1;
        } else if (op === "B") {
          this.w7BitsB[idx] = this.w7BitsB[idx] === 1 ? 0 : 1;
        }
        this.drawWeek7AluContent(container);
      });
    });
  }

  /* --------------------------------------------------------------------------
     B. SIMULATOR GERBANG LOGIKA 1-BIT (HA, FA, HS, FS)
     -------------------------------------------------------------------------- */
  drawWeek7GatesContent(container) {
    const gateType = this.w7GateType;
    const a = this.w7GateA;
    const b = this.w7GateB;
    const cin = this.w7GateCin; // Berperan sebagai Cin pada FA atau Bin pada FS

    let out1 = 0; // Sum / Difference
    let out2 = 0; // Carry / Borrow
    let title1 = "Sum (S)";
    let title2 = "Carry (C)";
    let formula1 = "";
    let formula2 = "";

    if (gateType === "ha") {
      out1 = a ^ b;
      out2 = a & b;
      title1 = "Sum (S)";
      title2 = "Carry (C)";
      formula1 = "S = A &oplus; B";
      formula2 = "C = A &middot; B";
    } else if (gateType === "fa") {
      out1 = a ^ b ^ cin;
      out2 = (a & b) | (cin & (a ^ b));
      title1 = "Sum (S)";
      title2 = "Carry-out (Cout)";
      formula1 = "S = A &oplus; B &oplus; Cin";
      formula2 = "Cout = (A &middot; B) + (Cin &middot; (A &oplus; B))";
    } else if (gateType === "hs") {
      out1 = a ^ b;
      const notA = a === 0 ? 1 : 0;
      out2 = notA & b;
      title1 = "Difference (D)";
      title2 = "Borrow (B)";
      formula1 = "D = A &oplus; B";
      formula2 = "B = Ā &middot; B";
    } else if (gateType === "fs") {
      out1 = a ^ b ^ cin;
      const notA = a === 0 ? 1 : 0;
      out2 = (notA & (b | cin)) | (b & cin);
      title1 = "Difference (D)";
      title2 = "Borrow-out (Bout)";
      formula1 = "D = A &oplus; B &oplus; Bin";
      formula2 = "Bout = Ā&middot;(B + Bin) + (B&middot;Bin)";
    }

    container.innerHTML = `
      <div class="gate-simulator-card mb-4">
        <!-- Selector Jenis Sirkuit 1-Bit -->
        <div class="gate-type-selector mb-3">
          <button class="gate-sel-btn ${gateType === 'ha' ? 'active' : ''}" data-type="ha">
            <i class="fas fa-plus"></i> Half Adder (HA - Slide 9-11)
          </button>
          <button class="gate-sel-btn ${gateType === 'fa' ? 'active' : ''}" data-type="fa">
            <i class="fas fa-plus-circle"></i> Full Adder (FA - Slide 14-16)
          </button>
          <button class="gate-sel-btn ${gateType === 'hs' ? 'active' : ''}" data-type="hs">
            <i class="fas fa-minus"></i> Half Subtractor (HS - Slide 26-27)
          </button>
          <button class="gate-sel-btn ${gateType === 'fs' ? 'active' : ''}" data-type="fs">
            <i class="fas fa-minus-circle"></i> Full Subtractor (FS - Slide 28-30)
          </button>
        </div>

        <div class="grid-2-cols">
          <!-- Input Toggles & Logic Schematic -->
          <div class="showcase-card">
            <h4><i class="fas fa-sliders-h text-primary"></i> Kontrol Input Sakelar:</h4>
            <div class="gate-inputs-panel mt-3">
              <div class="gate-input-pill">
                <span>Input A:</span>
                <button class="btn-bit-toggle ${a === 1 ? 'high' : 'low'}" id="toggleGateA">
                  ${a}
                </button>
              </div>

              <div class="gate-input-pill">
                <span>Input B:</span>
                <button class="btn-bit-toggle ${b === 1 ? 'high' : 'low'}" id="toggleGateB">
                  ${b}
                </button>
              </div>

              ${(gateType === 'fa' || gateType === 'fs') ? `
                <div class="gate-input-pill">
                  <span>${gateType === 'fa' ? 'Carry-in (Cin):' : 'Borrow-in (Bin):'}</span>
                  <button class="btn-bit-toggle ${cin === 1 ? 'high' : 'low'}" id="toggleGateCin">
                    ${cin}
                  </button>
                </div>
              ` : ''}
            </div>

            <!-- Skematik Rangkaian Dinamis -->
            <div class="schematic-live-box mt-3">
              <div style="font-family: var(--font-mono); font-size: 13px; line-height: 1.8; color: var(--text-dim);">
                <div><strong>Persamaan Sirkuit Aktif:</strong></div>
                <div style="color: var(--primary-cyan); font-weight:700;">• ${formula1} &rarr; Output = ${out1}</div>
                <div style="color: var(--accent-gold); font-weight:700;">• ${formula2} &rarr; Output = ${out2}</div>
              </div>
            </div>
          </div>

          <!-- Output Indicators with Glow LED -->
          <div class="showcase-card highlighted-gold">
            <h4><i class="fas fa-lightbulb text-warning"></i> Output Indikator Sirkuit:</h4>
            <div class="led-output-display mt-3">
              <div class="led-card">
                <span class="led-title">${title1}</span>
                <div class="led-bubble ${out1 === 1 ? 'led-on-cyan' : 'led-off'}"></div>
                <div class="led-val">${out1}</div>
                <small class="text-muted">${out1 === 1 ? 'LOGIC HIGH (+5V)' : 'LOGIC LOW (0V)'}</small>
              </div>

              <div class="led-card">
                <span class="led-title">${title2}</span>
                <div class="led-bubble ${out2 === 1 ? 'led-on-gold' : 'led-off'}"></div>
                <div class="led-val">${out2}</div>
                <small class="text-muted">${out2 === 1 ? 'LOGIC HIGH (+5V)' : 'LOGIC LOW (0V)'}</small>
              </div>
            </div>
          </div>
        </div>

        <!-- Tabel Kebenaran Interaktif Live Highlight -->
        <h4 class="section-title mt-4"><i class="fas fa-table"></i> Tabel Kebenaran (Baris Aktif Disorot Emas)</h4>
        <div class="table-responsive">
          ${this.getGateTruthTableHtml(gateType, a, b, cin)}
        </div>
      </div>
    `;

    // Bind Type Buttons
    container.querySelectorAll(".gate-sel-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.w7GateType = btn.getAttribute("data-type");
        this.drawWeek7GatesContent(container);
      });
    });

    // Bind Input Toggles
    const btnA = document.getElementById("toggleGateA");
    if (btnA) {
      btnA.addEventListener("click", () => {
        this.w7GateA = this.w7GateA === 1 ? 0 : 1;
        this.drawWeek7GatesContent(container);
      });
    }

    const btnB = document.getElementById("toggleGateB");
    if (btnB) {
      btnB.addEventListener("click", () => {
        this.w7GateB = this.w7GateB === 1 ? 0 : 1;
        this.drawWeek7GatesContent(container);
      });
    }

    const btnCin = document.getElementById("toggleGateCin");
    if (btnCin) {
      btnCin.addEventListener("click", () => {
        this.w7GateCin = this.w7GateCin === 1 ? 0 : 1;
        this.drawWeek7GatesContent(container);
      });
    }
  }

  getGateTruthTableHtml(gateType, curA, curB, curCin) {
    if (gateType === "ha") {
      const rows = [
        { a: 0, b: 0, s: 0, c: 0 },
        { a: 0, b: 1, s: 1, c: 0 },
        { a: 1, b: 0, s: 1, c: 0 },
        { a: 1, b: 1, s: 0, c: 1 }
      ];
      return `
        <table class="luxury-table" style="text-align: center; font-size: 13px;">
          <thead><tr><th>A</th><th>B</th><th>Sum (S = A &oplus; B)</th><th>Carry (C = A &middot; B)</th></tr></thead>
          <tbody>
            ${rows.map(r => {
              const isActive = (r.a === curA && r.b === curB);
              return `
                <tr class="${isActive ? 'row-active-gold' : ''}">
                  <td>${r.a}</td><td>${r.b}</td>
                  <td><strong>${r.s}</strong></td><td><strong>${r.c}</strong></td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      `;
    } else if (gateType === "fa") {
      const rows = [
        { a: 0, b: 0, cin: 0, s: 0, cout: 0 },
        { a: 0, b: 0, cin: 1, s: 1, cout: 0 },
        { a: 0, b: 1, cin: 0, s: 1, cout: 0 },
        { a: 0, b: 1, cin: 1, s: 0, cout: 1 },
        { a: 1, b: 0, cin: 0, s: 1, cout: 0 },
        { a: 1, b: 0, cin: 1, s: 0, cout: 1 },
        { a: 1, b: 1, cin: 0, s: 0, cout: 1 },
        { a: 1, b: 1, cin: 1, s: 1, cout: 1 }
      ];
      return `
        <table class="luxury-table" style="text-align: center; font-size: 13px;">
          <thead><tr><th>A</th><th>B</th><th>Cin</th><th>Sum (S = A&oplus;B&oplus;Cin)</th><th>Cout = AB + Cin(A&oplus;B)</th></tr></thead>
          <tbody>
            ${rows.map(r => {
              const isActive = (r.a === curA && r.b === curB && r.cin === curCin);
              return `
                <tr class="${isActive ? 'row-active-gold' : ''}">
                  <td>${r.a}</td><td>${r.b}</td><td>${r.cin}</td>
                  <td><strong>${r.s}</strong></td><td><strong>${r.cout}</strong></td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      `;
    } else if (gateType === "hs") {
      const rows = [
        { a: 0, b: 0, d: 0, bOut: 0 },
        { a: 0, b: 1, d: 1, bOut: 1 },
        { a: 1, b: 0, d: 1, bOut: 0 },
        { a: 1, b: 1, d: 0, bOut: 0 }
      ];
      return `
        <table class="luxury-table" style="text-align: center; font-size: 13px;">
          <thead><tr><th>A</th><th>B</th><th>Difference (D = A &oplus; B)</th><th>Borrow (B = Ā &middot; B)</th></tr></thead>
          <tbody>
            ${rows.map(r => {
              const isActive = (r.a === curA && r.b === curB);
              return `
                <tr class="${isActive ? 'row-active-gold' : ''}">
                  <td>${r.a}</td><td>${r.b}</td>
                  <td><strong>${r.d}</strong></td><td><strong>${r.bOut}</strong></td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      `;
    } else {
      // Full Subtractor
      const rows = [
        { a: 0, b: 0, bin: 0, d: 0, bout: 0 },
        { a: 0, b: 0, bin: 1, d: 1, bout: 1 },
        { a: 0, b: 1, bin: 0, d: 1, bout: 1 },
        { a: 0, b: 1, bin: 1, d: 0, bout: 1 },
        { a: 1, b: 0, bin: 0, d: 1, bout: 0 },
        { a: 1, b: 0, bin: 1, d: 0, bout: 0 },
        { a: 1, b: 1, bin: 0, d: 0, bout: 0 },
        { a: 1, b: 1, bin: 1, d: 1, bout: 1 }
      ];
      return `
        <table class="luxury-table" style="text-align: center; font-size: 13px;">
          <thead><tr><th>A</th><th>B</th><th>Bin</th><th>Difference (D = A&oplus;B&oplus;Bin)</th><th>Bout = Ā(B+Bin) + B&middot;Bin</th></tr></thead>
          <tbody>
            ${rows.map(r => {
              const isActive = (r.a === curA && r.b === curB && r.bin === curCin);
              return `
                <tr class="${isActive ? 'row-active-gold' : ''}">
                  <td>${r.a}</td><td>${r.b}</td><td>${r.bin}</td>
                  <td><strong>${r.d}</strong></td><td><strong>${r.bout}</strong></td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      `;
    }
  }

  /* --------------------------------------------------------------------------
     C. KOMPARASI PROPAGATION DELAY: RCA VS CLA (SLIDE 19, 20, 24)
     -------------------------------------------------------------------------- */
  drawWeek7DelayContent(container) {
    const bits = this.w7DelayWidth || 32;
    const gateDelay = 1.0; // 1 ns per gate level
    const rcaDelay = 2 * bits * gateDelay; // 2 gate delay per stage
    const claDelay = 4 * gateDelay; // konstan 4 gate delays (P/G generation + 2-level carry logic + sum)
    const speedup = (rcaDelay / claDelay).toFixed(1);

    container.innerHTML = `
      <div class="delay-comparator-card mb-4">
        <div class="content-header">
          <span class="badge-accent"><i class="fas fa-stopwatch"></i> Analisis Kinerja Hardware (Slide 19 & 24)</span>
          <h3>Komparasi Kecepatan: Ripple Carry Adder vs Carry Lookahead Adder</h3>
          <p class="subtitle">Buktikan secara visual mengapa prosesor 32-bit &amp; 64-bit wajib meninggalkan RCA dan beralih ke CLA untuk clock CPU maksimal.</p>
        </div>

        <!-- Lebar Bus Bit Selector -->
        <div class="form-group mb-3">
          <label style="font-weight: 700;"><i class="fas fa-ruler-horizontal"></i> Pilih Lebar Bus Data Biner (Bit-Width):</label>
          <div class="base-selector-pills mt-2">
            <button class="base-btn ${bits === 4 ? 'active' : ''}" data-bits="4">4-Bit (RCA: 8ns)</button>
            <button class="base-btn ${bits === 8 ? 'active' : ''}" data-bits="8">8-Bit (RCA: 16ns)</button>
            <button class="base-btn ${bits === 16 ? 'active' : ''}" data-bits="16">16-Bit (RCA: 32ns)</button>
            <button class="base-btn ${bits === 32 ? 'active' : ''}" data-bits="32">32-Bit Standar CPU (RCA: 64ns)</button>
            <button class="base-btn ${bits === 64 ? 'active' : ''}" data-bits="64">64-Bit Komputasi Modern (RCA: 128ns)</button>
          </div>
        </div>

        <!-- Metric Scorecards -->
        <div class="grid-3-cards mb-4">
          <div class="feature-card">
            <div class="feature-icon" style="color: #ef4444;"><i class="fas fa-turtle"></i></div>
            <h3>Delay RCA (${bits}-Bit)</h3>
            <div style="font-size: 26px; font-weight: 800; font-family: var(--font-mono); color: #ef4444;">
              ${rcaDelay} ns
            </div>
            <p class="mt-1" style="font-size: 12.5px;">Waktu tunda serial: <code>2n &times; &tau;</code> (${bits - 1} tahapan propagasi carry dari LSB ke MSB).</p>
          </div>

          <div class="feature-card highlighted-gold">
            <div class="feature-icon" style="color: var(--accent-emerald);"><i class="fas fa-running"></i></div>
            <h3>Delay CLA (${bits}-Bit)</h3>
            <div style="font-size: 26px; font-weight: 800; font-family: var(--font-mono); color: var(--accent-emerald);">
              ${claDelay} ns
            </div>
            <p class="mt-1" style="font-size: 12.5px;">Waktu tunda paralel: <strong>Konstan 4 gate level</strong> terlepas dari berapapun jumlah bit!</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon" style="color: var(--primary-cyan);"><i class="fas fa-bolt"></i></div>
            <h3>Faktor Percepatan (Speedup)</h3>
            <div style="font-size: 26px; font-weight: 800; font-family: var(--font-mono); color: var(--primary-cyan);">
              ${speedup}&times; Lebih Cepat
            </div>
            <p class="mt-1" style="font-size: 12.5px;">CLA mengeksekusi penjumlahan <strong>${speedup} kali lebih kencang</strong> dibandingkan RCA pada lebar data ${bits}-bit.</p>
          </div>
        </div>

        <!-- Interactive Animated Simulation Bar -->
        <div class="showcase-card mb-4">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <h4><i class="fas fa-play-circle text-warning"></i> Visualisasi Gelombang Perambatan Carry</h4>
            <button class="btn-convert-action" id="btnRunDelaySim" style="padding: 8px 16px; font-size: 13px;">
              <i class="fas fa-play"></i> Jalankan Simulasi Animasi
            </button>
          </div>

          <!-- Jalur RCA -->
          <div class="delay-pipe-container mt-3">
            <div class="pipe-header">
              <span class="text-danger font-weight-bold"><i class="fas fa-link"></i> 1. Jalur Serial Ripple Carry Adder (RCA):</span>
              <span id="rcaTimer" style="font-family: var(--font-mono); font-size: 13px; color: #ef4444;">0 ns / ${rcaDelay} ns</span>
            </div>
            <div class="delay-pipe-bar">
              <div class="pipe-fill rca" id="rcaFillBar" style="width: 0%;"></div>
            </div>
            <small class="text-muted" style="font-size: 11.5px;">Carry merambat berantai melalui Bit-0 &rarr; Bit-1 &rarr; ... &rarr; Bit-${bits-1}. Setiap Full Adder menunggu carry-in tahap sebelumnya.</small>
          </div>

          <!-- Jalur CLA -->
          <div class="delay-pipe-container mt-4">
            <div class="pipe-header">
              <span class="text-success font-weight-bold"><i class="fas fa-bolt"></i> 2. Jalur Paralel Carry Lookahead Adder (CLA):</span>
              <span id="claTimer" style="font-family: var(--font-mono); font-size: 13px; color: var(--accent-emerald);">0 ns / ${claDelay} ns</span>
            </div>
            <div class="delay-pipe-bar">
              <div class="pipe-fill cla" id="claFillBar" style="width: 0%;"></div>
            </div>
            <small class="text-muted" style="font-size: 11.5px;">Semua sinyal carry dihitung serentak dalam 2 tingkat gerbang logika (AND &rarr; OR) menggunakan konsep Generate &amp; Propagate.</small>
          </div>
        </div>

        <!-- Trade-off Hardware Info (Slide 24) -->
        <div class="callout-sub" style="background: rgba(0,210,255,0.08); border-color: rgba(0,210,255,0.3);">
          <strong style="color: var(--primary-cyan);"><i class="fas fa-balance-scale"></i> Kompromi Perangkat Keras (Hardware Trade-off - Slide 24):</strong>
          <p style="font-size: 13px; margin-top: 3px;">Meskipun CLA berkecepatan dahsyat, komplekistas gerbang logika meningkat pesat karena gerbang AND dan OR membutuhkan fan-in input yang semakin banyak untuk bit-bit tinggi. Oleh karena itu, pada prosesor skala besar (misal 64-bit), digunakan teknik bertingkat <strong>Hierarchical CLA</strong> (mengelompokkan per blok 4-bit) untuk menjaga kompleksitas fan-in tetap optimal.</p>
        </div>
      </div>
    `;

    // Bit-width selector events
    container.querySelectorAll(".base-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.w7DelayWidth = parseInt(btn.getAttribute("data-bits"), 10);
        this.drawWeek7DelayContent(container);
      });
    });

    // Run Delay Animation
    const btnRun = document.getElementById("btnRunDelaySim");
    if (btnRun) {
      btnRun.addEventListener("click", () => {
        btnRun.disabled = true;
        const rcaBar = document.getElementById("rcaFillBar");
        const claBar = document.getElementById("claFillBar");
        const rcaTimer = document.getElementById("rcaTimer");
        const claTimer = document.getElementById("claTimer");

        rcaBar.style.width = "0%";
        claBar.style.width = "0%";
        rcaTimer.textContent = `0 ns / ${rcaDelay} ns`;
        claTimer.textContent = `0 ns / ${claDelay} ns`;

        // CLA finishes rapidly (e.g. within 300ms visually)
        setTimeout(() => {
          claBar.style.transition = "width 0.3s ease-out";
          claBar.style.width = "100%";
          claTimer.textContent = `${claDelay} ns / ${claDelay} ns (SELESAI!)`;
        }, 50);

        // RCA ripples slowly in proportion to bit count (e.g. 1500ms for 32-bit)
        const animDuration = Math.min(2500, Math.max(800, bits * 60));
        setTimeout(() => {
          rcaBar.style.transition = `width ${animDuration}ms linear`;
          rcaBar.style.width = "100%";
          
          let curTime = 0;
          const interval = setInterval(() => {
            curTime += 4;
            if (curTime >= rcaDelay) {
              curTime = rcaDelay;
              clearInterval(interval);
              rcaTimer.textContent = `${rcaDelay} ns / ${rcaDelay} ns (SELESAI)`;
              btnRun.disabled = false;
            } else {
              rcaTimer.textContent = `${curTime} ns / ${rcaDelay} ns`;
            }
          }, (animDuration / (rcaDelay / 4)));
        }, 50);
      });
    }
  }

  /* ==========================================================================
     11. EVALUASI KUIS MANDIRI MINGGU 5 (SUB-CPMK ADDER & SUBTRACTOR ITERA)
     ========================================================================== */
  renderWeek5Quiz(container) {
    const questions = [
      {
        id: "q1_w5",
        title: "Soal 1: Perbedaan Mendasar Half Adder & Full Adder (Slide 9 & 14)",
        question: "Mengapa rangkaian <strong>Half Adder (HA)</strong> tidak dapat digunakan secara mandiri untuk penjumlahan biner multi-bit (misalnya penjumlahan 4-bit atau 8-bit)?",
        options: [
          { text: "Karena Half Adder hanya mampu memproses bilangan desimal dan bukan biner", correct: false },
          { text: "Karena Half Adder hanya memiliki 2 jalur input dan tidak memiliki input Carry-in (Cin) untuk menerima carry dari tahapan bit sebelumnya", correct: true },
          { text: "Karena frekuensi clock Half Adder terlalu cepat sehingga menyebabkan sirkuit overheating", correct: false },
          { text: "Karena Half Adder membutuhkan daya tegangan +12 Volt yang tidak cocok untuk komputer", correct: false }
        ],
        explanation: "Sesuai Slide 9 & 13: Half Adder hanya memiliki 2 input (A dan B) sehingga tidak bisa mengakomodasi Carry-in dari bit sebelumnya pada penjumlahan multi-bit. Keterbatasan ini dipecahkan oleh Full Adder yang memiliki 3 input (A, B, Cin)."
      },
      {
        id: "q2_w5",
        title: "Soal 2: Persamaan Gerbang Logika Half Adder (Slide 10 & 11)",
        question: "Berdasarkan analisis tabel kebenaran Half Adder pada Slide 10 & 11, pasangan persamaan logika yang benar untuk keluaran <strong>Sum (S)</strong> dan <strong>Carry (C)</strong> adalah...",
        options: [
          { text: "S = A + B dan C = A &middot; B", correct: false },
          { text: "S = A &oplus; B (XOR) dan C = A &middot; B (AND)", correct: true },
          { text: "S = A &middot; B dan C = A &oplus; B", correct: false },
          { text: "S = (A + B)' dan C = A' + B'", correct: false }
        ],
        explanation: "Sesuai Slide 10 & 11: Sum bernilai 1 jika A &ne; B (operasi XOR: S = A &oplus; B), sedangkan Carry bernilai 1 hanya jika A=1 dan B=1 (operasi AND: C = A &middot; B)."
      },
      {
        id: "q3_w5",
        title: "Soal 3: Masalah Delay pada Ripple Carry Adder (RCA) 32-Bit (Slide 19)",
        question: "Pada arsitektur <strong>Ripple Carry Adder (RCA) 32-bit</strong>, apa yang menyebabkan waktu tunda komputasi (propagation delay) menjadi sangat lambat bagi prosesor modern?",
        options: [
          { text: "Sinyal carry harus merambat secara serial melewati hingga 31 tahapan Full Adder dari LSB ke MSB sebelum hasil akhir stabil", correct: true },
          { text: "Setiap Full Adder mengalami kebocoran arus kapasitif pada gerbang XOR", correct: false },
          { text: "Karena RCA menggunakan gerbang universal NAND yang membalik logika bit secara acak", correct: false },
          { text: "Karena input B harus selalu diubah menjadi desimal terlebih dahulu", correct: false }
        ],
        explanation: "Sesuai Slide 19: Pada RCA 32-bit, carry harus melewati hingga 31 tahapan perambatan serial. Setiap Full Adder harus menunggu carry-in dari adder sebelumnya sehingga propagation delay tinggi dan membatasi clock CPU."
      },
      {
        id: "q4_w5",
        title: "Soal 4: Konsep Generate (G) & Propagate (P) pada CLA (Slide 21)",
        question: "Pada perancangan <strong>Carry Lookahead Adder (CLA)</strong> di Slide 21, kondisi di mana suatu bit <strong>pasti membangkitkan (generate) carry baru</strong> tanpa peduli berapapun carry sebelumnya adalah...",
        options: [
          { text: "Gᵢ = Aᵢ &oplus; Bᵢ saat salah satu input bernilai 1", correct: false },
          { text: "Gᵢ = Aᵢ &middot; Bᵢ saat kedua input Aᵢ = 1 dan Bᵢ = 1", correct: true },
          { text: "Saat Aᵢ = 0 dan Bᵢ = 0", correct: false },
          { text: "Saat sinyal Mode M di-set ke nilai 1", correct: false }
        ],
        explanation: "Sesuai Slide 21: Generate Gᵢ = Aᵢ &middot; Bᵢ aktif jika kedua input = 1 (1+1=10₂), pasti menghasilkan carry out. Sedangkan Propagate Pᵢ = Aᵢ &oplus; Bᵢ bertugas meneruskan carry lama jika salah satu input = 1."
      },
      {
        id: "q5_w5",
        title: "Soal 5: Mekanisme Adder-Subtractor Terintegrasi (Slide 31 & 32)",
        question: "Bagaimana cara rangkaian <strong>Adder-Subtractor Terintegrasi 4-Bit</strong> melakukan operasi <strong>pengurangan (Subtraction)</strong> saat kontrol <strong>Mode M = 1</strong>?",
        options: [
          { text: "Gerbang XOR mematikan pasokan daya pada IC Full Adder", correct: false },
          { text: "Gerbang XOR membalik semua bit input B (B̄) dan Cin₀ di-set 1, menghasilkan operasi Two's Complement: A + B̄ + 1 = A − B", correct: true },
          { text: "Mengganti seluruh Full Adder menjadi Half Subtractor secara otomatis melalui relay", correct: false },
          { text: "Menukar posisi input A dan input B secara terbalik di register ALU", correct: false }
        ],
        explanation: "Sesuai Slide 31: Saat M = 1, gerbang XOR membalik bit B (Bᵢ &oplus; 1 = B̄ᵢ) dan Cin₀ = 1, sehingga sirkuit Full Adder mengeksekusi A + B̄ + 1 yang identik dengan operasi pengurangan Two's Complement (A - B)."
      },
      {
        id: "q6_w5",
        title: "Soal 6: Persamaan Boolean Borrow-out pada Full Subtractor (Slide 30)",
        question: "Ekspresi logika yang benar untuk sinyal keluaran pinjaman <strong>Borrow-out (Bout)</strong> pada rangkaian <strong>Full Subtractor</strong> (Slide 30) adalah...",
        options: [
          { text: "Bout = A &middot; B &middot; Bin", correct: false },
          { text: "Bout = Ā &middot; (B + Bin) + (B &middot; Bin)", correct: true },
          { text: "Bout = A &oplus; B &oplus; Bin", correct: false },
          { text: "Bout = A + B + Bin", correct: false }
        ],
        explanation: "Sesuai Slide 30: Difference adalah D = A &oplus; B &oplus; Bin, sedangkan Borrow-out adalah Bout = Ā &middot; (B + Bin) + (B &middot; Bin) = ĀB + ĀBin + B&middot;Bin."
      }
    ];

    container.innerHTML = `
      <div class="luxury-content-card">
        <div class="content-header">
          <span class="badge-accent"><i class="fas fa-award"></i> Evaluasi Mandiri Pertemuan 05 ITERA</span>
          <h2>Kuis Pemahaman Rangkaian Adder, Subtractor &amp; ALU Terintegrasi</h2>
          <p class="subtitle">Uji penguasaan materi Pertemuan 5 ITERA: Half/Full Adder, RCA Delay, CLA Generate/Propagate, Half/Full Subtractor, serta Unit Terintegrasi Mode M. Standar kelulusan Sub-CPMK: &ge; 80%.</p>
        </div>

        <form id="w5QuizForm">
          ${questions.map((q) => `
            <div class="quiz-w3-card" id="card-${q.id}">
              <div class="quiz-badge-header">
                <span class="pill-tag">${q.title}</span>
              </div>
              <p class="quiz-qtext mt-2">${q.question}</p>

              <div class="quiz-options-group mt-3">
                ${q.options.map((opt, oIdx) => `
                  <label class="quiz-w3-opt" for="opt-${q.id}-${oIdx}">
                    <input type="radio" name="${q.id}" id="opt-${q.id}-${oIdx}" value="${oIdx}" />
                    <span>${opt.text}</span>
                  </label>
                `).join("")}
              </div>

              <div class="quiz-feedback-box mt-3" id="feedback-${q.id}" style="display: none;"></div>
            </div>
          `).join("")}

          <div style="display: flex; gap: 12px; align-items: center; margin-top: 24px; flex-wrap: wrap;">
            <button type="button" class="btn-convert-action" id="btnSubmitW5Quiz">
              <i class="fas fa-paper-plane"></i> Kirim Jawaban &amp; Evaluasi Nilai M5
            </button>
            <button type="button" class="btn-pill-action" id="btnResetW5Quiz">
              <i class="fas fa-redo"></i> Reset Jawaban
            </button>
          </div>
        </form>

        <div id="w5QuizSummaryBox" class="mt-4"></div>
      </div>
    `;

    // Radio button UI selection
    container.querySelectorAll(".quiz-w3-opt input").forEach(r => {
      r.addEventListener("change", () => {
        const group = r.closest(".quiz-options-group");
        group.querySelectorAll(".quiz-w3-opt").forEach(l => l.classList.remove("selected"));
        r.closest(".quiz-w3-opt").classList.add("selected");
      });
    });

    // Submit handler
    document.getElementById("btnSubmitW5Quiz").addEventListener("click", () => {
      let score = 0;
      let total = questions.length;

      questions.forEach(q => {
        const card = document.getElementById(`card-${q.id}`);
        const feedback = document.getElementById(`feedback-${q.id}`);
        const selected = document.querySelector(`input[name="${q.id}"]:checked`);

        feedback.style.display = "block";
        card.classList.remove("correct", "wrong");

        if (selected) {
          const chosenIdx = parseInt(selected.value, 10);
          const isCorrect = q.options[chosenIdx].correct;

          if (isCorrect) {
            score++;
            card.classList.add("correct");
            feedback.innerHTML = `
              <div class="glass-callout" style="border-color: rgba(16,185,129,0.5); background: rgba(16,185,129,0.08);">
                <span class="text-success"><i class="fas fa-check-circle"></i> <strong>Jawaban Benar!</strong></span>
                <p class="mt-1" style="font-size: 13px;">${q.explanation}</p>
              </div>
            `;
          } else {
            card.classList.add("wrong");
            feedback.innerHTML = `
              <div class="glass-callout" style="border-color: rgba(239,68,68,0.5); background: rgba(239,68,68,0.08);">
                <span class="text-danger"><i class="fas fa-times-circle"></i> <strong>Jawaban Kurang Tepat.</strong></span>
                <p class="mt-1" style="font-size: 13px;">${q.explanation}</p>
              </div>
            `;
          }
        } else {
          feedback.innerHTML = `
            <div class="glass-callout text-warning" style="font-size: 12.5px;">
              <i class="fas fa-exclamation-circle"></i> Anda belum memilih jawaban untuk soal ini.
            </div>
          `;
        }
      });

      const percentage = Math.round((score / total) * 100);
      const passed = percentage >= 80;
      const summaryBox = document.getElementById("w5QuizSummaryBox");

      summaryBox.innerHTML = `
        <div class="diagram-box" style="border-color: ${passed ? 'var(--accent-emerald)' : 'var(--accent-gold)'};">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
            <div>
              <span class="pill-tag" style="background: ${passed ? 'rgba(16,185,129,0.2)' : 'rgba(245,175,25,0.2)'}; color: ${passed ? 'var(--accent-emerald)' : 'var(--accent-gold)'};">
                <i class="fas ${passed ? 'fa-check-double' : 'fa-award'}"></i> ${passed ? 'KOMPETEN (LULUS SUB-CPMK M5 ITERA)' : 'PERLU BELAJAR ULANG'}
              </span>
              <h3 style="margin-top: 8px; font-size: 20px;">Skor Evaluasi Pertemuan 5: ${score} dari ${total} Soal (${percentage}%)</h3>
              <p class="text-muted" style="font-size: 13px;">Standar Capaian Sub-CPMK Pertemuan 5 ITERA: Minimal 80% ketepatan konsep Adder, Subtractor &amp; ALU.</p>
            </div>
            <div style="font-size: 34px; font-weight: 800; font-family: var(--font-mono); color: ${passed ? 'var(--accent-emerald)' : 'var(--accent-gold)'};">
              ${percentage}%
            </div>
          </div>
        </div>
      `;

      summaryBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    // Reset handler
    document.getElementById("btnResetW5Quiz").addEventListener("click", () => {
      document.getElementById("w5QuizForm").reset();
      container.querySelectorAll(".quiz-w3-opt").forEach(l => l.classList.remove("selected"));
      container.querySelectorAll(".quiz-w3-card").forEach(c => c.classList.remove("correct", "wrong"));
      container.querySelectorAll(".quiz-feedback-box").forEach(f => {
        f.style.display = "none";
        f.innerHTML = "";
      });
      document.getElementById("w5QuizSummaryBox").innerHTML = "";
    });
  }

  /* ==========================================================================
     12. SIMULATOR INTERAKTIF MINGGU 7: DECODER, ENCODER & 7-SEGMENT DISPLAY
     ========================================================================== */
  renderWeek7Simulator(container) {
    this.w7SimTab = this.w7SimTab || "sevenseg";

    container.innerHTML = `
      <div class="luxury-content-card simulator-panel">
        <div class="content-header">
          <span class="badge-accent"><i class="fas fa-microchip"></i> Lab Virtual Pertemuan 07 ITERA</span>
          <h2>Simulator Interaktif: Decoder, Encoder &amp; BCD ke 7-Segment</h2>
          <p class="subtitle">Eksplorasi virtual hardware: Driver 7-Segment Display (CA vs CC), Binary Decoder &amp; IC 74138 Memory Addressing, serta Priority Encoder IC 74LS148 dengan logika prioritas multi-input.</p>
        </div>

        <!-- Tab Selector Internal Minggu 7 -->
        <div class="sim-tab-controls mb-4">
          <button class="sim-tab-btn ${this.w7SimTab === 'sevenseg' ? 'active' : ''}" data-tab="sevenseg">
            <i class="fas fa-calculator"></i> <span>1. Driver Display 7-Segment &amp; BCD (Slide 30-33)</span>
          </button>
          <button class="sim-tab-btn ${this.w7SimTab === 'decoder' ? 'active' : ''}" data-tab="decoder">
            <i class="fas fa-project-diagram"></i> <span>2. Binary Decoder &amp; Memory Addressing (Slide 7-21)</span>
          </button>
          <button class="sim-tab-btn ${this.w7SimTab === 'encoder' ? 'active' : ''}" data-tab="encoder">
            <i class="fas fa-sort-numeric-down"></i> <span>3. Priority Encoder &amp; Keypad Scanner (Slide 22-28)</span>
          </button>
        </div>

        <div id="w7SimTabBody"></div>
      </div>
    `;

    container.querySelectorAll(".sim-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.w7SimTab = btn.getAttribute("data-tab");
        container.querySelectorAll(".sim-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.renderWeek7ActiveTab();
      });
    });

    this.renderWeek7ActiveTab();
  }

  renderWeek7ActiveTab() {
    const tabBody = document.getElementById("w7SimTabBody");
    if (!tabBody) return;

    if (this.w7SimTab === "sevenseg") {
      this.drawWeek7SevenSegContent(tabBody);
    } else if (this.w7SimTab === "decoder") {
      this.drawWeek7DecoderContent(tabBody);
    } else if (this.w7SimTab === "encoder") {
      this.drawWeek7EncoderContent(tabBody);
    }
  }

  /* --------------------------------------------------------------------------
     A. SIMULATOR DISPLAY 7-SEGMENT & BCD 8421 (SLIDE 30 - 33)
     -------------------------------------------------------------------------- */
  drawWeek7SevenSegContent(container) {
    // Matriks 16 Karakter Heksadesimal Decoder (Slide 33)
    // [a, b, c, d, e, f, g]
    const hexMatrix = {
      0:  [1, 1, 1, 1, 1, 1, 0],
      1:  [0, 1, 1, 0, 0, 0, 0],
      2:  [1, 1, 0, 1, 1, 0, 1],
      3:  [1, 1, 1, 1, 0, 0, 1],
      4:  [0, 1, 1, 0, 0, 1, 1],
      5:  [1, 0, 1, 1, 0, 1, 1],
      6:  [1, 0, 1, 1, 1, 1, 1],
      7:  [1, 1, 1, 0, 0, 0, 0],
      8:  [1, 1, 1, 1, 1, 1, 1],
      9:  [1, 1, 1, 1, 0, 1, 1],
      10: [1, 1, 1, 0, 1, 1, 1], // A
      11: [0, 0, 1, 1, 1, 1, 1], // b
      12: [1, 0, 0, 1, 1, 1, 0], // C
      13: [0, 1, 1, 1, 1, 0, 1], // d
      14: [1, 0, 0, 1, 1, 1, 1], // E
      15: [1, 0, 0, 0, 1, 1, 1]  // F
    };

    const bcd = this.w7BcdBits || [0, 1, 0, 1]; // [A, B, C, D]
    const val = (bcd[0] * 8) + (bcd[1] * 4) + (bcd[2] * 2) + (bcd[3] * 1);
    this.w7BcdVal = val;

    const segPattern = hexMatrix[val] || [0, 0, 0, 0, 0, 0, 0];
    const isCA = this.w7DisplayType === "ca"; // Common Anode
    const colorClass = this.w7LedColor === "cyan" ? "lit-cyan" : (this.w7LedColor === "emerald" ? "lit-emerald" : "lit-red");

    // Tentukan status menyala fisik LED
    const lit = {
      a: segPattern[0] === 1,
      b: segPattern[1] === 1,
      c: segPattern[2] === 1,
      d: segPattern[3] === 1,
      e: segPattern[4] === 1,
      f: segPattern[5] === 1,
      g: segPattern[6] === 1,
      dp: this.w7DpState === 1
    };

    // Label karakter tampilan
    const charLabels = ["0","1","2","3","4","5","6","7","8","9","A","b","C","d","E","F"];
    const displayChar = charLabels[val];

    container.innerHTML = `
      <div class="sevenseg-lab-container mb-4">
        <!-- Kolom Kiri: Hardware Housing 7-Segment SVG -->
        <div class="sevenseg-housing">
          <div style="font-size: 11px; font-weight: 700; color: var(--text-dim); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">
            <i class="fas fa-tv"></i> Virtual 7-Segment Display
          </div>

          <!-- SVG Segmen LED Presisi Tinggi -->
          <svg class="seven-seg-svg" viewBox="0 0 140 220">
            <!-- Segmen a (Top Horizontal) -->
            <polygon class="seg-poly ${lit.a ? colorClass : ''}" points="32,20 108,20 96,32 44,32" />
            <!-- Segmen b (Top Right Vertical) -->
            <polygon class="seg-poly ${lit.b ? colorClass : ''}" points="110,22 122,34 122,98 110,92 100,82 100,34" />
            <!-- Segmen c (Bottom Right Vertical) -->
            <polygon class="seg-poly ${lit.c ? colorClass : ''}" points="110,122 122,128 122,192 110,204 100,192 100,132" />
            <!-- Segmen d (Bottom Horizontal) -->
            <polygon class="seg-poly ${lit.d ? colorClass : ''}" points="44,194 96,194 108,206 32,206" />
            <!-- Segmen e (Bottom Left Vertical) -->
            <polygon class="seg-poly ${lit.e ? colorClass : ''}" points="18,128 30,122 30,192 20,204 18,192" />
            <!-- Segmen f (Top Left Vertical) -->
            <polygon class="seg-poly ${lit.f ? colorClass : ''}" points="18,34 28,22 30,34 30,82 20,92 18,98" />
            <!-- Segmen g (Middle Horizontal) -->
            <polygon class="seg-poly ${lit.g ? colorClass : ''}" points="34,110 44,102 96,102 106,110 96,118 44,118" />
            <!-- Segmen dp (Decimal Point Dot) -->
            <circle class="seg-poly ${lit.dp ? colorClass : ''}" cx="130" cy="204" r="6" />
          </svg>

          <!-- Status Karakter Terbaca -->
          <div style="margin-top: 16px; text-align: center;">
            <div style="font-family: var(--font-mono); font-size: 28px; font-weight: 800; color: var(--accent-gold);">
              ${displayChar}
            </div>
            <span class="pill-tag" style="background: rgba(245,175,25,0.15); color: var(--accent-gold); font-size: 11px;">
              Nilai: ${val}₁₀ (${val <= 9 ? 'Valid BCD' : 'HEX Ext'})
            </span>
          </div>

          <!-- Indikator Segmen Individual (Slide 30) -->
          <div style="display: flex; gap: 4px; flex-wrap: wrap; justify-content: center; margin-top: 16px;">
            ${['a','b','c','d','e','f','g','dp'].map(s => `
              <span class="seg-pill-badge ${lit[s] ? 'active' : 'inactive'}">
                ${s}:${lit[s] ? (isCA ? '0' : '1') : (isCA ? '1' : '0')}
              </span>
            `).join("")}
          </div>
        </div>

        <!-- Kolom Kanan: Kontrol BCD 8421 & Konfigurasi Listrik -->
        <div>
          <!-- 4-Bit BCD Toggle Buttons -->
          <div class="showcase-card mb-3">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <h4><i class="fas fa-binary text-primary"></i> 4-Bit Input BCD (Slide 32 &amp; 33)</h4>
              <span class="pill-tag" style="font-family: var(--font-mono);">
                Kode 8421 = [${bcd.join(" ")}]
              </span>
            </div>
            <p class="text-muted mt-1" style="font-size: 12.5px;">
              Klik bit untuk toggle 0 &harr; 1. Bobot bit: A=8, B=4, C=2, D=1.
            </p>

            <div class="alu-bit-row mt-3">
              <button class="alu-bit-btn ${bcd[0] === 1 ? 'active' : ''}" data-bit="0">
                <span class="bit-idx">A (MSB: 2³=8)</span>
                <span class="bit-val">${bcd[0]}</span>
              </button>
              <button class="alu-bit-btn ${bcd[1] === 1 ? 'active' : ''}" data-bit="1">
                <span class="bit-idx">B (Bit 2: 2²=4)</span>
                <span class="bit-val">${bcd[1]}</span>
              </button>
              <button class="alu-bit-btn ${bcd[2] === 1 ? 'active' : ''}" data-bit="2">
                <span class="bit-idx">C (Bit 1: 2¹=2)</span>
                <span class="bit-val">${bcd[2]}</span>
              </button>
              <button class="alu-bit-btn ${bcd[3] === 1 ? 'active' : ''}" data-bit="3">
                <span class="bit-idx">D (LSB: 2⁰=1)</span>
                <span class="bit-val">${bcd[3]}</span>
              </button>
            </div>

            <!-- Preset Digit Slide ITERA -->
            <div class="preset-examples-bar mt-3">
              <span><i class="fas fa-lightbulb text-warning"></i> Preset Digit:</span>
              ${[0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(pVal => `
                <button class="preset-chip ${val === pVal ? 'active' : ''}" data-preset-val="${pVal}">
                  ${pVal <= 9 ? pVal : charLabels[pVal]}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Konfigurasi Listrik: Common Anode vs Common Cathode (Slide 31) -->
          <div class="grid-2-cols mb-3">
            <div class="showcase-card">
              <label style="font-weight: 700; font-size: 13px;"><i class="fas fa-bolt text-warning"></i> Polaritas Common (Slide 31):</label>
              <div class="base-selector-pills mt-2">
                <button class="base-btn ${!isCA ? 'active' : ''}" id="btnSetCC">
                  Common Cathode (CC)
                </button>
                <button class="base-btn ${isCA ? 'active' : ''}" id="btnSetCA">
                  Common Anode (CA)
                </button>
              </div>
              <p class="text-muted mt-2" style="font-size: 11.5px; line-height: 1.5;">
                ${isCA ? `
                  <span style="color:var(--accent-gold); font-weight:700;">Mode Common Anode (CA):</span> Common = +5V (Vcc). Segmen MENYALA bila pin bernilai <strong>LOW (0 / 0V)</strong> melalui mekanisme <em>current sinking</em> (Slide 31).
                ` : `
                  <span style="color:var(--primary-cyan); font-weight:700;">Mode Common Cathode (CC):</span> Common = 0V (GND). Segmen MENYALA bila pin bernilai <strong>HIGH (1 / +5V)</strong> melalui mekanisme <em>current sourcing</em> (Slide 31).
                `}
              </p>
            </div>

            <div class="showcase-card">
              <label style="font-weight: 700; font-size: 13px;"><i class="fas fa-palette text-primary"></i> Warna LED &amp; Titik Desimal (dp):</label>
              <div class="base-selector-pills mt-2">
                <button class="base-btn ${this.w7LedColor === 'red' ? 'active' : ''}" data-color="red">
                  Red LED
                </button>
                <button class="base-btn ${this.w7LedColor === 'cyan' ? 'active' : ''}" data-color="cyan">
                  Cyan LED
                </button>
                <button class="base-btn ${this.w7LedColor === 'emerald' ? 'active' : ''}" data-color="emerald">
                  Green LED
                </button>
              </div>
              <div class="mt-2">
                <button class="btn-pill-action" id="btnToggleDp" style="font-size: 12px; padding: 4px 12px;">
                  <i class="fas fa-circle ${lit.dp ? 'text-danger' : 'text-muted'}"></i> Toggle Titik Desimal (dp): ${lit.dp ? 'ON' : 'OFF'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Live Highlighted Truth Table Sesuai Slide 33 -->
      <h3 class="section-title"><i class="fas fa-table"></i> Tabel Kebenaran Decoder 7-Segment Lengkap (Sesuai Slide 33 ITERA)</h3>
      <div class="table-responsive mb-4">
        <table class="truth-table" style="font-size: 12px; text-align: center;">
          <thead>
            <tr>
              <th colspan="4">Inputs BCD</th>
              <th colspan="7">Output Segmen (Active-HIGH Standar / CC)</th>
              <th rowspan="2">Karakter Display</th>
              <th rowspan="2">Status Baris</th>
            </tr>
            <tr>
              <th>A (8)</th><th>B (4)</th><th>C (2)</th><th>D (1)</th>
              <th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th>g</th>
            </tr>
          </thead>
          <tbody>
            ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(rowVal => {
              const rBits = [
                (rowVal >> 3) & 1,
                (rowVal >> 2) & 1,
                (rowVal >> 1) & 1,
                rowVal & 1
              ];
              const rSeg = hexMatrix[rowVal];
              const isActive = (rowVal === val);
              return `
                <tr class="${isActive ? 'row-active-gold' : ''}">
                  <td><code>${rBits[0]}</code></td>
                  <td><code>${rBits[1]}</code></td>
                  <td><code>${rBits[2]}</code></td>
                  <td><code>${rBits[3]}</code></td>
                  <td><strong style="color: ${rSeg[0] ? 'var(--accent-emerald)' : 'var(--text-muted)'};">${rSeg[0]}</strong></td>
                  <td><strong style="color: ${rSeg[1] ? 'var(--accent-emerald)' : 'var(--text-muted)'};">${rSeg[1]}</strong></td>
                  <td><strong style="color: ${rSeg[2] ? 'var(--accent-emerald)' : 'var(--text-muted)'};">${rSeg[2]}</strong></td>
                  <td><strong style="color: ${rSeg[3] ? 'var(--accent-emerald)' : 'var(--text-muted)'};">${rSeg[3]}</strong></td>
                  <td><strong style="color: ${rSeg[4] ? 'var(--accent-emerald)' : 'var(--text-muted)'};">${rSeg[4]}</strong></td>
                  <td><strong style="color: ${rSeg[5] ? 'var(--accent-emerald)' : 'var(--text-muted)'};">${rSeg[5]}</strong></td>
                  <td><strong style="color: ${rSeg[6] ? 'var(--accent-emerald)' : 'var(--text-muted)'};">${rSeg[6]}</strong></td>
                  <td><strong style="font-size: 13px; color: ${isActive ? 'var(--accent-gold)' : 'inherit'};">Display ${charLabels[rowVal]}</strong></td>
                  <td>
                    ${isActive ? '<span class="pill-tag" style="background: rgba(16,185,129,0.2); color: var(--accent-emerald); font-size: 10px;"><i class="fas fa-check"></i> AKTIF SEKARANG</span>' : '<span class="text-muted" style="font-size: 10px;">Idle</span>'}
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;

    // Event bit buttons
    container.querySelectorAll(".alu-bit-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const bitIdx = parseInt(btn.getAttribute("data-bit"), 10);
        this.w7BcdBits[bitIdx] = this.w7BcdBits[bitIdx] === 1 ? 0 : 1;
        this.drawWeek7SevenSegContent(container);
      });
    });

    // Preset buttons
    container.querySelectorAll(".preset-chip").forEach(btn => {
      btn.addEventListener("click", () => {
        const p = parseInt(btn.getAttribute("data-preset-val"), 10);
        this.w7BcdBits = [
          (p >> 3) & 1,
          (p >> 2) & 1,
          (p >> 1) & 1,
          p & 1
        ];
        this.drawWeek7SevenSegContent(container);
      });
    });

    // CC / CA Toggle
    const btnCC = document.getElementById("btnSetCC");
    const btnCA = document.getElementById("btnSetCA");
    if (btnCC) {
      btnCC.addEventListener("click", () => {
        this.w7DisplayType = "cc";
        this.drawWeek7SevenSegContent(container);
      });
    }
    if (btnCA) {
      btnCA.addEventListener("click", () => {
        this.w7DisplayType = "ca";
        this.drawWeek7SevenSegContent(container);
      });
    }

    // Color buttons
    container.querySelectorAll("[data-color]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.w7LedColor = btn.getAttribute("data-color");
        this.drawWeek7SevenSegContent(container);
      });
    });

    // Toggle dp
    const btnDp = document.getElementById("btnToggleDp");
    if (btnDp) {
      btnDp.addEventListener("click", () => {
        this.w7DpState = this.w7DpState === 1 ? 0 : 1;
        this.drawWeek7SevenSegContent(container);
      });
    }
  }

  /* --------------------------------------------------------------------------
     B. SIMULATOR BINARY DECODER & IC 74138 (SLIDE 7 - 21)
     -------------------------------------------------------------------------- */
  drawWeek7DecoderContent(container) {
    const decType = this.w7DecType || "3to8"; // "1to2", "2to4", "3to8"

    container.innerHTML = `
      <div class="decoder-lab-panel mb-4">
        <!-- Selector Arsitektur Decoder -->
        <div class="gate-type-selector mb-3">
          <button class="gate-sel-btn ${decType === '1to2' ? 'active' : ''}" data-dec="1to2">
            <i class="fas fa-sitemap"></i> Decoder 1-to-2 (Slide 9)
          </button>
          <button class="gate-sel-btn ${decType === '2to4' ? 'active' : ''}" data-dec="2to4">
            <i class="fas fa-random"></i> Decoder 2-to-4 dengan Enable (Slide 10-12)
          </button>
          <button class="gate-sel-btn ${decType === '3to8' ? 'active' : ''}" data-dec="3to8">
            <i class="fas fa-memory"></i> Decoder 3-to-8 / IC 74138 (Slide 13-16 &amp; 18)
          </button>
        </div>

        <div id="decoderSubstage"></div>
      </div>
    `;

    // Bind decType buttons
    container.querySelectorAll(".gate-sel-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.w7DecType = btn.getAttribute("data-dec");
        this.drawWeek7DecoderContent(container);
      });
    });

    const substage = document.getElementById("decoderSubstage");
    if (!substage) return;

    if (decType === "1to2") {
      this.drawDecoder1to2(substage);
    } else if (decType === "2to4") {
      this.drawDecoder2to4(substage);
    } else {
      this.drawDecoder3to8(substage);
    }
  }

  drawDecoder1to2(container) {
    const a = this.w7DecInputs[2] || 0;
    const y0 = a === 0 ? 1 : 0; // Y0 = A'
    const y1 = a === 1 ? 1 : 0; // Y1 = A

    container.innerHTML = `
      <div class="grid-2-cols">
        <div class="showcase-card">
          <h4><i class="fas fa-sliders-h text-primary"></i> Kontrol Input Masukan:</h4>
          <div class="gate-inputs-panel mt-3">
            <div class="gate-input-pill">
              <span>Input A:</span>
              <button class="btn-bit-toggle ${a === 1 ? 'high' : 'low'}" id="toggleDec12A">
                ${a}
              </button>
            </div>
          </div>
          <div class="code-box-study mt-3" style="font-size: 13px;">
            <strong>Persamaan Gerbang Logika (Slide 9):</strong><br>
            <code>Y₀ = Ā</code> (Keluaran inversi via NOT gate)<br>
            <code>Y₁ = A</code> (Keluaran langsung tanpa pembalik)
          </div>
        </div>

        <div class="showcase-card">
          <h4><i class="fas fa-project-diagram text-warning"></i> Output Saluran Terpilih:</h4>
          <div class="mt-3">
            <div class="decoder-line-row ${y0 === 1 ? 'active' : ''}">
              <span class="line-label">Y₀ (A = 0):</span>
              <strong class="badge-val ${y0 === 1 ? 'high' : 'low'}">${y0 === 1 ? '1 (AKTIF)' : '0 (Mati)'}</strong>
            </div>
            <div class="decoder-line-row ${y1 === 1 ? 'active' : ''}">
              <span class="line-label">Y₁ (A = 1):</span>
              <strong class="badge-val ${y1 === 1 ? 'high' : 'low'}">${y1 === 1 ? '1 (AKTIF)' : '0 (Mati)'}</strong>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById("toggleDec12A").addEventListener("click", () => {
      this.w7DecInputs[2] = a === 1 ? 0 : 1;
      this.drawDecoder1to2(container);
    });
  }

  drawDecoder2to4(container) {
    const x = this.w7DecInputs[1] || 0;
    const y = this.w7DecInputs[2] || 0;
    const en = this.w7Dec24Enable !== undefined ? this.w7Dec24Enable : 1;

    // Persamaan Slide 12: y_i = minterm * En
    const f0 = en && (!x && !y) ? 1 : 0;
    const f1 = en && (!x && y) ? 1 : 0;
    const f2 = en && (x && !y) ? 1 : 0;
    const f3 = en && (x && y) ? 1 : 0;

    container.innerHTML = `
      <div class="grid-2-cols">
        <div class="showcase-card">
          <h4><i class="fas fa-sliders-h text-primary"></i> Kontrol Input &amp; Enable (Slide 12):</h4>
          <div class="gate-inputs-panel mt-3">
            <div class="gate-input-pill">
              <span>Input X:</span>
              <button class="btn-bit-toggle ${x === 1 ? 'high' : 'low'}" id="toggleDec24X">
                ${x}
              </button>
            </div>
            <div class="gate-input-pill">
              <span>Input Y:</span>
              <button class="btn-bit-toggle ${y === 1 ? 'high' : 'low'}" id="toggleDec24Y">
                ${y}
              </button>
            </div>
            <div class="gate-input-pill" style="border-left: 2px solid var(--accent-gold); padding-left: 12px;">
              <span>Enable (En):</span>
              <button class="btn-bit-toggle ${en === 1 ? 'high' : 'low'}" id="toggleDec24En">
                ${en}
              </button>
            </div>
          </div>

          <div class="code-box-study mt-3" style="font-size: 12.5px;">
            <strong>Persamaan Logika Gerbang AND 3-Input (Slide 12):</strong><br>
            <code>y₀ = X' &middot; Y' &middot; En</code><br>
            <code>y₁ = X' &middot; Y &middot; En</code><br>
            <code>y₂ = X &middot; Y' &middot; En</code><br>
            <code>y₃ = X &middot; Y &middot; En</code><br>
            ${en === 0 ? '<span class="text-danger font-weight-bold"><i class="fas fa-ban"></i> Sinyal Enable = 0: Seluruh output dipaksa nonaktif (0)!</span>' : '<span class="text-success"><i class="fas fa-check"></i> Sinyal Enable = 1: Decoder berfungsi normal.</span>'}
          </div>
        </div>

        <div class="showcase-card">
          <h4><i class="fas fa-project-diagram text-warning"></i> Output Saluran Minterm:</h4>
          <div class="mt-3">
            <div class="decoder-line-row ${f0 === 1 ? 'active' : ''}">
              <span class="line-label">F₀ (m₀: X'Y'):</span>
              <strong class="badge-val ${f0 === 1 ? 'high' : 'low'}">${f0}</strong>
            </div>
            <div class="decoder-line-row ${f1 === 1 ? 'active' : ''}">
              <span class="line-label">F₁ (m₁: X'Y):</span>
              <strong class="badge-val ${f1 === 1 ? 'high' : 'low'}">${f1}</strong>
            </div>
            <div class="decoder-line-row ${f2 === 1 ? 'active' : ''}">
              <span class="line-label">F₂ (m₂: XY'):</span>
              <strong class="badge-val ${f2 === 1 ? 'high' : 'low'}">${f2}</strong>
            </div>
            <div class="decoder-line-row ${f3 === 1 ? 'active' : ''}">
              <span class="line-label">F₃ (m₃: XY):</span>
              <strong class="badge-val ${f3 === 1 ? 'high' : 'low'}">${f3}</strong>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById("toggleDec24X").addEventListener("click", () => {
      this.w7DecInputs[1] = x === 1 ? 0 : 1;
      this.drawDecoder2to4(container);
    });
    document.getElementById("toggleDec24Y").addEventListener("click", () => {
      this.w7DecInputs[2] = y === 1 ? 0 : 1;
      this.drawDecoder2to4(container);
    });
    document.getElementById("toggleDec24En").addEventListener("click", () => {
      this.w7Dec24Enable = en === 1 ? 0 : 1;
      this.drawDecoder2to4(container);
    });
  }

  drawDecoder3to8(container) {
    const a2 = this.w7DecInputs[0] || 0;
    const a1 = this.w7DecInputs[1] || 0;
    const a0 = this.w7DecInputs[2] || 0;

    const e1Bar = this.w7DecEnable1 !== undefined ? this.w7DecEnable1 : 0;
    const e2Bar = this.w7DecEnable2 !== undefined ? this.w7DecEnable2 : 0;
    const e3 = this.w7DecEnable3 !== undefined ? this.w7DecEnable3 : 1;

    // IC 74138 aktif jika E = E1_bar' * E2_bar' * E3 === 1
    const icEnabled = (e1Bar === 0) && (e2Bar === 0) && (e3 === 1);
    const selIdx = (a2 * 4) + (a1 * 2) + a0;

    // IC 74138 outputs are Active LOW (Slide 15-16): selected output is 0, others 1
    const outputs = [1, 1, 1, 1, 1, 1, 1, 1];
    if (icEnabled) {
      outputs[selIdx] = 0; // Active-LOW
    }

    container.innerHTML = `
      <div class="grid-2-cols mb-4">
        <!-- Panel Kontrol Input Pin 74138 -->
        <div class="showcase-card">
          <div class="showcase-header">
            <h4><i class="fas fa-microchip text-primary"></i> Pin Input Alamat &amp; Jalur Strobe Enable IC 74138 (Slide 15)</h4>
          </div>

          <div style="font-size: 13px; font-weight: 700; margin-top: 12px; color: var(--text-main);">
            1. Pin Seleksi Alamat Input CPU (A₂ A₁ A₀):
          </div>
          <div class="gate-inputs-panel mt-2">
            <div class="gate-input-pill">
              <span>A₂ (Pin 3):</span>
              <button class="btn-bit-toggle ${a2 === 1 ? 'high' : 'low'}" id="toggleA2">${a2}</button>
            </div>
            <div class="gate-input-pill">
              <span>A₁ (Pin 2):</span>
              <button class="btn-bit-toggle ${a1 === 1 ? 'high' : 'low'}" id="toggleA1">${a1}</button>
            </div>
            <div class="gate-input-pill">
              <span>A₀ (Pin 1):</span>
              <button class="btn-bit-toggle ${a0 === 1 ? 'high' : 'low'}" id="toggleA0">${a0}</button>
            </div>
          </div>

          <div style="font-size: 13px; font-weight: 700; margin-top: 16px; color: var(--accent-gold);">
            2. Tiga Jalur Enable Khusus (Slide 15):
          </div>
          <div class="gate-inputs-panel mt-2">
            <div class="gate-input-pill">
              <span>Ē₁ (Pin 4 / Active-LOW):</span>
              <button class="btn-bit-toggle ${e1Bar === 1 ? 'high' : 'low'}" id="toggleE1">${e1Bar}</button>
            </div>
            <div class="gate-input-pill">
              <span>Ē₂ (Pin 5 / Active-LOW):</span>
              <button class="btn-bit-toggle ${e2Bar === 1 ? 'high' : 'low'}" id="toggleE2">${e2Bar}</button>
            </div>
            <div class="gate-input-pill">
              <span>E₃ (Pin 6 / Active-HIGH):</span>
              <button class="btn-bit-toggle ${e3 === 1 ? 'high' : 'low'}" id="toggleE3">${e3}</button>
            </div>
          </div>

          <!-- Status IC Enable -->
          <div class="callout-sub mt-3" style="background: ${icEnabled ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)'}; border-color: ${icEnabled ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'};">
            <strong style="color: ${icEnabled ? 'var(--accent-emerald)' : '#ef4444'};">
              <i class="fas ${icEnabled ? 'fa-check-circle' : 'fa-times-circle'}"></i> Status IC 74138: ${icEnabled ? 'AKTIF (EN = 1)' : 'TERKUNCI / DISABLED (EN = 0)'}
            </strong>
            <p style="font-size: 12px; margin-top: 3px;">
              Formula Gerbang Strobe Internal: <code>E = Ē₁' &middot; Ē₂' &middot; E₃</code>.
              ${!icEnabled ? '<br><span class="text-danger">IC dinonaktifkan: Seluruh 8 output dipaksa HIGH (11111111) dan memori tidak ada yang terpilih.</span>' : '<br><span class="text-success">IC aktif: Saluran Ȳ' + selIdx + ' bernilai LOW (0), memicu Chip Select (CS) aktif!</span>'}
            </p>
          </div>
        </div>

        <!-- Panel Output Saluran IC 74138 Active-LOW -->
        <div class="showcase-card">
          <div class="showcase-header">
            <h4><i class="fas fa-list-ol text-warning"></i> Status Pin Output Ȳ₀ s.d Ȳ₇ (Active-LOW Slide 16)</h4>
          </div>
          <div class="mt-2" style="max-height: 280px; overflow-y: auto;">
            ${[0, 1, 2, 3, 4, 5, 6, 7].map(i => {
              const isSelected = icEnabled && (i === selIdx);
              const pinMap = [15, 14, 13, 12, 11, 10, 9, 7];
              return `
                <div class="decoder-line-row ${isSelected ? 'active' : ''}">
                  <span class="line-label">Ȳ${i} (Pin ${pinMap[i]} / m${i}: ${((i >> 2) & 1)}${((i >> 1) & 1)}${(i & 1)}):</span>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span class="pill-tag" style="font-size: 11px; background: ${isSelected ? 'rgba(16,185,129,0.2)' : 'rgba(148,163,184,0.1)'}; color: ${isSelected ? 'var(--accent-emerald)' : 'var(--text-muted)'};">
                      ${isSelected ? 'TERPILIH (LOW / 0V)' : 'IDLE (HIGH / 5V)'}
                    </span>
                    <strong class="badge-val ${isSelected ? 'high' : 'low'}">${outputs[i]}</strong>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      </div>

      <!-- VISUALISASI REKAYASA NYATA: MEMORY ADDRESSING CPU (SLIDE 18) -->
      <h3 class="section-title"><i class="fas fa-memory"></i> Visualisasi Rekayasa: Pengalamatan Memori CPU (Slide 18)</h3>
      <div class="showcase-card mb-4">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
          <div>
            <strong style="color: var(--primary-cyan); font-size: 15px;">
              <i class="fas fa-microchip"></i> Arsitektur Bus Alamat CPU &rarr; Decoder 3:8 &rarr; 8 Blok RAM/ROM
            </strong>
            <p class="text-muted mt-1" style="font-size: 12.5px;">
              CPU menyalurkan 3-bit MSB alamat biner <code>(A₂ A₁ A₀ = ${a2}${a1}${a0}₂ = ${selIdx}₁₀)</code>. Decoder mengaktifkan sinyal <strong>Chip Select (CS)</strong> pada blok memori yang dituju.
            </p>
          </div>
          <button class="preset-chip" id="presetSlide18" style="font-size: 12px; padding: 6px 12px;">
            <i class="fas fa-magic text-warning"></i> Preset Resmi Slide 18: Alamat 101₂ (Blok 5)
          </button>
        </div>

        <div class="grid-4-cards mt-3">
          ${[0, 1, 2, 3, 4, 5, 6, 7].map(blockIdx => {
            const isChipSelected = icEnabled && (blockIdx === selIdx);
            return `
              <div class="feature-card ${isChipSelected ? 'highlighted-gold' : ''}" style="text-align: center; padding: 16px 12px; transition: all 0.3s ease;">
                <div style="font-size: 11px; font-weight: 700; color: ${isChipSelected ? 'var(--accent-gold)' : 'var(--text-muted)'};">
                  BLOK MEMORI ${blockIdx}
                </div>
                <div style="font-family: var(--font-mono); font-size: 18px; font-weight: 800; margin: 8px 0; color: ${isChipSelected ? 'var(--accent-emerald)' : '#64748b'};">
                  CS = ${isChipSelected ? '1 (AKTIF)' : '0'}
                </div>
                <span class="pill-tag" style="font-size: 10px; background: ${isChipSelected ? 'rgba(16,185,129,0.2)' : 'rgba(15,23,42,0.6)'}; color: ${isChipSelected ? 'var(--accent-emerald)' : 'var(--text-muted)'};">
                  ${isChipSelected ? '<i class="fas fa-database"></i> DIBACA CPU' : 'Standby'}
                </span>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;

    document.getElementById("toggleA2").addEventListener("click", () => {
      this.w7DecInputs[0] = a2 === 1 ? 0 : 1;
      this.drawDecoder3to8(container);
    });
    document.getElementById("toggleA1").addEventListener("click", () => {
      this.w7DecInputs[1] = a1 === 1 ? 0 : 1;
      this.drawDecoder3to8(container);
    });
    document.getElementById("toggleA0").addEventListener("click", () => {
      this.w7DecInputs[2] = a0 === 1 ? 0 : 1;
      this.drawDecoder3to8(container);
    });

    document.getElementById("toggleE1").addEventListener("click", () => {
      this.w7DecEnable1 = e1Bar === 1 ? 0 : 1;
      this.drawDecoder3to8(container);
    });
    document.getElementById("toggleE2").addEventListener("click", () => {
      this.w7DecEnable2 = e2Bar === 1 ? 0 : 1;
      this.drawDecoder3to8(container);
    });
    document.getElementById("toggleE3").addEventListener("click", () => {
      this.w7DecEnable3 = e3 === 1 ? 0 : 1;
      this.drawDecoder3to8(container);
    });

    const btnPreset = document.getElementById("presetSlide18");
    if (btnPreset) {
      btnPreset.addEventListener("click", () => {
        this.w7DecInputs = [1, 0, 1]; // 101 -> Block 5
        this.w7DecEnable1 = 0;
        this.w7DecEnable2 = 0;
        this.w7DecEnable3 = 1;
        this.drawDecoder3to8(container);
      });
    }
  }

  /* --------------------------------------------------------------------------
     C. SIMULATOR ENCODER & PRIORITY ENCODER (SLIDE 22 - 28)
     -------------------------------------------------------------------------- */
  drawWeek7EncoderContent(container) {
    const encType = this.w7EncType || "priority"; // "priority" or "binary"

    container.innerHTML = `
      <div class="encoder-lab-panel mb-4">
        <!-- Selector Jenis Encoder -->
        <div class="gate-type-selector mb-3">
          <button class="gate-sel-btn ${encType === 'priority' ? 'active' : ''}" data-enc="priority">
            <i class="fas fa-award"></i> 1. Priority Encoder 8-to-3 / IC 74LS148 (Slide 25 &amp; 26)
          </button>
          <button class="gate-sel-btn ${encType === 'binary' ? 'active' : ''}" data-enc="binary">
            <i class="fas fa-random"></i> 2. Encoder Standar 4-to-2 (Slide 23)
          </button>
        </div>

        <div id="encoderSubstage"></div>
      </div>
    `;

    container.querySelectorAll(".gate-sel-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.w7EncType = btn.getAttribute("data-enc");
        this.drawWeek7EncoderContent(container);
      });
    });

    const substage = document.getElementById("encoderSubstage");
    if (!substage) return;

    if (encType === "priority") {
      this.drawPriorityEncoder(substage);
    } else {
      this.drawBinaryEncoder4to2(substage);
    }
  }

  drawPriorityEncoder(container) {
    const inputs = this.w7EncInputs8 || [0, 0, 0, 0, 0, 1, 0, 0]; // D0 s.d D7

    // Cari input tertinggi yang aktif (Top Priority)
    let highestIdx = -1;
    for (let i = 7; i >= 0; i--) {
      if (inputs[i] === 1) {
        highestIdx = i;
        break;
      }
    }

    // Persamaan Gerbang OR Slide 26:
    // Q0 = D1 + D3 + D5 + D7
    // Q1 = D2 + D3 + D6 + D7
    // Q2 = D4 + D5 + D6 + D7
    const q0 = (inputs[1] || inputs[3] || inputs[5] || inputs[7]) ? 1 : 0;
    const q1 = (inputs[2] || inputs[3] || inputs[6] || inputs[7]) ? 1 : 0;
    const q2 = (inputs[4] || inputs[5] || inputs[6] || inputs[7]) ? 1 : 0;

    const countActive = inputs.filter(x => x === 1).length;

    container.innerHTML = `
      <div class="grid-2-cols mb-4">
        <!-- Kiri: Sakelar Multi-Input D0 s.d D7 -->
        <div class="showcase-card">
          <div class="showcase-header">
            <h4><i class="fas fa-keyboard text-primary"></i> 8 Sakelar Masukan D₀ s.d D₇ (Slide 26)</h4>
          </div>
          <p class="text-muted mt-1" style="font-size: 12.5px;">
            Anda dapat menyalakan <strong>lebih dari satu input bersamaan</strong> untuk menguji ketangguhan logika prioritas!
          </p>

          <div class="alu-bit-row mt-3" style="flex-wrap: wrap;">
            ${[7, 6, 5, 4, 3, 2, 1, 0].map(idx => `
              <button class="alu-bit-btn ${inputs[idx] === 1 ? 'active' : ''}" data-enc-bit="${idx}">
                <span class="bit-idx">D${idx} (${idx === 7 ? 'Top Pri' : (idx === 0 ? 'Lowest' : 'Bit ' + idx)})</span>
                <span class="bit-val">${inputs[idx]}</span>
              </button>
            `).join("")}
          </div>

          <!-- Preset Uji Coba Multi-Input -->
          <div class="preset-examples-bar mt-3">
            <span><i class="fas fa-flask text-warning"></i> Uji Multi-Input:</span>
            <button class="preset-chip" id="presetMulti7and2">D₇ &amp; D₂ Aktif Bersama</button>
            <button class="preset-chip" id="presetMultiAll">Semua D₀..D₇ Aktif</button>
            <button class="preset-chip" id="presetOnly5">Hanya D₅ (Slide 26)</button>
            <button class="preset-chip" id="presetClearEnc">Matikan Semua</button>
          </div>
        </div>

        <!-- Kanan: Logika Penyelesaian Prioritas & Output -->
        <div class="showcase-card highlighted-gold">
          <div class="showcase-header">
            <i class="fas fa-microchip text-warning"></i>
            <h4>Keluaran Biner Terpilih (Y₂ Y₁ Y₀ / Q₂ Q₁ Q₀)</h4>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 14px;">
            <div>
              <span class="text-muted" style="font-size: 12px;">Input Pemenang Prioritas:</span>
              <div style="font-family: var(--font-mono); font-size: 22px; font-weight: 800; color: var(--accent-gold);">
                ${highestIdx >= 0 ? `D${highestIdx} (Logika 1)` : 'Tidak Ada Input Aktif'}
              </div>
              <div class="text-muted" style="font-size: 11.5px; margin-top: 4px;">
                Total Sakelar Menyala: <strong>${countActive} tombol</strong>
              </div>
            </div>

            <div style="text-align: right;">
              <span class="pill-tag" style="background: rgba(0,210,255,0.2); color: var(--primary-cyan); font-family: var(--font-mono); font-size: 18px; font-weight: 700;">
                ${q2} ${q1} ${q0}₂
              </span>
              <div style="margin-top: 6px; font-size: 12px; color: var(--text-muted);">
                Desimal: <strong>${highestIdx >= 0 ? highestIdx : 0}₁₀</strong>
              </div>
            </div>
          </div>

          <!-- Penjelasan Resolusi Kasus Nyata -->
          <div class="callout-sub mt-3" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.3);">
            <strong style="color: var(--accent-emerald); font-size: 13px;">
              <i class="fas fa-shield-alt"></i> Analisis Resolusi Sirkuit Priority Encoder (Slide 26):
            </strong>
            <p style="font-size: 12px; margin-top: 4px; line-height: 1.5;">
              ${countActive > 1 ? `
                <span class="text-warning">Terdeteksi ${countActive} input aktif serentak!</span> Rangkaian Priority Encoder memenangkan <strong>D${highestIdx}</strong> dan mengabaikan semua masukan di bawahnya sebagai kondisi <em>Don't Care</em> (X). Hal ini menjamin keluaran kode biner tetap konsisten <code>${q2}${q1}${q0}₂</code> tanpa konflik data!
              ` : (highestIdx >= 0 ? `
                Hanya 1 input aktif (D${highestIdx}), kode biner langsung dihasilkan: <code>${q2}${q1}${q0}₂</code>.
              ` : `
                Seluruh input berlogika 0, sirkuit dalam keadaan standby.
              `)}
            </p>
          </div>
        </div>
      </div>

      <!-- Realisasi Gerbang OR Priority Encoder Slide 26 -->
      <h3 class="section-title"><i class="fas fa-shapes"></i> Persamaan Gerbang OR Internal (Slide 26 ITERA)</h3>
      <div class="grid-3-cards mb-4">
        <div class="feature-card ${q0 === 1 ? 'highlighted-gold' : ''}">
          <h3>Bit Q₀ (Bobot 2⁰ = 1)</h3>
          <div class="code-box-study mt-2" style="font-size: 12px;">
            <code>Q₀ = D₁ + D₃ + D₅ + D₇</code>
          </div>
          <div style="margin-top: 8px; font-size: 13px;">
            Hasil Evaluasi: <strong class="badge-val ${q0 === 1 ? 'high' : 'low'}">${q0}</strong>
          </div>
        </div>

        <div class="feature-card ${q1 === 1 ? 'highlighted-gold' : ''}">
          <h3>Bit Q₁ (Bobot 2¹ = 2)</h3>
          <div class="code-box-study mt-2" style="font-size: 12px;">
            <code>Q₁ = D₂ + D₃ + D₆ + D₇</code>
          </div>
          <div style="margin-top: 8px; font-size: 13px;">
            Hasil Evaluasi: <strong class="badge-val ${q1 === 1 ? 'high' : 'low'}">${q1}</strong>
          </div>
        </div>

        <div class="feature-card ${q2 === 1 ? 'highlighted-gold' : ''}">
          <h3>Bit Q₂ (Bobot 2² = 4)</h3>
          <div class="code-box-study mt-2" style="font-size: 12px;">
            <code>Q₂ = D₄ + D₅ + D₆ + D₇</code>
          </div>
          <div style="margin-top: 8px; font-size: 13px;">
            Hasil Evaluasi: <strong class="badge-val ${q2 === 1 ? 'high' : 'low'}">${q2}</strong>
          </div>
        </div>
      </div>
    `;

    // Bind bit buttons
    container.querySelectorAll(".alu-bit-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-enc-bit"), 10);
        this.w7EncInputs8[idx] = this.w7EncInputs8[idx] === 1 ? 0 : 1;
        this.drawPriorityEncoder(container);
      });
    });

    // Preset buttons
    const btnMulti72 = document.getElementById("presetMulti7and2");
    if (btnMulti72) {
      btnMulti72.addEventListener("click", () => {
        this.w7EncInputs8 = [0, 0, 1, 0, 0, 0, 0, 1]; // D2 and D7
        this.drawPriorityEncoder(container);
      });
    }
    const btnMultiAll = document.getElementById("presetMultiAll");
    if (btnMultiAll) {
      btnMultiAll.addEventListener("click", () => {
        this.w7EncInputs8 = [1, 1, 1, 1, 1, 1, 1, 1];
        this.drawPriorityEncoder(container);
      });
    }
    const btnOnly5 = document.getElementById("presetOnly5");
    if (btnOnly5) {
      btnOnly5.addEventListener("click", () => {
        this.w7EncInputs8 = [0, 0, 0, 0, 0, 1, 0, 0];
        this.drawPriorityEncoder(container);
      });
    }
    const btnClear = document.getElementById("presetClearEnc");
    if (btnClear) {
      btnClear.addEventListener("click", () => {
        this.w7EncInputs8 = [0, 0, 0, 0, 0, 0, 0, 0];
        this.drawPriorityEncoder(container);
      });
    }
  }

  drawBinaryEncoder4to2(container) {
    const inputs = this.w7EncInputs4 || [0, 0, 1, 0]; // D0, D1, D2, D3

    // Persamaan Slide 23:
    // A1 = D2 + D3
    // A0 = D1 + D3
    const a1 = (inputs[2] || inputs[3]) ? 1 : 0;
    const a0 = (inputs[1] || inputs[3]) ? 1 : 0;

    container.innerHTML = `
      <div class="grid-2-cols mb-4">
        <div class="showcase-card">
          <h4><i class="fas fa-sliders-h text-primary"></i> 4 Jalur Input Masukan (Slide 23):</h4>
          <p class="text-muted mt-1" style="font-size: 12.5px;">Pada encoder standar 4:2, idealnya hanya satu tombol yang ditekan pada satu waktu.</p>
          <div class="alu-bit-row mt-3">
            ${[3, 2, 1, 0].map(idx => `
              <button class="alu-bit-btn ${inputs[idx] === 1 ? 'active' : ''}" data-enc4-bit="${idx}">
                <span class="bit-idx">D${idx}</span>
                <span class="bit-val">${inputs[idx]}</span>
              </button>
            `).join("")}
          </div>

          <div class="code-box-study mt-3" style="font-size: 13px;">
            <strong>Persamaan Logika Gerbang OR (Slide 23):</strong><br>
            <code>A₁ = D₂ + D₃</code><br>
            <code>A₀ = D₁ + D₃</code>
          </div>
        </div>

        <div class="showcase-card">
          <h4><i class="fas fa-sort-numeric-down text-warning"></i> Output 2-Bit Biner (A₁ A₀):</h4>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
            <div>
              <span class="text-muted" style="font-size: 12px;">Posisi Input:</span>
              <div style="font-family: var(--font-mono); font-size: 20px; font-weight: 700; color: var(--accent-gold);">
                ${inputs[3] ? 'D₃' : (inputs[2] ? 'D₂' : (inputs[1] ? 'D₁' : (inputs[0] ? 'D₀' : 'None')))}
              </div>
            </div>
            <div style="text-align: right;">
              <span class="pill-tag" style="background: rgba(0,210,255,0.2); color: var(--primary-cyan); font-family: var(--font-mono); font-size: 20px; font-weight: 700;">
                ${a1} ${a0}₂
              </span>
            </div>
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll(".alu-bit-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const bitIdx = parseInt(btn.getAttribute("data-enc4-bit"), 10);
        // Exclusive selection for standard binary encoder
        this.w7EncInputs4 = [0, 0, 0, 0];
        this.w7EncInputs4[bitIdx] = 1;
        this.drawBinaryEncoder4to2(container);
      });
    });
  }

  /* ==========================================================================
     13. EVALUASI KUIS MANDIRI MINGGU 7 (SUB-CPMK DECODER, ENCODER & 7-SEGMENT)
     ========================================================================== */
  renderWeek7Quiz(container) {
    const questions = [
      {
        id: "q1_w7_slide5",
        title: "Soal 1: Rangkaian Kombinasional vs Sekuensial (Slide 5 & 6)",
        question: "Berdasarkan tinjauan arsitektur digital pada Slide 5 &amp; 6, apa perbedaan paling mendasar antara <strong>Rangkaian Kombinasional</strong> (seperti Decoder, Encoder, MUX) dengan <strong>Rangkaian Sekuensial</strong>?",
        options: [
          { text: "Rangkaian kombinasional hanya dapat bekerja dengan sinyal analog gelombang sinus", correct: false },
          { text: "Rangkaian kombinasional tidak memiliki memori internal; keluarannya hanya bergantung murni pada kombinasi nilai masukan saat itu juga", correct: true },
          { text: "Rangkaian kombinasional wajib memiliki siklus clock eksternal untuk menyimpan status bit sebelumnya", correct: false },
          { text: "Rangkaian kombinasional selalu menghasilkan sinyal tegangan negatif", correct: false }
        ],
        explanation: "Sesuai Slide 5 & 6: Rangkaian kombinasional memiliki output yang hanya bergantung pada input saat itu (tanpa memori internal). Sedangkan rangkaian sekuensial (flip-flop, register, counter) memiliki memori internal sehingga output bergantung pada input + state memori sebelumnya."
      },
      {
        id: "q2_w7_slide8",
        title: "Soal 2: Blok Diagram & Rasio Decoder Biner (Slide 8)",
        question: "Jika sebuah <strong>Binary Decoder</strong> umum memiliki <code>n</code> jalur masukan (inputs), berapakah jumlah saluran keluaran (outputs) maksimum yang dihasilkan, dan bagaimana karakteristik aktivasinya?",
        options: [
          { text: "Menghasilkan n/2 saluran output, dan seluruh output aktif bersamaan", correct: false },
          { text: "Menghasilkan 2ⁿ saluran output, dan hanya satu saluran output yang aktif untuk kombinasi masukan tertentu", correct: true },
          { text: "Menghasilkan 2n saluran output, dengan setengah dari output aktif secara acak", correct: false },
          { text: "Menghasilkan n² saluran output untuk memproses data paritas", correct: false }
        ],
        explanation: "Sesuai Slide 8: Blok diagram umum Binary Decoder menerima masukan n-bit dan menghasilkan 2ⁿ saluran output, di mana tepat HANYA SATU saluran output yang aktif untuk setiap kombinasi input tertentu."
      },
      {
        id: "q3_w7_slide15",
        title: "Soal 3: Kondisi Operasional Pin Enable IC 74138 (Slide 15)",
        question: "IC standar industri <strong>74138 (3-to-8 Line Decoder)</strong> memiliki 3 buah pin enable: <code>Ē₁ (Pin 4), Ē₂ (Pin 5), dan E₃ (Pin 6)</code>. Agar IC ini dapat berfungsi aktif mendekode alamat, kombinasi logika enable yang wajib diberikan adalah...",
        options: [
          { text: "Ē₁ = 1, Ē₂ = 1, dan E₃ = 0", correct: false },
          { text: "Ē₁ = 0, Ē₂ = 0, dan E₃ = 1", correct: true },
          { text: "Ē₁ = 1, Ē₂ = 0, dan E₃ = 1", correct: false },
          { text: "Ketiga pin enable harus dihubungkan bersamaan ke Ground (0V)", correct: false }
        ],
        explanation: "Sesuai Slide 15 & 16: Pin Ē₁ dan Ē₂ adalah Active-LOW (memerlukan logika 0 / 0V), sedangkan pin E₃ adalah Active-HIGH (memerlukan logika 1 / +5V). Sirkuit gerbang NAND internal 74138 hanya aktif jika Ē₁ = 0, Ē₂ = 0, dan E₃ = 1."
      },
      {
        id: "q4_w7_slide26",
        title: "Soal 4: Peran Kritis Priority Encoder (IC 74LS148 - Slide 26)",
        question: "Mengapa pada aplikasi pemindaian tombol seperti <em>Keypad Scanner</em> atau keyboard komputer digunakan <strong>Priority Encoder</strong> (seperti IC 74LS148) dan bukan encoder biner biasa?",
        options: [
          { text: "Untuk mencegah ambiguitas data ketika dua atau lebih tombol ditekan bersamaan, dengan secara otomatis memprioritaskan masukan berbobot tertinggi", correct: true },
          { text: "Karena Priority Encoder mampu mengubah sinyal listrik DC menjadi AC secara otomatis", correct: false },
          { text: "Agar tombol keypad dapat mematikan pasokan listrik mikrokontroler saat idle", correct: false },
          { text: "Karena encoder biasa hanya bisa mengenali angka 0 dan tidak bisa mengenali angka lain", correct: false }
        ],
        explanation: "Sesuai Slide 26 & 27: Jika lebih dari satu input aktif bersamaan pada encoder biasa, keluaran biner menjadi acak/rusak. Priority Encoder mengatasi hal ini dengan memberikan prioritas mutlak pada input bernilai tertinggi (misalnya D₇ mengabaikan D₆..D₀) sehingga pembacaan keypad tetap akurat."
      },
      {
        id: "q5_w7_slide31",
        title: "Soal 5: Listrik Common Anode vs Common Cathode (Slide 31)",
        question: "Pada peraga 7-Segment tipe <strong>Common Anode (CA)</strong>, bagaimanakah cara penyambungan kutub bersama dan sinyal logika apa yang diperlukan untuk menyalakan batang LED segmen?",
        options: [
          { text: "Kutub bersama dihubungkan ke GND (0V), segmen menyala bila diberi logika HIGH (+5V)", correct: false },
          { text: "Kutub bersama dihubungkan ke Vcc (+5V), segmen menyala bila diberikan logika LOW (0V / Active-LOW)", correct: true },
          { text: "Kutub bersama dibiarkan mengambang (floating) tanpa terhubung daya", correct: false },
          { text: "Kutub bersama dihubungkan ke pin analog mikrokontroler dengan logika PWM", correct: false }
        ],
        explanation: "Sesuai Slide 31: Pada Common Anode (CA), semua anoda (+) LED disatukan ke Vcc (+5V). Segmen akan menyala jika pin katoda segmen ditarik ke logika LOW (0V), sehingga arus mengalir dari Vcc melalui LED menuju output decoder (sinking current)."
      },
      {
        id: "q6_w7_slide32",
        title: "Soal 6: Representasi Kode BCD 8421 (Slide 32)",
        question: "Berdasarkan aturan representasi <strong>Kode BCD (Binary Coded Decimal / 8421 Code)</strong> pada Slide 32, bagaimanakah penulisan kode biner yang tepat untuk bilangan desimal <code>59₁₀</code>?",
        options: [
          { text: "111011 (konversi biner murni 59 langsung)", correct: false },
          { text: "0101 1001 (digit 5 dikodekan menjadi 0101 dan digit 9 dikodekan menjadi 1001)", correct: true },
          { text: "1001 0101 (urutan dibalik dari belakang)", correct: false },
          { text: "0011 1011 (kode gray dari bilangan 59)", correct: false }
        ],
        explanation: "Sesuai Slide 32: BCD menyatakan SETIAP DIGIT desimal secara terpisah menggunakan 4-bit biner (8421). Digit 5 = 0101₂ dan digit 9 = 1001₂, sehingga desimal 59₁₀ dinyatakan sebagai 0101 1001 dalam BCD."
      }
    ];

    container.innerHTML = `
      <div class="luxury-content-card">
        <div class="content-header">
          <span class="badge-accent"><i class="fas fa-award"></i> Evaluasi Mandiri Pertemuan 07 ITERA</span>
          <h2>Kuis Pemahaman: Decoder, Encoder &amp; BCD ke 7-Segment</h2>
          <p class="subtitle">Uji pemahaman komprehensif 33 Slide Pertemuan 7 ITERA: Rangkaian kombinasional, Binary Decoder 1:2 / 2:4 / 3:8, IC 74138, Priority Encoder 74LS148, peraga 7-Segment CA/CC, dan kode BCD 8421. Standar kelulusan Sub-CPMK: &ge; 80%.</p>
        </div>

        <form id="w7QuizForm">
          ${questions.map((q) => `
            <div class="quiz-w3-card" id="card-${q.id}">
              <div class="quiz-badge-header">
                <span class="pill-tag">${q.title}</span>
              </div>
              <p class="quiz-qtext mt-2">${q.question}</p>

              <div class="quiz-options-group mt-3">
                ${q.options.map((opt, oIdx) => `
                  <label class="quiz-w3-opt" for="opt-${q.id}-${oIdx}">
                    <input type="radio" name="${q.id}" id="opt-${q.id}-${oIdx}" value="${oIdx}" />
                    <span>${opt.text}</span>
                  </label>
                `).join("")}
              </div>

              <div class="quiz-feedback-box mt-3" id="feedback-${q.id}" style="display: none;"></div>
            </div>
          `).join("")}

          <div style="display: flex; gap: 12px; align-items: center; margin-top: 24px; flex-wrap: wrap;">
            <button type="button" class="btn-convert-action" id="btnSubmitW7Quiz">
              <i class="fas fa-paper-plane"></i> Kirim Jawaban &amp; Evaluasi Nilai M7
            </button>
            <button type="button" class="btn-pill-action" id="btnResetW7Quiz">
              <i class="fas fa-redo"></i> Reset Jawaban
            </button>
          </div>
        </form>

        <div id="w7QuizSummaryBox" class="mt-4"></div>
      </div>
    `;

    // Radio button UI selection
    container.querySelectorAll(".quiz-w3-opt input").forEach(r => {
      r.addEventListener("change", () => {
        const group = r.closest(".quiz-options-group");
        group.querySelectorAll(".quiz-w3-opt").forEach(l => l.classList.remove("selected"));
        r.closest(".quiz-w3-opt").classList.add("selected");
      });
    });

    // Submit handler
    document.getElementById("btnSubmitW7Quiz").addEventListener("click", () => {
      let score = 0;
      let total = questions.length;

      questions.forEach(q => {
        const card = document.getElementById(`card-${q.id}`);
        const feedback = document.getElementById(`feedback-${q.id}`);
        const selected = document.querySelector(`input[name="${q.id}"]:checked`);

        feedback.style.display = "block";
        card.classList.remove("correct", "wrong");

        if (selected) {
          const chosenIdx = parseInt(selected.value, 10);
          const isCorrect = q.options[chosenIdx].correct;

          if (isCorrect) {
            score++;
            card.classList.add("correct");
            feedback.innerHTML = `
              <div class="glass-callout" style="border-color: rgba(16,185,129,0.5); background: rgba(16,185,129,0.08);">
                <span class="text-success"><i class="fas fa-check-circle"></i> <strong>Jawaban Benar!</strong></span>
                <p class="mt-1" style="font-size: 13px;">${q.explanation}</p>
              </div>
            `;
          } else {
            card.classList.add("wrong");
            feedback.innerHTML = `
              <div class="glass-callout" style="border-color: rgba(239,68,68,0.5); background: rgba(239,68,68,0.08);">
                <span class="text-danger"><i class="fas fa-times-circle"></i> <strong>Jawaban Kurang Tepat.</strong></span>
                <p class="mt-1" style="font-size: 13px;">${q.explanation}</p>
              </div>
            `;
          }
        } else {
          feedback.innerHTML = `
            <div class="glass-callout text-warning" style="font-size: 12.5px;">
              <i class="fas fa-exclamation-circle"></i> Anda belum memilih jawaban untuk soal ini.
            </div>
          `;
        }
      });

      const percentage = Math.round((score / total) * 100);
      const passed = percentage >= 80;
      const summaryBox = document.getElementById("w7QuizSummaryBox");

      summaryBox.innerHTML = `
        <div class="diagram-box" style="border-color: ${passed ? 'var(--accent-emerald)' : 'var(--accent-gold)'};">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
            <div>
              <span class="pill-tag" style="background: ${passed ? 'rgba(16,185,129,0.2)' : 'rgba(245,175,25,0.2)'}; color: ${passed ? 'var(--accent-emerald)' : 'var(--accent-gold)'};">
                <i class="fas ${passed ? 'fa-check-double' : 'fa-award'}"></i> ${passed ? 'KOMPETEN (LULUS SUB-CPMK M7 ITERA)' : 'PERLU BELAJAR ULANG'}
              </span>
              <h3 style="margin-top: 8px; font-size: 20px;">Skor Evaluasi Pertemuan 7: ${score} dari ${total} Soal (${percentage}%)</h3>
              <p class="text-muted" style="font-size: 13px;">Standar Capaian Sub-CPMK Pertemuan 7 ITERA: Minimal 80% ketepatan konsep Decoder, Encoder, dan BCD 7-Segment.</p>
            </div>
            <div style="font-size: 34px; font-weight: 800; font-family: var(--font-mono); color: ${passed ? 'var(--accent-emerald)' : 'var(--accent-gold)'};">
              ${percentage}%
            </div>
          </div>
        </div>
      `;

      summaryBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    // Reset handler
    document.getElementById("btnResetW7Quiz").addEventListener("click", () => {
      document.getElementById("w7QuizForm").reset();
      container.querySelectorAll(".quiz-w3-opt").forEach(l => l.classList.remove("selected"));
      container.querySelectorAll(".quiz-w3-card").forEach(c => c.classList.remove("correct", "wrong"));
      container.querySelectorAll(".quiz-feedback-box").forEach(f => {
        f.style.display = "none";
        f.innerHTML = "";
      });
      document.getElementById("w7QuizSummaryBox").innerHTML = "";
    });
  }

  /* ==========================================================================
     9. ROADMAP SILABUS MINGGU 5 S.D. 14
     ========================================================================== */
  renderRoadmap(stage) {
    const w = COURSE_DATA.weeks.find(x => x.week === this.currentWeek);
    if (!w) return;

    stage.innerHTML = `
      <div class="roadmap-view">
        <div class="roadmap-header">
          <span class="badge-accent"><i class="fas fa-graduation-cap"></i> Silabus Mata Kuliah</span>
          <h3>Minggu ${w.week}: ${w.title}</h3>
          <p class="subtitle mt-2">${w.summary}</p>
        </div>

        <div class="glass-callout mb-4">
          <div class="callout-icon"><i class="fas fa-bullseye"></i></div>
          <div class="callout-body">
            <h4>Capaian Pembelajaran Mata Kuliah (CPMK)</h4>
            <p>${w.cpmk}</p>
          </div>
        </div>

        <h4 class="section-title"><i class="fas fa-cubes"></i> Modul Pembelajaran Terstruktur Minggu Ini</h4>
        <div class="roadmap-grid">
          ${w.submenus.map(sub => `
            <div class="syllabus-module-card">
              <h4><i class="${sub.icon}"></i> ${sub.title}</h4>
              <p>Materi pembelajaran interaktif, skematik sirkuit logika, serta latihan kasus untuk modul ini disiapkan dalam kurikulum sistem digital terpadu.</p>
              <div style="margin-top: 14px;">
                <span class="pill-tag"><i class="fas fa-book-reader"></i> Modul Siap Dieksplorasi</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  /* ==========================================================================
     10. EVENT LISTENERS
     ========================================================================== */
  setupEventListeners() {
    const navToggle = document.getElementById("mobileNavToggle");
    const sidebar = document.getElementById("appSidebar");
    if (navToggle && sidebar) {
      navToggle.addEventListener("click", () => {
        sidebar.classList.toggle("open");
      });
    }
  }
}

// Inisialisasi saat window dimuat
document.addEventListener("DOMContentLoaded", () => {
  window.sisdigApp = new SisdigApp();
});
