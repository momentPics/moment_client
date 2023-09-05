import { styled } from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const MomentBody = ({ Outlet }: any) => {
  return (
    <Layout>
      <Header />
      <Outlet />
      <Footer />
    </Layout>
  );
};

export default MomentBody;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 36rem;
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;
`;