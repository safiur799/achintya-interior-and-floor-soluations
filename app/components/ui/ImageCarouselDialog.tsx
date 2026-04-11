"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselDialogProps {
  isOpen: boolean;
  onClose: () => void;
  images: (string | StaticImageData)[];
  title: string;
}

const ImageCarouselDialog: React.FC<ImageCarouselDialogProps> = ({
  isOpen,
  onClose,
  images,
  title,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || !images || images.length === 0) return null;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={32} />
        </button>

        <div className="modal-carousel-container">
          <button className="carousel-nav prev" onClick={prevImage}>
            <ChevronLeft size={48} />
          </button>

          <div className="modal-image-wrapper">
            <Image
              src={images[currentIndex]}
              alt={`${title} - image ${currentIndex + 1}`}
              fill
              className="modal-image"
              priority
            />
          </div>

          <button className="carousel-nav next" onClick={nextImage}>
            <ChevronRight size={48} />
          </button>
        </div>

        <div className="modal-footer">
          <h3>{title}</h3>
          <p>
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCarouselDialog;
