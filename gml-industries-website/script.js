/**
 * GML INDUSTRIES - WEBSITE LOGIC
 * High-performance, zero-dependency multilingual engine,
 * interactive components, carousel, filter tabs, stats animation, and form feedback.
 */

// Translation Dictionary (Arabic & French)
const translations = {
    ar: {
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_products: "منتجاتنا",
        nav_quality: "الجودة",
        nav_contact: "اتصل بنا",
        hero_badge: "صناعة جزائرية بمعايير عالمية",
        hero_title: "GML Industries للأعمدة الكهربائية",
        hero_desc: "الرائد الوطني في صناعة وتوريد الأعمدة الكهربائية الفولاذية، أعمدة الإنارة العمومية، وأعمدة الإنارة التجميلية بجودة عالية ومقاومة فائقة للصدأ.",
        hero_cta_products: "استكشف منتجاتنا",
        hero_cta_quote: "طلب عرض سعر",
        about_title: "من نحن",
        about_desc1: "تأسست شركة GML Industries في ولاية برج بوعريريج، لتكون رائدة في مجال تشكيل المعادن وإنتاج الأعمدة الكهربائية الفولاذية. نحن نلتزم بتقديم حلول إنارة وبنية تحتية متطورة تلبي احتياجات المشاريع الوطنية الكبرى.",
        about_desc2: "بفضل مصنعنا المجهز بأحدث التقنيات وفريقنا الهندسي المحترف، نقوم بتصنيع أعمدة مطابقة لأعلى المعايير التقنية وبقدرة إنتاجية عالية لتلبية الطلبات في وقت قياسي.",
        stat_poles: "أعمدة منتجة سنوياً",
        stat_experience: "خبرة صناعية",
        stat_projects: "مشاريع منجزة",
        products_title: "كتالوج المنتجات",
        products_subtitle: "تشكيلة واسعة من الأعمدة الكهربائية الفولاذية المصممة لتدوم طويلاً وتتحمل مختلف الظروف المناخية.",
        filter_all: "الكل",
        filter_lighting: "أعمدة إنارة",
        filter_transmission: "أعمدة نقل الطاقة",
        filter_coated: "أعمدة ديكورية ومصبوغة",
        prod_1_title: "أعمدة الإنارة المثمنة (Octogonaux)",
        prod_1_desc: "أعمدة فولاذية مثمنة المقطع، مجلفنة على الساخن، مثالية لإنارة الطرق السريعة والشوارع العامة بارتفاعات تتراوح من 4 إلى 12 متر.",
        prod_2_title: "أعمدة الإنارة الدائرية المسلوبة",
        prod_2_desc: "أعمدة دائرية ذات مظهر عصري وجذاب، مناسبة للمدن الذكية، المساحات الخضراء، والمناطق السكنية الراقية.",
        prod_3_title: "أعمدة نقل وتوزيع الكهرباء",
        prod_3_desc: "أعمدة متينة جداً ومصممة لتحمل ضغط الكابلات الكهربائية الهوائية ذات الجهد المنخفض والمتوسط.",
        prod_4_title: "أعمدة الإنارة التجميلية والديكورية",
        prod_4_desc: "أعمدة مصبوغة ومصممة بأشكال جمالية متميزة لتزيين الساحات، الفنادق، والحدائق العامة مع توفير إضاءة ممتازة.",
        quality_title: "الجودة ومقاومة التآكل",
        quality_desc: "في GML Industries، نضع الجودة في مقدمة أولوياتنا. تخضع جميع أعمدتنا لعملية الجلفنة على الساخن (Hot-dip Galvanization) وفق المعايير الدولية، مما يضمن حماية فائقة ضد الصدأ والتآكل تدوم لأكثر من 25 سنة دون الحاجة للصيانة.",
        quality_feat_1: "فولاذ عالي المقاومة",
        quality_feat_2: "جلفنة على الساخن 100%",
        quality_feat_3: "مقاومة رياح شديدة",
        quality_feat_4: "مطابقة للمواصفات الفنية",
        location_title: "موقعنا الاستراتيجي",
        location_desc: "يقع مصنعنا في ولاية برج بوعريريج، القلب الصناعي النابض للجزائر، مما يتيح لنا شحن وتوصيل الطلبات بسرعة وكفاءة إلى جميع الولايات.",
        location_btn: "عرض على خرائط Google",
        contact_title: "تواصل معنا",
        contact_subtitle: "نحن هنا للإجابة على استفساراتكم وتقديم عروض أسعار مخصصة لمشاريعكم. تواصل معنا الآن!",
        contact_info: "معلومات الاتصال",
        info_phone: "الهاتف",
        info_fb: "صفحة الفيسبوك",
        info_whatsapp: "واتساب: 0770 81 45 91",
        info_address: "برج بوعريريج، الجزائر",
        form_title: "أرسل رسالة سريعة",
        form_name: "الاسم الكامل",
        form_email: "البريد الإلكتروني",
        form_phone: "رقم الهاتف",
        form_msg: "نص الرسالة",
        form_send: "إرسال الرسالة",
        form_success: "تم إرسال رسالتك بنجاح! سنتصل بك قريباً."
    },
    fr: {
        nav_home: "Accueil",
        nav_about: "À Propos",
        nav_products: "Nos Produits",
        nav_quality: "Qualité",
        nav_contact: "Contact",
        hero_badge: "Fabrication Algérienne aux Normes Internationales",
        hero_title: "GML Industries - Candélabres & Poteaux Électriques",
        hero_desc: "Le leader national dans la fabrication et la fourniture de poteaux électriques en acier, candélabres d'éclairage public et décoratifs de haute qualité et résistance supérieure à la corrosion.",
        hero_cta_products: "Découvrir nos produits",
        hero_cta_quote: "Demander un devis",
        about_title: "À Propos de GML",
        about_desc1: "Fondée à Bordj Bou Arreridj, GML Industries est un leader de la métallurgie et de la production de pylônes et poteaux électriques en acier. Nous nous engageons à fournir des solutions d'éclairage et d'infrastructure avancées répondant aux besoins des grands projets nationaux.",
        about_desc2: "Grâce à notre usine dotée des dernières technologies et à notre équipe d'ingénieurs professionnels, nous fabriquons des poteaux conformes aux normes techniques les plus strictes avec une capacité de production élevée pour répondre aux demandes en temps record.",
        stat_poles: "Poteaux produits par an",
        stat_experience: "Ans d'expérience industrielle",
        stat_projects: "Projets réalisés",
        products_title: "Catalogue de Produits",
        products_subtitle: "Une large gamme de poteaux électriques en acier conçus pour durer et résister aux conditions climatiques diverses.",
        filter_all: "Tous",
        filter_lighting: "Candélabres d'Éclairage",
        filter_transmission: "Poteaux de Transport",
        filter_coated: "Poteaux Décoratifs & Peints",
        prod_1_title: "Candélabres Octogonaux",
        prod_1_desc: "Mâts octogonaux en acier, galvanisés à chaud, idéaux pour l'éclairage des autoroutes et des voies publiques de 4 à 12 mètres.",
        prod_2_title: "Candélabres Cylindro-Coniques",
        prod_2_desc: "Poteaux cylindriques au design moderne et attrayant, adaptés aux villes intelligentes, espaces verts et zones résidentielles.",
        prod_3_title: "Poteaux de Distribution Électrique",
        prod_3_desc: "Poteaux ultra-robustes conçus pour supporter la tension des câbles électriques aériens basse et moyenne tension.",
        prod_4_title: "Candélabres Décoratifs Stylisés",
        prod_4_desc: "Mâts peints et stylisés avec des designs esthétiques pour embellir les places, hôtels et parcs publics tout en éclairant.",
        quality_title: "Qualité & Résistance à la Corrosion",
        quality_desc: "Chez GML Industries, la qualité est notre priorité absolue. Tous nos poteaux subissent un processus de galvanisation à chaud (Hot-dip Galvanization) conforme aux normes internationales, garantissant une protection exceptionnelle contre la rouille pour plus de 25 ans sans entretien.",
        quality_feat_1: "Acier Haute Résistance",
        quality_feat_2: "Galvanisation à Chaud 100%",
        quality_feat_3: "Résistance aux Vents Violents",
        quality_feat_4: "Conformité aux Normes Algériennes",
        location_title: "Notre Emplacement",
        location_desc: "Notre usine est située à Bordj Bou Arreridj, le pôle industriel de l'Algérie, nous permettant d'expédier et de livrer rapidement et efficacement dans toutes les wilayas.",
        location_btn: "Ouvrir sur Google Maps",
        contact_title: "Contactez-nous",
        contact_subtitle: "Nous sommes là pour répondre à vos questions et vous proposer des devis personnalisés. Contactez-nous dès maintenant !",
        contact_info: "Coordonnées",
        info_phone: "Téléphone",
        info_fb: "Page Facebook",
        info_whatsapp: "WhatsApp: 0770 81 45 91",
        info_address: "Bordj Bou Arreridj, Algérie",
        form_title: "Envoyer un message",
        form_name: "Nom Complet",
        form_email: "Adresse E-mail",
        form_phone: "Numéro de Téléphone",
        form_msg: "Votre Message",
        form_send: "Envoyer le Message",
        form_success: "Votre message a été envoyé avec succès ! Nous vous contacterons bientôt."
    }
};

