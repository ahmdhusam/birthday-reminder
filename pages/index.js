import fs from "fs/promises";
import path from "path";

import MainHome from "../Components/Home";

export default function HomePage(props) {
    return <MainHome {...props} />;
}

export async function getStaticProps() {
    const filePath = path.join(
        process.cwd(),
        "dummy-db",
        "birthdays-list.json"
    );
    const file = await fs.readFile(filePath);
    const birthdaysList = JSON.parse(file);

    return {
        props: { birthdaysList },
    };
}
