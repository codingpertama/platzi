import { Card, FileInput, Label } from "flowbite-react";

export default function ProfileCard({ item }) {
    return (
        <Card className="min-h-screen w-full">
            <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col items-center p-6">
                    <img
                        src={item.avatar}
                        alt="profile"
                        className="mb-4"
                    />

                    <h2 className="text-lg font-semibold text-neutral-50">{item.name}</h2>
                    <p className="text-sm text-neutral-50">Saya adalah kolektor sepatu Abibas</p>
                </div>
                <div className="p-6">

                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="text-neutral-50">Name</p>
                            <p className="text-neutral-400">{item.name}</p>
                        </div>

                        <div>
                            <p className="text-neutral-50">Role</p>
                            <p className="text-neutral-400">{item.role}</p>
                        </div>

                        <div>
                            <p className="text-neutral-50">Email</p>
                            <p className="text-neutral-400">{item.email}</p>
                        </div>

                        <div>
                            <p className="text-neutral-50">Password</p>
                            <p className="text-neutral-400">{"*".repeat(item.password?.length)}</p>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-center mt-3">
                        <Label
                            htmlFor="dropzone-file"
                            className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                            <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                <svg
                                    className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <FileInput id="dropzone-file" className="hidden" />
                        </Label>
                    </div>
                </div>
            </div>
        </Card>
    );
}
