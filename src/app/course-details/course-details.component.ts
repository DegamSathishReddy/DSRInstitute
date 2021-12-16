import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CoursesService } from "../Shared/courses.service";


@Component({
    templateUrl : './course-details.component.html'

})
export class CourseDetailsComponent implements OnInit{

    course: any

    constructor(private courseService : CoursesService, private route: ActivatedRoute){

    }
    ngOnInit(): void {
        this.course = this.courseService.getCourse(+this.route.snapshot.params['id']);
    }


}