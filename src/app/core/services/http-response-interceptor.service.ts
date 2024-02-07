import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {catchError, Observable, tap, throwError} from 'rxjs';
import Swal from 'sweetalert2';

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class HttpResponseInterceptor
 * @date 05/02/2024
 */
@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request)
      .pipe(
        tap(evt => {
          if (evt instanceof HttpResponse) {
            if (evt.body.success) {
              Swal.fire({
                icon: 'success',
                title: 'Pronto!',
                text: evt.body.message || 'Operação realizada com sucesso!',
                timer: 9000,
                timerProgressBar: true,
                willOpen: () => {
                  const container = Swal.getContainer();
                  if (container) {
                    container.addEventListener('mouseenter', () => Swal.stopTimer());
                    container.addEventListener('mouseleave', () => Swal.resumeTimer());
                  }
                }
              });
            }
          }
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 422) {
            error.error.error.forEach((errorMessage: string) => {
              Swal.fire({
                icon: 'error',
                title: 'Erro de Validação',
                text: errorMessage,
                timer: 9000,
                timerProgressBar: true,
                willOpen: () => {
                  const container = Swal.getContainer();
                  if (container) {
                    container.addEventListener('mouseenter', () => Swal.stopTimer());
                    container.addEventListener('mouseleave', () => Swal.resumeTimer());
                  }
                }
              });
            });
            return throwError(() => new Error('Erro de validação'));
          } else {
            let errorMsg = `Error Code: ${error.status}, Message: ${error.message}`;
            Swal.fire({
              icon: 'error',
              title: 'Erro!',
              text: errorMsg,
              timer: 8000,
              timerProgressBar: true,
              willOpen: () => {
                const container = Swal.getContainer();
                if (container) {
                  container.addEventListener('mouseenter', () => Swal.stopTimer());
                  container.addEventListener('mouseleave', () => Swal.resumeTimer());
                }
              }
            });
            return throwError(() => new Error(errorMsg));
          }
        })
      );
  }
}
