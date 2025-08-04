# Bilder einfügen - Vollständige Anleitung

## **📁 Ordner-Struktur erstellen:**

Erstelle diese Ordner in deinem Projekt:
```
images/
├── hero/           # Hauptbilder (1920x1080px)
├── portfolio/      # Portfolio-Bilder (800x600px)
├── about/          # Über uns Bilder (600x800px)
├── contact/        # Kontakt-Bilder
├── icons/          # Icons und Logos
└── favicon/        # Favicon und App-Icons
```

## **🖼️ Bild-Größen und Formate:**

### **Empfohlene Größen:**
- **Hero-Bilder:** 1920x1080px (16:9)
- **Portfolio-Bilder:** 800x600px (4:3)
- **About-Bilder:** 600x800px (Portrait)
- **Icons:** 64x64px oder 128x128px
- **Favicon:** 32x32px, 16x16px

### **Beste Formate:**
- **WebP** (empfohlen) - kleinste Dateigröße
- **JPEG** - für Fotos
- **PNG** - für Icons und Logos
- **SVG** - für Icons und Vektoren

## **📝 HTML-Code für Bilder:**

### **1. Einfaches Bild:**
```html
<img src="images/portfolio/wedding-1.jpg" alt="Hochzeitsfotografie" loading="lazy">
```

### **2. Responsive Bild:**
```html
<img src="images/hero/hero-bg.jpg" 
     alt="Dylan Photography - Professionelle Fotografie" 
     loading="eager"
     style="width: 100%; height: auto;">
```

### **3. Picture Element (für verschiedene Auflösungen):**
```html
<picture>
    <source media="(min-width: 768px)" srcset="images/portfolio/wedding-1-large.jpg">
    <source media="(min-width: 480px)" srcset="images/portfolio/wedding-1-medium.jpg">
    <img src="images/portfolio/wedding-1-small.jpg" alt="Hochzeitsfotografie" loading="lazy">
</picture>
```

### **4. Lazy Loading:**
```html
<!-- Für Bilder unterhalb des Folds -->
<img src="images/event.jpg" alt="Portrait-Fotografie" loading="lazy">

<!-- Für wichtige Bilder (Hero) -->
<img src="images/hero/hero-bg.jpg" alt="Hero Bild" loading="eager">
```

## **🎨 CSS für Bilder:**

### **1. Responsive Bild:**
```css
.responsive-image {
    width: 100%;
    height: auto;
    max-width: 100%;
}
```

### **2. Cover-Bild (für Hero):**
```css
.hero-image {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center;
}
```

### **3. Hover-Effekt:**
```css
.portfolio-image img {
    transition: all 0.3s ease;
}

.portfolio-image img:hover {
    transform: scale(1.1);
}
```

### **4. Bild mit Overlay:**
```css
.image-container {
    position: relative;
    overflow: hidden;
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.image-container:hover .image-overlay {
    opacity: 1;
}
```

## **⚡ Performance-Optimierung:**

### **1. Bild-Komprimierung:**
- Verwende **TinyPNG** oder **Squoosh**
- Optimiere für Web (80-85% Qualität)
- Konvertiere zu WebP wenn möglich

### **2. Responsive Images:**
```html
<img src="image-800w.jpg" 
     srcset="image-400w.jpg 400w,
             image-800w.jpg 800w,
             image-1200w.jpg 1200w"
     sizes="(max-width: 600px) 400px,
            (max-width: 1200px) 800px,
            1200px"
     alt="Beschreibung">
```

### **3. Lazy Loading:**
```html
<!-- Native Lazy Loading -->
<img src="image.jpg" loading="lazy" alt="Beschreibung">

<!-- Intersection Observer für ältere Browser -->
<img src="image.jpg" data-src="image.jpg" class="lazy" alt="Beschreibung">
```

## **🔧 JavaScript für Lazy Loading:**

```javascript
// Lazy Loading für ältere Browser
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll("img[data-src]");
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazy");
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
});
```

## **📱 Responsive Bilder:**

### **1. CSS Grid für Bildergalerie:**
```css
.image-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.image-gallery img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
}
```

### **2. Flexbox für Bildergalerie:**
```css
.image-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.image-gallery img {
    flex: 1 1 300px;
    height: 250px;
    object-fit: cover;
}
```

## **🎯 Best Practices:**

### **✅ Gut:**
- Verwende beschreibende Alt-Texte
- Optimiere Bilder für Web
- Verwende Lazy Loading
- Responsive Bilder
- WebP-Format wenn möglich

### **❌ Schlecht:**
- Zu große Bilddateien
- Fehlende Alt-Texte
- Keine Optimierung
- Feste Bildgrößen

## **🛠️ Tools für Bild-Optimierung:**

### **Online-Tools:**
- **TinyPNG:** https://tinypng.com/
- **Squoosh:** https://squoosh.app/
- **WebP Converter:** https://convertio.co/webp-converter/

### **Desktop-Tools:**
- **ImageOptim** (Mac)
- **FileOptimizer** (Windows)
- **GIMP** (kostenlos)

## **📋 Checkliste:**

- [ ] Ordner-Struktur erstellt
- [ ] Bilder optimiert (WebP/JPEG)
- [ ] Alt-Texte hinzugefügt
- [ ] Lazy Loading implementiert
- [ ] Responsive CSS geschrieben
- [ ] Performance getestet
- [ ] Verschiedene Bildschirmgrößen getestet

## **🚀 Fazit:**

Mit dieser Anleitung kannst du professionelle, optimierte Bilder in deine Website einfügen. Denke immer an Performance und Benutzerfreundlichkeit! 📸✨ 