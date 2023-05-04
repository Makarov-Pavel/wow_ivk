import styles from'./App.module.css';
import Header from './components/Header.jsx';
import MainBeasts from './components/MainBosses/MainBeasts';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.main_container}>
        <MainBeasts />
        <div style={{color:'#197',border:'1px solid #197',flexGrow:'2'}}>VIDEO</div>
      </div>
      ---Footer
    </div>
  );
}

export default App;
