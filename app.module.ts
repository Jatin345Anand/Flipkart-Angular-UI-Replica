import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header/header.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { Footer2Component } from './footer/footer2/footer2.component';
import { AppComponent } from './app.component';
import { CarosalComponent } from './carousel/carousel/carosal.component';
import { Images1Component } from './ADSIMAGES/images1.component';
import { FilterComponent } from './filter/filter.component';


import { FilterRamComponent } from './filter/filter-mobile/filter-ram/filter-ram.component';
import { FilterBrandComponent } from './filter/filter-mobile/filter-brand/filter-brand.component';
import { FilterCustomerRatingComponent } from  './filter/filter-mobile/filter-customer-rating/filter-customer-rating.component';
import { FilterInternalStorageComponent } from './filter/filter-mobile/filter-internal-storage/filter-internal-storage.component';
import { FilterBatteryCapacityComponent } from  './filter/filter-mobile/filter-battery-capacity/filter-battery-capacity.component';
import { FilterOperatingSystemComponent } from  './filter/filter-mobile/filter-operating-system/filter-operating-system.component';
import { FilterScreenSizeComponent } from  './filter/filter-mobile/filter-screen-size/filter-screen-size.component';
 import { FilterSecondaryCameraComponent } from './filter/filter-mobile/filter-secondary-camera/filter-secondary-camera.component';
import { FilterProcessorBrandComponent } from  './filter/filter-mobile/filter-processor-brand/filter-processor-brand.component';
import { FilterSpecialityComponent } from  './filter/filter-mobile/filter-speciality/filter-speciality.component';
import { FilterNumberofcoreComponent } from  './filter/filter-mobile/filter-numberofcore/filter-numberofcore.component';
import { FilterBudgetComponent } from  './filter/filter-mobile/filter-budget/filter-budget.component';
import { FilterTypeComponent } from  './filter/filter-mobile/filter-type/filter-type.component';
import { FilterClockSpeedComponent } from  './filter/filter-mobile/filter-clock-speed/filter-clock-speed.component';
import { FilterSimTypeComponent } from  './filter/filter-mobile/filter-sim-type/filter-sim-type.component';
import { FilterPrimaryCameraComponent } from  './filter/filter-mobile/filter-primary-camera/filter-primary-camera.component';
import { FilterLaptopScreenSizeComponent } from './filter/filter-laptop/filter-laptop-screen-size/filter-laptop-screen-size.component';
 
import { FilterLaptopLifeStyleComponent } from './filter/filter-laptop/filter-laptop-life-style/filter-laptop-life-style.component';
import { FilterLaptopSsdCapacityComponent } from './filter/filter-laptop/filter-laptop-ssd-capacity/filter-laptop-ssd-capacity.component';
import { FilterLaptopCustomerRatingsComponent } from './filter/filter-laptop/filter-laptop-customer-ratings/filter-laptop-customer-ratings.component';
import { FilterLaptopWeightComponent } from './filter/filter-laptop/filter-laptop-weight/filter-laptop-weight.component';
import { FilterLaptopStorageTypeComponent } from './filter/filter-laptop/filter-laptop-storage-type/filter-laptop-storage-type.component';
import { FilterLaptopRamComponent } from './filter/filter-laptop/filter-laptop-ram/filter-laptop-ram.component';
import { FilterLaptopGraphicsProcessorSeriesComponent } from './filter/filter-laptop/filter-laptop-graphics-processor-series/filter-laptop-graphics-processor-series.component';
import { FilterLaptopProcessorBrandComponent } from './filter/filter-laptop/filter-laptop-processor-brand/filter-laptop-processor-brand.component';
import { FilterLaptopTypeComponent } from './filter/filter-laptop/filter-laptop-type/filter-laptop-type.component';
import { FilterLaptopGraphicsProcessorNameComponent } from './filter/filter-laptop/filter-laptop-graphics-processor-name/filter-laptop-graphics-processor-name.component';
import { FilterLaptopRamTypeComponent } from './filter/filter-laptop/filter-laptop-ram-type/filter-laptop-ram-type.component';
import { FilterLaptopTouchScreenComponent } from './filter/filter-laptop/filter-laptop-touch-screen/filter-laptop-touch-screen.component';
import { FilterLaptopDedicatedGraphicsMemoryComponent } from './filter/filter-laptop/filter-laptop-dedicated-graphics-memory/filter-laptop-dedicated-graphics-memory.component';
import { FilterLaptopOperatingSystemComponent } from './filter/filter-laptop/filter-laptop-operating-system/filter-laptop-operating-system.component';
import { FilterLaptopBrandComponent } from './filter/filter-laptop/filter-laptop-brand/filter-laptop-brand.component';
import { FilterLaptopProcessorComponent } from './filter/filter-laptop/filter-laptop-processor/filter-laptop-processor.component';
import { FilterLaptopGraphicsMemoryTypeComponent } from './filter/filter-laptop/filter-laptop-graphics-memory-type/filter-laptop-graphics-memory-type.component';
import { HeaderListComponent } from './product-list/header-list/header-list.component';
import { MainItemListComponent } from './product-list/main-item-list/main-item-list.component';
import { Item1Component } from './product-list/main-item-list/item1/item1.component';
import { Item2Component } from './product-list/main-item-list/item2/item2.component';
import { MainItemListLaptopComponent } from './product-list/main-item-list-laptop/main-item-list-laptop.component';
import { Item1LaptopComponent } from './product-list/main-item-list-laptop/item1-laptop/item1-laptop.component';
import { Item2LaptopComponent } from './product-list/main-item-list-laptop/item2-laptop/item2-laptop.component';
import { Item3LaptopComponent } from './product-list/main-item-list-laptop/item3-laptop/item3-laptop.component';
import { PageNumberComponent } from './product-list/page-number/page-number.component';
import { ReviewofPopularMobilesComponent } from './reviewof-popular-mobiles/reviewof-popular-mobiles.component';
import { ReviewofPopularLaptopsComponent } from './reviewof-popular-laptops/reviewof-popular-laptops.component';
import { ReviewHeaderLaptopComponent } from './reviewof-popular-laptops/review-header-laptop/review-header-laptop.component';
import { ReviewHeaderMobileComponent } from './reviewof-popular-mobiles/review-header-mobile/review-header-mobile.component';
import { ReviewMobile1Component } from './reviewof-popular-mobiles/review-mobile1/review-mobile1.component';
import { ReviewMobile2Component } from './reviewof-popular-mobiles/review-mobile2/review-mobile2.component';
import { ReviewLaptop1Component } from './reviewof-popular-laptops/review-laptop1/review-laptop1.component';
import { ReviewLaptop2Component } from './reviewof-popular-laptops/review-laptop2/review-laptop2.component';
import { ReviewLaptop3Component } from './reviewof-popular-laptops/review-laptop3/review-laptop3.component';
import { ReviewLaptop4Component } from './reviewof-popular-laptops/review-laptop4/review-laptop4.component';
import { ReviewLaptop5Component } from './reviewof-popular-laptops/review-laptop5/review-laptop5.component';
import { Footer3Component } from './footer/footer3/footer3.component';
import { Footer4Component } from './footer/footer4/footer4.component';
import { Footer5Component } from './footer/footer5/footer5.component';
import { Footer6Component } from './footer/footer6/footer6.component';

