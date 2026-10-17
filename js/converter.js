/**
 * CONVERTER ENGINE: CENTRAL BINARY HUB METHOD
 * MK Sistem Digital - Media Ajar Interaktif HTML5
 * 
 * Sesuai arahan: SEMUA bilangan dikonversi terlebih dahulu ke BINER (Central Hub),
 * lalu dari Biner:
 * - Dikelompokkan 4-bit (Nibble) untuk Heksadesimal
 * - Dikelompokkan 3-bit (Triad) untuk Oktal
 * - Dijumlahkan bobot pangkat 2 (2^n) untuk Desimal
 * Mendukung bilangan bulat (integer) dan pecahan (fractional).
 */

class CentralBinaryConverter {
  constructor() {
    this.hexChars = "0123456789ABCDEF";
  }

  /**
   * Validasi string input terhadap basis asal
   */
  validateInput(str, base) {
    if (!str || typeof str !== "string") return false;
    const cleanStr = str.trim().toUpperCase().replace(",", ".");
    const parts = cleanStr.split(".");
    if (parts.length > 2) return false; // Maksimal satu titik desimal

    const regexMap = {
      2: /^[01]+$/,
      8: /^[0-7]+$/,
      10: /^[0-9]+$/,
      16: /^[0-9A-F]+$/
    };

    const regex = regexMap[base];
    if (!regex) return false;

    if (parts[0].length === 0 && (!parts[1] || parts[1].length === 0)) return false;
    if (parts[0].length > 0 && !regex.test(parts[0])) return false;
    if (parts[1] && parts[1].length > 0 && !regex.test(parts[1])) return false;

    return true;
  }

  /**
   * Langkah 1: Mengubah bilangan input asal ke Biner (Central Hub)
   * Mengembalikan: { intBin, fracBin, fullBin, stepsHtml }
   */
  convertToBinaryHub(inputVal, base) {
    const clean = inputVal.trim().toUpperCase().replace(",", ".");
    const parts = clean.split(".");
    const intPart = parts[0] || "0";
    const fracPart = parts[1] || "";

    let intBin = "";
    let fracBin = "";
    let steps = [];

    if (base === 2) {
      intBin = intPart.replace(/^0+(?!$)/, "") || "0";
      fracBin = fracPart.replace(/0+$/, "");
      steps.push({
        title: "Input Sudah Dalam Format Biner",
        desc: "Bilangan biner ini langsung dijadikan sebagai Central Hub untuk proses pengelompokan berikutnya.",
        table: null
      });
    } else if (base === 16) {
      // Hex to Binary: Setiap digit heksa -> tepat 4 bit biner
      const hexMapSteps = [];
      let tempIntBin = "";
      for (let ch of intPart) {
        const val = parseInt(ch, 16);
        const b4 = val.toString(2).padStart(4, "0");
        tempIntBin += b4;
        hexMapSteps.push({ digit: ch, valDec: val, biner: b4 });
      }
      intBin = tempIntBin.replace(/^0+(?!$)/, "") || "0";

      let tempFracBin = "";
      const hexFracMapSteps = [];
      for (let ch of fracPart) {
        const val = parseInt(ch, 16);
        const b4 = val.toString(2).padStart(4, "0");
        tempFracBin += b4;
        hexFracMapSteps.push({ digit: ch, valDec: val, biner: b4 });
      }
      fracBin = tempFracBin.replace(/0+$/, "");

      steps.push({
        title: "Konversi Heksadesimal ke Biner (Pemetaan 4-Bit / Nibble)",
        desc: "Setiap satu digit heksadesimal diekspansi secara langsung menjadi 4 bit biner (1 Nibble).",
        hexMap: { int: hexMapSteps, frac: hexFracMapSteps }
      });
    } else if (base === 8) {
      // Octal to Binary: Setiap digit oktal -> tepat 3 bit biner
      const octMapSteps = [];
      let tempIntBin = "";
      for (let ch of intPart) {
        const val = parseInt(ch, 8);
        const b3 = val.toString(2).padStart(3, "0");
        tempIntBin += b3;
        octMapSteps.push({ digit: ch, biner: b3 });
      }
      intBin = tempIntBin.replace(/^0+(?!$)/, "") || "0";

      let tempFracBin = "";
      const octFracMapSteps = [];
      for (let ch of fracPart) {
        const val = parseInt(ch, 8);
        const b3 = val.toString(2).padStart(3, "0");
        tempFracBin += b3;
        octFracMapSteps.push({ digit: ch, biner: b3 });
      }
      fracBin = tempFracBin.replace(/0+$/, "");

      steps.push({
        title: "Konversi Oktal ke Biner (Pemetaan 3-Bit)",
        desc: "Setiap satu digit oktal (0-7) diekspansi menjadi tepat 3 bit biner.",
        octMap: { int: octMapSteps, frac: octFracMapSteps }
      });
    } else if (base === 10) {
      // Decimal to Binary:
      // Integer: Pembagian berulang dengan 2 (modulo)
      let n = parseInt(intPart, 10);
      const divSteps = [];
      if (n === 0) {
        intBin = "0";
        divSteps.push({ num: 0, quotient: 0, rem: 0 });
      } else {
        let bitArray = [];
        let curr = n;
        while (curr > 0) {
          const q = Math.floor(curr / 2);
          const r = curr % 2;
          divSteps.push({ num: curr, quotient: q, rem: r });
          bitArray.unshift(r);
          curr = q;
        }
        intBin = bitArray.join("");
      }

      // Fraction: Perkalian berulang dengan 2
      const mulSteps = [];
      if (fracPart.length > 0) {
        let f = parseFloat("0." + fracPart);
        let maxIter = 12; // Batas presisi pecahan
        let fBits = [];
        while (f > 0 && maxIter-- > 0) {
          const mul = f * 2;
          const intBit = Math.floor(mul);
          const nextF = Number((mul - intBit).toFixed(8));
          mulSteps.push({ val: f, res: mul, bit: intBit });
          fBits.push(intBit);
          f = nextF;
        }
        fracBin = fBits.join("");
      }

      steps.push({
        title: "Konversi Desimal ke Biner (Metode Pembagian & Perkalian 2)",
        desc: "Bagian bulat dibagi 2 berulang kali (sisa dibaca dari bawah ke atas). Bagian pecahan dikali 2 berulang kali (bit bulat dibaca dari atas ke bawah).",
        decDiv: divSteps,
        decMul: mulSteps
      });
    }

    const fullBin = fracBin ? `${intBin}.${fracBin}` : intBin;
    return { intBin, fracBin, fullBin, steps };
  }

