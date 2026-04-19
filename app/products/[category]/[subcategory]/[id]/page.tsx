"use client";
/** Product Detail Page with enhanced metadata and robust lookup */
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { gsap } from "gsap";
import Wrapper from "../../../../layout/Wrapper";
import {
  categories as categoriesData,
  client_logos,
} from "../../../../json/products.json";
import { Category, Product } from "../../../../types/product";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const categories = categoriesData as unknown as Category[];

const ProductDetailPage = () => {
  const params = useParams();
  const categoryId = params.category as string;
  const subcategoryId = params.subcategory as string;
  const productId = params.id as string;

  const category = categories.find(
    (c) => c.id.toLowerCase() === categoryId?.toLowerCase(),
  );

  // Initialize with specific lookup
  let subcategory = category?.subcategories?.find(
    (s) => s.id.toLowerCase() === subcategoryId?.toLowerCase(),
  );

  let product = subcategory?.products.find(
    (p) => p.id.toLowerCase() === productId?.toLowerCase(),
  ) as Product | undefined;

  // Robust lookup: if not found, search all subcategories OR category.products
  if (!product && category) {
    // 1. Search directly in category.products (if flattened)
    const catProducts = (category as any).products;
    if (Array.isArray(catProducts)) {
      product = catProducts.find(
        (p: Product) => p.id.toLowerCase() === productId?.toLowerCase(),
      );
    }

    // 2. Search all subcategories if still not found
    if (!product && category.subcategories) {
      for (const sub of category.subcategories) {
        const found = sub.products?.find(
          (p) => p.id.toLowerCase() === productId?.toLowerCase(),
        );
        if (found) {
          product = found;
          subcategory = sub;
          break;
        }
      }
    }
  }

  const [mainImage, setMainImage] = useState(product?.image);
  const [activeTab, setActiveTab] = useState("specs");

  useEffect(() => {
    if (product) {
      setMainImage(product.image);
    }

    // Smooth reveal animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".product-gallery-wrap",
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
      );
      gsap.fromTo(
        ".product-details-wrap",
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 },
      );
    });
    return () => ctx.revert();
  }, [product]);

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/600x400?text=Product+Image";
  };

  return (
    <Wrapper hideAnnouncements={true}>
      {!product ? (
        <div
          style={{
            padding: "200px 20px",
            textAlign: "center",
            minHeight: "60vh",
          }}
        >
          <h2 style={{ color: "#fff" }}>Product not found</h2>
          <Link
            href="/products"
            className="inquiry-btn"
            style={{ marginTop: "20px", display: "inline-block" }}
          >
            Back to Products
          </Link>
        </div>
      ) : (
        <>
          {/* <div className="product-breadcrumb-wrap">
            <div className="container">
              <ul className="breadcrumbs">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href={`/products/${category.id}`}>
                    {category.title}
                  </Link>
                </li>
                <li>
                  <Link href={`/products/${category.id}/${subcategory.id}`}>
                    {subcategory.title}
                  </Link>
                </li>
                <li className="active">{product.title}</li>
              </ul>
            </div>
          </div> */}

          <section className="product-detail-standard">
            <div className="container">
              <div className="product-detail-flex">
                <div className="product-gallery-wrap">
                  <div className="main-image-display">
                    <img
                      src={mainImage}
                      alt={product.title}
                      onError={handleImgError}
                    />
                  </div>
                  {product.gallery_images && (
                    <div className="thumbnail-gallery">
                      {product.gallery_images.map(
                        (img: string, idx: number) => (
                          <div
                            key={idx}
                            className={`thumb-item ${mainImage === img ? "active" : ""}`}
                            onClick={() => setMainImage(img)}
                          >
                            <img
                              src={img}
                              alt={`${product.title} thumbnail ${idx}`}
                              onError={handleImgError}
                            />
                          </div>
                        ),
                      )}
                    </div>
                  )}
                </div>

                <div className="product-details-wrap">
                  <span className="product-sku">SKU: {product.sku}</span>
                  <h1 className="product-title">{product.title}</h1>
                  <p className="product-brand-by">By Achintya Interior</p>

                  {product.material_grades && (
                    <div className="detail-meta-group">
                      <h4>Material Grades</h4>
                      <div className="grade-icons">
                        {product.material_grades.map((grade) => (
                          <div key={grade} className="grade-chip">
                            <span className="icon">🛡️</span> {grade}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {product.colors && (
                    <div className="detail-meta-group">
                      <h4>Available Colors</h4>
                      <div className="color-swatches">
                        {product.colors.map((color: string) => (
                          <div key={color} className="color-swatch-item">
                            <span
                              className={`swatch-${color.toLowerCase().replace(" ", "-")}`}
                              title={color}
                            ></span>
                            <span className="color-name">{color}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="quick-specs-grid">
                    {product.quick_specs &&
                      Object.entries(product.quick_specs).map(([key, val]) => (
                        <div key={key} className="quick-spec-item">
                          <span className="label text-capitalize">
                            {key.replace("_", " ")}
                          </span>
                          <span className="value">{val}</span>
                        </div>
                      ))}
                  </div>

                  <div className="product-cta-group">
                    <button className="brochure-btn">
                      Product Brochure (PDF)
                    </button>
                    <Link href="/contact-us" className="inquiry-btn">
                      Make an Inquiry
                    </Link>
                  </div>
                </div>
              </div>

              <div className="product-tabs-section">
                <div className="tabs-header">
                  <button
                    className={activeTab === "specs" ? "active" : ""}
                    onClick={() => setActiveTab("specs")}
                  >
                    Product Specification
                  </button>
                  <button
                    className={activeTab === "about" ? "active" : ""}
                    onClick={() => setActiveTab("about")}
                  >
                    About this Product
                  </button>
                </div>
                <div className="tabs-content">
                  {activeTab === "specs" ? (
                    <div className="specs-table-wrap">
                      <div className="specs-group">
                        <h4 className="specs-section-title">
                          Basic Information
                        </h4>
                        <table className="specs-table">
                          <tbody>
                            <tr>
                              <th>Brand</th>
                              <td>{product.brand || "Eminent Tactiles"}</td>
                            </tr>
                            <tr>
                              <th>Origin</th>
                              <td>{product.origin || "Made in India"}</td>
                            </tr>
                            {product.customization && (
                              <tr>
                                <th>Customization</th>
                                <td>{product.customization}</td>
                              </tr>
                            )}
                            {product.warranty && (
                              <tr>
                                <th>Warranty</th>
                                <td>{product.warranty}</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>

                      {product.performance_features && (
                        <div className="specs-group">
                          <h4 className="specs-section-title">
                            Performance Features
                          </h4>
                          <table className="specs-table">
                            <tbody>
                              {Object.entries(product.performance_features).map(
                                ([key, val]) => (
                                  <tr key={key}>
                                    <th className="text-capitalize">
                                      {key.replace(/_/g, " ")}
                                    </th>
                                    <td>{val}</td>
                                  </tr>
                                ),
                              )}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {product.installation_details && (
                        <div className="specs-group">
                          <h4 className="specs-section-title">
                            Installation Details
                          </h4>
                          <table className="specs-table">
                            <tbody>
                              {Object.entries(product.installation_details).map(
                                ([key, val]) => (
                                  <tr key={key}>
                                    <th className="text-capitalize">
                                      {key.replace(/_/g, " ")}
                                    </th>
                                    <td>{val}</td>
                                  </tr>
                                ),
                              )}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {(product.technical_specs ||
                        product.dimensions_detailed) && (
                        <div className="specs-group">
                          <h4 className="specs-section-title">
                            Technical Specifications
                          </h4>
                          <table className="specs-table">
                            <tbody>
                              {product.dimensions_detailed &&
                                Object.entries(product.dimensions_detailed).map(
                                  ([key, val]) => (
                                    <tr key={key}>
                                      <th className="text-capitalize">
                                        {key.replace(/_/g, " ")}
                                      </th>
                                      <td>{val}</td>
                                    </tr>
                                  ),
                                )}
                              {product.technical_specs &&
                                Object.entries(product.technical_specs).map(
                                  ([key, val]) => (
                                    <tr key={key}>
                                      <th>{key}</th>
                                      <td>{val}</td>
                                    </tr>
                                  ),
                                )}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {product.usage_applications && (
                        <div className="specs-group">
                          <h4 className="specs-section-title">
                            Usage & Applications
                          </h4>
                          <div className="specs-list-wrap">
                            <ul className="specs-bullet-list">
                              {product.usage_applications.map((app, idx) => (
                                <li key={idx}>{app}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {product.standards && (
                        <div className="specs-group">
                          <h4 className="specs-section-title">
                            Standards & Compliance
                          </h4>
                          <div className="specs-list-wrap">
                            <ul className="specs-bullet-list">
                              {product.standards.map((std, idx) => (
                                <li key={idx}>{std}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="about-text-wrap">
                      <p>{product.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="company-bio-section">
            <div className="container">
              <div className="bio-card">
                <h3>COMPANY</h3>
                <p>
                  Achintya Interior is a trusted manufacturer and solution
                  provider of high-quality interior and flooring products. We
                  are dedicated to providing clear and continuous navigation
                  guidance for visually impaired pedestrians and premium
                  architectural solutions for public and commercial
                  environments. Our products are designed for durability,
                  anti-slip performance, and long-term outdoor reliability.
                </p>
              </div>
            </div>
          </section>

          <section className="client-logos-section">
            <div className="container">
              <h4 className="section-title">OUR CLIENTS</h4>
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={5}
                navigation
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 5 },
                }}
                className="client-swiper"
              >
                {client_logos.map((logo, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="client-logo-item">
                      <img
                        src={logo}
                        alt={`Client logo ${idx}`}
                        onError={handleImgError}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        </>
      )}
    </Wrapper>
  );
};

export default ProductDetailPage;
