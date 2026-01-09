// Self-invoking function to avoid polluting the global scope and to use modern JavaScript features safely.
(function () {
    "use strict";

    // --- NAVBAR SCROLL EFFECT ---
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // --- CONFIGURATION ---
    const config = {
        telPhoneNumber: "+966510838186",
        waPhoneNumber: "966510838186",
        whatsappBaseUrl: "https://wa.me/",
        liveWorkImages: [ // <-- المصفوفة الجديدة
            "work (1).jpg", "work (2).jpg", "work (3).jpg", "work (4).jpg",
            "work (5).jpg", "work (6).jpg", "work (7).jpg", "work (8).jpg",
            "work (9).jpg", "work (10).jpg", "work (11).jpg"
        ],
        products: [
            { id: "p01", name: "ستارة ويفي طبقتين", description: "ستارة ويفي أنيقة بطبقتين (بلاك أوت + لنن) تجمع بين الخصوصية التامة والجمال العصري.", images: ["photo (1).jpg", "photo (6).jpg"] },
            { id: "p04", name: "ستائر ويفي (لنن)", description: "ستائر ويفي بطبقة واحدة من قماش لنن، خفيفة وأنيقة، تسمح بمرور الضوء الطبيعي بطريقة ناعمة.", images: ["photo (4).jpg"] },
            { id: "p05", name: "ستائر ويفي (كتان وشيفون)", description: "ستائر ويفي بطبقتين من لنن الكتان والشيفون، تجمع بين المظهر الطبيعي والأناقة الخفيفة.", images: ["photo (5).jpg"] },
            { id: "p02", name: "ستارة لنن طبقة واحدة", description: "ستارة لنن خفيفة وعصرية، تحجب الرؤيا وتسمح بدخول الضوء بنعومة لإضفاء جو دافئ ومريح.", images: ["photo (2).jpg"] },
            { id: "p03", name: "ستائر صالة طعام", description: "ستائر أنيقة لصالة الطعام، تمنح مساحة الطعام إضاءة طبيعية دافئة وتضيف لمسة ديكورية راقية.", images: ["photo (3).jpg"] },
            { id: "p21", name: "ستائر كهربائية", description: "ستائر كهربائية عصرية توفر أقصى درجات الراحة، مع إمكانية التحكم بالفتح والغلق بسهولة عن بعد.", images: ["photo (21).jpg"] },
            { id: "p07", name: "ستائر زيبرا", description: "ستائر زيبرا عصرية بتصميم مزدوج يسمح لك بالتحكم الكامل بمرور الضوء والخصوصية بلمسة واحدة.", images: ["photo (7).jpg", "photo (8).jpg", "photo (9).jpg"] },
            { id: "p15", name: "ستائر رول", description: "ستائر رول عملية تمنح غرفتك تحكمًا كاملاً بمرور الضوء مع الحفاظ على أناقة المساحة.", images: ["photo (15).jpg", "photo (16).jpg", "photo (17).jpg"] },
            { id: "p10", name: "ستائر رول مطبوعة", description: "ستائر رول مطبوعة بنقوش جذابة تضيف لمسة فنية لأي غرفة، مثالية لغرف المعيشة أو غرف الأطفال.", images: ["photo (10).jpg", "photo (11).jpg"] },
            { id: "p18", name: "ستائر شرائح معدنية", description: "ستائر شرائح معدنية متينة وعملية، تتيح لك التحكم الدقيق في دخول الضوء وتناسب المكاتب والمساحات العصرية.", images: ["photo (18).jpg", "photo (19).jpg", "photo (20).jpg"] },
            { id: "p22", name: "ستائر أمريكي", description: "ستائر أمريكية أنيقة وعملية، بتصميم متناسق يضيف لمسة كلاسيكية وفاخرة لأي غرفة.", images: ["photo (22).jpg"] },
            { id: "p23", name: "ستائر مستشفيات", description: "ستائر مستشفيات عملية وعالية الجودة، مصممة لتوفير النظافة والخصوصية في البيئات الصحية.", images: ["photo (23).jpg"] },
            { id: "p24", name: "ستائر مكتبية", description: "ستائر مكتبية عصرية وعملية، تمنحك التحكم الكامل في الضوء والخصوصية داخل بيئة العمل.", images: ["photo (24).jpg"] },
            { id: "p11", name: "اكسسوارات الستائر", description: "نوفر لكم إكسسوارات ستائر مصنوعة من حديد قوي لضمان المتانة والثبات، ومغلفة بطبقة بكس فايبر لزيادة القوة ومقاومة الصدأ كما أنها مبطنة بالبلاستيك من الداخل لحماية الستارة من الاحتكاك ومنع الضجيج أثناء الفتح والإغلاق.", images: ["photo (12).jpg", "photo (13).jpg", "photo (14).jpg"] },
        ]
    };

    // --- DOM ELEMENTS CACHING ---
    const elements = {
        navbar: document.getElementById('navbar'),
        grid: document.getElementById("curtains-grid"),
        lightbox: document.getElementById("lightbox"),
        lightboxImage: document.getElementById("lightboxImage"),
        closeLightboxBtn: document.getElementById("closeLightbox"),
        prevBtn: document.getElementById("prevBtn"),
        nextBtn: document.getElementById("nextBtn"),
        lightboxCounter: document.getElementById("lightbox-counter"),
        thumbnailContainer: document.getElementById("thumbnail-container"),
        lightboxWhatsappLink: document.getElementById("lightbox-whatsapp-link"), // <-- الزر الجديد
        contactDropdownBtn: document.getElementById("contact-dropdown-button"),
        contactDropdownMenu: document.getElementById("contact-dropdown-menu"),
        contactDropdownContainer: document.getElementById("contact-dropdown-container"),
        searchInput: document.getElementById("search-input"),
        // العناصر الجديدة
        aboutModal: document.getElementById("about-modal"),
        openAboutModalBtn: document.getElementById("open-about-modal"),
        closeAboutModalBtn: document.getElementById("close-about-modal"),
        modalWhatsappLink: document.getElementById("modal-whatsapp-link"),

    };

    // --- LIGHTBOX GALLERY STATE ---
    let currentGallery = [];
    let currentImageIndex = 0;
    let currentProductId = null; // لتخزين ID المنتج المفتوح حالياً

    // --- FUNCTIONS ---
    function createWhatsAppLink(product) {
        const message = `مرحبًا،\nأرغب بطلب المنتج التالي:\n\nالمنتج: ${product.name}\n(رمز المنتج: ${product.id})`;
        const encodedMessage = encodeURIComponent(message);
        return `${config.whatsappBaseUrl}${config.waPhoneNumber}?text=${encodedMessage}`;
    }

    function createProductCard(product, index) {
        const card = document.createElement("div");
        card.className = "curtain-card";
        card.setAttribute("data-aos", "fade-up");
        card.setAttribute("data-aos-delay", (index % 4) * 100);

        const mainImage = product.images[0];
        const hasMultipleImages = product.images.length > 1;

        const galleryIcon = `<div class="absolute top-3 right-3 bg-black/50 text-white rounded-full p-2 backdrop-blur-sm pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" /></svg></div>`;

        // **التعديل هنا: إظهار الزر فقط إذا كان المنتج لا يحتوي على معرض صور**
        const ctaButton = hasMultipleImages
            ? '' // لا تظهر أي زر إذا كان هناك معرض
            : `<a href="${createWhatsAppLink(product)}" class="cta-link" target="_blank" rel="noopener noreferrer">اطلب الان</a>`;

        card.innerHTML = `<div class="img-wrapper relative" data-product-id="${product.id}"><img src="images/${mainImage}" alt="${product.name}" loading="lazy">${hasMultipleImages ? galleryIcon : ''}</div><div class="card-content"><div><h3>${product.name}</h3><p>${product.description}</p></div>${ctaButton}</div>`;

        return card;
    }

    function populateGrid() {
        if (!elements.grid) return;
        elements.grid.innerHTML = '';
        config.products.forEach((product, index) => {
            const card = createProductCard(product, index);
            elements.grid.appendChild(card);
        });
    }
    function populateLiveWorkGallery() {
        const galleryContainer = document.querySelector('.live-gallery');
        if (!galleryContainer || !config.liveWorkImages) return;

        galleryContainer.innerHTML = '';
        const sizes = ['normal', 'wide', 'tall', 'normal']; // نمط متكرر للأحجام

        config.liveWorkImages.forEach((imgName, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';

            // تطبيق حجم مختلف بناءً على النمط
            const sizeType = sizes[index % sizes.length];
            if (sizeType === 'wide') item.classList.add('item-wide');
            if (sizeType === 'tall') item.classList.add('item-tall');

            item.innerHTML = `<img src="images/${imgName}" alt="عمل منفذ لمشروع ستائر ${index + 1}" loading="lazy">`;

            // إضافة حدث النقر لفتح الصورة في Lightbox
            item.addEventListener('click', () => {
                openLiveWorkInLightbox(index);
            });

            galleryContainer.appendChild(item);
        });
    }

    // دالة جديدة لفتح صور الأعمال الحية في Lightbox
    function openLiveWorkInLightbox(startIndex) {
        currentGallery = config.liveWorkImages;
        currentImageIndex = startIndex;
        currentProductId = null; // لا يوجد منتج مرتبط هنا

        // إخفاء العناصر الخاصة بالمنتجات في Lightbox
        elements.lightboxWhatsappLink.style.display = 'none';

        // إظهار العناصر العامة
        elements.prevBtn.style.display = 'grid';
        elements.nextBtn.style.display = 'grid';
        elements.lightboxCounter.style.display = 'block';
        elements.thumbnailContainer.style.display = 'flex';

        elements.thumbnailContainer.innerHTML = '';
        currentGallery.forEach((imgName, index) => {
            const thumb = document.createElement('img');
            thumb.src = `images/${imgName}`;
            thumb.className = 'thumbnail-img';
            thumb.dataset.index = index;
            elements.thumbnailContainer.appendChild(thumb);
        });

        updateLightbox(); // نستخدم نفس الدالة لتحديث الصورة والعداد
        elements.lightbox.classList.remove("hidden");
        requestAnimationFrame(() => elements.lightbox.classList.add("show"));
    }

    // --- PROFESSIONAL LIGHTBOX GALLERY LOGIC ---
    function updateLightbox() {
        // التأكد من وجود صور في المعرض الحالي
        if (currentGallery.length === 0) return;

        // 1. تحديث الصورة الرئيسية مع تأثير التلاشي
        elements.lightboxImage.style.opacity = 0;
        setTimeout(() => {
            elements.lightboxImage.src = `images/${currentGallery[currentImageIndex]}`;
            elements.lightboxImage.style.opacity = 1;
        }, 150); // تأخير بسيط لضمان سلاسة الانتقال

        // 2. تحديث رابط الواتساب بشكل ذكي (الجزء المعدل)
        const product = config.products.find(p => p.id === currentProductId);
        if (product) {
            // في حالة عرض منتج: أظهر الزر وقم بإنشاء رسالة مخصصة
            elements.lightboxWhatsappLink.style.display = 'flex';
            const currentImageName = currentGallery[currentImageIndex];
            const message = `مرحبًا،\nأرغب بالاستفسار عن هذا المنتج تحديداً:\n\nالمنتج: ${product.name}\nصورة رقم: ${currentImageIndex + 1} (اسم الملف: ${currentImageName})`;
            const encodedMessage = encodeURIComponent(message);
            elements.lightboxWhatsappLink.href = `${config.whatsappBaseUrl}${config.waPhoneNumber}?text=${encodedMessage}`;
        } else {
            // في حالة عرض صورة من "أعمالنا" (أو أي معرض آخر لا يحتوي على منتج): قم بإخفاء الزر
            elements.lightboxWhatsappLink.style.display = 'none';
        }

        // 3. تحديث عداد الصور
        elements.lightboxCounter.textContent = `${currentImageIndex + 1} / ${currentGallery.length}`;

        // 4. تحديث الصور المصغرة (Thumbnails)
        // إزالة الكلاس 'active' من جميع الصور المصغرة
        elements.thumbnailContainer.querySelectorAll('.thumbnail-img').forEach((img) => {
            img.classList.remove('active');
        });

        // إضافة الكلاس 'active' للصورة المصغرة الحالية
        const activeThumbnail = elements.thumbnailContainer.querySelector(`.thumbnail-img[data-index='${currentImageIndex}']`);
        if (activeThumbnail) {
            activeThumbnail.classList.add('active');
            // تمرير شريط الصور المصغرة لتوسيط الصورة النشطة
            activeThumbnail.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    }


    function openLightbox(productId, clickedImageSrc) {
        const product = config.products.find(p => p.id === productId);
        if (!product) return;

        currentProductId = productId; // تخزين ID المنتج
        currentGallery = product.images;
        const clickedImageName = clickedImageSrc.split('/').pop();
        currentImageIndex = currentGallery.indexOf(clickedImageName);
        if (currentImageIndex === -1) currentImageIndex = 0;

        const isGallery = currentGallery.length > 1;
        elements.prevBtn.style.display = isGallery ? 'grid' : 'none';
        elements.nextBtn.style.display = isGallery ? 'grid' : 'none';
        elements.lightboxCounter.style.display = isGallery ? 'block' : 'none';
        elements.thumbnailContainer.style.display = isGallery ? 'flex' : 'none';
        elements.lightboxWhatsappLink.style.display = isGallery ? 'flex' : 'none';

        elements.thumbnailContainer.innerHTML = '';
        if (isGallery) {
            currentGallery.forEach((imgName, index) => {
                const thumb = document.createElement('img');
                thumb.src = `images/${imgName}`;
                thumb.className = 'thumbnail-img';
                thumb.dataset.index = index;
                elements.thumbnailContainer.appendChild(thumb);
            });
        }

        updateLightbox();
        elements.lightbox.classList.remove("hidden");
        requestAnimationFrame(() => elements.lightbox.classList.add("show"));
    }

    function closeLightbox() {
        elements.lightbox.classList.remove("show");
        elements.lightbox.addEventListener('transitionend', () => {
            elements.lightbox.classList.add("hidden");
            currentGallery = [];
            currentImageIndex = 0;
            currentProductId = null;
            elements.thumbnailContainer.innerHTML = '';
        }, { once: true });
    }

    function showNextImage() {
        if (currentGallery.length <= 1) return;
        currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
        updateLightbox();
    }

    function showPrevImage() {
        if (currentGallery.length <= 1) return;
        currentImageIndex = (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
        updateLightbox();
    }

    // --- EVENT HANDLING ---
    function initEventListeners() {
        elements.closeLightboxBtn?.addEventListener("click", closeLightbox);
        elements.lightbox?.addEventListener("click", e => { if (e.target === elements.lightbox) closeLightbox(); });
        elements.nextBtn?.addEventListener("click", showNextImage);
        elements.prevBtn?.addEventListener("click", showPrevImage);

        elements.grid?.addEventListener('click', e => {
            const imgWrapper = e.target.closest('.img-wrapper');
            if (imgWrapper) {
                const productId = imgWrapper.dataset.productId;
                const clickedImageSrc = imgWrapper.querySelector('img').getAttribute('src');
                openLightbox(productId, clickedImageSrc);
            }
        });

        elements.thumbnailContainer?.addEventListener('click', e => {
            if (e.target.classList.contains('thumbnail-img')) {
                currentImageIndex = parseInt(e.target.dataset.index, 10);
                updateLightbox();
            }
        });

        document.addEventListener('keydown', e => {
            // إذا كان معرض الصور مفتوحاً
            if (elements.lightbox.classList.contains("show")) {
                if (e.key === "Escape") closeLightbox();
                if (e.key === "ArrowRight") showNextImage();
                if (e.key === "ArrowLeft") showPrevImage();
            }
            // إذا كانت النافذة المنبثقة مفتوحة
            else if (elements.aboutModal.classList.contains("active")) {
                if (e.key === "Escape") closeModal();
            }
        });


        elements.contactDropdownBtn?.addEventListener('click', e => {
            e.stopPropagation();
            elements.contactDropdownMenu.classList.toggle('show');
        });

        document.addEventListener('click', e => {
            if (!elements.contactDropdownContainer?.contains(e.target)) {
                elements.contactDropdownMenu?.classList.remove('show');
            }
        });

        elements.searchInput?.addEventListener('input', e => {
            const searchTerm = e.target.value.toLowerCase().trim();
            elements.grid.querySelectorAll('.curtain-card').forEach(card => {
                const name = card.querySelector('h3').textContent.toLowerCase();
                const desc = card.querySelector('p').textContent.toLowerCase();
                card.classList.toggle('hidden-by-search', !(name.includes(searchTerm) || desc.includes(searchTerm)));
            });
            setTimeout(() => AOS.refresh(), 50);
        });

        // --- About Modal Events (with Animation) ---
        function openModal() {
            elements.aboutModal.classList.remove('hidden');
            requestAnimationFrame(() => {
                elements.aboutModal.classList.add('active');
            });
        }

        function closeModal() {
            elements.aboutModal.classList.remove('active');
            elements.aboutModal.addEventListener('transitionend', () => {
                elements.aboutModal.classList.add('hidden');
            }, { once: true });
        }

        elements.openAboutModalBtn?.addEventListener('click', openModal);
        elements.closeAboutModalBtn?.addEventListener('click', closeModal);

        elements.aboutModal?.addEventListener('click', e => {
            if (e.target === elements.aboutModal) {
                closeModal();
            }
        });

    }

    // --- HERO SLIDESHOW LOGIC ---
    function initHeroSlideshow() {
        const slideshowContainer = document.getElementById('hero-slideshow');
        if (!slideshowContainer) return;
        const slideImages = config.products.slice(0, 5).map(p => `images/${p.images[0]}`);
        slideImages.forEach((imgSrc, i) => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.style.backgroundImage = `url('${imgSrc}')`;
            if (i === 0) slide.classList.add('active');
            slideshowContainer.appendChild(slide);
        });
        let currentSlide = 0;
        const slides = slideshowContainer.querySelectorAll('.slide');
        if (slides.length <= 1) return;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }

    // --- DYNAMIC LINKS SETUP ---
    function setupContactLinks() {
        document.getElementById('call-link')?.setAttribute('href', `tel:${config.telPhoneNumber}`);
        document.getElementById('whatsapp-link-dropdown')?.setAttribute('href', `${config.whatsappBaseUrl}${config.waPhoneNumber}`);
        document.getElementById('footer-call-link')?.setAttribute('href', `tel:${config.telPhoneNumber}`);
        const footerPhoneNumEl = document.getElementById('footer-phone-number');
        if (footerPhoneNumEl) footerPhoneNumEl.textContent = config.telPhoneNumber;
        document.getElementById('footer-whatsapp-link')?.setAttribute('href', `${config.whatsappBaseUrl}${config.waPhoneNumber}`);
        elements.modalWhatsappLink?.setAttribute('href', `${config.whatsappBaseUrl}${config.waPhoneNumber}?text=${encodeURIComponent('مرحباً، لقد اطلعت على موقعكم وأرغب بالاستفسار.')}`);

    }

    // --- INITIALIZATION ---
    function main() {
        populateGrid();
        populateLiveWorkGallery();
        setupContactLinks();
        initEventListeners();
        initHeroSlideshow();
        AOS.init({ duration: 800, easing: "ease-in-out-cubic", once: false, offset: 100 });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', main);
    } else {
        main();
    }

})();
