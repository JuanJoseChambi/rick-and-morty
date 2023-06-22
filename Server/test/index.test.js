const app = require('../src/app');
const session = require('supertest');
const agent = session(app);
const users = require("../src/utils/users")

describe('GET /rickandmorty/character/:id',() => {
    it('Responde con status: 200', async () => {
        await agent.get('/rickandmorty/character/1').expect(200);
    })
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async() => {
    const {body} = (await agent.get('/rickandmorty/character/1'));
        expect(body).toHaveProperty("id");
        expect(body).toHaveProperty("name");
        expect(body).toHaveProperty("species");
        expect(body).toHaveProperty("gender");
        expect(body).toHaveProperty("status");
        expect(body).toHaveProperty("origin");
        expect(body).toHaveProperty("image");
    })
    it('Si hay un error responde con status: 500',async () => {
        await agent.get('/rickandmorty/character/:id').expect(500);
    })
})
describe("GET /rickandmorty/login",() => {
    it("Login True",async () => {
        const {body} = await agent.get(`/rickandmorty/login?email=ejemplo@gmail.com&password=Password1`);
        expect(body.access).toEqual(true)
    })
    it("Login False",async () => {
        const {body} = await agent.get(`/rickandmorty/login?email=EsteMal&password=EsteMal`);
        expect(body.access).toEqual(false)
    })
})

describe("POST /rickandmorty/fav", () => {
    const char1 = {id:1, name:"jose"}
    const char2 = {id:2, name:"Ana"}

    it("Favs",async () => {
       const {body} = await agent.post("/rickandmorty/fav").send(char1);
       expect(body).toContainEqual(char1)
    })
    it("No Fav", async() => {
        const {body} = await agent.post("/rickandmorty/fav").send(char2);
        expect(body).toContainEqual(char1)
        expect(body).toContainEqual(char2)
    })
})

describe("DELETE /rickandmorty/fav/:id", () => {
    const char1 = {id:1, name:"jose"}
    const char2 = {id:2, name:"Ana"}

    it("Id Incorrecto", async () => {
        const {body} = await agent.delete("/rickandmorty/fav/2131442");
        expect(body).toContainEqual(char1)
        expect(body).toContainEqual(char2)
    })
    it("Id Correcto", async() => {
        const {body} = await agent.delete("/rickandmorty/fav/1");
        expect(body).not.toContainEqual(char1)
    })
})