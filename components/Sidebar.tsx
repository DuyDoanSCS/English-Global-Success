import React from 'react';
import { Unit } from '../types';
import { Book, ChevronRight, Lock, CheckCircle2 } from 'lucide-react';

interface SidebarProps {
  units: Unit[];
  currentUnitId: number;
  onSelectUnit: (id: number) => void;
  isOpen: boolean;
  onCloseMobile: () => void;
  maxUnlockedUnitId: number;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  units, 
  currentUnitId, 
  onSelectUnit, 
  isOpen, 
  onCloseMobile,
  maxUnlockedUnitId 
}) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={onCloseMobile}
        />
      )}
      
      <aside className={`
        fixed top-0 left-0 h-full w-72 bg-white border-r border-gray-200 z-30 transform transition-transform duration-200 ease-in-out
        md:translate-x-0 md:static md:block
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b border-gray-100 flex items-center space-x-2">
          <div className="bg-teal-600 p-2 rounded-lg">
            <Book className="w-6 h-6 text-white" />
          </div>
          <div>
             <h1 className="text-lg font-bold text-slate-800">Global Success</h1>
             <p className="text-xs text-slate-500 font-medium">Grade 10 Digital</p>
          </div>
        </div>

        <nav className="p-4 overflow-y-auto h-[calc(100vh-85px)]">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">Table of Contents</h3>
          <ul className="space-y-1">
            {units.map((unit) => {
              const isLocked = unit.id > maxUnlockedUnitId;
              const isCompleted = unit.id < maxUnlockedUnitId;
              
              return (
                <li key={unit.id}>
                  <button
                    onClick={() => {
                      if (!isLocked) {
                        onSelectUnit(unit.id);
                        onCloseMobile();
                      }
                    }}
                    disabled={isLocked}
                    className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-all ${
                      currentUnitId === unit.id
                        ? 'bg-teal-50 text-teal-700 shadow-sm border border-teal-100'
                        : isLocked 
                          ? 'text-gray-400 cursor-not-allowed bg-gray-50/50' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <div className="flex flex-col items-start truncate">
                      <div className="flex items-center">
                        <span className={`mr-2 ${currentUnitId === unit.id ? 'font-bold' : ''}`}>{unit.title}</span>
                        {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />}
                      </div>
                      <span className="text-xs font-normal opacity-80 text-left truncate w-48">{unit.topic}</span>
                    </div>
                    
                    {isLocked ? (
                      <Lock className="w-4 h-4 text-gray-300" />
                    ) : (
                      currentUnitId === unit.id && <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;