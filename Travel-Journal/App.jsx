import Header from "./Components/Headr"
import Entry from "./Components/Entry"
import data from "./data"
export default function App() {

    const entryElements = data.map((entry) => {

        return (
            <Entry
                key={entry.id}
                {...entry}
                // img={entry.img}
                // title={entry.title}
                // country={entry.country}
                // gogleMapLinks={entry.googleMapsLink}
                // dates={entry.dates}
                // text={entry.text}
            />
        )

    })

    return (
        <>
            <Header />
            <main className="containe">
                {entryElements}
            </main>
        </>
    )
}