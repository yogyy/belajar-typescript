type BtnProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export default function Btn({handleClick}: BtnProps) {
  return (
    <div>
      <button onClick={(event) => handleClick(event, 1)}>pencet</button>
    </div>
  );
}
