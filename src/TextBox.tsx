import { useState } from "react";
import { Form } from "react-bootstrap"
import Button from "react-bootstrap/esm/Button"
export default function TextBox() {

    const [value, setValue] = useState('');
    const [error, setError] = useState<string | null>(null);


    const isValidEmail = (value: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(value)) {
            setError('Please enter a valid email address');
        } else {
            setError('');
        }
        return /\S+@\S+\.\S+/.test(value);
    }

    const handleSubmit = (event: any) => {

        console.log("email1:" + value);
        if (!isValidEmail(value)) {
            event.preventDefault();
            setError("insert a valid email address");
        } else {
            setError(null);
            console.log(error);
        }

    };


    return (
        <>
            <div className="boxDiv">
                <div>
                    <div className="title text-uppercase">
                        <div className="pink display-2">We're</div>
                        <div className="display-2 fw-bolder">coming</div>
                        <div className="display-2 fw-bolder">soon</div>
                    </div>
                    <div className="text pink">
                        Hello fellow shoppers! We're currently building our new fashion store.
                        Add your email below to stay up-to-date with announcements and our launch deals.
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <div className="emailDiv">
                            <input placeholder="Email Address" type="email" id="email" autoComplete="true" value={value}
                                onChange={(e: any) => setValue(e.target.value)}>

                            </input>
                            {error && <div className="error"><img src="icon-error.svg" alt="error" /></div>}
                            <a href="mailto:address@mail.com"> <Button className="submitbtn" type="submit" > <img src="icon-arrow.svg" alt="arrow" />
                            </Button></a>
                        </div>
                        <div className="errorText" style={{ color: "red" }}>{error}</div>

                    </Form>
                </div>
            </div>
        </>
    )
}