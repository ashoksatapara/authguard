import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard.routes';
import { AuthGuard } from "../guards/auth-guard.service";
import { RoleGuard } from '../guards/role-guard.service';
import { FooterComponent } from './main-layout/footer/footer.component';
import { HeaderComponent } from './main-layout/Header/header.component';
import { SidenavComponent } from './main-layout/sidenav/sidenav.component';

@NgModule({
  declarations: [LayoutComponent, HomeComponent, AdminComponent,FooterComponent,HeaderComponent,SidenavComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
providers: [AuthGuard, RoleGuard],
})


export class DashboardModule { }
