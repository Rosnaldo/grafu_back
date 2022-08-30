import { NestInterceptor } from '@nestjs/common'
import { Observable } from 'rxjs'

export class mockCacheInterceptor implements NestInterceptor {
  intercept(): Promise<Observable<any>> {
    return
  }
}
