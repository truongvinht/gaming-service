import styles from '../../styles/Genshin.module.css';

const GenshinHome = () => {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">
          Genshin Impact
        </h1>
      </div>

      <div className={styles.grid}>
        <a href="/genshin/artifacts" className={styles.card}>
          <h2>
            Artifakte <span>-&gt;</span>
          </h2>
          <p>Details zu Artifaktsets</p>
        </a>
        <a href="/genshin/elements" className={styles.card}>
          <h2>
            Elemente <span>-&gt;</span>
          </h2>
          <p>Details zu den verfügbaren Elementen</p>
        </a>
        <a href="/genshin/characters" className={styles.card}>
          <h2>
            Figuren <span>-&gt;</span>
          </h2>
          <p>Details zu Figuren</p>
        </a>
        <a href="/genshin/weapons" className={styles.card}>
          <h2>
            Waffen <span>-&gt;</span>
          </h2>
          <p>Details zu Waffenteile</p>
        </a>
      </div>
      <div>
        <div className="container mx-auto flex justify-between py-5 border-b">
          {/** collapsable form */}
        </div>
        <div className="container mx-auto">{/** table */}</div>
      </div>
    </main>
  );
};

export default GenshinHome;
