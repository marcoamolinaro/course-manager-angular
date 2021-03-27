import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReplacePipe } from "../pipe/replace.pipe";
import { StarComponent } from "../star/star.compoment";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";

@NgModule({
    declarations: [
        CourseInfoComponent,
        CourseListComponent,
        ReplacePipe,
        StarComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            },
            {
                path: 'courses', component: CourseListComponent
            },        
        ])
    ]
})
export class CourseModule {

}