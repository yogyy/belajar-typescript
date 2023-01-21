type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export default function List<T extends {first: string; last: string; id: number}>({
  items,
  onClick,
}: ListProps<T>) {
  return (
    <div>
      <h2 style={{color: "forestgreen"}}>List of items</h2>
      {items.map((item, index) => {
        return (
          <div
            style={{cursor: "pointer", padding: "5px", background: "transparent"}}
            key={index}
            onClick={() => onClick(item)}>
            {item.id}. {item.first} {item.last}
          </div>
        );
      })}
    </div>
  );
}
