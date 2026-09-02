'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

type Photo = {
  src: string;
  alt: string;
  category: string;
  span?: 'large' | 'tall';
};

export default function GalleryClient({ photos }: { photos: Photo[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activePhoto = activeIndex === null ? null : photos[activeIndex];
  const currentIndex = activeIndex ?? 0;

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') setActiveIndex((current) => current === null ? current : (current + photos.length - 1) % photos.length);
      if (event.key === 'ArrowRight') setActiveIndex((current) => current === null ? current : (current + 1) % photos.length);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, photos.length]);

  return (
    <>
      <div className={styles.galleryGrid}>
        {photos.map(({ src, alt, category, span }, index) => (
          <button
            key={src}
            type="button"
            className={`${styles.galleryItem} ${span ? styles[span] : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Open image: ${alt}`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className={styles.galleryImg}
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
            />
            <div className={styles.galleryOverlay}>
              <span className={styles.galleryCategory}>{category}</span>
              <p className={styles.galleryAlt}>{alt}</p>
            </div>
          </button>
        ))}
      </div>

      {activePhoto && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={activePhoto.alt}>
          <button type="button" className={styles.lightboxBackdrop} onClick={() => setActiveIndex(null)} aria-label="Close image" />
          <div className={styles.lightboxPanel}>
            <button type="button" className={styles.lightboxClose} onClick={() => setActiveIndex(null)} aria-label="Close image">
              ×
            </button>
            <button
              type="button"
              className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
              onClick={() => setActiveIndex((currentIndex + photos.length - 1) % photos.length)}
              aria-label="Previous image"
            >
              ‹
            </button>
            <div className={styles.lightboxImageWrap}>
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                className={styles.lightboxImage}
                sizes="100vw"
                priority
              />
            </div>
            <button
              type="button"
              className={`${styles.lightboxNav} ${styles.lightboxNext}`}
              onClick={() => setActiveIndex((currentIndex + 1) % photos.length)}
              aria-label="Next image"
            >
              ›
            </button>
            <div className={styles.lightboxCaption}>
              <span>{activePhoto.category}</span>
              <p>{activePhoto.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
