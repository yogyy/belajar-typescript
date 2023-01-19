type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

// export default function Person({ name }: PersonProps) {
//   return (
//     <div>
//       <h3>
//         {name.first} {name.last}
//       </h3>
//     </div>
//   );
// }

const Person: React.FC<PersonProps> = ({name}: PersonProps) => {
  return (
    <div>
      <h3>
        {name.first} {name.last}
      </h3>
    </div>
  );
};

export default Person;
