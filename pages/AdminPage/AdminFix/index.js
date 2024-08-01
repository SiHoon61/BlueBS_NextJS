import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

//style
import {
    NewsContainer,
    Title,
    DataBox,
    DataImgs,
    DataDate,
    DataTitle,
    FixBox,
    DateText,
    FixButton,
    DeleteButton,
} from './style';

//modal
import FixModal from '../../../modal/PostFixModal/PostFixModal';
import ModalPortal from '../../../modal/ModalPortal';


const AdminFix = () => {
    const router = useRouter();
    const [posts, setPosts] = useState([]);
    const [modalState, setModalState] = useState(false);
    const [modalSelect, setModalSelect] = useState('');
    const [modalData, setModalData] = useState('');
    const handleOpenModal = (props) => {
        setModalData(-1);
        setModalSelect(props);
        setModalState(true);
    };
    const handleCloseModal = (props) => {
        setModalState(false);
        setModalData(props);
    };

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/verifyToken`, {
                    withCredentials: true // 쿠키를 포함하여 요청
                });
                console.log(response.data);
            } catch (error) {
                console.error('Token verification failed:', error);
                router.push('/AdminLogin');
            }
        };
        const getPosts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/dataroom`);
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        //verifyToken();
        getPosts();
    }, [modalData]);

    const referenceHandler = (props) => {
        router.push(`/AdminPage/AdminFix`, { state: props });
    }

    const deleteHandler = async (props) => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/delete?id=${props}`);
            alert( '글이 삭제되었습니다');
            setModalData(props);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    // app.get('/dataroom', async (req, res) => {
    //     try {
    //         const { rows } = await sql`SELECT (id, title, date, jpg) FROM reference`;
    //         const formattedRows = rows.map(row => ({
    //             ...row,
    //             jpg: row.jpg ? row.jpg.toString('base64') : null
    //         }));
    //         res.json(formattedRows);
    //     } catch (err) {
    //         console.error('Error retrieving data from database:', err);
    //         res.status(500).json({ message: 'Internal server error' });
    //     }
    // });

    return (
        <>
            <NewsContainer>
                <Title>
                    수정/삭제를 원하시는 글을 선택하세요
                </Title>
                {posts.map((list, index) => (
                    <DataBox key={index} onClick={() => {
                        referenceHandler(list.id)
                    }}>
                        <DataImgs
                            src={`data:image/jpeg;base64,${list.jpg}`}
                            alt="dataimg"
                        />
                        <DataTitle>
                            {list.title}
                        </DataTitle>
                        <DataDate>
                            <DateText>
                                {list.date}
                            </DateText>
                            <FixBox>
                                <FixButton onClick={() => {
                                    handleOpenModal([list.id, list.jpg]);
                                }}>
                                    수정
                                </FixButton>
                                <DeleteButton onClick={() => {
                                    deleteHandler(list.id);
                                }}>
                                    삭제
                                </DeleteButton>
                            </FixBox>
                        </DataDate>
                    </DataBox>
                ))}
            </NewsContainer>
            {modalState && (
                <ModalPortal>
                    <FixModal onClose={handleCloseModal} show={modalState} content={modalSelect} />
                </ModalPortal>
            )}
        </>
    );
};

export default AdminFix;