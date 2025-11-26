import React, { useState, useEffect, useMemo } from 'react';
import { Unit } from '../types';
import { BookOpen, PenTool, Layers, CheckCircle, Volume2, AlertCircle, ArrowRight, Star, Trophy, Lock } from 'lucide-react';

interface UnitViewProps {
  unit: Unit;
  onComplete: () => void;
  isNextUnlocked: boolean;
}

const UnitView: React.FC<UnitViewProps> = ({ unit, onComplete, isNextUnlocked }) => {
  const [activeTab, setActiveTab] = useState<'vocab' | 'grammar' | 'exercises'>('vocab');
  // Store correct answers: "exerciseId-questionId" -> boolean
  const [correctAnswers, setCorrectAnswers] = useState<Record<string, boolean>>({});
  const [revealedQuestions, setRevealedQuestions] = useState<Record<string, boolean>>({});

  // Reset state when unit changes
  useEffect(() => {
    setCorrectAnswers({});
    setRevealedQuestions({});
    setActiveTab('vocab');
  }, [unit.id]);

  // Calculate total questions in this unit
  const totalQuestions = useMemo(() => {
    return unit.exercises.reduce((acc, ex) => acc + ex.questions.length, 0);
  }, [unit]);

  const correctCount = Object.keys(correctAnswers).length;
  const progressPercentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const isCompleted = progressPercentage >= 80;

  // Trigger completion in parent when threshold reached
  useEffect(() => {
    if (isCompleted && !isNextUnlocked) {
      onComplete();
    }
  }, [isCompleted, isNextUnlocked, onComplete]);

  const handleOptionSelect = (exerciseId: number, questionId: number, selectedOption: string, correctAnswer: string) => {
    const key = `${exerciseId}-${questionId}`;
    
    // If already correctly answered, don't allow changing
    if (correctAnswers[key]) return;

    setRevealedQuestions(prev => ({ ...prev, [key]: true }));

    if (selectedOption === correctAnswer) {
      setCorrectAnswers(prev => ({ ...prev, [key]: true }));
    }
  };

  const TabButton = ({ id, label, icon: Icon }: { id: typeof activeTab, label: string, icon: any }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`
        flex items-center px-6 py-3 font-medium text-sm transition-all duration-200 border-b-2
        ${activeTab === id 
          ? 'border-teal-600 text-teal-700 bg-teal-50/50' 
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
        }
      `}
    >
      <Icon className={`w-4 h-4 mr-2 ${activeTab === id ? 'text-teal-600' : 'text-gray-400'}`} />
      {label}
    </button>
  );

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
      <div className="bg-gray-50 p-4 rounded-full mb-4">
        <Layers className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-900">Coming Soon</h3>
      <p className="text-gray-500 text-center max-w-sm mt-1">
        We are working hard to digitize the content for {unit.title}. Please check back later!
      </p>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 font-sans">
      {/* Header Section */}
      <div className="mb-6 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="flex items-start justify-between relative z-10">
          <div>
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold tracking-wide uppercase mb-2 text-teal-50">
              Grade 10 • Global Success
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{unit.title}</h1>
            <h2 className="text-xl sm:text-2xl font-light text-teal-50">{unit.topic}</h2>
          </div>
          <div className="hidden sm:block opacity-80">
            <BookOpen className="w-16 h-16 text-white" strokeWidth={1.5} />
          </div>
        </div>
        
        {/* Progress Bar in Header */}
        <div className="mt-8 relative z-10">
           <div className="flex justify-between text-xs font-medium text-teal-100 mb-2 uppercase tracking-wide">
             <span>Unit Progress</span>
             <span>{progressPercentage}% Completed</span>
           </div>
           <div className="w-full bg-black/20 rounded-full h-2.5 backdrop-blur-sm">
             <div 
               className={`bg-white h-2.5 rounded-full transition-all duration-1000 ease-out ${progressPercentage >= 80 ? 'bg-yellow-300' : ''}`}
               style={{ width: `${progressPercentage}%` }}
             ></div>
           </div>
           {progressPercentage < 80 ? (
             <p className="text-xs text-teal-100 mt-2 flex items-center">
               <Lock className="w-3 h-3 mr-1" />
               Complete 80% to unlock the next unit
             </p>
           ) : (
             <p className="text-xs text-yellow-300 font-bold mt-2 flex items-center animate-pulse">
               <Trophy className="w-3 h-3 mr-1" />
               Unit Completed! Next unit unlocked.
             </p>
           )}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-t-xl border-b border-gray-200 flex overflow-x-auto sticky top-0 z-20 shadow-sm">
        <TabButton id="vocab" label="Vocabulary" icon={BookOpen} />
        <TabButton id="grammar" label="Grammar" icon={Layers} />
        <TabButton id="exercises" label={`Exercises (${correctCount}/${totalQuestions})`} icon={PenTool} />
      </div>

      {/* Main Content Area */}
      <div className="bg-gray-50/50 min-h-[500px] py-6">
        
        {/* Vocabulary Tab */}
        {activeTab === 'vocab' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {!unit.vocabulary.length ? <EmptyState /> : (
              <div className="grid gap-6 md:grid-cols-2">
                {unit.vocabulary.map((vocab, idx) => (
                  <div key={idx} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 hover:border-teal-200">
                    <div className="h-1 bg-teal-500 w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-slate-800">{vocab.word}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            {vocab.pronunciation && (
                              <span className="flex items-center text-gray-500 text-sm font-mono bg-gray-100 px-2 py-0.5 rounded">
                                <Volume2 className="w-3 h-3 mr-1" />
                                {vocab.pronunciation}
                              </span>
                            )}
                            <span className="text-xs font-bold px-2 py-0.5 rounded text-teal-700 bg-teal-50 border border-teal-100 uppercase">
                              {vocab.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-gray-700 font-medium leading-relaxed">{vocab.meaning}</p>
                      </div>

                      <div className="bg-gray-50 border-l-2 border-teal-300 p-3 rounded-r-md">
                        <p className="text-sm text-gray-600 italic">"{vocab.example}"</p>
                      </div>

                      {(vocab.synonyms || vocab.antonyms) && (
                        <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-3 text-xs">
                          {vocab.synonyms && (
                            <div className="text-gray-500">
                              <span className="font-semibold text-gray-700">Syn: </span> 
                              {vocab.synonyms.join(', ')}
                            </div>
                          )}
                          {vocab.antonyms && (
                            <div className="text-gray-500">
                              <span className="font-semibold text-gray-700">Ant: </span> 
                              {vocab.antonyms.join(', ')}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Grammar Tab */}
        {activeTab === 'grammar' && (
          <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in duration-300">
            {!unit.grammar.length ? <EmptyState /> : unit.grammar.map((rule, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-slate-50 border-b border-gray-200 px-6 py-4 flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 mr-3" />
                  <h2 className="text-lg font-bold text-slate-800">{rule.title}</h2>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6 text-lg">{rule.description}</p>

                  {/* Structure Box */}
                  {rule.structure && (
                    <div className="mb-6 bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start">
                      <div className="bg-blue-100 p-2 rounded-md mr-4 shrink-0">
                         <Layers className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-1">Structure</h4>
                        <p className="font-mono text-blue-900 text-lg font-medium">{rule.structure}</p>
                      </div>
                    </div>
                  )}

                  {/* Usage Table */}
                  <div className="mb-6 overflow-hidden rounded-lg border border-gray-200">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-gray-100 text-gray-700 uppercase font-semibold text-xs">
                        <tr>
                          <th className="px-4 py-3 border-b border-gray-200 w-1/3">Usage / Situation</th>
                          <th className="px-4 py-3 border-b border-gray-200">Example</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {rule.usage.map((u, i) => (
                          <tr key={i} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 font-medium text-gray-800">{u.situation}</td>
                            <td className="px-4 py-3 text-gray-600 italic">{u.example}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Signal Words */}
                  {rule.signalWords && (
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                       <span className="text-sm font-semibold text-gray-500 uppercase mr-2">Signals:</span>
                       {rule.signalWords.map((word, i) => (
                         <span key={i} className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">
                           {word}
                         </span>
                       ))}
                    </div>
                  )}

                  {/* Note Box */}
                  {rule.note && (
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-md flex items-start">
                       <AlertCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 shrink-0" />
                       <div>
                         <h4 className="text-sm font-bold text-amber-800 uppercase mb-1">Remember!</h4>
                         <p className="text-amber-900 text-sm">{rule.note}</p>
                       </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Exercises Tab */}
        {activeTab === 'exercises' && (
          <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-300">
            {!unit.exercises.length ? <EmptyState /> : unit.exercises.map((exercise) => (
              <div key={exercise.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-slate-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-teal-100 text-teal-700 font-bold px-2.5 py-1 rounded text-xs mr-3 border border-teal-200">
                      {exercise.category}
                    </div>
                    <h3 className="font-bold text-slate-800">{exercise.title}</h3>
                  </div>
                </div>

                <div className="divide-y divide-gray-100">
                  {exercise.questions.map((q, qIdx) => {
                    const key = `${exercise.id}-${q.id}`;
                    const isRevealed = revealedQuestions[key];
                    const isCorrect = correctAnswers[key];
                    
                    return (
                      <div key={q.id} className="p-6 transition-colors">
                        <div className="flex items-start mb-4">
                          <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-3 shrink-0 mt-0.5 transition-colors ${
                             isRevealed 
                              ? (isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700')
                              : 'bg-slate-200 text-slate-600'
                          }`}>
                            {qIdx + 1}
                          </span>
                          <div className="flex-1">
                             <p className="text-gray-800 font-medium text-lg leading-snug">{q.question}</p>
                             
                             {q.options && (
                               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                                 {q.options.map((opt, optIdx) => {
                                    let btnClass = "border-gray-200 hover:border-teal-300 hover:bg-teal-50";
                                    if (isRevealed) {
                                        if (opt === q.answer) {
                                            btnClass = "border-green-500 bg-green-50 text-green-700 font-medium";
                                        } else if (opt !== q.answer && !isCorrect) {
                                            // Highlight selected wrong answer if we could track selection. 
                                            // For simplicity, we just highlight the correct one prominently.
                                            btnClass = "border-gray-200 opacity-50";
                                        }
                                    }

                                    return (
                                       <button 
                                          key={optIdx} 
                                          onClick={() => handleOptionSelect(exercise.id, q.id, opt, q.answer)}
                                          disabled={isCorrect} // Disable ONLY if already correctly answered
                                          className={`flex items-center p-3 border rounded-lg text-left transition-all w-full ${btnClass}`}
                                       >
                                          <div className={`w-4 h-4 rounded-full border mr-3 flex items-center justify-center ${
                                            isRevealed && opt === q.answer ? 'border-green-500' : 'border-gray-300'
                                          }`}>
                                            {isRevealed && opt === q.answer && <div className="w-2 h-2 bg-green-500 rounded-full"></div>}
                                          </div>
                                          <span className="text-sm">{opt}</span>
                                       </button>
                                    );
                                 })}
                               </div>
                             )}
                          </div>
                        </div>

                        {/* Explanation Box */}
                        {isRevealed && (
                          <div className={`ml-9 animate-in fade-in slide-in-from-top-2 duration-300 ${isCorrect ? '' : 'mt-2'}`}>
                            {isCorrect ? (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                  <div className="flex items-center mb-1">
                                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                    <span className="font-bold text-green-800 text-sm">Correct!</span>
                                  </div>
                                  <p className="text-green-700 text-sm">{q.explanation}</p>
                                </div>
                            ) : (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                    <div className="flex items-center mb-1">
                                      <AlertCircle className="w-4 h-4 text-red-600 mr-2" />
                                      <span className="font-bold text-red-800 text-sm">Incorrect, try again!</span>
                                    </div>
                                    <p className="text-red-700 text-xs">Hint: Review the grammar section or vocabulary list.</p>
                                </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UnitView;