import { Injectable } from "@angular/core";

@Injectable()
export class CoursesService {
    getCourses() {
        console.log("inside courses service");
        return COURSES;
    }

    getCourse(id: number){
        return COURSES.find((course => course.id == id));
    }
}

    const COURSES = [
        {
        id:1,
        name: 'Angular',
        date: '12/12/2021',
        time: '2:00 PM',
        price: 600,
        location: {
            address: 'Mindspace',
            city: 'Hyderabad',
            country: 'India'
        }
    },
    {
        id:2,
        name: 'Python',
        date: '12/1/2022',
        time: '08:00 AM',
        price: 400,
        // location: {
        //     address: 'Wellsfargo',
        //     city: 'Hyderabad',
        //     country: 'India'
        // },
        onlineUrl: 'http://dsrinstitute.com/python'
    },
    {
        id:3,
        name: 'AWS',
        date: '2/2/2022',
        time: '09:00 AM',
        price: 1600,
        location: {
            address: 'DLF',
            city: 'Hyderabad',
            country: 'India'
        }
    },
    {
        id:4,
        name: 'SpringBoot',
        date: '1/1/2021',
        time: '12:00 PM',
        price: 300,
        location: {
            address: 'Orion',
            city: 'Hyderabad',
            country: 'India'
        }
    }
    ]
