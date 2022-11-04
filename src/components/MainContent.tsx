import PlaceItem from "./PlaceItem";

function MainContent(): JSX.Element {
  return (
    <div>
      <p> hello main content</p>
      <main>
        <PlaceItem   
        title={"VICTORIA PARK"}
        name={"East London"}
        country={"United Kingdom"}
        image={"https://lh5.googleusercontent.com/yciRL9jmVq876BRXXPiMgc9owxZrDTTo1VbhHBki6a-ZXezjcTowzmv5XbHtlq_pvmvKJ4ua-mW2FGcDUw5FBhAmRBD1py_s3HJqA3L2K5WF7_rMjP_3f4N53-1EQ-SOcd1XHIM"}
        explain={"Affectionatly knowns as 'Vicky Park' os best known for it's vibrant food market and spacious green areas with many recreational activities.    "}
        maps={"maps"}/>
      </main>
    </div>
  );
}

export default MainContent;
