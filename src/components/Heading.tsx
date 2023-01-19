type HeadingProps = {
  children: string;
};

export default function Heading({children}: HeadingProps) {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
}
