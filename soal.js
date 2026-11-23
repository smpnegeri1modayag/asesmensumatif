// Bank Soal dikelompokkan per jenjang: "VII", "VIII", dan "IX"
// Gunakan \\ untuk backslash LaTeX di dalam backtick (`...`)
const bankSoal = {
  "VII": [
    {
      no: 1,
      pertanyaan: "Perhatikan ilustrasi termometer digital berikut yang menunjukkan perubahan suhu ruangan pendingin di sebuah laboratorium:<br><div style='margin:8px 0;padding:10px;border:1px solid #cbd5e1;border-radius:6px;background:#f8fafc;font-family:monospace;font-size:13px;'>Suhu Awal: <strong>+6°C</strong> &nbsp;---(turun 10°C)---&gt; &nbsp;Suhu Akhir: <strong>? °C</strong><br>|---|---|---|---|---|---|---|---|---|---|---|---|---|---|<br>-8 &nbsp;-6 &nbsp;-4 &nbsp;-2 &nbsp;0 &nbsp;+2 &nbsp;+4 &nbsp;+6 &nbsp;+8</div>Suhu akhir ruangan pendingin tersebut jika dinyatakan dengan bilangan bertanda negatif adalah \\( \\ldots\\ ^\\circ\\text{C} \\).",
      opsi: {
        A: "\\( -4^\\circ\\text{C} \\)",
        B: "\\( -16^\\circ\\text{C} \\)",
        C: "\\( 4^\\circ\\text{C} \\)",
        D: "\\( 16^\\circ\\text{C} \\)"
      },
      kunci: "A"
    },
    {
      no: 2,
      pertanyaan: "Pada sebuah ekspedisi kelautan di perairan Sulawesi Utara, kapal riset menurunkan sensor kedalaman hingga \\( 120\\text{ meter} \\) di bawah permukaan laut. Pada hari yang sama, sebuah drone cuaca terbang pada ketinggian \\( 85\\text{ meter} \\) di atas permukaan laut. Jika permukaan laut ditetapkan sebagai titik acuan \\( 0\\text{ meter} \\), pernyataan yang paling tepat mengenai penggunaan tanda negatif pada situasi tersebut adalah...",
      opsi: {
        A: "Posisi sensor dinyatakan dengan \\( -120\\text{ m} \\) karena berada di bawah titik acuan \\( 0\\text{ m} \\), sedangkan drone dinyatakan dengan \\( +85\\text{ m} \\).",
        B: "Posisi drone dinyatakan dengan \\( -85\\text{ m} \\) karena berada di atas permukaan laut, sedangkan sensor dinyatakan dengan \\( +120\\text{ m} \\).",
        C: "Kedua posisi dinyatakan dengan tanda negatif karena keduanya tidak berada tepat di garis pantai.",
        D: "Posisi sensor dinyatakan dengan \\( -120\\text{ m} \\) dan drone dinyatakan dengan \\( -85\\text{ m} \\) karena keduanya bergerak menjauh."
      },
      kunci: "A"
    },
    {
      no: 3,
      pertanyaan: "Pada garis bilangan horizontal, semakin ke kiri letak suatu bilangan bulat negatif maka nilainya semakin kecil. Perbandingan yang tepat antara dua bilangan bulat negatif berikut adalah...",
      opsi: {
        A: "\\( -15 > -9 \\)",
        B: "\\( -24 < -18 \\)",
        C: "\\( -7 < -12 \\)",
        D: "\\( -5 > 0 \\)"
      },
      kunci: "B"
    },
    {
      no: 4,
      pertanyaan: "Di daerah pegunungan Modayag saat musim kemarau, suhu udara pada dini hari di empat pos pemantauan tercatat sebagai berikut: Pos A sebesar \\( -4^\\circ\\text{C} \\), Pos B sebesar \\( -9^\\circ\\text{C} \\), Pos C sebesar \\( -2^\\circ\\text{C} \\), dan Pos D sebesar \\( -7^\\circ\\text{C} \\). Jika keempat suhu tersebut diurutkan pada garis bilangan dari posisi paling kiri (paling dingin) ke posisi paling kanan (paling hangat), urutan yang benar adalah...",
      opsi: {
        A: "\\( -9^\\circ\\text{C}, -7^\\circ\\text{C}, -4^\\circ\\text{C}, -2^\\circ\\text{C} \\)",
        B: "\\( -2^\\circ\\text{C}, -4^\\circ\\text{C}, -7^\\circ\\text{C}, -9^\\circ\\text{C} \\)",
        C: "\\( -9^\\circ\\text{C}, -4^\\circ\\text{C}, -7^\\circ\\text{C}, -2^\\circ\\text{C} \\)",
        D: "\\( -4^\\circ\\text{C}, -2^\\circ\\text{C}, -7^\\circ\\text{C}, -9^\\text{C} \\)"
      },
      kunci: "A"
    },
  ],

  "VIII": [
    {
      no: 1,
      pertanyaan: "Bentuk sederhana dari \\( (2a^3 b^2)^2 \\) adalah...",
      opsi: {
        A: "\\( 4a^5 b^4 \\)",
        B: "\\( 4a^6 b^4 \\)",
        C: "\\( 2a^6 b^4 \\)",
        D: "\\( 6a^6 b^4 \\)"
      },
      kunci: "B"
    },
    {
      no: 2,
      pertanyaan: "Panjang sisi miring segitiga siku-siku dengan panjang sisi siku-siku \\( 6\\text{ cm} \\) dan \\( 8\\text{ cm} \\) adalah...",
      opsi: {
        A: "\\( 10\\text{ cm} \\)",
        B: "\\( 12\\text{ cm} \\)",
        C: "\\( 14\\text{ cm} \\)",
        D: "\\( \\sqrt{14}\\text{ cm} \\)"
      },
      kunci: "A"
    },
    {
      no: 3,
      pertanyaan: "Penyelesaian dari persamaan linear \\( 4x - 7 = 2x + 9 \\) adalah \\( x = \\)...",
      opsi: {
        A: "\\( 1 \\)",
        B: "\\( 4 \\)",
        C: "\\( 8 \\)",
        D: "\\( 16 \\)"
      },
      kunci: "C"
    }
  ],

  "IX": [
    {
      no: 1,
      pertanyaan: "Akar-akar persamaan kuadrat \\( x^2 - 5x + 6 = 0 \\) adalah...",
      opsi: {
        A: "\\( x_1 = 1 \\text{ dan } x_2 = 6 \\)",
        B: "\\( x_1 = -2 \\text{ dan } x_2 = -3 \\)",
        C: "\\( x_1 = 2 \\text{ dan } x_2 = 3 \\)",
        D: "\\( x_1 = -1 \\text{ dan } x_2 = -6 \\)"
      },
      kunci: "C"
    },
    {
      no: 2,
      pertanyaan: "Nilai dari \\( \\sqrt{75} - \\sqrt{12} + \\sqrt{27} \\) adalah...",
      opsi: {
        A: "\\( 6\\sqrt{3} \\)",
        B: "\\( 8\\sqrt{3} \\)",
        C: "\\( 4\\sqrt{3} \\)",
        D: "\\( 10\\sqrt{3} \\)"
      },
      kunci: "A"
    },
    {
      no: 3,
      pertanyaan: "Rumus luas permukaan bola dengan jari-jari \\( r \\) adalah...",
      opsi: {
        A: "\\( \\frac{4}{3}\\pi r^3 \\)",
        B: "\\( 2\\pi r^2 \\)",
        C: "\\( 4\\pi r^2 \\)",
        D: "\\( \\pi r^2 \\)"
      },
      kunci: "C"
    }
  ]
};
