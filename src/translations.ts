export type Language = 'EN' | 'ID';

export const translations = {
  EN: {
    nav: {
      about: 'About',
      products: 'Products',
      contact: 'Contact Us',
    },
    hero: {
      headline: "The Main Gateway of Indonesia's Premium Commodities to the Global Market",
      subheadline: 'Connecting high-quality Indonesian resources with international demand through excellence and integrity.',
      cta: 'Contact Us on WhatsApp',
    },
    about: {
      title: 'Our Journey',
      content1: 'With over 20 years of experience, CV Tridaya Nusantara Global has evolved from a local production hub of Rayung brooms into a leading global exporter of premium commodities.',
      content2: 'Based in Purbalingga, Central Java, our dedicated warehouse serves as the center for meticulous grading, processing, and packaging, ensuring every product meets international standards.',
      experience: '20+ Years Excellence',
    },
    values: {
      title: 'Our Core Values',
      accountability: {
        title: 'Accountability',
        desc: 'Built on honesty and deep technical expertise in every transaction.',
      },
      experience: {
        title: 'Experience',
        desc: 'Sustainable and eco-friendly practices developed over decades.',
      },
      worldwide: {
        title: 'Worldwide Delivery',
        desc: 'Fully insured and compliant with global shipping regulations.',
      },
      flexibility: {
        title: 'Flexibility',
        desc: 'A customer-centric approach tailored to your specific requirements.',
      },
    },
    products: {
      title: 'Our Premium Commodities',
      items: [
        {
          name: 'Cloves',
          desc: 'Premium dried aromatic cloves',
          image: '/images/cloves-custom.jpg',
          fullDesc: "Indonesian Cloves are globally renowned for their rich aromatic profile. They are carefully harvested as premium flower buds and precision-dried. This exceptional spice — celebrated for its complex, warm and sweet fragrance — is a preferred ingredient for gourmet cooking and industrial applications worldwide.",
          specs: {
            'Product Name': 'Cloves',
            'Origin': 'East Java, Indonesia',
            'Product Form': 'Whole Dried',
            'Moisture Content': 'Maximum 12%',
            'Packaging': 'Gunny bags, 25kg – 50kg per bag',
            'MOQ': '25 Metric Tons',
            'Supply Capacity': '100 Metric Tons per month'
          }
        },

        { 
          name: 'White Cardamom', 
          desc: 'Premium dried aromatic white cardamom', 
          image: '/images/white-cardamom-custom.jpg',
          fullDesc: "White Cardamom from East Java, Indonesia, is a premium spice boasting a highly fragrant aroma, a subtle sweet‑spicy flavour, and a distinctive, exceptional taste. Sourced from selected plant varieties and carefully dried, it retains its natural ivory‑white colour and characteristic freshness. Our white cardamom meets unmatched export‑grade quality, making it ideal for use in the food, pharmaceutical, and fragrance industries worldwide.",
          specs: {
            'Product Name': 'White Cardamom',
            'Origin': 'East Java, Indonesia',
            'Product Condition': 'Dried, Whole, Natural Ivory‑White Colour',
            'Moisture Content': 'Maximum 12%',
            'Packaging': 'Gunny bags, 25kg – 50kg per bag',
            'MOQ': '25 Metric Tons',
            'Supply Capacity': '100 Metric Tons per month',
            'Export Availability': 'Year‑round'
          }
        },
        {
          name: 'Fresh Turmeric',
          desc: 'Indonesian premium fresh turmeric with high curcumin content',
          image: '/images/turmeric-custom.jpg',
          fullDesc: "One of Indonesia’s premier spice commodities, harvested fresh in compliance with export quality standards to preserve its highest curcumin content. It is widely used across the globe in culinary preparations, as well as a raw material for pharmaceutical and herbal products.",
          specs: {
            'Product Name': 'Turmeric',
            'Origin': 'Central Java, Indonesia',
            'Product Condition': 'Fresh / Raw',
            'Size': '2 – 7 cm in diameter',
            'Packaging': 'Mesh bags, 20kg – 50kg per bag',
            'MOQ': '25 Metric Tons',
            'Supply Capacity': '200 Metric Tons per month'
          }
        },
        {
          name: 'Rayung Grass / Gelagah Grass',
          desc: 'Naturally sun‑dried Rayung and Gelagah grass raw material',
          image: '/images/rayung-glagah-custom.jpg',
          fullDesc: "Rayung Grass / Gelagah Grass is a hardy type of grass featuring long, strong fibres. It is naturally sun‑dried until it reaches the ideal dryness and durability, making it a superior primary raw material for crafting traditional brooms. Its flexible yet dense fibres deliver excellent cleaning performance.",
          specs: {
            'Product Name': 'Dried Rayung Grass / Gelagah Grass',
            'Product Type': 'Natural Fibre, Raw Material for Traditional Broom Making',
            'Stem Length': '100 cm – 150 cm (customisable upon request)',
            'Packaging': 'Gunny bags, 25 kg – 50 kg per bag',
            'MOQ': '50 Metric Tons',
            'Supply Capacity': '500 Metric Tons per month'
          }
        },
        {
          name: 'Elephant Ginger',
          desc: 'Premium fresh jumbo elephant ginger',
          image: '/images/elephant-ginger-custom.jpg',
          fullDesc: "Elephant Ginger from East Java, Indonesia, is a premium variety featuring massive rhizomes, large finger‑like sections, and thin, smooth skin. Its tender flesh and low fibre content make it a top choice for the global food, beverage, and pharmaceutical industries. Carefully harvested and sorted to ensure the highest quality and freshness, our Elephant Ginger delivers a distinct warm aroma and well‑balanced spiciness, perfectly suited for export markets.",
          specs: {
            'Product Name': 'Elephant Ginger',
            'Origin': 'East Java, Indonesia',
            'Product Condition': 'Fresh, Whole, Jumbo Size',
            'Moisture Content': 'Maximum 75–80% (to preserve freshness)',
            'Packaging': 'Gunny bags or pallets, 25kg – 50kg per unit',
            'MOQ': '25 Tons',
            'Supply Capacity': '100 Tons per month',
            'Export Availability': 'Year‑round'
          }
        },
        {
          name: 'Premium Coconut Shell Charcoal',
          desc: 'Premium raw charcoal for briquettes',
          image: '/images/coconut-charcoal-custom.jpg',
          fullDesc: "Premium Coconut Shell Charcoal is a top‑grade raw material, carefully manufactured specifically for the charcoal briquette industry. Produced from selected coconut shells and efficiently carbonised using a controlled pyrolysis method — this process preserves its natural pore structure and purity. The result is coconut shell charcoal with a high carbon content, delivering long‑lasting, consistent heat output, and free from foreign impurities. It is ideal for producing coconut shell charcoal briquettes that meet export‑quality standards.",
          specs: {
            'Product Name': 'Premium Coconut Shell Charcoal',
            'Origin': 'Jambi, Central Sumatra – Indonesia',
            'Product Type': 'Coconut Shell Charcoal',
            'Size': 'Mixed (Fragments, Chunks – can be customised)',
            'Moisture Content': '< 12% – < 15%',
            'Ash Content': '3%',
            'Packaging': 'Gunny bags, 25kg – 30kg per bag',
            'MOQ': '50 Tons',
            'Supply Capacity': '500 Tons / Month',
            'Export Availability': 'Year‑round'
          }
        },
        {
          name: 'Premium Dried Cocoa Beans',
          desc: 'Rich flavor, sustainably fermented Sulawesi cocoa beans',
          image: '/images/cocoa-beans-custom.jpg',
          fullDesc: "These beans feature a rich and complex flavor profile. Grown at medium altitudes, they are known for a deep pure chocolate aroma, full body, and well‑balanced fruity notes. Careful fermentation and drying processes ensure premium export quality suitable for the global chocolate industry.",
          specs: {
            'Product Name': 'Premium Dried Cocoa Beans',
            'Origin': 'Sulawesi, Indonesia',
            'Condition': 'Dried, Fermented, Sorted',
            'Moisture Content': '7.0%',
            'MOQ': '50 tons',
            'Packaging': 'Gunny bags / Jute sacks',
            'Monthly Supply Capacity': '500 tons',
            'Export Availability': 'Year‑round'
          }
        },
        {
          name: 'Traditional Premium Rayung Broom',
          desc: 'Exquisite traditional handcrafted rayung broom from Purbalingga',
          image: '/images/rayung-broom-custom.jpg',
          fullDesc: "Traditional Premium Rayung Broom From Purbalingga, Central Java, Indonesia. Crafted with generations of traditional hand‑making expertise. Made from selected high‑quality rayung grass (gelagah grass) — strong yet flexible. These brooms offer superior durability and attractive natural appearance. Careful material selection and colorful hand‑weaving at the neck ensure premium quality and neat finishing, meeting global market standards.",
          specs: {
            'Product Name': 'Traditional Premium Rayung Broom',
            'Origin': 'Purbalingga, Central Java, Indonesia',
            'Product Condition': 'Dried, Neatly Woven, Selected Fibers',
            'MOQ': '20,000 pcs',
            'Packaging': 'Gunny sack / Jute bag, 50 pcs per pack',
            'Monthly Supply Capacity': '50,000 pcs',
            'Export Availability': 'Year‑round'
          }
        },
        {
          name: 'Candlenut',
          desc: 'Premium high-oil content dried candlenuts for culinary and medicinal use',
          image: '/images/candlenut-custom.jpg',
          fullDesc: "Candlenuts have a high oil content, so they are often used as a source of natural oil. In addition, candlenuts have anti‑inflammatory and antioxidant properties, making them widely used in traditional medicine to treat various health conditions.",
          specs: {
            'Product Name': 'Candlenut',
            'Product Type': 'Spice',
            'Condition': 'Dried | Clean | Premium Quality',
            'Size': 'Approx. 3 – 5 cm diameter',
            'Packaging': 'Sack',
            'Export Availability': 'Year‑round'
          }
        },
        {
          name: 'Premium Robusta Green Coffee Beans',
          desc: 'Strong, bold Lampung Robusta coffee beans with high viscosity',
          image: '/images/robusta-coffee-custom.jpg',
          fullDesc: "Premium Robusta Green Coffee Beans From Indonesia. These beans feature a strong, bold flavor profile. Grown at medium altitudes, this coffee is known for its full body, high viscosity, and rich aroma with notes of chocolate, nuts, and spices. Strict sorting processes guarantee premium export quality for the global market.",
          specs: {
            'Product Name': 'Premium Robusta Green Coffee Beans',
            'Origin': 'Lampung, Indonesia',
            'Grade & Process': 'Grade 1 – Full Wash',
            'Moisture Content': 'Max 10%',
            'Size': 'Screen 16/18 (>90%)',
            'MOQ': '25 tons',
            'Packaging': 'Gunny bag lined with Grainpro inner',
            'Monthly Supply Capacity': '100 tons',
            'Export Availability': 'Year‑round'
          }
        },
      ],
    },
    exportTerms: {
      title: 'Export Logistics & Terms',
      logistics: 'Logistics: Multi-logistics support for worldwide sample distribution.',
      incoterms: 'Incoterms: FOB, CIF (Port to Port).',
      payment: 'Payment: LC & TT',
    },
    footer: {
      address: 'Purbalingga, Central Java, Indonesia',
      rights: '© 2026 CV Tridaya Nusantara Global. All rights reserved.',
    },
    waMessage: "Hello CV Tridaya Nusantara Global, I visited your website and I am interested in your products (please specify: Coffee/Charcoal/Spices/Brooms). Could you please provide more information regarding the specifications and minimum order quantity (MOQ)? Thank you.",
  },
  ID: {
    nav: {
      about: 'Tentang',
      products: 'Produk',
      contact: 'Hubungi Kami',
    },
    hero: {
      headline: 'Gerbang Utama Komoditas Unggulan Indonesia ke Pasar Global',
      subheadline: 'Menghubungkan sumber daya berkualitas Indonesia dengan permintaan internasional melalui keunggulan dan integritas.',
      cta: 'Hubungi via WhatsApp',
    },
    about: {
      title: 'Perjalanan Kami',
      content1: 'Dengan lebih dari 20 tahun pengalaman, CV Tridaya Nusantara Global telah berkembang dari pusat produksi lokal sapu Rayung menjadi eksportir global komoditas unggulan.',
      content2: 'Berbasis di Purbalingga, Jawa Tengah, gudang khusus kami berfungsi sebagai pusat grading, pemrosesan, dan pengemasan yang teliti, memastikan setiap produk memenuhi standar internasional.',
      experience: '20+ Tahun Keunggulan',
    },
    values: {
      title: 'Nilai Inti Kami',
      accountability: {
        title: 'Akuntabilitas',
        desc: 'Dibangun di atas kejujuran dan keahlian teknis yang mendalam di setiap transaksi.',
      },
      experience: {
        title: 'Pengalaman',
        desc: 'Praktik berkelanjutan dan ramah lingkungan yang dikembangkan selama beberapa dekade.',
      },
      worldwide: {
        title: 'Pengiriman Seluruh Dunia',
        desc: 'Asuransi penuh dan patuh terhadap peraturan pengiriman global.',
      },
      flexibility: {
        title: 'Fleksibilitas',
        desc: 'Pendekatan berpusat pada pelanggan yang disesuaikan dengan kebutuhan spesifik Anda.',
      },
    },
    products: {
      title: 'Komoditas Unggulan Kami',
      items: [
        {
          name: 'Cengkeh',
          desc: 'Cengkeh aromatik kering premium',
          image: '/images/cloves-custom.jpg',
          fullDesc: "Cengkeh Indonesia terkenal di seluruh dunia karena profil aromatiknya yang kaya. Bunga cengkeh ini dipanen secara hati-hati sebagai kuncup bunga pilihan dan dikeringkan dengan presisi. Rempah luar biasa ini — yang terkenal dengan keharumannya yang kompleks, hangat, dan manis — merupakan bahan pilihan untuk memasak kuliner gourmet dan aplikasi industri di seluruh dunia.",
          specs: {
            'Nama Produk': 'Cengkeh',
            'Asal': 'Jawa Timur, Indonesia',
            'Bentuk Produk': 'Utuh Kering',
            'Kadar Air': 'Maksimal 12%',
            'Pengemasan': 'Karung goni, 25kg – 50kg per karung',
            'MOQ': '25 Metrik Ton',
            'Kapasitas Pasokan': '100 Metrik Ton per bulan'
          }
        },

        { 
          name: 'Kapulaga Putih', 
          desc: 'Kapulaga putih kering pilihan kualitas ekspor', 
          image: '/images/white-cardamom-custom.jpg',
          fullDesc: "Kapulaga Putih dari Jawa Timur, Indonesia, adalah rempah premium yang menawarkan aroma sangat harum, rasa manis-pedas yang lembut, dan keunikan cita rasa yang luar biasa. Bersumber dari varietas tanaman pilihan dan dikeringkan secara hati-hati, komoditas ini mempertahankan warna putih gading alami serta kesegaran khasnya. Kapulaga putih kami memenuhi standar kualitas kelas ekspor yang tak tertandingi, menjadikannya sangat ideal untuk digunakan dalam industri makanan, farmasi, dan wewangian di seluruh dunia.",
          specs: {
            'Nama Produk': 'Kapulaga Putih',
            'Asal': 'Jawa Timur, Indonesia',
            'Kondisi Produk': 'Kering, Utuh, Warna Putih Gading Alami',
            'Kadar Air': 'Maksimal 12%',
            'Pengemasan': 'Karung goni, 25kg – 50kg per karung',
            'MOQ': '25 Metrik Ton',
            'Kapasitas Pasokan': '100 Metrik Ton per bulan',
            'Ketersediaan Ekspor': 'Sepanjang tahun'
          }
        },
        {
          name: 'Kunyit Segar',
          desc: 'Kunyit segar premium Indonesia dengaan kandungan kurkumin tinggi',
          image: '/images/turmeric-custom.jpg',
          fullDesc: "Salah satu komoditas rempah unggulan Indonesia, dipanen segar sesuai dengan standar kualitas ekspor untuk menjaga kandungan kurkumin tertingginya. Banyak digunakan di seluruh dunia dalam persiapan kuliner, serta sebagai bahan baku produk farmasi dan herbal.",
          specs: {
            'Nama Produk': 'Kunyit',
            'Asal': 'Jawa Tengah, Indonesia',
            'Kondisi Produk': 'Segar / Mentah',
            'Ukuran': 'Diameter 2 – 7 cm',
            'Pengemasan': 'Karung jaring, 20kg – 50kg per karung',
            'MOQ': '25 Metrik Ton',
            'Kapasitas Pasokan': '200 Metrik Ton per bulan'
          }
        },
        {
          name: 'Rumput Rayung / Rumput Glagah',
          desc: 'Bahan baku rumput Rayung dan Glagah kering matahari alami',
          image: '/images/rayung-glagah-custom.jpg',
          fullDesc: "Rumput Rayung / Rumput Glagah adalah jenis rumput tangguh yang memiliki serat panjang dan kuat. Dikeringkan secara alami di bawah sinar matahari hingga mencapai tingkat kering dan daya tahan yang ideal, menjadikannya bahan baku utama yang unggul untuk membuat sapu tradisional. Seratnya yang fleksibel namun padat memberikan kinerja pembersihan yang luar biasa.",
          specs: {
            'Nama Produk': 'Rumput Rayung / Rumput Glagah Kering',
            'Jenis Produk': 'Serat Alami, Bahan Baku Pembuatan Sapu Tradisional',
            'Panjang Batang': '100 cm – 150 cm (dapat disesuaikan berdasarkan permintaan)',
            'Pengemasan': 'Karung goni, 25 kg – 50 kg per karung',
            'MOQ': '50 Metrik Ton',
            'Kapasitas Pasokan': '500 Metrik Ton per bulan'
          }
        },
        {
          name: 'Jahe Gajah',
          desc: 'Jahe gajah segar premium ukuran jumbo',
          image: '/images/elephant-ginger-custom.jpg',
          fullDesc: "Jahe Gajah dari Jawa Timur, Indonesia, adalah varietas premium yang memiliki rimpang besar, bagian seperti jari yang besar, dan kulit tipis yang halus. Dagingnya yang empuk dan kadar seratnya yang rendah menjadikannya pilihan utama bagi industri makanan, minuman, dan farmasi global. Dipanen dan disortir dengan hati-hati untuk memastikan kualitas dan kesegaran tertinggi, Jahe Gajah kami menghasilkan aroma hangat yang khas dan rasa pedas yang seimbang, sangat cocok untuk pasar ekspor.",
          specs: {
            'Nama Produk': 'Jahe Gajah',
            'Asal': 'Jawa Timur, Indonesia',
            'Kondisi Produk': 'Segar, Utuh, Ukuran Jumbo',
            'Kadar Air': 'Maksimal 75–80% (untuk menjaga kesegaran)',
            'Pengemasan': 'Karung goni atau palet, 25kg – 50kg per unit',
            'MOQ': '25 Ton',
            'Kapasitas Pasokan': '100 Ton per bulan',
            'Ketersediaan Ekspor': 'Sepanjang tahun'
          }
        },
        {
          name: 'Arang Tempurung Kelapa Premium',
          desc: 'Arang batok kelapa premium untuk briket',
          image: '/images/coconut-charcoal-custom.jpg',
          fullDesc: "Arang Tempurung Kelapa Premium adalah bahan baku berkualitas tinggi, diproduksi secara cermat khusus untuk industri briket arang. Diproduksi dari tempurung kelapa pilihan dan dikarbonisasi secara efisien menggunakan metode pirolisis terkontrol — proses ini menjaga struktur pori alami dan kemurniannya. Hasilnya adalah arang tempurung kelapa dengan kandungan karbon tinggi, menghasilkan panas yang tahan lama dan konsisten, serta bebas dari kotoran asing. Sangat ideal untuk memproduksi briket arang tempurung kelapa yang memenuhi standar kualitas ekspor.",
          specs: {
            'Nama Produk': 'Arang Tempurung Kelapa Premium',
            'Asal': 'Jambi, Sumatra Tengah – Indonesia',
            'Jenis Produk': 'Arang Tempurung Kelapa',
            'Ukuran': 'Campuran (Patahan, Bongkahan – dapat disesuaikan)',
            'Kadar Air': '< 12% – < 15%',
            'Kadar Abu': '3%',
            'Pengemasan': 'Karung goni, 25kg – 30kg per karung',
            'MOQ': '50 Ton',
            'Kapasitas Pasokan': '500 Ton / Bulan',
            'Ketersediaan Ekspor': 'Sepanjang tahun'
          }
        },
        {
          name: 'Biji Kakao Kering Premium',
          desc: 'Biji kakao Sulawesi berkualitas dengan fermentasi sempurna',
          image: '/images/cocoa-beans-custom.jpg',
          fullDesc: "Biji kakao ini memiliki profil rasa yang kaya dan kompleks. Ditanam di ketinggian sedang, dikenal dengan aroma cokelat murni yang mendalam, cita rasa mantap, serta nuansa buah yang seimbang. Proses fermentasi dan pengeringan yang teliti memastikan kualitas ekspor premium yang sesuai kebutuhan industri cokelat global.",
          specs: {
            'Nama Produk': 'Biji Kakao Kering Premium',
            'Asal': 'Sulawesi, Indonesia',
            'Kondisi': 'Kering, Terfermentasi, Disortir',
            'Kadar Air': '7.0%',
            'MOQ': '50 Ton',
            'Pengemasan': 'Karung goni / Karung rami',
            'Kapasitas Pasokan Bulanan': '500 Ton',
            'Ketersediaan Ekspor': 'Sepanjang tahun'
          }
        },
        {
          name: 'Sapu Rayung Premium Tradisional',
          desc: 'Sapu rayung kerajinan tangan tradisional premium dari Purbalingga',
          image: '/images/rayung-broom-custom.jpg',
          fullDesc: "Sapu Rayung Premium Tradisional dari Purbalingga, Jawa Tengah, Indonesia. Dibuat dengan keahlian tangan tradisional turun-temurun selama beberapa generasi. Terbuat dari rumput rayung (rumput gelagah) pilihan berkualitas tinggi — kuat sekaligus lentur. Sapu ini menawarkan daya tahan unggul dan tampilan alami yang menarik. Pemilihan bahan yang cermat dan anyaman tangan yang kaya warna di bagian leher memastikan kualitas premium dan penyelesaian akhir yang rapi, memenuhi standar pasar global.",
          specs: {
            'Nama Produk': 'Sapu Rayung Premium Tradisional',
            'Asal': 'Purbalingga, Jawa Tengah, Indonesia',
            'Kondisi Produk': 'Kering, Dianyam Rapi, Serat Pilihan',
            'MOQ': '20.000 pcs',
            'Pengemasan': 'Karung goni / Karung rami, 50 pcs per pak',
            'Kapasitas Pasokan Bulanan': '50.000 pcs',
            'Ketersediaan Ekspor': 'Sepanjang tahun'
          }
        },
        {
          name: 'Kemiri',
          desc: 'Kemiri kering berkualitas premium dengan kandungan minyak tinggi',
          image: '/images/candlenut-custom.jpg',
          fullDesc: "Kemiri memiliki kandungan minyak yang tinggi, sehingga sering digunakan sebagai sumber minyak alami. Selain itu, kemiri memiliki khasiat antiinflamasi dan antioksidan, menjadikannya banyak digunakan dalam pengobatan tradisional untuk berbagai kondisi kesehatan.",
          specs: {
            'Nama Produk': 'Kemiri',
            'Jenis Produk': 'Rempah',
            'Kondisi': 'Kering | Bersih | Kualitas Premium',
            'Ukuran': 'Diameter sekitar 3 – 5 cm',
            'Pengemasan': 'Karung',
            'Ketersediaan Ekspor': 'Sepanjang tahun'
          }
        },
        {
          name: 'Biji Kopi Hijau Robusta Premium',
          desc: 'Biji kopi Robusta Lampung yang kuat dan mantap dengan tingkat kekentalan tinggi',
          image: '/images/robusta-coffee-custom.jpg',
          fullDesc: "Biji Kopi Hijau Robusta Premium dari Indonesia. Biji kopi ini menawarkan profil rasa yang kuat dan mantap. Ditanam di ketinggian sedang, kopi ini dikenal dengan teksturnya yang kental (full body), viskositas tinggi, serta aroma kaya dengan nuansa cokelat, kacang-kacangan, dan rempah-rempah. Proses sortir yang ketat menjamin kualitas ekspor premium untuk pasar global.",
          specs: {
            'Nama Produk': 'Biji Kopi Hijau Robusta Premium',
            'Asal': 'Lampung, Indonesia',
            'Mutu & Proses': 'Mutu 1 – Full Wash',
            'Kadar Air': 'Maks 10%',
            'Ukuran': 'Screen 16/18 (>90%)',
            'MOQ': '25 Ton',
            'Pengemasan': 'Karung goni dilapisi Grainpro di dalam',
            'Kapasitas Pasokan Bulanan': '100 Ton',
            'Ketersediaan Ekspor': 'Sepanjang tahun'
          }
        },
      ],
    },
    exportTerms: {
      title: 'Logistik & Syarat Ekspor',
      logistics: 'Logistik: Dukungan multi-logistik untuk distribusi sampel ke seluruh dunia.',
      incoterms: 'Incoterms: FOB, CIF (Pelabuhan ke Pelabuhan).',
      payment: 'Pembayaran: LC & TT',
    },
    footer: {
      address: 'Purbalingga, Jawa Tengah, Indonesia',
      rights: '© 2026 CV Tridaya Nusantara Global. Hak cipta dilindungi.',
    },
    waMessage: "Halo CV Tridaya Nusantara Global, saya melihat website Anda dan tertarik dengan produk (mohon sebutkan: Kopi/Arang/Rempah/Sapu). Bisa berikan informasi lebih lanjut mengenai spesifikasi dan minimal order? Terima kasih.",
  },
};