let currentLang = "ar"; // Default to Arabic

// DOMContentLoaded Entry point
document.addEventListener("DOMContentLoaded", () => {
    initMultilingual();
    initStickyNavbar();
    initMobileDrawer();
    initHeroCarousel();
    initCatalogFilters();
    initScrollReveals();
    initContactForm();
});

// 1. Multilingual Logic
function initMultilingual() {
    const langToggleBtn = document.getElementById("langToggle");
    const langTextSpan = langToggleBtn.querySelector(".lang-text");

    langToggleBtn.addEventListener("click", () => {
        currentLang = currentLang === "ar" ? "fr" : "ar";
        
        // Update document tags
        document.documentElement.lang = currentLang;
        document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
        
        // Update Toggle button UI text
        langTextSpan.textContent = currentLang === "ar" ? "FR" : "عربي";
        
        // Switch all translation elements
        updateTranslations();
    });
}

function updateTranslations() {
    const elementsToTranslate = document.querySelectorAll("[data-i18n]");
    elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute("data-i18n");
        const translationValue = translations[currentLang][translationKey];
        if (translationValue) {
            // Check if element is input or textarea placeholder
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                element.placeholder = translationValue;
            } else {
                element.textContent = translationValue;
            }
        }
    });
}

// 2. Sticky Glassmorphic Navbar Scroll Effect
function initStickyNavbar() {
    const header = document.querySelector(".navbar-container");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        
        // Synchronize Active Link based on scroll section
        updateActiveNavLink();
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    let currentActiveSectionId = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            currentActiveSectionId = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentActiveSectionId}`) {
            link.classList.add("active");
        }
    });
}

// 3. Mobile Navigation Drawer
function initMobileDrawer() {
    const menuToggle = document.getElementById("menuToggle");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        mobileDrawer.classList.toggle("active");
    });

    // Close drawer when a mobile link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            mobileDrawer.classList.remove("active");
        });
    });
}

// 4. Hero Visual Mockup Carousel
function initHeroCarousel() {
    const imgs = document.querySelectorAll("#heroCarousel .carousel-img");
    const dots = document.querySelectorAll("#carouselDots .dot");
    const backupVisual = document.querySelector(".visual-svg-backup");
    
    // Check if real user images load successfully
    let hasLoadedRealImages = false;
    imgs.forEach(img => {
        img.addEventListener("load", () => {
            hasLoadedRealImages = true;
            backupVisual.style.display = "none"; // Hide SVG backup if real images successfully loaded
        });
    });

    let activeIndex = 0;
    const intervalTime = 4000; // Change image every 4 seconds

    function changeSlide(nextIndex) {
        imgs.forEach((img, idx) => {
            img.classList.remove("active");
            dots[idx].classList.remove("active");
        });

        imgs[nextIndex].classList.add("active");
        dots[nextIndex].classList.add("active");
        activeIndex = nextIndex;
    }

    // Auto loop slide
    let carouselInterval = setInterval(() => {
        let nextIndex = (activeIndex + 1) % imgs.length;
        changeSlide(nextIndex);
    }, intervalTime);

    // Click dots support
    dots.forEach((dot, idx) => {
        dot.addEventListener("click", () => {
            clearInterval(carouselInterval);
            changeSlide(idx);
            // Restart interval
            carouselInterval = setInterval(() => {
                let nextIndex = (activeIndex + 1) % imgs.length;
                changeSlide(nextIndex);
            }, intervalTime);
        });
    });
}

// 5. Product Catalog Tab Filters
function initCatalogFilters() {
    const tabs = document.querySelectorAll(".filter-tab");
    const cards = document.querySelectorAll(".product-card");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Update active tab UI
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const filterValue = tab.getAttribute("data-filter");

            cards.forEach(card => {
                card.style.opacity = "0";
                card.style.transform = "scale(0.9) translateY(10px)";
                
                setTimeout(() => {
                    const cardCategory = card.getAttribute("data-category");
                    if (filterValue === "all" || cardCategory === filterValue) {
                        card.style.display = "flex";
                        setTimeout(() => {
                            card.style.opacity = "1";
                            card.style.transform = "scale(1) translateY(0)";
                        }, 50);
                    } else {
                        card.style.display = "none";
                    }
                }, 300);
            });
        });
    });
}

// 6. IntersectionObserver Scroll Reveals & Count Up Stats Animations
function initScrollReveals() {
    const revealSections = document.querySelectorAll(".scroll-reveal-section");
    
    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, self) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                
                // If this is the About Section, trigger the count-up numerical stats!
                if (entry.target.id === "about") {
                    animateStatsCountUp();
                }
                
                self.unobserve(entry.target); // Unobserve once revealed
            }
        });
    }, observerOptions);

    revealSections.forEach(section => {
        observer.observe(section);
    });
}

function animateStatsCountUp() {
    const statPoles = document.getElementById("statPoles");
    const statYears = document.getElementById("statYears");
    const statProjects = document.getElementById("statProjects");

    // Dynamic count parameters [targetVal, currentVal, suffix]
    const stats = [
        { elem: statPoles, target: 15000, suffix: "+" },
        { elem: statYears, target: 10, suffix: "+" },
        { elem: statProjects, target: 250, suffix: "+" }
    ];

    stats.forEach(stat => {
        let count = 0;
        const target = stat.target;
        const increment = Math.ceil(target / 100);
        const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
                count = target;
                clearInterval(timer);
            }
            // Format number with commas
            stat.elem.textContent = count.toLocaleString() + stat.suffix;
        }, 15);
    });
}

// 7. Interactive Form Actions
function initContactForm() {
    const form = document.getElementById("contactForm");
    const submitBtn = document.getElementById("btnSubmit");
    const successAlert = document.getElementById("formSuccessAlert");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Add Loading State
        form.classList.add("loading");
        submitBtn.disabled = true;

        // Capture Inputs
        const name = document.getElementById("userName").value;
        const email = document.getElementById("userEmail").value;
        const phone = document.getElementById("userPhone").value;
        const message = document.getElementById("userMessage").value;

        // Formulate mailto url
        const mailtoSubject = encodeURIComponent(`رسالة إستفسار من موقع GML - ${name}`);
        const mailtoBody = encodeURIComponent(
            `الاسم الكامل: ${name}\n` +
            `البريد الإلكتروني: ${email}\n` +
            `رقم الهاتف: ${phone}\n\n` +
            `محتوى الرسالة:\n${message}`
        );
        const mailtoUrl = `mailto:djoumimohamed733@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

        // Simulate secure database submission (AJAX simulation) and trigger mail client
        setTimeout(() => {
            form.classList.remove("loading");
            form.reset();
            
            // Trigger mailto email action
            window.location.href = mailtoUrl;

            // Show custom Success Alert with animation
            successAlert.style.display = "flex";
            
            // Smoothly remove alert after 6 seconds
            setTimeout(() => {
                successAlert.style.opacity = "0";
                setTimeout(() => {
                    successAlert.style.display = "none";
                    successAlert.style.opacity = "1";
                    submitBtn.disabled = false;
                }, 500);
            }, 6000);
            
        }, 1200); // Simulated delay
    });
}
