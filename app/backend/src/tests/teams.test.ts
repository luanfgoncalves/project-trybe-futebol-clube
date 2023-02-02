import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Teams from '../database/models/teamsModel'
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Beckend tests - teams route', () => {


  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(Teams, "findOne")
      .resolves({
        teamName: 'Admin',
      } as Teams);
  });

  afterEach(() => {
    (Teams.findOne as sinon.SinonStub).restore();
  })

  it('Status 200(OK) response for an ALL TEAMS requisition', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/teams')
      .send()

    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.a('array');
    expect(chaiHttpResponse.body).to.have.lengthOf(16);
    expect(chaiHttpResponse.body[0]).to.deep.equal({id:1, teamName:'Avaí/Kindermann'});
    expect(chaiHttpResponse.body[15]).to.deep.equal({id:16, teamName:'São Paulo'});

  });

  it('Status 200(OK) response for a SINGLE TEAM requisition', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/teams/2')
      .send()

    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.a('array');
    expect(chaiHttpResponse.body[0]).to.deep.equal({id:2, teamName:'Bahia'});

  });

})