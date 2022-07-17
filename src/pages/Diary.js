import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryStateContext } from '../App';
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';

import { getStringDate } from '../util/date';
import { emotionList } from '../util/emotion';


const Diary = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const diaryList = useContext(DiaryStateContext);
    const [data, setData] = useState();

    useEffect(()=> {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `감정 일기장 - ${id}번 일기`;
    },[]);

    const goEdit = () => {
        navigate(`/edit/${data.id}`)
    };

    useEffect(()=> {
        if(diaryList.length >= 1){
            const targetDiary = diaryList.find(
                (it) => parseInt(it.id) === parseInt(id)
            );
            if(targetDiary){
                setData(targetDiary);
            }else{
                alert("일기가 존재하지 않습니다.")
                navigate('/', {replace: true})
            }
        }
    },[id, diaryList]);

    if(!data){
        return <div className='DiaryPage'>로딩중입니다...</div>;
    }else{
        const curEmotionData = emotionList.find(
            (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
        );
    
        console.log(curEmotionData);

        return (
            <div className='DiaryPage'>
                <MyHeader 
                    headText={`${getStringDate(new Date(data.date))} 기록`}
                    leftChild = {
                        <MyButton text={"< 뒤로가기"} onClick={()=> navigate(-1)} />
                    }
                    rightChild = {
                        <MyButton text={"수정하기"} onClick={goEdit} />
                    }
                />
                <article>
                    <section>
                        <h4>오늘의 감정</h4>
                        <div className={['diary_img_wrapper', `diary_img_wrapper_${data.emotion}`].join(" ")}>
                            <img src={curEmotionData.emotion_img} />
                            <div className='emotion_descript'>
                                {curEmotionData.emotion_descript}
                            </div>
                        </div>
                    </section>
                    <section>
                        <h4>오늘의 일기</h4>
                        <div className='diary_content_wrapper'>
                            <p>{data.content}</p>
                        </div>
                    </section>
                </article>
            </div>
        );
    };
};

export default Diary;