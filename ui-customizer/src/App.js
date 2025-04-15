import React, { useState, useEffect } from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';
import FontSelector from './components/FontSelector';
import LayoutSelector from './components/LayoutSelector';
import Preview from './components/Preview';
import { db, doc, onSnapshot, setDoc } from './firebase';

function App() {
  const [theme, setTheme] = useState('light');
  const [font, setFont] = useState('Arial');
  const [layout, setLayout] = useState('grid');

  // Realtime Firebase Listener
  useEffect(() => {
    const userDoc = doc(db, "users", "user1");
    const unsubscribe = onSnapshot(userDoc, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTheme(data.theme);
        setFont(data.font);
        setLayout(data.layout);
      }
    });
    return () => unsubscribe();
  }, []);

  // Sync to Firebase on update
  useEffect(() => {
    const userDoc = doc(db, "users", "user1");
    setDoc(userDoc, { theme, font, layout }, { merge: true });
  }, [theme, font, layout]);

  return (
    <div className={`min-h-screen p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <h1 className="text-3xl font-bold mb-4 text-center">Real-Time UI Customizer</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
        <FontSelector font={font} setFont={setFont} />
        <LayoutSelector layout={layout} setLayout={setLayout} />
      </div>
      <Preview theme={theme} font={font} layout={layout} />
    </div>
  );
}

export default App;
