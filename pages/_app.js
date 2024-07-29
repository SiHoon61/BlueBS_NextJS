import '../styles/globals.css';
import '../styles/custom.css';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import AdminHeader from '../components/AdminPage/AdminHeader';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const isAdminRoute = router.pathname.startsWith('/admin');

    return (
        <>
            {isAdminRoute ? <AdminHeader /> : <Header />}
            <Component {...pageProps} />
            {!isAdminRoute && <Bottom />}
            <div id="modal" />
        </>
    );
}

export default MyApp;
