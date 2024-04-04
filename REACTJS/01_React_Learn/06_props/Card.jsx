function Card(props) {
  console.log("Props : ", props);
  console.log(props.name);

  return (
    <>
      <div>Name : {props.name ?? props.obj.name}</div>
    </>
  );
}
export default Card;
