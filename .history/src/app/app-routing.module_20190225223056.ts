import { NgModule } from '@angular/core';

const appRoutes: import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ResolveGuard implements Resolve<T> {
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return true;
    }
}


@NgModule({

})
export class AppRoutingModule {}
