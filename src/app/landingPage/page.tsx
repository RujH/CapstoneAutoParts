import styles from '@/styles/landing-page.module.css';


export default function LandingPage() {
    return (
        <section id="home" className={styles['landing-page']}>
            <div className={styles['landing-page']}>
                <video className={styles['landing-video']} autoPlay muted loop playsInline>
                    <source src="video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={styles.overlay}>
                    <h1 className={styles['merriweather-bold']}> 
                        A New Approach to Auto Recycling
                    </h1>
                    <p className={styles['merriweather-light']}>
                        Sustainability, Affordability & Consistent Quality
                    </p>
                </div>
            </div>
        </section>
    );
}


