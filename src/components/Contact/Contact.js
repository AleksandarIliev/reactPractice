import { useState } from "react";

export const Contact = () => {
    const [name, setName] = useState('Enter your name');
    const [email, setEmail] = useState('Your email');
    const [question, setQuestion]= useState('Write your question here');

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const onNameHandler = (e) => {
        setName(e.target.value);
    }

    const onEmailHandler = (e) => {
        setEmail(e.target.value);
    }

    const onQuestionHandler = (e) => {
        setQuestion(e.target.value);
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <br />
                <label htmlFor="fname">First name: </label><br />
                <input type="text" id="fname" name="fname" value={name} onChange={onNameHandler} /><br />
                <label htmlFor="email">Email: </label><br />
                <input type="email" id="email" name="email" value={email} onChange={onEmailHandler} /><br />
                <label htmlFor="question">Yor question: </label><br />
                <textarea name="question" id="question" cols="20" rows="10" value={question} onChange={onQuestionHandler} ></textarea><br /><br />
                <input type="button" value="Submit" onClick={onSubmit}/>
            </form>
        </>
    );
}