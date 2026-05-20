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
          image: '/img-content/cloves-custom.jpg',
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
          name: 'Corn Kernels', 
          desc: 'High-grade yellow corn', 
          image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=800',
          fullDesc: "Top-tier Indonesian Yellow Corn Kernels of superior agricultural grade. Sorted thoroughly and dried uniformly to retain quality, perfect for starch processing, livestock feed manufactures, and various human consumption-grade industrial processes.",
          specs: {
            'Product Name': 'Yellow Corn Kernels',
            'Origin': 'Central Java, Indonesia',
            'Product Form': 'Dried Kernels',
            'Moisture Content': 'Maximum 14%',
            'Foreign Matter': 'Maximum 2%',
            'Packaging': 'Polypropylene bags (50kg)',
            'MOQ': '50 Metric Tons',
            'Supply Capacity': '500 Metric Tons per month'
          }
        },
        { 
          name: 'Coffee Beans', 
          desc: 'Premium Arabica & Robusta', 
          image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800',
          fullDesc: "Carefully sourced green coffee beans representing Indonesia's iconic volcanic soil profiles. Available in Arabica and Robusta varieties, properly graded with low defects and carefully dried to preserve deep flavor notes, earthiness, and premium roast potential.",
          specs: {
            'Product Name': 'Green Coffee Beans (Arabica & Robusta)',
            'Origin': 'Sumatra & Java, Indonesia',
            'Product Form': 'Green Beans, Grade 1 sorted',
            'Moisture Content': 'Maximum 12.5%',
            'Defect Rate': 'Grade 1 Premium Standards',
            'Packaging': 'Gunny bags (60kg) with GrainPro lining',
            'MOQ': '18 Metric Tons (1x20ft FCL)',
            'Supply Capacity': '200 Metric Tons per month'
          }
        },
        { 
          name: 'White Cardamom', 
          desc: 'Premium dried aromatic white cardamom', 
          image: '/img-content/white-cardamom-custom.jpg',
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
          name: 'Ginger', 
          desc: 'Fresh and dried aromatic ginger', 
          image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&q=80&w=800',
          fullDesc: "High-yield Indonesian Elephant Ginger (Jahe Gajah) and Aromatic Ginger. Highly praised for its thick, plump rhizomes with high gingerol and shogaol essential concentration, offering intense heat, warmth, and culinary/medicinal applicability.",
          specs: {
            'Product Name': 'Fresh & Dried Ginger',
            'Origin': 'Central Java, Indonesia',
            'Product Form': 'Fresh whole / Split Dried',
            'Moisture Content': 'Dried Max 12% / Fresh Natural',
            'Sorting': 'Soil-washed, sorted & clean dried',
            'Packaging': 'Mesh cargo bags or crates (25kg)',
            'MOQ': '15 Metric Tons',
            'Supply Capacity': '100 Metric Tons per month'
          }
        },
        { 
          name: 'Dried Glagah Grass', 
          desc: 'Premium handicraft material', 
          image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800',
          fullDesc: "Wild Glagah Grass harvested responsibly in rural Central Java. Cleaned, thoroughly sorted, and sun-dried to a golden-tan color. This highly durable raw material features incredible stiffness and flex ideal for weaving premium rustic homewares, baskets, and decorative crafts.",
          specs: {
            'Product Name': 'Dried Glagah Grass (Wild Reed)',
            'Origin': 'Purbalingga, Central Java, Indonesia',
            'Product Form': 'Sun-Dried Stalks',
            'Stalk Length': 'Average 70cm - 110cm',
            'Moisture Content': 'Uniform completely dried',
            'Packaging': 'Compressed high-density bales (25kg - 50kg)',
            'MOQ': '5 Metric Tons',
            'Supply Capacity': '30 Metric Tons per month'
          }
        },
        { 
          name: 'Rayung Grass Brooms', 
          desc: 'Traditional handcrafted quality', 
          image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
          fullDesc: "Our signature, internationally acclaimed handcrafted Rayung Grass Brooms. Using natural woven wild grass head and selected bamboo stems, these durable brooms combine robust construction with eye-catching rustic aesthetics, built entirely by expert local artisans in Purbalingga.",
          specs: {
            'Product Name': 'Rayung Grass Brooms',
            'Origin': 'Purbalingga, Central Java, Indonesia',
            'Product Form': 'Artisanal finished brooms',
            'Head Material': 'Selected wild Rayung grass fibers',
            'Handle': 'Robust bamboo or sustainable wooden shaft',
            'Packaging': 'Individual protective wrap, woven bags or carton boxes (50 pcs)',
            'MOQ': '5,000 Pieces',
            'Supply Capacity': '50,000 Pieces per month'
          }
        },
        {
          name: 'Fresh Turmeric',
          desc: 'Indonesian premium fresh turmeric with high curcumin content',
          image: '/img-content/turmeric-custom.jpg',
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
          image: '/img-content/rayung-glagah-custom.jpg',
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
      ],
    },
    exportTerms: {
      title: 'Export Logistics & Terms',
      logistics: 'Logistics: DHL for global sample distribution.',
      incoterms: 'Incoterms: EXW, FOB, CIF (Port to Port).',
      payment: 'Payment: Irrevocable LC at Sight.',
    },
    footer: {
      address: 'Purbalingga, Central Java, Indonesia',
      rights: '© 2024 CV Tridaya Nusantara Global. All rights reserved.',
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
          image: '/img-content/cloves-custom.jpg',
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
          name: 'Biji Jagung', 
          desc: 'Jagung kuning kualitas tinggi', 
          image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=800',
          fullDesc: "Biji Jagung Kuning Indonesia kualitas unggul tingkat pertanian terbaik. Disortir secara menyeluruh dan dikeringkan secara merata untuk menjaga kualitas, sempurna untuk proses industri pati, pabrik pakan ternak, dan konsumsi pangan manusia.",
          specs: {
            'Nama Produk': 'Biji Jagung Kuning',
            'Asal': 'Jawa Tengah, Indonesia',
            'Bentuk Produk': 'Biji Kering',
            'Kadar Air': 'Maksimal 14%',
            'Bahan Asing': 'Maksimal 2%',
            'Pengemasan': 'Karung Polipropilena (50kg)',
            'MOQ': '50 Metrik Ton',
            'Kapasitas Pasokan': '500 Metrik Ton per bulan'
          }
        },
        { 
          name: 'Biji Kopi', 
          desc: 'Arabika & Robusta Premium', 
          image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800',
          fullDesc: "Biji kopi hijau pilihan yang mewakili profil rasa khas tanah vulkanis Indonesia. Tersedia dalam varietas Arabika dan Robusta, dipilah dengan cermat dengan tingkat cacat rendah dan dikeringkan perlahan untuk menjaga aroma mendalam, cita rasa bumi, dan potensi pemanggangan premium.",
          specs: {
            'Nama Produk': 'Biji Kopi Hijau (Arabika & Robusta)',
            'Asal': 'Sumatra & Jawa, Indonesia',
            'Bentuk Produk': 'Biji Kopi Hijau, Sortir Grade 1',
            'Kadar Air': 'Maksimal 12.5%',
            'Tingkat Cacat': 'Kesesuaian Standar Premium Grade 1',
            'Pengemasan': 'Karung goni (60kg) dengan pelindung GrainPro',
            'MOQ': '18 Metrik Ton (1x20ft FCL)',
            'Kapasitas Pasokan': '200 Metrik Ton per bulan'
          }
        },
        { 
          name: 'Kapulaga Putih', 
          desc: 'Kapulaga putih kering pilihan kualitas ekspor', 
          image: '/img-content/white-cardamom-custom.jpg',
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
          name: 'Jahe', 
          desc: 'Jahe aromatik segar dan kering', 
          image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&q=80&w=800',
          fullDesc: "Jahe Gajah dan Jahe Emprit Indonesia hasil panen melimpah. Sangat diakui karena rimpangnya yang tebal, gemuk, dengan konsentrasi tinggi bahan aktif gingerol dan shogaol, memberikan panas yang intens, kehangatan rasa, serta kesesuaian untuk sajian kuliner dan kesehatan.",
          specs: {
            'Nama Produk': 'Jahe Segar & Kering',
            'Asal': 'Jawa Tengah, Indonesia',
            'Bentuk Produk': 'Jahe utuh segar / Belah Kering',
            'Kadar Air': 'Kering Maks 12% / Segar Alami',
            'Penyaringan': 'Dicuci bersih dari tanah, disortir, & dikeringkan',
            'Pengemasan': 'Karung jaring atau peti kargo (25kg)',
            'MOQ': '15 Metrik Ton',
            'Kapasitas Pasokan': '100 Metrik Ton per bulan'
          }
        },
        { 
          name: 'Rumput Glagah Kering', 
          desc: 'Bahan kerajinan premium', 
          image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800',
          fullDesc: "Rumput Glagah liar yang dipanen secara bertanggung jawab di pedesaan Jawa Tengah. Dibersihkan, disortir dengan cermat, dan dikeringkan secara alami hingga berwarna cokelat keemasan. Bahan baku yang sangat tahan lama ini memiliki kekakuan dan kelenturan yang ideal untuk menganyam kebutuhan rumah tangga, keranjang, dan kerajinan dekoratif bernuansa pedesaan.",
          specs: {
            'Nama Produk': 'Rumput Glagah Kering (Wild Reed)',
            'Asal': 'Purbalingga, Jawa Tengah, Indonesia',
            'Bentuk Produk': 'Batang Kering Matahari',
            'Panjang Batang': 'Rata-rata 70cm - 110cm',
            'Kadar Air': 'Kering merata sempurna',
            'Pengemasan': 'Bale berdensitas tinggi dikompresi (25kg - 50kg)',
            'MOQ': '5 Metrik Ton',
            'Kapasitas Pasokan': '30 Metrik Ton per bulan'
          }
        },
        { 
          name: 'Sapu Rumput Rayung', 
          desc: 'Kualitas kerajinan tradisional', 
          image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
          fullDesc: "Sapu Rumput Rayung buatan tangan khas kami yang telah diakui secara internasional. Menggunakan anyaman kepala rumput liar Rayung alami dan gagang bambu pilihan, sapu yang tahan lama ini menggabungkan konstruksi kokoh dengan estetika pedesaan yang menawan, diproduksi sepenuhnya oleh pengrajin ahli lokal di Purbalingga.",
          specs: {
            'Nama Produk': 'Sapu Rumput Rayung',
            'Asal': 'Purbalingga, Jawa Tengah, Indonesia',
            'Bentuk Produk': 'Sapu jadi hasil kerajinan tangan',
            'Bahan Kepala': 'Serat tanaman Rayung pilihan',
            'Gagang': 'Bambu kokoh atau gagang kayu berkelanjutan',
            'Pengemasan': 'Bungkus pelindung individu, karung anyaman atau kotak karton (50 pcs)',
            'MOQ': '5.000 Unit',
            'Kapasitas Pasokan': '50.000 Unit per bulan'
          }
        },
        {
          name: 'Kunyit Segar',
          desc: 'Kunyit segar premium Indonesia dengaan kandungan kurkumin tinggi',
          image: '/img-content/turmeric-custom.jpg',
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
          image: '/img-content/rayung-glagah-custom.jpg',
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
      ],
    },
    exportTerms: {
      title: 'Logistik & Syarat Ekspor',
      logistics: 'Logistik: DHL untuk distribusi sampel global.',
      incoterms: 'Incoterms: EXW, FOB, CIF (Pelabuhan ke Pelabuhan).',
      payment: 'Pembayaran: LC Irrevocable at Sight.',
    },
    footer: {
      address: 'Purbalingga, Jawa Tengah, Indonesia',
      rights: '© 2024 CV Tridaya Nusantara Global. Hak cipta dilindungi.',
    },
    waMessage: "Halo CV Tridaya Nusantara Global, saya melihat website Anda dan tertarik dengan produk (mohon sebutkan: Kopi/Arang/Rempah/Sapu). Bisa berikan informasi lebih lanjut mengenai spesifikasi dan minimal order? Terima kasih.",
  },
};
