# Proje Kuralları (panini-wc-tracker)

## Versiyon Yönetimi ve Semver Kuralı (ÖĞRENİLEN KURAL)
- Kullanıcı sitenin kodunda, tasarımında veya yapısında her yeni bir değişiklik veya geliştirme yapılması istendiğinde versiyon numarasının **3. hanesini (patch sürümü) her seferinde 1 sayı artır**.
  - Örnek: `0.0.1` -> `0.0.2` -> `0.0.3` ...
- Versiyon numarası her değişiklikte senkronize olarak şu dosyalarda güncellenmelidir:
  1. `index.html` başlığındaki `<span class="app-version">X.Y.Z</span>` etiketi
  2. `package.json` dosyasındaki `"version": "X.Y.Z"` alanı
  3. `README.md` dosyasındaki versiyon bilgisi
- Değişiklikler bittiğinde Git commit'i ve sürüm etiketi (tag) yeni versiyonla ilişkilendirilir.
