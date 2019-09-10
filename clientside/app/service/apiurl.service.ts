import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiurlService {

  constructor() { }

commonUrlMethod()
{
return("http://localhost:8089/")
}
}