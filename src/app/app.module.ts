import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminNavbarComponent } from './components/navbars/admin-navbar/admin-navbar.component';
import { AuthNavbarComponent } from './components/navbars/auth-navbar/auth-navbar.component';
import { IndexNavbarComponent } from './components/navbars/index-navbar/index-navbar.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { IndexComponent } from './views/index/index.component';
import { ProfileComponent } from './views/profile/profile.component';
import { LandingComponent } from './views/landing/landing.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { MapsComponent } from './views/admin/maps/maps.component';
import { SettingsComponent } from './views/admin/settings/settings.component';
import { TablesComponent } from './views/admin/tables/tables.component';
import { AdminSidebarComponent } from './components/sidebars/admin-sidebar/admin-sidebar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IndexDropdownComponent } from './components/dropdowns/index-dropdown/index-dropdown.component';
import { NotificationDropdownComponent } from './components/dropdowns/notification-dropdown/notification-dropdown.component';
import { PagesDropdownComponent } from './components/dropdowns/pages-dropdown/pages-dropdown.component';
import { TableDropdownComponent } from './components/dropdowns/table-dropdown/table-dropdown.component';
import { UserDropdownComponent } from './components/dropdowns/user-dropdown/user-dropdown.component';
import { ResponsiveNavbarComponent } from './components/navbars/responsive-navbar/responsive-navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FormControl, FormGroupDirective, FormsModule, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MakeARequestComponent } from './views/make-a-request/make-a-request.component';
import { CardBarChartComponent } from './components/cards/card-bar-chart/card-bar-chart.component';
import { CardLineChartComponent } from './components/cards/card-line-chart/card-line-chart.component';
import { CardPageVisitsComponent } from './components/cards/card-page-visits/card-page-visits.component';
import { CardProfileComponent } from './components/cards/card-profile/card-profile.component';
import { CardSettingsComponent } from './components/cards/card-settings/card-settings.component';
import { CardStatsComponent } from './components/cards/card-stats/card-stats.component';
import { CardSocialTrafficComponent } from './components/cards/card-social-traffic/card-social-traffic.component';
import { CardTableComponent } from './components/cards/card-table/card-table.component';
import { HeaderStatsComponent } from './components/headers/header-stats/header-stats.component';
import { HeaderFormComponent } from './components/headers/header-form/header-form.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { RequestBottomsheetComponent } from './components/bottomsheets/request-bottomsheet/request-bottomsheet.component';
import { TrackingBottomsheetComponent } from './components/bottomsheets/tracking-bottomsheet/tracking-bottomsheet.component';
import { FooterComponent } from './components/footers/footer/footer.component';
import { FooterAdminComponent } from './components/footers/footer-admin/footer-admin.component';
import { FooterSmallComponent } from './components/footers/footer-small/footer-small.component';
import { MatBadgeModule } from '@angular/material/badge';
import { ApprovalComponent } from './views/admin/approval/approval.component';
import { ReasonBottomsheetComponent } from './components/bottomsheets/reason-bottomsheet/reason-bottomsheet.component';
import { CardBiComponent } from './components/cards/card-bi/card-bi.component';
import { PersonalDetailsComponent } from './components/forms/personal-details/personal-details.component';
import { BankDetailsComponent } from './components/forms/bank-details/bank-details.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { DetailsComponent } from './components/bottomsheets/details/details.component';
import { PatientDetailsComponent } from './components/dialogs/patient-details/patient-details.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TrackingComponent } from './components/dialogs/tracking/tracking/tracking.component';
import { CardTableeComponent } from './components/cards/card-tablee/card-tablee.component';
import { RequestDialogComponent } from './components/dialogs/request-dialog/request-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminNavbarComponent,
    AuthNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    AuthComponent,
    IndexComponent,
    ProfileComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    MapsComponent,
    SettingsComponent,
    TablesComponent,
    AdminSidebarComponent,
    SidebarComponent,
    IndexDropdownComponent,
    NotificationDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    UserDropdownComponent,
    ResponsiveNavbarComponent,
    MakeARequestComponent,
    CardBarChartComponent,
    CardLineChartComponent,
    CardPageVisitsComponent,
    CardProfileComponent,
    CardSettingsComponent,
    CardStatsComponent,
    CardSocialTrafficComponent,
    CardTableComponent,
    CardTableeComponent,
    HeaderStatsComponent,
    HeaderFormComponent,
    RequestBottomsheetComponent,
    TrackingBottomsheetComponent,
    FooterComponent,
    FooterAdminComponent,
    FooterSmallComponent,
    ApprovalComponent,
    ReasonBottomsheetComponent,
    CardBiComponent,
    PersonalDetailsComponent,
    BankDetailsComponent,
    DetailsComponent,
    PatientDetailsComponent,
    TrackingComponent,
    RequestDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatTabsModule,
    MatBottomSheetModule,
    MatBadgeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
        allowedDomains: ['https://localhost:7210'], // replace with your Auth0 domain
        disallowedRoutes: ['/auth/login'], // replace with your unauthorized route
      },
    }),
  ],
  exports: [JwtModule],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
