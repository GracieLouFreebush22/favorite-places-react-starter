interface PlaceItemProps{
    title: string;
    name: string;
    country: string;
    image: string;
    maps: string;
    explain: string;

}

function PlaceItem(props: PlaceItemProps): JSX.Element {
    return (
        <p> hello place item</p>
    )
}



export default PlaceItem;