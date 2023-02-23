import STYLES from './header.module.css'

export const Header = () => {
  return (
    <div className={STYLES.main}>
      <div className={STYLES.container}>
        <h1 className={STYLES.title}>HACKER NEWS</h1>
      </div>
    </div>
  );
}
