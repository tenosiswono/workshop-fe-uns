import './App.css';

const styleButton = { 
  margin: '24px',
  backgroundColor: 'blue',
  padding: '24px',
  color: 'white',
  borderRadius: '10px'
}

const Box = ({ size, className, style, ...otherProps }) => <div
  className={`box box--${size} ${className}`}
  style={{ borderRadius: '10px', ...style }}
  {...otherProps}
/>

function App() {
  return (
    <div>
      <div style={styleButton}>Button 1</div>
      <div style={{ margin: '24px' }}>
        <h1>Boxes</h1>
        <Box
          size="small"
          className="bg-red"
          style={{ color: '#eee' }}
        >Small Red Box</Box>
        <Box 
          size="medium" 
          style={{ backgroundColor: 'green' }}
        >Medium Green Box</Box>
        <Box
          size="large"
          style={{ backgroundColor: 'blue', color: 'white' }}
        >Large Blue Box</Box>
      </div>
    </div>
  );
}

export default App;
