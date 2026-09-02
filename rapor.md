# YARARINA ON DEG

## İÇİNDEKİLER

## 1. PROJE ÖZETİ

### 1.1. Proje Özeti ve Proje Kapsamı
Tarih; bireyin "Ben kimim?" sorusuna yanıt aradığı, kimliğini anlamlandırılan bir gerçeklik bilimidir. Devletinin ve toplumunun geçmişini inceleyen birey, köklerindeki düşünce yapısını kavrayarak kendi kişiliğini inşa eder (Taşbaş, 2018). Türkiye’de bilimsel tarih çalışmaları esas olarak Cumhuriyet ile ivme kazanmış olsa da modern tarihçiliğin geç kurumsallaşması toplumsal bilinç gelişimini doğrudan etkilemiştir (Ateş, 2017). Bu nedenle, toplumun her kesimine nitelikli bir tarih bilinci kazandırmak, gelecek adına kritik bir önem taşımaktadır.

“Milat ve Ötesi” takımı olarak, tarih bilincini oyunlaştırmak amacıyla “Zamanın İvmesi” adlı bilgisayar destekli simülasyonu geliştirdik. Uygulamamız, kullanıcıyı tarihsel senaryolar içine dahil ederek olayları hem eğlendirici hem de öğretici bir biçimde aktarır. Uygulamamızın temel mantığı; kullanıcıya belirli tarihsel senaryolar içerisinde seçim yapma hakkı sunarak, olayları ve durumları hem eğlendirici hem de öğretici bir şekilde kullanıcıya aktarmaktır.

Ortaokuldan üniversiteye kadar geniş bir öğrenci kitlesine hitap eden bu platform; müfredat konularını ezberden uzak, kalıcı bir deneyime dönüştürürken, eğitimcilere de ders içi etkileşimi ve motivasyonu artırma imkânı sunar. Her yaştan tarih meraklısına kapılarını açan uygulamamızın ücretsiz ve masrafsız olması, çok daha geniş kitlelere ulaşmasını kolaylaştırmaktadır.

Oyunumuzu tamamlayıcı nitelikte, kullanıcıları ve değerlendiricileri projeyle buluşturan modern, erişilebilir ve çok dilli (Türkçe/İngilizce) bir web platformu geliştirdik. Bu platform üzerinden projenin amacı, oyun dinamikleri, takım tanıtımı, teknik belgeler ve tanıtım videoları görsel ve etkileşimli ögelerle sunulmaktadır. Platform; akıcı kaydırma animasyonları (scroll animations), dinamik dil değiştirme (TR/EN toggle) altyapısı ve tema diline uyumlu karanlık/cam efektli (glassmorphism) arayüz tasarımı ile kullanıcı deneyimini üst seviyeye çıkarmaktadır. Ayrıca Firebase/Firestore entegrasyonu sayesinde Unity oyunundan elde edilen kullanıcı istatistikleri ve skor verileri web arayüzüne gerçek zamanlı olarak yansıtılabilmektedir. Web sitesine doğrudan entegre edilen Google Gemini API tabanlı yapay zekâ asistan modülü sayesinde ziyaretçiler proje detayları ve tarihsel içerikler hakkında anlık, çift dilli soru-cevap desteği alabilmektedir.

### 1.2. Proje Amacı ve Toplumsal Faydası
Tarih bilincine sahip olmayan nesillerin ve milletlerin bir medeniyet inşa etmesi pek mümkün değildir (Alkan, 2013). Bu nedenle bir milletin tarih şuuruna sahip olması diğer hiçbir değerden daha önemsiz değildir. Öyle ki günümüzün büyük problemlerinden birisi de gençlere tarih bilincini aşılamaktır (Uluğ, 2000). Projemiz “Zamanın İvmesi” başta gençler ve öğrenciler olmak üzere milletimize dünya ve milli tarihimizi aşılamayı amaçlamaktadır. Bu şekilde toplum geçmişini bilecektir ve geleceğine ışık tutabilecektir.

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
Proje fikir ve uygulama aşamalarından önce, gençler arasında tarih bilincini artırmaya yönelik kapsamlı araştırmalar ve beyin fırtınaları gerçekleştirdik. Mevcut eğitim sisteminin "saf bilgi verme" ve "ezber" odaklı yapısının, gerçek bir tarih bilinci oluşturmada yetersiz kaldığını saptadık. Literatür taramalarımızda; var olan strateji ve simülasyon oyunlarının temel amacının tarih öğretimi olmadığını gördük. Bu eksiklikten yola çıkarak, toplumsal fayda sağlamak amacıyla bilgiyi ezberletmek yerine öğreten bir çözüm geliştirmeye yöneldik. Nihayetinde; müfredatla uyumlu olan ve kullanıcıya yaptığı seçimlerle olaylara farklı perspektiflerden bakma imkânı tanıyan bir simülasyon oyunu geliştirme kararı aldık. Mevcut eğitim yöntemlerinin yetersizliğinden yola çıkarak, gençlere ulaşmanın en etkili yolu olan tarih bilincini oyunlaştırma stratejisini benimsedik. Geliştirdiğimiz dijital simülasyonda yenilikçi teknikler kullanarak, öğrencilerin öğrenme sürecinden alacağı verimi en üst düzeye çıkarmayı hedefledik.

