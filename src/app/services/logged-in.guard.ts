import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthenService} from "./authen.service";

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private authenService: AuthenService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Return true = condition to protect components
    return this.authenService.isLoggedIn();
  }

}
