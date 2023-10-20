import { useTheme } from 'next-themes';
import { FaDesktop, FaMoon, FaSun } from 'react-icons/fa';

function ThemeSelector() {
  const { theme, setTheme } = useTheme()

  const themes = [
    { icon: <FaMoon />, name: 'Dark', value: 'dark' },
    { icon: <FaSun />, name: 'Light', value: 'light' },
    { icon: <FaDesktop />, name: 'System', value: 'system' },
  ];

  return (
    <div className="flex rounded-full ring-1 p-1 ring-bg-light-purple items-center justify-center space-x-2 ">
      {themes.map((t) => (
        <button
          key={t.value}
          className={`px-3 py-3 w-10 h-10  rounded-full hover:text-gray-500 focus:outline-none ${theme === t.value ? 'bg-light-purple': ''}`}
          onClick={() => setTheme(t.value)}
          title={t.name}
        >
          {t.icon}
        </button>
      ))}
    </div>
  );
}

export default ThemeSelector;