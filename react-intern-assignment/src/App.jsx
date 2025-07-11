import TopNav from './components/TopNav';
import SpreadsheetTable from './components/SpreadsheetTable';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopNav />
      <div className="flex-1 overflow-auto">
        <SpreadsheetTable />
      </div>
      <Footer />
    </div>
  );
}

export default App;
