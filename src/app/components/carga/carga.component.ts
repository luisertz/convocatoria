import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file.item';
import { CargaDemosService } from '../../services/carga-demos.service';


@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {


  Drop = false;
  archivos: FileItem[] = [];

  constructor(public _CargaDemos: CargaDemosService) { }

  ngOnInit() {

  }

  cargardemo() {
    this._CargaDemos.cargaDemoFirebase(this.archivos);
  }
}
