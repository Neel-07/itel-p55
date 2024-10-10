import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import ProductInfo from './ProductInfo';
import ProductFeatures from './ProductFeatures';
import ScrollingBanner from './ScrollingBanner';
import ProductImage from './ProductImage';
import ProductSpecs from './ProductSpecs';
import BatteryFeature from './BatteryFeature';
import ProcessorFeature from './ProcessorFeature';
import GamingFeature from './GamingFeature';
import CameraFeature from './CameraFeature';
import SocialMediaSection from './SocialMediaSection';
import FAQSection from './FAQSection';
import Footer from './Footer';
import ProductComparison from './ProductComparison';
import StoreLocator from './StoreLocator';
import SimilarProducts from './SimilarProducts';
import SupportChannels from './SupportChannels';
import OtherProducts from './OtherProducts';

const MainComponent = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Navigation />
      <main>
        <HeroSection />
        <ProductInfo />
        <ProductFeatures />
        <ScrollingBanner />
        <ProductImage />
        {/* <ProductSpecs />
        <BatteryFeature />
        <ProcessorFeature />
        <GamingFeature />
        <CameraFeature />
        <SocialMediaSection />
        <FAQSection />
        <ProductComparison />
        <StoreLocator />
        <SimilarProducts />
        <SupportChannels />
        <OtherProducts /> */}
      </main>
      <Footer />
    </div>
  );
};

export default MainComponent;