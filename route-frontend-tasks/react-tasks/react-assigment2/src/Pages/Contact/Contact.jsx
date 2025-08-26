import TwoLinesOneStar from "../../components/two-lines-one-star/TwoLinesOneStar.jsx";
export default function Contact()
{
    return <>
        <h1>conatct section</h1>
        <TwoLinesOneStar />
        <form action="">
            <input type="text" placeholder="userName"/>
            <input type="text" placeholder="userAge"/>
            <input type="email"placeholder="userEmail"/>
            <input type="text" placeholder="userPassword"/>
            <button formAction="submit">send Message</button>
        </form>
    </>
}