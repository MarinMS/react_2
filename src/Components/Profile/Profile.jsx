import css from "./Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.head}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.desc}>@{tag}</p>
        <p className={css.desc}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.itemTitle}>Followers</span>
          <span className={css.itemNumber}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.itemTitle}>Views</span>
          <span className={css.itemNumber}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.itemTitle}>Likes</span>
          <span className={css.itemNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
