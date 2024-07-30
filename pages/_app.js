import { useRouter } from 'next/router';
import Header from '../components/Header/Header';
import Bottom from '../components/Bottom/Bottom';
import AdminHeader from '../components/AdminHeader/AdminHeader';
import '../styles/globals.css';

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
