import fetch from "node-fetch";
import { expect } from "chai";
import Ajv from "ajv";
import schema_getpost from "../schema/reqresSchema.js";

describe("API Test Suite", function() {
    const baseURL = "https://reqres.in";

    it("Get Single User", async function () {
            const response = await fetch(`${baseURL}/api/users/2`);  
    
            // validasi HTP Status Code
            expect(response.status, 'ada yang salah').to.equal(200);
    });

    it("Create User Baru", async function () {
        const newPost = {
            name: "morpheus",
            job: "leader"
        };

        // hit
        const hasilpost = await fetch(`${baseURL}/api/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost),
        });

        // validasi HTP Status Code
        expect(hasilpost.status, 'ada yang salah').to.equal(2001);

        // validasi JSON Schema
        const ajv = new Ajv();
        const data = await hasilpost.json();
        const cekcek = ajv.compile(schema_getpost);
        const hasil = cekcek(data)

        expect(hasil, 'validasi json schema ada yang salah').to.be.true;
    });
});