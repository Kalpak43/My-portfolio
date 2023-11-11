import useDarkMode from "../hooks/useDarkMode"

export default function ThemeToggler({theme, toggleTheme}) {

    // const isLight = theme === 'light';

    return (
        <button className="ThemeToggler" onClick={toggleTheme}>
            <div className="circle"></div>
        </button>
    )
}   