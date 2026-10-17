/**
 * QUIZ & PRACTICE ENGINE: CENTRAL BINARY HUB
 * MK Sistem Digital - Media Ajar Interaktif HTML5
 * Dilengkapi bank soal resmi dari Slide Kuliah ITERA dan generator soal interaktif
 */

const QUIZ_DATA = {
  structuredProblems: [
    {
      id: "sp-1",
      title: "Latihan Terstruktur Slide 37: Konversi 258₁₀",
      sourceNumber: "258",
      sourceBase: 10,
      targetBase: "Hex & Octal",
      question: "Konversikan bilangan desimal <strong>258₁₀</strong> ke Heksadesimal dan Oktal menggunakan metode Biner Sentral.",
      hint: "Ubah 258₁₀ ke Biner terlebih dahulu (258 = 256 + 2). Lalu kelompokkan per 4 bit untuk Heksa dan per 3 bit untuk Oktal.",
      correctBin: "100000010",
      correctHex: "102",
      correctOct: "402",
      correctDec: "258",
      explanation: `
        <div class="solution-card">
          <h4><i class="fas fa-check-circle text-success"></i> Pembahasan Langkah Demi Langkah:</h4>
          <ol class="solution-steps">
            <li><strong>Langkah 1 (Ke Biner Sentral):</strong><br>
                258 dibagi 2 berulang kali atau faktorkan dengan bobot 2<sup>n</sup>:<br>
                258 = 256 (2<sup>8</sup>) + 2 (2<sup>1</sup>) = <strong>100000010₂</strong> (9 bit).
            </li>
            <li><strong>Langkah 2 (Ke Heksadesimal via Kelompok 4-Bit):</strong><br>
                Tambahkan 3 bit 0 di depan agar genap kelipatan 4: <code>0001 0000 0010</code><br>
                • <code>0001</code> = <strong>1</strong><br>
                • <code>0000</code> = <strong>0</strong><br>
                • <code>0010</code> = <strong>2</strong><br>
                Hasil Heksadesimal = <strong>102₁₆</strong> (atau <code>0x102</code>).
            </li>
            <li><strong>Langkah 3 (Ke Oktal via Kelompok 3-Bit):</strong><br>
                Panjang 9 bit sudah pas kelipatan 3: <code>100 000 010</code><br>
                • <code>100</code> = <strong>4</strong><br>
                • <code>000</code> = <strong>0</strong><br>
                • <code>010</code> = <strong>2</strong><br>
                Hasil Oktal = <strong>402₈</strong>.
            </li>
          </ol>
        </div>
      `
    },
    {
      id: "sp-2",
      title: "Latihan Slide 35-36: Pecahan Desimal 0.625₁₀",
      sourceNumber: "0.625",
      sourceBase: 10,
      targetBase: "Bin, Hex, & Octal",
      question: "Konversikan pecahan desimal <strong>0.625₁₀</strong> ke format Biner, Heksadesimal, dan Oktal.",
      hint: "Kalikan 0.625 dengan 2 berulang kali hingga sisa desimal bernilai 0. Lalu kelompokkan bit pecahan tersebut.",
      correctBin: "0.101",
      correctHex: "0.A",
      correctOct: "0.5",
      correctDec: "0.625",
      explanation: `
        <div class="solution-card">
          <h4><i class="fas fa-check-circle text-success"></i> Pembahasan Langkah Demi Langkah:</h4>
          <ol class="solution-steps">
            <li><strong>Langkah 1 (Perkalian Berulang dengan 2):</strong><br>
                • 0.625 &times; 2 = 1.25 &rarr; Bit Bulat: <strong>1</strong>, sisa: 0.25<br>
                • 0.25 &times; 2 = 0.50 &rarr; Bit Bulat: <strong>0</strong>, sisa: 0.50<br>
                • 0.50 &times; 2 = 1.00 &rarr; Bit Bulat: <strong>1</strong>, sisa: 0.00 (selesai!)<br>
                Biner Sentral = <strong>0.101₂</strong>.
            </li>
            <li><strong>Langkah 2 (Ke Heksadesimal via 4-bit):</strong><br>
                Pecahan dikelompokkan dari kiri ke kanan. Tambahkan 0 di belakang agar genap 4 bit:<br>
                0.1010₂ &rarr; Nilai 1010₂ = 10₁₀ = <strong>A₁₆</strong>.<br>
                Hasil Heksadesimal = <strong>0.A₁₆</strong>.
            </li>
            <li><strong>Langkah 3 (Ke Oktal via 3-bit):</strong><br>
                0.101₂ sudah tepat 3 bit:<br>
                101₂ = 4 + 0 + 1 = <strong>5₈</strong>.<br>
                Hasil Oktal = <strong>0.5₈</strong>.
            </li>
          </ol>
        </div>
      `
    },
    {
      id: "sp-3",
      title: "Latihan Slide 31: Bilangan 125₁₀ ke Oktal",
      sourceNumber: "125",
      sourceBase: 10,
      targetBase: "Octal via Biner",
      question: "Konversikan desimal <strong>125₁₀</strong> ke Oktal menggunakan Biner sebagai jembatannya.",
      hint: "125 = 64 + 32 + 16 + 8 + 4 + 1 = 1111101₂. Kelompokkan per 3 bit dari kanan.",
      correctBin: "1111101",
      correctHex: "7D",
      correctOct: "175",
      correctDec: "125",
      explanation: `
        <div class="solution-card">
          <h4><i class="fas fa-check-circle text-success"></i> Pembahasan Langkah Demi Langkah:</h4>
          <ol class="solution-steps">
            <li><strong>Biner Sentral:</strong> 125₁₀ = <strong>1111101₂</strong> (7 bit).</li>
            <li><strong>Kelompokkan 3-bit untuk Oktal:</strong><br>
                Tambahkan dua nol di kiri: <code>001 111 101</code><br>
                • <code>001</code> = <strong>1</strong><br>
                • <code>111</code> = <strong>7</strong><br>
                • <code>101</code> = <strong>5</strong><br>
                Hasil Oktal = <strong>175₈</strong> (Sesuai slide 31!).
            </li>
          </ol>
        </div>
      `
    },
    {
      id: "sp-4",
      title: "Latihan Slide 32: Heksadesimal 2F₁₆ ke Desimal",
      sourceNumber: "2F",
      sourceBase: 16,
      targetBase: "Desimal via Biner",
      question: "Konversikan <strong>2F₁₆</strong> ke Desimal dengan mengekspansi ke Biner terlebih dahulu lalu menjumlahkan bobotnya.",
      hint: "Ubah '2' jadi 4 bit dan 'F' jadi 4 bit. Jumlahkan bobot posisi pangkat 2 dari bit-bit yang bernilai 1.",
      correctBin: "00101111",
      correctHex: "2F",
      correctOct: "57",
      correctDec: "47",
      explanation: `
        <div class="solution-card">
          <h4><i class="fas fa-check-circle text-success"></i> Pembahasan Langkah Demi Langkah:</h4>
          <ol class="solution-steps">
            <li><strong>Ekspansi ke Biner:</strong><br>
                • <code>2</code> = <code>0010</code><br>
                • <code>F</code> (15) = <code>1111</code><br>
                Biner Sentral = <code>0010 1111</code> (atau 101111₂).
            </li>
            <li><strong>Jumlahkan Bobot Posisi Pangkat 2:</strong><br>
                2⁵(32) + 2³(8) + 2²(4) + 2¹(2) + 2⁰(1) = 32 + 8 + 4 + 2 + 1 = <strong>47₁₀</strong>.<br>
                Hasil Desimal = <strong>47₁₀</strong> (Tepat sesuai slide 32!).
            </li>
          </ol>
        </div>
      `
    }
  ],

  // Generator soal acak untuk latihan mandiri tak terbatas
  generateRandomPractice() {
    const types = [
      { from: 10, to: 16, max: 255 },
      { from: 10, to: 8, max: 255 },
      { from: 2, to: 10, max: 63 },
      { from: 16, to: 10, max: 255 },
      { from: 8, to: 16, max: 127 }
    ];
    const pick = types[Math.floor(Math.random() * types.length)];
    const randInt = Math.floor(Math.random() * pick.max) + 5;
    const strVal = randInt.toString(pick.from).toUpperCase();

    const binStr = randInt.toString(2);
    const hexStr = randInt.toString(16).toUpperCase();
    const octStr = randInt.toString(8);
    const decStr = randInt.toString(10);

    return {
      num: strVal,
      fromBase: pick.from,
      randInt,
      correctBin: binStr,
      correctHex: hexStr,
      correctOct: octStr,
      correctDec: decStr
    };
  }
};

window.quizModule = QUIZ_DATA;
