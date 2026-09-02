# YARARINA ON DEG - ZAMANIN İVMESİ VE WEB PLATFORMU

## İÇİNDEKİLER
- [1. PROJE ÖZETİ](#1-proje-özeti)
  - [1.1. Proje Özeti ve Proje Kapsamı](#11-proje-özeti-ve-proje-kapsamı)
  - [1.2. Proje Amacı ve Toplumsal Faydası](#12-proje-amacı-ve-toplumsal-faydası)
- [2. PROBLEMİN TANIMI VE ÇÖZÜM ÖNERİSİ](#2-problemin-tanımı-ve-çözüm-önerisi)
  - [2.1. Problemin Tanımı ve Önemi](#21-problemin-tanımı-ve-önemi)
  - [2.2. Çözüm Önerisi](#22-çözüm-önerisi)
- [3. ÖZGÜNLÜK, UYGULANABİLİRLİK VE SÜRDÜRÜLEBİLİRLİK](#3-özgünlük-uygulanabilirlik-ve-sürdürülebilirlik)
  - [3.1. Özgünlük](#31-özgünlük)
  - [3.2. Uygulanabilirlik ve Sürdürülebilirlik](#32-uygulanabilirlik-ve-sürdürülebilirlik)
- [4. PROJENİN HAZIRLANIŞ SÜRECİ VE ÇALIŞMA YÖNTEMİ](#4-projenin-hazırlanış-süreci-ve-çalışma-yöntemi)
  - [4.1. Genel Geliştirme Adımları](#41-genel-geliştirme-adımları)
  - [4.2. Web Platformu Mimarisi ve Entegrasyonu](#42-web-platformu-mimarisi-ve-entegrasyonu)
  - [4.3. Web Platformunun Teknik Detayları](#43-web-platformunun-teknik-detayları)
- [5. PROJE TAKIMI](#5-proje-takımı)
- [6. KAYNAKLAR](#6-kaynaklar)

---

## 1. PROJE ÖZETİ

### 1.1. Proje Özeti ve Proje Kapsamı
Tarih; bireyin "Ben kimim?" sorusuna yanıt aradığı, kimliğini anlamlandırdığı bir gerçeklik bilimidir. Devletinin ve toplumunun geçmişini inceleyen birey, köklerindeki düşünce yapısını kavrayarak kendi kişiliğini inşa eder (Taşbaş, 2018). Türkiye’de bilimsel tarih çalışmaları esas olarak Cumhuriyet ile ivme kazanmış olsa da modern tarihçiliğin geç kurumsallaşması toplumsal bilinç gelişimini doğrudan etkilemiştir (Ateş, 2017). Bu nedenle, toplumun her kesimine nitelikli bir tarih bilinci kazandırmak, gelecek adına kritik bir önem taşımaktadır.

“Milat ve Ötesi” takımı olarak, tarih bilincini oyunlaştırmak amacıyla **“Zamanın İvmesi”** adlı bilgisayar destekli simülasyonu ve projeyi destekleyen bütünleşik web platformunu geliştirdik. Uygulamamız, kullanıcıyı tarihsel senaryolar içine dahil ederek olayları hem eğlendirici hem de öğretici bir biçimde aktarır. Uygulamamızın temel mantığı; kullanıcıya belirli tarihsel senaryolar içerisinde seçim yapma hakkı sunarak, olayları ve durumları etkileşimli bir şekilde tecrübe ettirmektir.

Ortaokuldan üniversiteye kadar geniş bir öğrenci kitlesine hitap eden bu platform; müfredat konularını ezberden uzak, kalıcı bir deneyime dönüştürürken, eğitimcilere de ders içi etkileşimi ve motivasyonu artırma imkânı sunar. Her yaştan tarih meraklısına kapılarını açan uygulamamızın ücretsiz ve masrafsız olması, çok daha geniş kitlelere ulaşmasını kolaylaştırmaktadır.

Oyunumuzu tamamlayıcı nitelikte, kullanıcıları ve değerlendiricileri projeyle buluşturan modern, erişilebilir ve çok dilli (Türkçe/İngilizce) bir web platformu geliştirilmiştir. Bu platform üzerinden projenin amacı, oyun dinamikleri, takım tanıtımı, teknik belgeler ve tanıtım videoları görsel ve etkileşimli ögelerle sunulmaktadır. Platform; akıcı kaydırma animasyonları (scroll animations), dinamik dil değiştirme (TR/EN toggle) altyapısı ve tema diline uyumlu karanlık/cam efektli (glassmorphism) arayüz tasarımı ile kullanıcı deneyimini üst seviyeye çıkarmaktadır. Ayrıca Firebase/Firestore entegrasyonu sayesinde Unity oyunundan elde edilen kullanıcı istatistikleri ve skor verileri web arayüzüne gerçek zamanlı olarak yansıtılabilmektedir. Web sitesine doğrudan entegre edilen Google Gemini API tabanlı yapay zekâ asistan modülü sayesinde ziyaretçiler proje detayları ve tarihsel içerikler hakkında anlık, çift dilli soru-cevap desteği alabilmektedir. Ayrıca platforma eklenen iletişim formu sayesinde ziyaretçiler ve değerlendiriciler, takımla doğrudan ve güvenli bir şekilde iletişime geçebilmektedir.

### 1.2. Proje Amacı ve Toplumsal Faydası
Tarih bilincine sahip olmayan nesillerin ve milletlerin bir medeniyet inşa etmesi pek mümkün değildir (Alkan, 2013). Bu nedenle bir milletin tarih şuuruna sahip olması diğer hiçbir değerden daha önemsiz değildir. Öyle ki günümüzün büyük problemlerinden birisi de gençlere tarih bilincini aşılamaktır (Uluğ, 2000). Projemiz “Zamanın İvmesi” ve ona eşlik eden dijital web ekosistemi, başta gençler ve öğrenciler olmak üzere milletimize dünya ve milli tarihimizi aşılamayı amaçlamaktadır. Bu şekilde toplum geçmişini daha iyi kavrayacak ve geleceğine ışık tutabilecektir.

---

## 2. PROBLEMİN TANIMI VE ÇÖZÜM ÖNERİSİ

### 2.1. Problemin Tanımı ve Önemi
Tarih, evrensel değerlerin gelecek nesillere aktarılmasında hayati bir köprü görevi görür. Bu değerlerin bireyde karşılık bulması için gençlere yönelik tarih çalışmalarının artırılması önem arz eder (Bayburt & Duman, 2020). Ancak genç nesillerin tarihe karşı ilgisizliği, bu tür çalışmaların yaygınlaşmasını ve tarihin toplumsal popülerliğini kısıtlayan kritik bir sorun olarak öne çıkmaktadır.

Yrd. Doç. Dr. Kadir Ulusoy tarafından Ankara’da 660 lise öğrencisinin (392 erkek, 268 kız) katılımıyla yürütülen çalışma (Ulusoy, 2009); öğrencilerin tarih dersine yönelik beklenti ve sorunlarını anketler aracılığıyla ortaya koymuştur. Araştırma sonuçlarına göre öğrencilerin büyük çoğunluğu (%82,7), maddeleri ezberlemek yerine olayların önemini ve geleceğe etkilerini analiz etmeyi tercih etmektedir. Öğrencilerin ders kitaplarına bağımlılıktan şikâyetçi olduğu; derslerde film, belgesel, harita ve görsel materyallerin daha etkin kullanımını beklediği saptanmıştır. Özetle bu çalışma; öğrencilerin ezbere dayalı, tek kaynağa bağlı ve düz anlatımlı yöntemlere karşı olumsuz bir tutum sergilediğini kanıtlamaktadır.

### 2.2. Çözüm Önerisi
Tarih bilinci ile ilişkin yapılan araştırmaların sayısı artmasına rağmen bu kavramın tanımı ve kapsamına ilişkin belirsizlikler halen devam etmektedir. Tarih bilincinin insanda ve toplumda; tarihsel olaylar arasında bağ kurma, tarihsel okuryazarlık, kümülatif düşünce gibi bazı değerleri aşılamasını sağlar (Hasdemir & Elban, 2023). Bahsettiğimiz konu ile ilişkin birçok yöntem ve araştırma geliştirilmiştir. Bu yöntemleri aramızda değerlendirince en etkili ve en uygun yöntemin oyunlaştırma olduğuna karar verdik ve uygulamamızı bunun üzerinden planladık.

İnsanlar keyif aldıkları oyunlarda zamanın nasıl geçtiğini fark etmez ve bu süreci bir kayıp olarak görmezler (Öz, 2002). Oyunlaştırma yöntemi, bu durumu avantaja çevirerek eğlenceyi öğrenme ile birleştirmeyi amaçlar. Biz de bu doğrultuda, kullanıcıların oyun oynarken farkında olmadan güçlü bir tarih bilinci kazanmalarını sağlamak için bu yöntemi uygulamamıza entegre ettik.

---

## 3. ÖZGÜNLÜK, UYGULANABİLİRLİK VE SÜRDÜRÜLEBİLİRLİK

### 3.1. Özgünlük
Proje fikir ve uygulama aşamalarından önce, gençler arasında tarih bilincini artırmaya yönelik kapsamlı araştırmalar ve beyin fırtınaları gerçekleştirdik. Mevcut eğitim sisteminin "saf bilgi verme" ve "ezber" odaklı yapısının, gerçek bir tarih bilinci oluşturmada yetersiz kaldığını saptadık. Literatür taramalarımızda; var olan strateji ve simülasyon oyunlarının temel amacının tarih öğretimi olmadığını gördük. Bu eksiklikten yola çıkarak, toplumsal fayda sağlamak amacıyla bilgiyi ezberletmek yerine öğreten bir çözüm geliştirmeye yöneldik. Nihayetinde; müfredatla uyumlu olan ve kullanıcıya yaptığı seçimlerle olaylara farklı perspektiflerden bakma imkânı tanıyan bir simülasyon oyunu geliştirme kararı aldık.

Buna ek olarak, projenin dijital vitrini ve bilgi merkezi olan web platformu da özgün teknolojilerle donatılmıştır. Sıradan statik tanıtım sitelerinin aksine, responsive (mobil uyumlu) yapı, modern cam efektli (glassmorphic) karanlık tema, akıcı kaydırma (scroll) animasyonları, dinamik TR/EN dil toggler altyapısı, Firebase/Firestore tabanlı canlı veri senkronizasyonu, doğrudan siteye gömülü Gemini API destekli yapay zekâ asistanı ve güvenli sunucusuz iletişim formu ile projeye özgün bir teknolojik derinlik katılmıştır.

### 3.2. Uygulanabilirlik ve Sürdürülebilirlik
Unity oyun motoru ve C# dili ile programladığımız oyunumızı, itch.io platformu üzerinden herkese açık şekilde yayımlayacağız. Tanıtım ve reklam faaliyetleriyle geniş bir kitleye ulaşmayı hedeflerken, TEKNOFEST 2026 sonrasında da güncellemelerle projemizi canlı tutmaya devam edeceğiz. Ayrıca ortaokul ve lise öğrencilerini kapsayan pilot uygulamalar sayesinde; projenin etkilerini ölçümleyerek ve geri bildirimler doğrultusunda geliştirmeler yaparak uygulamamızı sürekli optimize edeceğiz.

Projenin sürdürülebilirliğini güçlendirmek amacıyla, oyunu tamamlayan web platformunu kesintisiz erişim sağlayacak şekilde çift altyapı üzerinde barındırıyoruz: **Firebase Hosting** ve **GitHub Pages**. Bu yedekli yapı, herhangi bir sunucu veya hizmet kesintisinde dahi projenin kesintisiz biçimde erişilebilir kalmasını garanti eder. Sitenin sunucu taraflı karmaşık işlevleri (Gemini API tabanlı yapay zekâ asistanı ve iletişim formu gibi) Netlify üzerinde çalışan sunucusuz (serverless) fonksiyonlarla yürütülmekte, bu sayede ek bir sunucu maliyeti oluşmadan yüksek performanslı hizmet sürekliliği sağlanmaktadır. Geliştirme sürecinin her aşamasında GitHub repository üzerinden sürüm kontrolü yapılması, projeye gelecekte yeni katkı sağlayacak takım üyelerinin de kod tabanına kolayca dahil olmasına imkân tanımaktadır.

---

## 4. PROJENİN HAZIRLANIŞ SÜRECİ VE ÇALIŞMA YÖNTEMİ

### 4.1. Genel Geliştirme Adımları
Problem tanımlama aşamasının ardından, lise ve ortaokul seviyesindeki gençlere ulaşmak için literatür taraması ve beyin fırtınası süreçlerinden geçerek dijital oyunların ve etkileşimli dijital platformların en etkili yöntem olduğuna karar verdik. Bu doğrultuda, ekip içi koordinasyonu ve eş zamanlı çalışma planımızı koruyarak Unity oyun motoru, C# ve modern web teknolojileri (HTML5, CSS3, JavaScript, Node.js) ile geliştirme sürecine başladık. Uygulamamızı ve projemizi 4 ana bölüm halinde tasarladık ve geliştirdik:

1. **Görsel Varlıkların (Asset) Hazırlanması:** Uygulamadaki tüm görseller tarafımızca Photopea ve ilgili grafik araçları kullanılarak, optimizasyon odaklı hazırlanmıştır.
2. **Yazılım ve Kurgu Süreci:** Uygulamanın yazılımı; olay kurgusuna uygun, seçim ve karar verme mekanizması temelinde Unity/C# ile inşa edilmiştir.
3. **Oyun Sonu Analiz Ekranı:** Kullanıcının kararlarını değerlendiren kapsamlı bir analiz bölümü eklenmiştir. Bu sayede kullanıcı, eksiklerini fark ederek çalışmalarını bu veriler ışığında yönlendirebilecektir.
4. **Web Platformunun Geliştirilmesi ve Entegrasyonu:** Projenin dijital ayağını oluşturan, çok dilli ve tam uyumlu web sitesi sıfırdan geliştirilmiştir.

### 4.2. Web Platformu Mimarisi ve Entegrasyonu
Web platformu geliştirilirken aşağıdaki teknik ve mimari bileşenler projeye başarıyla entegre edilmiştir:

- **Tasarım ve Arayüz (UI/UX):** Projenin tarihi ve simülatif temasına uygun karanlık mod (dark theme) ve modern cam efektli (glassmorphism) görsel arayüz kurgulanmıştır. CSS ve JS altyapısı ile akıcı kaydırma (scroll) animasyonları eklenerek kullanıcı deneyimi zenginleştirilmiştir.
- **Çok Dilli Yapı (TR/EN Toggle):** Uluslararası erişilebilirliği sağlamak adına dinamik dil değiştirici (TR/EN toggle) geliştirilmiştir.
- **Firebase / Firestore Veri Tabanı Entegrasyonu:** Unity oyununda oluşan oyun skorları, kullanıcı istatistikleri ve analiz verileri Firestore veri tabanına iletilmekte ve web sitesindeki dinamik bölümlerde anlık olarak sergilenmektedir.
- **Yapay Zekâ Asistan Modülü (Gemini API & Netlify Functions):** Ziyaretçilerin proje ve tarihi senaryolar hakkında anlık bilgi alabilmesi için Google Gemini API entegre edilmiştir. API anahtarının güvenliğini sağlamak ve istemci tarafında sızdırılmasını önlemek amacıyla istekler Netlify Serverless (Fonksiyonsuz Sunucu) mimarisi üzerinden güvenli şekilde yönlendirilmektedir.
- **İletişim Formu (Resend API & Netlify Functions):** Sitenin alt bilgi (footer) bölümüne eklenen iletişim formu sayesinde ziyaretçiler takıma doğrudan mesaj gönderebilmektedir. Form verileri, Resend API üzerinden e-posta olarak iletilmekte; bu işlem de yine bir Netlify sunucusuz fonksiyonu aracılığıyla, API anahtarı istemci tarafında açığa çıkmadan güvenli bir şekilde gerçekleştirilmektedir.
- **Barındırma ve Dağıtım (Deployment):** Yüksek erişilebilirlik ilkesi doğrultusunda sistem GitHub Pages ve Firebase Hosting üzerinde çift yedekli olarak yayımlanmış, kod takibi GitHub repository ile sürüm kontrolüne alınmıştır.

### 4.3. Web Platformunun Teknik Detayları
Web platformunun geliştirilmesi sürecinde, kullanıcı deneyimini ve sistem güvenilirliğini artırmaya yönelik çeşitli teknik çözümler uygulanmıştır:

- **Modern CSS Animasyon Teknikleri:** Sayfa içi geçişlerde `animation-timeline: view()` özelliği kullanılarak, kullanıcının kaydırma hareketine bağlı akıcı bulanıklık (blur) ve belirme animasyonları hayata geçirilmiştir. Bu yaklaşım, ek JavaScript kütüphanelerine ihtiyaç duymadan performanslı ve modern bir kaydırma deneyimi sunmaktadır.
- **Responsive Navigasyon:** Mobil cihazlarda kullanılabilirliği artırmak amacıyla özel bir hamburger menü bileşeni geliştirilmiş, tüm ekran boyutlarında tutarlı bir gezinme deneyimi sağlanmıştır.
- **Çapraz Kaynak Güvenliği (CORS):** Sitenin GitHub Pages (`koraycik.github.io`) ve Netlify (`milat-ve-otesi.netlify.app`) üzerinde eş zamanlı barındırılması nedeniyle, sunucusuz fonksiyonlara uygun CORS (Cross-Origin Resource Sharing) başlıkları eklenerek farklı kaynaklardan gelen isteklerin güvenli şekilde işlenmesi sağlanmıştır.
- **Tematik İçerik Sayfaları:** Projenin tarihi bağlamını görsel olarak destekleyen, üzerine metin bindirilmiş kahraman (hero) fotoğraf düzenine sahip özel içerik sayfaları (ör. Malatya-Mardin temalı sayfa) tasarlanmıştır.
- **Sürüm Kontrolü ve Geliştirme Süreci:** Tüm geliştirme süreci GitHub Desktop ve VS Code Insiders üzerinden yürütülmüş, kod tabanındaki her değişiklik GitHub repository’sine düzenli olarak işlenerek (commit) sürüm geçmişi şeffaf biçimde takip edilmiştir.

---

## 5. PROJE TAKIMI

| Sıra | Üyenin Rolü | Eğitim Seviyesi | Sınıf | Takımdaki Görevi |
| :--- | :--- | :--- | :--- | :--- |
| – | Danışman | – | – | Rehber, Genel Kontrol Görevlisi. |
| 1 | Takım Lideri | Lise | 10 | Level Designer, Yazılımın Hazırlanması, Literatür Araştırması Görevlisi. |
| 2 | Yazılımcı | Lise | 10 | Yazılımın Hazırlanması, Web Platformunun Geliştirilmesi, Raporun Hazırlanması, Gerekli Assetleri Hazırlama Görevlisi. |

---

## 6. KAYNAKLAR

- [1] Taşbaş, E. (2018). 21. Yüzyıla Kadar Türkiye’de Tarih Öğretimi ve Hedefleri. *Akdeniz Üniversitesi Eğitim Fakültesi Dergisi*, 1(2), 173-188. [URL 🔗](https://izlik.org/JA97NM29SZ)
- [2] Ateş, A. (2017). TÜRKİYE CUMHURİYETİNDE ERKEN DÖNEM TARİH YAZIMI. *Akademik İzdüşüm Dergisi*, 2(3), 21-34. https://izlik.org/JA59EU28FJ
- [3] Bayburt, B., & Duman, D. (2020). DEĞERLER EĞİTİMİ AÇISINDAN MİLLİ MÜCADELE’Yİ ANLATMANIN VE AKTARMANIN ÖNEMİ. *Belgi Dergisi*, 2(19), 1704-19. [URL 🔗](https://doi.org/10.33431/belgi.576490)
- [4] Ulusoy, K. (2009). LİSE ÖĞRENCİLERİNİN TARİH DERSİNİN İŞLENİŞİ İLE İLGİLİ DÜŞÜNCELERİ (ANKARA ÖRNEĞİ). *Çukurova Üniversitesi Sosyal Bilimler Enstitüsü Dergisi*, 18(1), 417-434. https://izlik.org/JA26ZT79PU
- [5] Hasdemir, İ., & Elban, M. (2023). Tarih Bilinci, Kimlik ve Tarih Eğitimi. *Kuram ve Uygulamada Sosyal Bilimler Dergisi*, 7(1), 107-124. [URL 🔗](https://doi.org/10.48066/kusob.1286576)
- [6] Öz, T. (2022). BANKACILIK SEKTÖRÜNDE OYUNLAŞTIRMA VE PERFORMANS İLİŞKİSİ: BİR BANKA ÖRNEĞİ. *Necmettin Erbakan Üniversitesi Siyasal Bilgivalar Fakültesi Dergisi*, 4(1), 120-131. [URL 🔗](https://izlik.org/JA95MM59CK)
- [7] Alkan, M. Ö. (2013). II. Meşrutiyet’te resmi ideoloji, resmi tarih ve eğitim. (2. Baskı). V. Engin & A. Şimşek (Ed.), *Türkiye’de tarih yazımı* içinde (s. 221-336). Yeditepe.
- [8] Uluğ, N. (2000). Tarihsellik bilincinin felsefi ön bilgisi. *Felsefelogos Dergisi*, 3(9), 19-22.
