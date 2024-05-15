type StringifyProps = {
  title: string;
  data: object;
};

export const Stringify = ({ title, data }: StringifyProps) => {
  return (
    <div className="data">
      <h3>{title}</h3>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
};