"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Wrapper from "../layout/Wrapper";
import CommonBanner from "../components/CommonBanner";
import { assets } from "../json/assets";
import { categories as categoriesData } from "../json/products.json";
import { Category } from "../types/product";
import Link from "next/link";

const categories = categoriesData as unknown as Category[];

const ProductsPage = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".product-cat-card",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".product-categories-grid",
            start: "top 80%",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Wrapper hideAnnouncements={true}>
      <CommonBanner
        title="Our Products"
        description="Premium solutions for interiors and flooring, designed for durability and aesthetics."
        bgImage={assets.industrial}
      />
      <section className="product-categories-section">
        <div className="product-categories-grid">
          {categories.map((category) => (
            <Link
              href={`/products/${category.id}`}
              key={category.id}
              className="product-cat-card"
            >
              <div className="product-cat-image">
                <img src={category.image} alt={category.title} />
              </div>
              <div className="product-cat-overlay">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                {/* <div className="explore-btn">Explore Range</div> */}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default ProductsPage;
