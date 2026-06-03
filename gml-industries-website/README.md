# GML Industries - دليل تشغيل وإعداد الموقع الإلكتروني

تهانينا! لقد تم تصميم وإنشاء الموقع الإلكتروني الفاخر والحديث لشركة **GML Industries** ببرج بوعريريج. 
يحتوي هذا المستند على التعليمات الكاملة لإعداد الصور المرفقة وتشغيل الموقع محلياً على جهازك.

---

## 📂 هيكلية المشروع (Project Structure)
لقد تم إنشاء جميع الملفات البرمجية الأساسية في المسار التالي:
`C:\Users\DELL\.gemini\antigravity\scratch\gml-industries-website\`

وهي تتكون من:
* `index.html`: البنية البرمجية الأساسية للموقع مع دعم كامل للغتين (عربي / فرنسي).
* `styles.css`: التصميم الفاخر (Dark-Lime)، التجاوب مع الهواتف، والتأثيرات الزجاجية.
* `script.js`: محرك تغيير اللغة، فلاتر المنتجات، التفاعل، عدادات الأرقام التلقائية، وإرسال الرسائل.

---

## 🖼️ خطوة 1: إعداد وتثبيت صور المنتجات (Adding Your Uploaded Images)
للحصول على المظهر النهائي الخارق للموقع بالصور الحقيقية التي أرفقتها، يرجى القيام بما يلي:

1. قم بإنشاء المجلد التالي داخل مجلد المشروع (إذا لم يكن موجوداً):
   `assets/images/`
2. انقل الصور التي قمت برفعها في هذه المحادثة إلى ذلك المجلد مع تسميتها **بالضبط** كما يلي:
   * **شعار الشركة (اللوغو الأخضر)** ➔ `logo.jpg`
   * **أعمدة فولاذية مكدسة في الساحة (صورة 2)** ➔ `product-yard-1.jpg`
   * **مصفوفات الأعمدة في الساحة (صورة 3)** ➔ `product-yard-2.jpg`
   * **الأعمدة الملفوفة بالبلاستيك (صورة 4)** ➔ `product-wrapped.jpg`
   * **الأعمدة المصبوغة بالرمادي (صورة 5)** ➔ `product-coated.jpg`

> [!NOTE]
> لقد قمنا بكتابة نظام حماية تلقائي (Fallback SVGs) يعرض رسومات هندسية جميلة جداً للأعمدة والأيقونات في حال لم تقم بنسخ الصور بعد، بحيث يعمل الموقع بشكل جذاب وفوري في جميع الأحوال!

---

## 🚀 خطوة 2: تشغيل الموقع محلياً (Running Locally)
لتشغيل الموقع وتجربته، نوصي بفتح مجلد المشروع في برنامج **VS Code** كمسار عمل نشط (Active Workspace)، ثم تشغيله بأحد الطرق التالية:

### 1. باستخدام إضافة Live Server في VS Code (موصى به للغاية):
* افتح المجلد `gml-industries-website` في VS Code.
* انقر بزر الفأرة الأيمن على ملف `index.html`.
* اختر **Open with Live Server**.
* سيفتح الموقع تلقائياً في متصفحك مع ميزة التحديث الفوري عند تعديل أي كود.

### 2. باستخدام سطر الأوامر (Python):
إذا كان لديك Python مثبت على جهازك، يمكنك فتح Terminal في مجلد المشروع وتشغيل الأمر التالي:
```bash
python -m http.server 8000
```
ثم افتح متصفحك واذهب إلى الرابط: `http://localhost:8000`

---

## 🛠️ التعديل والتخصيص المستقبلي
* **تغيير أرقام الهواتف أو الروابط**: يمكنك فتح ملف `index.html` وتعديل الرقم `0770814591` أو رابط الفيسبوك بسهولة.
* **تعديل النصوص المترجمة**: جميع النصوص باللغتين العربية والفرنسية موجودة في بداية ملف `script.js` داخل المتغير `translations`؛ يمكنك تعديل أي كلمة أو إضافة ترجمة جديدة هناك وسيقوم الموقع بتحديثها تلقائياً!

---

# GML Industries - Guide de Configuration du Site Web

Félicitations ! Le site web moderne et premium pour **GML Industries** (Bordj Bou Arreridj, Algérie) a été créé avec succès.

## 📂 Structure du Projet
Les fichiers ont été générés dans le dossier :
`C:\Users\DELL\.gemini\antigravity\scratch\gml-industries-website\`

## 🖼️ Étape 1 : Ajouter les images de vos produits
Pour afficher vos vraies photos d'usine, créez le sous-dossier `assets/images/` et placez-y vos fichiers renommés exactement ainsi :
- Le logo vert ➔ `logo.jpg`
- Poteaux empilés (image 2) ➔ `product-yard-1.jpg`
- Alignement de poteaux (image 3) ➔ `product-yard-2.jpg`
- Poteaux emballés (image 4) ➔ `product-wrapped.jpg`
- Poteaux peints (image 5) ➔ `product-coated.jpg`

## 🚀 Étape 2 : Lancer le site localement
Ouvrez le dossier dans VS Code, puis faites un clic droit sur `index.html` et choisissez **Open with Live Server**. Ou lancez via terminal :
```bash
python -m http.server 8000
```
Puis ouvrez `http://localhost:8000` dans votre navigateur.
