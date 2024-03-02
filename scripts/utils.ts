// TODO: More complex format to handle 만 and 억
export const formatKRW = (price: number) => new Intl.NumberFormat('ko-KR', {style: 'currency', currency: 'KRW'}).format(price);
