import homePageImage from './contacts.jpg';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 8,
  },
};

const HomePage = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Welcome to your phone book app!</h1>
    <h2>Make yourself at home</h2>
    <div>
      <img src={homePageImage} alt="phonebook" />
    </div>
  </div>
);

export default HomePage;
