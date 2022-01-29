import Image from "next/image";

import styles from "../../styles/Home/BirthdayArticle.module.scss";

export default function BirthdayArticle({ id, name, age, image }) {
    return (
        <article className={styles.article}>
            <div className={styles.article__imgContent}>
                <Image
                    src={image}
                    alt={`logo-${name}`}
                    width={200}
                    height={200}
                    layout="responsive"
                />
            </div>
            <div>
                <h3 className={styles.article__name}>{name}</h3>
                <span className={styles.article__age}>{age} years</span>
            </div>
        </article>
    );
}
