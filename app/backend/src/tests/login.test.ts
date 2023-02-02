import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/userModel'

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Beckend tests - login route', () => {
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(User, "findOne")
      .resolves({
        username: 'Admin',
        role: 'admin',
        email: 'admin@admin.com',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
      } as User);
  });

  afterEach(() => {
    (User.findOne as sinon.SinonStub).restore();
  })

  // Casos de teste para sistema de validação de token de usuário
  it('Status 200(OK) response for VALID USER', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'admin@admin.com', password: 'secret_admin' })

    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.a('object');
    expect(chaiHttpResponse.body).to.haveOwnProperty('token');
  });

  it('Status 401(Unauthorized) response for INVALID USER requisition', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'invalid_user@admin.com', password: 'invalid_password' })

    expect(chaiHttpResponse).to.have.status(401);
    expect(chaiHttpResponse.body).to.be.a('object');
    expect(chaiHttpResponse.body.token.type).to.deep.equal({message:'Incorrect email or password'});
  });

  // Casos de teste para validação de email
  it('Status 400(BAD_REQUEST) response for an EMPTY EMAIL requisition', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: '', password: 'secret_admin' })

    expect(chaiHttpResponse).to.have.status(400);
    expect(chaiHttpResponse.body).to.be.a('object');
    expect(chaiHttpResponse.body).to.deep.equal({message: 'All fields must be filled'});
  })

  it('Status 401(Unauthorized) response for an INVALID EMAIL requisition', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'invalid_user', password: 'secret_admin' })

    expect(chaiHttpResponse).to.have.status(401);
    expect(chaiHttpResponse.body).to.be.a('object');
    expect(chaiHttpResponse.body).to.deep.equal({message: 'Incorrect email or password'});
  })

  // Casos de teste para vaidação de senha
  it('Status 400(BAD_REQUEST) response for an EMPTY PASSWORD requisition', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'admin@admin.com', password: '' })

    expect(chaiHttpResponse).to.have.status(400);
    expect(chaiHttpResponse.body).to.be.a('object');
    expect(chaiHttpResponse.body).to.deep.equal({message: 'All fields must be filled'});
  })

  it('Status 401(Unauthorized) response for an INVALID PASSWORD requisition', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'admin@admin.com', password: 'invalid_password' })

    expect(chaiHttpResponse).to.have.status(401);
    expect(chaiHttpResponse.body).to.be.a('object');
    expect(chaiHttpResponse.body).to.deep.equal({message: 'Incorrect email or password'});
  })
});

// Nota - Senha de admin: secret_admin