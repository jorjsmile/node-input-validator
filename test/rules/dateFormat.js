const assert = require('assert');

const Validator = require('../../index');


let r = {};


describe('dateFormat', function () {

    it('validation should pass', async () => {

        const v = new Validator(
            { attribute: '2018-12-26' },
            { attribute: 'dateFormat:YYYY-MM-DD' }
        );

        const matched = await v.check();

        assert.equal(matched, true);

    });

    it('validation should pass', async () => {

        const v = new Validator(
            { attribute: '2018/01/26' },
            { attribute: 'dateFormat:YYYY/MM/DD' }
        );

        const matched = await v.check();

        assert.equal(matched, true);

    });

    it('validation should fail: invalid value', async () => {

        const v = new Validator(
            { attribute: '12 12 18' },
            { attribute: 'dateFormat:YYYY-MM-DD' }
        );

        const matched = await v.check();

        assert.equal(matched, false);

        assert.equal(v.errors.attribute.message, v.parseMessage('dateFormat', 'attribute', '', 'YYYY-MM-DD'));

    });



});
