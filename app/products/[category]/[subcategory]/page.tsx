"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Wrapper from "../../../layout/Wrapper";
import CommonBanner from "../../../components/CommonBanner";
import { categories } from "../../../json/products.json";
import Link from "next/link";

const ProductListingPage = () => {
  const params = useParams();
  const categoryId = params.category as string;
  const subcategoryId = params.subcategory as string;

  const category = categories.find((c) => c.id.toLowerCase() === categoryId?.toLowerCase());
  const subcategory = category?.subcategories?.find((s) => s.id.toLowerCase() === subcategoryId?.toLowerCase());

  useEffect(() => {
    if (!subcategory) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".product-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".product-grid",
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, [subcategory]);

  return (
    <Wrapper hideAnnouncements={true}>
      {!subcategory || !category ? (
         <div style={{padding: '200px 20px', textAlign: 'center', minHeight: '60vh'}}>
            <h2 style={{color: '#fff'}}>Products not found</h2>
            <Link href="/products" className="inquiry-btn" style={{marginTop: '20px', display: 'inline-block'}}>Back to Products</Link>
         </div>
      ) : (
        <>
          <CommonBanner
            title={subcategory.title}
            description={`Explore our range of ${subcategory.title}`}
            bgImage={subcategory.image}
          />
          
          <section className="free-sample-section">
            <div className="free-sample-container">
              <div className="free-sample-content">
                <h3>How can we Help you?</h3>
                <p>If you want to show our sample and Quality of our product then feel free to ask. We will send it to your Address.</p>
                <Link href="/contact-us" className="free-sample-btn">
                  <span className="icon">📞</span> FREE SAMPLE
                </Link>
              </div>
            </div>
          </section>

          <section className="product-listing-section">
            <div className="product-grid">
              {subcategory.products.map((product) => (
                <Link
                  href={`/products/${category.id}/${subcategory.id}/${product.id}`}
                  key={product.id}
                  className="product-card"
                >
                  <div className="product-image">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="product-info">
                    <span className="sku">{product.sku}</span>
                    <h4>{product.title}</h4>
                    <div className="view-details">View Details</div>
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

export default ProductListingPage;
