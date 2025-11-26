import React, { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import UnitView from './components/UnitView';
import Chatbot from './components/Chatbot';
import { textbookData } from './data';
import { Menu } from 'lucide-react';

function App() {
  const [currentUnitId, setCurrentUnitId] = useState<number>(textbookData[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // State to track completed units (max unlocked unit ID)
  // Initialize from localStorage or default to 1
  const [maxUnlockedUnitId, setMaxUnlockedUnitId] = useState<number>(() => {
    const saved = localStorage.getItem('gs10_progress');
    return saved ? parseInt(saved, 10) : 1;
  });

  const currentUnit = textbookData.find(u => u.id === currentUnitId) || textbookData[0];

  // Handler to update progress
  const handleUnitCompletion = (unitId: number) => {
    const nextUnitId = unitId + 1;
    if (nextUnitId > maxUnlockedUnitId && nextUnitId <= textbookData.length) {
      setMaxUnlockedUnitId(nextUnitId);
      localStorage.setItem('gs10_progress', nextUnitId.toString());
      
      // Optional: Auto-navigate to next unit or show a toast
      // For now, we rely on the UnitView's success message to inform the user
    }
  };

  return (
    <HashRouter>
      <div className="flex h-screen bg-gray-50 overflow-hidden">
        {/* Sidebar */}
        <Sidebar 
          units={textbookData} 
          currentUnitId={currentUnitId} 
          onSelectUnit={setCurrentUnitId}
          isOpen={sidebarOpen}
          onCloseMobile={() => setSidebarOpen(false)}
          maxUnlockedUnitId={maxUnlockedUnitId}
        />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col h-full relative overflow-hidden">
          {/* Mobile Header */}
          <div className="md:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between z-10">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="font-bold text-teal-800 truncate">Global Success 10</h1>
            </div>
            <div className="text-xs font-semibold bg-teal-100 text-teal-800 px-2 py-1 rounded-full">
               Level {currentUnitId}
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto scroll-smooth">
             <UnitView 
                unit={currentUnit} 
                onComplete={() => handleUnitCompletion(currentUnit.id)}
                isNextUnlocked={maxUnlockedUnitId > currentUnit.id}
             />
             
             {/* Footer */}
             <footer className="mt-10 py-6 text-center text-sm text-gray-400 border-t border-gray-200 mx-6">
                <p>© 2024 Global Success Digital Companion. For educational purposes only.</p>
             </footer>
          </div>
        </main>

        {/* AI Chatbot Overlay */}
        <Chatbot contextTopic={`${currentUnit.title}: ${currentUnit.topic}`} />
      </div>
    </HashRouter>
  );
}

export default App;