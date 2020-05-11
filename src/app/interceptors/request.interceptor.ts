import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export class RequestInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // HttpRequest object is immutable, so if you
    //   want to modify a request you have to first clone the object
    const request = req.clone();
    request.headers.append('Accept', 'application/json');

    return next.handle(request).pipe(
      map((response: HttpResponse<any>) => {
        console.log(response);
        return response;
      })
    );
  }

}
