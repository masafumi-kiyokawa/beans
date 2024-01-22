import useBeans from "../hooks/useBeans";

const BeansList = () => {
  const { beans, error, isLoading, setBeans, setError } = useBeans();
  return (
    <ul>
      {beans.map((bean) => (
        <li key={bean.id}>{bean.name}</li>
      ))}
    </ul>
  );
};

export default BeansList;
