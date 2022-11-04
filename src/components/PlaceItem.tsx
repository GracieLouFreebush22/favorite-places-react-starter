interface PlaceItemProps {
  title: string;
  name: string;
  country: string;
  image: string;
  maps: string;
  explain: string;
}

function PlaceItem(props: PlaceItemProps): JSX.Element {
  return (
    <section>
        <h2> {props.title}</h2>
        <h3> {props.name} | {props.country}</h3>
        <img>{props.image} </img> 
        <p> {props.explain} </p>
        <p> {props.maps}</p>
    </section>
  )
  
  
}

export default PlaceItem;
