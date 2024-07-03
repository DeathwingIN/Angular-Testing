
import { HttpClient, HttpClientModule } from "@angular/common/http"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { TestBed } from "@angular/core/testing"








let testUrl = '/data'
interface Data{
    name:string
    age:number
}
describe('Http Client Testing', () => {


    let httpClient:HttpClient
    let httpTestingController:HttpTestingController;

beforeEach(() => {

    TestBed.configureTestingModule({

        imports: [HttpClientTestingModule],
    })
    httpClient=TestBed.inject(HttpClient);
    httpTestingController=TestBed.inject(HttpTestingController);
})

it('Should call the testUrl with the get request', () => {
    httpClient.get<Data>(testUrl).subscribe(data =>{
        // expect(data.name).toBe('Test');
        // expect(data.age).toBe(20);
    });
    const request=httpTestingController.expectOne('/data');
    request.flush({name:'Test',age:20});
    expect(request.request.method).toBe('GET');
})

})