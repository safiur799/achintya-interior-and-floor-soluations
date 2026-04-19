"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Wrapper from "../../layout/Wrapper";
import CommonBanner from "../../components/CommonBanner";
import Pagination from "../../components/Pagination";
import { categories as categoriesData } from "../../json/products.json";
import { Category, Product } from "../../types/product";
import Link from "next/link";
import FreeSampleCard from "../../components/FreeSampleCard";

const categories = categoriesData as unknown as Category[];

const CategoryPage = () => {
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const categoryId = params.category as string;
  const category = categories.find(
    (c) => c.id.toLowerCase() === categoryId?.toLowerCase(),
  );

  const allProducts =
    category?.subcategories?.flatMap((sub) => sub.products || []) || [];

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const currentProducts = allProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    if (!category) return;

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
  }, [category, currentPage]);

  return (
    <Wrapper hideAnnouncements={true}>
      {!category ? (
        <div
          style={{
            padding: "200px 20px",
            textAlign: "center",
            minHeight: "60vh",
          }}
        >
          <h2 style={{ color: "#fff" }}>Category not found</h2>
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
            title={category.title}
            description={category.description}
            bgImage={category.image}
          >
            <FreeSampleCard />
          </CommonBanner>
          <section className="product-categories-section">
            <div className="section-title">
              <h3>{category.title}</h3>
              <p>
                {category.subcategories.reduce(
                  (acc, sub) => acc + (sub.products?.length || 0),
                  0,
                )}{" "}
                products
              </p>
            </div>
            <div className="product-categories-grid">
              {currentProducts.map((product: Product) => {
                const subId = category.subcategories.find((s) =>
                  s.products.some((p) => p.id === product.id),
                )?.id;
                return (
                  <Link
                    href={`/products/${category.id}/${subId}/${product.id}`}
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

export default CategoryPage;
