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
      content1: 'With over 20 years of experience, CV Tridaya Nusantara Global has grown from a local spice supplier to a global exporter of this premium commodity.',
      content2: 'Based in Purbalingga, Central Java, our dedicated warehouse serves as a center for meticulous sorting, processing, and packaging, ensuring each product meets international standards.',
      experience: '20+ Years Excellence',
    },
    visionMission: {
      title: 'Our Vision & Mission',
      vision: {
        title: 'Vision',
        text: 'To become the primary gateway for Indonesia’s leading export commodities by providing a one-stop solution for diverse global market needs.',
      },
      mission: {
        title: 'Mission',
        items: [
          {
            title: 'Curated Quality Products',
            desc: 'To curate and supply the best Indonesian products through strict quality control standards and reliable sourcing processes.',
          },
          {
            title: 'One-Stop Global Access',
            desc: 'To simplify access for international buyers in obtaining various high-quality products through a single integrated platform.',
          },
          {
            title: 'Strategic Local Partnerships',
            desc: 'To build strong strategic partnerships with local producers across multiple sectors to ensure sustainable and stable supply availability.',
          },
          {
            title: 'Integrated Logistics Solutions',
            desc: 'To provide efficient integrated logistics services tailored to different product categories and global distribution requirements.',
          },
          {
            title: 'International Compliance Standards',
            desc: 'To maintain international compliance standards across every exported product line to support trusted and sustainable global trade.',
          },
        ],
      },
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
          name: 'PREMIUM LAL PARI CLOVES',
          desc: 'Premium Indonesian Agricultural Export',
          image: '/images/cloves-custom.jpg',
          fullDesc: "Picked meticulously at the peak bud stage just before blooming, our Premium Lal Pari Cloves are naturally sun-dried in the optimal tropical climate of Sulawesi. This process yields whole cloves with a characteristically brilliant, shiny reddish-brown color and an intensely sharp, aromatic profile. Exceptionally rich in essential oils and active bio-compounds, this high-tier spice is thoroughly sorted to remove dust and stems. It is globally trusted for premium culinary applications, the tobacco manufacturing industry, essential oil distillation, and high-end pharmaceutical or fragrance formulations.",
          specs: {
            'Scientific Name': 'Syzygium aromaticum',
            'HS Code': '0907.10.00',
            'Origin': 'Sulawesi, Indonesia',
            'Grade / Type': 'Grade AB6 (Premium Lal Pari Standard)',
            'Condition': '100% naturally sun-dried, perfectly dry, and structurally sound',
            'Appearance': 'Whole dried flower buds with fully intact heads',
            'Color Profile': 'Shiny reddish-brown to dark brown-reddish',
            'Aroma & Taste': 'Deeply distinctive, intensely pungent, and strong aroma',
            'Essential Oil Content': 'Min. 15% - 18%',
            'Eugenol Content': 'Min. 70.0% - 85.0%',
            'Eugenyl Acetate': '15.0% - 20.0% (High premium chemical purity)',
            'Moisture Content': 'Max 5.0% (Optimized to completely prevent internal mold)',
            'Total Ash': 'Max 7.0%',
            'Foreign Matter': 'Max 0.5% (100% free from stones, dust, weeds, and external plant waste)',
            'Purity Level': 'Thoroughly cleaned, completely free from stems, insects, or chemical residues',
            'Supply Capacity': 'Up to 100 Metric Tons (MT) per month',
            'Minimum Order': '1x20-ft Container (Approx. 10-12 MT)',
            'Standard Packaging': 'New Polypropylene (PP) Sacks or Jute Bags (25 kg / 50 kg net weight capacity, or customized layout upon request)',
            'Shipping Method': 'Standard Dry Container (Equipped with heavy-duty desiccants/silica gel bags to manage sea moisture)'
          }
        },

        { 
          name: 'PREMIUM WHITE CARDAMOM', 
          desc: 'Premium Indonesian Agricultural Export', 
          image: '/images/white-cardamom-custom.jpg',
          fullDesc: "Selected exclusively for top-tier quality, our White Cardamom (Javanese Cardamom) features whole, well-developed pods with a naturally clean skin and zero cracks. Cultivated in the ideal microclimate of West Java, it offers a soft yet long-lasting sweet-spicy aromatic scent and a uniquely rich flavor profile. Carefully dried and packaged without any artificial chemicals, it retains its pristine freshness, volatile oils, and authentic aroma from the farm to its destination. It is highly sought after as a premium culinary spice, gourmet beverage ingredient, and a raw material for high-end perfumes and medicinal fragrances.",
          specs: {
            'Scientific Name': 'Amomum compactum',
            'HS Code': '0908.31.00',
            'Origin': 'West Java, Indonesia',
            'Grade / Type': 'Premium Grade / Whole Dried Javanese Cardamom',
            'Condition': 'Whole dried pods, firm structure, with no cracks or empty shells',
            'Form & Process': '100% Sun-dried or controlled Oven-dried layout',
            'Color Profile': 'Natural White to Light Cream / Light Brownish-White (100% Bleach-Free & Chemical-Free)',
            'Pod Quality': 'Min. 90.0% Well-Filled Pods (Excellent seed density inside)',
            'Moisture Content': 'Max 10.0% – 12.0% (Optimized for long-term storage)',
            'Foreign Matter': 'Max 1.0% (Meticulously hand-sorted to remove stalks, dust, and leaves)',
            'Supply Capacity': 'Up to 150 Metric Tons (MT) per month',
            'Minimum Order': '1x20-ft Container',
            'Standard Packaging': '50 kg PP Woven Bags equipped with high-barrier Inner Plastic Liners (Customized packaging layouts available upon request)',
            'Shipping Method': 'Standard Dry Container (Equipped with industrial moisture-absorbing silica gel bags)'
          }
        },
        {
          name: 'Fresh Turmeric',
          desc: 'Premium Indonesian Agricultural Export',
          image: '/images/turmeric-custom.jpg',
          fullDesc: "Sourced from premium plants grown in nutrient-rich soil, our Fresh Turmeric produces superior mother rhizomes with a bright natural yellow-to-orange internal color and exceptionally high curcumin content. It offers a strong, authentic flavor and rich aroma profile. Harvested, thoroughly cleaned, and packed according to strict international standards to maintain pristine freshness upon arrival. Perfect for premium cooking spices, health supplements, pharmaceutical extraction, and natural food coloring.",
          specs: {
            'Scientific Name': 'Curcuma longa (Syn. Curcuma domestica)',
            'HS Code': '0910.30.00',
            'Origin': 'East Java, Indonesia',
            'Grade / Type': 'Mother Rhizome',
            'Appearance / Shape': 'Plump, round, or egg-shaped bulbs (thick central core rhizome)',
            'Color': 'Clean brownish-yellow skin with bright, deep orange/yellow flesh inside',
            'Texture': 'Firm, fleshy, crisp, and freshly harvested',
            'Curcumin Content': 'Min. 4.5% – 6.0% (Premium active profile)',
            'Volatile Oil': 'Min. 2.5% (High aroma profile)',
            'Moisture Content': 'Max 70% - 75%',
            'Foreign Matter': 'Max 1% (100% free from soil, mud, and sand particles)',
            'Defective / Broken': 'Max 2% (Free from soft rot, internal mold, and deep cuts)',
            'Supply Capacity': 'Up to 200 Metric Tons (MT) per month',
            'Minimum Order': '20FT Container',
            'Standard Packaging': 'Mesh Bags (20 kg / 25 kg capacity) or Customized Ventilated Carton/Plastic Boxes',
            'Shipping Method': 'Temperature-controlled Reefer Container'
          }
        },
        {
          name: 'FRESH GALANGAL',
          desc: 'Premium Indonesian Agricultural Export',
          image: '/images/fresh_galangal_logo.png',
          fullDesc: "Cultivated in the fertile agricultural lands of Central Java, our Fresh Galangal is meticulously harvested and sorted to meet strict international standards. It possesses a characteristically strong, sharp aroma and a dense, firm flesh profile. Each rhizome is thoroughly brushed, washed, and handled to preserve its natural juices and smooth skin layout. Highly versatile and fiber-rich, this premium ginger-family crop is globally utilized as an essential culinary spice, a core raw material in the commercial food processing industry, and an active ingredient in traditional medicine and wellness formulations.",
          specs: {
            'Scientific Name': 'Alpinia galanga',
            'HS Code': '0910.99.00',
            'Origin': 'Central Java, Indonesia',
            'Grade / Type': 'Grade A (Premium Export Quality)',
            'Condition': 'Whole, fresh, firm flesh, with no wrinkles or structural damage',
            'Appearance': 'Clean light brown skin with firm white-yellowish interior flesh',
            'Cleanliness Level': 'Thoroughly washed and brushed, 100% free from soil residues, active pests, or fungus',
            'Quality Defect': 'Zero tolerance for soft rot, mechanical cuts, internal mold, or withered pieces',
            'Moisture Content': 'Max 80% – 85% (Freshly harvested profile)',
            'Size Distribution': 'Premium large rhizomes',
            'Length': '15 cm – 25 cm per piece',
            'Diameter': '3 cm – 6 cm per piece',
            'Supply Capacity': 'Up to 100 Metric Tons (MT) per month',
            'Minimum Order': '1x20-ft Reefer Container (Approx. 11-12 MT)',
            'Standard Packaging': 'Mesh Bags / Net Sacks (20 kg / 25 kg capacity, or upon buyer\'s request)',
            'Shipping Method': 'Temperature-controlled Reefer Container'
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
            'MOQ': '20FT Containers',
            'Supply Capacity': '1,000 Tons per month'
          }
        },
        {
          name: 'Fresh Elephant Ginger',
          desc: 'Premium Indonesian Agricultural Export',
          image: '/images/elephant-ginger-custom.jpg',
          fullDesc: "Our Fresh Elephant Ginger is carefully cultivated in the fertile volcanic soil of East Java. Known for its large rhizomes, thick skin, and firm flesh, this variety delivers a perfectly balanced aroma and mild spiciness. It is highly sought after for global fresh markets, culinary uses, and food industry processing.",
          specs: {
            'Scientific Name': 'Zingiber officinale var. officinale',
            'HS Code': '0910.11.00',
            'Origin': 'East Java, Indonesia',
            'Grade': 'Grade A (Premium Export Quality)',
            'Condition': 'Whole, fresh, and firm layout',
            'Appearance': 'Thoroughly washed, free from soil, pests, and mold',
            'Characteristics': 'Thick, wrinkle-free skin with zero rot or mechanical damage',
            'Aroma': 'Strong, distinct, and naturally aromatic',
            'Moisture Content': 'Max 80% – 85% (Freshly harvested)',
            'Size Distribution': '100g to 250g+ per piece',
            'Supply Capacity': 'Up to 200 Metric Tons (MT) per month',
            'Minimum Order': '20FT Container',
            'Standard Packaging': 'Mesh Bags (20 kg / 25 kg) or Ventilated Carton Boxes (Upon Request)',
            'Shipping Method': 'Temperature-controlled Reefer Container'
          }
        },
        {
          name: 'PREMIUM COCONUT SHELL CHARCOAL',
          desc: 'Premium Indonesian Agricultural Export',
          image: '/images/coconut-charcoal-custom.jpg',
          fullDesc: "Produced exclusively from high-quality, fully mature coconut shells, our Premium Coconut Shell Charcoal is carbonized under strictly controlled pyrolytic conditions to ensure pure, high-density charcoal layout. It features an exceptionally high fixed carbon content, delivering a stable heat output, a prolonged burning time, and practically zero smoke or unpleasant odor. Sourced from the expansive plantations of Sumatra, the charcoal is systematically crushed and screened to guarantee uniform granule sizes free from soil and external debris. It serves as an excellent, sustainable raw material for premium shisha/barbecue briquette manufacturing, active water filtration media, and specialized chemical and metallurgical industry applications.",
          specs: {
            'Scientific Name Source': 'Cocos nucifera (100% Carbonized Shell)',
            'HS Code': '4402.20.00',
            'Origin': 'Sumatra, Indonesia',
            'Grade / Type': 'Natural Raw Granular Charcoal',
            'Fixed Carbon Content': '80.0% - 85.0% (Premium energy core)',
            'Calorific Value': 'High energy output (7,200 - 7,500 kcal/kg)',
            'Moisture Content': 'Max 8.0% (Perfectly dry for easy ignition)',
            'Ash Content': 'Low residue profile (2.5% - 3.0%)',
            'Volatile Matter': '12.0% - 15.0%',
            'Granule Size Options': '1.0 cm - 5.0 cm (Custom crushing mesh size distributions available upon request)',
            'Impurities & Foreign Matter': 'Max 0.5% (100% free from soil, stones, unburnt wood, and metal fragments)',
            'Physical Appearance': 'Clean, even, jet-black shards layout',
            'Combustion Profile': 'Odorless, sparking-free, and minimal smoke production',
            'Supply Capacity': 'Up to 100 Metric Tons (MT) per month',
            'Minimum Order': '1x20-ft Container (Approx. 14-15 MT depending on load layout)',
            'Standard Packaging': 'Heavy-duty, Double-layer Polypropylene (PP) Woven Bags (Available in 25 kg or 50 kg net weight capacity, or customized bag printing upon request)',
            'Shipping Method': 'Standard Dry Container (Must be packed tightly to prevent movement; shipping line approval for non-hazardous declaration requires valid SHT)'
          }
        },
        {
          name: 'Premium Dried Cocoa Beans',
          desc: 'Premium Indonesian Agricultural Export',
          image: '/images/cocoa-beans-custom.jpg',
          fullDesc: "Processed through natural fermentation and controlled drying following strict international standards, our Premium Cocoa Beans deliver a rich, deep, and characteristic chocolate flavor profile. Sourced from the fertile volcanic soils of Sulawesi, these beans are carefully sun-dried to reduce moisture to a safe, stable storage level. Each batch is meticulously sorted to ensure uniformly brown, whole, clean, and pest-free beans. They are perfectly ready for premium processing into high-end chocolate, cocoa butter, cocoa powder, and gourmet confectionery products.",
          specs: {
            'Scientific Name': 'Theobroma cacao',
            'HS Code': '1801.00.00 (Cocoa beans, whole or broken, raw)',
            'Origin': 'Sulawesi, Indonesia',
            'Grade / Type': 'Grade A / Grade 1 (Premium Export Quality)',
            'Condition': 'Dried, fully fermented, and thoroughly sorted',
            'Drying Style': '100% Sun-dried',
            'Bean Count': '85 – 100 beans per 100 grams (Excellent density and size)',
            'Moisture Content': 'Max 6.0% – 7.0% (Stable for long-distance transit)',
            'Broken Beans': 'Max 1% (Highly uniform presentation)',
            'Appearance': 'Clean, uniformly brown, free from internal mold, insects, and foreign matter',
            'Supply Capacity': 'Up to 300 Metric Tons (MT) per month',
            'Minimum Order': '20FT Container (Approx. 15-16 MT)',
            'Standard Packaging': 'Food-Grade Jute Bags (60 kg capacity per sack, or upon request)',
            'Shipping Method': 'Standard Dry Container (Equipped with moisture absorbers / desiccants)'
          }
        },
        {
          name: 'NATURAL REED GRASS BROOM',
          desc: 'Traditional Eco-Friendly Cleaning Export',
          image: '/images/rayung-broom-custom.jpg',
          fullDesc: "Handcrafted carefully using selected, fully dried rayung reed grass. Tied tightly and neatly with high-durability binding materials. This traditional broom provides excellent sweeping performance, remains lightweight, and is long-lasting. It is 100% natural, biodegradable, and ideal for modern eco-friendly household or commercial cleaning needs.",
          specs: {
            'Scientific Name Source': 'Saccharum spontaneum',
            'HS Code': '9603.10.20',
            'Origin': 'Central Java, Indonesia',
            'Raw Material': '100% Premium Natural Dried Rayung Grass',
            'Handle Options': 'Dry, straight Round Wood or Bamboo (Upon request)',
            'Binding Material': 'Durable Young Rattan Rope / Strong Tree Bark Fiber',
            'Weight per Unit': 'Minimum 300 grams up',
            'Condition': 'Completely dried, lightweight, mold-free, and tightly bound',
            'Supply Capacity': 'Up to 30,000 pieces per month',
            'Minimum Order': '1x20-ft Container',
            'Standard Packaging': '30 pcs-50pcs in one burlap sack (upon request)'
          }
        },
        {
          name: 'Candlenut',
          desc: 'High-Yield Indonesian Kernel Export',
          image: '/images/candlenut-custom.jpg',
          fullDesc: "Sourced from premium trees, our Grade A Shelled Candlenuts deliver whole kernels with an exceptionally high natural oil content. Meticulously sorted and double-cleaned, they feature a rich, savory flavor and excellent crisp texture. Perfect for the global food industry, premium culinary spices, vegetable oil extraction, and natural cosmetic formulations.",
          specs: {
            'Scientific Name': 'Aleurites moluccanus',
            'HS Code': '0802.93.00',
            'Origin': 'Sulawesi, Indonesia',
            'Grade / Type': 'Grade A (Premium Whole Kernels)',
            'Color Profile': 'Naturally clean, uniform creamy white to pale ivory',
            'Oil Content': 'Min. 60.0% - 65.0% (Exceptionally high rich yield)',
            'Moisture Content': '5% - 8%',
            'Processing': 'Naturally Sun-dried',
            'Purity Level': 'Thoroughly sorted, zero tolerance for dirt, dust, or shell fragments',
            'Supply Capacity': 'Up to 150 MT per month',
            'Minimum Order': '1x20-ft Container',
            'Standard Packaging': '25 kg / 50 kg New Woven Polypropylene (PP) bags with Inner PE Plastic Liners or premium Jute sacks upon request'
          }
        },
        {
          name: 'Premium Whole In-Shell Candlenut',
          desc: 'Premium Indonesian Agricultural Export',
          image: '/images/in-shell_cundlenuts_logo.png',
          fullDesc: "Sourced from premium, sustainably managed plantations across Sulawesi, our In-Shell Candlenuts are systematically harvested only when fully ripe. They are carefully dried to lock in freshness and protect the rich oil reserves inside. The protective outer shells are hard, durable, completely intact, and free from cracks or deep fractures. This guarantees total shield against environmental elements during transport, preserving the dense, premium-grade meat inside. Ideal for industrial oil extraction processing, global cosmetic raw materials, and the international food sector.",
          specs: {
            'Scientific Name': 'Aleurites moluccanus',
            'HS Code': '0802.99.00 (Other nuts, fresh or dried, in shell)',
            'Origin': 'Sulawesi, Indonesia',
            'Grade / Type': 'Grade A / Whole In-Shell',
            'Condition': 'Well-dried, hard outer shell completely intact, with no cracks or empty nuts',
            'Appearance': 'Naturally dark-brown to black outer shell, clean from heavy dirt and dust',
            'Size Distribution': '2.5 cm to 4.0 cm in diameter',
            'Kernel Characteristic': 'Contains dense, well-developed interior seeds with rich natural oil potential',
            'Purity Level': 'Min. 98% – 99% (Thoroughly hand-sorted and machine-filtered)',
            'Moisture Content': 'Max 10.0% – 12.0% (Optimized for safe overseas transit)',
            'Foreign Matter': 'Max 1% (100% free from heavy soil, stones, mud, and external plant waste)',
            'Damaged / Molded Nuts': 'Max 3% (Zero tolerance for visible external rot or active pest boring holes)',
            'Supply Capacity': 'Up to 150 Metric Tons (MT) per month',
            'Minimum Order': '1x20-ft Container',
            'Standard Packaging': 'New Heavy-Duty Polypropylene (PP) Sacks or Jute Sacks (50 kg net weight capacity per sack, or customized layout upon request)',
            'Shipping Method': 'Standard Dry Container (Equipped with industrial moisture-absorbing silica gel bags)'
          }
        },
        {
          name: 'GREEN ROBUSTA COFFEE BEANS',
          desc: 'Premium Indonesian Agricultural Export',
          image: '/images/robusta-coffee-custom.jpg',
          fullDesc: "Harvested from well-maintained, high-altitude plantations across the fertile volcanic belts of South Sumatra, our Green Robusta Coffee Beans are meticulously processed through specialized pulping, washing, and controlled drying methods. This rigorous attention to detail produces a clean, uniform green bean with perfectly stabilized moisture levels. Known for its bold body, deep flavor profile, clean balanced bitterness, and ideal natural caffeine content, this premium coffee is highly stable for long transit. It is perfectly ready for professional roasting, customized blending, and industrial food processing according to diverse global market preferences.",
          specs: {
            'Scientific Name': 'Coffea canephora (Syn. Coffea robusta)',
            'HS Code': '0901.11.10',
            'Origin': 'South Sumatra, Indonesia',
            'Grade / Type': 'Grade 1 (Premium Export Quality)',
            'Condition': 'Raw green coffee beans, thoroughly cleaned, and machine-sorted',
            'Color Profile': 'Uniform clean green to greenish-blue (Fresh crop layout)',
            'Moisture Content': '11.0% – 12.5% (Perfectly optimized for long-term storage shelf life)',
            'Foreign Matter': 'Max 0.5% – 1.0% (100% free from stones, dust, sticks, and outer husks)',
            'Defect Tolerance': 'Max 5% / Under Grade 1 SNI Export Standard (Meticulously sorted)',
            'Supply Capacity': 'Up to 100 Metric Tons (MT) per month',
            'Minimum Order': '1x20-ft Container (Approx. 18-19 MT)',
            'Standard Packaging': 'Food-Grade Jute Sacks combined with high-barrier Hermetic Inner Liners (GrainPro/Equivalent) to preserve freshness (60 kg net weight capacity per sack)',
            'Shipping Method': 'Standard Dry Container (Equipped with heavy-duty desiccants to manage humidity fluctuations)'
          }
        },
        {
          name: 'Premium Whole Shelled Nutmeg',
          desc: 'Premium Indonesian Agricultural Export',
          image: '/images/shelled_nutmeg_logo.png',
          fullDesc: "Harvested only when fully ripe in the fertile agricultural regions of Sulawesi, our Premium Nutmeg is processed through a gradual and natural sun-drying method. This traditional attention to detail ensures that the core moisture content remains perfectly stable. The resulting nuts are solid, beautifully whole, and retain a characteristically strong aroma and deep, sharp flavor. This highly versatile spice is thoroughly packed to preserve its delicate oils, making it the perfect raw material for the culinary spice markets, essential oil extraction, and premium pharmaceutical or cosmetic formulations.",
          specs: {
            'Scientific Name': 'Myristica fragrans',
            'HS Code': '0908.11.00',
            'Origin': 'Sulawesi, Indonesia (Premium Siau / Ambon Equivalent)',
            'Grade / Type': 'Grade A / High Quality Whole Shelled (Without Shell)',
            'Condition': 'Whole, solid, dry, and clean presentation',
            'Drying Process': '100% Natural Sun-dried',
            'Moisture Content': 'Max 8.0% – 10.0% (Stable for prolonged storage)',
            'Essential Oil Content': 'High volatile profile (Min. 2.3% – 6.0%)',
            'Foreign Matter': 'Max 0.5% – 1.0% (Meticulously hand-sorted)',
            'Mold & Insect Damage': 'Nil (100% free from visible mold, weevils, or internal pests)',
            'Safety Profile': 'Non-Mycotoxin & Aflatoxin-Compliant (Strict export standard)',
            'Supply Capacity': 'Up to 150 Metric Tons (MT) per month',
            'Minimum Order': '1x20-ft Container',
            'Standard Packaging': '25 kg / 50 kg Gunny Bags (Jute/PP Bags) or Customized layout upon request',
            'Shipping Method': 'Standard Dry Container (Equipped with desiccants / silica gels)'
          }
        },
        {
          name: 'COCOA POWDER ( NATURAL & ALKALIZED )',
          desc: 'Premium Indonesian Agricultural Export',
          image: '/images/cocoa_powder_logo.png',
          fullDesc: "Our Cocoa Powder is processed from selected cocoa beans that have been thoroughly fermented and dried in Indonesia. Handled under precise, pure, and hygienic conditions with advanced production lines, it is available in both Natural and Alkalized variants (Dutch process). It delivers a rich chocolate flavor, intensely pleasant aroma, stable coloration, and exceptional mixability—making it ideal for confectionery, chocolate bars, dairy, bakery, beverage brands, and various industrial food manufactures.\n\nWe offer complete quality variants to cater to your specific applications:\n• LOW GRADE: Fat content 5% - 9%. Suitable for budget-friendly products and industrial blends.\n• STANDARD GRADE: Fat content 10% - 12%. Best balance of flavor, color, and solubility for the general market.\n• MEDIUM GRADE: Fat content 10% - 12%. More consistent quality and richer flavor for branded food and beverage products.\n• PREMIUM GRADE: Fat content 10% - 12%. Highest quality, richest flavor, and most stable color for chocolate bars and competitive export markets.",
          specs: {
            'Scientific Name Source': 'Theobroma cacao',
            'HS Code': '1805.00.0000',
            'Origin': 'Indonesia (Sulawesi, Java, Sumatra)',
            'Type': 'Natural & Alkalized (Dutch Process)',
            'Moisture Content': '4.5% - 5.0% (Optimized for dryness)',
            'Fat Content': 'Natural: 5% - 9% (Low) | Alkalized: 10% - 12% (Standard / Medium / Premium)',
            'Ash Content': 'Natural: Max 8.0% | Alkalized: 9.0% - 10.0%',
            'pH Level': 'Natural: 5.0 - 5.8 | Alkalized: 6.0 - 8.2 (depending on color depth)',
            'Heavy Metal Content': 'Pb < 2 ppm, Cd < 1 ppm (Strictly compliant with international standards)',
            'Microbiology': 'Total Plate Count < 5,000 cfu/g, Mold & Yeast < 500 cfu/g, Salmonella & Coliform Free',
            'Odor & Taste': 'Natural: Typical fresh cocoa, rich aroma | Alkalized: Refined chocolate profile with reduced acidity/bitterness',
            'Supply Capacity': 'Up to 100 Metric Tons (MT) per month',
            'Minimum Order': '1x20-ft Container (Approx. 18-20 MT)',
            'Standard Packaging': '25 kg Kraft Paper Sacks (Approx. 720 - 800 bags per container)',
            'Shipping Method': 'Standard Dry Container (Shipped under dry and well-ventilated conditions)'
          }
        },
        {
          name: 'PREMIUM INDONESIAN SLICED DRIED TURMERIC',
          desc: 'Sliced & Dried Premium Indonesian Turmeric',
          image: '/images/turmeric_powder_logo.png',
          fullDesc: "Grown in Indonesia's fertile volcanic soil, harvested at optimal ripeness, washed thoroughly, sliced evenly, and then dried using a controlled process to maintain maximum curcumin content, color, flavor, and aroma. Processed according to international export standards. Suitable for spices, herbal drinks, pharmaceutical extracts, and natural food coloring.",
          specs: {
            'Product Name': 'Sliced Dried Turmeric / Dried Turmeric Rhizome',
            'Scientific Name': 'Curcuma longa',
            'Origin': 'East Java, Indonesia',
            'HS Code': '0910.30.00',
            'Type / Form': 'Sliced & Dried',
            'Shape / Appearance': 'Uniform, clean slices',
            'Color': 'Outer skin is yellow-brown, inner flesh is golden yellow to bright orange',
            'Texture': 'Dry, firm, dense',
            'Curcumin Content': 'Minimum 4.5% – 6.0%',
            'Essential Oil': 'Minimum 2.5%',
            'Moisture Content': 'Maximum 9.0% – 10.0%',
            'Ash Content': 'Maximum 5.0%',
            'Foreign Matter': 'Maximum 1.0%',
            'Defects & Mold': 'Maximum 2.0%',
            'Supply Capacity': 'Up to 200 Tons per month',
            'Minimum Order': '1x20-foot Container (Approx. 12 – 14 Tons)',
            'Standard Packaging': '25 kg / 50 kg PP Sacks (Customized packaging options available)',
            'Delivery Terms': 'FOB / CIF',
            'Quality & Certificate': 'Comply with international export standards. Ready to issue and verify legal documents, quality certifications, and export permits simultaneously with your order process. Independent inspection by SGS or authorized surveyor is acceptable at buyer\'s cost.'
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
    testimonials: {
      title: 'What Our International Partners Say',
      subtitle: 'What global buyers and wholesale partners say about their experience with us.',
      items: [
        {
          role: 'International Buyer, Middle East',
          text: '"We are satisfied with the product quality and consistent packaging standards. Communication was smooth and shipment handling was professional throughout the process."'
        },
        {
          role: 'Import Partner, Europe',
          text: '"The spices arrived in excellent condition with strong aroma and clean packaging. The supplier was responsive and reliable from inquiry to delivery."'
        },
        {
          role: 'Distributor, Asia',
          text: '"We appreciate the stable product quality and fast sample distribution support. It helped us evaluate products efficiently before placing larger orders."'
        },
        {
          role: 'Wholesale Buyer, North America',
          text: '"Very professional export handling and clear documentation process. Delivery coordination was efficient and the products met our market standards."'
        },
        {
          role: 'Spice Importer, UAE',
          text: '"The cardamom quality exceeded our expectations. Product grading was consistent and suitable for our retail distribution needs."'
        },
        {
          role: 'Food Ingredient Supplier, Singapore',
          text: '"We value the responsive communication and flexibility in packaging options. The team handled our custom requirements professionally."'
        },
        {
          role: 'Trading Company, Turkey',
          text: '"Reliable supplier with good operational support. The shipment process was well coordinated and the products arrived on schedule."'
        },
        {
          role: 'Agricultural Importer, India',
          text: '"The cloves and nutmeg quality were very good with proper moisture control and clean sorting. We look forward to long-term cooperation."'
        },
        {
          role: 'Distributor, Africa',
          text: '"We tested several suppliers before choosing Tridaya. Their consistency, professionalism, and logistics support gave us confidence to continue working together."'
        },
        {
          role: 'Global Commodity Buyer, Europe',
          text: '"From product inquiry to export shipment, the process was transparent and efficient. The supplier understands international buyer expectations very well."'
        }
      ]
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
      content1: 'Dengan pengalaman lebih dari 20 tahun, CV Tridaya Nusantara Global telah berkembang dari pemasok rempah-rempah lokal menjadi eksportir global komoditas premium ini.',
      content2: 'Berbasis di Purbalingga, Jawa Tengah, gudang khusus kami berfungsi sebagai pusat penyortiran, pemrosesan, dan pengemasan yang teliti, memastikan setiap produk memenuhi standar internasional.',
      experience: '20+ Tahun Keunggulan',
    },
    visionMission: {
      title: 'Visi & Misi Kami',
      vision: {
        title: 'Visi',
        text: 'Menjadi gerbang utama bagi komoditas ekspor unggulan Indonesia dengan menyediakan solusi satu atap untuk berbagai kebutuhan pasar global.',
      },
      mission: {
        title: 'Misi',
        items: [
          {
            title: 'Produk Berkualitas Terkurasi',
            desc: 'Mengkurasi dan menyuplai produk Indonesia terbaik melalui standar kontrol kualitas yang ketat dan proses pengadaan yang andal.',
          },
          {
            title: 'Akses Global Satu Atap',
            desc: 'Menyederhanakan akses bagi pembeli internasional untuk mendapatkan berbagai produk berkualitas tinggi melalui satu platform terintegrasi.',
          },
          {
            title: 'Kemitraan Lokal Strategis',
            desc: 'Membangun kemitraan strategis yang kuat dengan produsen lokal di berbagai sektor untuk memastikan ketersediaan pasokan yang berkelanjutan dan stabil.',
          },
          {
            title: 'Solusi Logistik Terintegrasi',
            desc: 'Menyediakan layanan logistik terintegrasi yang efisien dan disesuaikan dengan berbagai kategori produk serta persyaratan distribusi global.',
          },
          {
            title: 'Standar Kepatuhan Internasional',
            desc: 'Menjaga standar kepatuhan internasional pada setiap lini produk yang diekspor untuk mendukung perdagangan global yang tepercaya dan berkelanjutan.',
          },
        ],
      },
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
          name: 'PREMIUM LAL PARI CLOVES',
          desc: 'Ekspor Pertanian Premium Indonesia',
          image: '/images/cloves-custom.jpg',
          fullDesc: "Dipetik dengan sangat teliti pada tahap kuncup puncak sesaat sebelum mekar, Cengkeh Premium Lal Pari kami dikeringkan secara alami di bawah sinar matahari dalam iklim tropis optimal Sulawesi. Proses ini menghasilkan cengkeh utuh dengan warna merah-cokelat berkilau yang khas serta profil aroma tajam yang intens. Sangat kaya akan minyak atsiri dan senyawa biologis aktif, rempah kelas tinggi ini disortir secara menyeluruh untuk menghilangkan debu dan tangkai. Produk ini dipercaya secara global untuk aplikasi kuliner premium, industri manufaktur tembakau, distilasi minyak atsiri, serta formulasi farmasi atau wewangian kelas atas.",
          specs: {
            'Nama Ilmiah': 'Syzygium aromaticum',
            'Kode HS': '0907.10.00',
            'Asal': 'Sulawesi, Indonesia',
            'Kelas (Grade) / Jenis': 'Grade AB6 (Standar Lal Pari Premium)',
            'Kondisi': '100% dikeringkan di bawah sinar matahari secara alami, sangat kering, dan struktur kokoh',
            'Tampilan': 'Kuncup bunga kering utuh dengan kepala yang sepenuhnya utuh',
            'Profil Warna': 'Cokelat kemerahan mengkilap hingga merah-cokelat tua',
            'Aroma & Rasa': 'Sangat khas, sangat menyengat, dan aroma yang kuat',
            'Kandungan Minyak Atsiri': 'Min. 15% - 18%',
            'Kandungan Eugenol': 'Min. 70.0% - 85.0%',
            'Eugenyl Asetat': '15.0% - 20.0% (Kemurnian kimia premium tinggi)',
            'Kadar Air': 'Maks 5.0% (Dioptimalkan untuk sepenuhnya mencegah jamur internal)',
            'Total Abu': 'Maks 7.0%',
            'Bahan Asing': 'Maks 0.5% (100% bebas dari batu, debu, gulma, dan limbah tanaman eksternal)',
            'Tingkat Kemurnian': 'Dibersihkan secara menyeluruh, bebas dari tangkai, serangga, atau residu kimia',
            'Kapasitas Pasokan': 'Hingga 100 Metrik Ton (MT) per bulan',
            'Pesanan Minimum (MOQ)': 'Kontainer 1x20-ft (Sekitar 10-12 MT)',
            'Standar Pengemasan': 'Karung PP (Polypropylene) anyaman baru atau Karung Goni (kapasitas berat bersih 25 kg / 50 kg, atau desain khusus sesuai permintaan)',
            'Metode Pengiriman': 'Kontainer Standar Kering (Dilengkapi dengan desikan/kantong gel silika tugas berat untuk mengontrol kelembapan laut)'
          }
        },

        { 
          name: 'PREMIUM WHITE CARDAMOM', 
          desc: 'Ekspor Pertanian Premium Indonesia', 
          image: '/images/white-cardamom-custom.jpg',
          fullDesc: "Dipilih secara eksklusif untuk kualitas tingkat atas, Kapulaga Putih (Kapulaga Jawa) kami menghadirkan polong utuh yang berkembang sempurna dengan kulit bersih alami dan tanpa retakan. Dibudidayakan dalam mikroklimat ideal di Jawa Barat, komoditas ini menawarkan aroma manis-pedas yang lembut namun tahan lama serta profil rasa yang kaya dan unik. Dikeringkan dan dikemas dengan hati-hati tanpa bahan kimia buatan, produk ini mempertahankan kesegaran prima, minyak atsiri, dan kualitas aroma alaminya dari perkebunan hingga ke tujuan. Sangat dicari sebagai rempah kuliner premium, bumbu minuman gourmet, dan bahan baku parfum kelas atas serta wewangian obat.",
          specs: {
            'Nama Ilmiah': 'Amomum compactum',
            'Kode HS': '0908.31.00',
            'Asal': 'Jawa Barat, Indonesia',
            'Kelas (Grade) / Jenis': 'Premium Grade / Kapulaga Jawa Utuh Kering (Whole Dried Javanese Cardamom)',
            'Kondisi': 'Polong kering utuh, struktur kokoh, tanpa retakan atau cangkang kosong',
            'Bentuk & Proses': '100% Dikeringkan di bawah sinar matahari atau dengan oven terkontrol',
            'Profil Warna': 'Putih Alami hingga Krem Muda / Putih Kecokelatan Terang (100% Bebas Pemutih & Bahan Kimia)',
            'Kualitas Polong': 'Min. 90.0% Polong Terisi Baik (Kepadatan biji yang sangat baik di dalam)',
            'Kadar Air': 'Maks 10.0% – 12.0% (Dioptimalkan untuk penyimpanan jangka panjang)',
            'Bahan Asing': 'Maks 1.0% (Disortir secara manual dengan teliti untuk menghilangkan tangkai, debu, dan daun)',
            'Kapasitas Pasokan': 'Hingga 150 Metrik Ton (MT) per bulan',
            'Pesanan Minimum (MOQ)': 'Kontainer 1x20-ft',
            'Standar Pengemasan': 'Karung PP Anyaman 50 kg dilengkapi dengan Lapisan Plastik Dalam (Inner Plastic Liner) penghalang tinggi (Desain kemasan khusus tersedia sesuai permintaan)',
            'Metode Pengiriman': 'Kontainer Standar Kering (Dilengkapi dengan kantong gel silika penyerap kelembapan industri)'
          }
        },
        {
          name: 'Kunyit Segar',
          desc: 'Ekspor Pertanian Premium Indonesia',
          image: '/images/turmeric-custom.jpg',
          fullDesc: "Bersumber dari tanaman premium yang tumbuh di tanah kaya nutrisi, Kunyit Segar kami menghasilkan rimpang induk (ibu kunyit) unggul dengan warna bagian dalam kuning-ke-oranye alami yang cerah serta kandungan kurkumin yang sangat tinggi. Produk ini menawarkan rasa autentik yang kuat dan profil aroma yang kaya. Dipanen, dibersihkan secara menyeluruh, dan dikemas sesuai standar internasional yang ketat untuk menjaga kesegaran prima saat tiba di tujuan. Sangat cocok untuk bumbu masak premium, suplemen kesehatan, ekstraksi farmasi, dan pewarna makanan alami.",
          specs: {
            'Nama Ilmiah': 'Curcuma longa (Syn. Curcuma domestica)',
            'Kode HS': '0910.30.00',
            'Asal': 'Jawa Timur, Indonesia',
            'Kelas (Grade) / Jenis': 'Rimpang Induk (Mother Rhizome)',
            'Tampilan / Bentuk': 'Bulat, bulat telur, atau tebal (rimpang inti pusat yang tebal)',
            'Warna': 'Kulit kuning-kecokelatan bersih dengan daging bagian dalam oranye/kuning cerah',
            'Tekstur': 'Kokoh, berdaging besar, renyah, dan baru dipanen',
            'Kandungan Kurkumin': 'Min. 4.5% – 6.0% (Profil aktif premium)',
            'Minyak Atsiri': 'Min. 2.5% (Profil aroma tinggi)',
            'Kadar Air': 'Maks 70% - 75%',
            'Bahan Asing': 'Maks 1% (100% bebas dari tanah, lumpur, dan pasir)',
            'Cacat / Rusak': 'Maks 2% (Bebas dari pembusukan lunak, jamur dalam, dan luka dalam)',
            'Kapasitas Pasokan': 'Hingga 200 Metrik Ton (MT) per bulan',
            'Pesanan Minimum (MOQ)': 'Kontainer 20FT',
            'Standar Pengemasan': 'Karung jaring (kapasitas 20 kg / 25 kg) atau Kotak Karton/Plastik Berlubang yang Disesuaikan',
            'Metode Pengiriman': 'Kontainer Reefer (Berpendingin) dengan Suhu Terkontrol'
          }
        },
        {
          name: 'FRESH GALANGAL',
          desc: 'Ekspor Pertanian Premium Indonesia',
          image: '/images/fresh_galangal_logo.png',
          fullDesc: "Dibudidayakan di lahan pertanian subur di Jawa Tengah, Lengkuas Segar kami dipanen dan disortir dengan sangat teliti untuk memenuhi standar internasional yang ketat. Produk ini memiliki aroma kuat dan menyengat serta profil daging yang padat dan kokoh. Setiap rimpang disikat, dicuci, dan ditangani secara menyeluruh untuk menjaga jus alami dan tampilan kulitnya yang mulus. Sangat serbaguna dan kaya serat, komoditas premium dari keluarga jahe-jahean ini digunakan secara global sebagai rempah kuliner penting, bahan baku inti dalam industri pengolahan makanan komersial, serta bahan aktif dalam obat tradisional dan formulasi kesehatan.",
          specs: {
            'Nama Ilmiah': 'Alpinia galanga',
            'Kode HS': '0910.99.00',
            'Asal': 'Jawa Tengah, Indonesia',
            'Kelas (Grade) / Jenis': 'Grade A (Kualitas Ekspor Premium / Premium Export Quality)',
            'Kondisi': 'Utuh, segar, daging kokoh, tanpa kerutan atau kerusakan struktural',
            'Tampilan': 'Kulit cokelat muda yang bersih dengan daging bagian dalam berwarna putih-kekuningan yang kokoh',
            'Tingkat Kebersihan': 'Dicuci dan disikat secara menyeluruh, 100% bebas dari residu tanah, hama aktif, atau jamur',
            'Cacat Kualitas': 'Nihil toleransi untuk pembusukan lunak, potongan mekanis, jamur internal, atau potongan layu',
            'Kadar Air': 'Maks 80% – 85% (Profil baru dipanen)',
            'Distribusi Ukuran': 'Rimpang besar premium',
            'Panjang': '15 cm – 25 cm per buah',
            'Diameter': '3 cm – 6 cm per buah',
            'Kapasitas Pasokan': 'Hingga 100 Metrik Ton (MT) per bulan',
            'Pesanan Minimum (MOQ)': '1x20-ft Reefer Container (Sekitar 11-12 MT)',
            'Standar Pengemasan': 'Karung jaring (kapasitas 20 kg / 25 kg, atau sesuai permintaan pembeli)',
            'Metode Pengiriman': 'Kontainer Reefer (Berpendingin) dengan Suhu Terkontrol'
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
            'MOQ': 'Kontainer 20FT',
            'Kapasitas Pasokan': '1.000 Ton per bulan'
          }
        },
        {
          name: 'Jahe Gajah Segar',
          desc: 'Ekspor Pertanian Premium Indonesia',
          image: '/images/elephant-ginger-custom.jpg',
          fullDesc: "Jahe Gajah Segar kami dibudidayakan secara cermat di tanah vulkanik yang subur di Jawa Timur. Dikenal dengan rimpangnya yang besar, kulitnya yang tebal, dan dagingnya yang kokoh, varietas ini menghasilkan aroma yang sangat seimbang dan rasa pedas yang sedang. Jahe ini sangat diminati oleh pasar segar global, penggunaan kuliner, dan pemrosesan industri makanan.",
          specs: {
            'Nama Ilmiah': 'Zingiber officinale var. officinale',
            'Kode HS': '0910.11.00',
            'Asal': 'Jawa Timur, Indonesia',
            'Kelas (Grade)': 'Grade A (Kualitas Ekspor Premium)',
            'Kondisi': 'Utuh, segar, dan bertekstur kokoh',
            'Tampilan': 'Dicuci bersih, bebas dari tanah, hama, dan jamur',
            'Karakteristik': 'Kulit tebal bebas kerut dengan nol pembusukan atau kerusakan mekanis',
            'Aroma': 'Kuat, khas, dan harum alami',
            'Kadar Air': 'Maks 80% – 85% (Baru dipanen)',
            'Distribusi Ukuran': '100g hingga 250g+ per buah',
            'Kapasitas Pasokan': 'Hingga 200 Metrik Ton (MT) per bulan',
            'Pesanan Minimum (MOQ)': 'Kontainer 20FT',
            'Standar Pengemasan': 'Karung jaring (20 kg / 25 kg) atau Kotak Karton Berlubang (Sesuai Permintaan)',
            'Metode Pengiriman': 'Kontainer Reefer (Berpendingin) dengan Suhu Terkontrol'
          }
        },
        {
          name: 'PREMIUM COCONUT SHELL CHARCOAL',
          desc: 'Ekspor Pertanian Premium Indonesia',
          image: '/images/coconut-charcoal-custom.jpg',
          fullDesc: "Diproduksi secara eksklusif dari tempurung kelapa berkualitas tinggi yang matang sepenuhnya, Arang Tempurung Kelapa Premium kami dikarbonisasi di bawah kondisi pirolitik yang dikontrol secara ketat untuk memastikan struktur arang murni dengan kepadatan tinggi. Komoditas ini memiliki kandungan karbon terikat yang sangat tinggi, menghasilkan output panas yang stabil, waktu pembakaran yang lebih lama, serta praktis tanpa asap atau aroma yang tidak sedap. Bersumber dari perkebunan luas di Sumatra, arang ini dihancurkan dan diayak secara sistematis untuk menjamin ukuran granul yang seragam dan bebas dari tanah atau puing-puing eksternal. Ini berfungsi sebagai bahan baku berkelanjutan yang sangat baik untuk pembuatan briket shisha/barbekyu premium, media filtrasi air aktif, serta aplikasi industri kimia dan metalurgi khusus.",
          specs: {
            'Nama Ilmiah Sumber': 'Cocos nucifera (100% Karbonisasi Tempurung Kelapa)',
            'Kode HS': '4402.20.00',
            'Asal': 'Sumatra, Indonesia',
            'Kelas (Grade) / Jenis': 'Arang Granular Mentah Alami (Natural Raw Granular Charcoal)',
            'Kandungan Karbon Terikat': '80.0% - 85.0% (Energi inti premium)',
            'Nilai Kalori': 'Output energi tinggi (7,200 - 7,500 kcal/kg)',
            'Kadar Air': 'Maks 8.0% (Sangat kering untuk kemudahan penyalaan)',
            'Kadar Abu': 'Profil residu rendah (2.5% - 3.0%)',
            'Bahan Mudah Menguap': '12.0% - 15.0%',
            'Pilihan Ukuran Granul': '1.0 cm - 5.0 cm (Distribusi ukuran mesh penghancuran khusus tersedia sesuai permintaan)',
            'Kotoran & Bahan Asing': 'Maks 0.5% (100% bebas dari tanah, batu, kayu yang belum terbakar, dan fragmen logam)',
            'Tampilan Fisik': 'Patahan/serpihan hitam pekat yang bersih dan merata',
            'Profil Pembakaran': 'Bebas bau, bebas percikan, dan produksi asap minimal',
            'Kapasitas Pasokan': 'Hingga 100 Metrik Ton (MT) per bulan',
            'Pesanan Minimum (MOQ)': '1x20-ft Container (Sekitar 14-15 MT tergantung pada susunan muatan)',
            'Standar Pengemasan': 'Karung Anyaman Polypropylene (PP) Lapisan Ganda Tugas Berat (Tersedia dalam kapasitas berat bersih 25 kg atau 50 kg, atau pencetakan karung khusus sesuai permintaan)',
            'Metode Pengiriman': 'Kontainer Standar Kering (Harus dikemas rapat untuk mencegah pergeseran; persetujuan jalur pelayaran untuk deklarasi non-berbahaya memerlukan SHT valid)'
          }
        },
        {
          name: 'Biji Kakao Kering Premium',
          desc: 'Ekspor Pertanian Premium Indonesia',
          image: '/images/cocoa-beans-custom.jpg',
          fullDesc: "Diproses melalui fermentasi alami dan pengeringan terkendali mengikuti standar internasional yang ketat, Biji Kakao Premium kami menghasilkan profil rasa cokelat yang kaya, mendalam, dan khas. Bersumber dari tanah vulkanik subur di Sulawesi, biji kakao ini dikeringkan secara hati-hati di bawah sinar matahari untuk mengurangi kadar air ke tingkat penyimpanan yang aman dan stabil. Setiap kelompok dipilah dengan cermat untuk memastikan biji yang berwarna cokelat seragam, utuh, bersih, dan bebas hama. Produk ini sangat siap untuk diproses menjadi cokelat kelas atas, cocoa butter, cocoa powder, dan produk kembang gula gourmet premium.",
          specs: {
            'Nama Ilmiah': 'Theobroma cacao',
            'Kode HS': '1801.00.00 (Biji kakao, utuh atau pecah, mentah)',
            'Asal': 'Sulawesi, Indonesia',
            'Kelas (Grade) / Jenis': 'Grade A / Grade 1 (Kualitas Ekspor Premium)',
            'Kondisi': 'Kering, terfermentasi sempurna, dan disortir secara menyeluruh',
            'Metode Pengeringan': '100% Pengeringan Matahari (Sun-dried)',
            'Jumlah Biji': '85 – 100 biji per 100 gram (Kepadatan dan ukuran luar biasa)',
            'Kadar Air': 'Maks 6.0% – 7.0% (Stabil untuk pengiriman jarak jauh)',
            'Biji Pecah': 'Maks 1% (Presentasi sangat seragam)',
            'Tampilan': 'Bersih, cokelat seragam, bebas dari jamur internal, serangga, dan bahan asing',
            'Kapasitas Pasokan': 'Hingga 300 Metrik Ton (MT) per bulan',
            'Pesanan Minimum (MOQ)': 'Kontainer 20FT (Sekitar 15-16 MT)',
            'Standar Pengemasan': 'Karung Goni Food-Grade (Kapasitas 60 kg per karung, atau sesuai permintaan)',
            'Metode Pengiriman': 'Kontainer Standar Kering (Dilengkapi penyerap kelembapan / desikan)'
          }
        },
        {
          name: 'NATURAL REED GRASS BROOM',
          desc: 'Ekspor Pembersih Ramah Lingkungan Tradisional',
          image: '/images/rayung-broom-custom.jpg',
          fullDesc: "Dibuat dengan tangan secara cermat menggunakan rumput gelagah/rayung pilihan yang dikeringkan sepenuhnya. Diikat kencang dan rapi dengan bahan pengikat berdaya tahan tinggi. Sapu tradisional ini memberikan kinerja penyapuan yang sangat baik, tetap ringan, dan tahan lama. Produk ini 100% alami, mudah terurai secara hayati (biodegradable), dan ideal untuk kebutuhan pembersihan rumah tangga atau komersial modern yang ramah lingkungan.",
          specs: {
            'Nama Ilmiah/Sumber': 'Saccharum spontaneum',
            'Kode HS': '9603.10.20',
            'Asal': 'Jawa Tengah, Indonesia',
            'Bahan Baku': '100% Rumput Rayung Kering Alami Premium',
            'Pilihan Gagang': 'Kayu Bulat lurus yang kering atau Bambu (Sesuai permintaan)',
            'Bahan Pengikat': 'Tali Rotan Muda yang Tahan Lama / Serat Kulit Kayu Kuat',
            'Berat per Unit': 'Minimum 300 gram ke atas',
            'Kondisi': 'Kering sempurna, ringan, bebas jamur, dan diikat kencang',
            'Kapasitas Pasokan': 'Hingga 30.000 buah per bulan',
            'Pesanan Minimum (MOQ)': 'Kontainer 1x20-ft',
            'Standar Pengemasan': '30 pcs-50pcs dalam satu karung goni (sesuai permintaan)'
          }
        },
        {
          name: 'Kemiri',
          desc: 'Ekspor Kernel Indonesia Hasil Tinggi',
          image: '/images/candlenut-custom.jpg',
          fullDesc: "Bersumber dari pohon-pohon pilihan, Kemiri Kupas Grade A kami menghasilkan kernel utuh dengan kandungan minyak alami yang sangat tinggi. Disortir secara teliti dan dibersihkan secara ganda (double-cleaned), produk ini menawarkan cita rasa gurih yang kaya serta tekstur renyah yang luar biasa. Sangat sempurna untuk industri makanan global, bumbu kuliner premium, ekstraksi minyak nabati, dan formulasi kosmetik alami.",
          specs: {
            'Nama Ilmiah': 'Aleurites moluccanus',
            'Kode HS': '0802.93.00',
            'Asal': 'Sulawesi, Indonesia',
            'Kelas (Grade) / Jenis': 'Grade A (Kernel Utuh Premium)',
            'Profil Warna': 'Bersih alami, putih krem seragam hingga gading pucat',
            'Kandungan Minyak': 'Sangat Tinggi (Min. 60.0% - 65.0% hasil kaya minyak)',
            'Kadar Air': '5% - 8%',
            'Pemrosesan': 'Dikeringkan di bawah Sinar Matahari secara Alami',
            'Tingkat Kemurnian': 'Disortir secara menyeluruh, bebas dari kotoran, debu, atau fragmen cangkang',
            'Kapasitas Pasokan': 'Hingga 150 MT per bulan',
            'Pesanan Minimum (MOQ)': 'Kontainer 20FT',
            'Standar Pengemasan': 'Karung Woven Polypropylene (PP) Baru 25 kg / 50 kg dengan Lapisan Plastik PE Dalam atau karung rami premium sesuai permintaan'
          }
        },
        {
          name: 'Kemiri Gelondongan (In-Shell)',
          desc: 'Ekspor Pertanian Premium Indonesia',
          image: '/images/in-shell_cundlenuts_logo.png',
          fullDesc: "Bersumber dari perkebunan yang dikelola secara berkelanjutan dan premium di seluruh Sulawesi, Kemiri Gelondongan kami dipanen secara sistematis hanya saat matang sempurna. Dikeringkan dengan hati-hati untuk mengunci kesegaran dan melindungi cadangan minyak yang kaya di dalamnya. Cangkang luar pelindung keras, tahan lama, utuh sepenuhnya, serta bebas dari retakan atau pecah dalam. Ini menjamin perlindungan total terhadap elemen lingkungan selama transportasi, mempertahankan daging kemiri kelas premium yang padat di dalamnya. Sangat ideal untuk pemrosesan ekstraksi minyak industri, bahan baku kosmetik global, dan sektor makanan internasional.",
          specs: {
            'Nama Ilmiah': 'Aleurites moluccanus',
            'Kode HS': '0802.99.00 (Kacang lainnya, segar atau kering, di dalam cangkang)',
            'Asal': 'Sulawesi, Indonesia',
            'Kelas (Grade) / Jenis': 'Grade A / Kemiri Gelondongan Utuh (Whole In-Shell)',
            'Kondisi': 'Tampilan cangkang luar keras, kering dengan baik, utuh sepenuhnya tanpa retak atau biji kosong',
            'Tampilan': 'Cangkang luar berwarna cokelat tua hingga hitam alami, bersih dari kotoran berat dan debu',
            'Distribusi Ukuran': 'Diameter 2.5 cm hingga 4.0 cm',
            'Karakteristik Kernel': 'Mengandung biji bagian dalam yang padat dan berkembang baik dengan potensi minyak alami yang melimpah',
            'Tingkat Kemurnian': 'Min. 98% – 99% (Disortir secara manual dengan teliti dan disaring dengan mesin)',
            'Kadar Air': 'Maks 10.0% – 12.0% (Dioptimalkan untuk pengiriman luar negeri yang aman)',
            'Bahan Asing': 'Maks 1% (100% bebas dari tanah berat, batu, lumpur, dan limbah tanaman eksternal)',
            'Kerusakan Hama & Jamur': 'Maks 3% (Nihil toleransi untuk pembusukan luar yang terlihat atau lubang gerek hama aktif)',
            'Kapasitas Pasokan': 'Hingga 150 Metrik Ton (MT) per bulan',
            'Pesanan Minimum (MOQ)': 'Kontainer 20FT',
            'Standar Pengemasan': 'Karung PP (Polypropylene) Anyaman Baru Kelas Berat atau Karung Goni (kapasitas berat bersih 50 kg per karung, atau desain khusus sesuai permintaan)',
            'Metode Pengiriman': 'Kontainer Standar Kering (Dilengkapi dengan kantong gel silika penyerap kelembapan industri)'
          }
        },
        {
          name: 'GREEN ROBUSTA COFFEE BEANS',
          desc: 'Ekspor Pertanian Premium Indonesia',
          image: '/images/robusta-coffee-custom.jpg',
          fullDesc: "Dipanen dari perkebunan dataran tinggi yang terawat baik di sepanjang sabuk vulkanik subur di Sumatra Selatan, Biji Kopi Hijau Robusta kami diproses secara teliti melalui metode pengupasan, pencucian, dan pengeringan terkontrol yang khusus. Perhatian ketat terhadap detail ini menghasilkan biji hijau yang bersih dan seragam dengan kadar air yang sangat stabil. Terkenal dengan bodinya yang tebal (bold), profil rasa yang mendalam, rasa pahit seimbang yang bersih, serta kandungan kafein alami yang ideal, kopi premium ini sangat stabil untuk pengiriman jauh. Produk ini siap untuk pemanggangan profesional, pencampuran khusus, dan pengolahan makanan industri sesuai dengan preferensi pasar global yang beragam.",
          specs: {
            'Nama Ilmiah': 'Coffea canephora (Syn. Coffea robusta)',
            'Kode HS': '0901.11.10',
            'Asal': 'Sumatra Selatan, Indonesia',
            'Kelas (Grade) / Jenis': 'Grade 1 (Kualitas Ekspor Premium / Premium Export Quality)',
            'Kondisi': 'Biji kopi hijau mentah, dibersihkan secara menyeluruh, dan disortir dengan mesin',
            'Profil Warna': 'Hijau bersih seragam hingga hijau kebiruan (Tampilan panen segar / Fresh crop layout)',
            'Kadar Air': '11.0% – 12.5% (Sangat dioptimalkan untuk masa simpan penyimpanan jangka panjang)',
            'Bahan Asing': 'Maks 0.5% – 1.0% (100% bebas dari batu, debu, ranting, dan kulit luar)',
            'Toleransi Cacat': 'Maks 5% / Di bawah Standar Ekspor SNI Kelas 1 (Disortir secara teliti)',
            'Kapasitas Pasokan': 'Hingga 100 Metrik Ton (MT) per bulan',
            'Pesanan Minimum (MOQ)': 'Kontainer 1x20-ft (Sekitar 18-19 MT)',
            'Standar Pengemasan': 'Karung Goni Food-Grade dikombinasikan dengan Lapisan Dalam Hermetik (GrainPro/Setara) penghalang tinggi untuk menjaga kesegaran (kapasitas berat bersih 60 kg per karung)',
            'Metode Pengiriman': 'Kontainer Standar Kering (Dilengkapi dengan desikan kelas berat untuk mengontrol fluktuasi kelembapan)'
          }
        },
        {
          name: 'Pala Kupas Premium',
          desc: 'Ekspor Pertanian Premium Indonesia',
          image: '/images/shelled_nutmeg_logo.png',
          fullDesc: "Dipanen hanya saat matang sempurna di wilayah pertanian subur Sulawesi, Pala Premium kami diproses melalui metode pengeringan matahari alami secara bertahap. Perhatian tradisional yang mendalam terhadap detail ini memastikan kadar air inti tetap stabil secara sempurna. Biji pala yang dihasilkan bertekstur padat, utuh dengan indah, serta mempertahankan aroma kuat yang khas dan rasa tajam yang mendalam. Rempah yang sangat serbaguna ini dikemas secara menyeluruh untuk menjaga kandungan minyak atsirinya yang sensitif, menjadikannya bahan baku sempurna untuk pasar rempah-rempah kuliner, ekstraksi minyak esensial, serta formulasi kosmetik atau farmasi premium.",
          specs: {
            'Nama Ilmiah': 'Myristica fragrans',
            'Kode HS': '0908.11.00',
            'Asal': 'Sulawesi, Indonesia (Setara Premium Siau / Ambon)',
            'Kelas (Grade) / Jenis': 'Grade A / Pala Kupas Utuh Berkualitas Tinggi (Tanpa Cangkang)',
            'Kondisi': 'Tampilan utuh, padat, kering, dan bersih',
            'Metode Pengeringan': '100% Pengeringan Matahari Alami',
            'Kadar Air': 'Maks 8.0% – 10.0% (Stabil untuk penyimpanan jangka panjang)',
            'Kandungan Minyak Atsiri': 'Profil volatil tinggi (Min. 2.3% – 6.0%)',
            'Bahan Asing': 'Maks 0.5% – 1.0% (Disortir secara manual dengan teliti)',
            'Kerusakan Hama & Jamur': 'Nihil (100% bebas dari jamur kasat mata, kutu, atau hama internal)',
            'Profil Keamanan': 'Sesuai dengan Aturan Non-Mikotoksin & Aflatoksin (Standar ekspor ketat)',
            'Kapasitas Pasokan': 'Hingga 150 Metrik Ton (MT) per bulan',
            'Pesanan Minimum (MOQ)': 'Kontainer 20FT',
            'Standar Pengemasan': 'Karung Goni 25 kg / 50 kg (Karung rami/PP) atau sesuai permintaan khusus',
            'Metode Pengiriman': 'Kontainer Standar Kering (Dilengkapi desikan / silika gel)'
          }
        },
        {
          name: 'COCOA POWDER ( NATURAL & ALKALIZED )',
          desc: 'Ekspor Pertanian Premium Indonesia',
          image: '/images/cocoa_powder_logo.png',
          fullDesc: "Bubuk Cokelat (Cocoa Powder) kami diolah dari biji cokelat pilihan yang difermentasi dan dikeringkan secara menyeluruh di Indonesia. Diproses dengan standar kebersihan tinggi, tersedia dalam varian Alami (Natural) dan Teralkalisasi (Alkalized/Proses Belanda) yang menghasilkan kelarutan lebih baik, tekstur lebih halus, serta tingkat keasaman yang seimbang. Produk ini memiliki rasa cokelat yang kaya, aroma khas yang kuat, warna stabil, dan kualitas konsisten—sangat ideal untuk industri pengolahan makanan skala besar, cokelat batang, produk susu, kue, minuman, dan pasar internasional.\n\nKami menawarkan varian kualitas lengkap untuk menyesuaikan dengan aplikasi spesifik Anda:\n• LOW GRADE: Kandungan lemak 5% - 9%. Cocok untuk produk dengan anggaran bersahabat dan campuran industri.\n• STANDARD GRADE: Kandungan lemak 10% - 12%. Keseimbangan terbaik antara rasa, warna, dan kelarutan untuk pasar umum.\n• MEDIUM GRADE: Kandungan lemak 10% - 12%. Kualitas lebih konsisten dan rasa lebih kaya untuk produk makanan dan minuman bermerek.\n• PREMIUM GRADE: Kandungan lemak 10% - 12%. Kualitas tertinggi, rasa paling kaya, dan warna paling stabil untuk cokelat batang dan pasar ekspor kompetitif.",
          specs: {
            'Nama Ilmiah Sumber': 'Theobroma cacao',
            'Kode HS': '1805.00.0000',
            'Asal': 'Indonesia (Sulawesi, Jawa, Sumatra)',
            'Jenis (Type)': 'Natural & Alkalized (Dutch Process)',
            'Kadar Air': '4.5% - 5.0% (Dioptimalkan untuk kekeringan sempurna)',
            'Kandungan Lemak (Fat Content)': 'Alami: 5% - 9% (Rendah) | Teralkalisasi: 10% - 12% (Standar / Medium / Premium)',
            'Kadar Abu': 'Alami: Maks 8.0% | Teralkalisasi: 9.0% - 10.0%',
            'Tingkat pH': 'Alami: 5.0 - 5.8 | Teralkalisasi: 6.0 - 8.2 (tergantung pada kepekatan warna)',
            'Kandungan Logam Berat': 'Pb < 2 ppm, Cd < 1 ppm (Sangat sesuai dengan standar keamanan internasional)',
            'Mikrobiologi': 'Total Plate Count < 5,000 cfu/g, Mold & Yeast < 500 cfu/g, Bebas Salmonella & Coliform',
            'Aroma & Rasa': 'Alami: Khas kakao segar alami | Teralkalisasi: Cita rasa cokelat murni dengan tingkat kepahitan/keasaman berkurang',
            'Kapasitas Pasokan': 'Hingga 100 Metrik Ton (MT) per bulan',
            'Pesanan Minimum (MOQ)': '1x20-ft Kontainer (Sekitar 18-20 MT)',
            'Standar Pengemasan': 'Karung Kertas Kraft 25 kg (Setara dengan 720 - 800 karung per kontainer)',
            'Metode Pengiriman': 'Kontainer Standar Kering (Dikirim dalam kondisi kering dan berventilasi baik)'
          }
        },
        {
          name: 'PREMIUM INDONESIAN SLICED DRIED TURMERIC',
          desc: 'Kunyit Iris Kering Ekspor Premium Indonesia',
          image: '/images/turmeric_powder_logo.png',
          fullDesc: "Ditanam di tanah vulkanis Indonesia yang subur, dipanen pada tingkat kematangan optimal, dicuci bersih, diiris rata, lalu dikeringkan menggunakan proses terkontrol untuk menjaga kandungan kurkumin, warna, rasa, dan aroma maksimal. Diproses sesuai dengan standar ekspor internasional. Cocok untuk bumbu dapur, minuman herbal, ekstrak farmasi, dan pewarna makanan alami.",
          specs: {
            'Nama Produk': 'Sliced Dried Turmeric / Dried Turmeric Rhizome (Kunyit Kering Iris)',
            'Nama Ilmiah': 'Curcuma longa',
            'Asal': 'Jawa Timur, Indonesia',
            'Kode HS': '0910.30.00',
            'Jenis / Bentuk': 'Diiris & Dikeringkan (Sliced & Dried)',
            'Bentuk / Tampilan': 'Irisan seragam dan bersih',
            'Warna': 'Kulit bagian luar kuning-kecokelatan, daging bagian dalam kuning keemasan hingga oranye cerah',
            'Tekstur': 'Kering, kokoh, padat',
            'Kandungan Kurkumin': 'Minimal 4.5% – 6.0%',
            'Minyak Atsiri': 'Minimal 2.5%',
            'Kadar Air': 'Maksimal 9.0% – 10.0%',
            'Kadar Abu': 'Maksimal 5.0%',
            'Bahan Asing': 'Maksimal 1.0%',
            'Cacat & Jamur': 'Maksimal 2.0%',
            'Kapasitas Pasokan': 'Hingga 200 Ton per bulan',
            'Pesanan Minimum (MOQ)': 'Kontainer 1x20-ft (Sekitar 12 – 14 Ton)',
            'Standar Pengemasan': 'Karung PP 25 kg / 50 kg (Pengemasan khusus tersedia sesuai permintaan)',
            'Syarat Pengiriman': 'FOB / CIF',
            'Kualitas & Sertifikasi': 'Memenuhi standar ekspor internasional sepenuhnya. Kami siap menerbitkan serta memverifikasi semua dokumen hukum, sertifikasi kualitas, dan izin ekspor bersamaan dengan proses pesanan Anda. Pemeriksaan independen oleh SGS atau surveyor resmi dapat dilakukan atas biaya pembeli.'
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
    testimonials: {
      title: 'Testimoni & Mitra Internasional',
      subtitle: 'Apa yang dikatakan pembeli global dan mitra grosir tentang pengalaman mereka bersama kami.',
      items: [
        {
          role: 'Pembeli Internasional, Timur Tengah',
          text: '"Kami puas dengan kualitas produk dan standar pengemasan yang konsisten. Komunikasi berjalan lancar dan penanganan pengiriman sangat profesional sepanjang proses."'
        },
        {
          role: 'Mitra Impor, Eropa',
          text: '"Rempah-rempah tiba dalam kondisi sangat baik dengan aroma kuat dan kemasan bersih. Pemasok sangat responsif dan andal mulai dari pertanyaan hingga pengiriman."'
        },
        {
          role: 'Distributor, Asia',
          text: '"Kami mengapresiasi kualitas produk yang stabil dan dukungan distribusi sampel yang cepat. Ini membantu kami mengevaluasi produk secara efisien sebelum melakukan pemesanan besar."'
        },
        {
          role: 'Pembeli Grosir, Amerika Utara',
          text: '"Penanganan ekspor yang sangat profesional dan proses dokumentasi yang jelas. Koordinasi pengiriman efisien dan produk memenuhi standar pasar kami."'
        },
        {
          role: 'Importir Rempah, UEA',
          text: '"Kualitas kapulaga melebihi ekspektasi kami. Kategori (grading) produk konsisten dan cocok untuk kebutuhan distribusi ritel kami."'
        },
        {
          role: 'Pemasok Bahan Makanan, Singapura',
          text: '"Kami menghargai komunikasi yang responsif dan fleksibilitas dalam pilihan pengemasan. Tim menangani kebutuhan khusus kami secara profesional."'
        },
        {
          role: 'Perusahaan Dagang, Turki',
          text: '"Pemasok tepercaya dengan dukungan operasional yang baik. Proses pengiriman terkoordinasi dengan baik dan produk tiba sesuai jadwal."'
        },
        {
          role: 'Importir Pertanian, India',
          text: '"Kualitas cengkih dan pala sangat baik dengan kontrol kelembapan yang tepat dan penyortiran yang bersih. Kami menantikan kerja sama jangka panjang."'
        },
        {
          role: 'Distributor, Afrika',
          text: '"Kami menguji beberapa pemasok sebelum memilih Tridaya. Konsistensi, profesionalisme, dan dukungan logistik mereka memberikan kami keyakinan untuk terus bekerja sama."'
        },
        {
          role: 'Pembeli Komoditas Global, Eropa',
          text: '"Dari pertanyaan produk hingga pengiriman ekspor, prosesnya transparan dan efisien. Pemasok sangat memahami ekspektasi pembeli internasional."'
        }
      ]
    },
    footer: {
      address: 'Purbalingga, Jawa Tengah, Indonesia',
      rights: '© 2026 CV Tridaya Nusantara Global. Hak cipta dilindungi.',
    },
    waMessage: "Halo CV Tridaya Nusantara Global, saya melihat website Anda dan tertarik dengan produk (mohon sebutkan: Kopi/Arang/Rempah/Sapu). Bisa berikan informasi lebih lanjut mengenai spesifikasi dan minimal order? Terima kasih.",
  },
};
