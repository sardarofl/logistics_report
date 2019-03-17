import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBackComponent } from './components/main-back/main-back.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { DataShowComponent } from './components/data-show/data-show.component';

const routes: Routes = [
  //, canActivate:[AuthGuard]
    { path: 'bemain', component: MainBackComponent,
      children: [
         { path: 'uploadfile', component: UploadFileComponent},
         { path: '**', redirectTo: 'uploadfile' }
      ]
    },
    { path: 'datashow', component: DataShowComponent},

    { path: '**', redirectTo: 'bemain'}
  
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
