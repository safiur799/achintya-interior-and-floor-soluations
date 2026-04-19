"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Wrapper from "@/app/layout/Wrapper";
import Link from "next/link";
import CommonBanner from "@/app/components/CommonBanner";
import FreeSampleCard from "@/app/components/FreeSampleCard";
import { Product } from "@/app/types/product";
import Pagination from "@/app/components/Pagination";
import { categories as categoriesData } from "@/app/json/products.json";
import { Category } from "@/app/types/product";

/** Subcategory Listing Page */
const categories = categoriesData as unknown as Category[];

const SubcategoryPage = () => {
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const categoryId = params.category as string;
  const subcategoryId = params.subcategory as string;

  const category = categories.find(
    (c) => c.id.toLowerCase() === categoryId?.toLowerCase(),
  );

  const subcategory = category?.subcategories?.find(
    (s) => s.id.toLowerCase() === subcategoryId?.toLowerCase(),
  );

  const allProducts = subcategory?.products || [];

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const currentProducts = allProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    if (!category || !subcategory) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".product-card",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".product-categories-grid",
            start: "top 85%",
          },
        },
      );
    });

    return () => ctx.revert();
  }, [category, subcategory, currentPage]);

  return (
    <Wrapper hideAnnouncements={true}>
      {!category || !subcategory ? (
        <div
          style={{
            padding: "200px 20px",
            textAlign: "center",
            minHeight: "60vh",
          }}
        >
          <h2 style={{ color: "#fff" }}>
            {!category ? "Category not found" : "Subcategory not found"}
          </h2>
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
          <CommonBanner
            title={subcategory.title}
            description={category.description}
            bgImage={subcategory.image || category.image}
          >
            <FreeSampleCard />
          </CommonBanner>
          <section className="product-categories-section">
            <div className="section-title">
              <h3>{subcategory.title}</h3>
              <p>{allProducts.length} products</p>
            </div>
            <div className="product-categories-grid">
              {currentProducts.map((product: Product) => {
                return (
                  <Link
                    href={`/products/${category.id}/${subcategory.id}/${product.id}`}
                    key={product.id}
                    className="product-card"
                  >
                    <div className="product-image">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="product-name">
                      <h3>{product.title}</h3>
                    </div>
                  </Link>
                );
              })}
            </div>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page: any) => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            )}
          </section>
        </>
      )}
    </Wrapper>
  );
};

export default SubcategoryPage;
