import styles from 'components/ImageGallery/ImageGallery.module.css';

function ImageGallery(props) {
  return (
    <div className={styles.section}>
      <ul className={styles.imageList}>
        <li className={styles.imageListItem}>
          <img
            src="https://powergo.pl/sh_website_category_page/static/src/img/default.png"
            alt="default placeholder for dev"
          ></img>
        </li>
        <li className={styles.imageListItem}>
          <img
            src="https://powergo.pl/sh_website_category_page/static/src/img/default.png"
            alt="default placeholder for dev"
          ></img>
        </li>
        <li className={styles.imageListItem}>
          <img
            src="https://powergo.pl/sh_website_category_page/static/src/img/default.png"
            alt="default placeholder for dev"
          ></img>
        </li>
        <li className={styles.imageListItem}>
          <img
            src="https://powergo.pl/sh_website_category_page/static/src/img/default.png"
            alt="default placeholder for dev"
          ></img>
        </li>
      </ul>
    </div>
  );
}

export default ImageGallery;
