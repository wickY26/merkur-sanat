export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
}

export const courses: Course[] = [
  {
    id: "violin",
    title: "Keman Eğitimi",
    category: "Klasik",
    description:
      "Teknik ve duygunun mükemmel dengesiyle keman dünyasına adım atın.",
    imageAlt: "Keman eğitimi",
    imageSrc: "/images/course-violin.jpg",
  },
  {
    id: "piano",
    title: "Piyano Eğitimi",
    category: "Konservatuvar",
    description:
      "Tuşların arkasındaki hikayeyi keşfedin, virtüözlüğe giden yolu aralayın.",
    imageAlt: "Piyano eğitimi",
    imageSrc: "/images/course-piano.jpg",
  },
  {
    id: "guitar",
    title: "Gitar Eğitimi",
    category: "Modern",
    description:
      "Klasikten moderne, tellerin tınısıyla kendi stilinizi yaratın.",
    imageAlt: "Gitar eğitimi",
    imageSrc: "/images/course-guitar.jpg",
  },
  {
    id: "drum-course",
    title: "Bateri Eğitimi",
    category: "Vurmalı Çalgılar",
    description:
      "Ritim duygunuzu geliştirin, modern teknikler ve koordinasyon çalışmalarıyla profesyonel davulculuğa adım atın.",
    imageSrc: "/images/course-drums.jpg",
    imageAlt: "Bateri eğitimi",
  },
  {
    id: "cello",
    title: "Çello Eğitimi",
    category: "Klasik",
    description:
      "Derin ve etkileyici tonlarıyla çello, orkestranın kalbinde yerinizi almanızı sağlar.",
    imageAlt: "Çello eğitimi",
    imageSrc: "/images/cello.webp",
  },
  {
    id: "painting",
    title: "Resim Eğitimi",
    category: "Görsel Sanatlar",
    description:
      "Fırça darbeleriyle hayal gücünüzü tuvale taşıyın, kendi görsel dilinizi keşfedin.",
    imageAlt: "Resim eğitimi",
    imageSrc: "/images/course-painting.jpg",
  },
  {
    id: "ceramic",
    title: "Seramik Eğitimi",
    category: "Görsel Sanatlar",
    description:
      "Toprağın ruhunu ellerinizle şekillendirin, sabır ve yaratıcılığın buluştuğu bu sanatta ustalaşın.",
    imageAlt: "Seramik eğitimi",
    imageSrc: "/images/course-ceramic.webp",
  },
  {
    id: "theatre",
    title: "Tiyatro Eğitimi",
    category: "Sahne Sanatları",
    description:
      "Sahnenin büyülü dünyasında sesinizi ve bedeninizi keşfederek karakterlere hayat verin.",
    imageAlt: "Tiyatro eğitimi",
    imageSrc: "/images/course-theatre.webp",
  },
];
