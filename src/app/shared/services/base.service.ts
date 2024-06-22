import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Resource} from "../../educational-resource/model/resource.entity";
import {Lawyer} from "../../lawyers/model/lawyer.entity";
import {Profile} from "../../lawyers/model/profile.entity";



export class BaseService<T> {
  basePath: string = `${environment.serverBasePath}`;
  resourceEndpoint: string = '/resource';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default error handling
      console.log(`An error occurred ${error.error.message}`);
    } else {
      // Unsuccessful Response Error Code returned from backend
      console.log(`Backend returned code ${error.status}, body was ${error.error}`);
    }
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  // Build Resource Path
  private resourcePath() {
    return `${this.basePath}${this.resourceEndpoint}`;
  }
  // Create resource
  create(item: any): Observable<T> {
    return this.http.post<T>(this.resourcePath(), JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Delete resource
  delete(id: any) {
    return this.http.delete(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Update Resource
  update(id: any, item: any): Observable<T> {
    return this.http.put<T>(`${this.resourcePath()}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.resourcePath(), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Get by id
  // Get one
  get(id: any): Observable<T> {
    return this.http.get<T>(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAllResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(`${this.resourcePath}/educational-resources`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get all lawyers
  getAllLawyers(): Observable<Lawyer[]> {
    return this.http.get<Lawyer[]>(`${this.basePath}/lawyers`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Get all profiles
  getAllProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${this.basePath}/profiles`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
