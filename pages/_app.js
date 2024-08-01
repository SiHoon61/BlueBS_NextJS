import { useRouter } from 'next/router';
import Header from '../components/Header/Header';
import Bottom from '../components/Bottom/Bottom';
import AdminHeader from '../components/AdminHeader/AdminHeader';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const isAdminPage = router.pathname.startsWith('/AdminPage');
    const isAdminLogin = router.pathname.startsWith('/admin');

    return (
        <>
            {isAdminPage ? (
                <AdminHeader />
            ) : isAdminLogin ? null : (
                <Header />
            )}
            <Component {...pageProps} />
            {isAdminPage ? (
                null
            ) : isAdminLogin ? null : (
                    <Bottom />
            )}
            <div id="modal" />
        </>
    );
}

export default MyApp;
