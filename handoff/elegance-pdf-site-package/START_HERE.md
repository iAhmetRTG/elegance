# Elegance Site Uygulama Paketi

Bu klasör tek teslim paketidir. Uygulamaya başlamadan önce aşağıdaki sırayla oku:

1. `HANDOFF.md` - yapılacak kod ve sayfa değişiklikleri
2. `CONTENT_INVENTORY.md` - sunumdan çıkarılan doğrulanabilir içerik
3. `ASSET_MANIFEST.json` - 34 özgün PDF görselinin kaynak ilişkisi
4. `IMAGEGEN_LOG.md` - geliştirilmiş görseller, kaynakları ve değişmezlik kuralları
5. `source-document/ELEGANCE-SUNUM-DOSYASI.pdf` - nihai kaynak kontrolü

## Görev özeti

Mevcut Elegance sitesini bu pakete göre güncelle. Sitenin hedef hizmet bölgeleri Bakırköy, Yeşilköy, Ataköy, Yeşilyurt ve Florya olarak kalacak. Sunumdaki Etiler ve Karaburun konumları geçmiş proje referanslarıdır; hizmet bölgesi değildir.

PDF'deki gerçek projeleri, proje bilgilerini, iç/dış mekân görsellerini, şirket profilini ve teknik şartnameyi siteye aktar. `assets/imagegen-enhanced` görselleri yalnızca eşleştirildikleri gerçek kaynak projenin yayın için iyileştirilmiş sürümüdür. Binayı yeniden üretme veya başka projeye atama.

## Kesin kurallar

- Önce `HANDOFF.md` içindeki kapsamı uygula.
- Kullanıcının mevcut çalışma ağacındaki değişiklikleri koru.
- Proje bilgisi, daire sayısı, teslim hikâyesi, ekip, adres veya iletişim bilgisi uydurma.
- Gerçek fotoğraf ile mimari render'ı açıkça ayır.
- Proje Topaz'ın durum çelişkisini çözülmüş gibi gösterme.
- `assets/source` arşiv içindir; uygulamada `web-original` veya onaylanmış `imagegen-enhanced` WebP dosyalarını kullan.
- Eski `public/photos/hero/editorial-2026` temsili paketini kullanma.

