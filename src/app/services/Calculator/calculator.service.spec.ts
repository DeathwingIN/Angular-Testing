import { CalculatorService } from './calculator.service';
import { LoggerService } from '../Logger/logger.service';
import { TestBed } from '@angular/core/testing';

function setUp() {
  const mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
  TestBed.configureTestingModule({
    providers: [
      CalculatorService,
      {
        provide: LoggerService,
        useValue: mockLoggerService,
      },
    ],
  });
  const calculator = TestBed.inject(CalculatorService);
  const LoggerServiceSpy = TestBed.inject(
    LoggerService
  ) as jasmine.SpyObj<LoggerService>;

  return { calculator, LoggerServiceSpy };
}

describe('CalculatorService', () => {
  it('should add two numbers', () => {
    const { calculator, LoggerServiceSpy } = setUp();
    console.log('calling before add');

    let result = calculator.add(1, 2);
    expect(result).toBe(3);
    expect(LoggerServiceSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    const { calculator, LoggerServiceSpy } = setUp();
    console.log('calling before sub');
    let result = calculator.subtract(2, 1);
    expect(result).toBe(1);
    expect(LoggerServiceSpy.log).toHaveBeenCalledTimes(1);
  });
});
