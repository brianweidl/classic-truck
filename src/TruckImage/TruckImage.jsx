import Image from 'next/image';

import styles from './TruckImage.module.css';
import orangeTruck from '../../public/img/truck/orangetruck.png';

function HeroSection() {
	return (
		<div className={styles.mainContainer}>
			<span className={styles.orangeArrow}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512s256-114.6 256-256zM215 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L392 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-214.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L103 273c-9.4-9.4-9.4-24.6 0-33.9L215 127z" />
				</svg>
			</span>
			<span className={styles.imageWrapper}>
				<Image src={orangeTruck} alt="Orange truck" layout="fill" objectFit="cover" />
			</span>
		</div>
	);
}

export default HeroSection;
