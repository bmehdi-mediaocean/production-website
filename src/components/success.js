import styles from './success.module.scss';

export default function Success(){
    //const router = useRouter();
    return(
        <main>
            <div className={styles.mainDiv}>
                <h1 className={styles.mainHeadline}>
                    Thanks for the email {router.query.name}
                </h1>
                <p className={styles.mainCopy}>We have sent you an email over at {router.query.email}.</p>
            </div>
        </main>
    )
}