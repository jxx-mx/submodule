type PropsType = {
  name: string;
};

function CustomComponent({ name }: PropsType) {
  return <div>{name}</div>;
}

export default CustomComponent;
