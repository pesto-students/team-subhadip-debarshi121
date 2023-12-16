import "./styles.css";
import BookList from "./components/BookList";
import WithLogging from "./components/WithLogging";

export default function App() {
  const EnhancedComponent = WithLogging(BookList);
  return (
    <div className="App">
      <EnhancedComponent />
    </div>
  );
}
