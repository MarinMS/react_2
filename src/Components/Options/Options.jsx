import css from "./Options.module.css";

export default function Options({ onFeedback, showReset }) {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={() => onFeedback("good")}>
        Good
      </button>
      <button className={css.btn} onClick={() => onFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => onFeedback("bad")}>
        Bad
      </button>
      {showReset && (
        <button className={css.btn} onClick={() => onFeedback("reset")}>
          Reset
        </button>
      )}
    </div>
  );
}
