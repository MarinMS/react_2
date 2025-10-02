import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
  const statusClass = isOnline ? css.online : css.offline;
  const statusText = isOnline ? "Online" : "Offline";
  return (
    <div className={css.item}>
      <img src={avatar} alt={name} width="48" className={css.image} />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, statusClass)}>{statusText}</p>
    </div>
  );
}
