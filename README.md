# Panini World Cup 2026 Sticker Tracker (panini-wc-tracker)

**Versiyon:** `0.0.1`

Panini World Cup 2026 çıkartma albümü koleksiyonunuzu, eksiklerinizi ve takas fazlalıklarınızı takip edebileceğiniz, Firebase Realtime Database tabanlı bulut destekli web uygulaması.

## Özellikler

- 🏆 **Grup ve Takım Görünümü**: Turnuvadaki tüm grupları ve takımları bayraklarıyla birlikte listeleme.
- 📊 **İlerleme İstatistikleri**: Albüm tamamlanma yüzdesi ve fiziksel çıkartma sayısı takibi.
- 🔄 **Takas ve Eksik Yönetimi**: Eksik ve fazlalık (duplicate) çıkartmaları tek tıkla panoya kopyalama.
- ⚡ **Gelişmiş Toplu Ekleme ve Sorgulama**: Farklı formatlardaki listeleri otomatik ayrıştırma.
- 🔒 **Mühürleme (Yedekleme)**: Koleksiyonun belirli bir andaki durumunu dondurma ve geri dönebilme.
- 🌐 **İki Dilli (TR / EN)**: Türkçe ve İngilizce arayüz desteği.
- 🔐 **Admin Yetkilendirmesi**: Firebase Auth ile güvenli admin paneli.

## Kurulum ve Çalıştırma

1. Projeyi klonlayın:
   ```bash
   git clone https://github.com/eckucukoglu/panini-wc-tracker.git
   cd panini-wc-tracker
   ```

2. Yapılandırma dosyasını oluşturun:
   `config.example.js` dosyasını `config.js` olarak kopyalayın ve kendi Firebase proje bilgilerinizi girin:
   ```bash
   cp config.example.js config.js
   ```

3. Yerel sunucuyu başlatın:
   ```bash
   python3 -m http.server 8000
   ```
   Tarayıcınızda `http://localhost:8000` adresini açın.

## Güvenlik Kuralları

Firebase Realtime Database güvenlik kurallarını `database.rules.json` dosyasından inceleyebilir ve Firebase Console üzerinden projenize uygulayabilirsiniz.
