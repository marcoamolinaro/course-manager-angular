import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CourseService } from "./course.service";
import { Course } from './course'

@Component({
    templateUrl: './course-info.component.html',
})
export class CourseInfoComponent implements OnInit {

    course: Course;

    constructor(private activateRoute: ActivatedRoute, private courseServive: CourseService) {}

    ngOnInit(): void {
        this.courseServive.retrieveById(
            +this.activateRoute.snapshot.paramMap.get('id')).subscribe({
                next: course => this.course = course,
                error: err => console.log('Error', err)
            });
    }

    save(): void {
        this.courseServive.save(this.course).subscribe({
            next: course => console.log('Saved with success', course),
            error: err => console.log('Error', err)
        });
    }
}