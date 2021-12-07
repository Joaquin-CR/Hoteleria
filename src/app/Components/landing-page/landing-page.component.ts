import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { CookiesService } from 'src/app/Services/cookies-s.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit 
{
  nuevoRegistro: FormGroup;
  submitted = false;
  loading = false;
  constructor(private fb: FormBuilder,
    // private _cookies: CookiesService,
    ) 
  { 
    this.nuevoRegistro = this.fb.group({
      fecIn: ['', [Validators.required, Validators.pattern("^[0-9-]*$")]],
      fecOut: ['', [Validators.required, Validators.pattern("^[0-9-]*$")]],
      NumA: ['', [Validators.required, Validators.pattern("^[0-9-]*$")]],
      NumN: ['', [Validators.required, Validators.pattern("^[0-9-]*$")]],
      NumC: ['', [Validators.required, Validators.pattern("^[0-9-]*$")]]
    })
  }

  ngOnInit(): void 
  {
    // 
  }

  agregarRegistro()
  {
    this.loading = true;
    this.submitted = true;
    // if(this._cookies.checkToken())
    // {
    //   console.log(this.nuevoRegistro);
    //   // this._registroService.getReservaciones().subscribe(res =>{
    //   //   console.log(res)
    //   // },
    //   //   err => console.log(err)
    //   // )
    //   const nuevaRes: Reservacion = 
    //   {
    //     idRes: "zxy8888",
    //     idUser: 1999,
    //     fecIn: this.nuevoRegistro.value.fecIn,
    //     fecOut: this.nuevoRegistro.value.fecOut,
    //     numA: this.nuevoRegistro.value.NumA,
    //     numN: this.nuevoRegistro.value.NumN,
    //     numC: this.nuevoRegistro.value.NumC,
    //   }
    //   this._registroService.addReservacion(nuevaRes).subscribe();
      
    //   this._registroService.getReservaciones().subscribe(res =>{
    //     console.log(res)
    //   },
    //     err => console.log(err)
    //   )
    // }
  }

}
