import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { <%=classify(name)%>ListComponent } from './<%=dasherize(name)%>-list/<%=dasherize(name)%>-list.component';
import { <%=classify(name)%>EditComponent } from './<%=dasherize(name)%>-edit/<%=dasherize(name)%>-edit.component';

export const <%=camelize(name)%>Routes: Routes = [
  { path: '', component: <%=classify(name)%>ListComponent },
  { path: ':id', component: <%=classify(name)%>EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(<%=camelize(name)%>Routes /* , { enableTracing: true } */)],
  exports: [RouterModule]
})
export class <%=classify(name)%>RoutingModule { }
