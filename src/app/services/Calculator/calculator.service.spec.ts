import { CalculatorService } from './calculator.service';
import { LoggerService } from '../Logger/logger.service';

describe('CalculatorService', () => {
  let mockLoggerService: any;
  let calculator: CalculatorService;

  beforeEach(() => {
    console.log('calling before each');
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    calculator = new CalculatorService(mockLoggerService);
  });

  it('should add two numbers', () => {
    console.log('calling before add');
    let result = calculator.add(1, 2);
    expect(result).toBe(3);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    console.log('calling before sub');
    let result = calculator.subtract(2, 1);
    expect(result).toBe(1);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});
