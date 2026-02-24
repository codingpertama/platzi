import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Toast, ToastToggle } from "flowbite-react";
import { HiCheck, HiExclamation, HiX } from "react-icons/hi";

export default function Login() {
    const [formValue, setFormValue] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    function handleSubmitForm() {
        // console.log(formValue);
        if (formValue.email == "" || formValue.password == "") {
            setError("Gagal! Pastikan email dan password terisi.");
        } else {
            setError("");
        }
    }

    return (
        <>
            {
                error != "" && (
                    <div className="flex justify-end pe-25 w-full">
                    <Toast className="bg-red-100 font-bold">
                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                            <HiX className="h-5 w-5" />
                        </div>
                        <div className="ml-3 text-sm font-normal">{error}</div>
                        <ToastToggle />
                    </Toast>
                    </div>
                )
            }
            <div className="block mx-auto my-5 w-4xl">
                <h1 className="text-center font-bold text-2xl mb-3">LOGIN</h1>
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1">Your email</Label>
                        </div>
                        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required onKeyUp={(e) => setFormValue({ ...formValue, email: e.target.value })} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1">Your password</Label>
                        </div>
                        <TextInput id="password1" type="password" required onKeyUp={(e) => setFormValue({ ...formValue, password: e.target.value })} />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <Button type="button" onClick={handleSubmitForm}>Submit</Button>
                </form>
            </div>
        </>
    );
}