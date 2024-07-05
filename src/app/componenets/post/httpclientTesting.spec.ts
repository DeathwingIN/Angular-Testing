import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

let testUrl = '/data';
interface Data {
  name: string;
  age: number;
}
describe('Http Client Testing', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('Should call the testUrl with the get request', () => {
    httpClient.get<Data>(testUrl).subscribe((data) => {
      // expect(data.name).toBe('Test');
      // expect(data.age).toBe(20);
    });
    const request = httpTestingController.expectOne('/data');
    request.flush({ name: 'Test', age: 20 });
    expect(request.request.method).toBe('GET');
  });

  it('Should test multiple requests', () => {
    const testData: Data[] = [
      { name: 'Test', age: 20 },
      { name: 'Test2', age: 30 },
    ];

    httpClient.get<Data[]>(testUrl).subscribe((data) => {
      expect(data.length).toEqual(0);
    });
    httpClient.get<Data[]>(testUrl).subscribe((data) => {
      expect(data).toEqual([testData[0]]);
    });
    httpClient.get<Data[]>(testUrl).subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const requests = httpTestingController.match(testUrl);
    expect(requests.length).toBe(3);

    requests[0].flush([]); // Flushes an empty array for the first subscription
    requests[1].flush([testData[0]]); // Ensures the first element is flushed for the second subscription
    requests[2].flush(testData); //
  });
});
