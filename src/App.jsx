import { useState, useEffect, useCallback } from 'react';
import Home from './pages/Home';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  // Cursor glow effect
  useEffect(() => {
    let animationFrameId;
    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024) return;
      animationFrameId = requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      });
    };
    
    // Only attach listener if on desktop or large screen
    if (window.matchMedia("(min-width: 1024px)").matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="animated-bg min-h-screen relative overflow-x-hidden w-full">
      {/* Cursor glow */}
      {!loading && (
        <div
          className="cursor-glow hidden lg:block"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        />
      )}

      {loading && <Loader onComplete={handleLoaderComplete} />}
      {!loading && <Home />}
    </div>
  );
}

export default App;
