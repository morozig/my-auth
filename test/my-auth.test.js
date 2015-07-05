/* Uncomment for debugging */
// function describe(txt, fn){fn()};
// function it(txt, fn){fn()};

var should = require('chai').should();
var proxyquire =  require('proxyquire');
var myHomeDir = '';
var homeDirStub = function(){
    return myHomeDir;
};
var myAuth = proxyquire('../build/package/', { 'os-homedir': homeDirStub });

describe('#myAuth()', function(){
    it('should read properties from valid mercurial.ini', function(){
        myHomeDir = 'test/valid';
        var auth = myAuth();
        auth.should.have.property('user', 'hg-user');
        auth.should.have.property('password', 'hg-password');
    })
})

