import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { ContainerPublicComponent } from './container-public/container-public.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardBenefitsComponent } from './components/landing/benefits/card-benefits/card-benefits.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AboutComponent } from './components/about/about.component';
import { BranchOfficesComponent } from './components/branch-offices/branch-offices.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HelpComponent } from './components/help/help.component';
import { TutorialsComponent } from './components/help/tutorials/tutorials.component';
import { FaqComponent } from './components/help/faq/faq.component';
import { HelpBannerComponent } from './components/help/help-banner/help-banner.component';
import { HelpDetailsComponent } from './components/help/help-details/help-details.component';
import { HelpSearchComponent } from './components/help/help-search/help-search.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VideoPipe } from "./components/help/tutorials/video.pipe";
import { LandingComponent } from './components/landing/landing.component';
import { BannerFeatureComponent } from './components/landing/banner-feature/banner-feature.component';
import { BenefitsComponent } from './components/landing/benefits/benefits.component';
import { FeatureComponent } from './components/landing/feature/feature.component';
import { QuestionComponent } from './components/help/help-details/question/question.component';
import { QuestionItemsComponent } from './components/help/help-details/question-items/question-items.component';
import { QuestionsMenuComponent } from './components/help/help-details/questions-menu/questions-menu.component';
import { PersonalConfigComponent } from './components/personal-config/personal-config.component';
import { MyProfileComponent } from './components/personal-config/my-profile/my-profile.component';
import { UsersComponent } from './components/personal-config/users/users.component';
import { BillerComponent } from './components/personal-config/biller/biller.component';
import { InfoItemComponent } from './components/personal-config/info-item/info-item.component';
import { RegisterComponent } from './components/register/register.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';

@NgModule({
  declarations: [
    ContainerPublicComponent,
    AboutComponent,
    BranchOfficesComponent,
    HelpComponent,
    LandingComponent,
    WhatWeDoComponent,
    LandingComponent,
    BannerFeatureComponent,
    BenefitsComponent,
    FeatureComponent,
    CardBenefitsComponent,
    RegisterComponent,
    LoginComponent,
    TutorialsComponent,
    FaqComponent,
    HelpBannerComponent,
    HelpSearchComponent,
    ResetPasswordComponent,
    DashboardComponent,
    VideoPipe,
    HelpDetailsComponent,
    QuestionComponent,
    QuestionItemsComponent,
    QuestionsMenuComponent,
    PersonalConfigComponent,
    MyProfileComponent,
    UsersComponent,
    BillerComponent,
    InfoItemComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ContainerPublicComponent,
    AboutComponent,
    BranchOfficesComponent,
    HelpComponent,
    LandingComponent,
    WhatWeDoComponent,
    LandingComponent,
    BannerFeatureComponent,
    BenefitsComponent,
    FeatureComponent,
    CardBenefitsComponent,
    RegisterComponent,
    LoginComponent,
    TutorialsComponent,
    FaqComponent,
    HelpBannerComponent,
    HelpSearchComponent,
    ResetPasswordComponent,
    DashboardComponent,
    VideoPipe,
    HelpDetailsComponent,
    QuestionComponent,
    QuestionItemsComponent,
    QuestionsMenuComponent,
    PersonalConfigComponent,
    MyProfileComponent,
    UsersComponent,
    BillerComponent,
    InfoItemComponent,
  ]
})
export class PublicModule { }
