import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { HomePageComponent } from './app/home-page/home-page.component';
import { HomeNewsComponent } from './app/home-page/home-news/home-news.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { ExpandableNavbarSectionComponent } from './app/navbar/expandable-navbar-section/expandable-navbar-section.component';
import { HeaderComponent } from './app/header/header.component';
import { HeaderNavbarWrapperComponent } from './app/header-nav-wrapper/header-navbar-wrapper.component';
import { RootModule } from '../../app/root.module';
import { NavbarModule } from '../../app/navbar/navbar.module';
import { SharedBrowseByModule } from '../../app/shared/browse-by/shared-browse-by.module';
import { ResultsBackButtonModule } from '../../app/shared/results-back-button/results-back-button.module';
import { FooterComponent } from './app/footer/footer.component';
// import { BreadcrumbsComponent } from './app/breadcrumbs/breadcrumbs.component';
// import { TopLevelCommunityListComponent } from './app/home-page/top-level-community-list/top-level-community-list.component';
// import { ComcolPageBrowseByComponent } from './app/shared/comcol-page-browse-by/comcol-page-browse-by.component';
// import { CommunityPageComponent } from './app/community-page/community-page.component';
import { CommunityPageSubCollectionListComponent } from './app/community-page/sub-collection-list/community-page-sub-collection-list.component';
// import { CommunityListPageComponent } from './app/community-list-page/community-list-page.component';
// import { CommunityListComponent } from './app/community-list-page/community-list/community-list.component';
// import { CommunityPageSubCommunityListComponent } from './app/community-page/sub-community-list/community-page-sub-community-list.component';
import { LoginPageComponent } from './app/login-page/login-page.component';


/**
 * Add components that use a custom decorator to ENTRY_COMPONENTS as well as DECLARATIONS.
 * This will ensure that decorator gets picked up when the app loads
 */
const ENTRY_COMPONENTS = [];

const DECLARATIONS = [
  ...ENTRY_COMPONENTS,
  HomePageComponent,
  HomeNewsComponent,
  HeaderComponent,
  HeaderNavbarWrapperComponent,
  NavbarComponent,
  ExpandableNavbarSectionComponent,
  FooterComponent,
  // BreadcrumbsComponent,
  // TopLevelCommunityListComponent,
  // CommunityPageComponent,
  CommunityPageSubCollectionListComponent,
  // ComcolPageBrowseByComponent,
  // CommunityListPageComponent,
  // CommunityListComponent,
  // CommunityPageSubCommunityListComponent,
  LoginPageComponent,
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedBrowseByModule,
    ResultsBackButtonModule,
    RootModule,
    NavbarModule,
  ],
  declarations: DECLARATIONS,
  providers: [
    ...ENTRY_COMPONENTS.map((component) => ({provide: component}))
  ],
})
/**
 * This module is included in the main bundle that gets downloaded at first page load. So it should
 * contain only the themed components that have to be available immediately for the first page load,
 * and the minimal set of imports required to make them work. Anything you can cut from it will make
 * the initial page load faster, but may cause the page to flicker as components that were already
 * rendered server side need to be lazy-loaded again client side
 *
 * Themed EntryComponents should also be added here
 */
export class EagerThemeModule {
}