  /**
   * Langkah 2: Dari Central Binary Hub -> Heksadesimal (Pengelompokan 4-Bit / Nibble)
   */
  binaryToHexViaNibbles(intBin, fracBin) {
    // 1. Bagian bulat: kelompokkan per 4 bit dari kanan ke kiri
    let padInt = intBin;
    const remInt = padInt.length % 4;
    let leadingZeros = 0;
    if (remInt !== 0) {
      leadingZeros = 4 - remInt;
      padInt = "0".repeat(leadingZeros) + padInt;
    }

    const intGroups = [];
    for (let i = 0; i < padInt.length; i += 4) {
      const chunk = padInt.substr(i, 4);
      const decVal = parseInt(chunk, 2);
      const hexChar = this.hexChars[decVal];
      intGroups.push({
        bits: chunk,
        decVal,
        hexChar,
        isPadded: i === 0 && leadingZeros > 0,
        paddedCount: i === 0 ? leadingZeros : 0
      });
    }

    // 2. Bagian pecahan: kelompokkan per 4 bit dari kiri ke kanan
    let padFrac = fracBin || "";
    let trailingZeros = 0;
    const fracGroups = [];
    if (padFrac.length > 0) {
      const remFrac = padFrac.length % 4;
      if (remFrac !== 0) {
        trailingZeros = 4 - remFrac;
        padFrac = padFrac + "0".repeat(trailingZeros);
      }
      for (let i = 0; i < padFrac.length; i += 4) {
        const chunk = padFrac.substr(i, 4);
        const decVal = parseInt(chunk, 2);
        const hexChar = this.hexChars[decVal];
        fracGroups.push({
          bits: chunk,
          decVal,
          hexChar,
          isPadded: i + 4 >= padFrac.length && trailingZeros > 0,
          paddedCount: i + 4 >= padFrac.length ? trailingZeros : 0
        });
      }
    }

    const hexInt = intGroups.map(g => g.hexChar).join("");
    const hexFrac = fracGroups.map(g => g.hexChar).join("");
    const fullHex = hexFrac ? `${hexInt}.${hexFrac}` : hexInt;

    return {
      intGroups,
      fracGroups,
      fullHex,
      padInt,
      padFrac,
      leadingZeros,
      trailingZeros
    };
  }

