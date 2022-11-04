import PlaceItem from "./PlaceItem"

function MainContent() :JSX.Element {
    return (
    <div>
        <p> hello main content</p>
       <main>
            <PlaceItem
            title= {"hello"}
            name={"name"}
            country={"country"}
            image={"image"}
            explain={"explain"}
            maps={"maps"}
            />
       </main>
    </div>
       

    )
}







export default MainContent;