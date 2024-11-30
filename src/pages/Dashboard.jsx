import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagicWandSparkles } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [savingsAmount, setSavingsAmount] = useState(0);
  const [creditCardAmount, setCreditCardAmount] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [transactionSummary, setTransactionSummary] = useState('');
  const [expensesData, setExpensesData] = useState({});
  const [chartPeriod, setChartPeriod] = useState(3);

  useEffect(() => {
    // Fetch initial data
    fetchAccountData();
    fetchTransactions();
    fetchExpensesData(chartPeriod);
  }, []);

  const fetchAccountData = () => {
    // Mock API call
    setTimeout(() => {
      setSavingsAmount(5000.0);
      setCreditCardAmount(1500.0);
    }, 500);
  };

  const fetchTransactions = () => {
    // Mock API call
    setTimeout(() => {
      setTransactions([
        { date: '2023-05-01', description: 'Grocery Store', amount: -75.5 },
        { date: '2023-05-03', description: 'Salary Deposit', amount: 3000.0 },
        { date: '2023-05-05', description: 'Electric Bill', amount: -120.0 },
        { date: '2023-05-10', description: 'Restaurant', amount: -45.75 },
      ]);
    }, 500);
  };

  const fetchTransactionSummary = () => {
    // Mock API call
    setTimeout(() => {
      setTransactionSummary(
        "This month, you've spent most on groceries and utilities. Your income is higher than your expenses, great job on saving!"
      );
    }, 1000);
  };

  const fetchExpensesData = (months) => {
    // Mock API call
    setTimeout(() => {
      const labels = Array.from({ length: months }, (_, i) => {
        const d = new Date();
        d.setMonth(d.getMonth() - i);
        return d.toLocaleString('default', { month: 'short' });
      }).reverse();

      const data = Array.from(
        { length: months },
        () => Math.floor(Math.random() * 3000) + 1000
      );

      setExpensesData({
        labels,
        datasets: [
          {
            label: 'Monthly Expenses',
            data,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1,
          },
        ],
      });
    }, 500);
  };

  return (
    <Container className='mt-4'>
      <Row>
        <Col md={6}>
          <Card className='mb-4'>
            <Card.Body>
              <Card.Title>Savings Account</Card.Title>
              <Card.Text className='h3'>${savingsAmount.toFixed(2)}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className='mb-4'>
            <Card.Body>
              <Card.Title>Credit Card Used</Card.Title>
              <Card.Text className='h3'>
                ${creditCardAmount.toFixed(2)}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className='mb-4'>
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
            Current Month Transactions
            <Button variant='outline-primary' onClick={fetchTransactionSummary}>
              <FontAwesomeIcon icon={faMagicWandSparkles} /> Summarize
            </Button>
          </Card.Title>
          {transactionSummary && (
            <Card.Text className='mt-3 mb-3 p-3 bg-light'>
              {transactionSummary}
            </Card.Text>
          )}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td
                    className={
                      transaction.amount < 0 ? 'text-danger' : 'text-success'
                    }
                  >
                    ${Math.abs(transaction.amount).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card className='mb-4'>
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
            Expenses Over Time
            <div>
              <Button
                variant={chartPeriod === 3 ? 'primary' : 'outline-primary'}
                onClick={() => {
                  setChartPeriod(3);
                  fetchExpensesData(3);
                }}
                className='me-2'
              >
                3 Months
              </Button>
              <Button
                variant={chartPeriod === 6 ? 'primary' : 'outline-primary'}
                onClick={() => {
                  setChartPeriod(6);
                  fetchExpensesData(6);
                }}
                className='me-2'
              >
                6 Months
              </Button>
              <Button
                variant={chartPeriod === 12 ? 'primary' : 'outline-primary'}
                onClick={() => {
                  setChartPeriod(12);
                  fetchExpensesData(12);
                }}
              >
                12 Months
              </Button>
            </div>
          </Card.Title>
          {expensesData.labels && (
            <div style={{ height: '200px' }}>
              <Bar
                data={expensesData}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Dashboard;
