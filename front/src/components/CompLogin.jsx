import React, {useRef, useState} from 'react';
import { postFetchData } from '../util/fetchDatas';

export default function CompLogin() {
    const idRef = useRef(null);
    const pwdRef = useRef(null);
    const initForm = {id: '', pwd: ''};
    const [form, setForm] = useState(initForm);

    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value})
    }
    const handleFormSubmit = async(e) => {
        e.preventDefault();

        if(idRef.current.value === '') {
            alert('아이디를 입력해주세요');
            idRef.current.focus();
        }else if(pwdRef.current.value === '') {
            alert('비밀번호를 입력해주세요');
            pwdRef.current.focus();
        }else {
            const jsonData = await postFetchData('/api/post', form);
            console.log('result ->', jsonData.result);
            jsonData.result? alert('등록 성공!!') : alert('등록 실패!!');

        }

    }

    return (
        <div style={{width: "1000px", margin: "auto"}}>
            <h1>Post :: 로그인 폼</h1>
            <form onSubmit={handleFormSubmit}>
                <li>
                    <label htmlFor="id">아이디</label>
                    <input  type="id" 
                            id="id"
                            name="id"
                            ref={idRef}
                            value={form.id}
                            onChange={handleFormChange}
                            />
                </li>
                <li>
                    <label htmlFor="pwd">비밀번호</label>
                    <input type="password"
                            id="pwd"
                            name="pwd" 
                            ref={pwdRef}
                            value={form.pwd}
                            onChange={handleFormChange}
                            />
                </li>
                <li>
                    <button type='submit'>로그인</button>
                    <button type='button'
                            onClick={() => {setForm(initForm)}}>초기화</button>
                </li>
            </form>
        </div>
    );
}

