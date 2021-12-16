import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'course-thumbnail',
    templateUrl: './course-thumbnail.component.html',
    styles: [`
    .thumbnail {min-height:210px;}
    .pad-left {margin-left: 10px;}
    .well div {color: #bbb;}
    `]
})
export class CourseThumbnailComponent {
    @Input() course: any
}