type Pekerja = {
  readonly id: number;
  nama: string;
  retire: (data: Date) => void;
};
let pekerja: Pekerja = {
  id: 1,
  nama: 'yogy',
  retire: (date: Date) => {
    console.log(date);
  },
};
