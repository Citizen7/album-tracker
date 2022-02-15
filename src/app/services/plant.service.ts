import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from 'src/app/Plant';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  // TODO: Replace this mock server with actual server
  private apiUrl = 'http://localhost:5000/plants';

  constructor(private http:HttpClient) { }

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.apiUrl);
  }

  deletePlant(thisPlant: Plant): Observable<Plant> {
    const url = `${this.apiUrl}/${thisPlant.id}`;
    return this.http.delete<Plant>(url);
  }

  updatePlantHighlight(thisPlant: Plant): Observable<Plant> {
    const url = `${this.apiUrl}/${thisPlant.id}`;
    return this.http.put<Plant>(url, thisPlant, httpOptions);
  }

  addPlant(thisPlant: Plant):Observable<Plant> {
    return this.http.post<Plant>(this.apiUrl, thisPlant, httpOptions);
  }
}
