

export const Contact = () => {
    return (
        <>
            <form>
                <label htmlFor="fname">First name:</label><br />
                <input type="text" id="fname" name="fname" placeholder="Your name" /><br />
                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" name="email" placeholder="Your email" /><br />
                <label htmlFor="question">Yor question:</label><br />
                <textarea name="question" id="question" cols="20" rows="10"></textarea><br /><br />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}