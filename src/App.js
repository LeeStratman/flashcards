import CollectionsView from "./CollectionsView";
import Content from "./Content";
import Header from "./Header";
import HeaderBar from "./HeaderBar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderBar title="Flashcards" />
      <div className="py-10">
        <Header title="Collections" />
        <Content>
          <CollectionsView />
        </Content>
      </div>
    </div>
  );
}

export default App;
