<?php
// Prosedur (fungsi) untuk menghitung diskon berdasarkan total belanja
function hitungDiskon($totalBelanja) {
    $diskon = 0;

    if ($totalBelanja >= 100000) {
        $diskon = 0.10 * $totalBelanja; // Diskon 10% untuk belanja >= Rp. 100.000
    } elseif ($totalBelanja >= 50000) {
        $diskon = 0.05 * $totalBelanja; // Diskon 5% untuk belanja Rp. 50.000 - Rp. 99.999
    }
    // Belanja < Rp. 50.000 tidak mendapat diskon

    return $diskon;
}

$hasil = null;
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $totalBelanja = (float) ($_POST["total_belanja"] ?? 0);
    if ($totalBelanja >= 0) {
        $diskon = hitungDiskon($totalBelanja);
        $hasil = [
            "total"  => $totalBelanja,
            "diskon" => $diskon,
            "bayar"  => $totalBelanja - $diskon,
        ];
    }
}

function rupiah($angka) {
    return "Rp. " . number_format($angka, 0, ",", ".");
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hitung Diskon Belanja</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 420px; margin: 40px auto; padding: 0 16px; }
        input, button { padding: 8px; font-size: 16px; width: 100%; box-sizing: border-box; margin-top: 8px; }
        button { cursor: pointer; }
        .hasil { margin-top: 20px; padding: 12px; border: 1px solid #ccc; border-radius: 6px; }
    </style>
</head>
<body>
    <h2>Hitung Diskon Belanja</h2>
    <form method="post">
        <label for="total_belanja">Total belanja (Rp)</label>
        <input type="number" id="total_belanja" name="total_belanja" min="0" required
               value="<?= isset($totalBelanja) ? htmlspecialchars($totalBelanja) : '' ?>">
        <button type="submit">Hitung</button>
    </form>

    <?php if ($hasil): ?>
    <div class="hasil">
        <p>Total belanja: <strong><?= rupiah($hasil["total"]) ?></strong></p>
        <p>Diskon: <strong><?= rupiah($hasil["diskon"]) ?></strong></p>
        <p>Total yang harus dibayar: <strong><?= rupiah($hasil["bayar"]) ?></strong></p>
    </div>
    <?php endif; ?>
</body>
</html>
