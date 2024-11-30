import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Button,
  Alert,
} from 'react-bootstrap';
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
import {
  faMagicWandSparkles,
  faFileExport,
} from '@fortawesome/free-solid-svg-icons';
import { supabase } from '../supabaseClient';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [transactionSummary, setTransactionSummary] = useState(null);
  const [transactionJSON, setTransactionJSON] = useState(null);
  const [expensesData, setExpensesData] = useState({});
  const [chartPeriod, setChartPeriod] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [savingsAmount, setSavingsAmount] = useState(0);
  const [creditCardAmount, setCreditCardAmount] = useState(0);
  //const [detailedSummary, setDetailedSummary] = useState(''); // Removed
  const [summaryLoading, setSummaryLoading] = useState(false);

  useEffect(() => {
    fetchAccountData();
    fetchTransactions();
    fetchExpensesData(chartPeriod);
  }, [chartPeriod]);

  const fetchAccountData = async () => {
    try {
      const { data, error } = await supabase.from('accounts').select('*');
      if (error) throw error;
      setAccounts(data);

      const savingsAccount = data.find((account) => account.type === 'Savings');
      const creditCard = data.find((account) => account.type === 'Credit Card');

      setSavingsAmount(savingsAccount ? savingsAccount.balance : 0);
      setCreditCardAmount(creditCard ? creditCard.balance : 0);
    } catch (error) {
      setError('Error fetching account data');
      console.error('Error fetching account data:', error);
    }
  };

  const fetchTransactions = async () => {
    try {
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .gte('date', '2024-06-01')
        .lte('date', '2024-11-30')
        .order('date', { ascending: false });
      if (error) throw error;
      setTransactions(data);
    } catch (error) {
      setError('Error fetching transactions');
      console.error('Error fetching transactions:', error);
    }
  };

  const fetchTransactionSummary = async () => {
    setSummaryLoading(true);
    setError(null);
    try {
      const formattedTransactions = {
        transaction_data: transactions.map(
          ({ id, account_id, date, description, amount, type }) => ({
            id,
            account_id,
            date,
            description,
            amount,
            type,
          })
        ),
      };

      const response = await fetch('http://localhost:5050/query-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedTransactions),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Received data:', data); // Add this line for debugging

      if (data && data.response) {
        setTransactionSummary(data.response);
      } else {
        throw new Error('Invalid response format from server');
      }
    } catch (error) {
      console.error('Error fetching transaction summary:', error);
      setError(`Error fetching transaction summary: ${error.message}`);
    } finally {
      setSummaryLoading(false);
    }
  };

  const fetchExpensesData = async (months) => {
    try {
      const endDate = new Date('2024-11-30');
      const startDate = new Date('2024-06-01');

      const { data, error } = await supabase
        .from('transactions')
        .select('date, amount')
        .gte('date', startDate.toISOString())
        .lte('date', endDate.toISOString())
        .eq('type', 'debit');

      if (error) throw error;

      const monthlyExpenses = {};
      data.forEach((transaction) => {
        const month = new Date(transaction.date).toLocaleString('default', {
          month: 'short',
        });
        monthlyExpenses[month] =
          (monthlyExpenses[month] || 0) + Math.abs(transaction.amount);
      });

      const labels = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
      const expenseData = labels.map((month) => monthlyExpenses[month] || 0);

      setExpensesData({
        labels,
        datasets: [
          {
            label: 'Monthly Expenses',
            data: expenseData,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1,
          },
        ],
      });
    } catch (error) {
      setError('Error fetching expenses data');
      console.error('Error fetching expenses data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
              <Card.Title>Credit Card Balance</Card.Title>
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
            Transactions (Jun-Nov 2024)
            <div>
              <Button
                variant='outline-primary'
                onClick={fetchTransactionSummary}
                className='me-2'
                disabled={summaryLoading}
              >
                <FontAwesomeIcon icon={faMagicWandSparkles} />
                {summaryLoading ? ' Loading...' : ' Summarize'}
              </Button>
            </div>
          </Card.Title>
          {error && (
            <Alert variant='danger' className='mt-3'>
              {error}
            </Alert>
          )}
          {summaryLoading && (
            <div className='d-flex justify-content-center align-items-center mt-3 mb-3'>
              <div className='spinner-border text-primary me-2' role='status'>
                <span className='visually-hidden'>Loading...</span>
              </div>
              <span className='h5 mb-0 text-primary'>Loading Summary</span>
            </div>
          )}
          {!summaryLoading && transactionSummary && (
            <div className='alert alert-info mt-3 mb-3' role='alert'>
              <h5 className='alert-heading'>Summary:</h5>
              <pre
                style={{
                  whiteSpace: 'pre-wrap',
                  fontFamily: 'inherit',
                  marginBottom: 0,
                }}
              >
                {transactionSummary}
              </pre>
              <p className='mt-3 mb-0 text-muted'>
                <small>
                  <em>
                    Disclaimer: This summary is generated by AI. Please use with
                    discretion.
                  </em>
                </small>
              </p>
            </div>
          )}

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Type</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{new Date(transaction.date).toLocaleDateString()}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.type}</td>
                  <td
                    className={
                      transaction.type === 'debit'
                        ? 'text-danger'
                        : 'text-success'
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
            Expenses (Jun-Nov 2024)
          </Card.Title>
          {expensesData.labels && (
            <div style={{ height: '200px' }}>
              <Bar
                data={expensesData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Dashboard;
