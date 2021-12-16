import { Routes } from "@angular/router";
import { CourseDetailsActivatorService } from "./course-details/course-details-activator.service";
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { CoursesAppComponent } from "./courses-app.component";
import { CoursesListComponent } from "./courses/courses-list.component";
import { CreateCourseComponent } from "./courses/create-course.component";
import { ErrorComponent } from "./errors/error.component";

export const appRoutes: Routes =[
    {path: 'courses', component: CoursesListComponent},
    {path: 'courses/create', component: CreateCourseComponent},
    {path: 'courses/:id', component: CourseDetailsComponent, canActivate: [CourseDetailsActivatorService]},
    {path: 'error', component: ErrorComponent},
    {path: '', redirectTo:'courses', pathMatch:'full'}
]