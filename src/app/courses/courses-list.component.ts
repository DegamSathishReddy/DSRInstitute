import { Component, OnInit } from "@angular/core";
import { CoursesService } from "../Shared/courses.service";

@Component({
    selector : 'courses-list',
    templateUrl : './courses-list.component.html',
})
export class CoursesListComponent implements OnInit {
    courses: any;

    constructor(private coursesService: CoursesService){
        console.log("inside constructor");
    }

    ngOnInit(): void {
        console.log("inside oninit method")
        this.courses= this.coursesService.getCourses();
    }
}