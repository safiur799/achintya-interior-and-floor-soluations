"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Wrapper from "../../layout/Wrapper";
import CommonBanner from "../../components/CommonBanner";
import { categories } from "../../json/products.json";
import Link from "next/link";

const CategoryPage = () => {
  const params = useParams();
  const categoryId = params.category as string;
  const category = categories.find((c) => c.id.toLowerCase() === categoryId?.toLowerCase());

  useEffect(() => {
    if (!category) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".product-cat-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".product-categories-grid",
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, [category]);

  return (
    <Wrapper hideAnnouncements={true}>
      {!category ? (
         <div style={{padding: '200px 20px', textAlign: 'center', minHeight: '60vh'}}>
            <h2 style={{color: '#fff'}}>Category not found</h2>
            <Link href="/products" className="inquiry-btn" style={{marginTop: '20px', display: 'inline-block'}}>Back to Products</Link>
         </div>
      ) : (
        <>
          <CommonBanner
            title={category.title}
            description={category.description}
            bgImage={category.image}
          />
          <section className="product-categories-section">
            <div className="product-categories-grid">
              {category.subcategories?.map((sub) => (
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
                    <div className="explore-btn">View Products</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}
    </Wrapper>
  );
};

export default CategoryPage;
