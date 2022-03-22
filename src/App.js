import HomeTodo from './components/HomeTodo';

function App() {
  return (
      <div>
        <div className='container content'>
          <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-7'>
              <h1 className='text-center header'>todos</h1>
              <HomeTodo />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
