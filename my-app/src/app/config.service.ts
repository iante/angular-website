/* config.service can be used as kind of a backend server by all cmponents to serve 
requests.*/
import { Injectable } from '@angular/core';
import {configuration} from './configuration';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Observable, of, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from './post';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  /* creating a function to handle config services*/

  config = configuration; /* creating a variable config and passing the 
  configuration function from configuration.ts file*/
  apiUrl = 'api/posts';
 // apiUrl = environment.apiUrl;
  emailUrl = 'api/contact';
    


  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getConfig(){
    
    return this.config;
}

//handles what happens when message is sent

sendMessage(formData: NgForm): Observable<any> {
  return this.http.post<any>(`${this.emailUrl}`, formData, httpOptions).pipe(
    tap(
      message => console.log(message)
    ),
    catchError(this.handleError('Sending Message', []))
  );
}

getPosts(): Observable<Post[]> {
  return this.http.get<any>(`${this.apiUrl}/posts`).pipe(
    tap(
      post => console.log(post)
    ),
    catchError(this.handleError('Get Posts', []))
  );
}

/*function that fetches all records in the in memory db and can also
fetch a specific record based on its id*/
 getSettings(database: string, id?: any): Observable<any[]> {
    let uid = id || null;
    let url: string;
   
    uid !==null ? url = `api/${database}/${id}` : url = `api/${database}`;
      return this.http.get<any>(url).pipe(
        tap(
          setting => console.log(setting)
        ),
        catchError(this.handleError('Get Settings', []))
      );
      {
      }


  }

getPostByID(id: number) {
  return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
    tap(
      post => console.log(post)
    ),
    catchError(this.handleError('Get Post by ID', []))
  );
}

//method that handles editing of a post
updatePost(formData: NgForm): Observable<Post> {
  return this.http.put<any>(`${this.apiUrl}`, formData, httpOptions).pipe(
    tap(
      post => console.log(post)
    ),
    catchError(this.handleError('Update Post', []))
  );
}

addPost(formData: NgForm): Observable<Post> {
  return this.http.post<any>(`${this.apiUrl}`, formData, httpOptions).pipe(
    tap(
      post => console.log(post)
    ),
    catchError(this.handleError('Add New Post', []))
  );
}




}
