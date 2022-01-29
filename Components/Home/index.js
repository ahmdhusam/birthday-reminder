import { useState } from "react";

import BirthdayArticle from "./BirthdayArticle";

import styles from "../../styles/Home/Index.module.scss";

export default function MainHome(props) {
    const [birthdaysList, setBirthdaysList] = useState(
        props.birthdaysList || []
    );

    const clearAllHandler = () => {
        setBirthdaysList([]);
    };

    return (
        <main className={styles.mainPage}>
            <section className={styles.mainPage__content}>
                <h1>{birthdaysList?.length} birthdays today</h1>

                {birthdaysList?.map((birthday) => (
                    <BirthdayArticle key={birthday.id} {...birthday} />
                ))}

                <button
                    className={styles.mainPage__content_btn}
                    onClick={clearAllHandler}
                >
                    Clear All
                </button>
            </section>
        </main>
    );
}
