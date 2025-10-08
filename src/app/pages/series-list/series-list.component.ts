import { Component, inject } from '@angular/core';
import { SerieCardComponent } from "../../components/serie-card/serie-card.component";
import { SeriesService } from '../../services/series.service';
import { Iserie } from '../../interfaces/iserie';

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [SerieCardComponent],
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent {
  arrSeries: Iserie[];
  serieService = inject(SeriesService);

  constructor() {
    this.arrSeries = [];
  }

  async ngOnInit(): Promise<void> {
    //Usando Observables
    // this.serieService.getAllWithObservables().subscribe((data: Serie[]) => {
    //   this.arrSeries = data;
    // });

    //Usando promesas
    try {
      this.arrSeries = await this.serieService.getAllWithPromises();
    }
    catch (err) {
      console.log('Error al conectar a la API: '+err)
    }
    
  }

}