import Footer from "../components/Footer";

export default function MainLayout({theme, toggleTheme}) {

    return (
        <main className="MainLayout">
            <div>

            </div>
            <Footer theme={theme} toggleTheme={toggleTheme} />
        </main>
    )
}
