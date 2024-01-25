import LoginForm from "./LoginForm1";
import {render,screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

describe("Login button",()=>{
    test(
        "render login button",()=>{
            render(
                <BrowserRouter>
                <LoginForm/>
                </BrowserRouter>
            )
            const btn= screen.findAllByRole("button");
            expect(btn)
        }

    );
})