  /**
   * Langkah 3: Dari Central Binary Hub -> Oktal (Pengelompokan 3-Bit)
   */
  binaryToOctalViaTriplets(intBin, fracBin) {
    // 1. Bagian bulat: kelompokkan per 3 bit dari kanan ke kiri
    let padInt = intBin;
    const remInt = padInt.length % 3;
    let leadingZeros = 0;
    if (remInt !== 0) {
      leadingZeros = 3 - remInt;
      padInt = "0".repeat(leadingZeros) + padInt;
    }

    const intGroups = [];
    for (let i = 0; i < padInt.length; i += 3) {
      const chunk = padInt.substr(i, 3);
      const decVal = parseInt(chunk, 2);
      intGroups.push({
        bits: chunk,
        octVal: decVal,
        isPadded: i === 0 && leadingZeros > 0,
        paddedCount: i === 0 ? leadingZeros : 0
      });
    }

    // 2. Bagian pecahan: kelompokkan per 3 bit dari kiri ke kanan
    let padFrac = fracBin || "";
    let trailingZeros = 0;
    const fracGroups = [];
    if (padFrac.length > 0) {
      const remFrac = padFrac.length % 3;
      if (remFrac !== 0) {
        trailingZeros = 3 - remFrac;
        padFrac = padFrac + "0".repeat(trailingZeros);
      }
      for (let i = 0; i < padFrac.length; i += 3) {
        const chunk = padFrac.substr(i, 3);
        const decVal = parseInt(chunk, 2);
        fracGroups.push({
          bits: chunk,
          octVal: decVal,
          isPadded: i + 3 >= padFrac.length && trailingZeros > 0,
          paddedCount: i + 3 >= padFrac.length ? trailingZeros : 0
        });
      }
    }

    const octInt = intGroups.map(g => g.octVal).join("");
    const octFrac = fracGroups.map(g => g.octVal).join("");
    const fullOct = octFrac ? `${octInt}.${octFrac}` : octInt;

    return {
      intGroups,
      fracGroups,
      fullOct,
      padInt,
      padFrac,
      leadingZeros,
      trailingZeros
    };
  }

  /**
   * Langkah 4: Dari Central Binary Hub -> Desimal (Penjumlahan Bobot Posisi 2^n)
   */
  binaryToDecimalViaWeights(intBin, fracBin) {
    const intWeights = [];
    let intSum = 0;
    const intLen = intBin.length;

    for (let i = 0; i < intLen; i++) {
      const bit = parseInt(intBin[i], 10);
      const power = intLen - 1 - i;
      const weight = Math.pow(2, power);
      const termVal = bit * weight;
      intSum += termVal;
      intWeights.push({
        bit,
        power,
        weight,
        termVal,
        active: bit === 1
      });
    }

    const fracWeights = [];
    let fracSum = 0;
    if (fracBin && fracBin.length > 0) {
      for (let i = 0; i < fracBin.length; i++) {
        const bit = parseInt(fracBin[i], 10);
        const power = -(i + 1);
        const weight = Math.pow(2, power);
        const termVal = bit * weight;
        fracSum += termVal;
        fracWeights.push({
          bit,
          power,
          weight,
          termVal,
          active: bit === 1
        });
      }
    }

    const totalDec = intSum + fracSum;
    return {
      intWeights,
      fracWeights,
      intSum,
      fracSum,
      totalDec
    };
  }

  /**
   * Eksekusi Lengkap Konversi Central Hub
   */
  processConversion(inputVal, base) {
    if (!this.validateInput(inputVal, base)) {
      return { success: false, error: `Format angka tidak valid untuk Basis ${base}!` };
    }

    // Tahap 1: Ke Central Binary Hub
    const binHub = this.convertToBinaryHub(inputVal, base);

    // Tahap 2: Central Binary -> Heksadesimal (Pengelompokan 4-bit)
    const hexRes = this.binaryToHexViaNibbles(binHub.intBin, binHub.fracBin);

    // Tahap 3: Central Binary -> Oktal (Pengelompokan 3-bit)
    const octRes = this.binaryToOctalViaTriplets(binHub.intBin, binHub.fracBin);

    // Tahap 4: Central Binary -> Desimal (Penjumlahan Bobot)
    const decRes = this.binaryToDecimalViaWeights(binHub.intBin, binHub.fracBin);

    return {
      success: true,
      input: { val: inputVal, base },
      binHub,
      hexRes,
      octRes,
      decRes
    };
  }
}

// Inisialisasi Instance Global
window.centralConverter = new CentralBinaryConverter();
