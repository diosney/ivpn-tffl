import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes
} from '@angular/router';

import { marker as _t } from '@biesbjerg/ngx-translate-extract-marker';

import { LandsayLandingLayoutComponent } from '@layouts/landsay/landing/landing.component';

import { LandingLoginComponent } from './modules/landing/login/login.component';
import { LandingTermsComponent } from './modules/landing/terms/terms.component';
import { LandingPrivacyComponent } from './modules/landing/privacy/privacy.component';
import { LandingFaqComponent } from './modules/landing/faq/faq.component';
import { LandingHomeComponent } from './modules/landing/home/home.component';
import { environment } from '../environments/environment';
import { SettingsBySubdomainResolve } from '@core/resolves/settings-by-subdomain-resolve.service';

const routes: Routes = [
  {
    path     : '',
    component: LandsayLandingLayoutComponent,
    resolve  : {
      merchantSettingsBySubdomain: SettingsBySubdomainResolve
    },
    children : [
      {
        path     : '',
        component: LandingHomeComponent,
        data     : {
          pageTitle : _t('Home'),
          isHomePage: true
        }
      },
      {
        path     : 'faq',
        component: LandingFaqComponent,
        data     : {
          pageTitle: _t('Frequently Asked Questions')
        }
      },
      {
        path     : 'tos',
        component: LandingTermsComponent,
        data     : {
          pageTitle: _t('Terms Of Service')
        }
      },
      {
        path     : 'privacy',
        component: LandingPrivacyComponent,
        data     : {
          pageTitle: _t('Privacy Policy')
        }
      },
      {
        path     : 'login',
        component: LandingLoginComponent,
        data     : {
          pageTitle           : _t('Sign In'),
          isAtLandingLoginPage: true
        }
      }
    ]
  },
  {
    path      : '',
    pathMatch : 'full',
    redirectTo: '/auth/login'
  },
  {
    path      : '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      // TODO: Until server adds pre-rendering or server side rendering.
      useHash                  : true,
      scrollPositionRestoration: 'enabled',
      anchorScrolling          : 'enabled',
      enableTracing            : environment.debug.routes
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
