import LoginForm from '../components/LoginForm';
import Layout from '../components/Layout';
import { authInitialProps } from '../lib/auth';

export default function login(props) {
  return (
    <Layout title="Login" {...props}>
      <LoginForm />
    </Layout>
  );
}

LoginForm.getInitialProps = authInitialProps();
