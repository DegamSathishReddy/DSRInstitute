import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CourseDetailsActivatorService } from './course-details/course-details-activator.service';
import { CourseDetailsComponent } from './course-details/course-details.component';

import { CoursesAppComponent } from './courses-app.component';
import { CourseThumbnailComponent } from './courses/course-thumbnail.component';
import { CoursesListComponent } from './courses/courses-list.component';
import { CreateCourseComponent } from './courses/create-course.component';
import { ErrorComponent } from './errors/error.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { appRoutes } from './routes';
import { CoursesService } from './Shared/courses.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    CoursesAppComponent,
    CoursesListComponent,
    CourseThumbnailComponent,
    CourseDetailsComponent,
    CreateCourseComponent,
    ErrorComponent,
    NavBarComponent
  ],
  providers: [CoursesService, CourseDetailsActivatorService],
  bootstrap: [CoursesAppComponent]
})
export class CoursesAppModule { }
