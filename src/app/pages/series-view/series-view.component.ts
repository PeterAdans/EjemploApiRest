import { Params } from './../../../../node_modules/@types/express-serve-static-core/index.d';
import { Component, inject } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { ActivatedRoute } from '@angular/router';
import { Iserie } from '../../interfaces/iserie';
import { BotoneraComponent } from "../../components/botonera/botonera.component";

@Component({
  selector: 'app-series-view',
  standalone: true,
  imports: [BotoneraComponent],
  templateUrl: './series-view.component.html',
  styleUrl: './series-view.component.css'
})
export class SeriesViewComponent {

  seriesService = inject(SeriesService);
  activatedRoute = inject(ActivatedRoute);
   miSerie! : Iserie;

   ngOnInit(): void{
    this.activatedRoute.params.subscribe(async (params: any) => {
      let _id: string = params._id as string;

      try {
        this.miSerie = await this.seriesService.getById(_id);
      } catch (err) {
        console.log("Error al llamar a la API: " + err);
      }
      
    });
   }

}
