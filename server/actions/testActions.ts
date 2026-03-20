"use server";

export async function getUsers () {
    return [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
    ]
}