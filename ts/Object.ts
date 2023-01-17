type Pekerja = {
  readonly id: number; // readonly prevent change
  nama: string;
  retire: (data: Date) => void;
};
let pekerja = {
  id: 1,
  nama: 'yogy',
  retire: (date: Date) => {
    console.log(date);
  },
};
