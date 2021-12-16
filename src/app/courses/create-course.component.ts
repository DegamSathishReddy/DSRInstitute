import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    template: `
    <h1> Creating New Course </h1>
    <hr>
    <div class="col-md-6">
    <h3> [Details will be comming in future] </h3>
    <br/>
    <br/>

    <button type="submit" class="btn btn-primary">Save</button>
    <button type="button" class="btn btn-default" (click)= cancel()>Cancel</button>
    </div>
    `
})
export class CreateCourseComponent {

    constructor(private router: Router){

    }
    cancel(){
        this.router.navigate(['/courses']);

    }

}