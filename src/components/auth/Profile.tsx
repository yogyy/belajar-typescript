type ProfilProps = {
  name: string;
};

export default function Profile({name}: ProfilProps) {
  return <div>Private Profile. Name is {name}</div>;
}
