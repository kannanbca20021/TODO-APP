import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import {  Card, Col, Row} from 'antd';


function App() {
  return (
    <>
      <Row justify="center" align="middle" style={{ paddingTop: 120 }}>
        <Col span={12}>
          <Card title="TODO LIST">
            <div className="App">
              <TodoAdd />
              <TodoList />
            </div>
          </Card>
        </Col>
      </Row>;

    </>
  )
}

export default App;
