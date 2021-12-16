import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { CoursesService } from "../Shared/courses.service";

@Injectable()
export class CourseDetailsActivatorService implements CanActivate {
    
    constructor(private courseService: CoursesService, private router: Router) {

    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const courseExists = !!this.courseService.getCourse(+route.params['id']);

        if(!courseExists){
            this.router.navigate(['/error']);
        }

        return courseExists;
    }

}