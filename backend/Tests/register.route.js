process.env.NODE_ENV = 'test';
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const app = require('../app');


chai.use(chaiHttp);
describe('Test the register path', () => {

    it('should return 200', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
    it('should return an html page with code 200', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                expect(res).to.be.html;
                done();
            });
    });
    it('should return 404 when there is an invalid path', (done) => {
        chai.request(app)
            .get('/failed')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });
    it('should return the 404 code and html the page when there is an invalid path', (done) => {
        chai.request(app)
            .get('/failed')
            .end((err, res) => {
                res.should.have.status(404);
                expect(res).to.be.html;
                done();
            });
    });
    it('should return the 201 code with the jwt validating if the user was successfully register in the db', (done) => {
        chai.request(app)
            .post('/register')
            .set('content-type', 'application/json')
            .send({
                username: "testloginuser1",
                password: "testpassword"
            })
            .end((err, res) => {
                res.should.have.status(201);
                expect(res).to.be.string;
                done();
            });


    });
    it('should return the 403 code when there is an actual user in de db', (done) => {
        chai.request(app)
            .post('/register')
            .set('content-type', 'application/json')
            .send({
                username: "testloginuser",
                password: "testpassword"
            })
            .end((err, res) => {
                res.should.have.status(403);
                expect(res).to.be.string;
                done();
            });


    });
});