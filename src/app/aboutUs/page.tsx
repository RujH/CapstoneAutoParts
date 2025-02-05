import React from 'react';
import {ShieldCheckIcon, ClockIcon, CheckIcon, CameraIcon} from '@heroicons/react/24/outline'; 
import styles from '@/styles/about-us.module.css';

export default function AboutUs () {
    return (
        <section className={`${styles.aboutUs} mt-[100px]`} id="aboutUs">
            <div className={styles.row}>
                <h2 className={styles.aboutTitle}>About Us</h2>
                
                <p className={styles.aboutDescription}>
                    Welcome to our website! We are a team of passionate professionals dedicated to delivering exceptional service and innovative solutions. Our goal is to create value and impact through our expertise and commitment to excellence.
                    With years of experience in the industry, we strive to stay ahead of the curve, adopting the latest technologies and methodologies to deliver outstanding results for our clients.
                </p>
            </div>

            <div className={styles.row1}>
                <div className={styles.smallSection}>
                    <ShieldCheckIcon className="w-10 h-10 text-green-368" />
                    <p className={styles.text}>Rigorous Inspection Checks</p>
                </div>
                <div className={styles.smallSection}>
                    <CameraIcon className="w-10 h-10 text-green-368" />
                    <p className={styles.text}>High Quality Pictures of all Parts</p>
                </div>
                <div className={styles.smallSection}>
                    <ClockIcon className="w-10 h-10 text-green-368" />
                    <p className={styles.text}>Shipped Within 24 Hours</p>
                </div>
                <div className={styles.smallSection}>
                    <CheckIcon className="w-10 h-10 text-green-368" />
                    <p className={styles.text}>Complementary Warranty</p>
                </div>
            </div>
        </section>
    );
};