### 3.2. Uygulanabilirlik ve Sürdürülebilirlik
Unity oyun motoru ve C# dili ile programladığımız oyunumuzu, itch.io platformu üzerinden herkese açık şekilde yayımlayacağız. Tanıtım ve reklam faaliyetleriyle geniş bir kitleye ulaşmayı hedeflerken, TEKNOFEST 2026 sonrasında da güncellemelerle projemizi canlı tutmaya devam edeceğiz. Ayrıca ortaokul ve lise öğrencilerini kapsayan pilot uygulamalar sayesinde; projenin etkilerini ölçümleyerek ve geri bildirimler doğrultusunda geliştirmeler yaparak uygulamamızı sürekli optimize edeceğiz. Bu yöntem, uygulamamızın kullanılma durumunu arttıracaktır.

Projenin sürdürülebilirliğini güçlendirmek amacıyla, oyunu tamamlayan web platformunu kesintisiz erişim sağlayacak şekilde çift altyapı üzerinde barındırıyoruz: **Firebase Hosting** ve **GitHub Pages**. Bu yedekli yapı, herhangi bir sunucu veya hizmet kesintisinde dahi projenin kesintisiz biçimde erişilebilir kalmasını garanti eder. Sitenin sunucu taraflı karmaşık işlevleri (Gemini API tabanlı yapay zekâ asistanı gibi) Netlify üzerinde çalışan sunucusuz (serverless) fonksiyonlarla yürütülmekte, bu sayede ek bir sunucu maliyeti oluşmadan yüksek performanslı hizmet sürekliliği sağlanmaktadır. Geliştirme sürecinin her aşamasında GitHub repository üzerinden sürüm kontrolü yapılması, projeye gelecekte yeni katkı sağlayacak takım üyelerinin de kod tabanına kolayca dahil olmasına imkân tanımaktadır.

---

## 4. PROJENİN HAZIRLANIŞ SÜRECİ VE ÇALIŞMA YÖNTEMİ

Problem tanımlama aşamasının ardından, lise ve ortaokul seviyesindeki gençlere ulaşmak için literatür taraması ve beyin fırtınası süreçlerinden geçerek dijital oyunların en etkili yöntem olduğuna karar verdik. Bu doğrultuda, ekip içi koordinasyonu ve eş zamanlı çalışma planımızı koruyarak Unity oyun motoru ve C# dili ile geliştirme sürecine başladık. Planlı ve koordine ilerleyişimiz sayesinde projemizi bu teknik temel üzerine inşa ettik. Uygulamamızı 4 ana bölüm halinde tasarladık ve geliştirdik:

1. **Görsel Varlıkların (Asset) Hazırlanması:** Uygulamadaki tüm görseller tarafımızca Photopea programı kullanılarak, optimizasyon odaklı hazırlanmıştır.
2. **Yazılım ve Kurgu Süreci:** Uygulamanın yazılımı; olay kurgusuna uygun, seçim ve karar verme mekanizması temelinde inşa edilmiştir.
3. **Oyun Sonu Analiz Ekranı:** Kullanıcının kararlarını değerlendiren kapsamlı bir analiz bölümü eklenmiştir. Bu sayede kullanıcı, eksiklerini fark ederek çalışmalarını bu veriler ışığında yönlendirebilecektir.
4. **Web Platformunun Geliştirilmesi ve Entegrasyonu:** Oyunu destekleyen, çift dilli (TR/EN) ve tüm ekran boyutlarına uyumlu (responsive/mobil uyumlu) modern bir web sitesi tasarlanıp geliştirilmiştir. Bu süreçte:
   - Oyunun atmosferine uygun karanlık ve modern cam efektli (glassmorphism) bir görsel arayüz kimliği kurgulanmış,
   - Sayfa içi yumuşak geçiş sağlayan düzenleme ve dinamik dil değiştirme (TR/EN) sistemleri eklenmiş,
   - Firebase/Firestore altyapısı sayesinde Unity oyunundaki kullanıcı istatistikleri ve skor verileri web arayüzü ile ilişkilendirilmiş,
   - Gemini API tabanlı, çift dilli çalışan yapay zekâ destekli asistan modülü Netlify sunucusuz (serverless) fonksiyonları üzerinden güvenli ve ölçeklenebilir şekilde siteye entegre edilmiştir.

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
- [6] Öz, T. (2022). BANKACILIK SEKTÖRÜNDE OYUNLAŞTIRMA VE PERFORMANS İLİŞKİSİ: BİR BANKA ÖRNEĞİ. *Necmettin Erbakan Üniversitesi Siyasal Bilgiler Fakültesi Dergisi*, 4(1), 120-131. [URL 🔗](https://izlik.org/JA95MM59CK)
- [7] Alkan, M. Ö. (2013). II. Meşrutiyet’te resmi ideoloji, resmi tarih ve eğitim. (2. Baskı). V. Engin & A. Şimşek (Ed.), *Türkiye’de tarih yazımı* içinde (s. 221-336). Yeditepe.
- [8] Uluğ, N. (2000). Tarihsellik bilincinin felsefi ön bilgisi. *Felsefelogos Dergisi*, 3(9), 19-22.
