import React, { Component } from 'react';
import Container from './Container.js';
import './App.css';
import { getAllStudents } from './client.js';
import { Table, Avatar, Spin, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const getIndicatorIcon = () => (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

class App extends Component {
  state = {
    students: [],
    isFetching: false,
  };

  componentDidMount() {
    this.fetchStudents();
  }

  fetchStudents = () => {
    this.setState({ isFetching: true });
    getAllStudents().then((res) =>
      res.json().then((students) => {
        console.log(students);
        this.setState({
          students,
          isFetching: false,
        });
      })
    );
  };

  render() {
    const { students } = this.state;
    if (this.state.isFetching) {
      return (
        <Container>
          <Space class="spinner">
            <Spin indicator={getIndicatorIcon()} />
          </Space>
        </Container>
      );
    }

    if (students && students.length) {
      const columns = [
        {
          title: '',
          dataIndex: 'avatar',
          render: (text, student) => (
            <Avatar size="large">
              {`${student.firstName.charAt(0).toUpperCase()}${student.lastName
                .charAt(0)
                .toUpperCase()}`}
            </Avatar>
          ),
        },
        {
          title: 'Student Id',
          dataIndex: 'studentID',
          key: 'studentID',
        },
        {
          title: 'First Name',
          dataIndex: 'firstName',
          key: 'firstName',
        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          key: 'lastName',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender',
        },
      ];

      return (
        <Container>
          <Table
            dataSource={students}
            columns={columns}
            pagination={false}
            rowKey="studentId"
          />
        </Container>
      );
    }
    return <h1>No students found!</h1>;
  }
}

export default App;
