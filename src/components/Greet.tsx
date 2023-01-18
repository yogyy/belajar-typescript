type GreetProps = {
  name: string;
  pesan: number;
  lagiLogin: boolean;
};
export default function Greet({ name, pesan, lagiLogin }: GreetProps) {
  return (
    <div>
      <p>
        {lagiLogin
          ? `Welcome ${name}! you have ${pesan} unread messages!`
          : `Welcome Guest`}
      </p>
    </div>
  );
}
