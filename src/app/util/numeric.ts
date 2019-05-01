class NumericService {
  comma(num: string| number): string {
    if(typeof num === 'number') {
      num = ''+ num;
    }
    const int = num.replace(/\.[^.]+$/, '');
    const decimal = num.replace(/^[^.]+/, '');
    return int.replace(/(\d)\B(?=(\d{3})+(?!\d))/g, '$1,') + decimal;
  }
}

export const numericService = new NumericService();
