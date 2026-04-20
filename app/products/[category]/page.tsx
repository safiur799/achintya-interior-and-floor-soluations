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
import HowCanHelp from "@/app/components/HowCanHelp";
import ContactCTA, { BottomIcons } from "@/app/components/ContactCTA";

const categories = categoriesData as unknown as Category[];

const CategoryPage = () => {
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const categoryId = params.category as string;
  const category = categories.find(
    (c) => c.id.toLowerCase() === categoryId?.toLowerCase(),
  );
  const hasSubcategories = !!category?.subcategories?.length;

  const allProducts =
    category?.subcategories?.flatMap((sub) => sub.products || []) || [];

  const totalPages = hasSubcategories
    ? 1 // no pagination for subcategories
    : Math.ceil((category?.products?.length || 0) / itemsPerPage);
  const currentProducts = hasSubcategories
    ? []
    : category?.products?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
      ) || [];

  console.log(hasSubcategories);

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
                {/* {category.subcategories.flatMap(
                  (acc, sub) => acc + (sub.products?.length || 0),
                  0,
                )}{" "} */}
                products
              </p>
            </div>
            <div className="product-categories-grid">
              {hasSubcategories
                ? category.subcategories.map((sub) => (
                    <Link
                      href={`/products/${category.id}/${sub.id}`}
                      key={sub.id}
                      className="product-cat-card"
                    >
                      <div className="product-cat-image">
                        <img src={sub.image} alt={sub.title} />
                      </div>
                      <div className="product-cat-overlay">
                        <h3>{sub.title}</h3>
                        {/* <p>{sub.description}</p> */}
                        {/* <div className="explore-btn">Explore Range</div> */}
                      </div>
                    </Link>
                  ))
                : category.products
                    ?.slice(
                      (currentPage - 1) * itemsPerPage,
                      currentPage * itemsPerPage,
                    )
                    .map((product: Product) => (
                      <Link
                        href={`/products/${category.id}/sub/${product.id}`}
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
                    ))}
            </div>

            {!hasSubcategories && totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page: any) => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            )}

            {!hasSubcategories && (
              <>
                <HowCanHelp />
                <BottomIcons />
              </>
            )}
          </section>
        </>
      )}
    </Wrapper>
  );
};

export default CategoryPage;
