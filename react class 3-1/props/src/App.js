import logo from './logo.svg';
import './App.css';

import Card from './Card';

function App() {
  return (
    <div className="App">
      <Card 
        name="Mountain View" 
        description="A beautiful mountain view during sunset." 
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        no="1"
      />
      <Card 
        name="Ocean Beach" 
        description="Relax and enjoy the waves at the beach." 
        image="https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        no="2"
      />

      <Card
        name="forest"
        description="A serene forest with lush greenery."
        image="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        no="3"
      />
    </div>
  );
}

export default App;
