import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogsidebarComponent } from './blogsidebar/blogsidebar.component';
import { Blogcol2Component } from './blogcol2/blogcol2.component';
import { Blogcol3Component } from './blogcol3/blogcol3.component';
import { Blogcol4Component } from './blogcol4/blogcol4.component';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogMediumImgComponent } from './blog-medium-img/blog-medium-img.component';
import { BlogSidebarRightComponent } from './blog-sidebar-right/blog-sidebar-right.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { BlogSmallImgComponent } from './blog-small-img/blog-small-img.component';
import { HotelsDetailsComponent } from './hotels-details/hotels-details.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelsSearchComponent } from './hotels-search/hotels-search.component';
import { IndexSearchComponent } from './index-search/index-search.component';
import { IndexSliderComponent } from './index-slider/index-slider.component';
import { IndexVideoComponent } from './index-video/index-video.component';
import { Page404Component } from './page404/page404.component';
import { PageAboutUsComponent } from './page-about-us/page-about-us.component';
import { PageComponentsComponent } from './page-components/page-components.component';
import { PageElementsComponent } from './page-elements/page-elements.component';
import { PageOurTeamComponent } from './page-our-team/page-our-team.component';
import { PagePortfolioSingleComponent } from './page-portfolio-single/page-portfolio-single.component';
import { PageProcessComponent } from './page-process/page-process.component';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { PageServicesComponent } from './page-services/page-services.component';
import { PageTypographyComponent } from './page-typography/page-typography.component';
import { Portfolio3Component } from './portfolio3/portfolio3.component';
import { Portfolio4Component } from './portfolio4/portfolio4.component';
import { PortfolioGalleryComponent } from './portfolio-gallery/portfolio-gallery.component';
import { PortfolioMaonryComponent } from './portfolio-maonry/portfolio-maonry.component';
import { PortfolioWithSidebarComponent } from './portfolio-with-sidebar/portfolio-with-sidebar.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ShopCheckoutComponent } from './shop-checkout/shop-checkout.component';
import { ShopGridComponent } from './shop-grid/shop-grid.component';
import { ShopSingleComponent } from './shop-single/shop-single.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogsidebarComponent,
    Blogcol2Component,
    Blogcol3Component,
    Blogcol4Component,
    BlogGridComponent,
    BlogListComponent,
    BlogMediumImgComponent,
    BlogSidebarRightComponent,
    BlogSingleComponent,
    BlogSmallImgComponent,
    HotelsDetailsComponent,
    HotelsListComponent,
    HotelsSearchComponent,
    IndexSearchComponent,
    IndexSliderComponent,
    IndexVideoComponent,
    Page404Component,
    PageAboutUsComponent,
    PageComponentsComponent,
    PageElementsComponent,
    PageOurTeamComponent,
    PagePortfolioSingleComponent,
    PageProcessComponent,
    PageProfileComponent,
    PageServicesComponent,
    PageTypographyComponent,
    Portfolio3Component,
    Portfolio4Component,
    PortfolioGalleryComponent,
    PortfolioMaonryComponent,
    PortfolioWithSidebarComponent,
    ShopCartComponent,
    ShopCheckoutComponent,
    ShopGridComponent,
    ShopSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
