type StatusProps = {
  status: "loading" | "success" | "error";
};
export default function Status({status}: StatusProps) {
  let pesan = "";
  if (status === "loading") {
    pesan = "Loading...";
  } else if (status === "success") {
    pesan = "Data fetched successfully!";
  } else if (status === "error") {
    pesan = "Error fetching data";
  }
  return (
    <div>
      <h1>Status - {pesan}</h1>
    </div>
  );
}