import { FrontPageAddsComponent } from './front-page-adds/front-page-adds.component';
import { ToysBabyCareComponent } from './front-page-adds/toys-baby-care/toys-baby-care.component';
import { FashionForTravelLoversComponent } from './front-page-adds/fashion-for-travel-lovers/fashion-for-travel-lovers.component';
import { BestofHomeFurnishingComponent } from './front-page-adds/bestof-home-furnishing/bestof-home-furnishing.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductMobileComponent } from './product-page/product-mobile/product-mobile.component';
import { ProductLaptopComponent } from './product-page/product-laptop/product-laptop.component';
import { FirstMainCarouselComponent } from './carousel/first-main-carousel/first-main-carousel.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, NavbarComponent, FooterComponent, Footer2Component, CarosalComponent, Images1Component, FilterComponent, FilterRamComponent, FilterBrandComponent, FilterCustomerRatingComponent, FilterInternalStorageComponent, FilterBatteryCapacityComponent, FilterOperatingSystemComponent, FilterScreenSizeComponent, FilterSecondaryCameraComponent, FilterProcessorBrandComponent, FilterSpecialityComponent, FilterNumberofcoreComponent, FilterBudgetComponent, FilterTypeComponent, FilterClockSpeedComponent, FilterSimTypeComponent, FilterPrimaryCameraComponent, FilterLaptopScreenSizeComponent, FilterLaptopLifeStyleComponent, FilterLaptopSsdCapacityComponent, FilterLaptopCustomerRatingsComponent, FilterLaptopWeightComponent, FilterLaptopStorageTypeComponent, FilterLaptopRamComponent, FilterLaptopGraphicsProcessorSeriesComponent, FilterLaptopProcessorBrandComponent, FilterLaptopTypeComponent, FilterLaptopGraphicsProcessorNameComponent, FilterLaptopRamTypeComponent, FilterLaptopTouchScreenComponent, FilterLaptopDedicatedGraphicsMemoryComponent, FilterLaptopOperatingSystemComponent, FilterLaptopBrandComponent, FilterLaptopProcessorComponent, FilterLaptopGraphicsMemoryTypeComponent, HeaderListComponent, MainItemListComponent, Item1Component, Item2Component, MainItemListLaptopComponent, Item1LaptopComponent, Item2LaptopComponent, Item3LaptopComponent, PageNumberComponent, ReviewofPopularMobilesComponent, ReviewofPopularLaptopsComponent, ReviewHeaderLaptopComponent, ReviewHeaderMobileComponent, ReviewMobile1Component, ReviewMobile2Component, ReviewLaptop1Component, ReviewLaptop2Component, ReviewLaptop3Component, ReviewLaptop4Component, ReviewLaptop5Component, Footer3Component, Footer4Component, Footer5Component, Footer6Component, ToysBabyCareComponent, FrontPageAddsComponent, FashionForTravelLoversComponent, BestofHomeFurnishingComponent, ProductPageComponent, ProductMobileComponent, ProductLaptopComponent, FirstMainCarouselComponent, CarouselComponent, 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
