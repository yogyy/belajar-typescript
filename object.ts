/* //avoid do this
let pekerja: {
  id: number;
  nama?: string; <--
} = { id: 1 };
pekerja.nama = "yogy";

console.log(pekerja);
*/

let pekerja: {
  readonly id: number; // readonly prevent change
  nama: string;
  retire: (data: Date) => void;
} = {
  id: 1,
  nama: "yogy",
  retire: (date: Date) => {
    console.log(date);
  },
};
